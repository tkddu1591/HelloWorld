import React from "react";
function CompanyTitle({companyData}) {
    return (
        <div style={{width: "80%", minWidth:"370px" ,paddingTop:"10px", display:"inline-block"}}>
            <h3 style={{textAlign: "left", marginBottom: '0px', borderBottom: "1px solid lightgrey", display: 'inline-block'}}>
                {companyData.title}
            </h3><br/>
            <p style={{display:"inline-block"}}>{companyData.company}</p>
        </div>
    )
}
export default CompanyTitle;