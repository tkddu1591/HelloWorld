import React, {useEffect, useState} from 'react';
import LectureWriteAsideHeader from './LectureWriteAsideHeader';
import LectureWriteAsideTable from './LectureWriteAsideTable';
import LectureWriteAsideFooter from './LectureWriteAsideFooter';

function LectureWriteAside({lectureNo}) {
    let [aside, setAside] = useState(false);
    let [part, setPart] = useState<{ orderNo: number, title: string }[]>([])
    const updateTitle = (index, title, set) => {
        // orderNo가 1인 객체를 찾아 해당 객체를 복사한 후 title을 수정합니다.
        set(prevData => {
            return prevData.map(item =>
                item.orderNo === index ? {...item, title: title} : item
            );
        });
    };
    const deleteByPart = (item) => {
        setPart((oldValues) => {
            return oldValues.filter((value) => {
                return value !== item
            })
        })
    }


    return (<div
            className={'aside'}
            style={{
                zIndex:             '2',
                backgroundColor:    '#fafafa',
                height:             '100vh',
                width:              '350px',
                position:           'fixed',
                translate:          aside ? '0' : '-350px',
                transitionDuration: '0.5s',
            }}>
            <LectureWriteAsideHeader partNum={part} setPartNum={setPart} aside={aside}
                                     setAside={setAside}></LectureWriteAsideHeader>


            <div style={{height: 'calc(100vh - 280px)', width: '100%', overflowY: 'scroll'}}>
                {part.map((value, index) => {
                    return <LectureWriteAsideTable deleteByPart={deleteByPart} key={value.orderNo}
                                                   updateTitle={updateTitle} setPart={setPart}
                                                   part={value}></LectureWriteAsideTable>
                })}
            </div>
            <LectureWriteAsideFooter></LectureWriteAsideFooter>
        </div>
    );
}

export default LectureWriteAside;
