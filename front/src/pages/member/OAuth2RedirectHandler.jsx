import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {API_BASE_URL, API_FRONT_URL} from "../../App";
import {REST_API_KEY, SECRET_KEY} from "../../utils/uri/oauth";
import LoadingIcon from "../../components/Icon/LoadingIcon";

function OAuth2RedirectHandler() {
    let params = new URL(document.URL).searchParams;
    let code = params.get('code');
    let navigate = useNavigate();
    const { provider } = useParams();

    const redirectUri = `${API_FRONT_URL}/login/oauth2/${provider}`;
    const endPointUri = "https://kauth.kakao.com/oauth/token";
    const data = {
        "grant_type": "authorization_code",
        "client_id": `${REST_API_KEY}`,
        "redirect_uri": redirectUri,
        "code": code,
        "client_secret": `${SECRET_KEY}`,
    }
    const sendData = new URLSearchParams(data).toString();
    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        }
    }
    useEffect(() => {
        const social_login = () => {
            axios.post(endPointUri, data, config).then((response) => {
                console.log("완료");

            }).catch((err) => {
                alert('로그인에 실패했습니다. \n다시 시도해주세요.');
                /*navigate("/member/login");*/
            })
        }
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