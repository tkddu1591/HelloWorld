import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import LoadingIcon from "./Icon/LoadingIcon";

function LoadingModal() {
    let navigate = useNavigate();

    const [loadingText, setLoadingText] = useState("이메일 전송 중입니다.");
    useEffect(() => {
        const intervalId = setInterval(() => {
            setLoadingText(prevText => {
                if (prevText === "이메일 전송 중입니다.") {
                    return "이메일 전송 중입니다..";
                } else if (prevText === "이메일 전송 중입니다..") {
                    return "이메일 전송 중입니다...";
                } else {
                    return "이메일 전송 중입니다.";
                }
            });
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);


    return (
        <>
            <div style={{
                display:"flex",
                position:"fixed",
                top:"0",
                left:"0",
                height: "100%",
                width: "100%",
                backgroundColor:"transparent",
                justifyContent:"center",
                alignItems:"center",
                textAlign:"center"
            }}>
                    <LoadingIcon />
            </div>
            <div style={{position:"fixed", top:"52%", left:"45%", textAlign:"center"}}>
                <br/>
                {loadingText}
            </div>
        </>
    );
}

export default LoadingModal;