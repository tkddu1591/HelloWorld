import axios from "axios";
import {logout} from "./logout";
export const sendAccessToken = async (navigate, dispatch) => {
    const accessToken = localStorage.getItem('helloWorld_ACCESS_TOKEN');
    try {
        const response = await axios.get(
            '/accessToken',
            {
                headers: {"Authorization": `Bearer ${accessToken}`},
            }
        );
        console.log("성공")
    } catch (err) {
        console.log("실패")
    }
}