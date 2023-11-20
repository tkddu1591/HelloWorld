import React, {useEffect, useState} from "react";
import {Button, Table} from "reactstrap";

function LectureWriteAsideTable({deleteByPartNum, partNum, contentNum, setContentNum, deleteByContentNum}) {
    let [newNum, setNewNum] = useState(0);
    return <Table style={{marginBottom: '5px'}}>
        <tbody style={{boxSizing: 'border-box'}}>
            <tr>
                <th style={{
                    padding:      '20px', display: "flex", justifyContent: 'space-between', fontSize: '16px',
                    borderBottom: '2px solid #dddddd'
                }}>
                    <input placeholder={'파트명을 입력해주세요'} style={{backgroundColor:'transparent'}}></input>
                    <i className="bi bi-x-circle" style={{fontSize: '20px', cursor: "pointer"}} onClick={() => {
                        deleteByPartNum(partNum)
                    }}></i>
                </th>
            </tr>
            {contentNum.map((value, index) => {
                return <tr style={{
                }} key={value}>
                    <td style={{
                        border:       'none', borderLeft: '2px solid red', boxSizing: 'border-box',
                        borderBottom: '1px solid lightgrey',
                        display:      'flex', justifyContent: 'space-between',
                        alignItems:"center"
                    }}>
                        <input placeholder={'컨텐츠 명을 입력해주세요'} style={{
                            fontWeight:      '500', fontSize: '14px', width: '240px', padding: '10px',
                            paddingLeft:     '5px',
                            backgroundColor: 'transparent'
                        }}></input>
                        <span style={{cursor:'pointer', color:'blue'}}>작성</span>
                        <i className="bi bi-x-circle" style={{fontSize: '20px', cursor: "pointer"}} onClick={() => {
                            deleteByContentNum(value)
                        }}></i>
                    </td>
                </tr>
            })}
            <tr className={'plusBox'}
                onClick={() => {
                    setContentNum([...contentNum, newNum])
                    setNewNum(newNum + 1)
                }}>
                <td>
                    <i className={"bi bi-plus-circle"}></i>
                </td>
            </tr>

        </tbody>
    </Table>

}

export default LectureWriteAsideTable