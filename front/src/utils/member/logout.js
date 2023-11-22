import {removeCookie} from "./cookieHandler";
import {getMyInfo} from "./getMyInfo";

export const logout = (navigate, dispatch) => {
    localStorage.removeItem('helloWorld_ACCESS_TOKEN');
    localStorage.removeItem('helloWorld_WELCOME_GREETING_HELLO');
    removeCookie('helloWorld_REFRESH_TOKEN', {
        maxAge: -1,
    });
    getMyInfo(dispatch);
    alert("로그아웃 되었습니다.");
    navigate('/');
}