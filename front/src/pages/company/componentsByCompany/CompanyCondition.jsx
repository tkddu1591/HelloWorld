import React from "react";
function CompanyCondition({name, value}) {
    const companyData = {
        image: 'cool photo',
        title: 'JAVA 백엔드 개발자 모집',
        company: '(주)만두래곤요리킹',
        local: '강서구',
        positionType: '정규직',
        position: '백엔드 개발자',
        skills: ['Java', 'Spring'],
        career: '2~10년',
        education: '무관',
        content: '우리 회사 개쩔고 멋지고 좋은 회사입니다.',
        expireDate: '11/14'
    };
    return (
        <div style={{width:"50%", display:"inline-block", marginBottom:"5px"}}>
            <div style={{width:"40%", display:"inline-block"}}>{name}</div>
            <div style={{width:"60%", display:"inline-block", fontWeight:"bold"}}>{value}</div>
        </div>
    )
}
export default CompanyCondition;