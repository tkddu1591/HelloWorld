import React, {useState} from "react";
import SubmitButton from "./buttonCmpnts/SubmitButton";
import {Button} from "reactstrap";

function TermsModal({status}) {
    const terms = "The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a val id href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a val id href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a val id href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a val id href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a val id href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a val id href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a val id href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a val id href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a val id href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid";
    const [isStatus, setStatus] = useState('none');

    return (
        <>
            <div
                style={{
                display: isStatus,
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
                    }}>{terms}</textarea>

                    <Button color="default" style={{
                        position: "absolute",
                        left: "50%",
                        bottom: "15px",
                        width: "30%",
                        transform: "translate(-50%, -50%)"}}>
                        동의합니다.
                    </Button>
                </div>

            </div>
        </>
    );
}

export default TermsModal;
