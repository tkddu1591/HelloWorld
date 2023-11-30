import React, {useState} from "react";
import {Table} from "reactstrap";
import {useSelector} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";

function LectureDetailAsideTable({part, index, setAside}) {
    let [tableOpen, setTableOpen] = useState(false);
    const contentList = useSelector((state: any) => state.lectureContentList);
    const lectureIHeardList = useSelector((state: any) => state.lectureIHeardList);
    const navigate = useNavigate()
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const lectureNo = searchParams.get('lectureNo');
    return <Table style={{marginBottom: '5px'}}>
        <tbody style={{boxSizing: 'border-box'}}>
            <tr>
                <th style={{
                    padding:      '20px', display: "flex", justifyContent: 'space-between', fontSize: '16px',
                    borderBottom: '2px solid #dddddd', cursor: "pointer"
                }} onClick={() => {
                    setTableOpen(!tableOpen)
                }}>
                    <span>Part {index + 1} : {part.title}</span>
                    <i
                        className={!tableOpen ? "bi bi-plus-circle" : "bi bi-dash-circle"}></i>
                </th>
            </tr>
            {contentList.map((value, index) => {
                if (value.partNo === part.partNo) return <tr
                    style={{boxSizing: 'border-box', display: (tableOpen ? '' : 'none'), transitionDuration: '0.5s'}}
                    key={value.contentNo}>
                    <td style={{
                        border:         'none', borderLeft: '2px solid red', boxSizing: 'border-box', display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                        <span style={{fontWeight: '700', fontSize: '14px', width: '240px', cursor: "pointer"}}
                              onClick={() => {
                                  navigate(`/lecture/detail?lectureNo=${lectureNo}&contentNo=${value.contentNo}`)
                                  setAside(false)
                              }}>{index + 1 + "강 : " + value.title}</span>
                        {lectureIHeardList.map(item => (
                            item.contentNo === value.contentNo &&
                            <i key={item} className="bi bi-check-circle-fill"
                               style={{fontSize: '20px', color: 'red'}}></i>
                        ))}
                    </td>
                </tr>
            })}
        </tbody>
    </Table>

}

export default LectureDetailAsideTable