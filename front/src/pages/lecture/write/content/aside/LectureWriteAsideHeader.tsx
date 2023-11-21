import React, {useState} from 'react';
import {Button} from 'reactstrap';
import {ProgressBar} from 'react-bootstrap';
import success from "../../../../codingtest/view/Success";

function LectureWriteAsideHeader({partNum: part, aside, setAside, setPartNum, generateOrderNo, lectureNo, contentList}) {
    return (
        <>
            <Button
                onClick={() => {
                    setAside(!aside);
                }}
                style={{
                    position:        'absolute',
                    display:         'inline',
                    fontSize:        '20px',
                    right:           '-80px',
                    top:             '60px',
                    backgroundColor: 'rgba(0,0,0,0.2)',
                    height:          '50px',
                }}>
                {aside ? <i className="bi bi-arrow-left"></i> : <i className="bi bi-arrow-right"></i>}
            </Button>
            <div
                style={{
                    height:          '160px',
                    padding:         '20px',
                    paddingTop:      '30px',
                    backgroundColor: '#383838',
                    color:           'white',
                    display:         'flex',
                    justifyContent:  'center',
                }}>
                <div style={{marginTop: '50px'}}>
                    <Button color={'success'} style={{fontSize: '15px', fontFamily: 'nanumsquare', width: '200px'}}
                     onClick={()=>{
                         setPartNum([...part, {orderNo: generateOrderNo(lectureNo, part.length+1), title: '', lectureNo:lectureNo}])
                         contentList.sort((a, b) => a.orderNo - b.orderNo);
                     }}>파트
                        추가</Button>

                </div>

            </div>
        </>
    );
}

export default LectureWriteAsideHeader;