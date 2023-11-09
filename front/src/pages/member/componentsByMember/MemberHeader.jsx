import React, {useState} from "react";
// reactstrap components
import {
  CardHeader,
  CardTitle,
} from "reactstrap";

// core components
function MemberHeader({text}) {
  return (
    <>
      <CardHeader className="text-center">
        <CardTitle className="title-up" tag="h3">
          <b style={{fontSize:"16px"}}>
              HELLO WORLD
          </b><br/>
          <span style={{color:"grey"}}>
              {text}
          </span>
        </CardTitle>
      </CardHeader>
    </>
  );
}

export default MemberHeader;
