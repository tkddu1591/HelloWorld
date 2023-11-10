import Banner from '../../../components/Lecture/Banner';
import React from 'react';
import ListTable from '../../../components/Lecture/ListTable';

function LectureHome() {
    return (
        <>
            <div className="clear-filter page-header" style={{ minHeight: '30vh', maxHeight: '500px', height: 'auto' }}>
                <Banner></Banner>
            </div>
            <ListTable isMore={true} title={'인기강의'}></ListTable>
            <ListTable isMore={true} title={'신규강의'}></ListTable>
            <ListTable isMore={true} title={'할인강의'}></ListTable>
        </>
    );
}

export default LectureHome;