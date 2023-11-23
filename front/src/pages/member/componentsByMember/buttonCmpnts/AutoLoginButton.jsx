import React, {useEffect} from "react";
import {isAutoLoginHandler, isOkPasswordHandler} from "../../../../utils/member/signupValidation";
import {changeDTO} from "../../../../store/changeDTO";
// core components
function AutoLoginButton({inputValue, setInputValue}) {
    /*useEffect(() => {
        isAutoLoginHandler(inputValue, setInputValue);
    }, [inputValue.isAutoLogin]);*/
    return (
        <>
            <div style={{display:"inline-block", marginLeft:"5px", marginTop:"5px", position:"relative"}}>
                <input type="checkbox"
                       onChange={() => {
                           changeDTO(setInputValue, 'isAutoLogin', !inputValue.isAutoLogin);
                       }}
                       style={{position:"absolute", top:"-6px"}}
                />
                <span style={{position:"absolute", width:"80px", left:"15px", top:"-8px"}}>
                    자동로그인
                </span>
            </div>
        </>
    );
}
export default AutoLoginButton;