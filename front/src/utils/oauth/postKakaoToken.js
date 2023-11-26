import axios from "axios";
import {API_BASE_URL} from "../../App";
import {login} from "../member/login";
import {getMyInfo} from "../member/getMyInfo";


export const postKakaoToken = (data, navigate, dispatch) => {
    axios
        .post(`${API_BASE_URL}/login/social/${data.provider}`, data)
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
            }else
                alert('로그인에 실패했습니다. \n아이디, 비밀번호를 다시 확인해주세요.');
        })
        .catch((error)=>{
            alert('로그인에 실패했습니다. 잠시 후 다시 시도해주세요.');
            throw error.message;
        })}