import {insertMyInfo} from "../../slice/UserSlice";

export const getMyInfo = (dispatch) => {

    const local = localStorage.getItem('helloWorld_WELCOME_GREETING_HELLO');

    if(local !== null) {
        const infoArr = local.split(',');
        const newInfo = {
            email: infoArr[1],
            nick: infoArr[2],
            uid: infoArr[0],
            isLogin: true,
        }
        dispatch(insertMyInfo(newInfo));

    }else {
        const initialState = {
            'email': '비회원',
            'nick': '비회원',
            'isLogin': false,
        }
        dispatch(insertMyInfo(initialState));
    }
}