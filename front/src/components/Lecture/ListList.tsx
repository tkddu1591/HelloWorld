import { useNavigate } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import Star from './Star';
import React from 'react';

interface ListListProps {
    pageResponse?:any
    tags?: {value: number, label:string}[];
}
function ListList({pageResponse}: ListListProps) {
    let navigate = useNavigate();

    function handleClick(e) {
        navigate('/lecture/view');
    }

    return (
        <>
            <Container style={{ marginTop: '20px' }}>
                <Row>
                    {/*768*/}
                    <Col lg={4} md={4}>
                        <img
                            style={{
                                width: '100%',
                                cursor: 'pointer',
                                borderRadius: '10px',
                            }}
                            alt="..."
                            src={`/images/lecture/thumb_Java.jpg`}
                            onClick={handleClick}></img>
                    </Col>
                    <Col lg={8} md={8} style={{ position: 'relative' }}>
                        <div>
                            <span
                                className={'listTitle'}
                                style={{
                                    fontSize: '20px',
                                    cursor: 'pointer',
                                }}>
                                제목 0000000000000000000000000
                            </span>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'left',
                                fontSize: '15px',
                                color: 'gray',
                                marginTop: '10px',
                            }}>
                            <Star size={15} score={5}></Star>
                            <span style={{ marginLeft: '5px ' }}>(44 리뷰)</span>
                            <span style={{ marginLeft: '5px ' }}>1,200 sold</span>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'left',
                                fontSize: '15px',
                                marginTop: '10px',
                            }}>
                            <span style={{ marginLeft: '5px ' }}>
                                {' '}
                                코드짜다가 갑자기 2일 전으로 시간을 돌리고 싶으면? 팀원과 코드 충돌없이 협업하고 싶으면?
                                버전 컨트롤을 도와주는 소프트웨어인 git 쓰면 가능합니다. 그리고 git 모르면 취업 못함 …
                            </span>
                            <div style={{ bottom: 0 }}></div>
                        </div>
                        <div
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                right: '0',
                            }}>
                            <p
                                className="category"
                                style={{
                                    textDecoration: 'line-through',
                                    marginBottom: 0,
                                    display: 'flex',
                                    justifyContent: 'right',
                                    fontSize: '20px',
                                }}>
                                ￦35,000
                            </p>
                            <div style={{ justifyContent: 'space-between', display: 'flex' }}>
                                <span style={{ display: 'inline-block', textAlign: 'left' }}>
                                    <p className="category" style={{ color: 'black', fontSize: '20px' }}>
                                        <span style={{ color: 'red', marginRight: '10px' }}>50%</span>
                                        ￦35,000
                                    </p>
                                </span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default ListList