import React, {useEffect, useState} from "react";
// reactstrap components
import {faLock, faAt, faCircleCheck, faCircleQuestion} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import TermsModal from "./componentsByMember/TermsModal";
import MemberHeader from "./componentsByMember/MemberHeader";
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Form,
    Container,
    Row
} from "reactstrap";
import InputEmail from "./componentsByMember/inputCmpnts/InputEmail";
import InputPass from "./componentsByMember/inputCmpnts/InputPass";
import InputPassChk from "./componentsByMember/inputCmpnts/InputPassChk";
import InputEmailChk from "./componentsByMember/inputCmpnts/InputEmailChk";
import axios from "axios";
import {changeDTO} from "../../store/changeDTO";
import {isValidEmail, isValidPass} from "../../utils/member/signupValidation";
import {API_BASE_URL, apiClient} from "../../App";
import {useNavigate} from "react-router-dom";


function SignUp() {
    const nav = useNavigate();
    let [pageCondtion, setPageCondtion] = useState({
        terms_agree: 'grey',

        email_button: 'default',
        email_button_txt: '인증번호 요청',
        email_icon: faCircleQuestion,
        email_iconColor: "",

        isOpenModal: false,
        isOpenEmail: false,
    });
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
    let [error, setError] = useState({
        email: false,
        message: "",
    });

    ////////////////////////////////////////////////////////////////////////
    let [auth, setAuth] = useState("");
    ////////////////////////////////////////////////////////////////////////

    // 팡션
    function reqeustEmailBtnClick() {
        if (isValidEmail(inputValue.email) && !error.email && !isOk.email) {
            console.log("step 1... 이메일 전송")
            requestEmailAuthCode();

        } else if (pageCondtion.isOpenEmail && error.email && !isOk.email) {
            console.log("step 2... 인증코드 입력 후 비교")
            responseEmailAuthCode();
        }
    }

    // useState
    function termsAgreeHandler() {
        changeDTO(setPageCondtion, 'isOpenModal', false);
        changeDTO(setPageCondtion, 'terms_agree', 'green');
        changeDTO(setIsOk,         'terms',       true);
    }
    function setEmailDisplay1() {
        changeDTO(setPageCondtion, 'email_button_txt', "인증번호 확인");
        changeDTO(setPageCondtion, 'email_button', "warning");
        changeDTO(setPageCondtion, 'isOpenEmail', true);

        changeDTO(setError, 'email', true);
        changeDTO(setPageCondtion, 'isOpenEmail', true);
    }
    function setEmailDisplay2() {
        changeDTO(setError, 'message', "");
        changeDTO(setPageCondtion, 'email_button_txt', "인증 완료");
        changeDTO(setPageCondtion, 'email_button', "success");
        changeDTO(setPageCondtion, 'email_iconColor', "green");
        changeDTO(setPageCondtion, 'email_icon', faCircleCheck);
        changeDTO(setPageCondtion, 'isOpenEmail', true);
    }
    function resetForm() {
        changeDTO(setInputValue, 'emailChk', "");
        setAuth("");
        changeDTO(setError, 'email', false);
        changeDTO(setError, 'message', "");
        changeDTO(setIsOk, 'email', false);
        changeDTO(setPageCondtion, 'email_button', 'default');
        changeDTO(setPageCondtion, 'email_button_txt', '인증번호 요청');
        changeDTO(setPageCondtion, 'email_icon', faCircleQuestion);
        changeDTO(setPageCondtion, 'email_iconColor', "");
        changeDTO(setPageCondtion, 'isOpenEmail', false);
    }
    useEffect(() => {
        resetForm();
    }, [inputValue.email]);

    // axios
    const requestEmailAuthCode = () => {
        changeDTO(setError, 'message', '이메일 전송 중입니다.')
        apiClient.get(`/api/reqeustEmail/signup`, {
            params: {
                "email": inputValue.email,
            }/*, headers:{Authorization: 'Bearer 어쩌구저쩌구'}*/
        }).then((response) => {
            changeDTO(setError, 'email', false);
            if(response.data.message === "인증번호를 확인해주세요.") setEmailDisplay1();
            changeDTO(setError, 'message', response.data.message);

            setAuth(response.data.auth);
        }).catch(error => {
            console.log(error);
        });
    }
    const responseEmailAuthCode = () => {
        apiClient.get(`/api/responseEmail`, {
            params: {
                "email": inputValue.email,
                "inputCode": inputValue.emailChk,
                "authCode": auth
            }
        }).then((response) => {
            response.data ? setEmailDisplay2() : alert("인증번호가 일치하지 않습니다.");
            changeDTO(setIsOk, 'email', response.data);

        }).catch(error => {
            console.log(error);
        });
    }
    const submitSignup = () => {
        console.log("회원가입");
        if(!isOk.terms) {
            alert("이용약관을 읽고 동의해주세요.");
            return;
        }
        if(!isOk.pass) {
            alert("비밀번호를 다시 확인 해주세요.");
            return;
        }
        if(!isOk.email) {
            alert("이메일 인증을 해주세요.");
            return;
        }
        apiClient.post(`/member/signup`, {
            "email": inputValue.email,
            "pass": inputValue.pass,
            "passChk": inputValue.passChk,
        }).then((response) => {
            if(!response.data) alert("회원가입에 실패했습니다. \n 다시 시도해주세요.");
            alert("회원가입 완료");
            nav('/member/login');
        })
    }

    return (
        <>
            <div style={{minHeight: "800px", paddingTop: "130px"}}>
                <Container>
                    <Row>
                        <Card className="card-signup">
                            <Form action="" className="form" method="">
                                <MemberHeader text={'회원가입'}/>

                                <CardBody style={{textAlign:"center"}}>
                                    <div style={{height:"42px"}}>
                                        {error.message}
                                    </div>
                                    <InputEmail setInputValue={setInputValue} />
                                    <InputPass  setIsOk={setIsOk} inputValue={inputValue} setInputValue={setInputValue} />
                                    <InputPassChk setIsOk={setIsOk} inputValue={inputValue} setInputValue={setInputValue} />

                                    <div style={{height:"48px"}}>
                                    {
                                        pageCondtion.isOpenEmail &&
                                        <InputEmailChk  setInputValue={setInputValue}
                                                        emailIcon={pageCondtion.email_icon}
                                                        emailIconColor={pageCondtion.email_iconColor}/>
                                    }
                                    </div>

                                    <Button
                                        onClick={reqeustEmailBtnClick}
                                        color={pageCondtion.email_button}
                                        style={{marginLeft: "60%", width: "40%"}}>
                                        {pageCondtion.email_button_txt}
                                    </Button>

                                </CardBody>

                                <div style={{textAlign: "center"}}>
                                    <FontAwesomeIcon icon={faCircleCheck} style={{color: pageCondtion.terms_agree}}/>
                                    &nbsp;
                                    <d style={{textDecoration: "underline"}}
                                       onClick={() => {
                                           changeDTO(setPageCondtion, 'isOpenModal', true)
                                       }}>
                                        이용약관
                                    </d>
                                    에 동의합니다.
                                </div>

                                <CardFooter className="text-center">
                                    <Button
                                        className="btn-neutral"
                                        color="info"
                                        onClick={submitSignup}
                                        size="lg"
                                    >
                                        회원가입
                                    </Button>
                                </CardFooter>

                            </Form>
                        </Card>
                    </Row>
                </Container>
            </div>
            {/*{isOpenModal && <TermsModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}/>}*/}
            <TermsModal isOpenModal={pageCondtion.isOpenModal} setIsOk={setIsOk} termsAgreeHandler={termsAgreeHandler}/>
        </>
    );
}

export default SignUp;
