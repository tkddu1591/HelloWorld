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

function FinishSignup() {
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
            <Card className="card-signup" style={{textAlign:"center"}}>
              <MemberHeader text={'회원가입이 완료되었습니다.'}/>
              <span>
                추가 정보를 입력하지 않으면 <br/> 이메일 찾기 등 &nbsp;
                <strong style={{textDecoration: "underline"}}>
                  서비스에 제한
                </strong>이 있을 수 있습니다.
              </span>

              <CardBody>
                <Button color="success" style={{width:"40%", height:"100px", marginRight:"5px", fontSize:"16px"}}>
                  <Link to={"/my/info"}>
                    일반회원 <br/> 추가 정보 입력하기
                  </Link>
                </Button>
                <Button color="warning" style={{width:"40%", height:"100px", fontSize:"16px"}}>
                  <Link to={"/my/business"}>
                    강사·업체 추가 정보 입력하기
                  </Link>
                </Button>
              </CardBody>

              <CardFooter className="text-center">
                <Button
                  className="btn-neutral btn-round"
                  color="info"
                  onClick={(e) => e.preventDefault()}
                  size="lg"
                >
                  <Link to="/">건너뛰기</Link>
                </Button>
              </CardFooter>

            </Card>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default FinishSignup;
