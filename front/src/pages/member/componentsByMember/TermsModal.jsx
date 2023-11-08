import React, {useState} from "react";
import SubmitButton from "./buttonCmpnts/SubmitButton";
import {Button} from "reactstrap";

const TERMS = "The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a val id href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a val id href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a val id href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a val id href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a val id href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a val id href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a val id href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a val id href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a val id href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid";
function TermsModal({isOpenModal, onClickAgreeButton}) {

    /*const [sss, setSss] = useState();
    * react hooks은 조건부 랜더링 아래에서 사용 x */
    if(!isOpenModal)return null;
    return (
        <>
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
                    }}>{TERMS}</textarea>

                    <Button color="default"
                            style={{
                                position: "absolute",
                                left: "50%",
                                bottom: "15px",
                                width: "30%",
                                transform: "translate(-50%, -50%)"}}
                            onClick={onClickAgreeButton}
                    >
                        동의합니다.
                    </Button>
                </div>

            </div>
        </>
    );
}

export default TermsModal;
