package com.example.helloworld.jwt;


import com.example.helloworld.dto.member.MemberDTO;
import com.example.helloworld.service.member.LoginService;
import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.security.SecurityException;
import jakarta.servlet.http.Cookie;
import lombok.Getter;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
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

    @Getter
    @Value("${jwt.accessToken_exp}")
    public int accessToken_expMin; // 단위는 minutes
    @Getter
    @Value("${jwt.refreshToken_exp}")
    public int refreshToken_expMin; // 단위는 minutes

    public JwtProvider(@Value("${jwt.secret}") String secret) {
        String secretKey_toBase64Encoded = Base64.getEncoder().encodeToString(secret.getBytes());
        this.issuer = "5Team-Project_HelloWorld.com";
        this.secretKey = Keys.hmacShaKeyFor(secretKey_toBase64Encoded.getBytes());
    }
    public Claims setClaims(MemberDTO memberDTO) {
        Claims claims = Jwts.claims();
        claims.put("email", memberDTO.getEmail());
        claims.put("nick", memberDTO.getNick());
        claims.put("type", memberDTO.getType());
        return claims;
    }
    public String createToken(MemberDTO memberDTO, int min) {
        Date issuedDate = new Date();
        Date expireDate = new Date(issuedDate.getTime() + Duration.ofMinutes(min).toMillis());

        return Jwts.builder()
                .setHeaderParam(Header.TYPE, Header.JWT_TYPE)
                .setIssuer(issuer)
                .setIssuedAt(issuedDate)
                .setExpiration(expireDate)
                .addClaims(setClaims(memberDTO))
                .signWith(secretKey, SignatureAlgorithm.HS256)
                .compact();
    }
    public String getEmailFromToken(String token) {
        return (String) Jwts.parser()
                .setSigningKey(secretKey)
                .parseClaimsJws(token)
                .getBody()
                .get("email");
    }

    public Cookie createCookie(String key, String token, int min) {
        Cookie cookie = new Cookie(key, token);
        cookie.setHttpOnly(true);
        cookie.setSecure(true);
        cookie.setPath("/");
        cookie.setMaxAge(min*60);
        return cookie;
    }

    public Claims getClaims(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(secretKey)
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    public Authentication getAuthentication(String token) {
        Claims claims = getClaims(token);
        String email = (String) claims.get("email");
        Integer type = (Integer) claims.get("type");

        List<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority("ROLE_" + type));
        User principal = new User(email, "pass", authorities);
        return new UsernamePasswordAuthenticationToken(principal, token, authorities);
    }

    public boolean validateToken(String token) {
        try {
            Jwts.parserBuilder()
                    .setSigningKey(secretKey)
                    .build()
                    .parseClaimsJws(token);
            return true;

        } catch (SecurityException | MalformedJwtException e) {
            throw new JwtCustomException(JwtCustomException.JWT_ERROR.MALFORM);
        } catch (ExpiredJwtException e) {
            throw new JwtCustomException(JwtCustomException.JWT_ERROR.EXPIRED);
        } catch (UnsupportedJwtException e) {
            throw new JwtCustomException(JwtCustomException.JWT_ERROR.BADTYPE);
        } catch (IllegalArgumentException e) {
            throw new JwtCustomException(JwtCustomException.JWT_ERROR.BADSIGN);
        }
    }


}