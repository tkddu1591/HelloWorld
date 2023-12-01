import axios from "axios";
import {API_BASE_URL, apiClient} from "../../App";
import {login} from "../member/login";
import {getMyInfo} from "../member/getMyInfo";
import {logout} from "../member/logout";


export const postKakaoToken = async (data, navigate, dispatch) => {
    apiClient
        .post(`/login/social/${data.provider}`, data)
        .then((response)=>{
            if(response.data.accessToken) {
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
        })
        .catch((error)=>{
            alert('로그인에 실패했습니다. 잠시 후 다시 시도해주세요.');
            logout(navigate, dispatch);
            throw error.message;
        })
}