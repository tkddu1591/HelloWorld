import React, {useState} from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row
} from "reactstrap";
import IndexNavbar from "../../components/Navbars/IndexNavbar";
import DarkFooter from "../../components/Footers/DarkFooter";
import {faLock, faAt, faCircleCheck, faCircleQuestion} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import InputField from "./componentsByMember/inputCmpnts/InputField";
import SubmitButton from "./componentsByMember/buttonCmpnts/SubmitButton";
import StatusText from "./componentsByMember/status/StatusText";
import MemberHeader from "./componentsByMember/MemberHeader";
import InputEmail from "./componentsByMember/inputCmpnts/InputEmail";
import InputEmailChk from "./componentsByMember/inputCmpnts/InputEmailChk";
import {isValidEmail} from "../../utils/member/signupValidation";
import {changeDTO} from "../../store/changeDTO";
import axios from "axios";
import {API_BASE_URL} from "../../App";
import {emailCheckForPassFind} from "../../utils/rememberMemberInfo/emailCheckForPassFind";

// core components

function FindByPass() {
  let [inputValue, setInputValue] = useState({
    email: "",
    emailChk: "",
    pass: "",
    passChk: "",
  });

  let [pageCondtion, setPageCondtion] = useState({
    email_button: 'default',
    email_button_txt: '인증번호 요청',
    email_icon: faCircleQuestion,
    email_iconColor: "",

    isOpenPass: false
  });
  let [error, setError] = useState({
    email: false,
    message: "",
  });

  async function emailCheckForPassFind() {
    await axios.get(`${API_BASE_URL}/api/reqeustEmail`, {
      params: {
        email: inputValue.email,
        type: '찾기'
      }
    }).then((response) => {
      changeDTO(setError, 'email', false);
      if((response.data.message) === '인증번호를 확인해주세요.') setEmailDisplay1();
      changeDTO(setError, 'message', response.data.message);

    }).catch((err) => {
      console.error(err);
    })
    return null;
  }

  function setEmailDisplay1() {
    changeDTO(setPageCondtion, 'email_button_txt', "인증번호 확인");
    changeDTO(setPageCondtion, 'email_button', "warning");
    changeDTO(setPageCondtion, 'isOpenEmail', true);

    changeDTO(setError, 'email', true);
    changeDTO(setPageCondtion, 'isOpenEmail', true);
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

                <CardBody>
                  <div style={{height:'42px', textAlign:'center'}}>
                    {error.message}
                  </div>
                  <InputEmail setInputValue={setInputValue} />
                  <InputEmailChk  setInputValue={setInputValue}
                                  emailIcon={pageCondtion.email_icon}
                                  emailIconColor={pageCondtion.email_iconColor}/>

                  <Button
                      onClick={emailCheckForPassFind}
                      color={pageCondtion.email_button}
                      style={{marginLeft: "60%", width: "40%"}}>
                    {pageCondtion.email_button_txt}
                  </Button>

                  {pageCondtion.isOpenPass && <><InputField
                      placeholder="새 비밀번호 입력"
                      type="password" icon={faLock}/>

                    <InputField
                    placeholder="새 비밀번호 확인"
                    type="password" icon={faLock}/></>}

                </CardBody>

                <CardFooter className="text-center">
                  <Button
                    className="btn-neutral btn-round"
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
