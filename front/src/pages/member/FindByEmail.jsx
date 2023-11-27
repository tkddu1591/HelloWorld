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
import InputHp from "./componentsByMember/inputCmpnts/InputHp";
import InputName from "./componentsByMember/inputCmpnts/InputName";
import {rememberMyEmail} from "../../utils/rememberMemberInfo/rememberMyEmail";

// core components

function FindByEmail() {
  const [inputValue, setInputValue] = useState({
    name: '',
    hp: '',
    email: ''
  });
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
                  <InputName setInputValue={setInputValue}/>
                  <InputHp setInputValue={setInputValue}/>

                  <LinkTo
                      text="비밀번호 찾기"
                      to="/member/findByPass"
                      pos="right"
                  />

                </CardBody>

                <CardFooter className="text-center">
                  <div style={{height:"30px"}}>
                    {inputValue.email !== '' && <>
                      {inputValue.email}
                    </>}
                  </div>
                  <Button
                    className="btn-neutral btn-round"
                    color="info"
                    href="#pablo"
                    onClick={() => {rememberMyEmail(inputValue.name, inputValue.hp, setInputValue)}}
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
