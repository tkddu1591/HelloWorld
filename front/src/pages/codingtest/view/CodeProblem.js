import {Card, CardBody, CardSubtitle, CardText, CardTitle} from "reactstrap";
import React from "react";

function CodeProblem() {
    return<>
        <Card style={{ width: "60%",height:'auto',display:'block',margin:'0 auto' }}>
            <CardBody>
                <CardTitle tag="h4" style={{fontSize:'30px'}}>A+B(문제제목)</CardTitle>
                <CardSubtitle className="mb-2 text-muted" style={{display:'flex',textAlign:'center',justifyContent:'center',fontSize:'16px'}}>
                    <table class="table">
                        <thead>
                        <th>시간제한</th>
                        <th>메모리 제한</th>
                        <th>제출</th>
                        <th>정답인원수</th>
                        <th>정답비율</th>
                        </thead>
                        <tr>
                            <td>1초</td>
                            <td>128MB</td>
                            <td>45687</td>
                            <td>1</td>
                            <td>0.1%</td>
                        </tr>
                    </table>
                </CardSubtitle>
                <CardText style={{fontSize:'16px'}}>
                    <div>
                        <div style={{borderBottom:'1px dashed #E6E6FA '}}>
                            <div style={{display:'inline-block', borderBottom:'1px solid blue', width:'50px'}}>문제</div>
                        </div>
                        <div style={{marginTop:'15px',marginLeft:'20px'}}>
                            두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
                        </div>
                    </div>

                    <div style={{height:'20px'}}></div>

                    <div>
                        <div style={{borderBottom:'1px dashed #E6E6FA'}}>
                            <div style={{display:'inline-block', borderBottom:'1px solid blue', width:'50px'}}>입력</div>
                        </div>
                        <div style={{marginTop:'15px',marginLeft:'20px'}}>
                            첫째 줄에 A와 B가 주어진다. (0 ~ A,B ~ 10)
                        </div>
                    </div>

                    <div style={{height:'20px'}}></div>

                    <div>
                        <div style={{borderBottom:'1px dashed #E6E6FA '}}>
                            <div style={{display:'inline-block', borderBottom:'1px solid blue', width:'50px'}}>출력</div>
                        </div>
                        <div style={{marginTop:'15px',marginLeft:'20px'}}>
                            첫째 줄에 A+B를 출력한다.
                        </div>
                    </div>

                    <div style={{height:'20px'}}></div>

                    <div style={{display:'inline-block',width:'45%'}}>
                        <div style={{borderBottom:'1px dashed #E6E6FA',width:'100%',display:'inline-block'}}>
                            <div style={{display:'inline-block', borderBottom:'1px solid blue', width:'100px'}}>
                                예제 입력 1
                            </div>
                        </div>
                        <div>
                                        <pre style={{marginTop:'15px',marginLeft:'20px', border:'none',width:'80%'}}>
                                            1 2
                                        </pre>
                        </div>
                    </div>
                    <div style={{display:'inline-block',marginLeft:'30px',width:'45%' }}>
                        <div style={{borderBottom:'1px dashed #E6E6FA',width:'100%',display:'inline-block'}}>
                            <div style={{display:'inline-block', borderBottom:'1px solid blue', width:'100px'}}>
                                예제 출력 1
                            </div>
                        </div>
                        <div>
                                        <pre style={{marginTop:'15px',marginLeft:'20px', border:'none',width:'80%'}}>
                                            3
                                        </pre>
                        </div>
                    </div>

                    <div>
                        <div style={{borderBottom:'1px dashed #E6E6FA '}}>
                            <div style={{display:'inline-block', borderBottom:'1px solid blue', width:'50px'}}>힌트</div>
                        </div>
                        <div style={{marginTop:'15px',marginLeft:'20px'}}>
                            두수를 더해보세요~
                        </div>
                    </div>
                </CardText>

            </CardBody>
        </Card>

    </>
}

export default CodeProblem;