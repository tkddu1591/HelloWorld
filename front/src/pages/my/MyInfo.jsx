import React from "react";
import {Button, Card, CardBody} from "reactstrap";
import almondBlossom from 'assets/img/almondBlossom.jpg';
import GithubIcon from "../../components/Icon/GithubIcon";

function MyInfo() {
    return (<>
        <div style={{ textAlign: "center"}}>
            <div
                className="background"
                style={{
                    marginTop:"62px",
                    backgroundImage:`url(${almondBlossom})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "380px"
                }}>

                <div style={{width:"120px", height:"120px", margin:"0 auto", marginTop:"80px",
                    display:"inline-block", borderRadius: '100%', overflow: 'hidden'}}>
                    <img src={require("assets/img/bg1.jpg")} style={{width:"100%", height:"100%"}}/>
                </div><br/>

                <Card style={{width: "70%", maxWidth:"550px", backgroundColor:"transparent"}}>
                    <CardBody>

                    </CardBody>
                </Card>


                <GithubIcon style={{}}/>
            </div>
        </div>



        <div style={{height:"900px", marginTop:"100px"}}>
            <Button className="btn-round" color="info" size="lg">
                Follow
            </Button>
        </div>
    </>);
}

export default MyInfo;
