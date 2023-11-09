import React, {useState} from "react";
import DmHeader from "../DmHeader";
import DmMainTable from "../main/DmMainTable";

function DmHide() {
    const [title] = useState('숨김유저');
    return (
        <>
            <DmHeader title={title}></DmHeader>
            <DmMainTable title={title}></DmMainTable>
        </>
    );
}

export default DmHide