import React, {useState} from "react";
import '../scss/lecture/detail/aside.scss'
import LectureDetailAside from "./aside/LectureDetailAside";
import LectureDetailPlayer from "./LectureDetailPlayer";
import '../scss/lecture/detail/detailContent.scss'
import Subhead from "../../../Subhead";

function LectureDetail() {

    let [timeCheck, setTimeCheck] = useState([{
        time: 240,
        title: " 설치 (맥/윈도우)"
    }, {
        time: 300,
        title: "git 설치 (맥/윈도우)"
    }]);

    return (
        <>
            <LectureDetailAside></LectureDetailAside>

            <div style={{width: '100%', height: '100%', zIndex:0, position:'relative'}} className={'detailContent'}>
                <div style={{position: 'absolute', padding: '80px', paddingTop: '40px', width: '100%', height: '100%'}}>
                    <div style={{display: "flex", justifyContent: 'right', color: 'gray'}}>
                        <i className="bi bi-bar-chart-fill"></i> <span style={{marginLeft: '5px'}}>2 분</span>
                    </div>
                    <p style={{fontSize: '20px', fontWeight: '700'}}>Git 설치법 (윈도우/ 맥북)</p>

                    <LectureDetailPlayer timeCheck={timeCheck}></LectureDetailPlayer>
                    <div style={{marginTop:'40px'}}>
                        <p>코드를 짜든 디자인을 하든 레포트를 쓰든</p>
                        <p>파일 변경내역을 보존하고 관리하는 과정이 필요합니다. </p>
                        <p>그러고 싶을 때 프로그래머들은 git을 사용합니다.</p>
                        <p>이거 쓰면 위 사진처럼 파일 복사본을 귀찮게 만들지 않고도 깔끔하게 버전관리가 가능합니다. </p>
                        <br/>
                        <p>git은 리눅스 만든 아저씨가 2005년에 만든 간단한 프로그램인데</p>
                        <p>그때랑 다르게 시대가 많이 바뀌어서</p>
                        <p>- 예전처럼 git checkout 파생명령어 20개 외울 필요없이 신 문법 switch, restore 등을 사용해서 </p>
                        <p>- 복잡한 Vim + Git bash 말고 깔끔한 VSCode 에디터로 </p>
                        <p>쉽게 배워봅시다. </p>
                        <br/>
                        <Subhead title={'git & 코드 에디터 설치'}></Subhead>
                        <br/>
                        <p>1. 구글에 visual studio code 검색해서 설치합시다.</p>
                        <p>코드 짤 에디터같은거 준비하면 됩니다. </p>
                        <p>싫으면 그냥 윈도우 메모장같은거 써도 되긴 합니다. </p>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                </div>

            </div>
        </>
    );
}

function LectureDetailMain() {

}


export default LectureDetail