import React, {useState} from "react";
import {Table} from "reactstrap";

function LectureDetailAsideTable() {
    let [tableOpen, setTableOpen] = useState(false);
    let num = [0, 1, 2, 3, 4, 5, 6]
    return <>
        <Table style={{marginBottom: '5px'}}>
            <tbody style={{boxSizing: 'border-box'}}>
                <tr>
                    <th style={{padding: '20px', display: "flex", justifyContent: 'space-between', fontSize: '16px', borderBottom: '2px solid #dddddd'}}>
                        <span>Part 1 : 블로그 제작 & 기초 문법</span>
                        <i style={{cursor: "pointer"}} onClick={() => {
                            setTableOpen(!tableOpen)
                        }} className={!tableOpen ? "bi bi-plus-circle" : "bi bi-dash-circle"}></i>
                    </th>
                </tr>
                {num.map((value, index) => {
                    return <tr style={{boxSizing: 'border-box', display:(tableOpen?'':'none'), transitionDuration: '0.5s'}} key={value} >
                        <td style={{border: 'none', borderLeft: '2px solid red', boxSizing: 'border-box', display: 'flex', justifyContent: 'space-between'}}>
                            <span style={{fontWeight: '700', fontSize: '14px', width: '240px'}}>코딩</span>
                            <i className="bi bi-check-circle-fill" style={{fontSize: '20px', color: 'red'}}></i>
                        </td>
                    </tr>
                })}
            </tbody>
        </Table>

    </>
}
export default LectureDetailAsideTable