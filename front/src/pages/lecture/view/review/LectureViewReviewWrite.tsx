import React from "react";
import Star from "../../../../components/Lecture/Star";
import {Button} from "reactstrap";

function LectureViewReviewWrite(){
    return<>
        <div style={{marginTop:'50px'}}>
            <p style={{fontSize:'25px'}}>리뷰 작성</p>
            <p>제목</p>
            <input style={{padding:'5px',width:'100%', border:'1px solid lightgray', borderRadius:'2px'}}/>
            <p style={{marginTop:'20px'}}>점수 <Star change={true} size={17}></Star></p>
            <textarea style={{width:'100%', height:'200px',border:'1px solid lightgray',padding:'5px', borderRadius:'2px'}}/>
            <Button color='info' style={{fontFamily:'nanumsquare', fontWeight:'500'}}>리뷰 작성</Button>
        </div>
    </>
}
export default LectureViewReviewWrite