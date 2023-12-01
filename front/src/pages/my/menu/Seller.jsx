import React, {useEffect, useState} from "react";
import {Button, CardTitle, Input, Modal} from "reactstrap";
import {changeDTO} from "../../../store/changeDTO";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {API_BASE_URL, apiClient} from "../../../App";
import {ModalTitle} from "react-bootstrap";
import {logout} from "../../../utils/member/logout";
import {useNavigate} from "react-router-dom";
import Select from "react-select";
import {Option} from "react-bootstrap-icons";


function Seller({member, setMember}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let myInfo = useSelector((state) => {return state.myInfo} )
    const [inputValue, setInputValue] = useState({
        email: '',
        type: '',
        ceo: '',
        company: '',
        tel: '',
        fax: '',
        bizRegNum: '',
        comRegNum: '',
    });
    useEffect(() => {
        setInputValue({
            email: member.email,
            type: member.type,
            ceo: member.ceo,
            company: member.company,
            tel: member.tel,
            fax: member.fax,
            bizRegNum: member.bizRegNum,
            comRegNum: member.comRegNum,
        });
    }, [member]);
    const modifySellerInfo = async () => {
        // eslint-disable-next-line no-restricted-globals
        if(!confirm('수정하시겠습니까?')) return
        try {
            const response = await apiClient.put(`/my/modify/seller`, {
                'email': inputValue.email,
                'type': inputValue.type,
                'ceo': inputValue.ceo,
                'company': inputValue.company,
                'tel': inputValue.tel,
                'fax': inputValue.fax,
                'bizRegNum': inputValue.bizRegNum,
                'comRegNum': inputValue.comRegNum,
            });
            alert(`${response.data.ceo}님의 정보를 저장 하였습니다.`)

        } catch (err) {
            console.error(err)
            alert('수정 실패. 다시 시도해주세요.')
        }
    }

    return (
        <>
            <ModalTitle>사업자 정보</ModalTitle>

            이메일
            <Input
                id="member_email"
                value={myInfo.email}
                type="text"
                readOnly
            ></Input><br/>
            구분
            <Input
                id="member_type"
                className="form-control-sm"
                type="select"
                value={inputValue.type}
                onChange={(e) => {
                    changeDTO(setInputValue, 'type', e.target.value);
                }}
            >
                <option value='2'>강의 판매자</option>
                <option value='3'>채용 담당자</option>
            </Input><br/>
            대표
            <Input
                id="member_ceo"
                value={inputValue.ceo}
                placeholder="강사, 개인사업자의 경우 본명 입력"
                type="text"
                onChange={(e) => {
                    changeDTO(setInputValue, 'ceo', e.target.value);
                }}
            ></Input><br/>
            회사명
            <Input
                id="member_company"
                value={inputValue.company}
                placeholder="강사, 개인사업자의 경우 본명 입력"
                type="text"
                onChange={(e) => {
                    changeDTO(setInputValue, 'company', e.target.value);
                }}
            ></Input><br/>
            회사연락처
            <Input
                id="member_tel"
                value={inputValue.tel}
                placeholder="회사연락처를 입력해주세요"
                type="text"
                onChange={(e) => {
                    changeDTO(setInputValue, 'tel', e.target.value);
                }}
            ></Input><br/>
            팩스번호
            <Input
                id="member_fax"
                value={inputValue.fax}
                placeholder="팩스번호를 입력해주세요"
                type="text"
                onChange={(e) => {
                    changeDTO(setInputValue, 'fax', e.target.value);
                }}
            ></Input><br/>
            사업자등록번호
            <Input
                id="member_bizRegNum"
                value={inputValue.bizRegNum}
                placeholder="사업자등록번호를 입력해주세요"
                type="text"
                onChange={(e) => {
                    changeDTO(setInputValue, 'bizRegNum', e.target.value);
                }}
            ></Input><br/>
            전자통신거래번호
            <Input
                id="member_comRegNum"
                value={inputValue.comRegNum}
                placeholder="전자통신거래번호를 입력해주세요"
                type="text"
                onChange={(e) => {
                    changeDTO(setInputValue, 'comRegNum', e.target.value);
                }}
            ></Input><br/>
            <Button color="info"
                    style={{width: "100%"}}
                    onClick={modifySellerInfo}
            >
                저장하기
            </Button>
        </>
    );
}

export default Seller;
