import React, {useEffect, useState} from "react";
import {
    Button,
    Col,
    Container, Input,
    Nav,
    NavItem,
    NavLink,
    Row,
    TabContent, TabPane,
    UncontrolledTooltip
} from "reactstrap";
import '../../css/my/my.css';
import ProfilePageHeader from "../../components/Headers/ProfilePageHeader";
import DefaultFooter from "../../components/Footers/DefaultFooter";
import ListTable from "../../components/Lecture/ListTable";
import {useNavigate} from "react-router-dom";
import {API_BASE_URL, apiClient} from "../../App";
import {getMyDetailInfo} from "../../utils/member/getMyDetailInfo";
import {useDispatch} from "react-redux";
import Modify from "./menu/Modify";
import Seller from "./menu/Seller";


function MyInfo() {

    let navigate = useNavigate();
    let dispatch = useDispatch();
    useEffect(() => {
        getMyDetailInfo(navigate, dispatch);
    }, []);

    const [pills, setPills] = React.useState("1");
    React.useEffect(() => {
        document.body.classList.add("profile-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove("profile-page");
            document.body.classList.remove("sidebar-collapse");
        };
    }, []);


    const [tags, setTags] = useState<{
        value: number,
        label: string
    }[]>([])
    useEffect(() => {
        //태그
        if (tags.length === 0)
            apiClient.get(`/lecture/tags`).then((res) => {
                if (res.data.length !== 0) {
                    const newTags = res.data.map((tag) => ({
                        value: tag.tagNo,
                        label: tag.tagName,
                    }));
                    // 중복된 값을 필터링하여 추가
                    setTags((prevTags) => {
                        const uniqueTags = newTags.filter(newTag => !prevTags.some(prevTag => prevTag.value === newTag.value));
                        return [...(prevTags || []), ...uniqueTags];
                    });
                }
            }).catch((err) => {
                console.log(err);
            });
    }, []);

    type LectureType = {
        title?: string,
        tagList?: number[],
        studyDate?: number,
        levelNo?: number
    }
    const [lecture, setLecture] = useState<LectureType>();
    const [pageRequest, setPageRequest] = useState<{
        pg?: number,
        size?: number
        sort?: string
        lecture?: LectureType
    }>({
        sort: 'regDate',
        size: 12
    });
    const [pageResponse, setPageResponses] = useState();

    const [member, setMember] = useState<any>({})
    const [cartList, setCartList] = useState<{
        cartNo: number,
        uid: string,
        lectureNo: number
        title: string,
        count: number,
        price: number,
        discount: number,
        point: number,
        total: number,
    }[]>([]);
    useEffect(() => {
        const accessToken = localStorage.getItem("helloWorld_ACCESS_TOKEN")
        if (accessToken !== null)
            apiClient.get(`/me`, {
                headers: {"Authorization": `Bearer ${accessToken}`}
            })
                .then((res) => {
                    setMember(res.data);

                })
                .catch((err) => {
                    console.log("실패? : " + JSON.stringify(err));
                });
    }, []);


    useEffect(() => {
        if (member?.uid)
            apiClient.get(`/lecture/list`, {
                params: {
                    pg:     1,
                    size:   4,
                    sort:   'regDate',
                    'lecture.seller': member.uid
                }
            }).then((res) => {
                setPageResponses(res.data);
            }).catch(err => console.log(err));


    }, [member])

    return (
        <div className="wrapper">
            <ProfilePageHeader member={member}/>
            <div className="section">
                <Container>
                    {/*<div className="button-container">
                        <Button className="btn-round" color="info" size="lg">
                            Follow
                        </Button>
                        <Button
                            className="btn-round btn-icon"
                            color="default"
                            id="tooltip515203352"
                            size="lg"
                        >
                            <i className="fab fa-twitter"></i>
                        </Button>
                        <UncontrolledTooltip delay={0} target="tooltip515203352">
                            Follow me on Twitter
                        </UncontrolledTooltip>
                        <Button
                            className="btn-round btn-icon"
                            color="default"
                            id="tooltip340339231"
                            size="lg"
                        >
                            <i className="fab fa-instagram"></i>
                        </Button>
                        <UncontrolledTooltip delay={0} target="tooltip340339231">
                            Follow me on Instagram
                        </UncontrolledTooltip>
                    </div>
                    <h3 className="title">About me</h3>
                    <h5 className="description">
                        An artist of considerable range, Ryan — the name taken by
                        Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                        and records all of his own music, giving it a warm, intimate feel
                        with a solid groove structure. An artist of considerable range.
                    </h5>*/}
                    <Row>
                        <Col className="ml-auto mr-auto" md="6">
                            <h4 className="title text-center">내 프로필</h4>
                            <div className="nav-align-center">
                                <Nav
                                    className="nav-pills-info nav-pills-just-icons"
                                    pills
                                    role="tablist"
                                >
                                    <NavItem>
                                        <NavLink
                                            className={pills === "1" ? "active" : ""}
                                            href="#pablo"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setPills("1");
                                            }}
                                        >
                                            <i className="now-ui-icons users_single-02"></i>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={pills === "2" ? "active" : ""}
                                            href="#pablo"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setPills("2");
                                            }}
                                        >
                                            <i className="now-ui-icons ui-1_calendar-60"></i>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={pills === "3" ? "active" : ""}
                                            href="#pablo"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setPills("3");
                                            }}
                                        >
                                            <i className="now-ui-icons ui-1_simple-add"></i>
                                        </NavLink>
                                    </NavItem>
                                    {/*<NavItem>
                                        <NavLink
                                            className={pills === "4" ? "active" : ""}
                                            href="#pablo"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setPills("4");
                                            }}
                                        >
                                            <i className="now-ui-icons ui-1_settings-gear-63"></i>
                                        </NavLink>
                                    </NavItem>*/}
                                </Nav>
                            </div>
                        </Col>
                        <TabContent className="gallery" activeTab={"pills" + pills} style={{width: '100%'}}>
                            <TabPane tabId="pills2">
                                <Col className="ml-auto mr-auto" md="12">
                                    <Row className="collections">
                                        <Col style={{minWidth: '100vh'}} className={'profileContent'}>
                                            <ListTable isMore={true} pageResponse={pageResponse} tags={tags}
                                                       title={'나의 강의'}></ListTable>
                                            <div style={{display: 'flex', justifyContent: 'right'}}>
                                                <Button color={'info'} style={{marginRight: '20px'}} onClick={() => {
                                                    navigate('/lecture/write/main')
                                                }}>강의 작성</Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </TabPane>
                            <TabPane tabId="pills1">
                                <Col className="ml-auto mr-auto" md="10">
                                    <Row className="collections">
                                        <Col md="6" style={{textAlign:"left", margin:"0 auto"}}>
                                            <Modify member={member} setMember={setMember} />
                                        </Col>
                                    </Row>
                                </Col>
                            </TabPane>
                            <TabPane tabId="pills3">
                                <Col className="ml-auto mr-auto" md="10">
                                    <Row className="collections">
                                        <Col md="6" style={{textAlign:"left", margin:"0 auto"}}>
                                            <Seller member={member} setMember={setMember} />
                                        </Col>
                                    </Row>
                                </Col>
                            </TabPane>
                        </TabContent>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default MyInfo;
