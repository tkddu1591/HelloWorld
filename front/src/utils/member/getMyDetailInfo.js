import {useEffect} from "react";
import axios from "axios";
import {sendRefreshToken} from "./sendRefreshToken";
import {API_BASE_URL} from "../../App";
export const getMyDetailInfo = (navigate, dispatch) => {
    const accessToken = localStorage.getItem("helloWorld_ACCESS_TOKEN")
    axios.get(`${API_BASE_URL}/me`, {
        headers: { "Authorization": `Bearer ${accessToken}` }
    })
    .then((res) => {
        console.log("성공? : " + JSON.stringify(res.data));
    })
    .catch ((err) => {
        console.log("실패? : " + JSON.stringify(err));
        sendRefreshToken(navigate, dispatch);
    });
}