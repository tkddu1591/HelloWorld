import React, {useEffect, useState} from "react";
import SubmitButton from "./buttonCmpnts/SubmitButton";
import {Button} from "reactstrap";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {API_BASE_URL, apiClient} from "../../../App";

function TermsModal({isOpenModal, termsAgreeHandler}) {
    const nav = useNavigate();
    const [terms, setTerms] = useState([]);
    useEffect(() => {
        const getTerms = async () => {
            try {
                const result = await apiClient.get(`/api/terms`);
                setTerms(result.data);
            } catch (error) {
                alert("이용약관을 불러올 수 없습니다. 다시 시도해주세요.")
                nav('/member/login');
            }
        };
        getTerms();
    }, []);
    let modalTerms = terms.map((userTerms) => (userTerms.terms)).join('\n');

    return (
        <>
        {isOpenModal &&
            <div
                style={{
                    display: 'flex',
                    width: "100%",
                    height: "100%",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    backgroundColor: "rgba(0,0,0,0.5)"
                }}>
                <div style={{
                    backgroundColor: "white",
                    width: "80%",
                    maxWidth: "800px",
                    height: "60%",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)"
                }}>
                    <textarea style={{
                        width: "90%",
                        maxWidth: "800px",
                        height: "70%",
                        position: "absolute",
                        top: "42%",
                        left: "50%",
                        transform: "translate(-50%, -50%)"
                    }}>
                        {modalTerms}
                    </textarea>

                    <Button color="default"
                        style={{
                            position: "absolute",
                            left: "50%",
                            bottom: "15px",
                            width: "30%",
                            transform: "translate(-50%, -50%)"
                        }}
                        onClick={termsAgreeHandler}
                    >
                        동의합니다.
                    </Button>
                </div>
            </div>
        }
        </>
    );
}

export default TermsModal;
