import Star from "../../../../components/Lecture/Star";
import {Progress} from "reactstrap";
import React from "react";


interface ReviewStarProps {
    count? : number
    total : number
}
function LectureReviewStart({total, count=0}: ReviewStarProps) {
    return<>
        <div style={{marginTop: '20px'}}>
            <span style={{fontSize: '25px', marginRight: '10px'}}>5</span>
            <Star size={20}></Star>
            <span style={{fontSize: '15px', marginLeft: '10px', color: 'gray'}}>{total} Ratings</span>
            <LectureReviewStarPersent star={5} count={30} total={total} ></LectureReviewStarPersent>
            <LectureReviewStarPersent star={4} count={10} total={total} ></LectureReviewStarPersent>
            <LectureReviewStarPersent star={3} count={4} total={total} ></LectureReviewStarPersent>
            <LectureReviewStarPersent star={2} total={44} ></LectureReviewStarPersent>
            <LectureReviewStarPersent star={1} total={44} ></LectureReviewStarPersent>
        </div></>
}
interface ReviewStarPersentProps {
    star: number
    count? : number
    total : number
}
function LectureReviewStarPersent({star, total, count=0}: ReviewStarPersentProps) {
    let starPresent = count / total * 100;
    return <>
        <div className="progress-container progress-success"
             style={{display: "flex", justifyContent: "center", marginTop: '2px'}}>

                <span style={{fontSize: '12px', marginTop: '6.5px', width: '7%', marginRight: '1%', color: "black"}}
                      className="progress-value">
                    <i className={"bi bi-star-fill"}
                       style={{color: "gray", fontSize: ('12px'), marginRight: '15%'}}></i>
                    <span>{star}</span></span>
            <Progress max="100" value={starPresent} style={{height: '30px', borderRadius: '2px', width: '82%', margin: 0}}>
            </Progress>
            <span style={{fontSize: '20px', width: '5%', marginLeft: '5%', color: "black"}}
                  className="progress-value">{count!==0&&count}</span>
        </div>
    </>
}

export default LectureReviewStart