import {combineReducers, createSlice} from '@reduxjs/toolkit';
import {CartItem} from "../type/cart";



interface MyCartState {
    myCartList: CartItem[];
}

const initialState: MyCartState = {
    myCartList: [],
};
const myCartSlice = createSlice({
    name: 'myCartList',
    initialState,
    reducers: {
        changeMyCart: (state, action) => {
            state.myCartList = action.payload;
        },
    },
});

const myCartTotalSlice = createSlice({
    name: 'myCartTotal',
    initialState: { price: 0, discount: 0, total: 0, count: 0 },
    reducers: {
        changeMyCartTotal: (state, action) => {
            return { ...state, ...action.payload };
        },
    },
});

export const { changeMyCart } = myCartSlice.actions;
export const { changeMyCartTotal } = myCartTotalSlice.actions;
export { myCartSlice, myCartTotalSlice};