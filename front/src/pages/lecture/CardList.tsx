import { Button, Col, Container, Row } from 'reactstrap';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Star from '../../components/Lecture/Star';

interface ListItem {
    colSize?: number;
}

function CardList({ colSize = 12 }: ListItem) {
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
                            <img
                                style={{ width: '100%', cursor: 'pointer' }}
                                alt="..."
                                src={`${process.env.PUBLIC_URL}/images/lecture/thumb_Java.jpg`}
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
                                        제목
                                    </span>
                                </div>
                                <p
                                    className="category"
                                    style={{
                                        textDecoration: 'line-through',
                                        marginBottom: 0,
                                        fontSize: clientWidth <= 768 ? '20px' : '',
                                    }}>
                                    ￦35,000
                                </p>
                                <div style={{ justifyContent: 'space-between', display: 'flex' }}>
                                    <span style={{ display: 'inline-block', textAlign: 'left' }}>
                                        <p className="category" style={{ color: 'black' }}>
                                            <span
                                                style={{
                                                    color: 'red',
                                                    marginRight: '10px',
                                                    fontSize: clientWidth <= 768 ? '20px' : '',
                                                }}>
                                                50%
                                            </span>
                                            <span style={{ fontSize: clientWidth <= 768 ? '20px' : '' }}>￦35,000</span>
                                        </p>
                                    </span>

                                    <span style={{ display: 'inline-block', textAlign: 'right' }}>
                                        <Star size={clientWidth <= 768 ? 20 : 17} score={5}></Star>
                                    </span>
                                </div>
                                <div style={{ justifyContent: 'space-between', display: 'flex' }}>
                                    <span
                                        style={{
                                            color: 'gray',
                                            display: 'inline-block',
                                            textAlign: 'left',

                                            fontSize: clientWidth <= 768 ? '15px' : '',
                                        }}>
                                        1,200 sold
                                    </span>
                                    <span
                                        style={{
                                            color: 'gray',
                                            display: 'inline-block',
                                            textAlign: 'right',

                                            fontSize: clientWidth <= 768 ? '15px' : '',
                                        }}>
                                        ( 1,222 리뷰 )
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
                                        북마크 중
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
                                        할인 중
                                        <span
                                            style={{
                                                borderLeft: '1px solid skyblue',
                                                marginLeft: '5px',
                                                marginRight: '5px',
                                                marginBottom: 'none',
                                            }}></span>
                                        <span style={{ marginTop: '0' }}>D-26</span>
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
                                src={`${process.env.PUBLIC_URL}/images/lecture/thumb_Java.jpg`}
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
                                        제목
                                    </span>
                                </div>
                                <p
                                    className="category"
                                    style={{
                                        textDecoration: 'line-through',
                                        marginBottom: 0,
                                        fontSize: clientWidth <= 768 ? '20px' : '',
                                    }}>
                                    ￦35,000
                                </p>
                                <div style={{ justifyContent: 'space-between', display: 'flex' }}>
                                    <span style={{ display: 'inline-block', textAlign: 'left' }}>
                                        <p className="category" style={{ color: 'black' }}>
                                            <span
                                                style={{
                                                    color: 'red',
                                                    marginRight: '10px',
                                                    fontSize: clientWidth <= 768 ? '20px' : '',
                                                }}>
                                                50%
                                            </span>
                                            <span style={{ fontSize: clientWidth <= 768 ? '20px' : '' }}>￦35,000</span>
                                        </p>
                                    </span>

                                    <span style={{ display: 'inline-block', textAlign: 'right' }}>
                                        <Star size={clientWidth <= 768 ? 20 : 17} score={5}></Star>
                                    </span>
                                </div>
                                <div style={{ justifyContent: 'space-between', display: 'flex' }}>
                                    <span
                                        style={{
                                            color: 'gray',
                                            display: 'inline-block',
                                            textAlign: 'left',

                                            fontSize: clientWidth <= 768 ? '15px' : '',
                                        }}>
                                        1,200 sold
                                    </span>
                                    <span
                                        style={{
                                            color: 'gray',
                                            display: 'inline-block',
                                            textAlign: 'right',

                                            fontSize: clientWidth <= 768 ? '15px' : '',
                                        }}>
                                        ( 1,222 리뷰 )
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
                                        북마크 중
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
                                src={`${process.env.PUBLIC_URL}/images/lecture/thumb_Java.jpg`}
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
                                        제목
                                    </span>
                                </div>
                                <p
                                    className="category"
                                    style={{
                                        textDecoration: 'line-through',
                                        marginBottom: 0,
                                        fontSize: clientWidth <= 768 ? '20px' : '',
                                    }}>
                                    ￦35,000
                                </p>
                                <div style={{ justifyContent: 'space-between', display: 'flex' }}>
                                    <span style={{ display: 'inline-block', textAlign: 'left' }}>
                                        <p className="category" style={{ color: 'black' }}>
                                            <span
                                                style={{
                                                    color: 'red',
                                                    marginRight: '10px',
                                                    fontSize: clientWidth <= 768 ? '20px' : '',
                                                }}>
                                                50%
                                            </span>
                                            <span style={{ fontSize: clientWidth <= 768 ? '20px' : '' }}>￦35,000</span>
                                        </p>
                                    </span>

                                    <span style={{ display: 'inline-block', textAlign: 'right' }}>
                                        <Star size={clientWidth <= 768 ? 20 : 17} score={5}></Star>
                                    </span>
                                </div>
                                <div style={{ justifyContent: 'space-between', display: 'flex' }}>
                                    <span
                                        style={{
                                            color: 'gray',
                                            display: 'inline-block',
                                            textAlign: 'left',

                                            fontSize: clientWidth <= 768 ? '15px' : '',
                                        }}>
                                        1,200 sold
                                    </span>
                                    <span
                                        style={{
                                            color: 'gray',
                                            display: 'inline-block',
                                            textAlign: 'right',

                                            fontSize: clientWidth <= 768 ? '15px' : '',
                                        }}>
                                        ( 1,222 리뷰 )
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
                                        북마크
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
                                        할인 중
                                        <span
                                            style={{
                                                borderLeft: '1px solid skyblue',
                                                marginLeft: '5px',
                                                marginRight: '5px',
                                                marginBottom: 'none',
                                            }}></span>
                                        <span style={{ marginTop: '0' }}>D-26</span>
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
                                src={`${process.env.PUBLIC_URL}/images/lecture/thumb_Java.jpg`}
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
                                        제목
                                    </span>
                                </div>
                                <p
                                    className="category"
                                    style={{
                                        textDecoration: 'line-through',
                                        marginBottom: 0,
                                        fontSize: clientWidth <= 768 ? '20px' : '',
                                    }}>
                                    ￦35,000
                                </p>
                                <div style={{ justifyContent: 'space-between', display: 'flex' }}>
                                    <span style={{ display: 'inline-block', textAlign: 'left' }}>
                                        <p className="category" style={{ color: 'black' }}>
                                            <span
                                                style={{
                                                    color: 'red',
                                                    marginRight: '10px',
                                                    fontSize: clientWidth <= 768 ? '20px' : '',
                                                }}>
                                                50%
                                            </span>
                                            <span style={{ fontSize: clientWidth <= 768 ? '20px' : '' }}>￦35,000</span>
                                        </p>
                                    </span>

                                    <span style={{ display: 'inline-block', textAlign: 'right' }}>
                                        <Star size={clientWidth <= 768 ? 20 : 17} score={5}></Star>
                                    </span>
                                </div>
                                <div style={{ justifyContent: 'space-between', display: 'flex' }}>
                                    <span
                                        style={{
                                            color: 'gray',
                                            display: 'inline-block',
                                            textAlign: 'left',

                                            fontSize: clientWidth <= 768 ? '15px' : '',
                                        }}>
                                        1,200 sold
                                    </span>
                                    <span
                                        style={{
                                            color: 'gray',
                                            display: 'inline-block',
                                            textAlign: 'right',

                                            fontSize: clientWidth <= 768 ? '15px' : '',
                                        }}>
                                        ( 1,222 리뷰 )
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
                                        북마크
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
