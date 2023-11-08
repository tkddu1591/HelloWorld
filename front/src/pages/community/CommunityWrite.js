import React, {useState} from "react";
import {Col, FormGroup, Input, Row} from "reactstrap";
import Select from "react-select";
import Form from 'react-bootstrap/Form';
import "./../../css/community/write.css";

const searchSelect = [
    {value: '0', label: '게시글 + 댓글'},
    {value: '1', label: '제목만'},
    {value: '2', label: '글작성자'},
    {value: '3', label: '댓글내용'},
    {value: '4', label: '댓글작성자'}
];

function CommunityWrite() {
    const [selectedSearch, setSelectedSearch] = useState(null);
    return (<>
        <div className="write">
            <div className="WritingWrap">
                <div className="WritingHeader">
                    <h2 className="title">글쓰기</h2>
                    <div className="tool_area">
                        <div className="temp_save_area">
                            <button className="btn_temp_save" type={"button"}>임시등록</button>
                            <button className="btn_temp_count" type={"button"}>0</button>
                        </div>
                        <a href="#" className="BaseButton BaseButton--skinGreen size_default" role={"button"}>
                            <span className={"BaseButton__txt"}>등록</span>
                        </a>
                    </div>
                </div>
                <div className="WritingContent">
                    <div className={"WritingEditor"}>
                        <div className={"ArticleWritingTitle"}>
                            <div className={"row"}>
                                <div className={"column_title"}>
                                    <div className={"FormSelectBox menu_candidates_selectbox"}>
                                        <div className={"FormSelectButton"}>
                                            <button type={"button"} aria-haspopup={"true"}
                                                    aria-expanded={"selectboxLayer"} aria-pressed="selectboxLayer"
                                                    className={"button"}>
                                                옷/데일리룩
                                                <svg className="svg-icon ico-common-menu-hide-big-default">
                                                    <use xlinkHref="#ico-common-menu-hide-big-default"
                                                         aria-hidden="true"></use>
                                                </svg>
                                                {/**/}
                                            </button>
                                        </div>
                                        <div className={"select_option type_long"} style={{display: "none"}}>
                                            <ul className={"option_list"}>
                                                {/*REACT SELECT 사용*/}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className={"colums_category"}></div>
                            </div>
                        </div>
                        {/**/}
                        {/**/}
                        <div className={"toast_area"}>
                            <div className="ToastTip">
                                <div className="toast" style={{display: "none"}}> 본문에 매니저가 설정한 글양식이 추가되었습니다.</div>
                            </div>
                        </div>
                        <div id={"SmartEditor"} className={"CafeEditor"}>
                            <div className={"se-body __se-body se-body-flexible se-body-without-scroll"} lang={"ko-KR"}>
                                <div className={"se-wrap se-dnd-wrap"}>
                                    <div className={"se-dnd-wrap"}>
                                        <header className={"se-header se-header-type-basic"}>
                                            <div className={"se-header-inbox se-1-document-toolbar"}>
                                                <ul className="se-toolbar se-document-toolbar se-toolbar-flexible">
                                                    <li className="se-toolbar-item se-toolbar-item-image"
                                                        data-role="button-container">
                                                        <button type="button" title=""
                                                                className="se-image-toolbar-button se-document-toolbar-basic-button se-text-icon-toolbar-button"
                                                                data-group="documentToolbar" data-type="basic"
                                                                data-name="image" data-log="dot.img"><span
                                                            className="se-toolbar-icon"></span><span
                                                            className="se-toolbar-label"
                                                            aria-hidden="true">사진</span><span
                                                            className="se-toolbar-tooltip">사진 추가</span></button>
                                                    </li>
                                                    <li className="se-toolbar-item se-toolbar-item-social-media-image"
                                                        data-role="button-container">
                                                        <button type="button" title=""
                                                                className="se-social-media-image-toolbar-button se-document-toolbar-basic-button se-text-icon-toolbar-button"
                                                                data-group="documentToolbar" data-type="basic"
                                                                data-name="social-media-image" data-log="dot.snsimg">
                                                            <span className="se-toolbar-icon"></span><span
                                                            className="se-toolbar-label"
                                                            aria-hidden="true">SNS 사진</span><span
                                                            className="se-toolbar-tooltip">SNS 사진 추가</span></button>
                                                    </li>
                                                    <li className="se-toolbar-item se-toolbar-item-video"
                                                        data-role="button-container">
                                                        <button type="button" title=""
                                                                className="se-video-toolbar-button se-document-toolbar-basic-button se-text-icon-toolbar-button"
                                                                data-group="documentToolbar" data-type="basic"
                                                                data-name="video" data-log="dot.video"><span
                                                            className="se-toolbar-icon"></span><span
                                                            className="se-toolbar-label"
                                                            aria-hidden="true">동영상</span><span
                                                            className="se-toolbar-tooltip">동영상 추가</span></button>
                                                    </li>
                                                    <li className="se-toolbar-item se-toolbar-item-sticker"
                                                        data-role="button-container">
                                                        <button type="button" title=""
                                                                className="se-sticker-toolbar-button se-document-toolbar-toggle-button se-text-icon-toolbar-button"
                                                                data-group="documentToolbar" data-type="toggle"
                                                                data-name="sticker" data-log="dot.sticker"><span
                                                            className="se-toolbar-icon"></span><span
                                                            className="se-toolbar-label"
                                                            aria-hidden="true">스티커</span><span
                                                            className="se-toolbar-tooltip">스티커 추가</span></button>
                                                    </li>
                                                    <li className="se-toolbar-item se-toolbar-item-insert-quotation"
                                                        data-role="button-container">
                                                        <div
                                                            className="se-document-toolbar-icon-select-container __select-container se-document-toolbar-text-icon-container"
                                                            data-type="icon-select" data-name="insert-quotation">
                                                            <button type="button" title=""
                                                                    className="se-document-toolbar-icon-select-button se-insert-quotation-default-toolbar-button se-text-icon-toolbar-button"
                                                                    data-group="documentToolbar" data-value="default"
                                                                    data-type="icon-select" data-name="quotation"
                                                                    data-log="dot.quota" aria-expanded="false"
                                                                    aria-haspopup="false"><span
                                                                className="se-toolbar-icon"></span><span
                                                                className="se-toolbar-tooltip">인용구 추가</span></button>
                                                            <button type="button" title=""
                                                                    className="se-document-toolbar-select-option-button se-text-icon-toolbar-select-option-button"
                                                                    data-group="documentToolbar" data-type="icon-select"
                                                                    data-name="quotation" aria-expanded="false"
                                                                    aria-haspopup="true"><span
                                                                className="se-toolbar-label"
                                                                aria-hidden="true">인용구 선택</span><span
                                                                className="se-toolbar-tooltip">인용구 선택</span></button>
                                                            <span className="se-toolbar-label"
                                                                  aria-hidden="true">인용구</span></div>
                                                    </li>
                                                    <li className="se-toolbar-item se-toolbar-item-insert-horizontal-line"
                                                        data-role="button-container">
                                                        <div
                                                            className="se-document-toolbar-icon-select-container __select-container se-document-toolbar-text-icon-container"
                                                            data-type="icon-select" data-name="insert-horizontal-line">
                                                            <button type="button" title=""
                                                                    className="se-document-toolbar-icon-select-button se-insert-horizontal-line-default-toolbar-button se-text-icon-toolbar-button"
                                                                    data-group="documentToolbar" data-value="default"
                                                                    data-type="icon-select" data-name="horizontal-line"
                                                                    data-log="dot.horizt" aria-expanded="false"
                                                                    aria-haspopup="false"><span
                                                                className="se-toolbar-icon"></span><span
                                                                className="se-toolbar-tooltip">구분선 추가</span></button>
                                                            <button type="button" title=""
                                                                    className="se-document-toolbar-select-option-button se-text-icon-toolbar-select-option-button"
                                                                    data-group="documentToolbar" data-type="icon-select"
                                                                    data-name="horizontal-line" aria-expanded="false"
                                                                    aria-haspopup="true"><span
                                                                className="se-toolbar-label"
                                                                aria-hidden="true">구분선 선택</span><span
                                                                className="se-toolbar-tooltip">구분선 선택</span></button>
                                                            <span className="se-toolbar-label"
                                                                  aria-hidden="true">구분선</span></div>
                                                    </li>
                                                    <li className="se-toolbar-item se-toolbar-item-file"
                                                        data-role="button-container">
                                                        <button type="button" title=""
                                                                className="se-file-toolbar-button se-document-toolbar-basic-button se-text-icon-toolbar-button"
                                                                data-group="documentToolbar" data-type="basic"
                                                                data-name="file" data-log="dot.file"><span
                                                            className="se-toolbar-icon"></span><span
                                                            className="se-toolbar-label"
                                                            aria-hidden="true">파일</span><span
                                                            className="se-toolbar-tooltip">파일 추가</span></button>
                                                    </li>
                                                    <li className="se-toolbar-item se-toolbar-item-oglink"
                                                        data-role="button-container">
                                                        <button type="button" title=""
                                                                className="se-oglink-toolbar-button se-document-toolbar-basic-button se-text-icon-toolbar-button"
                                                                data-group="documentToolbar" data-type="basic"
                                                                data-name="oglink" data-log="dot.link"><span
                                                            className="se-toolbar-icon"></span><span
                                                            className="se-toolbar-label"
                                                            aria-hidden="true">링크</span><span
                                                            className="se-toolbar-tooltip">링크 추가</span></button>
                                                    </li>
                                                    <li className="se-toolbar-item se-toolbar-item-map"
                                                        data-role="button-container">
                                                        <button type="button" title=""
                                                                className="se-map-toolbar-button se-document-toolbar-basic-button se-text-icon-toolbar-button"
                                                                data-group="documentToolbar" data-type="basic"
                                                                data-name="map" data-log="dot.map"><span
                                                            className="se-toolbar-icon"></span><span
                                                            className="se-toolbar-label"
                                                            aria-hidden="true">장소</span><span
                                                            className="se-toolbar-tooltip">장소 추가</span></button>
                                                    </li>
                                                    <li className="se-toolbar-item se-toolbar-item-search"
                                                        data-role="button-container">
                                                        <button type="button" title=""
                                                                className="se-search-toolbar-button se-document-toolbar-toggle-button se-text-icon-toolbar-button"
                                                                data-group="documentToolbar" data-type="toggle"
                                                                data-name="search" data-log="dot.search"><span
                                                            className="se-toolbar-icon"></span><span
                                                            className="se-toolbar-label"
                                                            aria-hidden="true">글감</span><span
                                                            className="se-toolbar-tooltip">글감 검색 열기</span></button>
                                                    </li>
                                                    <li className="se-toolbar-item se-toolbar-item-additional-button"
                                                        data-role="button-container">
                                                        <button type="button" title=""
                                                                className="se-cafe-vote-toolbar-button se-document-toolbar-custom-button se-text-icon-toolbar-button"
                                                                data-group="documentToolbar" data-type="custom"
                                                                data-name="cafe-vote" data-log="dot.vote"><span
                                                            className="se-toolbar-custom-icon"></span><span
                                                            className="se-toolbar-label"
                                                            aria-hidden="true">투표</span><span
                                                            className="se-toolbar-tooltip">투표첨부</span></button>
                                                    </li>
                                                    <li className="se-toolbar-item se-toolbar-item-additional-button"
                                                        data-role="button-container">
                                                        <button type="button" title=""
                                                                className="se-cafe-schedule-toolbar-button se-document-toolbar-custom-button se-text-icon-toolbar-button"
                                                                data-group="documentToolbar" data-type="custom"
                                                                data-name="cafe-schedule" data-log="dot.schedule"><span
                                                            className="se-toolbar-custom-icon"></span><span
                                                            className="se-toolbar-label"
                                                            aria-hidden="true">일정</span><span
                                                            className="se-toolbar-tooltip">일정첨부</span></button>
                                                    </li>
                                                    <li className="se-toolbar-item se-toolbar-item-table"
                                                        data-role="button-container">
                                                        <button type="button" title=""
                                                                className="se-table-toolbar-button se-document-toolbar-basic-button se-text-icon-toolbar-button"
                                                                data-group="documentToolbar" data-type="basic"
                                                                data-name="table" data-log="dot.table"><span
                                                            className="se-toolbar-icon"></span><span
                                                            className="se-toolbar-label"
                                                            aria-hidden="true">표</span><span
                                                            className="se-toolbar-tooltip">표 추가</span></button>
                                                    </li>
                                                    <li className="se-toolbar-item se-toolbar-item-code"
                                                        data-role="button-container">
                                                        <button type="button" title=""
                                                                className="se-code-toolbar-button se-document-toolbar-basic-button se-text-icon-toolbar-button"
                                                                data-group="documentToolbar" data-type="basic"
                                                                data-name="code" data-log="dot.code"><span
                                                            className="se-toolbar-icon"></span><span
                                                            className="se-toolbar-label"
                                                            aria-hidden="true">소스코드</span><span
                                                            className="se-toolbar-tooltip">소스코드 추가</span></button>
                                                    </li>
                                                    <li className="se-toolbar-item se-toolbar-item-formula"
                                                        data-role="button-container">
                                                        <button type="button" title=""
                                                                className="se-formula-toolbar-button se-document-toolbar-basic-button se-text-icon-toolbar-button"
                                                                data-group="documentToolbar" data-type="basic"
                                                                data-name="formula" data-log="dot.formula"><span
                                                            className="se-toolbar-icon"></span><span
                                                            className="se-toolbar-label"
                                                            aria-hidden="true">수식</span><span
                                                            className="se-toolbar-tooltip">수식 추가</span></button>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="se-header-inbox se-l-property-toolbar">
                                                <ul className="se-toolbar se-property-toolbar se-property-toolbar-text">
                                                    <li className="se-toolbar-item se-toolbar-item-text-format"
                                                        data-role="button-container">
                                                        <div
                                                            className="se-property-toolbar-label-select-container __select-container"
                                                            data-type="label-select" data-name="text-format">
                                                            <button type="button" title=""
                                                                    className="se-text-format-toolbar-button se-property-toolbar-label-select-button"
                                                                    data-group="propertyToolbar"
                                                                    data-type="label-select" data-name="text-format"
                                                                    data-log="prt.fmt" aria-expanded="false"
                                                                    aria-haspopup="true"><span
                                                                className="se-toolbar-label" data-role="label"
                                                                aria-hidden="true">본문</span><span
                                                                className="se-toolbar-tooltip">문단 서식 변경</span></button>
                                                        </div>
                                                    </li>
                                                    <li className="se-toolbar-item se-toolbar-item-font-family"
                                                        data-role="button-container">
                                                        <div
                                                            className="se-property-toolbar-label-select-container __select-container"
                                                            data-type="label-select" data-name="font-family">
                                                            <button type="button" title=""
                                                                    className="se-font-family-toolbar-button se-property-toolbar-label-select-button"
                                                                    data-group="propertyToolbar"
                                                                    data-type="label-select" data-name="font-family"
                                                                    data-log="prt.font" aria-expanded="false"
                                                                    aria-haspopup="true"><span
                                                                className="se-toolbar-label" data-role="label"
                                                                aria-hidden="true">기본서체</span><span
                                                                className="se-toolbar-tooltip">서체 변경</span></button>
                                                        </div>
                                                    </li>
                                                    <li className="se-toolbar-item se-toolbar-item-font-size-code"
                                                        data-role="button-container">
                                                        <div
                                                            className="se-property-toolbar-label-select-container __select-container"
                                                            data-type="label-select" data-name="font-size-code">
                                                            <button type="button" title=""
                                                                    className="se-font-size-code-toolbar-button se-property-toolbar-label-select-button"
                                                                    data-group="propertyToolbar"
                                                                    data-type="label-select" data-name="font-size"
                                                                    data-log="prt.size" aria-expanded="false"
                                                                    aria-haspopup="true"><span
                                                                className="se-toolbar-label" data-role="label"
                                                                aria-hidden="true">15</span><span
                                                                className="se-toolbar-tooltip">글자 크기 변경</span></button>
                                                        </div>
                                                    </li>
                                                    <li className="se-toolbar-item se-toolbar-item-separator-bar"
                                                        data-role="button-container">
                                                        <div data-type="separator-bar" data-name="separator-bar"
                                                             className="se-separator-bar-button se-toolbar-button-separator-bar">
                                                            <span className="se-toolbar-icon"></span></div>
                                                    </li>
                                                    <li className="se-toolbar-item se-toolbar-item-bold"
                                                        data-role="button-container">
                                                        <button type="button" title=""
                                                                className="se-bold-toolbar-button se-property-toolbar-toggle-button"
                                                                data-group="propertyToolbar" data-type="toggle"
                                                                data-name="bold" data-log="prt.bold"><span
                                                            className="se-toolbar-icon"></span><span
                                                            className="se-blind" aria-hidden="true">굵게</span><span
                                                            className="se-toolbar-tooltip">굵기 적용</span></button>
                                                    </li>
                                                    <li className="se-toolbar-item se-toolbar-item-italic"
                                                        data-role="button-container">
                                                        <button type="button" title=""
                                                                className="se-italic-toolbar-button se-property-toolbar-toggle-button"
                                                                data-group="propertyToolbar" data-type="toggle"
                                                                data-name="italic" data-log="prt.italic"><span
                                                            className="se-toolbar-icon"></span><span
                                                            className="se-blind" aria-hidden="true">기울이기</span><span
                                                            className="se-toolbar-tooltip">기울이기 적용</span></button>
                                                    </li>
                                                    <li className="se-toolbar-item se-toolbar-item-underline"
                                                        data-role="button-container">
                                                        <button type="button" title=""
                                                                className="se-underline-toolbar-button se-property-toolbar-toggle-button"
                                                                data-group="propertyToolbar" data-type="toggle"
                                                                data-name="underline" data-log="prt.underline"><span
                                                            className="se-toolbar-icon"></span><span
                                                            className="se-blind" aria-hidden="true">밑줄</span><span
                                                            className="se-toolbar-tooltip">밑줄 적용</span></button>
                                                    </li>
                                                    <li className="se-toolbar-item se-toolbar-item-strikethrough"
                                                        data-role="button-container">
                                                        <button type="button" title=""
                                                                className="se-strikethrough-toolbar-button se-property-toolbar-toggle-button"
                                                                data-group="propertyToolbar" data-type="toggle"
                                                                data-name="strikethrough" data-log="prt.strike"><span
                                                            className="se-toolbar-icon"></span><span
                                                            className="se-blind" aria-hidden="true">취소선</span><span
                                                            className="se-toolbar-tooltip">취소선 적용</span></button>
                                                    </li>
                                                    <li className="se-toolbar-item se-toolbar-item-font-color"
                                                        data-role="button-container">
                                                        <div
                                                            className="se-property-color-picker-container __select-container"
                                                            data-type="color-picker" data-name="font-color">
                                                            <button type="button" title=""
                                                                    className="se-property-toolbar-color-picker-button se-font-color-toolbar-button"
                                                                    data-group="propertyToolbar"
                                                                    data-type="color-picker" data-name="font-color"
                                                                    data-log="prt.color" aria-expanded="false"
                                                                    aria-haspopup="true"><span
                                                                className="se-toolbar-color-picker-icon"><span
                                                                className="se-toolbar-icon-font-color"></span><span
                                                                data-role="color" className="se-font-color-indicator"
                                                                style={{backgroundColor: "rgb(0, 0, 0)"}}></span></span><span
                                                                className="se-toolbar-label"
                                                                aria-hidden="true">글자색</span><span
                                                                className="se-toolbar-tooltip">글자색 변경</span></button>
                                                        </div>
                                                    </li>
                                                    <li className="se-toolbar-item se-toolbar-item-background-color"
                                                        data-role="button-container">
                                                        <div
                                                            className="se-property-color-picker-container __select-container"
                                                            data-type="color-picker" data-name="background-color">
                                                            <button type="button" title=""
                                                                    className="se-property-toolbar-color-picker-button se-background-color-toolbar-button"
                                                                    data-group="propertyToolbar"
                                                                    data-type="color-picker"
                                                                    data-name="background-color" data-log="prt.bgcolor"
                                                                    aria-expanded="false" aria-haspopup="true"><span
                                                                className="se-toolbar-color-picker-icon"><span
                                                                data-role="color"
                                                                className="se-background-color-indicator se-is-white-color"
                                                                style={{backgroundColor: "rgb(255, 255, 255)"}}></span><span
                                                                data-role="icon"
                                                                className="se-toolbar-icon-background-color"></span></span><span
                                                                className="se-toolbar-label"
                                                                aria-hidden="true">배경색</span><span
                                                                className="se-toolbar-tooltip">글자 배경색 변경</span></button>
                                                        </div>
                                                    </li>
                                                    <li className="se-toolbar-item se-toolbar-item-separator-bar"
                                                        data-role="button-container">
                                                        <div data-type="separator-bar" data-name="separator-bar"
                                                             className="se-separator-bar-button se-toolbar-button-separator-bar">
                                                            <span className="se-toolbar-icon"></span></div>
                                                    </li>
                                                    <li className="se-toolbar-item se-toolbar-item-align"
                                                        data-role="button-container">
                                                        <div
                                                            className="se-property-toolbar-drop-down-container __select-container"
                                                            data-type="drop-down" data-name="align">
                                                            <button type="button" title=""
                                                                    className="se-property-toolbar-drop-down-button se-align-left-toolbar-button"
                                                                    data-group="propertyToolbar" data-type="drop-down"
                                                                    data-name="align-drop-down-with-justify"
                                                                    data-log="prt.align" aria-expanded="false"
                                                                    aria-haspopup="true"><span
                                                                className="se-toolbar-icon"></span><span
                                                                className="se-blind" aria-hidden="true">정렬</span><span
                                                                className="se-toolbar-tooltip">정렬 열기</span></button>
                                                        </div>
                                                    </li>
                                                    <li className="se-toolbar-item se-toolbar-item-line-height"
                                                        data-role="button-container">
                                                        <div
                                                            className="se-property-toolbar-drop-down-container __select-container"
                                                            data-type="drop-down" data-name="line-height">
                                                            <button type="button" title=""
                                                                    className="se-property-toolbar-drop-down-button se-line-height-toolbar-button"
                                                                    data-group="propertyToolbar" data-type="drop-down"
                                                                    data-name="line-height" data-log="prt.line"
                                                                    aria-expanded="false" aria-haspopup="true"><span
                                                                className="se-toolbar-icon"></span><span
                                                                className="se-blind" aria-hidden="true">줄간격</span><span
                                                                className="se-toolbar-tooltip">줄간격 열기</span></button>
                                                        </div>
                                                    </li>
                                                    <li className="se-toolbar-item se-toolbar-item-separator-bar"
                                                        data-role="button-container">
                                                        <div data-type="separator-bar" data-name="separator-bar"
                                                             className="se-separator-bar-button se-toolbar-button-separator-bar">
                                                            <span className="se-toolbar-icon"></span></div>
                                                    </li>
                                                    <li className="se-toolbar-item se-toolbar-item-special-letter"
                                                        data-role="button-container">
                                                        <button type="button" title=""
                                                                className="se-special-letter-toolbar-button se-property-toolbar-basic-button"
                                                                data-group="propertyToolbar" data-type="basic"
                                                                data-name="special-letter" data-log="prt.spclet"><span
                                                            className="se-toolbar-icon"></span><span
                                                            className="se-blind" aria-hidden="true">특수문자</span><span
                                                            className="se-toolbar-tooltip">특수문자 열기</span></button>
                                                    </li>
                                                    <li className="se-toolbar-item se-toolbar-item-link"
                                                        data-role="button-container">
                                                        <div
                                                            className="se-property-toolbar-custom-layer-container __select-container"
                                                            data-type="custom-layer" data-log="prt.urllink"
                                                            data-name="link">
                                                            <button type="button" title=""
                                                                    className="se-link-toolbar-button se-property-toolbar-custom-layer-button"
                                                                    data-group="propertyToolbar"
                                                                    data-type="custom-layer" data-name="text-link"
                                                                    aria-expanded="false" aria-haspopup="true"><span
                                                                className="se-toolbar-icon"></span><span
                                                                className="se-blind" aria-hidden="true">링크</span><span
                                                                className="se-toolbar-tooltip">링크 입력 열기</span></button>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="se-progressbar"><span className="se-blind">로딩중.</span></div>
                                        </header>


                                        <div className="se-container">
                                            <div id="drag-ghost"></div>
                                            <div className="se-content">
                                                <section
                                                    className="se-canvas se-canvas-width-800 se-canvas-flexible se-l-viewport-tablet se-l-viewport-desktop se-theme-default se-native-selection-hidden">
                                                    <div className="se-content-guide"></div>
                                                    <div className="se-selection" style={{visibility: "visible"}}>
                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                             className="se-caret se-caret-drop"
                                                             style={{
                                                                 display: "none",
                                                                 top: "0",
                                                                 left: "0",
                                                                 width: "0",
                                                                 height: "0"
                                                             }} focusable="false">
                                                            <rect width="100%" height="100%"></rect>
                                                        </svg>
                                                        <div className="se-caret"
                                                             style={{
                                                                 display: "none",
                                                                 top: "54.5px",
                                                                 left: "30px",
                                                                 width: "2px",
                                                                 height: "15px"
                                                             }}>
                    <span className="se-caret-ai-icon">
                </span></div>
                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                             className="se-caret se-is-caret-blinking"
                                                             style={{
                                                                 top: "54.5px",
                                                                 left: "30px",
                                                                 width: "1px",
                                                                 height: "15px"
                                                             }}
                                                             focusable="false">
                                                            <rect width="100%" height="100%"></rect>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                             className="se-selection-block"
                                                             style={{
                                                                 top: "50px",
                                                                 left: "30px",
                                                                 width: "800px",
                                                                 height: "116.797px"
                                                             }}
                                                             focusable="false">
                                                            <rect width="100%" height="100%"></rect>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                             className="se-selection-block"
                                                             style={{
                                                                 top: "211.296875px",
                                                                 left: "30px",
                                                                 width: "0px",
                                                                 height: "15px"
                                                             }}
                                                             focusable="false">
                                                            <rect width="100%" height="100%"></rect>
                                                        </svg>
                                                    </div>
                                                    <article className="se-components-wrap">
                                                        <div className="se-component se-text se-l-default"
                                                             id="SE-7ad08e46-d0de-4528-8c3c-fe8dc574d47f"
                                                             data-compid="SE-7ad08e46-d0de-4528-8c3c-fe8dc574d47f"
                                                             data-a11y-title="본문">
                                                            <div className="se-component-content">
                                                                <div className="se-drop-indicator" data-unitid=""
                                                                     data-compid="SE-7ad08e46-d0de-4528-8c3c-fe8dc574d47f"
                                                                     data-direction="top">
                                                                    <div
                                                                        className="se-section se-section-text se-l-default se-is-focused">
                                                                        <div
                                                                            id="SE-90d25c37-7159-422e-95dd-0e2e13442da0"
                                                                            className="se-module se-module-text __se-unit se-is-empty">
                                                                            <p id="SE-a6b8717f-46f0-41d6-a761-67afb682429f"
                                                                               className="se-text-paragraph se-text-paragraph-align-left"
                                                                               style={{lineHeight: "1.6"}}><span
                                                                                id="SE-9fc4a579-e90f-44b0-a7c5-161e14cec349"
                                                                                className="se-ff-system se-fs15 __se-node"
                                                                                style={{color: "rgb(0, 0, 0)"}}></span><span
                                                                                className="se-placeholder __se_placeholder se-ff-system se-fs15 se-placeholder-focused">내용을 입력하세요.</span>
                                                                            </p></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </article>
                                                    <div className="se-canvas-bottom">
                                                        <button type="button"
                                                                class="se-canvas-bottom-button __edge-area"><span
                                                            class="se-blind">본문 추가</span></button>
                                                        <div class="se-drop-indicator"></div>
                                                    </div>
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="WritingTag">
                            <div className="tag_inner"><strong className="blind">태그 입력</strong>
                                <div className="tag_input_box inactive"><input data-v-1f66f3e0="" type="text"
                                                                               placeholder="태그를 입력해주세요 (최대 10개)"
                                                                               className="tag_input"
                                                                               style={{width: "300px"}}/>
                                    <div className="layer_auto_tag" style={{display: "none"}}>
                                        <ul className="auto_tag_list"></ul>
                                    </div>
                                    <div className="ToggleSwitchTooltip">
                                        <div className="tooltip" style={{display: "none"}}> 태그는 최대 10개까지 입력할 수 있습니다.</div>
                                    </div>
                                    <div className="ToggleSwitchTooltip">
                                        <div className="tooltip" style={{display: "none"}}> 태그는 최대 20자까지 입력할 수 있습니다.</div>
                                    </div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
)
}

function TextControlsExample() {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="email" placeholder="name@example.com"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3}/>
            </Form.Group>
        </Form>
    );
}

export default CommunityWrite;