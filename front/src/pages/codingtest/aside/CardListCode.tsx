import {Button, Col, Container, Row} from "reactstrap";
import React, {useEffect, useState} from "react";
import SelectBox from "../../../components/Lecture/SelectBox";
import {useNavigate} from "react-router-dom";
import {changeDTO} from "../../../store/changeDTO";
import PageListViewType from "../../../components/Lecture/PageListType";
import Star from "../../../components/Lecture/Star";

interface ListItem {
    title?: string;
    more?: boolean;
    listLoading?: { loading?: string, view?: string };
    setListLoading?: (state: { loading?: string, view?: string }) => void
    sortType?: any
    colSize?: number
}

function CardListCode({title, more, setListLoading, listLoading, sortType, colSize = 12}: ListItem) {
    let navigate = useNavigate();

    function handleClick(e) {
        navigate('/lecture/view');
    }

    const [cardSize, setCardSize] = useState({
        sm: 50,
        md: 50,
        lg: 50,
        xl: 50
    });
    useEffect(() => {

        if (colSize < 6)
            setCardSize({
                sm: 12,
                md: 12,
                lg: 12,
                xl: 6
            })
        else if (colSize < 9)
            setCardSize({
                sm: 12,
                md: 12,
                lg: 6,
                xl: 6
            })
        else if (colSize < 12)
            setCardSize({
                sm: 12,
                md: 6,
                lg: 6,
                xl: 4
            })
    },[])
    return <>
        <Container>

            <div id="cards">
                <Row style={{padding: '10px'}}>
                    <Col sm={cardSize.sm} md={cardSize.md} lg={cardSize.lg} xl={cardSize.xl} style={{padding: '10px'}}
                    >
                        <div
                            style={{borderRadius: '5%', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', padding: '0'}}
                        >
                            <img
                                style={{width: '100%', cursor: "pointer"}}
                                alt="..."
                                src={`${process.env.PUBLIC_URL}/images/lecture/thumb_Java.jpg`}
                                onClick={handleClick}
                            ></img>


                            <div style={{
                                textAlign: 'left',
                                padding: '10px',
                            }}>
                                <div><span style={{fontWeight: "700", cursor: "pointer"}}
                                           onClick={handleClick}>제목</span></div>
                                <p className="category"
                                   style={{textDecoration: "line-through", marginBottom: 0}}>￦35,000</p>
                                <div style={{justifyContent: 'space-between', display: "flex"}}>
                                    <span style={{display: "inline-block", textAlign: "left"}}>
                                    <p className="category" style={{color: 'black'}}><span
                                        style={{color: 'red', marginRight: '10px'}}>50%</span>￦35,000</p>
                                    </span>

                                    <span style={{display: "inline-block", textAlign: "right"}}>
                                        <Star size={17} score={5}></Star>
                                    </span>
                                </div>
                                <div style={{justifyContent: 'space-between', display: "flex"}}>
                                    <span
                                        style={{color: "gray", display: "inline-block", textAlign: "left"}}>1,200 sold</span>
                                    <span style={{color: "gray", display: "inline-block", textAlign: "right"}}>( 1,222 리뷰 )</span>
                                </div>
                                <div style={{justifyContent: 'space-between', display: "flex"}}>

                                    <Button className="btn-round" color="success" type="button" onClick={(e) => {
                                        e.preventDefault()
                                    }} style={{fontFamily: 'nanumsquare'}}
                                    >
                                        북마크 중
                                    </Button>
                                    <Button className="btn-round" color="primary" type="button" onClick={(e) => {
                                        e.preventDefault()
                                    }} style={{fontFamily: 'nanumsquare'}}>
                                        할인 중
                                        <span style={{

                                            marginLeft: '5px',
                                            marginRight: '5px',
                                            marginBottom: 'none'
                                        }}></span>
                                        <span style={{marginTop: '0'}}>D-26</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Col>


                </Row>
            </div>
        </Container>


    </>
}


// @ts-ignore
export default CardListCode