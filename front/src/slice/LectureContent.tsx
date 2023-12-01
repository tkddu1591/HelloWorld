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
const lectureIHeardList = createSlice({
    name:         'lectureIHeardList',
    initialState: [{lectureIHeardNo: 0, lectureNo: 0, uid: '', contentNo: 0}],
    reducers:     {
        changeLectureIHeardList: (state, action) => {
            return [...action.payload];
        },
    },
})

const contentCount = createSlice({
    name:         'contentCount',
    initialState: 0,
    reducers:     {
        changeContentCount: (state, action) => {
            return action.payload;
        },
    },
})


export const {changeContentList} = contentListSlice.actions;
export const {changePartList} = partListSlice.actions;
export const {changeLectureIHeardList} = lectureIHeardList.actions;
export const {changeContentCount} = contentCount.actions;
export {contentListSlice, partListSlice, lectureIHeardList, contentCount};