import {configureStore} from "@reduxjs/toolkit";
import {myIp} from "./slice/myIpSlice";
import {myInfo} from "./slice/UserSlice";
import {myCartTotalSlice, myCartSlice} from "./slice/myCartSlice";
import {cateNo, changeCateNo} from "./slice/CommunityCateNo"
import {listURL, changeURL} from "./slice/CommunityListURL";
import {partListSlice, contentListSlice, lectureIHeardList, contentCount} from "./slice/LectureContent"
import {myChatt} from "./slice/ChatSlice";


export default configureStore({
    reducer: {
        myIp: myIp.reducer,
        myInfo: myInfo.reducer,
        myCart: myCartSlice.reducer,
        myCartTotal: myCartTotalSlice.reducer,
        lectureContentList: contentListSlice.reducer,
        lecturePartList: partListSlice.reducer,
        cateNo : cateNo.reducer,
        listURL: listURL.reducer,
        lectureIHeardList: lectureIHeardList.reducer,
        contentCount: contentCount.reducer,
        myChatt: myChatt.reducer
    }
})