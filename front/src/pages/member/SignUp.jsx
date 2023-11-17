import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
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
import {isValidEmail} from "../../utils/signupValidation";


function SignUp() {
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

    function termsAgreeHandler() {
        changeDTO(setPageCondtion, 'isOpenModal', false);
        changeDTO(setPageCondtion, 'terms_agree', 'green');
        changeDTO(setIsOk, 'terms', true);
    }
    function reqeustEmailBtnClick() {
        // isValidEmail && inputEmail === "" --> 이메일 전송
        // isValidEmail &&
        if (isValidEmail(inputValue.email)) {
            console.log("step 1...")
            requestEmail();

        } else if (pageCondtion.isOpenEmail === false) {
            // 인증번호 전송해서 체크................................
            console.log("step 2...")

        } else if (pageCondtion.isOpenEmail === true && isOk.email === true) {
            console.log("step 3...")
            setEmailDisplay2();
        }
    }
    function setEmailDisplay1() {
        changeDTO(setPageCondtion, 'email_button_txt', "인증번호 확인");
        changeDTO(setPageCondtion, 'email_button', "warning");
        changeDTO(setPageCondtion, 'isOpenEmail', true);

        changeDTO(setError, 'email', true);
        changeDTO(setPageCondtion, 'isOpenEmail', true);
    }
    function setEmailDisplay2() {
        changeDTO(setPageCondtion, 'email_button_txt', "인증 완료");
        changeDTO(setPageCondtion, 'email_button', "success");
        changeDTO(setPageCondtion, 'email_iconColor', "green");
        changeDTO(setPageCondtion, 'email_icon', faCircleCheck);
        changeDTO(setPageCondtion, 'isOpenEmail', true);
    }
    const requestEmail = () => {
        console.log("inputValue.email : " + inputValue);
        axios.get("http://localhost:8080/api/sendEmail", {
            params: {
                "email": inputValue.email
            }/*,
          headers:{
              Authorization: 'Bearer sadsd'
          }*/
        })
            .then((response) => {
                if (response.data === "인증번호를 확인해주세요.") {
                    console.log((" - step1... "))
                    setEmailDisplay1();

                }else {
                    console.log(" - step2... ");
                    changeDTO(setError, 'email', false);
                }
                changeDTO(setError, 'message', response.data);
            })
            .catch(error => {
                console.log(error);
            }
        );
    }
    const getConsole = () => {
        console.log("pageCondtion : " + JSON.stringify(pageCondtion));
        console.log("isOk : " + JSON.stringify(isOk));
        console.log("inputValue : " + JSON.stringify(inputValue));
        console.log("error : " + JSON.stringify(error));
    }



    return (
        <>
            <div style={{minHeight: "800px", paddingTop: "130px"}}>
                <Container>
                    <Row>
                        <button onClick={getConsole}>콘솔보기</button>
                        <Card className="card-signup">
                            <Form action="" className="form" method="">
                                <MemberHeader text={'회원가입'}/>

                                <CardBody style={{textAlign:"center"}}>
                                    <div style={{height:"42px"}}>
                                        {error.message}
                                    </div>
                                    <InputEmail setInputValue={setInputValue} error={error}/>
                                    <InputPass setInputValue={setInputValue}/>
                                    <InputPassChk setInputValue={setInputValue}/>

                                    {
                                        pageCondtion.isOpenEmail &&
                                        <InputEmailChk  setInputValue={setInputValue}
                                                        emailIcon={pageCondtion.email_icon}
                                                        emailIconColor={pageCondtion.email_iconColor}/>
                                    }

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
                                        onClick={(e) => e.preventDefault()}
                                        size="lg"
                                    >
                                        <Link to="/member/finishSignup">회원가입</Link>
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
