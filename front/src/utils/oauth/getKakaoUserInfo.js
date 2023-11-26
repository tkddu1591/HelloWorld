import axios from "axios";

const getUserInfoUri = 'https://kapi.kakao.com/v2/user/me';
/*
    카카오로 부터 받은 accessToken을 전송하여 사용자 정보를 불러오는 메서드
 */
export const getKakaoUserInfo = async (access_token) => {
    const headers = {
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    };

    try {
        const response = await axios.get(getUserInfoUri, { headers });
        return response.data;
    } catch (err) {
        console.log('headers 3 : ' + headers.Authorization);
        console.error('에러가 발생했습니다. : ' + err);
        throw err;
    }
}