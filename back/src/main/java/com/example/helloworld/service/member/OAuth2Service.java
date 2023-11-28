package com.example.helloworld.service.member;

import com.example.helloworld.dto.member.security_oauth2.*;
import com.example.helloworld.entity.member.MemberEntity;
import com.example.helloworld.repository.member.MemberRepository;
import com.example.helloworld.security.MemberDetails;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.Optional;

@Log4j2
@Getter
@Service
@RequiredArgsConstructor
public class OAuth2Service extends DefaultOAuth2UserService {

    private final MemberRepository memberRepository;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        log.info(" - loadUser > userRequest : " + userRequest);
        // social 발행 된 jwt accessToken (그림의 4번 과정)
        String accessToken = userRequest.getAccessToken().getTokenValue();
        log.info(" - loadUser > accessToken : " + accessToken);

        String provider = userRequest.getClientRegistration().getRegistrationId();
        log.info(" - loadUser > provider : " + provider);

        Map<String, Object> attributes = super.loadUser(userRequest).getAttributes();
        log.info(" - loadUser > attributes : " + attributes);

        OAuth2MemberInfo memberInfo = generateMemberInfo(provider, attributes);
        /*if(memberInfo == null) return null;*////////////////////////////////////////////////////
        log.info(" - loadUser > memberInfo : " + memberInfo);

        // 회원가입 처리(여기서 id는 카카오에 있는 고유 식별번호.)
        String id    = memberInfo.getProviderId();
        String email = memberInfo.getEmail();
        String nick  = memberInfo.getNickname();

        Optional<MemberEntity> findMember = memberRepository.findById(provider+"_"+id);
        log.info(" - loadUser > findMember : " + findMember);

        MemberEntity user = null;

        if(findMember.isEmpty()) { // 최초  소셜 로그인 동의 후 가입
            log.info(" - loadUser > findMember is Empty");
            user = MemberEntity.builder()
                    .uid(provider+"_"+id)
                    .email(email)
                    .nick(nick)
                    .build();
            memberRepository.save(user);

        }else { // 회원가입이 된 사용자 조회
            log.info(" - loadUser > findMember is Ok");
            user = findMember.get();
        }
        // 세션으로 저장.
        log.info(" - loadUser > end...");
        return new MemberDetails(user, attributes);
    }

    private OAuth2MemberInfo generateMemberInfo(String provider, Map<String, Object> attributes) {
        if(provider.equals(Provider.KAKAO.getName())) {
            log.info(" - generateMemberInfo > provider_KAKAO");
            return new KakaoInfo(attributes);

        } else if(provider.equals(Provider.NAVER.getName())) {
            log.info(" - generateMemberInfo > provider_NAVER");
            return new NaverInfo(attributes);

        } else if(provider.equals(Provider.GOOGLE.getName())) {
            log.info(" - generateMemberInfo > provider_GOOGLE");
            return new GoogleInfo(attributes);

        } else if(provider.equals(Provider.GITHUB.getName())) {
            log.info(" - generateMemberInfo > provider_GITHUB");
            return new GithubInfo(attributes);
        }
        log.info(" - generateMemberInfo > 로그인 실패");
        return null;
    }

    public Map<String, Object> getToken(String code) {
        return null;
    }
}