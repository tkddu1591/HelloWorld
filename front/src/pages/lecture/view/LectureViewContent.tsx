import {Col} from "reactstrap";
import React from "react";
import Banner from "../../../components/Lecture/Banner";

function LectureViewContent(){
    return<>
        <Col lg="9">
            <div
                style={{width: '100%', padding: '20px', paddingLeft: '30px', marginTop: '10px', border: '1px solid lightgray', borderRadius: '5px', backgroundColor: '#Fafafa'}}>
                <span style={{color:'red', fontSize:'16px'}}>Home</span>
            </div>
            <div style={{marginTop:'40px', fontFamily:'NanumSquare, sans-serif', fontSize:'14px'}} className='detailContent'>
                <p>코드짜다가 갑자기 2일 전으로 시간을 돌리고 싶으면?</p>
                <p>팀원과 코드 충돌없이 협업하고 싶으면?</p>
                <p>버전 컨트롤을 도와주는 소프트웨어인 git 쓰면 가능합니다.</p>
                <p>그리고 git 모르면 취업 못함</p>
                <br/>
                <br/>
                <p>git checkout으로 뻘짓하던 예전보다 더 쉬워진 git restore, switch 신문법을 이용하고</p>
                <p>구닥다리 Vim과 터미널 말고 VSCode 에디터를 사용해서 git을 배워봅시다.</p>
                <br/>
                <br/>
                <p>평생 코딩노예만 할 것이면 git add, git commit, git push, git pull 만 알아도 되긴 합니다만</p>
                <p>나중에 코딩노예 팀을 지휘하고 싶은 분들을 위한 branch, merge 전략까지 다루고 있습니다.</p>
                <br/>
                <br/>
                <p>(현재 수강료 0원 이벤트중, 수강기간 6개월)</p>
            </div>
            <Banner></Banner>
        </Col>
    </>
}

export default LectureViewContent