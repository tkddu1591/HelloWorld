const CLIENT_ID = process.env.REACT_APP_REST_API_KEY;
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URL;
const REST_API_KEY1 = process.env.REACT_APP_REST_API_KEY
const SECRET_KEY1 = process.env.REACT_APP_SECRET_KEY

export const KAKAO_AUTH_URL
    = `https://kauth.kakao.com/oauth/authorize`
    + `?client_id=` + CLIENT_ID
    + `&redirect_uri=` + REDIRECT_URI
    + `&response_type=code`;

export const REST_API_KEY = REST_API_KEY1;
export const SECRET_KEY = SECRET_KEY1;