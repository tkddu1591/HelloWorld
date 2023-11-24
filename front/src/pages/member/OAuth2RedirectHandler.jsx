import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import kaKaoLogin from "../../service/authenticationService";

const OAuth2RedirectHandler = (props) => {
    let params = new URL(document.URL).searchParams;
    let code = params.get('code');
    let navigate = useNavigate();

    useEffect(async () => {
        await kaKaoLogin(code)
            .then((response) => {

            })
    }, []);
}