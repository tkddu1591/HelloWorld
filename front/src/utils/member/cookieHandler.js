import { Cookies } from 'react-cookie';

const cookies = new Cookies();
export const setCookie = (name, value, options) => {
    cookies.set(name, value, options);
};
export const getCookie = (name) => {
    return cookies.get(name);
};
export const removeCookie = (name, options) => {
    cookies.remove(name, options);
};

/*
// 사용 예시
    import { setCookie, getCookie, removeCookie } from './path-to-your-cookies-file';

    // 쿠키 저장
    setCookie('myCookie', 'cookieValue', { path: '/' });

    // 쿠키 가져오기
    const cookieValue = getCookie('myCookie');
    console.log(cookieValue); // 쿠키 값 출력

    // 쿠키 삭제
    removeCookie('myCookie', { path: '/' });
*/