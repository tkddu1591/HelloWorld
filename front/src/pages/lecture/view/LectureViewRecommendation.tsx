import {Col} from "reactstrap";
import React, {useEffect, useState} from "react";
import CardList from "../CardList";
import Subhead from "../../../Subhead";
import {useNavigate} from "react-router-dom";
import {API_BASE_URL, apiClient} from "../../../App";
import lectureList from "../list/LectureList";
import {getRandomValueFromArray} from "../../../utils/getRandomValueFromArray";

function LectureViewRecommendation({tagList, tagColor}) {

    let navigate = useNavigate();
    const [pills, setPills] = React.useState("1");
    React.useEffect(() => {
        document.body.classList.add("profile-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove("profile-page");
            document.body.classList.remove("sidebar-collapse");
        };
    }, []);



    type LectureType = {
        title?: string,
        tagList?: number[],
        studyDate?: number,
        levelNo?: number
    }
    const [pageResponse, setPageResponses] = useState<{
        lectureList: LectureType[],
    }>();

    useEffect(() => {
        apiClient.get(`/lecture/list`, {
            params: {
                pg:                1,
                size:              3,
                sort:              'regDate',
                'lecture.tagList': tagList?.join(','),
            }
        }).then((res) => {
            setPageResponses(res.data);
        }).catch(err => console.log(err));

    }, [])
    return <Col lg='9'>
        <Subhead title={'관련 강좌'}></Subhead>
        <CardList colSize={9} tagColor={tagColor} list={pageResponse?.lectureList} ></CardList>
    </Col>

}

export default LectureViewRecommendation