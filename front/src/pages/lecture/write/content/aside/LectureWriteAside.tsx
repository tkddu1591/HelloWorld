import React, { useEffect, useState } from 'react';
import LectureWriteAsideHeader from './LectureWriteAsideHeader';
import LectureWriteAsideTable from './LectureWriteAsideTable';
import LectureWriteAsideFooter from './LectureWriteAsideFooter';

function LectureWriteAside() {
   let [aside, setAside] = useState(false);
    let [partNum, setPartNum] = useState<number[]>([])

    const deleteByPartNum = (num: number) => {
        setPartNum((oldValues) => {
            return oldValues.filter((value) => {
                return value !== num
            })
        })
    }
   return (<div
            className={'aside'}
            style={{
               zIndex: '2',
               backgroundColor: '#fafafa',
               height: '100vh',
               width: '350px',
               position: 'fixed',
               translate: aside ? '0' : '-350px',
               transitionDuration: '0.5s',
            }}>
            <LectureWriteAsideHeader partNum={partNum} setPartNum={setPartNum} aside={aside} setAside={setAside}></LectureWriteAsideHeader>


            <div style={{ height: 'calc(100vh - 280px)', width: '100%', overflowY: 'scroll' }}>
                {partNum.map((value, index) => {
               return <LectureWriteAsideTable deleteByPartNum={deleteByPartNum} key={value} partNum={value}></LectureWriteAsideTable>})}
            </div>
            <LectureWriteAsideFooter></LectureWriteAsideFooter>
         </div>
   );
}

export default LectureWriteAside;
