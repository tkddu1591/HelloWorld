package com.example.helloworld.service.member;

import com.example.helloworld.dto.member.oauth2.*;
import com.example.helloworld.entity.member.MemberEntity;
import com.example.helloworld.repository.member.MemberRepository;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
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

    /* 카카오 유저 정보 반환 형태.
    {
        id=2803163587,
        connected_at=2023-05-23T22:59:40Z,
        properties={nickname=별명},
        kakao_account={
            profile_nickname_needs_agreement=false,
            profile={nickname=별명},
            has_email=true,
            email_needs_agreement=false,
            is_email_valid=true,
            is_email_verified=true,
            email=email@naver.com
        }
    }
     */


    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        // social 발행 된 jwt accessToken (그림의 4번 과정)
        String accessToken = userRequest.getAccessToken().getTokenValue();
        log.info("OAuth2UserService...1 : " + accessToken);

        String provider = userRequest.getClientRegistration().getRegistrationId();
        log.info("OAuth2UserService...2 : " + provider);

        Map<String, Object> attributes = super.loadUser(userRequest).getAttributes();
        log.info("OAuth2UserService...3 : " + attributes);

        OAuth2MemberInfo memberInfo = generateMemberInfo(provider, attributes);
        /*if(memberInfo == null) return null;*////////////////////////////////////////////////////
        log.info("OAuth2UserService...4 : " + memberInfo);

        // 회원가입 처리(여기서 id는 카카오에 있는 고유 식별번호.)
        String id    = memberInfo.getProviderId();
        String email = memberInfo.getEmail();
        String nick  = memberInfo.getNickname();

        Optional<MemberEntity> result = memberRepository.findById(provider+"_"+id);
        log.info("result : " + result);

        MemberEntity user = null;

        if(result.isEmpty()) { // 최초  소셜 로그인 동의 후 가입
            user = MemberEntity.builder()
                    .uid(provider+"_"+id)
                    .email(email)
                    .nick(nick)
                    .build();
            memberRepository.save(user);

        }else { // 회원가입이 된 사용자 조회
            user = result.get();
        }
        // 세션으로 저장.
        return user;
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
}