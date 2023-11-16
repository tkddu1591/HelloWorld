import React from "react";

// reactstrap components
import {
    Button,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup, Container, Row, Card, Form, CardBody, CardTitle, CardHeader, CardFooter,
} from "reactstrap";

// core components
import IndexNavbar from "../../components/Navbars/IndexNavbar";
import DarkFooter from "../../components/Footers/DarkFooter";
import Switch from "react-bootstrap-switch";
import {faComment, faLock, faAt} from "@fortawesome/free-solid-svg-icons";
import InputField from "./componentsByMember/inputCmpnts/InputField";
import SocialLoginButton from "./componentsByMember/buttonCmpnts/SocialLoginButton";
import LinkTo from "./componentsByMember/inputCmpnts/LinkTo";
import AutoLoginButton from "./componentsByMember/buttonCmpnts/AutoLoginButton";
import MemberHeader from "./componentsByMember/MemberHeader";
import InputEmail from "./componentsByMember/inputCmpnts/InputEmail";
import InputPass from "./componentsByMember/inputCmpnts/InputPass";



function LoginPage() {
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
                                <InputEmail />

                                <InputPass />

                                <AutoLoginButton />

                                <SocialLoginButton />
                            </CardBody>

                            <CardBody className="text-center" style={{marginBottom: "70px"}}>

                                <Button className="btn-round" color="info" type="button" style={{width:"100%"}}>
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
