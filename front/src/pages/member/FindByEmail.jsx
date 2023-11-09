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
  Container,
  Row
} from "reactstrap";
import {faLock, faAt, faCircleCheck, faCircleQuestion, faSquarePhone, faUser} from "@fortawesome/free-solid-svg-icons";
import InputField from "./componentsByMember/inputCmpnts/InputField";
import LinkTo from "./componentsByMember/inputCmpnts/LinkTo";
import MemberHeader from "./componentsByMember/MemberHeader";

// core components

function FindByEmail() {
  const [emailButton, setEmailButton] = useState("default");
  const [buttonText, setButtonText] = useState("인증번호 요청");
  const [emailIcon, setEmailIcon] = useState(faCircleQuestion);
  const [emailIconColor, setEmailIconColor] = useState("");
  const [isOpenEmail, setIsOpenEmail] = useState(false);

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

                <MemberHeader text={'이메일 찾기'}/>

                <CardBody>
                  <InputField
                      placeholder="이름 입력"
                      type="text" icon={faUser}/>
                  <InputField
                      placeholder="휴대번호 입력"
                      type="text" icon={faSquarePhone}/>

                  <LinkTo
                      text="비밀번호 찾기"
                      to="/member/findByPass"
                      pos="right"
                  />

                </CardBody>

                <CardFooter className="text-center">
                  <Button
                    className="btn-neutral btn-round"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                  >
                    이메일 찾기
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

export default FindByEmail;
