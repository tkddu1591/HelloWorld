import React from "react";
import CompanyLogo from "../CompanyLogo";
import CompanyTitle from "./CompanyTitle";
import {Button} from "reactstrap";
function CompanyViewHeader({companyData}) {
    return (<>
        <nav style={{borderBottom: "1px solid lightgrey", paddingBottom: "25px"}}>
            <CompanyLogo image={companyData.image} />
            <CompanyTitle companyData={companyData} />
        </nav><br/>
    </>)
}
export default CompanyViewHeader;