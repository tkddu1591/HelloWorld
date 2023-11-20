import React, {useState} from 'react';
import {Button} from 'reactstrap';
import {ProgressBar} from 'react-bootstrap';
import success from "../../../../codingtest/view/Success";

function LectureWriteAsideHeader({partNum, aside, setAside, setPartNum}) {
    let [now, setNow] = useState(60);
    let [newNum, setNewNum] = useState(0);
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
                         setPartNum([...partNum, {orderNo: newNum, title: ''}])
                         setNewNum(newNum+1)
                     }}>파트
                        추가</Button>
                </div>

            </div>
        </>
    );
}

export default LectureWriteAsideHeader;