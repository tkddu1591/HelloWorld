import React, {useState} from "react";
import Nav from 'react-bootstrap/Nav';
import "./../../css/community/list.css";
import Pagination from 'react-bootstrap/Pagination';
import {Col, Container, FormGroup, Input, Row} from "reactstrap";
import Select from "react-select";
import PageListViewType from "../../components/Lecture/PageListType";
import Button from 'react-bootstrap/Button';
import {useNavigate} from "react-router-dom";

const options = [
    {value: 'java', label: 'Java'},
    {value: 'python', label: 'Python'},
    {value: 'c', label: 'C'},
    {value: 'c#', label: 'C#'},
    {value: 'c++', label: 'C++'},
    {value: 'Android', label: 'Android'},
    {value: 'react', label: 'React'},
    {value: 'vue', label: 'Vue'},
    {value: 'mysql', label: 'MySql'},
    {value: 'oracle', label: 'Oracle'},
    {value: 'flutter', label: 'Flutter'},
    {value: 'javascript', label: 'Javascript'},
    {value: 'django', label: 'Django'},
    {value: 'html', label: 'Html'},
    {value: 'css', label: 'Css'},
    {value: 'node.js', label: 'Node.js'}
];

const searchSelect = [
    {value: '0', label: '게시글 + 댓글'},
    {value: '1', label: '제목만'},
    {value: '2', label: '글작성자'},
    {value: '3', label: '댓글내용'},
    {value: '4', label: '댓글작성자'}
];

function CommunityList() {
    const [iconPills, setIconPills] = React.useState("1");
    const [pills, setPills] = React.useState("1");
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedSearch, setSelectedSearch] = useState(null);
    const [listLoading, setListLoading] = useState({loading: 'scroll', view: 'card'});
    let navigate = useNavigate();
    return (<>
        <Container style={{userSelect: 'none'}}>
            <div className="list">
                <SearchBar selectedSearch={selectedSearch} setSelectedSearch={setSelectedSearch}
                           searchSelect={searchSelect}
                           selectedOption={selectedOption}
                           setSelectedOption={setSelectedOption}
                           options={options}></SearchBar>
                <PillsExample listLoading={listLoading} setListLoading={setListLoading} navigate={navigate}></PillsExample>
                <TabContent></TabContent>
                <AdvancedExample></AdvancedExample>
            </div>
        </Container>
    </>)
}

function SearchBar(props) {
    return (<>
        <div className="search_area"
             style={{marginTop: "100px", minWidth: "160px"}}>
            <Row>
                <Col lg="2">
                    <Select
                        onChange={props.setSelectedSearch}
                        options={props.searchSelect}
                        defaultValue={props.searchSelect[0]}
                        isMulti={false}
                        maxMenuHeight={"300px"}
                        readonly={true}
                        isSearchable={false}
                    />
                </Col>
                <Col lg="10">
                    <FormGroup style={{border: '1px solid #ccc', borderRadius: '5px', width: '10'}}>
                        <Input
                            style={{border: 'none', maxWidth: '95%', display: 'inline-block'}}
                            defaultValue=""
                            placeholder="검색어를 입력해 주세요."
                            type="text"
                        ></Input>
                        <div className="now-ui-icons ui-1_zoom-bold"
                             style={{width: '5%', height: '22px', marginTop: '10px', cursor: "pointer"}}></div>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col lg="12">
                    <div style={{marginBottom: "15px"}}>
                        <Select
                            value={props.selectedOption}
                            onChange={props.setSelectedOption}
                            options={props.options}
                            placeholder={"태그를 검색해 주세요."}
                            isMulti={true}
                            maxMenuHeight={"300px"}
                            length={3}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    </>)
}

function PillsExample({listLoading, setListLoading, navigate}) {
    return (
        <div style={{display: "flex", justifyContent: 'space-between'}}>

            <Nav variant="pills" defaultActiveKey="/home"
                 style={{width: "auto"}}>
                <Nav.Item>
                    <Nav.Link eventKey="link-0">최신순</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">댓글 많은순</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">좋아요 많은순</Nav.Link>
                </Nav.Item>
            </Nav>

            <div>
                <Button variant="primary" style={{background:"#2CA8FF"}} onClick={
                    ()=>{navigate("/community/write");}
                }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-keyboard" viewBox="0 0 16 16" style={{marginRight:"5px"}}>
                        <path d="M14 5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h12zM2 4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2z"/>
                        <path d="M13 10.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm0-2a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-5 0A.25.25 0 0 1 8.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 8 8.75v-.5zm2 0a.25.25 0 0 1 .25-.25h1.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-1.5a.25.25 0 0 1-.25-.25v-.5zm1 2a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-5-2A.25.25 0 0 1 6.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 6 8.75v-.5zm-2 0A.25.25 0 0 1 4.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 4 8.75v-.5zm-2 0A.25.25 0 0 1 2.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 2 8.75v-.5zm11-2a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-2 0a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-2 0A.25.25 0 0 1 9.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 9 6.75v-.5zm-2 0A.25.25 0 0 1 7.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 7 6.75v-.5zm-2 0A.25.25 0 0 1 5.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 5 6.75v-.5zm-3 0A.25.25 0 0 1 2.25 6h1.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-1.5A.25.25 0 0 1 2 6.75v-.5zm0 4a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm2 0a.25.25 0 0 1 .25-.25h5.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-5.5a.25.25 0 0 1-.25-.25v-.5z"/>
                    </svg>
                    글 작성하기
                </Button>{' '}
                <PageListViewType listLoading={listLoading} setListLoading={setListLoading}></PageListViewType>
            </div>
        </div>
    );
}

function TabContent() {
    return (<>
        <div className="main-area" style={{display: "flex", justifyContent: 'space-between'}} >
            <ul className={"article"}>
                <li>
                    <a className={"board_name"}>자유게시판</a>
                    <div className={"card_area"}>
                        <div className={"con"}>
                            <div className={"con_top"}>
                                <div className={"tit_area"}>
                                    <a className={"tit"} href={"view"}>
                                <span className={"inner"}>
                                    <strong>제목 0000000000000000000000000</strong>
                                </span>
                                    </a>
                                </div>
                                <a className={"txt"} href={"view"}>
                                    내용 0000000000000000000000000000000
                                </a>
                            </div>
                            <div className={"con_bottom"}>
                                <div className={"user_info"}>
                                    <div className={"pers_nick_area"}>
                                        <table role={"presentation"} cellSpacing={"0"}>
                                            <tbody>
                                            <tr>
                                                <td className={"p-nick"}>
                                                    <a className={"m-tcol-c"}>닉네임임</a>
                                                    <span className={"mem-level"}></span>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <script type={"text/javascript"}>wordBreak($(""));</script>
                                    <div className={"date_num"}>
                                        <span className={"date"}>23.10.19. 13:59</span>
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
                        <div className={"movie-img"}>
                            <a href={"view"}>
                                <img src={"./../../images/community/testimg.jpg"} width={"120px"} height={"120px"}
                                     alt={"썸네일"}>
                                </img>
                            </a>
                        </div>
                    </div>
                </li>
                <li>
                    <a className={"board_name"}>자유게시판</a>
                    <div className={"card_area"}>
                        <div className={"con"}>
                            <div className={"con_top"}>
                                <div className={"tit_area"}>
                                    <a className={"tit"} href={"view"}>
                                <span className={"inner"}>
                                    <strong>제목 0000000000000000000000000</strong>
                                </span>
                                    </a>
                                </div>
                                <a className={"txt"} href={"view"}>
                                    내용 0000000000000000000000000000000
                                </a>
                            </div>
                            <div className={"con_bottom"}>
                                <div className={"user_info"}>
                                    <div className={"pers_nick_area"}>
                                        <table role={"presentation"} cellSpacing={"0"}>
                                            <tbody>
                                            <tr>
                                                <td className={"p-nick"}>
                                                    <a className={"m-tcol-c"}>닉네임임</a>
                                                    <span className={"mem-level"}></span>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <script type={"text/javascript"}>wordBreak($(""));</script>
                                    <div className={"date_num"}>
                                        <span className={"date"}>23.10.19. 13:59</span>
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
                        <div className={"movie-img"}>
                            <a href={"view"}>
                                <img src={"./../../images/community/testimg.jpg"} width={"120px"} height={"120px"}
                                     alt={"썸네일"}>
                                </img>
                            </a>
                        </div>
                    </div>
                </li>
                <li>
                    <a className={"board_name"}>자유게시판</a>
                    <div className={"card_area"}>
                        <div className={"con"}>
                            <div className={"con_top"}>
                                <div className={"tit_area"}>
                                    <a className={"tit"} href={"view"}>
                                <span className={"inner"}>
                                    <strong>제목 0000000000000000000000000</strong>
                                </span>
                                    </a>
                                </div>
                                <a className={"txt"} href={"view"}>
                                    내용 0000000000000000000000000000000
                                </a>
                            </div>
                            <div className={"con_bottom"}>
                                <div className={"user_info"}>
                                    <div className={"pers_nick_area"}>
                                        <table role={"presentation"} cellSpacing={"0"}>
                                            <tbody>
                                            <tr>
                                                <td className={"p-nick"}>
                                                    <a className={"m-tcol-c"}>닉네임임</a>
                                                    <span className={"mem-level"}></span>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <script type={"text/javascript"}>wordBreak($(""));</script>
                                    <div className={"date_num"}>
                                        <span className={"date"}>23.10.19. 13:59</span>
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
                        <div className={"movie-img"}>
                            <a href={"view"}>
                                <img src={"./../../images/community/testimg.jpg"} width={"120px"} height={"120px"}
                                     alt={"썸네일"}>
                                </img>
                            </a>
                        </div>
                    </div>
                </li>
                <li>
                    <a className={"board_name"}>자유게시판</a>
                    <div className={"card_area"}>
                        <div className={"con"}>
                            <div className={"con_top"}>
                                <div className={"tit_area"}>
                                    <a className={"tit"} href={"view"}>
                                <span className={"inner"}>
                                    <strong>제목 0000000000000000000000000</strong>
                                </span>
                                    </a>
                                </div>
                                <a className={"txt"} href={"view"}>
                                    내용 0000000000000000000000000000000
                                </a>
                            </div>
                            <div className={"con_bottom"}>
                                <div className={"user_info"}>
                                    <div className={"pers_nick_area"}>
                                        <table role={"presentation"} cellSpacing={"0"}>
                                            <tbody>
                                            <tr>
                                                <td className={"p-nick"}>
                                                    <a className={"m-tcol-c"}>닉네임임</a>
                                                    <span className={"mem-level"}></span>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <script type={"text/javascript"}>wordBreak($(""));</script>
                                    <div className={"date_num"}>
                                        <span className={"date"}>23.10.19. 13:59</span>
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
                        <div className={"movie-img"}>
                            <a href={"view"}>
                                <img src={"./../../images/community/testimg.jpg"} width={"120px"} height={"120px"}
                                     alt={"썸네일"}>
                                </img>
                            </a>
                        </div>
                    </div>
                </li>
                <li>
                    <a className={"board_name"}>자유게시판</a>
                    <div className={"card_area"}>
                        <div className={"con"}>
                            <div className={"con_top"}>
                                <div className={"tit_area"}>
                                    <a className={"tit"} href={"view"}>
                                <span className={"inner"}>
                                    <strong>제목 0000000000000000000000000</strong>
                                </span>
                                    </a>
                                </div>
                                <a className={"txt"} href={"view"}>
                                    내용 0000000000000000000000000000000
                                </a>
                            </div>
                            <div className={"con_bottom"}>
                                <div className={"user_info"}>
                                    <div className={"pers_nick_area"}>
                                        <table role={"presentation"} cellSpacing={"0"}>
                                            <tbody>
                                            <tr>
                                                <td className={"p-nick"}>
                                                    <a className={"m-tcol-c"}>닉네임임</a>
                                                    <span className={"mem-level"}></span>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <script type={"text/javascript"}>wordBreak($(""));</script>
                                    <div className={"date_num"}>
                                        <span className={"date"}>23.10.19. 13:59</span>
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
                        <div className={"movie-img"}>
                            <a href={"view"}>
                                <img src={"./../../images/community/testimg.jpg"} width={"120px"} height={"120px"}
                                     alt={"썸네일"}>
                                </img>
                            </a>
                        </div>
                    </div>
                </li>
                <li>
                    <a className={"board_name"}>자유게시판</a>
                    <div className={"card_area"}>
                        <div className={"con"}>
                            <div className={"con_top"}>
                                <div className={"tit_area"}>
                                    <a className={"tit"} href={"view"}>
                                <span className={"inner"}>
                                    <strong>제목 0000000000000000000000000</strong>
                                </span>
                                    </a>
                                </div>
                                <a className={"txt"} href={"view"}>
                                    내용 0000000000000000000000000000000
                                </a>
                            </div>
                            <div className={"con_bottom"}>
                                <div className={"user_info"}>
                                    <div className={"pers_nick_area"}>
                                        <table role={"presentation"} cellSpacing={"0"}>
                                            <tbody>
                                            <tr>
                                                <td className={"p-nick"}>
                                                    <a className={"m-tcol-c"}>닉네임임</a>
                                                    <span className={"mem-level"}></span>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <script type={"text/javascript"}>wordBreak($(""));</script>
                                    <div className={"date_num"}>
                                        <span className={"date"}>23.10.19. 13:59</span>
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
                        <div className={"movie-img"}>
                            <a href={"view"}>
                                <img src={"./../../images/community/testimg.jpg"} width={"120px"} height={"120px"}
                                     alt={"썸네일"}>
                                </img>
                            </a>
                        </div>
                    </div>
                </li>
            </ul>

        </div>
    </>)
}

function AdvancedExample() {
    return (
        <Pagination className={"justify-content-center"} style={{marginTop: "10px", marginBottom: "10px"}}>
            <Pagination.First/>
            <Pagination.Prev/>
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis/>

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>

            <Pagination.Ellipsis/>
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next/>
            <Pagination.Last/>
        </Pagination>
    );
}


/*function SearchArea() {
    return (<>
        <div className="list-search">
            <form className="frmSearch" action onSubmit={"return false"}>
                <input type={"hidden"} id={"searchBy"} value={0}/>
                <div className={"select_component is_selected"} style={{width: "144px",}} id={"divSearchBy"}>
                    <a href={"#"} id={"currentSearchBy"} class={"select_box"}>
                        게시글 + 댓글
                    </a>
                    <ul className={"select_list"}>
                        <li>
                            <a href={"#"}>게시글 + 댓글</a>
                        </li>
                        <li>
                            <a href={"#"}>제목만</a>
                        </li>
                        <li>
                            <a href={"#"}>글작성자</a>
                        </li>
                        <li>
                            <a href={"#"}>댓글내용</a>
                        </li>
                        <li>
                            <a href={"#"}>댓글작성자</a>
                        </li>
                    </ul>
                </div>
                <div className={"input_component"} style={{width: "300px"}}>
                    <input type={"text"} id={"query"} placeholder={"검색어를 입력해주세요."}/>
                </div>
                <button className={"btn-search-green"}>검색</button>
            </form>

        </div>
    </>)
}*/
/*function TabsExample() {
    return (
        <Nav variant="tabs" className={"justify-content-left"}
             defaultActiveKey="link-0"/!* style={{marginTop: "100px"}}*!/>
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

function FillExample() {
    return (
        <>
            <Nav fill variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link eventKey="link-0">최신순</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">댓글 많은순</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">좋아요 많은순</Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    );
}

function HorizontalExample() {
    return (
        <Stack direction="horizontal" gap={3}>
            <div className="p-2">First item</div>
            <div className="p-2">Second item</div>
            <div className="p-2">Third item</div>
        </Stack>
    );
}

function UnderlineExample() {
    return (
        <Nav variant="underline" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Option 2</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}*/
/*function ButtonsExample() {
    return (
        <>
            <InputGroup className="mb-3"
                        style={{marginTop: "100px", marginRight: "auto", marginLeft: "auto", width: "1140px"}}>
                <Form.Control
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                {/!*<Button variant="outline-secondary" id="button-addon2">
                    Button
                </Button>*!/}
            </InputGroup>
        </>
    );
}*/
export default CommunityList;