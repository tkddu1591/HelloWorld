import {Button, Col, Container, Input, Modal, ModalBody, Row} from "reactstrap";
import '../../scss/lecture/write/write.scss'
import SelectBox from "../../../../components/Lecture/SelectBox";
import React, {useEffect, useState} from "react";
import EditorToolbar, {formats, modules} from "../../../community/EditorToolBar";
import ReactQuill from "react-quill";
import {useLocation, useNavigate} from "react-router-dom";
import FileUpload from "./FileUpload";
import axios from "axios";
import {API_BASE_URL} from "../../../../App";
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
    useEffect(() => {
        axios.get(API_BASE_URL + `/lecture/write/main?lectureNo=${lectureNo}`).then(res => {
            setLecture(res.data)
            setIsModify(true)
        }).catch(error => {
            setIsModify(false);
        })
    }, []);
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
        value: number ,
        label: string
    }[]>([])


    useEffect(() => {
        //태그
        axios.get(`${API_BASE_URL}/lecture/tags`).then((res) => {
            const newTags = res.data.map((tag) => ({
                value: tag.tagNo,
                label: tag.tagName,
            }));

            // 중복된 값을 필터링하여 추가
            setTags((prevTags) => {
                const uniqueTags = newTags.filter(newTag => !prevTags.some(prevTag => prevTag.value === newTag.value));
                return [...(prevTags || []), ...uniqueTags];
            });
        }).catch((err) => {
            console.log(err);
        });
        //레벨
        axios.get(`${API_BASE_URL}/lecture/levels`).then((res) => {
            const newLevel = res.data.map((level) => ({
                value: level.levelNo,
                label: level.levelName,
            }));

            // 중복된 값을 필터링하여 추가
            setLevels((prevLevels) => {
                const uniqueLevels = newLevel.filter(newTag => !prevLevels.some(prevTag => prevTag.value === newTag.value));
                return [...(prevLevels || []), ...uniqueLevels];
            });
        }).catch((err) => {
            console.log(err);
        });
        changeDTO(setLecture, 'regIp', ip);
        changeDTO(setLecture, 'seller', 'comTest');
    }, []);

    useEffect(() => {
        changeDTO(setTagSort, 'list', tags)
    }, [tags]);
    useEffect(() => {
        changeDTO(setlevelSort, 'list', levels)
    }, [levels]);

    useEffect(() => {
        console.log(lecture)
        if (Array.isArray(lecture?.thumbName)) {
            changeDTO(setLecture, 'thumbName', lecture?.thumbName[0])
            changeDTO(setLecture, 'thumbURL', lecture?.thumbURL[0])
        }
    }, [lecture])

    const [selectLevel, setSelectLevel] = useState(levels.filter(level => level.value === lecture?.levelNo)[0])
    useEffect(() => {
        if (levels.filter(level => level.value === lecture?.levelNo)[0] !== undefined)
            setSelectLevel(levels.filter(level => level.value === lecture?.levelNo)[0])
    },[levels])
    const [selectTag, setSelectTag] = useState(
        tags.filter(tag => lecture?.tagList?.includes(Number(tag.value)))
    );
    useEffect(() => {
        if (levels.filter(level => level.value === lecture?.levelNo).length !== 0)
            setSelectTag(tags.filter(tag => lecture?.tagList.includes(tag.value)))
        console.log(selectTag)
    },[tags])
    let navigate = useNavigate()
    return <Container style={{marginTop: '100px'}} className={'lectureMainWrite'}>
        <Row>
            <Col className={'lectureWrite'}>
                <h3>강의 등록</h3>
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
                    let lectureNo: number = 0
                    await axios.post(`${API_BASE_URL}/lecture/write/main`, lecture).then(
                        (res) => {
                            if (res.status === 200 && typeof lectureNo === 'number') {
                                lectureNo = res.data;
                            }
                        }
                    ).catch(err => {
                        console.log(err)
                    })
                    await navigate('/lecture/write/content?lectureNo=' + lectureNo)
                }}>다음</Button>
            </Col>
        </Row>
    </Container>
}

export default LectureWriteMain