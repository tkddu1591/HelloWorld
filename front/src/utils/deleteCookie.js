/*
    쿠키의 네임을 입력해 쿠키를 삭제하는 메서드입니다.
     - inputType : cookieName
*/
import axios from "axios";
import {API_BASE_URL} from "../App";

export async function deleteCookie(cookieName) {
    /*document.cookie = `${cookieName}+=; expires=0; max-age=0; path=/;`;*/
    return new Promise((resolve, reject) => {
        axios.post(`${API_BASE_URL}/logoutCookie`, {
            "cookieName": cookieName
        })
        .then((response) => {
            if(response.data === "SUCCESS")
                alert('로그아웃 되었습니다.');
            else
                alert('로그아웃에 실패했습니다. 다시 시도해주세요.')

        })
        .catch((error) => {
            alert('로그아웃 오류. 다시 시도해주세요.');
            resolve(false);
        })
    })
}