import React, {useEffect, useState} from "react";
import {Button, Table} from "reactstrap";
import {changeDTO} from "../../../../../store/changeDTO";


interface LectureWriteAsideTableProps {
    deleteByPart: (item: { orderNo: number, title: string }) => void;
    updateTitle: (index: number, title: string, set: React.Dispatch<React.SetStateAction<any>>) => void;
    part: { orderNo: number, title: string };
    setPart: React.Dispatch<React.SetStateAction<{ title: string, orderNo: number }>>;
}
function LectureWriteAsideTable({deleteByPart, part, updateTitle, setPart}) {
    let [newNum, setNewNum] = useState(0);
    let [content, setContent] = useState<{ orderNo: number, title: string }[]>([])

    const deleteByContent = (item) => {
        setContent((oldValues) => {
            return oldValues.filter((value) => {
                return value!== item
            })
        })
    }
    return <Table style={{marginBottom: '5px'}}>
        <tbody style={{boxSizing: 'border-box'}}>
            <tr>
                <th style={{
                    padding:      '20px', display: "flex", justifyContent: 'space-between', fontSize: '16px',
                    borderBottom: '2px solid #dddddd'
                }}>
                    <input placeholder={'파트명을 입력해주세요'} style={{backgroundColor: 'transparent'}}
                           onChange={(e) => {
                               updateTitle(part.orderNo, e.target.value, setPart)
                           }}/>
                    <i className="bi bi-x-circle" style={{fontSize: '20px', cursor: "pointer"}} onClick={() => {
                        deleteByPart(part)
                    }}></i>
                </th>
            </tr>
            {content.map((value, index) => {
                return <tr key={value.orderNo}>
                    <td style={{
                        border:       'none', borderLeft: '2px solid red', boxSizing: 'border-box',
                        borderBottom: '1px solid lightgrey',
                        display:      'flex', justifyContent: 'space-between',
                        alignItems:   "center"
                    }}>
                        <input placeholder={'컨텐츠 명을 입력해주세요'} style={{
                            fontWeight:      '500', fontSize: '14px', width: '240px', padding: '10px',
                            paddingLeft:     '5px',
                            backgroundColor: 'transparent'
                        }} onChange={(e) => {
                            updateTitle(value.orderNo, e.target.value, setContent)
                        }}></input>
                        <span style={{cursor: 'pointer', color: 'blue'}}>작성</span>
                        <i className="bi bi-x-circle" style={{fontSize: '20px', cursor: "pointer"}} onClick={() => {
                            deleteByContent(value)
                        }}></i>
                    </td>
                </tr>
            })}
            <tr className={'plusBox'}
                onClick={() => {
                    setContent([...content, {orderNo: newNum, title: ''}])
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