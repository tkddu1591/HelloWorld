import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import LoadingIcon from "../../components/Icon/LoadingIcon";

function LoadingPage() {
    let navigate = useNavigate();

    const [loadingText, setLoadingText] = useState("로그인 중입니다.");
    useEffect(() => {
        const intervalId = setInterval(() => {
            setLoadingText(prevText => {
                if (prevText === "로그인 중입니다.") {
                    return "로그인 중입니다..";
                } else if (prevText === "로그인 중입니다..") {
                    return "로그인 중입니다...";
                } else {
                    return "로그인 중입니다.";
                }
            });
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);


    return (
        <>
            <div style={{height: "400px", marginTop: "400px", textAlign:"center"}}>
                <LoadingIcon /> <br/><br/>
                {loadingText}
            </div>
        </>
    );
}

export default LoadingPage;