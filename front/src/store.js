import {configureStore} from "@reduxjs/toolkit";
import {myIp} from "./slice/myIpSlice";
import {myInfo} from "./slice/UserSlice";
import {myCartTotalSlice, myCartSlice} from "./slice/myCartSlice";
import {partListSlice, contentListSlice, lectureIHeardList, contentCount} from "./slice/LectureContent"

export default configureStore({
    reducer: {
        myIp: myIp.reducer,
        myInfo: myInfo.reducer,
        myCart: myCartSlice.reducer,
        myCartTotal: myCartTotalSlice.reducer,
        lectureContentList: contentListSlice.reducer,
        lecturePartList: partListSlice.reducer,
        lectureIHeardList: lectureIHeardList.reducer,
        contentCount: contentCount.reducer
    }
})