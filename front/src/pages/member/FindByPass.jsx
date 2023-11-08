import React from "react";
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

// core components

function FindByPass() {
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
                      placeholder="이메일 인증번호 입력"
                      type="text" icon={faCircleQuestion}/>
                  {/*완료되면 icon={faCircleCheck} style={{color: "#2bff0f",}} 날리기*/}

                  <SubmitButton status="default"
                    text="인증번호 요청"/>

                  <InputField
                      placeholder="새 비밀번호 입력"
                      type="password" icon={faLock}/>

                  <InputField
                      placeholder="새 비밀번호 확인"
                      type="password" icon={faLock}/>
                </CardBody>

                <CardFooter className="text-center">
                  <Button
                    className="btn-neutral btn-round"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
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



      <DarkFooter/>
    </>
  );
}

export default FindByPass;
