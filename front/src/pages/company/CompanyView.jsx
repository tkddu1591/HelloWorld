import React from "react";
import {Badge, Button, Col, Container, Row} from "reactstrap";
import CompanyCard from "./componentsByCompany/CompanyCard";
import CompanyCondition from "./componentsByCompany/CompanyCondition";


function CompanyView() {
    const companyData = {
        image: 'cool photo',
        title: 'JAVA 백엔드 개발자 모집',
        company: '(주)만두래곤요리킹',
        location: '강서구',
        positionType: '정규직',
        position: '백엔드 개발자',
        skills: ['Java', 'Spring'],
        career: '2~10년',
        education: '무관',
        content: '우리 회사 개쩔고 멋지고 좋은 회사입니다.',
        expireDate: '11/14'
    };
    return (
        <>
            <Container>
                <div style={{margin: "130px 0", width: "100%", height: "auto", minHeight: "300px"}}>
                    <Row style={{padding: '10px'}}>
                        <Col xl="9" lg="8" md="12" sm="12" className="content">
                            <div style={{borderRadius: '5%', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', padding: '30px'}}>
                                <div className="companyView">
                                    <nav style={{borderBottom: "1px solid lightgrey"}}>
                                        <img src={`${process.env.PUBLIC_URL}/images/home/main_logo.png`} alt="로고" style={{maxWidth:"80px", marginRight: "20px", float:"left"}}/>
                                        <div style={{width: "80%", minWidth:"370px" ,padding:"10px"}}>
                                            <h3 style={{textAlign: "left", marginBottom: '0px', borderBottom: "1px solid lightgrey", display: 'inline-block'}}>
                                                {companyData.title}
                                            </h3><br/>
                                            <p style={{display:"inline-block"}}>{companyData.company}</p>
                                        </div>
                                    </nav><br/>
                                    <article>
                                        <div style={{borderRadius: '5%', backgroundColor: "#f7f7fb", padding:"25px", margin:"25px auto"}}>
                                            <CompanyCondition name="직무" value={companyData.position} />
                                            <CompanyCondition name="지원마감" value={companyData.expireDate} />
                                            <CompanyCondition name="고용형태" value={companyData.positionType} />
                                            <CompanyCondition name="경력" value={companyData.career} />
                                            <CompanyCondition name="근무위치" value={companyData.location} />
                                            <CompanyCondition name="학력" value={companyData.education} />
                                        </div>
                                        <div style={{marginLeft:"20px", marginBottom:"20px"}}>
                                            <span>요구 기술스택 : </span>
                                            <Badge color="primary" href="#pablo" onClick={e => e.preventDefault()}>
                                                {companyData.skills[0]}
                                            </Badge>
                                            <Badge color="primary" href="#pablo" onClick={e => e.preventDefault()}>
                                                {companyData.skills[1]}
                                            </Badge>
                                        </div>
                                        {companyData.content}
                                    </article>
                                </div>
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