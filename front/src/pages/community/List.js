import React from "react";
import Table from 'react-bootstrap/Table';
import Nav from 'react-bootstrap/Nav';
import "./../../css/community/list.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


function List() {
    const [iconPills, setIconPills] = React.useState("1");
    const [pills, setPills] = React.useState("1");
    return (<>
        <div className="list">
            <TabsExample></TabsExample>
            <TabContent></TabContent>
        </div>
    </>)
}

function ButtonsExample() {
    return (
        <>
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                    Button
                </Button>
            </InputGroup>
        </>
    );
}

function TabContent() {
    return (<>
        <div className="main-area">
            <ul className={"article"}>
                <li>
                    <a>자유게시판</a>
                    <div className={"card_area"}>
                        <div className={"con"}>
                            <div className={"con_top"}>
                                <div className={"tit_area"}>
                                    <a className={"tit"}>
                                <span className={"inner"}>
                                    <strong>슬슬.............................</strong>
                                </span>
                                    </a>
                                </div>
                                <a className={"txt"}>
                                    아................................
                                </a>
                            </div>
                            <div className={"con_bottom"}>
                                <div className={"user_info"}>
                                    <div className={"pers_nick_area"}>
                                        <table role={"presentation"} cellSpacing={"0"}>
                                            <tbody>
                                            <tr>
                                                <td className={"p-nick"}>
                                                    <a className={"m-tcol-c"}></a>
                                                    <span className={"mem-level"}></span>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <script type={"text/javascript"}>wordBreak($(""));</script>
                                    <div className={"date_num"}>
                                        <span className={"date"}>13:59</span>
                                        <span className={"num"}>조회 510</span>
                                        <div className={"like_area"}>
                                            <div className={"comment_area"}>
                                                <span className={"comment_ico"}>댓글</span>
                                                <em className={"num"}>11</em>
                                            </div>
                                            <div className={"u_likeit_list_module"}>
                                        <span className={"u_likeit_list_btn off"}>
                                            <span className={"u_ico"}>
                                                <img src={"#"} width={"16"} height={"16"}/>
                                            </span>
                                            <em className={"u_cnt num-recomm"}>0</em>
                                        </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <ul className={"article"}>
                <li>
                    <a>자유게시판</a>
                    <div className={"card_area"}>
                        <div className={"con"}>
                            <div className={"con_top"}>
                                <div className={"tit_area"}>
                                    <a className={"tit"}>
                                <span className={"inner"}>
                                    <strong>슬슬.............................</strong>
                                </span>
                                    </a>
                                </div>
                                <a className={"txt"}>
                                    아................................
                                </a>
                            </div>
                            <div className={"con_bottom"}>
                                <div className={"user_info"}>
                                    <div className={"pers_nick_area"}>
                                        <table role={"presentation"} cellSpacing={"0"}>
                                            <tbody>
                                            <tr>
                                                <td className={"p-nick"}>
                                                    <a className={"m-tcol-c"}></a>
                                                    <span className={"mem-level"}></span>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <script type={"text/javascript"}>wordBreak($(""));</script>
                                    <div className={"date_num"}>
                                        <span className={"date"}>13:59</span>
                                        <span className={"num"}>조회 510</span>
                                        <div className={"like_area"}>
                                            <div className={"comment_area"}>
                                                <span className={"comment_ico"}>댓글</span>
                                                <em className={"num"}>11</em>
                                            </div>
                                            <div className={"u_likeit_list_module"}>
                                        <span className={"u_likeit_list_btn off"}>
                                            <span className={"u_ico"}>
                                                <img src={"#"} width={"16"} height={"16"}/>
                                            </span>
                                            <em className={"u_cnt num-recomm"}>0</em>
                                        </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </>)
}

function TabsExample() {
    return (
        <Nav variant="tabs" defaultActiveKey="link-0" style={{marginTop: "100px"}}>
            <Nav.Item>
                <Nav.Link eventKey="link-0">최신순</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-0">댓글 많은순</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-0">좋아요 많은순</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default List;