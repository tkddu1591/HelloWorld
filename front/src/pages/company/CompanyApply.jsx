import React, {useState} from "react";
import {Card, CardBody, CardHeader, Col, Container, Nav, NavItem, NavLink, Row, TabContent, TabPane} from "reactstrap";
import CompanyCard from "./componentsByCompany/CompanyCard";
import SearchBar from "../../components/Lecture/SearchBar";
import SelectBox from "../../components/Lecture/SelectBox";

function CompanyApply() {
    const [companyData, setCompanyData] = useState([{
        image: '/images/home/main_logo.png',
        title: 'JAVA 백엔드 개발자 모집',
        company: '(주)만두래곤요리킹',
        location: '강서구',
        career: '2~10년',
        education: '무관',
        expireDate: '11/14',
        applyStatus: '최종합격',
        isBookmark: false,
    },
    {
        image: '/images/home/main_logo.png',
        title: 'JAVA 백엔드 개발자 모집',
        company: '(주)만두래곤요리킹',
        location: '강서구',
        career: '2~10년',
        education: '무관',
        expireDate: '11/14',
        applyStatus: '검토중',
        isBookmark: true,
    },
    {
        image: '/images/home/main_logo.png',
        title: 'JAVA 백엔드 개발자 모집',
        company: '(주)만두래곤요리킹',
        location: '강서구',
        career: '2~10년',
        education: '무관',
        expireDate: '11/14',
        applyStatus: '불합격',
        isBookmark: false,
    },
    {
        image: '/images/home/main_logo.png',
        title: 'JAVA 백엔드 개발자 모집',
        company: '(주)만두래곤요리킹',
        location: '강서구',
        career: '2~10년',
        education: '무관',
        expireDate: '11/14',
        applyStatus: '서류통과',
        isBookmark: true,
    }]);
    const [sorts, setSorts] = useState(
        {
            title: 'applyStatus',
            placeholder: '지원상태',
            list: [
                {value: 'all', label: '전체'},
                {value: 'apl', label: '지원완료'},
                {value: 'res', label: '서류통과'},
                {value: 'fnl', label: '최종합격'},
                {value: 'fld', label: '불합격'},
                {value: 'gvu', label: '중도 퇴사'},
                {value: 'chk', label: '검토중'},
            ],
            isSearchable: false,
            isMulti: false,
        }
    );
    return (
        <>
            <Container>
                <div style={{marginTop:'100px', backgroundColor: "rgb(249, 250, 251)", height: "150px",
                    borderRadius: '5%', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', padding: '20px'}}>
                    <strong style={{fontSize: "26px"}}>지원한 채용 공고</strong><br />
                    <span>지원했던 채용 리스트를 볼 수 있습니다.</span>
                    <Row>
                        <Col xl='3' lg='3' md='4' sm='5' xs='6'
                             style={{marginTop: '5px'}}
                             key={sorts.placeholder}>
                            <div className="App">
                                <SelectBox options={sorts.list} isMulti={sorts.isMulti}
                                           placeholder={sorts.placeholder} isSearchable={sorts.isSearchable}></SelectBox>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div style={{marginTop: "62px", width: "100%", height: "auto", minHeight: "300px"}}>
                    <h3 style={{textAlign: "left", marginBottom: '10px', borderBottom: "1px solid lightgrey", display: 'inline-block'}}>지원한 회사</h3>
                    <div id="cards">
                        <Row style={{padding: '10px'}}>
                            {companyData.map((company, index) => (
                                <CompanyCard key={index} data={company} />
                            ))}
                        </Row>
                    </div>
                </div>
            </Container>
        </>
    )
}


export default CompanyApply;