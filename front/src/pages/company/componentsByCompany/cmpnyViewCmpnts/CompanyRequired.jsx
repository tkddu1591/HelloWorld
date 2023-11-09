import React from "react";
import CompanyCondition from "./CompanyCondition";
function CompanyRequired({companyData}) {
    return (
        <div style={{borderRadius: '5%', backgroundColor: "#f7f7fb", padding:"25px", margin:"25px auto"}}>
            <CompanyCondition name="직무"     value={companyData.position} />
            <CompanyCondition name="지원마감" value={companyData.expireDate} />
            <CompanyCondition name="고용형태" value={companyData.positionType} />
            <CompanyCondition name="경력"     value={companyData.career} />
            <CompanyCondition name="근무위치" value={companyData.location} />
            <CompanyCondition name="학력"     value={companyData.education} />
        </div>
    )
}
export default CompanyRequired;