import {Button, Col, Container, Row} from "reactstrap";
import React from "react";
import SelectBox from "../../components/SelectBox";
import {useNavigate} from "react-router-dom";

interface ListItem {
    title: string;
    more?: boolean;
    listLoading?: string;
    setListLoading?: (state: string) => void
    sortType?: any;
}

function CardList({title, more, setListLoading, listLoading, sortType}: ListItem) {
    let navigate = useNavigate();
    return <>
        <Container>

            <div id="cards">
                <div style={{display: "flex", justifyContent: 'space-between'}}>
                    <div>
                        <h3 style={{textAlign: "left", marginBottom: '10px', display: 'inline-block'}}>{title}</h3>

                        {listLoading &&
                            <div style={{display: 'inline-block', marginLeft: '10px'}}>
                                <Button color={listLoading == 'scroll' ? "info" : ''}
                                        style={{width: '15px', paddingLeft: '10px'}}
                                        onClick={() => {
                                            if (setListLoading)
                                                setListLoading('scroll');
                                        }}>
                                    <i className="bi bi-chevron-double-down"></i>
                                </Button>
                                <Button color={listLoading == 'paging' ? "info" : ''}
                                        style={{width: '15px', paddingLeft: '10px'}}
                                        onClick={() => {
                                            if (setListLoading)
                                                setListLoading('paging');
                                        }}>
                                    <i className="bi bi-book-half"></i>
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
                    <Col sm="6" md="3" style={{padding: '10px', cursor: "pointer"}}
                         onClick={()=>{navigate("/lecture/view")}}
                    >
                        <div
                            style={{borderRadius: '5%', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', padding: '0'}}>
                            <img
                                style={{width: '100%'}}
                                alt="..."
                                src={`${process.env.PUBLIC_URL}/images/lecture/thumb_Java.jpg`}
                            ></img>


                            <div style={{
                                textAlign: 'left',
                                padding: '10px'
                            }}>
                                <p className="category"
                                   style={{textDecoration: "line-through", marginBottom: 0}}>￦35,000</p>
                                <p className="category" style={{color: 'black'}}><span
                                    style={{color: 'red', marginRight: '10px'}}>50%</span>￦35,000</p>
                            </div>
                        </div>
                    </Col>

                    <Col sm="6" md="3" style={{padding: '10px', cursor: "pointer"}}>
                        <div
                            style={{borderRadius: '5%', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', padding: '0'}}>
                            <img
                                style={{width: '100%'}}
                                alt="..."
                                src={`${process.env.PUBLIC_URL}/images/lecture/thumb_Java.jpg`}
                            ></img>


                            <div style={{
                                textAlign: 'left',
                                padding: '10px'
                            }}>
                                <p className="category"
                                   style={{textDecoration: "line-through", marginBottom: 0}}>￦35,000</p>
                                <p className="category" style={{color: 'black'}}><span
                                    style={{color: 'red', marginRight: '10px'}}>50%</span>￦35,000</p>
                            </div>
                        </div>
                    </Col>

                    <Col sm="6" md="3" style={{padding: '10px', cursor: "pointer"}}>
                        <div
                            style={{borderRadius: '5%', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', padding: '0'}}>
                            <img
                                style={{width: '100%'}}
                                alt="..."
                                src={`${process.env.PUBLIC_URL}/images/lecture/thumb_Java.jpg`}
                            ></img>


                            <div style={{
                                textAlign: 'left',
                                padding: '10px'
                            }}>
                                <p className="category"
                                   style={{textDecoration: "line-through", marginBottom: 0}}>￦35,000</p>
                                <p className="category" style={{color: 'black'}}><span
                                    style={{color: 'red', marginRight: '10px'}}>50%</span>￦35,000</p>
                            </div>
                        </div>
                    </Col>

                    <Col sm="6" md="3" style={{padding: '10px', cursor: "pointer"}}>
                        <div
                            style={{borderRadius: '5%', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', padding: '0'}}>
                            <img
                                style={{width: '100%'}}
                                alt="..."
                                src={`${process.env.PUBLIC_URL}/images/lecture/thumb_Java.jpg`}
                            ></img>


                            <div style={{
                                textAlign: 'left',
                                padding: '10px'
                            }}>
                                <p className="category"
                                   style={{textDecoration: "line-through", marginBottom: 0}}>￦35,000</p>
                                <p className="category" style={{color: 'black'}}><span
                                    style={{color: 'red', marginRight: '10px'}}>50%</span>￦35,000</p>
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