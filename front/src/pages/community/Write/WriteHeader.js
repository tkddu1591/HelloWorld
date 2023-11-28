import React, {useState} from "react";
import "../../../css/community/write.scss";

function WriteHeader({register}){
    return (<>
        <div className="WritingHeader" style={{marginTop: "70px"}}>
            <h2 className={"title"}>글쓰기</h2>
            <div className="tool_area">
                <div className="temp_save_area" >
                    <button type="button" className="btn_temp_save" > 임시등록 </button>
                    <button type="button" className="btn_temp_count"> 0 </button>
                </div>
                <a className="BaseButton BaseButton--skinGreen size_default" style={{background:"lightskyblue"}}>
                    {/*<Button variant="primary" style={{background:"#2CA8FF"}}>등록</Button>*/}
                    <span className={"BaseButton__txt"} style={{color:"darkslateblue"}} onClick={()=>{register()}}>등록</span>
                </a>

            </div>
        </div>
    </>)
}

export default WriteHeader;