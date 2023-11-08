import {Col, Table} from "reactstrap";
import React, {useEffect, useState} from "react";
import {changeDTO} from "../../../store/changeDTO";
import Subhead from "../../../Subhead";

function LectureViewCurriculum() {
    return <>
        <Col lg='9'>
            <Subhead title={'커리큘럼'}></Subhead>
            <LectureViewCurriculumTable></LectureViewCurriculumTable>
            <LectureViewCurriculumTable></LectureViewCurriculumTable>
            <LectureViewCurriculumTable></LectureViewCurriculumTable>
        </Col></>
}

function LectureViewCurriculumTable() {
    let [viewCurriculum, setViecurriculum] = useState<boolean[]>([true, false]);
    return <>
        <div style={{marginTop: '20px'}}>
            <div style={{display: "flex", justifyContent: 'space-between', marginBottom: '10px'}}>
                <span style={{fontSize: '20px'}}>1강</span>
                <i
                    className={viewCurriculum[0]?"bi bi-dash-circle":"bi bi-plus-circle"} style={{fontSize: '20px', cursor:"pointer"}} onClick={() => {
                    changeDTO(setViecurriculum,0,!viewCurriculum[0])
                }}></i>
            </div>
            {viewCurriculum[0] && <Table>
                <tbody>
                    <tr style={{display: "flex", justifyContent: "space-between", border: '1px solid lightgray'}}>
                        <td style={{border: "none"}}>
                            <i className="bi bi-caret-right-square"></i>
                            <span style={{marginLeft: '20px'}}>React 배우기 전에 쓰는 이유부터 알아야</span>
                        </td>
                        <td style={{border: "none", display: "flex", justifyContent: "space-between"}}>
                            <div
                                style={{
                                    marginRight: '20px',
                                    paddingLeft: '10px',
                                    paddingRight: '10px',
                                    borderRadius: '5px',
                                    backgroundColor: 'skyblue',
                                    color: "white",
                                    fontFamily: 'nanumsquare',
                                }}>무료
                            </div>
                            <div>
                                <i className="bi bi-watch"></i>
                                <span style={{marginLeft: '10px'}}>11:00</span>
                            </div>
                        </td>
                    </tr>
                    <tr style={{display: "flex", justifyContent: "space-between", border: '1px solid lightgray'}}>
                        <td style={{border: "none"}}>
                            <i className="bi bi-caret-right-square"></i>
                            <span style={{marginLeft: '20px'}}>React 배우기 전에 쓰는 이유부터 알아야</span>
                        </td>
                        <td style={{border: "none", display: "flex", justifyContent: "space-between"}}>
                            <div
                                style={{
                                    marginRight: '20px',
                                    paddingLeft: '10px',
                                    paddingRight: '10px',
                                    borderRadius: '5px',
                                    backgroundColor: 'skyblue',
                                    color: "white",
                                    fontFamily: 'nanumsquare',
                                }}>무료
                            </div>
                            <div>
                                <i className="bi bi-watch"></i>
                                <span style={{marginLeft: '10px'}}>11:00</span>
                            </div>
                        </td>
                    </tr>
                    <tr style={{display: "flex", justifyContent: "space-between", border: '1px solid lightgray'}}>
                        <td style={{border: "none"}}>
                            <i className="bi bi-caret-right-square"></i>
                            <span style={{marginLeft: '20px'}}>React 배우기 전에 쓰는 이유부터 알아야</span>
                        </td>
                        <td style={{border: "none", display: "flex", justifyContent: "space-between"}}>
                            <div
                                style={{
                                    marginRight: '20px',
                                    paddingLeft: '10px',
                                    paddingRight: '10px',
                                    borderRadius: '5px',
                                    backgroundColor: 'skyblue',
                                    color: "white",
                                    fontFamily: 'nanumsquare',
                                }}>무료
                            </div>
                            <div>
                                <i className="bi bi-watch"></i>
                                <span style={{marginLeft: '10px'}}>11:00</span>
                            </div>
                        </td>
                    </tr>
                </tbody>

            </Table>}
        </div>
    </>
}

export default LectureViewCurriculum