import React, { useState } from 'react';
import SearchBar from '../../../components/Lecture/SearchBar';
import '../scss/lecture/list/list.scss';
import ListTable from '../../../components/Lecture/ListTable';

function LectureList() {
    const [sortType, setSortType] = useState({
        title: 'sort',
        list: [
            { value: 'lectureNo', label: '최신순' },
            { value: 'hit', label: '조회순' },
            { value: 'sold', label: '판매많은순' },
            { value: 'review', label: '리뷰많은순' },
            { value: 'price', label: '가격높은순' },
        ],
        isSearchable: false,
        isMulti: false,
    });
    const [sorts, setSorts] = useState([
        {
            title: 'level',
            placeholder: '레벨을 선택해주세요',
            list: [
                { value: 0, label: '전체' },
                { value: 1, label: '입문' },
                { value: 2, label: '초급' },
                { value: 3, label: '중급' },
                { value: 4, label: '고급' },
            ],
            isSearchable: false,
            isMulti: false,
        },
        {
            title: 'tag',
            placeholder: '태그를 선택해주세요',
            list: [
                { value: 'java', label: 'java' },
                { value: 'python', label: 'python' },
                { value: 'node', label: 'node' },
                { value: 'react', label: 'react' },
                { value: 'next', label: 'next' },
            ],
            isMulti: true,
        },
    ]);
    return (
        <>
            <div style={{ marginTop: '100px' }}></div>
            <SearchBar sorts={sorts}></SearchBar>
            <ListTable sorts={sorts} sortType={sortType} isLoadingType={true} title={'강의 목록'}></ListTable>
        </>
    );
}

export default LectureList;
