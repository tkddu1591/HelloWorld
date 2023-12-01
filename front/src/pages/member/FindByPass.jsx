import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Form,
  Container,
  Row
} from "reactstrap";
import {faLock, faAt, faCircleCheck, faCircleQuestion} from "@fortawesome/free-solid-svg-icons";
import InputField from "./componentsByMember/inputCmpnts/InputField";
import MemberHeader from "./componentsByMember/MemberHeader";
import InputEmail from "./componentsByMember/inputCmpnts/InputEmail";
import InputEmailChk from "./componentsByMember/inputCmpnts/InputEmailChk";
import {isValidEmail} from "../../utils/member/signupValidation";
import {changeDTO} from "../../store/changeDTO";
import axios from "axios";
import {API_BASE_URL, apiClient} from "../../App";
import LoadingModal from "../../components/LoadingModal";
import InputPass from "./componentsByMember/inputCmpnts/InputPass";
import InputPassChk from "./componentsByMember/inputCmpnts/InputPassChk";

// core components

function FindByPass() {
  const navigate = useNavigate();
  let [inputValue, setInputValue] = useState({
    email: "",
    emailChk: "",
    pass: "",
    passChk: "",
  });
  let [isOk, setIsOk] = useState({
    email: false,
    pass: false
  })
  let [pageCondtion, setPageCondtion] = useState({
    email_button: 'default',
    email_button_txt: '인증번호 요청',
    email_icon: faCircleQuestion,
    email_iconColor: '',

    isOpenPass: false,
    auth: ''
  });
  let [error, setError] = useState({
    email: false,
    message: '',
  });
  let [modal, setModal] = useState(false);
  function sendEmailBtn() {
    if (isValidEmail(inputValue.email) && !error.email && !isOk.email) {
      console.log("step 1... 이메일 전송")
      requestEmailAuthCode();

    } else if (pageCondtion.isOpenEmail && error.email && !isOk.email) {
      console.log("step 2... 인증코드 입력 후 비교")
      responseEmailAuthCode();
    }
  }
  async function requestEmailAuthCode() {
    setModal(true);
    await apiClient.get(`/api/reqeustEmail/findpass`, {
      params: {
        email: inputValue.email,
      }
    }).then((response) => {
      changeDTO(setError, 'email', false);
      if((response.data.message) === '인증번호를 확인해주세요.') setEmailDisplay1();
      changeDTO(setError, 'message', response.data.message);
      changeDTO(setPageCondtion, 'auth', response.data.auth);

    }).catch((err) => {
      console.error(err);
    })
    setModal(false);
  }
  async function responseEmailAuthCode() {
    await apiClient.get(`/api/responseEmail`, {
      params: {
        email: inputValue.email,
        inputCode: inputValue.emailChk,
        authCode: pageCondtion.auth
      }
    }).then((response) => {
      response.data ? setEmailDisplay2() : alert("인증번호가 일치하지 않습니다.");
      changeDTO(setIsOk, 'email', response.data);

    }).catch((err) => {
      console.error(err);
    })
    return null;
  }
  function resetForm() {
    changeDTO(setInputValue, 'emailChk', "");
    changeDTO(setError, 'email', false);
    changeDTO(setError, 'message', "");
    changeDTO(setIsOk, 'email', false);
    changeDTO(setPageCondtion, 'email_button', 'default');
    changeDTO(setPageCondtion, 'email_button_txt', '인증번호 요청');
    changeDTO(setPageCondtion, 'email_icon', faCircleQuestion);
    changeDTO(setPageCondtion, 'email_iconColor', "");
    changeDTO(setPageCondtion, 'isOpenPass', false);
    changeDTO(setPageCondtion, 'auth', false);
  }
  useEffect(() => {
    resetForm();
  }, [inputValue.email]);
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
    changeDTO(setPageCondtion, 'isOpenPass', true);
  }
  const submitPassChange = () => {
    if(!isOk.pass) {
      alert("비밀번호를 다시 확인 해주세요.");
      return;
    }
    if(!isOk.email) {
      alert("이메일 인증을 해주세요.");
      return;
    }
    apiClient.put(`/member/findMyPass`, {
      "email": inputValue.email,
      "pass": inputValue.pass,
      "passChk": inputValue.passChk,
    }).then((response) => {
      if(!response.data) alert("비밀번호 변경에 실패했습니다. \n 다시 시도해주세요.");
      alert("비밀번호 변경 완료");
      navigate('/member/login');
    })
  }

  return (
    <>
      <div
        className="section section-signup"
        style={{
          minHeight: "700px"
        }}
      >
        <Container>
          <Row>
            <Card className="card-signup">
              <Form action="" className="form" method="">

                <MemberHeader text={'비밀번호 찾기'}/>
                {modal && <LoadingModal/>}
                <CardBody>
                  <div style={{height:'42px', textAlign:'center'}}>
                    {error.message}
                  </div>
                  <InputEmail setInputValue={setInputValue} />
                  <InputEmailChk  setInputValue={setInputValue}
                                  emailIcon={pageCondtion.email_icon}
                                  emailIconColor={pageCondtion.email_iconColor}/>


                  <Button
                      onClick={sendEmailBtn}
                      color={pageCondtion.email_button}
                      style={{marginLeft: "60%", width: "40%"}}>
                    {pageCondtion.email_button_txt}
                  </Button>

                  {pageCondtion.isOpenPass && <>
                    <InputPass  setIsOk={setIsOk} inputValue={inputValue} setInputValue={setInputValue} />
                    <InputPassChk setIsOk={setIsOk} inputValue={inputValue} setInputValue={setInputValue} /></>}

                </CardBody>

                <CardFooter className="text-center">
                  <Button
                    className="btn-neutral btn-round"
                    onClick={submitPassChange}
                    color="info"
                    href="#pablo"
                    size="lg"
                  >
                    비밀번호 변경
                  </Button>
                </CardFooter>

              </Form>
            </Card>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default FindByPass;
