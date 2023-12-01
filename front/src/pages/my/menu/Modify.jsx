import React, {useEffect, useState} from "react";
import {Button, Input} from "reactstrap";
import {changeDTO} from "../../../store/changeDTO";
import {useDispatch, useSelector} from "react-redux";
import {apiClient} from "../../../App";
import {ModalTitle} from "react-bootstrap";
import {logout} from "../../../utils/member/logout";
import {useNavigate} from "react-router-dom";


function Modify({member, setMember}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let myInfo = useSelector((state) => {return state.myInfo} )
    const [inputValue, setInputValue] = useState({
        email: '',
        nick: '',
        name: '',
        hp: '',
    });
    useEffect(() => {
        setInputValue({
            email: member.email,
            nick: member.nick,
            name: member.name,
            hp: member.hp,
        });
    }, [member]);
    const modifyUserInfo = async () => {
        // eslint-disable-next-line no-restricted-globals
        if(!confirm('수정하시겠습니까?')) return
        try {
            const response = await apiClient.put(`/my/modify`, {
                'email': inputValue.email,
                'nick': inputValue.nick,
                'name': inputValue.name,
                'hp': inputValue.hp,
            });
            alert(`${response.data.nick}님의 정보를 수정 하였습니다.`)
            await changeDTO(setMember, 'nick', response.data.nick);
            await changeDTO(setMember, 'name', response.data.name);
            await changeDTO(setMember, 'hp', response.data.hp);

        } catch (err) {
            console.error(err)
            alert('수정 실패. 다시 시도해주세요.')
        }
    }
    const deleteMyAccount = async () => {
        // eslint-disable-next-line no-restricted-globals
        if(!confirm('정말 삭제하시겠습니까?')) return;
        // eslint-disable-next-line no-restricted-globals
        if(!confirm('삭제하면 다시 되돌릴 수 없습니다.\n정말 삭제하시겠습니까?')) return;

        const response = await apiClient.put(`/my/delete/${inputValue.email}`);
        try {
            alert(`${response.data.email}님의 계정을 삭제하였습니다.\n삭제일시:${response.data.wdate}`)
            logout(navigate, dispatch)
        }catch (err) {
            console.error(err);
            alert('요청에 실패했습니다. 잠시 후 다시 시도해주세요.')
        }
    }
    return (
        <>
            <ModalTitle>내 정보 수정</ModalTitle>
            이메일
            <Input
                id="member_email"
                value={myInfo.email}
                type="text"
                readOnly
            ></Input><br />
            닉네임
            <Input
                id="member_nick"
                value={inputValue.nick}
                placeholder="닉네임을 입력해주세요"
                type="text"
                onChange={(e) => {
                        changeDTO(setInputValue, 'nick', e.target.value);
                }}
            ></Input><br />
            이름
            <Input
                id="member_name"
                value={inputValue.name}
                placeholder="이름을 입력해주세요"
                type="text"
                onChange={(e) => {
                    changeDTO(setInputValue, 'name', e.target.value);
                }}
            ></Input><br />
            전화번호
            <Input
                id="member_hp"
                value={inputValue.hp}
                placeholder="전화번호를 입력해주세요"
                type="text"
                onChange={(e) => {
                    changeDTO(setInputValue, 'hp', e.target.value);
                }}
            ></Input><br />
            <Button color="info"
                    style={{width:"100%"}}
                    onClick={modifyUserInfo}
            >
                수정하기
            </Button>
            <div style={{textAlign:'right'}}>
                <Button onClick={deleteMyAccount}>
                    탈퇴하기
                </Button>
            </div>
        </>
    );
}

export default Modify;
