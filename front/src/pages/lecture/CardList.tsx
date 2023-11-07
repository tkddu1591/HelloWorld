import {Button, Col, Container, Row} from "reactstrap";
import React, {useState} from "react";
import SelectBox from "../../components/SelectBox";
import {useNavigate} from "react-router-dom";
import {changeDTO} from "../../store/changeDTO";

interface ListItem {
    title: string;
    more?: boolean;
    listLoading?: { loading?: string, view?: string };
    setListLoading?: (state: { loading?: string, view?: string }) => void
    sortType?: any;
}

function CardList({title, more, setListLoading, listLoading, sortType}: ListItem) {
    let navigate = useNavigate();

    function handleClick(e) {
        navigate('/lecture/view');
    }

    return <>
        <Container>

            <div id="cards">
                <div style={{display: "flex", justifyContent: 'space-between'}}>
                    <div>
                        <h3 style={{textAlign: "left", marginBottom: '10px', display: 'inline-block'}}>{title}</h3>

                        {listLoading?.loading &&
                            <div style={{display: 'inline-block', marginLeft: '10px'}}>
                                <Button color={listLoading.loading == 'scroll' ? "info" : ''}
                                        style={{width: '15px', paddingLeft: '10px'}}
                                        onClick={() => {
                                            if (setListLoading)
                                                changeDTO(setListLoading, 'loading', 'scroll');
                                        }}>
                                    <i className="bi bi-chevron-double-down"></i>
                                </Button>
                                <Button color={listLoading.loading == 'paging' ? "info" : ''}
                                        style={{width: '15px', paddingLeft: '10px'}}
                                        onClick={() => {
                                            if (setListLoading)
                                                changeDTO(setListLoading, 'loading', 'paging');
                                        }}>
                                    <i className="bi bi-book-half"></i>
                                </Button>
                            </div>}
                        {listLoading?.view &&
                            <div style={{display: 'inline-block', marginLeft: '10px'}}>
                                <Button color={listLoading.view == 'card' ? "success" : ''}
                                        style={{width: '15px', paddingLeft: '10px'}}
                                        onClick={() => {
                                            if (setListLoading)
                                                changeDTO(setListLoading, 'view', 'card');
                                        }}>
                                    <i className="bi bi-grid-fill"></i>
                                </Button>
                                <Button color={listLoading.view == 'list' ? "success" : ''}
                                        style={{width: '15px', paddingLeft: '10px'}}
                                        onClick={() => {
                                            if (setListLoading)
                                                changeDTO(setListLoading, 'view', 'list');
                                        }}>
                                    <i className="bi bi-list-task"></i>
                                </Button>
                            </div>}
                    </div>
                    {more &&
                        <span
                            style={{textAlign: "right", marginTop: 20, cursor: 'pointer', color: 'gray'}}>더보기<i
                            className="now-ui-icons ui-1_simple-add"
                            style={{boxShadow: '0 4px 6px rgba(0,0,0,0.1)', backgroundColor: 'lightgray', padding: '3px', marginLeft: '2px', fontSize: '11px', fontWeight: 'bolder'}}></i></span>}

                    {sortType && <div style={{marginTop: '10px'}}>
                        <SelectBox options={sortType} value={sortType[0]}></SelectBox>
                    </div>}
                </div>
                <Row style={{padding: '10px'}}>
                    <Col sm="12" md="6" lg='4' xl="3" style={{padding: '10px'}}
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
                                padding: '10px'
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

                                    <span style={{display: "inline-block", textAlign: "right", marginTop: '3px'}}>
                                        <i className={"bi bi-star-fill"} style={{color: "orange"}}></i>
                                        <i className={"bi bi-star-fill"} style={{color: "orange"}}></i>
                                        <i className={"bi bi-star-fill"} style={{color: "orange"}}></i>
                                        <i className={"bi bi-star-fill"} style={{color: "orange"}}></i>
                                        <i className={"bi bi-star-fill"} style={{color: "orange"}}></i>
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
                                    }}>
                                        북마크 중
                                    </Button>
                                    <Button className="btn-round" color="primary" type="button" onClick={(e) => {
                                        e.preventDefault()
                                    }}>
                                        할인 중
                                        <span style={{
                                            borderLeft: '1px solid skyblue',
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

                    <Col sm="12" md="6" lg='4' xl="3" style={{padding: '10px'}}>
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
                                padding: '10px'
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

                                    <span style={{display: "inline-block", textAlign: "right", marginTop: '3px'}}>
                                        <i className={"bi bi-star-fill"} style={{color: "orange"}}></i>
                                        <i className={"bi bi-star-fill"} style={{color: "orange"}}></i>
                                        <i className={"bi bi-star-fill"} style={{color: "orange"}}></i>
                                        <i className={"bi bi-star-fill"} style={{color: "orange"}}></i>
                                        <i className={"bi bi-star-fill"} style={{color: "orange"}}></i>
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
                                    }}>
                                        북마크 중
                                    </Button>

                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col sm="12" md="6" lg='4' xl="3" style={{padding: '10px'}}>
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
                                padding: '10px'
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

                                    <span style={{display: "inline-block", textAlign: "right", marginTop: '3px'}}>
                                        <i className={"bi bi-star-fill"} style={{color: "orange"}}></i>
                                        <i className={"bi bi-star-fill"} style={{color: "orange"}}></i>
                                        <i className={"bi bi-star-fill"} style={{color: "orange"}}></i>
                                        <i className={"bi bi-star-fill"} style={{color: "orange"}}></i>
                                        <i className={"bi bi-star-fill"} style={{color: "orange"}}></i>
                                    </span>
                                </div>
                                <div style={{justifyContent: 'space-between', display: "flex"}}>
                                    <span
                                        style={{color: "gray", display: "inline-block", textAlign: "left"}}>1,200 sold</span>
                                    <span style={{color: "gray", display: "inline-block", textAlign: "right"}}>( 1,222 리뷰 )</span>
                                </div>
                                <div style={{justifyContent: 'space-between', display: "flex"}}>

                                    <Button className="btn-round" color="" type="button" onClick={(e) => {
                                        e.preventDefault()
                                    }}>
                                        북마크
                                    </Button>
                                    <Button className="btn-round" color="primary" type="button" onClick={(e) => {
                                        e.preventDefault()
                                    }}>
                                        할인 중
                                        <span style={{
                                            borderLeft: '1px solid skyblue',
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

                    <Col sm="12" md="6" lg='4' xl="3" style={{padding: '10px'}}>
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
                                padding: '10px'
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

                                    <span style={{display: "inline-block", textAlign: "right", marginTop: '3px'}}>
                                        <i className={"bi bi-star-fill"} style={{color: "orange"}}></i>
                                        <i className={"bi bi-star-fill"} style={{color: "orange"}}></i>
                                        <i className={"bi bi-star-fill"} style={{color: "orange"}}></i>
                                        <i className={"bi bi-star-fill"} style={{color: "orange"}}></i>
                                        <i className={"bi bi-star-fill"} style={{color: "orange"}}></i>
                                    </span>
                                </div>
                                <div style={{justifyContent: 'space-between', display: "flex"}}>
                                    <span
                                        style={{color: "gray", display: "inline-block", textAlign: "left"}}>1,200 sold</span>
                                    <span style={{color: "gray", display: "inline-block", textAlign: "right"}}>( 1,222 리뷰 )</span>
                                </div>
                                <div style={{justifyContent: 'space-between', display: "flex"}}>

                                    <Button className="btn-round" color="" type="button" onClick={(e) => {
                                        e.preventDefault()
                                    }}>
                                        북마크
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
export default CardList