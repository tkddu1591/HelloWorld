import Banner from '../../../components/Lecture/Banner';
import React, {useEffect, useState} from 'react';
import ListTable from '../../../components/Lecture/ListTable';
import {API_BASE_URL, apiClient} from "../../../App";
import {changeDTO} from "../../../store/changeDTO";

function LectureHome() {
    const [tags, setTags] = useState<{
        value: number,
        label: string
    }[]>([])
    useEffect(() => {
        //태그
        if (tags.length === 0)
            apiClient.get(`/lecture/tags`).then((res) => {
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
    }, []);

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
        sort: 'regDate',
        size: 12
    });
    const [hitPageResponse, setHitPageResponses] = useState();
    const [newPageResponse, setNewPageResponses] = useState();
    const [discountPageResponse, setDiscountPageResponses] = useState();
    useEffect(() => {
        apiClient.get(`/lecture/list`, {
            params: {
                pg:   1,
                size: 4,
                sort: 'hit',
            }
        }).then((res) => {
            setHitPageResponses(res.data);
        }).catch(err => console.log(err));

        apiClient.get(`/lecture/list`, {
            params: {
                pg:   1,
                size: 4,
                sort: 'regDate',
            }
        }).then((res) => {
            setNewPageResponses(res.data);
        }).catch(err => console.log(err));

        apiClient.get(`/lecture/list`, {
            params: {
                pg:   1,
                size: 4,
                sort: 'discount',
            }
        }).then((res) => {
            setDiscountPageResponses(res.data);
        }).catch(err => console.log(err));

    }, [])
    return (
        <>
            <div className="clear-filter page-header" style={{minHeight: '30vh', maxHeight: '500px', height: 'auto'}}>
                <Banner></Banner>
            </div>
            <ListTable isMore={true} moreLink={'/lecture/list?sort=hit'} pageResponse={hitPageResponse} tags={tags} title={'인기강의'}></ListTable>
            <ListTable isMore={true} pageResponse={newPageResponse} tags={tags} title={'신규강의'}></ListTable>
            <ListTable isMore={true} pageResponse={discountPageResponse} tags={tags} title={'할인강의'}></ListTable>
        </>
    );
}

export default LectureHome;