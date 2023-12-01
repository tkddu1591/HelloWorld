import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {API_BASE_URL, API_FRONT_URL, apiClient} from "../../App";
import {NAVER_CLENT_ID, NAVER_SECRET_KEY, REST_API_KEY, SECRET_KEY, state} from "../../utils/uri/oauth";
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
    const redirectUri = `https://wonderful-genie-12322.netlify.app/login/oauth2/${provider}`;
    let endPointUri = "";

    if(provider === 'kakao') endPointUri = "https://kauth.kakao.com/oauth/token";
    if(provider === 'naver') endPointUri = "https://nid.naver.com/oauth2.0/token";

    const data_kakao = {
        "grant_type": "authorization_code",
        "client_id": `${REST_API_KEY}`,
        "redirect_uri": redirectUri,
        "code": code,
        "client_secret": `${SECRET_KEY}`,
    }

    const formData = urlEncoded(data_kakao);
    

    const social_login_kakao = async () => {
        try {
            const response = await axios.post(endPointUri, formData);
            const data = await getKakaoUserInfo(response.data.access_token, navigate, dispatch);
            const arr = [data.id.toString(), data.kakao_account.email, data.properties.nickname];

            const loginData = {
                'provider_id': data.id,
                'email': data.kakao_account.email,
                'nick': data.properties.nickname,
                'accessToken': response.data.access_token,
                'refreshToken': response.data.refresh_token,
                'myInfo': arr.join(','),
                'provider': provider
            };
            await postKakaoToken(loginData, navigate, dispatch);

            /*navigate("/");*/
        } catch (err) {
            console.error("에러 발생 : " + err);
            console.error("에러 발생 : " + err.message); // 에러 메시지
            alert('로그인에 실패했습니다. \n다시 시도해주세요.');
            console.log('axios 비동기 에러인 것 같음.');
            logout(navigate, dispatch);
            navigate("/member/login");
        }
    }
    const social_login_naver = async () => {
        try {
            const naver_data = {
                'grant_type': 'authorization_code',
                'client_id': `${NAVER_CLENT_ID}`,
                'client_secret': `${NAVER_SECRET_KEY}`,
                'code': code,
                'state': `${state}`
            }
            const response = await apiClient.post(`/login/social/token/naver`, naver_data);
            if(response.data.grantType === 'Bearer') {
                const data = {
                    'accessToken': response.data.accessToken,
                    'refreshToken': response.data.refreshToken,
                    'myInfo': response.data.myInfo,
                }
                login(data);
                getMyInfo(dispatch);
                navigate('/');
            }else {
                alert('로그인에 실패했습니다.');
                logout(navigate, dispatch);
            }


        } catch (err) {
            console.error('실패');
            console.error('err.name : ' + err.name);
            console.error('err.msg  : ' + err.message);

        }

    }
    useEffect(() => {
        if(provider === 'kakao') social_login_kakao();
        if(provider === 'naver') social_login_naver();
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