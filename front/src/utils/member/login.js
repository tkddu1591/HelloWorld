import {setCookie} from "./cookieHandler";
/*
    myInfo는 "uid,email,nick"형태로 이뤄진 문자열
 */
export const login = (props) => {
    const {accessToken, refreshToken, isAutoLogin, myInfo, provider} = props
    console.log('myInfo : ' + myInfo)
    localStorage.setItem('helloWorld_ACCESS_TOKEN', accessToken);
    localStorage.setItem('helloWorld_WELCOME_GREETING_HELLO', myInfo);

    let maxAge = (isAutoLogin) ? (7 * 24 * 60 * 60) : (1 * 60 * 60);
    if(provider !== null) maxAge = (2 * 30 * 24 * 60 * 60);
    setCookie('helloWorld_REFRESH_TOKEN', refreshToken, {
        path: '/',
        secure: false,
        maxAge: maxAge,
    });
}