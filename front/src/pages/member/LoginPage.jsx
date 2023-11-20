import React, {useState} from "react";

// reactstrap components
import { Button,Container, Row, Card, Form, CardBody } from "reactstrap";

// core components
import SocialLoginButton from "./componentsByMember/buttonCmpnts/SocialLoginButton";
import LinkTo from "./componentsByMember/inputCmpnts/LinkTo";
import AutoLoginButton from "./componentsByMember/buttonCmpnts/AutoLoginButton";
import MemberHeader from "./componentsByMember/MemberHeader";
import InputEmail from "./componentsByMember/inputCmpnts/InputEmail";
import InputPass from "./componentsByMember/inputCmpnts/InputPass";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {API_BASE_URL} from "../../App";



function LoginPage() {
    const nav = useNavigate();
    let [isOk, setIsOk] = useState({
        terms: false,
        email: false,
        pass: false
    })
    let [inputValue, setInputValue] = useState({
        email: "",
        pass: "",
        passChk: "",
        emailChk: ""
    });

    const default_login = () => {
        axios.post(`${API_BASE_URL}/login`, {
            "email": inputValue.email,
            "pass": inputValue.pass
        }).then((response) => {

        }).catch((error) => {


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

                                <AutoLoginButton />

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
