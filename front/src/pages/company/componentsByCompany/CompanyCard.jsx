import React from "react";
import {Badge, Button, Col} from "reactstrap";
import {Link} from "react-router-dom";
import BookmarkIcon from "./BookmarkIcon";




function CompanyCard(props) {
    const { image, title, company, location, career,
        education, expireDate, applyStatus,
        isView, isBookmark } = props.data;
    let badgeColor = "default";
    badgeColor =
        (applyStatus === '최종합격'
            || applyStatus === '모집중') ? "success"
        : (applyStatus === '불합격'
                || applyStatus === '중도 퇴사'
                || applyStatus === '종료') ? "default"
            : "warning";

    return (
        <Col sm="12" md="6" lg='4' xl="3" style={{padding: '10px'}}>
            <div style={{borderRadius: '5%', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', padding: '0'}}>

                <div className="cardHeader" style={{width:"20%", height:"auto", margin: "5%", float:"left", textAlign:"center"}}>
                    <img
                        src={`${image}`}
                    ></img>
                </div>

                <div className="cardBody" style={{width:"60%", margin:"5%", float:"right"}}>
                    <Link to={"/company/view"} style={{color:"black", fontSize:"15px"}}>
                        {title}
                    </Link><br/>
                    <span style={{fontSize:"13px", color:"grey"}}>
                        {company}
                    </span><br/>
                    <span style={{fontSize:"13px", color:"grey"}}>
                        {location}, {career}, {education}
                    </span><br/>
                    <span style={{float:"right"}}>
                        ~{expireDate}
                    </span>


                    <BookmarkIcon isBookmark={isBookmark} />

                    {!(applyStatus === undefined) && <Badge color={badgeColor}
                            href="#pablo"
                            onClick={e => e.preventDefault()}>
                        {applyStatus}
                    </Badge>}



                </div>
                {isView && <Button color="info" style={{width: "80%", margin:"0 10% 5% 10%"}}>
                    지원하기
                </Button>}
            </div>
        </Col>
    )
}
export default CompanyCard;