import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
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

// core components

function SignUp() {
  const [agree_terms, setAgree_terms] = useState("grey");

  const [emailButton, setEmailButton] = useState("default");
  const [buttonText, setButtonText] = useState("인증번호 요청");
  const [emailIcon, setEmailIcon] = useState(faCircleQuestion);
  const [emailIconColor, setEmailIconColor] = useState("");

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenEmail, setIsOpenEmail] = useState(false);

  let [inputValue, setInputValue] = useState("");

  function onClickAgreeButton() {
    setIsOpenModal(false);
    setAgree_terms('green');
  }
  function emailClick() {
    if(isOpenEmail === false){
      requestEmail();
      setButtonText("인증번호 확인");
      setEmailButton("warning");
      setIsOpenEmail(true);

    }else if(isOpenEmail === true){
      setButtonText("인증 완료");
      setEmailButton("success");
      setEmailIconColor("green");
      setEmailIcon(faCircleCheck);
    }
  }

  const requestEmail= () => {
      axios.get("http://localhost:8080/api/sendEmail",{
          params:{
              "email": inputValue
          }/*,
          headers:{
              Authorization: 'Bearer sadsd'
          }*/
      })
          .then((response)=> {
              alert(JSON.stringify(response))
          })
          .catch(error => {
              alert(JSON.stringify(error))
          }
      );
  }

  const [terms, setTerms] = useState([]);
  useEffect(() => {
    const getTerms = async () => {
      try {
        const result =
            await axios.get('http://localhost:8080/api/terms');
        setTerms(result.data);
      } catch (error) {
        alert('요청 실패.');
      }
    };
    getTerms();
  }, []);

  return (
    <>
      <div style={{minHeight: "700px", paddingTop: "130px"}}>
        <Container>
          <Row>
            <Card className="card-signup">
              <Form action="" className="form" method="">
                <MemberHeader text={'회원가입'}/>

                <CardBody>
                  <InputEmail setInputValue={setInputValue}/>
                  <InputPass/>
                  <InputPassChk/>

                  {
                    isOpenEmail &&
                    <InputEmailChk emailIcon={emailIcon} emailIconColor={emailIconColor}/>
                  }

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
      <TermsModal isOpenModal={isOpenModal} terms={terms} onClickAgreeButton={onClickAgreeButton}/>
    </>
  );
}

export default SignUp;
