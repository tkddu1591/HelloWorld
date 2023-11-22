import {createSlice} from "@reduxjs/toolkit";


let myInfo = createSlice({
    name: 'myInfo',
    initialState : {
        'email': '비회원',
        'nick': '비회원',
        'isLogin': false,
    },
    reducers: {
        insertMyInfo:(state, action)=>{
            const { email, nick, isLogin } = action.payload;
            state.email = email;
            state.nick = nick;
            state.isLogin = isLogin;
        },
    }
})

export const {insertMyInfo} = myInfo.actions;
export {myInfo}