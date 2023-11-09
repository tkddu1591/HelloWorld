import { Col, Table } from 'reactstrap';
import React, { useEffect, useState } from 'react';
import { changeDTO } from '../../../store/changeDTO';
import Subhead from '../../../Subhead';

function LectureViewCurriculum() {
   return (
      <>
         <Col lg="9">
            <Subhead title={'커리큘럼'}></Subhead>
            <LectureViewCurriculumTable></LectureViewCurriculumTable>
            <LectureViewCurriculumTable></LectureViewCurriculumTable>
            <LectureViewCurriculumTable></LectureViewCurriculumTable>
         </Col>
      </>
   );
}

function LectureViewCurriculumTable() {
   let [viewCurriculum, setViecurriculum] = useState<boolean[]>([true, false]);
   return (
      <>
         <div style={{ marginTop: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
               <span style={{ fontSize: '20px' }}>1강</span>
               <i
                  className={viewCurriculum[0] ? 'bi bi-dash-circle' : 'bi bi-plus-circle'}
                  style={{ fontSize: '20px', cursor: 'pointer' }}
                  onClick={() => {
                     changeDTO(setViecurriculum, 0, !viewCurriculum[0]);
                  }}></i>
            </div>
            {viewCurriculum[0] && (
               <Table>
                  <tbody>
                     <tr
                        className={'LectureViewCurriculumTable'}
                        style={{
                           border: '1px solid lightgray',
                           fontSize: '18px',
                        }}>
                        <td style={{ border: 'none', width: '0px' }}>
                           <i className="bi bi-caret-right-square"></i>
                        </td>
                        <td style={{ border: 'none' }}>
                           <span>React 배우기 전에 쓰는 이유부터 알아야</span>
                        </td>
                        <td style={{ border: 'none', width: '65px' }}>
                           <div
                              style={{
                                 borderRadius: '5px',
                                 backgroundColor: 'skyblue',
                                 color: 'white',
                                 fontFamily: 'nanumsquare',
                                 display: 'flex',
                                 justifyContent: 'center',
                              }}>
                              <span>무료</span>
                           </div>
                        </td>
                        <td style={{ width: '100px', border: 'none' }}>
                           <i className="bi bi-watch"></i>
                           <span style={{ marginLeft: '10px' }}>11:00</span>
                        </td>
                     </tr>
                     <tr
                        className={'LectureViewCurriculumTable'}
                        style={{
                           border: '1px solid lightgray',
                           fontSize: '18px',
                        }}>
                        <td style={{ border: 'none', width: '0px' }}>
                           <i className="bi bi-caret-right-square"></i>
                        </td>
                        <td style={{ border: 'none' }}>
                           <span>React 배우기 전에 쓰는 이유부터 알아야</span>
                        </td>
                        <td style={{ border: 'none', width: '65px' }}>
                           <div
                              style={{
                                 borderRadius: '5px',
                                 backgroundColor: 'skyblue',
                                 color: 'white',
                                 fontFamily: 'nanumsquare',
                                 display: 'flex',
                                 justifyContent: 'center',
                              }}>
                              <span>무료</span>
                           </div>
                        </td>
                        <td style={{ width: '100px', border: 'none' }}>
                           <i className="bi bi-watch"></i>
                           <span style={{ marginLeft: '10px' }}>11:00</span>
                        </td>
                     </tr>
                     <tr
                        className={'LectureViewCurriculumTable'}
                        style={{
                           border: '1px solid lightgray',
                           fontSize: '18px',
                        }}>
                        <td style={{ border: 'none', width: '0px' }}>
                           <i className="bi bi-caret-right-square"></i>
                        </td>
                        <td style={{ border: 'none' }}>
                           <span>React 배우기 전에 쓰는 이유부터 알아야</span>
                        </td>
                        <td style={{ border: 'none', width: '65px' }}>
                           <div
                              style={{
                                 borderRadius: '5px',
                                 backgroundColor: 'skyblue',
                                 color: 'white',
                                 fontFamily: 'nanumsquare',
                                 display: 'flex',
                                 justifyContent: 'center',
                              }}>
                              <span>무료</span>
                           </div>
                        </td>
                        <td style={{ width: '100px', border: 'none' }}>
                           <i className="bi bi-watch"></i>
                           <span style={{ marginLeft: '10px' }}>11:00</span>
                        </td>
                     </tr>
                  </tbody>
               </Table>
            )}
         </div>
      </>
   );
}

export default LectureViewCurriculum;
