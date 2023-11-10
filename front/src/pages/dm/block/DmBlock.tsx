import React, {useState} from "react";
import DmHeader from "../DmHeader";
import DmMainTable from "../main/DmMainTable";

function DmBlock() {
    const [title] = useState('차단유저');
    return (
        <>
            <DmHeader title={title}></DmHeader>
            <DmMainTable title={title}></DmMainTable>
        </>
    );
}

export default DmBlock