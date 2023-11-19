package com.example.helloworld.jwt;


import com.example.helloworld.dto.member.MemberDTO;
import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.security.SecurityException;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.time.Duration;
import java.util.ArrayList;
import java.util.Base64;
import java.util.Date;
import java.util.List;

@Log4j2
@Component
public class JwtProvider {

    private String issuer;
    private SecretKey secretKey;

    public JwtProvider(@Value("${jwt.secret}") String secret) {
        String secretKey_toBase64Encoded = Base64.getEncoder().encodeToString(secret.getBytes());
        this.issuer = "5Team-Project_HelloWorld.com";
        this.secretKey = Keys.hmacShaKeyFor(secretKey_toBase64Encoded.getBytes());
    }

    public Claims setClaims(MemberDTO memberDTO) {
        Claims claims = Jwts.claims();
        claims.put("email", memberDTO.getEmail());
        claims.put("nick", memberDTO.getNick());
        claims.put("name", memberDTO.getName());
        claims.put("gender", memberDTO.getGender());
        claims.put("type", memberDTO.getType());
        claims.put("isCondition", memberDTO.getIsCondition());

        return claims;
    }
    public String createToken(MemberDTO memberDTO, int min) {
        Date issuedDate = new Date();
        Date expireDate = new Date(issuedDate.getTime() + Duration.ofMinutes(min).toMillis());

        Claims claims = setClaims(memberDTO);

        String token = Jwts.builder()
                .setHeaderParam(Header.TYPE, Header.JWT_TYPE)
                .setIssuer(issuer)
                .setIssuedAt(issuedDate)
                .setExpiration(expireDate)
                .addClaims(claims)
                .signWith(secretKey, SignatureAlgorithm.HS256)
                .compact();

        return token;
    }
    public Claims getClaims(String token) {
        return Jwts.parserBuilder()
                // 서명 확인을 위해 secretKey set(jwt.secret)
                .setSigningKey(secretKey)
                // parser 객체 생성 완료.
                .build()
                // token을 parsing 및 서명 확인 후 JWS(JSON Web Signature) 객체 반환
                .parseClaimsJws(token)
                // JWS 객체에서 payload(claims) 추출.
                .getBody();
    } // JSON Web Token에서 claims 추출.
    public Authentication getAuthentication(String token) {
        Claims claims = getClaims(token);
        String email = (String) claims.get("email");
        String type  = (String) claims.get("type");

        List<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority("ROLE_" + type));
        User principal = new User(email, "pass", authorities);
        return new UsernamePasswordAuthenticationToken(principal, token, authorities);
    }

    public boolean validateToken(String token, HttpServletResponse response) {
        try {
            Jwts.parserBuilder()
                    .setSigningKey(secretKey)
                    .build()
                    .parseClaimsJws(token);
            return true;

        }  catch (SecurityException | MalformedJwtException e) {
            log.debug("잘못된 JWT 서명 입니다.");
            throw new MalformedJwtException("MalformedJwtException", e);

        } catch (ExpiredJwtException e) {
            log.debug("만료된 JWT 서명 입니다.");
            throw new ExpiredJwtException(null, null, "ExpiredJwtException", e);

        } catch (UnsupportedJwtException e) {
            log.debug("지원되지 않는 JWT 서명 입니다.");
            throw new UnsupportedJwtException("UnsupportedJwtException", e);

        } catch (IllegalArgumentException e) {
            log.debug("JWT 토큰이 잘 못 되었습니다.");
            throw new IllegalArgumentException("IllegalArgumentException", e);
        }
    }
}