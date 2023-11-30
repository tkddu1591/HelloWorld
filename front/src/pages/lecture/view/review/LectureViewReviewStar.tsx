import Star from "../../../../components/Lecture/Star";
import {Progress} from "reactstrap";
import React, {useEffect, useState} from "react";
import {API_BASE_URL, apiClient} from "../../../../App";


interface ReviewStarProps {
    pageResponse: any;
    lecture: any;
    isReviewWrite: boolean
}

function LectureReviewStart({pageResponse, lecture, isReviewWrite}: ReviewStarProps) {
    const [scoreList, setScoreList] = useState<{ score: number; count: any }[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            if (lecture?.lectureNo) {
                setScoreList([]);
                const newScoreList: { score: number; count: any }[] = [];

                // 중복을 체크하면서 값을 추가
                for (let score = 1; score <= 5; score++) {
                    const existingScore = newScoreList.find(item => item.score === score);

                    if (!existingScore) {
                        try {
                            const response = await apiClient.get(`/lecture/review/scoreCount?lectureNo=` + lecture.lectureNo, {
                                params: {
                                    lectureNo: lecture.lectureNo,
                                    score:     score
                                }
                            });

                            newScoreList.push({score: score, count: response.data});
                        } catch (error) {
                            console.error("Error fetching data:", error);
                        }
                    }
                }

                // 정렬 및 상태 업데이트
                newScoreList.sort((a, b) => b.score - a.score);
                setScoreList(newScoreList);
            }
        };

        fetchData();
    }, [lecture, isReviewWrite]);
    return <>{pageResponse && <div style={{marginTop: '20px'}}>
        {lecture.score === 0 ? <span>리뷰가 없습니다.</span> :
            <> <span style={{fontSize: '25px', marginRight: '10px'}}>{lecture.score?.toFixed(1)}</span>
                <Star size={20} score={lecture.score}></Star>
                <span style={{fontSize: '15px', marginLeft: '10px', color: 'gray'}}>{pageResponse.total} Ratings</span>
                {scoreList.map((item, index) => {
                    return <LectureReviewStarPersent star={item.score} count={item.count} key={item.score}
                                                     total={pageResponse.total}></LectureReviewStarPersent>
                })}
            </>
        }



    </div>}</>
}

interface ReviewStarPersentProps {
    star: number
    count?: number
    total: number
}

function LectureReviewStarPersent({star, total, count = 0}: ReviewStarPersentProps) {
    let starPresent = count / total * 100;
    return <div className="progress-container progress-success"
                style={{display: "flex", justifyContent: "center", marginTop: '2px'}}>

                <span style={{fontSize: '12px', marginTop: '6.5px', width: '7%', marginRight: '1%', color: "black"}}
                      className="progress-value">
                    <i className={"bi bi-star-fill"}
                       style={{color: "gray", fontSize: ('12px'), marginRight: '15%'}}></i>
                    <span>{star}</span></span>
        <Progress max="100" value={starPresent}
                  style={{height: '30px', borderRadius: '2px', width: '82%', margin: 0}}>
        </Progress>
        <span style={{fontSize: '20px', width: '5%', marginLeft: '5%', color: "black"}}
              className="progress-value">{count !== 0 && count}</span>
    </div>

}

export default LectureReviewStart