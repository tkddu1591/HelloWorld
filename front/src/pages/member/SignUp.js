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
import TermsModal from "./componentsByMember/TermsModal";
import MemberHeader from "./componentsByMember/MemberHeader";

// core components

function SignUp() {
  const [agree_terms, setAgree_terms] = useState("grey");

  const [emailButton, setEmailButton] = useState("default");
  const [buttonText, setButtonText] = useState("인증번호 요청");
  const [emailIcon, setEmailIcon] = useState(faCircleQuestion);
  const [emailIconColor, setEmailIconColor] = useState("");

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenEmail, setIsOpenEmail] = useState(false);

  function onClickAgreeButton() {
    setIsOpenModal(false);
    setAgree_terms('green');
  }

  function emailClick() {
    if(isOpenEmail === false){
      setIsOpenEmail(true);
      setEmailButton("warning");
      setButtonText("인증번호 확인");
    }else if(isOpenEmail === true){
      setEmailButton("success");
      setButtonText("인증 완료");
      setEmailIcon(faCircleCheck);
      setEmailIconColor("green");
    }
  }

  return (
    <>
      <div style={{minHeight: "700px", paddingTop: "130px"}}>
        <Container>
          <Row>
            <Card className="card-signup">
              <Form action="" className="form" method="">
                <MemberHeader text={'회원가입'}/>

                <CardBody>
                  <InputField
                      placeholder="이메일 입력"
                      type="text" icon={faAt}/>

                  <InputField
                      placeholder="비밀번호 입력"
                      type="password" icon={faLock}/>

                  <InputField
                      placeholder="비밀번호 확인"
                      type="password" icon={faLock}/>

                  {isOpenEmail && <InputField
                      placeholder="이메일 인증번호 입력"
                      type="text" icon={emailIcon} color={emailIconColor}/>}
                  {/*완료되면 icon={faCircleCheck} style={{color: "#2bff0f",}} 날리기*/}

                  <Button
                      onClick={emailClick}
                      color={emailButton}
                      style={{marginLeft: "60%", width: "40%"}}>
                    {buttonText}
                  </Button>

                </CardBody>

                <div style={{textAlign: "center"}}>
                  <FontAwesomeIcon icon={faCircleCheck} style={{color: agree_terms}} />
                  &nbsp;
                  <d style={{textDecoration: "underline"}}
                     onClick={()=>{setIsOpenModal(true)}}>
                    이용약관
                  </d>에 동의합니다.
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
      <TermsModal isOpenModal={isOpenModal} onClickAgreeButton={onClickAgreeButton}/>
    </>
  );
}

export default SignUp;
