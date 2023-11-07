import {Button, Col, Container, FormGroup, Input, Row} from "reactstrap";
import React, {useState} from "react";
import Select from "react-select";
import SelectBox from "../../../components/SelectBox";
import CardList from "../CardList";
import LectureSearch from "../LectureSearch";


function LectureList() {
    const [sortType, setSortType] = useState(
        {
            title: 'sort',
            list: [
                {value: 'lectureNo', label: '최신순'},
                {value: 'hit', label: '조회순'},
                {value: 'sold', label: '판매많은순'},
                {value: 'review', label: '리뷰많은순'},
                {value: 'price', label: '가격높은순'},
            ],
            isSearchable: false,
            isMulti: false,
        })
    const [sorts, setSorts] = useState([
        {
            title: 'level',
            placeholder: '레벨을 선택해주세요',
            list: [
                {value: 0, label: '전체'},
                {value: 1, label: '입문'},
                {value: 2, label: '초급'},
                {value: 3, label: '중급'},
                {value: 4, label: '고급'},
            ],
            isSearchable: false,
            isMulti: false,
        },
        {
            title: 'tag',
            placeholder: '태그를 선택해주세요',
            list: [
                {value: 'java', label: 'java'},
                {value: 'python', label: 'python'},
                {value: 'node', label: 'node'},
                {value: 'react', label: 'react'},
                {value: 'next', label: 'next'},
            ],
            isMulti: true,
        },
    ])
    const [listLoading, setListLoading] = useState<{loading?:string, view?:string }>({loading:'scroll', view:'card'});
    return <>
        <div style={{marginTop: '100px'}}></div>
        <LectureSearch sorts={sorts}></LectureSearch>
        <div style={{marginTop: '20px'}}>
            <CardList title={"강의목록"} listLoading={listLoading} setListLoading={setListLoading}
                      sortType={sortType}></CardList>
        </div>

    </>
}


export default LectureList