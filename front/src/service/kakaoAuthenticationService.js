import {KAKAO_AUTH_URL} from "../utils/uri/oauth";
import axios from "axios";

export const openKakaoLogin = () => {
    window.open(KAKAO_AUTH_URL, "_self");
}

async function kaKaoLogin(code) {
    try {
        return await axios.get("/api/oauth/kakao?code=" + code);
    }catch (err) {
        console.error("kakao login failed:",err);
        throw err;
    }
}
export default kaKaoLogin;