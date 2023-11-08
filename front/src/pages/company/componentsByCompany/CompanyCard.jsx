import React from "react";
import { Col } from "reactstrap";
import {Link} from "react-router-dom";


function CompanyCard(props) {
    const { image, title, company, location, career, education, expireDate } = props.data;
    return (
        <Col sm="12" md="6" lg='4' xl="3" style={{padding: '10px'}}>
            <div style={{borderRadius: '5%', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', padding: '0'}}>
                <div className="cardHeader" style={{width:"20%", height:"auto", margin: "5%", lineHeight: "center", float:"left"}}>
                    <img className="rounded-circle" src={`${process.env.PUBLIC_URL}/images/home/main_logo.png`}></img>
                </div>
                <div className="cardBody" style={{width:"60%", margin:"5%", float:"right"}}>
                    <Link to={"/company/view"} style={{color:"black", fontSize:"15px"}}>{title}</Link><br/>
                    <span style={{fontSize:"13px", color:"grey"}}>{company}</span><br/>
                    <span style={{fontSize:"13px", color:"grey"}}>{location}, {career}, {education}</span><br/>
                    <span style={{float:"right"}}>~{expireDate}</span>
                </div>
            </div>
        </Col>
    )
}
export default CompanyCard;