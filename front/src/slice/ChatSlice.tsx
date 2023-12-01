import {createSlice} from "@reduxjs/toolkit";
const initialState: any[] = []; // initialState를 any[]로 선언
let myChatt = createSlice({
    name : 'myChatt',
    initialState,
    reducers : {
        insertMyChatt:(state, action) => {
            return action.payload;
        },
    }
})

export const {insertMyChatt} = myChatt.actions;
export {myChatt}
