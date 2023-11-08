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
import SocialLogin from "./componentsByMember/buttonCmpnts/SocialLogin";
import LinkTo from "./componentsByMember/inputCmpnts/LinkTo";



function LoginPage() {
    React.useEffect(() => {
        document.body.classList.add("login-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove("login-page");
            document.body.classList.remove("sidebar-collapse");
        };
    }, []);
    return (<>

        <div
            className="section section-signup"
            style={{minHeight: "700px"}}
        >
            <Container>
                <Row>
                    <Card className="card-signup">
                        <Form action="" className="form" method="">

                            <CardHeader className="text-center">
                                <CardTitle className="title-up" tag="h3">
                                    HELLO WORLD
                                </CardTitle>
                            </CardHeader>

                            <CardBody>
                                <InputField
                                    placeholder="이메일 입력"
                                    type="text" icon={faAt}/>

                                <InputField
                                    placeholder="비밀번호 입력"
                                    type="password" icon={faLock}/>

                                <Switch offColor="" offText="OFF" onColor="" onText="ON" />자동로그인

                                <SocialLogin />
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
                                    text="비밀번호 찾기"
                                    to="/member/findByPass"
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
