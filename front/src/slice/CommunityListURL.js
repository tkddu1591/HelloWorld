import {combineReducers, createSlice} from '@reduxjs/toolkit';

let listURL = createSlice({
    name: 'listURL',
    initialState: { url: ''}, // 초기 상태를 현재 URL로 설정
    reducers: {
        changeURL: (state, action) => {
            return { ...state, url: action.payload };
        }
    }
});

export const {changeURL} = listURL.actions;
export {listURL};