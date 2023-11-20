import {configureStore} from "@reduxjs/toolkit";
import {myIp} from "./slice/myIpSlice";

export default configureStore({
    reducer: {
        myIp : myIp.reducer,
    }
})