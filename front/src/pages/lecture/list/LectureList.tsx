import React, {useEffect, useState} from 'react';
import SearchBar from '../../../components/Lecture/SearchBar';
import '../scss/lecture/list/list.scss';
import ListTable from '../../../components/Lecture/ListTable';
import {apiClient} from "../../../App";
import {changeDTO} from "../../../store/changeDTO";
import {useLocation} from "react-router-dom";


function LectureList() {
    const [tags, setTags] = useState<{
        value: number,
        label: string
    }[]>([])
    const [levels, setLevels] = useState<{
        value: number,
        label: string
    }[]>([])

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const sort = searchParams.get('sort');

    useEffect(() => {
        //태그
        if (tags.length === 0)
            apiClient.get(`/lecture/tags`).then((res) => {
                if (res.data.length !== 0 && Array.isArray(res.data)) {
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
        apiClient.get(`/lecture/levels`).then((res) => {
            if (Array.isArray(res.data)) {
                const newLevel = res.data.map((level) => ({
                    value: level.levelNo,
                    label: level.levelName,
                }));


                // 중복된 값을 필터링하여 추가
                setLevels((prevLevels) => {
                    const uniqueLevels = newLevel.filter(newTag => !prevLevels.some(prevTag => prevTag.value === newTag.value));
                    return [...(prevLevels || []), ...uniqueLevels];
                });
            }
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    const [sortType] = useState({
        title:        'sort',
        list:         [
            {value: 'regDate', label: '최신순'},
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
            title:        'levelNo',
            placeholder:  '레벨을 선택해주세요',
            list:         [],
            isSearchable: false,
            isMulti:      false,
        },
        {
            title:       'tagList',
            placeholder: '태그를 선택해주세요',
            list:        [],
            isMulti:     true,
        },
    ]);
    useEffect(() => {
        // 태그 데이터를 sorts 상태의 0번째 배열의 list에 넣습니다.
        setSorts((prevSorts) => {
            const updatedSorts = [...prevSorts];
            updatedSorts[1].list = tags.map(tag => ({value: tag.value, label: tag.label}));
            return updatedSorts;
        });
    }, [tags]);


    useEffect(() => {
        // 태그 데이터를 sorts 상태의 0번째 배열의 list에 넣습니다.
        setSorts((prevSorts) => {
            const updatedSorts = [...prevSorts];
            updatedSorts[0].list = levels.map(tag => ({value: tag.value, label: tag.label}));
            updatedSorts[0].list = [...updatedSorts[0].list, {value: 4, label: '전체'}];
            return updatedSorts;
        });
    }, [levels]);

    type LectureType = {
        title?: string,
        tagList?: number[],
        studyDate?: number,
        levelNo?: number
    }
    const [lecture, setLecture] = useState<LectureType>();
    const [pageRequest, setPageRequest] = useState<{
        pg?: number,
        size?: number
        sort?: string
        lecture?: LectureType
    }>({
        sort: sort || 'regDate',
        size: 12
    });

    function setLectureTitle(value: string): void {
        changeDTO(setLecture, 'title', value)
            .then(r => console.log('타이틀 변경'))
            .catch(err => console.log(err));
    }

    function setSort(value: string): void {
        changeDTO(setPageRequest, 'sort', value)
            .then(r => console.log('sort 변경'))
            .catch(err => console.log(err));
    }


    const [isSearch, setIsSearch] = useState(false);
    const [pageResponse, setPageResponses] = useState<any>();


    const handleSearch = () => {
        console.log(pageRequest.pg)
        changeDTO(setPageRequest, 'lecture', lecture)
            .then(r =>
                apiClient.get(`/lecture/list`, {
                    params: {
                        pg:                  pageRequest?.pg,
                        size:                pageRequest?.size,
                        sort:                pageRequest?.sort,
                        'lecture.title':     lecture?.title,
                        'lecture.tagList':   lecture?.tagList?.join(','),
                        'lecture.studyDate': lecture?.studyDate,
                        'lecture.levelNo':   lecture?.levelNo
                    }
                }).then((res) => {
                    setPageResponses(res.data);
                }))
            .catch(err => console.log(err));

    }
    useEffect(() => {
        changeDTO(setPageRequest, 'pg', 1).then(res => {
            handleSearch()
        })
    }, [isSearch, pageRequest.sort]);
    useEffect(() => {
        handleSearch()
    }, [pageRequest.pg]);


    return (
        <>
            <div style={{marginTop: '100px'}}></div>
            <SearchBar sorts={sorts} setTitle={setLectureTitle} setSearch={setIsSearch} search={isSearch}
                       setSorts={setLecture}></SearchBar>
            <ListTable pageRequest={pageRequest}
                       sorts={sorts} sortType={sortType} setSort={setSort} tags={tags} isLoadingType={true}
                       title={'강의 목록'} setPageRequest={setPageRequest} pageResponse={pageResponse}></ListTable>
        </>
    );
}

export default LectureList;
