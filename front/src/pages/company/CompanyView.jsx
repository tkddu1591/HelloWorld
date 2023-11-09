import React, {useState} from "react";
import {Button, Col, Container, Row} from "reactstrap";
import CompanyCard from "./componentsByCompany/CompanyCard";
import CompanyRequired from "./componentsByCompany/cmpnyViewCmpnts/CompanyRequired";
import CompanyReqSkillStack from "./componentsByCompany/cmpnyViewCmpnts/CompanyReqSkillStack";
import CompanyViewHeader from "./componentsByCompany/cmpnyViewCmpnts/CompanyViewHeader";


function CompanyView() {
    const [companyData, setCompanyData] = useState({
        image: '/images/home/main_logo.png',
        title: 'JAVA 백엔드 개발자 모집',
        company: '(주)만두래곤요리킹',
        location: '강서구',
        positionType: '정규직',
        position: '백엔드 개발자',
        skills: ['Java', 'Spring', 'MySQL', 'JPA', 'MyBatis', 'npsql'],
        career: '2~10년',
        education: '무관',
        content: '우리 회사 개쩔고 멋지고 좋은 회사입니다.',
        expireDate: '11/14',
        isView: true,
        isBookmark: true,
    });
    return (
        <>
            <Container>
                <div style={{margin: "130px 0", width: "100%", height: "auto", minHeight: "300px"}}>
                    <Row style={{padding: '10px'}}>
                        <Col xl="9" lg="8" md="12" sm="12" className="content">
                            <div className="companyView" style={{borderRadius: '5%', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', padding: '30px'}}>
                                <CompanyViewHeader companyData={companyData} />
                                <CompanyRequired companyData={companyData}/>
                                <CompanyReqSkillStack companyData={companyData}/>
                                {companyData.content}
                            </div>
                        </Col>
                        <CompanyCard data={companyData} />
                    </Row>
                </div>
            </Container>
        </>
    )
}


export default CompanyView;