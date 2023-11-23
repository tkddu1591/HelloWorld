import './../../../css/community/list.css';
import { useNavigate } from 'react-router-dom';
import { Button, Col, Container, Row } from 'reactstrap';
import React, { useEffect, useState } from 'react';


function CardList({ colSize = 12 }) {
    let navigate = useNavigate();
    const [clientWidth, setClientWidth] = useState(document.body.clientWidth);
    useEffect(() => {
        const windowResize = () => {
            setClientWidth(document.body.clientWidth);
        };

        window.addEventListener(`resize`, windowResize);

        return () => {
            window.removeEventListener(`resize`, windowResize);
        };
    }, []);

    function handleClick(e) {
        navigate('/lecture/view');
    }

    const [cardSize, setCardSize] = useState({
        sm: 12,
        md: 6,
        lg: 4,
        xl: 3,
    });
    useEffect(() => {
        if (colSize < 6)
            setCardSize({
                sm: 12,
                md: 12,
                lg: 12,
                xl: 6,
            });
        else if (colSize < 9)
            setCardSize({
                sm: 12,
                md: 12,
                lg: 6,
                xl: 6,
            });
        else if (colSize < 12)
            setCardSize({
                sm: 12,
                md: 6,
                lg: 6,
                xl: 4,
            });
    }, []);

    function fontSizeCheck() {
        if (colSize < 6) {
        } else if (colSize < 9) {
        } else if (colSize < 12) {
        }
    }

    return (
        <>
            <Container>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}></div>
                <Row style={{ padding: '10px' }}>
                    <Col
                        sm={cardSize.sm}
                        md={cardSize.md}
                        lg={cardSize.lg}
                        xl={cardSize.xl}
                        style={{ padding: '10px' }}>
                        <div
                            style={{
                                borderRadius: '5%',
                                overflow: 'hidden',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                padding: '0',
                            }}>
                            <div style={{ width: '100%', height:"300px", overflow:'hidden'}}>
                            <img
                                style={{ width: '100%',transform:'50%,50%',cursor: 'pointer' }}
                                alt="..."
                                src={`/images/community/computer.jpg`}
                                onClick={handleClick}></img>
                            </div>
                            <div
                                style={{
                                    textAlign: 'left',
                                    padding: '10px',
                                }}>
                                <div>
                                    <span
                                        style={{
                                            fontWeight: '700',
                                            cursor: 'pointer',
                                            fontSize: clientWidth <= 768 ? '25px' : '',
                                        }}
                                        onClick={handleClick}>
                                        프로젝트 하실분 모집중입니다.00000000000000000
                                    </span>
                                </div>
                                {/*<p
                                    className="category"
                                    style={{
                                        textDecoration: 'line-through',
                                        marginBottom: 0,
                                        fontSize: clientWidth <= 768 ? '20px' : '',
                                    }}>
                                    ￦35,000
                                </p>*/}
                                <div style={{ justifyContent: 'space-between', display: 'flex' }}>
                                    <span style={{ display: 'inline-block', textAlign: 'left' }}>
                                        <p className="category" style={{ color: 'black' }}>
                                            
                                            <span style={{ fontSize: clientWidth <= 768 ? '20px' : '' }}>닉네임임</span>
                                        </p>
                                    </span>

                                    {/*<span style={{ display: 'inline-block', textAlign: 'right' }}>
                                        <Star size={clientWidth <= 768 ? 20 : 17} score={5}></Star>
                                    </span>*/}
                                </div>
                                <div style={{ justifyContent: 'space-between', display: 'flex' }}>
                                    <span
                                        style={{
                                            color: 'gray',
                                            display: 'inline-block',
                                            textAlign: 'left',

                                            fontSize: clientWidth <= 768 ? '15px' : '',
                                        }}>
                                        2023.11.10
                                    </span>
                                    <span
                                        style={{
                                            color: 'gray',
                                            display: 'inline-block',
                                            textAlign: 'right',

                                            fontSize: clientWidth <= 768 ? '15px' : '',
                                        }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-dots" viewBox="0 0 16 16" style={{marginRight:"3px"}}>
  <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
  <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z"/>
</svg>
                                        댓글 12
                                    </span>
                                </div>
                                <div style={{ justifyContent: 'space-between', display: 'flex' }}>
                                    <Button
                                        className="btn-round"
                                        color="success"
                                        type="button"
                                        onClick={e => {
                                            e.preventDefault();
                                        }}
                                        style={{
                                            fontFamily: 'nanumsquare',
                                            fontSize: clientWidth <= 768 ? '15px' : '',
                                        }}>
                                        모집 중
                                    </Button>
                                    <Button
                                        className="btn-round"
                                        color="primary"
                                        type="button"
                                        onClick={e => {
                                            e.preventDefault();
                                        }}
                                        style={{
                                            fontFamily: 'nanumsquare',
                                            fontSize: clientWidth <= 768 ? '15px' : '',
                                        }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people-fill" viewBox="0 0 16 16" style={{marginRight:"4px"}}>
                                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                                        </svg>
                                        1
                                        <span
                                            style={{

                                                marginLeft: '5px',
                                                marginRight: '5px',
                                                marginBottom: 'none',
                                            }}>/</span>
                                        <span style={{ marginTop: '0' }}>15</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col
                        sm={cardSize.sm}
                        md={cardSize.md}
                        lg={cardSize.lg}
                        xl={cardSize.xl}
                        style={{ padding: '10px' }}>
                        <div
                            style={{
                                borderRadius: '5%',
                                overflow: 'hidden',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                padding: '0',
                            }}>
                            <div style={{ width: '100%', height:"300px", overflow:'hidden'}}>
                                <img
                                    style={{ width: '100%',transform:'50%,50%',cursor: 'pointer' }}
                                    alt="..."
                                    src={`/images/community/computer.jpg`}
                                    onClick={handleClick}></img>
                            </div>
                            <div
                                style={{
                                    textAlign: 'left',
                                    padding: '10px',
                                }}>
                                <div>
                                    <span
                                        style={{
                                            fontWeight: '700',
                                            cursor: 'pointer',
                                            fontSize: clientWidth <= 768 ? '25px' : '',
                                        }}
                                        onClick={handleClick}>
                                        프로젝트 하실분 모집중입니다.00000000000000000
                                    </span>
                                </div>
                                {/*<p
                                    className="category"
                                    style={{
                                        textDecoration: 'line-through',
                                        marginBottom: 0,
                                        fontSize: clientWidth <= 768 ? '20px' : '',
                                    }}>
                                    ￦35,000
                                </p>*/}
                                <div style={{ justifyContent: 'space-between', display: 'flex' }}>
                                    <span style={{ display: 'inline-block', textAlign: 'left' }}>
                                        <p className="category" style={{ color: 'black' }}>

                                            <span style={{ fontSize: clientWidth <= 768 ? '20px' : '' }}>닉네임임</span>
                                        </p>
                                    </span>

                                    {/*<span style={{ display: 'inline-block', textAlign: 'right' }}>
                                        <Star size={clientWidth <= 768 ? 20 : 17} score={5}></Star>
                                    </span>*/}
                                </div>
                                <div style={{ justifyContent: 'space-between', display: 'flex' }}>
                                    <span
                                        style={{
                                            color: 'gray',
                                            display: 'inline-block',
                                            textAlign: 'left',

                                            fontSize: clientWidth <= 768 ? '15px' : '',
                                        }}>
                                        2023.11.10
                                    </span>
                                    <span
                                        style={{
                                            color: 'gray',
                                            display: 'inline-block',
                                            textAlign: 'right',

                                            fontSize: clientWidth <= 768 ? '15px' : '',
                                        }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-dots" viewBox="0 0 16 16" style={{marginRight:"3px"}}>
  <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
  <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z"/>
</svg>
                                        댓글 12
                                    </span>
                                </div>
                                <div style={{ justifyContent: 'space-between', display: 'flex' }}>
                                    <Button
                                        className="btn-round"
                                        color="success"
                                        type="button"
                                        onClick={e => {
                                            e.preventDefault();
                                        }}
                                        style={{
                                            fontFamily: 'nanumsquare',
                                            fontSize: clientWidth <= 768 ? '15px' : '',
                                        }}>
                                        모집 중
                                    </Button>
                                    <Button
                                        className="btn-round"
                                        color="primary"
                                        type="button"
                                        onClick={e => {
                                            e.preventDefault();
                                        }}
                                        style={{
                                            fontFamily: 'nanumsquare',
                                            fontSize: clientWidth <= 768 ? '15px' : '',
                                        }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people-fill" viewBox="0 0 16 16" style={{marginRight:"4px"}}>
                                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                                        </svg>
                                        1
                                        <span
                                            style={{

                                                marginLeft: '5px',
                                                marginRight: '5px',
                                                marginBottom: 'none',
                                            }}>/</span>
                                        <span style={{ marginTop: '0' }}>15</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col
                        sm={cardSize.sm}
                        md={cardSize.md}
                        lg={cardSize.lg}
                        xl={cardSize.xl}
                        style={{ padding: '10px' }}>
                        <div
                            style={{
                                borderRadius: '5%',
                                overflow: 'hidden',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                padding: '0',
                            }}>
                            <div style={{ width: '100%', height:"300px", overflow:'hidden'}}>
                                <img
                                    style={{ width: '100%',transform:'50%,50%',cursor: 'pointer' }}
                                    alt="..."
                                    src={`/images/community/computer.jpg`}
                                    onClick={handleClick}></img>
                            </div>
                            <div
                                style={{
                                    textAlign: 'left',
                                    padding: '10px',
                                }}>
                                <div>
                                    <span
                                        style={{
                                            fontWeight: '700',
                                            cursor: 'pointer',
                                            fontSize: clientWidth <= 768 ? '25px' : '',
                                        }}
                                        onClick={handleClick}>
                                        프로젝트 하실분 모집중입니다.00000000000000000
                                    </span>
                                </div>
                                {/*<p
                                    className="category"
                                    style={{
                                        textDecoration: 'line-through',
                                        marginBottom: 0,
                                        fontSize: clientWidth <= 768 ? '20px' : '',
                                    }}>
                                    ￦35,000
                                </p>*/}
                                <div style={{ justifyContent: 'space-between', display: 'flex' }}>
                                    <span style={{ display: 'inline-block', textAlign: 'left' }}>
                                        <p className="category" style={{ color: 'black' }}>

                                            <span style={{ fontSize: clientWidth <= 768 ? '20px' : '' }}>닉네임임</span>
                                        </p>
                                    </span>

                                    {/*<span style={{ display: 'inline-block', textAlign: 'right' }}>
                                        <Star size={clientWidth <= 768 ? 20 : 17} score={5}></Star>
                                    </span>*/}
                                </div>
                                <div style={{ justifyContent: 'space-between', display: 'flex' }}>
                                    <span
                                        style={{
                                            color: 'gray',
                                            display: 'inline-block',
                                            textAlign: 'left',

                                            fontSize: clientWidth <= 768 ? '15px' : '',
                                        }}>
                                        2023.11.10
                                    </span>
                                    <span
                                        style={{
                                            color: 'gray',
                                            display: 'inline-block',
                                            textAlign: 'right',

                                            fontSize: clientWidth <= 768 ? '15px' : '',
                                        }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-dots" viewBox="0 0 16 16" style={{marginRight:"3px"}}>
  <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
  <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z"/>
</svg>
                                        댓글 12
                                    </span>
                                </div>
                                <div style={{ justifyContent: 'space-between', display: 'flex' }}>
                                    <Button
                                        className="btn-round"
                                        color="success"
                                        type="button"
                                        onClick={e => {
                                            e.preventDefault();
                                        }}
                                        style={{
                                            fontFamily: 'nanumsquare',
                                            fontSize: clientWidth <= 768 ? '15px' : '',
                                        }}>
                                        모집 중
                                    </Button>
                                    <Button
                                        className="btn-round"
                                        color="primary"
                                        type="button"
                                        onClick={e => {
                                            e.preventDefault();
                                        }}
                                        style={{
                                            fontFamily: 'nanumsquare',
                                            fontSize: clientWidth <= 768 ? '15px' : '',
                                        }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people-fill" viewBox="0 0 16 16" style={{marginRight:"4px"}}>
                                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                                        </svg>
                                        1
                                        <span
                                            style={{

                                                marginLeft: '5px',
                                                marginRight: '5px',
                                                marginBottom: 'none',
                                            }}>/</span>
                                        <span style={{ marginTop: '0' }}>15</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col
                        sm={cardSize.sm}
                        md={cardSize.md}
                        lg={cardSize.lg}
                        xl={cardSize.xl}
                        style={{ padding: '10px' }}>
                        <div
                            style={{
                                borderRadius: '5%',
                                overflow: 'hidden',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                padding: '0',
                            }}>
                            <img
                                style={{ width: '100%', cursor: 'pointer' }}
                                alt="..."
                                src={`/images/lecture/thumb_Java.jpg`}
                                onClick={handleClick}></img>

                            <div
                                style={{
                                    textAlign: 'left',
                                    padding: '10px',
                                }}>
                                <div>
                                    <span
                                        style={{
                                            fontWeight: '700',
                                            cursor: 'pointer',
                                            fontSize: clientWidth <= 768 ? '25px' : '',
                                        }}
                                        onClick={handleClick}>
                                        자바 프로젝트 하실분000000000000000
                                    </span>
                                </div>
                                <div style={{ justifyContent: 'space-between', display: 'flex' }}>
                                    <span style={{ display: 'inline-block', textAlign: 'left' }}>
                                        <p className="category" style={{ color: 'black' }}>
                                            <span style={{ fontSize: clientWidth <= 768 ? '20px' : '' }}>닉네임임</span>
                                        </p>
                                    </span>

                                    {/*<span style={{ display: 'inline-block', textAlign: 'right' }}>
                                        <Star size={clientWidth <= 768 ? 20 : 17} score={5}></Star>
                                    </span>*/}
                                </div>
                                <div style={{ justifyContent: 'space-between', display: 'flex' }}>
                                    <span
                                        style={{
                                            color: 'gray',
                                            display: 'inline-block',
                                            textAlign: 'left',

                                            fontSize: clientWidth <= 768 ? '15px' : '',
                                        }}>
                                        2023.10.10
                                    </span>
                                    <span
                                        style={{
                                            color: 'gray',
                                            display: 'inline-block',
                                            textAlign: 'right',

                                            fontSize: clientWidth <= 768 ? '15px' : '',
                                        }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-dots" viewBox="0 0 16 16" style={{marginRight:"3px"}}>
  <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
  <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z"/>
</svg>
                                        댓글 12
                                    </span>
                                </div>
                                <div style={{ justifyContent: 'space-between', display: 'flex' }}>
                                    <Button
                                        className="btn-round"
                                        color=""
                                        type="button"
                                        onClick={e => {
                                            e.preventDefault();
                                        }}
                                        style={{
                                            fontFamily: 'nanumsquare',
                                            fontSize: clientWidth <= 768 ? '15px' : '',
                                        }}>
                                        마감
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

// @ts-ignore
export default CardList;
