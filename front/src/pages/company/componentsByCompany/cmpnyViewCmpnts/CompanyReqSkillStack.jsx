import React from "react";
import {Badge} from "reactstrap";
import {getRandomValueFromArray} from '../../../../utils/getRandomValueFromArray'


function CompanyReqSkillStack({companyData}) {
    return (
        <div style={{marginLeft:"20px", marginBottom:"20px"}}>
            <span>요구 기술스택 : </span>
            {companyData.skills.map((skill, index) => (
                <Badge color={getRandomValueFromArray()} style={{marginLeft: "2px"}}
                       href="#pablo"
                       onClick={e => e.preventDefault()}>
                    {skill}
                </Badge>
            ))}
        </div>
    )
}
export default CompanyReqSkillStack;