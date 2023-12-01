import React from "react";

// reactstrap components
import {Container} from "reactstrap";

// core components

function ProfilePageHeader({member}) {
    let pageHeader = React.createRef();

    React.useEffect(() => {
        if (window.innerWidth > 991 && pageHeader && pageHeader.current) {
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
    }, [pageHeader]);
    return (
        <div
            className="page-header clear-filter page-header-small"
            filter-color="blue"
            style={{height: '300px', paddingTop: '20px'}}
        >
            <div
                className="page-header-image"
                ref={pageHeader}
            ></div>
            <Container>
                <div className="photo-container">
                    <img alt="..."
                         style={{
                             width: '100%',
                             height: '100%',
                             borderRadius: '70%',
                             overflow: 'hidden'
                         }}
                         src={member.profileImg}
                    />
                </div>
                <h3 className="title">{member.nick}</h3>
                <div className="content">
                    <div className="social-description">
                        <h2>26</h2>
                        <p>Comments</p>
                    </div>
                    <div className="social-description">
                        <h2>26</h2>
                        <p>Comments</p>
                    </div>
                    <div className="social-description">
                        <h2>48</h2>
                        <p>Bookmarks</p>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default ProfilePageHeader;
