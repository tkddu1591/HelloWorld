import {Button, Col, Container, Input, Modal, ModalBody, Row} from "reactstrap";
import '../../scss/lecture/write/write.scss'
import SelectBox from "../../../../components/Lecture/SelectBox";
import React, {useEffect, useState} from "react";
import EditorToolbar, {formats, modules} from "../../../community/EditorToolBar";
import ReactQuill from "react-quill";
import {useLocation, useNavigate} from "react-router-dom";
import FileUpload from "./FileUpload";
import {API_BASE_URL, apiClient} from "../../../../App";
import {changeDTO} from "../../../../store/changeDTO";
import {useSelector} from "react-redux";


function LectureWriteMain() {
    let ip = useSelector((state: { myIp: string }) => state.myIp)
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const lectureNo = searchParams.get('lectureNo');
    const [lecture, setLecture] = useState<{
        tagList: number[],
        seller: string,
        title: string,
        levelNo: number,
        thumbName: string,
        thumbURL: string,
        content: string,
        price: number,
        discount: number,
        regIp: string,
        studyDate: number
    }>()

    const [isModify, setIsModify] = useState(false)
    const [tagSort, setTagSort] = useState(
        {
            placeholder:  '태그 선택',
            list:         [],
            isSearchable: true,
            isMulti:      true,
        }
    );
    const [levelSort, setlevelSort] = useState(
        {
            placeholder:  '레벨 선택',
            list:         [],
            isSearchable: false,
            isMulti:      false,
        }
    );

    const handleChange = value => {
        changeDTO(setLecture, 'content', value);
    };
    const [modal1, setModal1] = React.useState(false);
    const [tags, setTags] = useState<{
        value: number,
        label: string
    }[]>([])
    const [levels, setLevels] = useState<{
        value: number,
        label: string
    }[]>([])

    const [member, setMember] = useState<any>({})
    useEffect(() => {
        const fetchData = async () => {
            try {
                // 첫 번째 요청
                if (lectureNo !== null) {
                    const lectureResponse = await apiClient.get(`/lecture/view?lectureNo=${lectureNo}`);
                    setLecture(lectureResponse.data);
                    setIsModify(true);
                }

                // 두 번째 요청 (태그)
                const tagsResponse = await apiClient.get(`/lecture/tags`);
                const newTags = tagsResponse.data.map((tag) => ({
                    value: tag.tagNo,
                    label: tag.tagName,
                }));
                setTags((prevTags) => {
                    const uniqueTags = newTags.filter(newTag => !prevTags.some(prevTag => prevTag.value === newTag.value));
                    return [...(prevTags || []), ...uniqueTags];
                });

                // 세 번째 요청 (레벨)
                const levelsResponse = await apiClient.get(`/lecture/levels`);
                const newLevel = levelsResponse.data.map((level) => ({
                    value: level.levelNo,
                    label: level.levelName,
                }));
                setLevels((prevLevels) => {
                    const uniqueLevels = newLevel.filter(newTag => !prevLevels.some(prevTag => prevTag.value === newTag.value));
                    return [...(prevLevels || []), ...uniqueLevels];
                });

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

            } catch (error) {
                console.error(error);
                setIsModify(false);
            }
        };

        fetchData();
    }, []);
    useEffect(() => {
        // 마지막으로 동기적으로 실행되어야 하는 작업
        changeDTO(setLecture, 'regIp', ip);
        changeDTO(setLecture, 'seller', member.uid);
    }, [member])

    useEffect(() => {
        changeDTO(setTagSort, 'list', tags)
    }, [tags]);
    useEffect(() => {
        changeDTO(setlevelSort, 'list', levels)
    }, [levels]);

    useEffect(() => {
        if (Array.isArray(lecture?.thumbName)) {
            changeDTO(setLecture, 'thumbName', lecture?.thumbName[0])
            changeDTO(setLecture, 'thumbURL', lecture?.thumbURL[0])
        }
    }, [lecture])

    const [selectLevel, setSelectLevel] = useState(levels.filter(level => level.value === lecture?.levelNo)[0])
    useEffect(() => {
        if (levels.filter(level => level.value === lecture?.levelNo)[0] !== undefined)
            setSelectLevel(levels.filter(level => level.value === lecture?.levelNo)[0])
    }, [levels])
    const [selectTag, setSelectTag] = useState(
        tags.filter(tag => lecture?.tagList?.includes(Number(tag.value)))
    );
    useEffect(() => {
        if (levels.filter(level => level.value === lecture?.levelNo).length !== 0)
            setSelectTag(tags.filter(tag => lecture?.tagList.includes(tag.value)))
    }, [tags])
    let navigate = useNavigate()
    return <Container style={{marginTop: '100px'}} className={'lectureMainWrite'}>
        <Row>
            <Col className={'lectureWrite'}>
                {isModify ? <h3>강의 수정</h3> : <h3>강의 등록</h3>}
                <p>① 메인</p>
            </Col>
        </Row>
        <Row style={{marginTop: '20px'}}>
            <Col className={'lectureTitle'} md={6}>
                <div>
                    <h5><span className={'red'}>*</span> 타이틀</h5>
                    <Input type="text" placeholder="타이틀 입력" value={lecture?.title} minLength={2} onChange={(e) => {
                        changeDTO(setLecture, 'title', e.target.value)
                    }}></Input>
                </div>
            </Col>
            <Col className={'lectureTitle'} md={2}>
                <div>
                    <h5><span className={'red'}>*</span> 가격</h5>
                    <Input type="text" placeholder="가격 입력" value={lecture?.price ? lecture.price.toLocaleString() : ''}
                           onChange={(e) => {
                               changeDTO(setLecture, 'price', e.target.value)
                           }}></Input>
                </div>
            </Col>
            <Col className={'lectureTitle'} md={2}>

                <div>
                    <h5>할인율 <span style={{fontSize: '14px'}}>( % )</span></h5>
                    <Input type="number" placeholder="할인율 입력" value={lecture?.discount} max={100} onChange={(e) => {
                        changeDTO(setLecture, 'discount', e.target.value)
                    }}></Input>
                </div>
            </Col>

            <Col className={'lectureTitle'} md={2}>
                <div>
                    <h5>수강가능기간</h5>
                    <Input type="number" placeholder="개월수 입력" value={lecture?.studyDate} max={36} onChange={(e) => {
                        changeDTO(setLecture, 'studyDate', e.target.value)
                    }}></Input>
                </div>
            </Col>
        </Row>
        <Row style={{marginTop: '30px'}}>
            <Col md={6}>

                <div>
                    <h5><span className={'red'}>*</span> 태그</h5>
                    <SelectBox options={tagSort.list} isMulti={tagSort.isMulti} setSelect={setLecture}
                               selectName={'tagList'} value={selectTag}
                               placeholder={tagSort.placeholder} isSearchable={tagSort.isSearchable}></SelectBox>
                </div>
            </Col>
            <Col md={6}>

                <div>
                    <h5><span className={'red'}>*</span> 레벨</h5>
                    <SelectBox options={levelSort.list} setSelect={setLecture} selectName={'levelNo'}
                               placeholder={levelSort.placeholder}
                               value={selectLevel}
                               isSearchable={levelSort.isSearchable}></SelectBox>
                </div>
            </Col>

        </Row>
        <Row style={{marginTop: '30px'}}>
            <Col md={12}>
                <FileUpload modal={modal1} setModal={setModal1} fileName={'thumbName'} fileURL={'thumbURL'}
                            value={lecture?.thumbName} setFileName={setLecture} setFileURL={setLecture}
                            isObject={true}></FileUpload>
            </Col>

        </Row>
        <Row>
            <Col style={{marginTop: '20px'}}>


                <div>
                    <h5><span className={'red'}>*</span> 내용</h5>

                    <div className="text-editor">
                        <EditorToolbar/>
                        <ReactQuill
                            style={{height: "600px"}}
                            theme="snow"
                            value={lecture?.content === null ? "" : lecture?.content}
                            onChange={handleChange}
                            placeholder={"내용을 입력해주세요."}
                            modules={modules}
                            formats={formats}
                        />
                    </div>
                </div>
            </Col>
        </Row>
        <Row>
            <Col style={{display: "flex", justifyContent: "space-between", alignItems: 'center'}}>
                <Button color={'info'} onClick={() => {
                    navigate(-1)
                }}>이전</Button>
                <Button color={'info'} type={'submit'} onClick={async () => {
                    let newLectureNo: number = 0
                    if (lectureNo === null)
                        await apiClient.post(`/lecture/write/main`, lecture).then(
                            (res) => {
                                if (res.status === 200 && typeof newLectureNo === 'number') {
                                    navigate('/lecture/write/content?lectureNo=' + res.data)
                                }
                            }
                        ).catch(err => {
                            alert('오류가 발생했습니다. 다시 시도해주세요')
                        })
                    else
                        navigate('/lecture/write/content?lectureNo=' + lectureNo)

                }}>다음</Button>
            </Col>
        </Row>
    </Container>
}

export default LectureWriteMain