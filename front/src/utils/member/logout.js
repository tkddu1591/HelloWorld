import {removeCookie} from "./cookieHandler";
import {getMyInfo} from "./getMyInfo";

export const logout = (navigate, dispatch) => {
    let isLogin = localStorage.getItem('helloWorld_ACCESS_TOKEN') ? 1 : 0;
    localStorage.removeItem('helloWorld_ACCESS_TOKEN');
    localStorage.removeItem('helloWorld_WELCOME_GREETING_HELLO');
    removeCookie('helloWorld_REFRESH_TOKEN', {
        maxAge: -1,
    });
    document.cookie = `helloWorld_REFRESH_TOKEN=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;`;
    getMyInfo(dispatch);
    isLogin === 1 ? alert("로그아웃 되었습니다.") : alert('접근 권한이 없습니다.');
    navigate('/');
}