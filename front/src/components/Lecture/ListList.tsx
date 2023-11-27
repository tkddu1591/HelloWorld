import {useNavigate} from 'react-router-dom';
import {Button, Col, Container, Row} from 'reactstrap';
import Star from './Star';
import React, {useEffect, useRef, useState} from 'react';
import {changeDTO} from "../../store/changeDTO";
import ScrollToTop from "../ScrollToTop";
import {getRandomValueFromArray} from "../../utils/getRandomValueFromArray";

interface ListListProps {
    list?: any;
    tagColor?: any
    end?: boolean
}

function ListList({tagColor, list, end}: ListListProps) {
    let navigate = useNavigate();


    function handleClick(e) {
        navigate('/lecture/view');
    }
    const [clientWidth, setClientWidth] = useState(document.body.clientWidth);

    const divRef = useRef<HTMLElement | null>(null);

    const heightPercentage = 70; // 너비의 20%


    return (
        <Container style={{marginTop: '20px'}}>

            {/*768*/}
            {Array.isArray(list) && list?.map((lecture, index) => {
                return <Row key={lecture.lectureNo + index + Math.random()} style={{marginBottom: '10px'}}>
                    <Col xl={3} lg={3} ref={divRef as React.RefObject<Col>}>
                    <img
                        style={{
                            width:        '100%',
                            height:    `${(divRef.current?.offsetWidth || 300) * heightPercentage / 100}px`,
                            cursor:       'pointer',
                            borderRadius: '10px',
                        }}
                        alt="..."
                        src={lecture.thumbURL}
                        onClick={handleClick}></img>
                </Col>
                    <Col xl={9} lg={9} style={{position: 'relative'}}>
                        <div>
                            <span
                                className={'listTitle'}
                                style={{
                                    fontSize: '20px',
                                    cursor:   'pointer',
                                }}>
                                {lecture.title}
                            </span>
                        </div>
                        <div
                            style={{
                                display:        'flex',
                                justifyContent: 'left',
                                fontSize:       '15px',
                                color:          'gray',
                                marginTop:      '10px',
                            }}>
                            {lecture.review !== 0 ? <>
                                    <Star size={15} score={5}></Star>
                                    <span style={{marginLeft: '5px '}}>({lecture.review} 리뷰)</span>
                                    <span style={{marginLeft: '5px '}}>1,200 sold</span></> :
                                <span>리뷰가 없습니다.</span>}
                        </div>
                        <div
                            style={{
                                display:        'flex',
                                justifyContent: 'left',
                                fontSize:       '15px',
                                marginTop:      '10px',
                            }}>
                            <span style={{marginLeft: '5px '}}>
                                {' '}
                                코드짜다가 갑자기 2일 전으로 시간을 돌리고 싶으면? 팀원과 코드 충돌없이 협업하고 싶으면?
                                버전 컨트롤을 도와주는 소프트웨어인 git 쓰면 가능합니다. 그리고 git 모르면 취업 못함 …
                            </span>
                            <div style={{bottom: 0}}></div>
                        </div>
                        <div
                            style={{
                                position: 'absolute',
                                bottom:   0,
                                right:    '0',
                                width:'100%'
                            }}>
                            <p
                                className="category"
                                style={{
                                    textDecoration: 'line-through',
                                    marginBottom:   0,
                                    display:        'flex',
                                    justifyContent: 'right',
                                    fontSize:       '20px',
                                }}>
                                ￦35,000
                            </p>
                            <div style={{justifyContent: 'space-between', display: 'flex'}}>
                                <div>
                                {Array.isArray(lecture.hasTagNames) && lecture.hasTagNames.map((tag, index) => {
                                    return <Button
                                        className="btn-round"
                                        color={(tagColor?.find(item => item.value === tag) as {
                                            value: string; color: string
                                        } | undefined)?.color || 'defaultColor'}
                                        type="button"
                                        onClick={e => {
                                            e.preventDefault();
                                        }}
                                        key={tag + index + lecture.lectureNo + Math.random()}
                                        style={{
                                            fontFamily:   'nanumsquare',
                                            paddingLeft:  '5px',
                                            paddingRight: '5px',
                                            marginBottom: '5px',
                                            fontSize:     clientWidth <= 768 ? '15px' : '',
                                        }}>
                                        #{tag}
                                    </Button>
                                })}</div>
                                <span style={{ textAlign: 'left'}}>
                                    <p className="category" style={{color: 'black', fontSize: '20px'}}>
                                        <span style={{color: 'red', marginRight: '10px'}}>50%</span>
                                        ￦35,000
                                    </p>
                                </span>
                            </div>
                        </div>
                    </Col>
                </Row>
            })}

            {end && <Row><Col style={{display: "flex", justifyContent: "center"}}>
                <span>마지막 페이지입니다.</span>
            </Col></Row>}

        </Container>
    );
}

export default ListList