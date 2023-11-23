import {configureStore} from "@reduxjs/toolkit";
import {myIp} from "./slice/myIpSlice";
import {myInfo} from "./slice/UserSlice";

export default configureStore({
    reducer: {
        myIp : myIp.reducer,
        myInfo : myInfo.reducer,
    }
})