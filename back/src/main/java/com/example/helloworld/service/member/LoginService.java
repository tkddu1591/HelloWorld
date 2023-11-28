package com.example.helloworld.service.member;

import com.example.helloworld.dto.member.LoginDTO;
import com.example.helloworld.dto.member.MemberDTO;
import com.example.helloworld.dto.member.oauth2.NaverParams;
import com.example.helloworld.entity.member.MemberEntity;
import com.example.helloworld.jwt.JwtProvider;
import com.example.helloworld.repository.member.MemberRepository;
import com.example.helloworld.security.MemberDetails;
import com.example.helloworld.transform.member.MemberTransform;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.Cookie;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.*;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;

@Log4j2
@Service
@RequiredArgsConstructor
public class LoginService {

    private final AuthenticationManager authenticationManager;
    private final MemberRepository      memberRepository;
    private final MemberTransform       memberTransform;
    private final TokenService          tokenService;
    private final JwtProvider           jwtProvider;

    public Map<String, Object> defaultLogin(LoginDTO loginDTO) {
        log.info(" - defaultLogin > start!...");

        String email = loginDTO.getEmail();
        String pass = loginDTO.getPass();
        boolean isAutoLogin = loginDTO.isAutoLogin();
        log.info(" - defaultLogin > email       : " + email);
        log.info(" - defaultLogin > isAutoLogin : " + isAutoLogin);

        try {
            MemberDTO member = getMember(email, pass);
            member.setPass("YOU CANT'T SEE ME");
            log.info(" - defaultLogin > email : " + member.getEmail());

            int exp_refreshToken = jwtProvider.getRefreshToken_expMin();
            if(isAutoLogin) exp_refreshToken = 7*24*60;

            String accessToken  = jwtProvider.createToken(member, jwtProvider.getAccessToken_expMin());
            String refreshToken = jwtProvider.createToken(member, exp_refreshToken);
            String myInfo = member.getUid()+","+member.getEmail()+","+member.getNick();

            if(tokenService.saveRefreshToken(email, refreshToken) != null) {
                log.info(" - defaultLogin > refreshToken SAVED!!!!");
            };

            return Map.of("grantType", "Bearer",
                          "accessToken", accessToken,
                          "refreshToken", refreshToken,
                          "myInfo", myInfo);

        } catch (Exception e) {
            return Map.of("grantType", "None",
                          "message", e.getMessage());
        }
    }
    public Map<String, Object> socialLogin(LoginDTO login) {
        String[] myInfoArr = login.getMyInfo().split(",");
        String uid = login.getProvider()+"_"+login.getProvider_id();

        try {
            MemberDTO member = MemberDTO.builder()
                    .uid(uid)
                    .pass(login.getProvider())
                    .email(login.getEmail())
                    .nick(login.getNick())
                    .type(1)
                    .regIp(login.getRegip())
                    .build();

            if(memberRepository.countByUid(uid) == 0) {
                log.info(" - socialLogin > new Member!!!");
                memberRepository.save(memberTransform.toEntity(member));
            }

            MemberEntity memberEntity = memberRepository.findById(uid).get();
            MemberDTO memberDTO = memberTransform.toDTO(memberEntity);

            String accessToken  = jwtProvider.createToken(memberDTO, jwtProvider.accessToken_expMin);
            String refreshToken = jwtProvider.createToken(memberDTO, jwtProvider.refreshToken_expMin);
            String myInfo = memberDTO.getUid()+","+memberDTO.getEmail()+","+memberDTO.getNick();
            log.info(" - socialLogin > memberDTO : " + memberDTO);
            log.info(" - socialLogin > email : " + login.getEmail());
            log.info(" - socialLogin > myInfo : " + myInfo);

            if(tokenService.saveRefreshToken(memberDTO.getEmail(), refreshToken) != null) {
                log.info(" - socialLogin > refreshToken SAVED!!!!");
            };

            return Map.of("grantType", "Bearer",
                    "accessToken", accessToken,
                    "refreshToken", refreshToken,
                    "myInfo", myInfo);

        } catch (Exception e) {
            return Map.of("grantType", "None",
                    "message", e.getMessage());
        }
    }
    public MemberDTO getMember(String unique, String pass) {
        UsernamePasswordAuthenticationToken authenticationToken
                = new UsernamePasswordAuthenticationToken(unique, pass);

        MemberDetails memberDetails = (MemberDetails) authenticationManager
                .authenticate(authenticationToken)
                .getPrincipal();

        return memberTransform.toDTO(memberDetails.getMemberEntity());
    }
    public HashMap<String, String> getToken(NaverParams naverParams) {
        String getTokenURI = "https://nid.naver.com/oauth2.0/token";

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        HttpEntity<String> entity = generateNaverHttpEntity(naverParams, headers);

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.postForEntity(getTokenURI, entity, String.class);
        ResponseEntity<String> result = ResponseEntity.status(response.getStatusCode()).body(response.getBody());

        HttpStatusCode status = result.getStatusCode();

        HashMap<String, String> tokenBox = new HashMap<String, String>();
        try {
            if(status.is2xxSuccessful()) {
                ObjectMapper objectMapper = new ObjectMapper();
                JsonNode jsonNode = objectMapper.readTree(result.getBody());
                tokenBox.put("access_token", jsonNode.get("access_token").asText());
                tokenBox.put("refresh_token", jsonNode.get("refresh_token").asText());
                tokenBox.put("token_type", jsonNode.get("token_type").asText());
                tokenBox.put("expires_in", jsonNode.get("expires_in").asText());
                tokenBox.put("status", "200");
            }
        } catch (Exception e) {
            tokenBox.put("status", "500");
        }
        return tokenBox;
    }
    public String getNaverUserInfo(HashMap<String, String> tokenBox) {
        String headers = "Bearer " + tokenBox.get("access_token");
        String getUserInfoURI = "https://openapi.naver.com/v1/nid/me";

        try {
            HttpURLConnection connection = httpUrlConnect(getUserInfoURI);
            connection.setRequestMethod("GET");
            connection.setRequestProperty("Authorization", headers);

            BufferedReader bufferedReader;
            if(connection.getResponseCode() == HttpURLConnection.HTTP_OK) {
                bufferedReader = new BufferedReader(new InputStreamReader(connection.getInputStream()));
            } else {
                bufferedReader = new BufferedReader(new InputStreamReader(connection.getErrorStream()));
            }

            return bufferedReader.readLine();

        } catch (MalformedURLException e) {
            log.error(" - MalformedURLException : " + e.getCause());
            log.error(" - MalformedURLException : " + e.getMessage());

        } catch (IOException e) {
            log.error(" - IOException : " + e.getCause());
            log.error(" - IOException : " + e.getMessage());
        }
        return null;
    }

    public LoginDTO getMyInfo(String provider, NaverParams naverParams) {
        HashMap<String, String> result = getToken(naverParams);
        String lastResult = null;

        if(result.get("status").equals("200")) {
            log.info(" - getMyInfo > SUCCESS");
            lastResult = getNaverUserInfo(result);

        }else {
            log.info(" - getMyInfo > FAILED");
        }
        return decodingJSON(provider, lastResult);
    }

    public LoginDTO decodingJSON(String provider, String jsonString) {
        ObjectMapper objectMapper = new ObjectMapper();
        LoginDTO loginDTO = new LoginDTO();
        try {
            JsonNode jsonNode = objectMapper.readTree(jsonString);
            String id = jsonNode.path("response").path("id").asText();
            String nick = jsonNode.path("response").path("nickname").asText();
            String email = jsonNode.path("response").path("email").asText();
            loginDTO.setProvider(provider);
            loginDTO.setProvider_id(id);
            loginDTO.setNick(nick);
            loginDTO.setEmail(email);
            loginDTO.setMyInfo(id+","+email+","+nick);

        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
        return loginDTO;
    }

    public HttpURLConnection httpUrlConnect(String getUserInfoURI){
        try {
            URL url = new URL(getUserInfoURI);
            return (HttpURLConnection) url.openConnection();
        } catch (MalformedURLException e) {
            throw new RuntimeException("API URL이 잘못되었습니다. : " + getUserInfoURI, e);
        } catch (IOException e) {
            throw new RuntimeException("연결이 실패했습니다. : " + getUserInfoURI, e);
        }
    }

    public HttpEntity<String> generateNaverHttpEntity(NaverParams naverParams, HttpHeaders headers) {
        return new HttpEntity<>(
                "grant_type=authorization_code"
                        + "&client_id=" + naverParams.getClient_id()
                        + "&client_secret=" + naverParams.getClient_secret()
                        + "&code=" + naverParams.getCode(), headers);
    }

    /*public Cookie deleteCookie(String cookieName) {
        return jwtProvider.createCookie(cookieName, null, 0);
    }*/
    /*public LocalDateTime currentTime() {
        return LocalDateTime.now().atZone(ZoneId.of("Asia/Seoul")).toLocalDateTime();
    }*/
}