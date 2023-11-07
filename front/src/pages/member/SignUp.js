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

// core components

function SignUp() {
  const [agree_terms, setAgree_terms] = useState("grey");
  const [modalSwitch, setModalSwitch] = useState('flex');
  const [isOpenModal, setIsOpenModal] = useState(false);

  function onClickAgreeButton() {
    setIsOpenModal(false);
    setAgree_terms('green');
  }

  return (
    <>
      <IndexNavbar/>

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

                  <InputField
                      placeholder="비밀번호 확인"
                      type="password" icon={faLock}/>

                  <InputField
                      placeholder="이메일 인증번호 입력"
                      type="text" icon={faCircleQuestion}/>
                  {/*완료되면 icon={faCircleCheck} style={{color: "#2bff0f",}} 날리기*/}

                  <SubmitButton status="default"
                    text="인증번호 요청"/>

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
                    className="btn-neutral btn-round"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
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
      <TermsModal isOpenModal={isOpenModal} onClickAgreeButton={onClickAgreeButton}/>

      <DarkFooter/>

    </>
  );
}

export default SignUp;
