import {API_BASE_URL, API_FRONT_URL} from "../../App";
import {urlEncoded} from "./urlEncoded";
import {generateRandomString} from "../generateRamdomString";

const CLIENT_ID = process.env.REACT_APP_REST_API_KEY;
const REST_API_KEY1 = process.env.REACT_APP_REST_API_KEY;
const SECRET_KEY1 = process.env.REACT_APP_SECRET_KEY;

const NAVER_CLENT_ID1 = process.env.REACT_APP_NAVER_CLIENT_ID;
const NAVER_SECRET_KEY1 = process.env.REACT_APP_NAVER_CLIENT_SECRET;

const API_FRONT_URI = process.env.REACT_APP_API_FRONT;


export const KAKAO_AUTH_URL
    = `https://kauth.kakao.com/oauth/authorize`
    + `?client_id=${CLIENT_ID}`
    + `&redirect_uri=https://wonderful-genie-12322.netlify.app/login/oauth2/kakao`
    + `&response_type=code`;

export const state = generateRandomString(6);
const redirectUri = encodeURIComponent(`https://wonderful-genie-12322.netlify.app/login/oauth2/naver`);
/*const redirectUri = `${API_FRONT_URI}/login/oauth2/naver`;*/
export const NAVER_AUTH_URL
    = `https://nid.naver.com/oauth2.0/authorize`
    + `?response_type=code`
    + `&client_id=${NAVER_CLENT_ID1}`
    + `&state=${state}`
    + `&redirect_uri=${redirectUri}`;


export const REST_API_KEY = REST_API_KEY1;
export const SECRET_KEY = SECRET_KEY1;
export const NAVER_CLENT_ID = NAVER_CLENT_ID1;
export const NAVER_SECRET_KEY = NAVER_SECRET_KEY1;