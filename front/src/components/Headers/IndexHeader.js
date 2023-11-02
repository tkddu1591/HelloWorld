/*eslint-disable*/
import React from "react";

// reactstrap components
import {Container} from "reactstrap";

// core components

function IndexHeader() {
    let pageHeader = React.createRef();

    React.useEffect(() => {
        if (window.innerWidth > 991) {
            const updateScroll = () => {
                let windowScrollTop = window.pageYOffset / 3;
                pageHeader.current.style.transform =
                    "translate3d(0," + windowScrollTop + "px,0)";
            };
            window.addEventListener("scroll", updateScroll);
            return function cleanup() {
                window.removeEventListener("scroll", updateScroll);
            };
        }
    });

    return (
        <>
            <div className="page-header clear-filter" filter-color="blue">
                <div
                    className="page-header-image"
                    ref={pageHeader}
                ></div>
                <Container>
                    <div className="content-center brand">
                        <img
                            alt="..."
                            className="n-logo"
                            src={require("assets/img/free-icon-software-developer.png")}
                        ></img>
                        <h1 className="h1-seo">Hello World.</h1>
                        <h3>개발자 커뮤니티</h3>
                    </div>
                    <h6 className="category category-absolute">
                        sponsor by.
                        kimCheolHak
                    </h6>
                </Container>
            </div>
        </>
    );
}

export default IndexHeader;
