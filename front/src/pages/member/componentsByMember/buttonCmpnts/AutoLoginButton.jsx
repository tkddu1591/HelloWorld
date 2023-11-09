import React from "react";
// core components
function AutoLoginButton() {
    return (
        <>
            <div style={{display:"inline-block", marginLeft:"5px", marginTop:"5px", position:"relative"}}>
                <input type="checkbox" style={{position:"absolute", top:"-6px"}} /> <span style={{position:"absolute", width:"80px", left:"15px", top:"-8px"}}>
                                        자동로그인
                                    </span>
            </div>
        </>
    );
}
export default AutoLoginButton;