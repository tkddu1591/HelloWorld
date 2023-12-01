import React, {useState, useMemo, useEffect} from "react";
import {Col, Container, FormGroup, Input, Row} from "reactstrap";
import "../../../css/community/write.scss";
import MyComponent from "../EditorComponent";
import {useLocation, useNavigate} from "react-router-dom";
import WriteHeader from "./WriteHeader";
import WriteTitleBar from "./WriteTitleBar";
import axios from "axios";
import {API_BASE_URL, apiClient} from "../../../App";
import {useSelector} from "react-redux";


const searchSelect = [
    {value: '1', label: '자유게시판'},
    {value: '2', label: '스터디'},
    {value: '3', label: 'Q&A'},
];

const options = [
    {value: 0, label: 'Java'},
    {value: 1, label: 'Python'},
    {value: 2, label: 'C'},
    {value: 3, label: 'C#'},
    {value: 4, label: 'C++'},
    {value: 5, label: 'Android'},
    {value: 6, label: 'React'},
    {value: 7, label: 'Vue'},
    {value: 8, label: 'MySql'},
    {value: 9, label: 'Oracle'},
    {value: 10, label: 'Flutter'},
    {value: 11, label: 'Javascript'},
    {value: 12, label: 'Django'},
    {value: 13, label: 'Html'},
    {value: 14, label: 'Css'},
    {value: 15, label: 'Node.js'}
];


function CommunityWrite() {
    let storeCateNo = useSelector((state) => {
        return state.cateNo
    });
    const [selectedSearch, setSelectedSearch] = useState(searchSelect[storeCateNo.no - 1]);
    const [selectedOption, setSelectedOption] = useState([]);
    const [content, setContent] = useState({value: null});
    const [title, setTitle] = useState({value: null});
    let [uid, setUid] = useState('');
    let myInfo = useSelector((state) => {
        return state.myInfo
    });
    let navigate = useNavigate();

    const handleChange = value => {
        setContent({value});
    };

    const titleChange = value => {
        setTitle({value});
    };

    useEffect(() => {
        setUid(myInfo.uid);
        console.log('storeCateNo: ' + storeCateNo.no);
        console.log('searchSelect : ' + searchSelect[storeCateNo.no]);
        /*setSelectedSearch(searchSelect[]);*/
    }, []);

    useEffect(() => {
        if (selectedSearch != null)
            console.log('selectedSearch: ' + selectedSearch.value);
    }, [selectedSearch]);
    useEffect(() => {
        console.log('================================================================');
        if (selectedOption != null) {
            for (let i = 0; i < selectedOption.length; i++) {
                console.log('selectedOption: ' + selectedOption[i].value);
            }
        }
    }, [selectedOption]);
    useEffect(() => {
        console.log('================================================================')
        console.log('content: ' + content.value);
    }, [content]);

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const communityNo = searchParams.get('communityNo');
    const [cateNo, setCateNo] = useState()
    useEffect(() => {
        if (communityNo !== null) {
            apiClient.get(`community/view?communityNo=${communityNo}&cateNo=${storeCateNo.no}`).then(
                (response) => {

                    const newOptions = response.data.hasTagsList.map(tag => ({
                        value: tag.tagNo,
                        label: tag.tagName
                    }));

                    setSelectedOption([...selectedOption, ...newOptions]);
                    setTitle(response.data.view.title)
                    setContent(response.data.view.content)
                    setSelectedSearch(response.data.view.cateNo)
                }
            )
        }
    }, []);


    const register = () => {
        console.log('register')
        apiClient.post(`/community/register`,
            {
                title: title.value,
                cateNo: selectedSearch.value,
                tags: selectedOption.map(option => option.value),
                content: content.value,
                uid: uid
            }
        )
            .then(res => {
                console.log('register success: ' + res.data);
                navigate(`/community/view?cate=${selectedSearch.value}&no=${res.data}`);
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        console.log(selectedSearch);
        console.log('title : ' + title.value);
    }, [title])

    useEffect(() => {

    }, []);

    return (<>
            <Container>
                <div className="write" style={{marginTop: "90px"}}>
                    <WriteHeader register={register}
                                 title={title}
                                 content={content}>
                    </WriteHeader>
                    <WriteTitleBar selectedSearch={selectedSearch}
                                   setSelectedSearch={setSelectedSearch}
                                   searchSelect={searchSelect}
                                   selectedOption={selectedOption}
                                   options={options}
                                   setSelectedOption={setSelectedOption}
                                   title={title}
                                   setTitle={setTitle}
                                   titleChange={titleChange}
                                   storeCateNo={storeCateNo}>
                    </WriteTitleBar>
                    <MyComponent handleChange={handleChange} content={content}></MyComponent>
                </div>
            </Container>
        </>
    )
}


export default CommunityWrite;