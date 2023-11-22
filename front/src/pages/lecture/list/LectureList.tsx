import React, {useEffect, useState} from 'react';
import SearchBar from '../../../components/Lecture/SearchBar';
import '../scss/lecture/list/list.scss';
import ListTable from '../../../components/Lecture/ListTable';
import {API_BASE_URL} from "../../../App";
import axios from "axios";

function LectureList() {
    const [tags, setTags] = useState<{
        value: number,
        label: string
    }[]>([])
    const [levels, setLevels] = useState<{
        value: number,
        label: string
    }[]>([])


    useEffect(() => {
        //태그
        if (tags.length === 0)
            axios.get(`${API_BASE_URL}/lecture/tags`).then((res) => {
                if (res.data.length !== 0) {
                    const newTags = res.data.map((tag) => ({
                        value: tag.tagNo,
                        label: tag.tagName,
                    }));
                    // 중복된 값을 필터링하여 추가
                    setTags((prevTags) => {
                        const uniqueTags = newTags.filter(newTag => !prevTags.some(prevTag => prevTag.value === newTag.value));
                        return [...(prevTags || []), ...uniqueTags];
                    });
                }
            }).catch((err) => {
                console.log(err);
            });
        //레벨
        axios.get(`${API_BASE_URL}/lecture/levels`).then((res) => {
            const newLevel = res.data.map((level) => ({
                value: level.levelNo,
                label: level.levelName,
            }));

            // 중복된 값을 필터링하여 추가
            setLevels((prevLevels) => {
                const uniqueLevels = newLevel.filter(newTag => !prevLevels.some(prevTag => prevTag.value === newTag.value));
                return [...(prevLevels || []), ...uniqueLevels];
            });
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    const [sortType, setSortType] = useState({
        title:        'sort',
        list:         [
            {value: 'lectureNo', label: '최신순'},
            {value: 'hit', label: '조회순'},
            {value: 'sold', label: '판매많은순'},
            {value: 'review', label: '리뷰많은순'},
            {value: 'price', label: '가격높은순'},
        ],
        isSearchable: false,
        isMulti:      false,
    });
    const [sorts, setSorts] = useState<{
        title: string;
        placeholder: string;
        list: { value: number; label: string }[];
        isSearchable?: boolean;
        isMulti?: boolean;
    }[]>([
        {
            title:        'level',
            placeholder:  '레벨을 선택해주세요',
            list:         [],
            isSearchable: false,
            isMulti:      false,
        },
        {
            title:       'tag',
            placeholder: '태그를 선택해주세요',
            list:        [],
            isMulti:     true,
        },
    ]);
    useEffect(() => {
        // ... (이미 있는 코드)

        // 태그 데이터를 sorts 상태의 0번째 배열의 list에 넣습니다.
        setSorts((prevSorts) => {
            const updatedSorts = [...prevSorts];
            updatedSorts[1].list = tags.map(tag => ({ value: tag.value, label: tag.label }));
            return updatedSorts;
        });
    }, [tags]);

    useEffect(() => {
        // ... (이미 있는 코드)

        // 태그 데이터를 sorts 상태의 0번째 배열의 list에 넣습니다.
        setSorts((prevSorts) => {
            const updatedSorts = [...prevSorts];
            updatedSorts[0].list = levels.map(tag => ({ value: tag.value, label: tag.label }));
            return updatedSorts;
        });
    }, [levels]);

    return (
        <>
            <div style={{marginTop: '100px'}}></div>
            <SearchBar sorts={sorts}></SearchBar>
            <ListTable sorts={sorts} sortType={sortType} isLoadingType={true} title={'강의 목록'}></ListTable>
        </>
    );
}

export default LectureList;
