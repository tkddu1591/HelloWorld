import React from "react";

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Col
} from "reactstrap";

// core components
import IndexNavbar from "../../components/Navbars/IndexNavbar";
import DarkFooter from "../../components/Footers/DarkFooter";
import Switch from "react-bootstrap-switch";

function LoginPage() {
    const [leftFocus, setLeftFocus] = React.useState(false);
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
        <form style={{
            marginTop: "150px",
            display:"flex", 
            justifyContent:"center" }}>
            <div style={{maxWidth: "400px", width: "80%"}}>
                <InputGroup className={leftFocus ? "input-group-focus" : ""}>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                            <i className="fa fa-user-circle"></i>
                        </InputGroupText>
                    </InputGroupAddon>
                    <Input
                        placeholder="아이디 입력"
                        type="text"
                        onFocus={() => setLeftFocus(true)}
                        onBlur={() => setLeftFocus(false)}
                    ></Input>
                </InputGroup>
                <InputGroup className={leftFocus ? "input-group-focus" : ""}>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                            <i className="fa fa-user-circle"></i>
                        </InputGroupText>
                    </InputGroupAddon>
                    <Input
                        placeholder="비밀번호 입력"
                        type="text"
                        onFocus={() => setLeftFocus(true)}
                        onBlur={() => setLeftFocus(false)}
                    ></Input>
                </InputGroup>
                <Button className="btn-round" color="info" type="button" style={{width:"100%"}}>
                    로그인
                </Button>
            </div>
        </form>
    </>);
}

export default LoginPage;
