import React from "react";
function CompanyLogo({image}) {
    return (
        <img src={`${image}`}
             alt="로고"
             style={{maxWidth:"80px", marginRight: "20px"}}/>
    )
}
export default CompanyLogo;