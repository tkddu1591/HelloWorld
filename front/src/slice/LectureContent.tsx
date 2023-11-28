import {createSlice} from '@reduxjs/toolkit';


const partListSlice = createSlice({
    name:         'PartList',
    initialState: [{
        partNo:    0,
        lectureNo: 0,
        title:     0
    }],
    reducers:     {
        changePartList: (state, action) => {
            return [...action.payload];
        },
    },
});

const contentListSlice = createSlice({
    name:         'contentList',
    initialState: [{contentNo: 0, lectureNo: 0, title: '', content: '', partNo: 0}],
    reducers:     {
        changeContentList: (state, action) => {
            return [...action.payload];
        },
    },
});

export const {changeContentList} = contentListSlice.actions;
export const {changePartList} = partListSlice.actions;
export {contentListSlice, partListSlice};