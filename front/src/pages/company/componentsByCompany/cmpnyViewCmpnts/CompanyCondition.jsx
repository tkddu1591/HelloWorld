import React from "react";
function CompanyCondition({name, value}) {
    return (
        <div style={{width:"50%", display:"inline-block", marginBottom:"5px"}}>
            <div style={{width:"40%", display:"inline-block"}}>{name}</div>
            <div style={{width:"60%", display:"inline-block", fontWeight:"bold"}}>{value}</div>
        </div>
    )
}
export default CompanyCondition;