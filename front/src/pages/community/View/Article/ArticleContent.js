import React from 'react';
import '../../../../css/community/view.css';
import { Col, Container, Row } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import UserPopup from "../../../../components/Lecture/UserPopup";

function ArticleContent({view}){
    return(<>
        <div className={'article_viewer'}>
            <div>
                <div className="content Viewer">
                    <div className="se-viewer se-theme-default" lang={'ko-KR'}>
                        {/*SE_DOC_HEADER_START*/}
                        {/*CONTENST_HEADER*/}
                        {/*SE_DOC_HEADER_END*/}
                        <div className={'se-main-container'}>
                            {view.content}
                        </div>
                    </div>
                </div>
                <div className="AttachFileIssueLayer" style={{ display: 'none' }}>
                    {/*공백*/}
                </div>
            </div>
        </div></>)
}

export default ArticleContent;