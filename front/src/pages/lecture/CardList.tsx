import {Button, Col, Container, Row} from 'reactstrap';
import React, {useEffect, useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Star from '../../components/Lecture/Star';
import lectureList from "./list/LectureList";
import {getRandomValueFromArray} from "../../utils/getRandomValueFromArray";

interface ListItem {
    colSize?: number;
    pageResponse?: any
    tags?: {value: number, label:string}[];
}

function CardList({colSize = 12, pageResponse, tags}: ListItem) {
    let navigate = useNavigate();
    let[tagColor, setTagColor] = useState<{value: string, color:string }[]>([]);
    const [clientWidth, setClientWidth] = useState(document.body.clientWidth);
    useEffect(() => {
        const windowResize = () => {
            setClientWidth(document.body.clientWidth);
        };

        window.addEventListener(`resize`, windowResize);

        if (tags!==undefined) {
            setTagColor(tags.map(tag => ({ value: tag.label, color: getRandomValueFromArray() })));
        }
        console.log(tagColor)
        return () => {
            window.removeEventListener(`resize`, windowResize);
        };

    }, [tags]); // tags가 변경될 때만 실행되도록 의존성 배열에 추가

    function handleClick(lectureNo) {
        navigate('/lecture/view?lectureNo='+lectureNo);
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

    const [divWidths, setDivWidths] = useState<{ div1?: number }>({});
    const divRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const handleResize = () => {
            setDivWidths({
                div1: divRef.current?.offsetWidth || 0,
                // ... (필요한 만큼 계속 추가)
            });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const heightPercentage = 60; // 너비의 20%

    return (
        <Container>
            <div style={{display: 'flex', justifyContent: 'space-between'}}></div>
            <Row style={{padding: '10px'}}>
                {pageResponse?.lectureList?.map((lecture, index) => {
                    return <Col key={lecture.lectureNo}
                                sm={cardSize.sm}
                                md={cardSize.md}
                                lg={cardSize.lg}
                                xl={cardSize.xl}
                                style={{padding: '10px'}}>
                        <div
                            style={{
                                borderRadius: '5%',
                                overflow:     'hidden',
                                boxShadow:    '0 4px 6px rgba(0,0,0,0.1)',
                                padding:      '0',
                            }}>
                            <div style={{
                                width: '100%', cursor: 'pointer', height: 'auto', marginBottom: 0, objectFit: 'cover',
                            }} ref={divRef as React.RefObject<HTMLDivElement>}>
                                <img
                                    style={{
                                        width:     '100%',
                                        height:    `${(divRef.current?.offsetWidth || 300) * heightPercentage / 100}px`,
                                        objectFit: 'contain'
                                    }}
                                    alt="..."
                                    src={lecture.thumbURL}
                                    onClick={()=>handleClick(lecture.lectureNo)}></img>
                            </div>

                            <div style={{justifyContent: 'left', display: 'flex'}}>
                                {lecture.hasTagNames.map((tag, index) => {
                                    return <Button
                                        className="btn-round"
                                        color={(tagColor.find(item => item.value === tag) as { value: string; color: string } | undefined)?.color || 'defaultColor'}
                                        type="button"
                                        onClick={e => {
                                            e.preventDefault();
                                        }}
                                        key={tag}
                                        style={{
                                            fontFamily:   'nanumsquare',
                                            paddingLeft:  '5px',
                                            paddingRight: '5px',
                                            marginBottom:'5px',
                                            fontSize:     clientWidth <= 768 ? '15px' : '',
                                        }}>
                                        #{tag}
                                    </Button>
                                })}

                            </div>
                            {lecture.discount!==0&&<Button
                                className="btn-round"
                                color="primary"
                                type="button"
                                onClick={e => {
                                    e.preventDefault();
                                }}
                                style={{
                                    fontFamily:   'nanumsquare',
                                    padding:'10px',
                                    marginTop:'0',
                                    marginBottom:'0',
                                    fontSize:     clientWidth <= 768 ? '15px' : '',                                    }}>
                                할인 중
                                {/*<span
                                    style={{
                                        borderLeft:   '1px solid skyblue',
                                        marginLeft:   '5px',
                                        marginRight:  '5px',
                                        marginBottom: 'none',
                                    }}></span>
                                <span style={{marginTop: '0'}}>D-26</span>*/}
                            </Button>}
                            <div
                                style={{
                                    textAlign: 'left',
                                    padding:   '10px',
                                }}>
                                <div>
                                    <span
                                        style={{
                                            marginTop:  0,
                                            fontWeight: '700',
                                            cursor:     'pointer',
                                            fontSize:   clientWidth <= 768 ? '25px' : '',
                                        }}
                                        onClick={handleClick}>
                                        {lecture.title}
                                    </span>
                                </div>
                                {lecture.discount !== 0 && <p
                                    className="category"
                                    style={{
                                        textDecoration: 'line-through',
                                        marginBottom:   0,
                                        fontSize:       clientWidth <= 768 ? '20px' : '',
                                        display:        "flex",
                                        justifyContent: "left"
                                    }}>
                                    ￦{lecture.price.toLocaleString()}
                                </p>}
                                <div style={{justifyContent: 'space-between', display: 'flex'}}>
                                    <span style={{display: 'inline-block', textAlign: 'left'}}>
                                        <p className="category" style={{color: 'black'}}>
                                            {lecture.discount !== 0 && <span
                                                style={{
                                                    color:       'red',
                                                    marginRight: '10px',
                                                    fontSize:    clientWidth <= 768 ? '20px' : '',
                                                }}>
                                                {lecture.discount}%
                                            </span>}
                                            <span style={{
                                                fontSize: clientWidth <= 768 ? '20px' : ''
                                            }}>{lecture.discount !== 0 ?
                                                (lecture.price - lecture.discount * lecture.price / 100).toLocaleString() :
                                                lecture.price.toLocaleString()} ￦</span>
                                        </p>
                                    </span>

                                    <span style={{display: 'inline-block', textAlign: 'right'}}>
                                        {lecture.score === 0 ?
                                            <span>평가 없음</span> :
                                            <Star size={clientWidth <= 768 ? 20 : 17} score={lecture.score}></Star>}
                                    </span>
                                </div>
                                <div style={{justifyContent: 'space-between', display: 'flex'}}>
                                    <span
                                        style={{
                                            color:     'gray',
                                            display:   'inline-block',
                                            textAlign: 'left',

                                            fontSize: clientWidth <= 768 ? '15px' : '',
                                        }}>
                                        {lecture.sold ? <span>{lecture.sold.toLocaleString()} sold</span> :
                                            <span>판매없음</span>}
                                    </span>
                                    <span
                                        style={{
                                            color:     'gray',
                                            display:   'inline-block',
                                            textAlign: 'right',

                                            fontSize: clientWidth <= 768 ? '15px' : '',
                                        }}>
                                        {lecture.review ? <span>( 1,222 리뷰 )</span> : <span>리뷰없음</span>}
                                    </span>
                                </div>

                            </div>
                        </div>
                    </Col>
                })}
            </Row>
        </Container>
    );
}

// @ts-ignore
export default CardList;
