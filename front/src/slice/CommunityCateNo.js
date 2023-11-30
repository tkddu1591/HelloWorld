import {combineReducers, createSlice} from '@reduxjs/toolkit';


let cateNo = createSlice({
    name: 'cate',
    initialState: {no : 1},
    reducers: {
        changeCateNo: (state, action) => {
            state.no = action.payload;
        }
    }
});

export const {changeCateNo} = cateNo.actions;
export {cateNo};