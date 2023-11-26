import {getCookie} from "./cookieHandler";
import axios from "axios";
import {logout} from "./logout";
export const sendRefreshToken = async (navigate, dispatch) => {
    const refreshToken = getCookie('helloWorld_REFRESH_TOKEN');
    console.log("isRefreshToken : " + refreshToken);
    if(refreshToken === null) {
        logout(navigate, dispatch);
    }

    try {
        const response = await axios.get(
            '/refreshToken',
            {
                headers: {"Authorization": `Bearer ${refreshToken}`},
            }
        );

        localStorage.setItem('helloWorld_ACCESS_TOKEN', response.data);
        console.log(response.data);

    }catch (err) {
        logout(navigate, dispatch);
        navigate('/member/login');
    }
}