import React from "react";
import {Button} from "reactstrap";
import '../../css/my/my.css';
import GithubIcon from "../../components/Icon/GithubIcon";


function MyInfo() {
    return (<>
        <div className="my-info-background">
            <div className="my-info-profile-box">
                <img src={require("assets/img/bg1.jpg")} style={{width:"100%", height:"100%"}}/>
            </div>

            <Button className="btn-round" color="info" size="lg">
                Follow
            </Button>
            <div style={{
                padding:"5px",
                display:"inline-block",
                borderRadius: "100%",
                overflow: "hidden",
                backgroundColor: "white",
            }}>
                <GithubIcon size={"40px"}/>
            </div>





        </div>



    </>);
}

export default MyInfo;
