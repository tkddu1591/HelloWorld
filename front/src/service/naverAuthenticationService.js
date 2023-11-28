import {KAKAO_AUTH_URL, NAVER_AUTH_URL} from "../utils/uri/oauth";
import axios from "axios";

export const openNaverLogin = () => {
    window.open(NAVER_AUTH_URL, "_self");
}