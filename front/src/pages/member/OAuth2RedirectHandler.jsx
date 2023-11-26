import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {API_FRONT_URL} from "../../App";
import {REST_API_KEY, SECRET_KEY} from "../../utils/uri/oauth";
import LoadingIcon from "../../components/Icon/LoadingIcon";
import {urlEncoded} from "../../utils/uri/urlEncoded";
import {getKakaoUserInfo} from "../../utils/oauth/getKakaoUserInfo";
import {login} from "../../utils/member/login";
import {getMyInfo} from "../../utils/member/getMyInfo";
import {useDispatch} from "react-redux";
import {logout} from "../../utils/member/logout";
import {postKakaoToken} from "../../utils/oauth/postKakaoToken";

function OAuth2RedirectHandler() {
    let params = new URL(document.URL).searchParams;
    let code = params.get('code');
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const { provider } = useParams();

    // code를 보내 token 요청할 변수들
    const redirectUri = `${API_FRONT_URL}/login/oauth2/${provider}`;
    const endPointUri = "https://kauth.kakao.com/oauth/token";
    const data = {
        "grant_type": "authorization_code",
        "client_id": `${REST_API_KEY}`,
        "redirect_uri": redirectUri,
        "code": code,
        "client_secret": `${SECRET_KEY}`,
    }
    const formData = urlEncoded(data);
    
    // token을 보내 정보 요청할 변수들
    /*const [returnValue, setReturnValue] = useState({
        'token_type' : '',
        'access_token': '',
        'expires_in': '',
        'refresh_token': '',
        'refresh_token_expires_in': '',
        'scope': '',
    });*/

    const social_login = async () => {
        try {
            const response = await axios.post(endPointUri, formData);

            console.log("완료");
            console.log("data : " + JSON.stringify(response.data));

            const data = await getKakaoUserInfo(response.data.access_token);
            const arr = [data.id.toString(), data.kakao_account.email, data.properties.nickname];
            console.log("myInform : " + JSON.stringify(data))

            const loginData = {
                'provider_id': data.id,
                'email': data.kakao_account.email,
                'nick': data.properties.nickname,
                'accessToken': response.data.access_token,
                'refreshToken': response.data.refresh_token,
                'myInfo': arr.join(','),
                'provider': provider
            };
            postKakaoToken(loginData, navigate, dispatch);

            /*navigate("/");*/
        } catch (err) {
            alert('로그인에 실패했습니다. \n다시 시도해주세요.');
            logout(navigate, dispatch);
            navigate("/member/login");
        }
    }
    useEffect(() => {
        social_login();
    }, []);


    const [loadingText, setLoadingText] = useState("로그인 중입니다.");
    useEffect(() => {
        const intervalId = setInterval(() => {
            setLoadingText(prevText => {
                if (prevText === "로그인 중입니다.") {
                    return "로그인 중입니다..";
                } else if (prevText === "로그인 중입니다..") {
                    return "로그인 중입니다...";
                } else {
                    return "로그인 중입니다.";
                }
            });
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);


    return (
        <>
            <div style={{height: "400px", marginTop: "400px", textAlign:"center"}}>
                <LoadingIcon /> <br/><br/>
                {loadingText}
            </div>
        </>
    );
}

export default OAuth2RedirectHandler;