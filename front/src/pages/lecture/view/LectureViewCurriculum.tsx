import {Col, Table} from 'reactstrap';
import React, {useEffect, useState} from 'react';
import {changeDTO} from '../../../store/changeDTO';
import Subhead from '../../../Subhead';
import {API_BASE_URL, apiClient} from "../../../App";

function LectureViewCurriculum({lecture}) {
    const [partList, setParts] = useState<{
        partNo: number,
        lectureNo: number,
        title: string
    }[]>([]);

    useEffect(() => {
        if (lecture?.lectureNo) {
            apiClient.get(`/lecture/part/list?lectureNo=${lecture.lectureNo}`).then(response =>
                setParts(response.data)).catch(err => {
                console.log(err)
            })
        }
    }, [lecture]);
    return (
        <Col lg="9">
            <Subhead title={'커리큘럼'}></Subhead>
            {partList?.map((part, index) => <LectureViewCurriculumTable key={part.partNo} index={index} part={part}></LectureViewCurriculumTable>)}
        </Col>
    );
}

interface LectureViewCurriculumTableProps {
    part: {
        partNo: number,
        lectureNo: number,
        title: string
    },
    index:number
}

function LectureViewCurriculumTable({part, index}: LectureViewCurriculumTableProps) {
    let [viewCurriculum, setViecurriculum] = useState<boolean[]>([true, false]);
    const [contentList, setContentList] = useState<{ contentNo: number,lectureNo:number,title:string,content:string,partNo:number }[]>()
    useEffect(() => {
        if (part)
            apiClient.get(`/lecture/content/listByPart?partNo=${part.partNo}`).then(
                response => setContentList(response.data)).catch(err => {
                console.log(err)
            })
    }, [part]);
    return (
        <div style={{marginTop: '20px'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
                <span style={{fontSize: '20px'}}>{index+1}강</span>
                <i
                    className={viewCurriculum[0] ? 'bi bi-dash-circle' : 'bi bi-plus-circle'}
                    style={{fontSize: '20px', cursor: 'pointer'}}
                    onClick={() => {
                        changeDTO(setViecurriculum, 0, !viewCurriculum[0]);
                    }}></i>
            </div>
            {viewCurriculum[0] && (
                <Table>
                    <tbody>
                        {Array.isArray(contentList) && contentList?.map(content =>
                            <tr key={content.contentNo}
                                className={'LectureViewCurriculumTable'}
                                style={{
                                    border:   '1px solid lightgray',
                                    fontSize: '18px',
                                }}>
                                <td style={{border: 'none', width: '0px'}}>
                                    <i className="bi bi-caret-right-square"></i>
                                </td>
                                <td style={{border: 'none'}}>
                                    <span>{content.title}</span>
                                </td>
                                {/*<td style={{border: 'none', width: '65px'}}>
                                    <div
                                        style={{
                                            borderRadius:    '5px',
                                            backgroundColor: 'skyblue',
                                            color:           'white',
                                            fontFamily:      'nanumsquare',
                                            display:         'flex',
                                            justifyContent:  'center',
                                        }}>
                                        <span>무료</span>
                                    </div>
                                </td>*/}
                                {/*<td style={{width: '100px', border: 'none'}}>
                                    <i className="bi bi-watch"></i>
                                    <span style={{marginLeft: '10px'}}>11:00</span>
                                </td>*/}

                            </tr>)}

                    </tbody>
                </Table>
            )}
        </div>
    );
}

export default LectureViewCurriculum;
