import React, { useState } from "react";

// reactstrap components
import { Button,Container, Row, Card, Form, CardBody } from "reactstrap";

// core components
import SocialLoginButton from "./componentsByMember/buttonCmpnts/SocialLoginButton";
import LinkTo from "./componentsByMember/inputCmpnts/LinkTo";
import AutoLoginButton from "./componentsByMember/buttonCmpnts/AutoLoginButton";
import MemberHeader from "./componentsByMember/MemberHeader";
import InputEmail from "./componentsByMember/inputCmpnts/InputEmail";
import InputPass from "./componentsByMember/inputCmpnts/InputPass";
import {useNavigate} from "react-router-dom";
import {API_BASE_URL, apiClient} from "../../App";
import {useDispatch} from "react-redux";
import {setCookie} from "../../utils/member/cookieHandler";
import {getMyInfo} from "../../utils/member/getMyInfo";
import {sendAccessToken} from "../../utils/member/sendAccessToken";
import {login} from "../../utils/member/login";

function LoginPage() {
    const nav = useNavigate();
    const dispatch = useDispatch();

    let [isOk, setIsOk] = useState({
        terms: false,
        email: false,
        pass: false
    })
    let [inputValue, setInputValue] = useState({
        email: "",
        pass: "",
        passChk: "",
        emailChk: "",
        isAutoLogin: false,
    });


    const default_login = () => {
        apiClient.post(`/login`, {
            "email": inputValue.email,
            "pass": inputValue.pass,
            "isAutoLogin": inputValue.isAutoLogin,
        }).then((response) => {
            if(response.data.accessToken) {
                const data = {
                    'accessToken': response.data.accessToken,
                    'refreshToken': response.data.refreshToken,
                    'myInfo': response.data.myInfo,
                    'isAutoLogin:': inputValue.isAutoLogin
                }
                login(data);
                getMyInfo(dispatch);
                nav('/');
            }else
                alert('로그인에 실패했습니다. \n아이디, 비밀번호를 다시 확인해주세요.');
        }).catch((error) => {
            alert('로그인에 실패했습니다. 잠시 후 다시 시도해주세요.');
            throw error.message;
        });
    }

    return (<>

        <div
            className="section section-signup"
            style={{minHeight: "700px"}}
        >
            <Container>
                <Row>
                    <Card className="card-signup">
                        <Form action="" className="form" method="">

                            <MemberHeader text={'로그인'}/>

                            <CardBody>
                                <InputEmail setInputValue={setInputValue} />

                                <InputPass  setIsOk={setIsOk} inputValue={inputValue} setInputValue={setInputValue} />

                                <AutoLoginButton inputValue={inputValue} setInputValue={setInputValue}/>

                                <SocialLoginButton />
                            </CardBody>

                            <CardBody className="text-center" style={{marginBottom: "70px"}}>

                                <Button className="btn-round" color="info" type="button" style={{width:"100%"}}
                                        onClick={default_login}>
                                    로그인
                                </Button>

                                <LinkTo
                                    text="회원가입"
                                    to="/member/signup"
                                    color="grey"
                                    pos="left"
                                />

                                <LinkTo
                                    text="이메일/비밀번호 찾기"
                                    to="/member/findByEmail"
                                    pos="right"
                                />
                            </CardBody>
                        </Form>
                    </Card>
                </Row>
            </Container>
        </div>

    </>);
}

export default LoginPage;
