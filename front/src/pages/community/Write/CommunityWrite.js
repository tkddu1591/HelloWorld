import React, {useState, useMemo, useEffect} from "react";
import {Col, Container, FormGroup, Input, Row} from "reactstrap";
import "../../../css/community/write.scss";
import MyComponent from "../EditorComponent";
import {useNavigate} from "react-router-dom";
import WriteHeader from "./WriteHeader";
import WriteTitleBar from "./WriteTitleBar";
import axios from "axios";
import {API_BASE_URL} from "../../../App";
import {useSelector} from "react-redux";


const searchSelect = [
    {value: '0', label: '자유게시판'},
    {value: '1', label: '스터디'},
    {value: '2', label: 'Q&A'},
];

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


function CommunityWrite() {
    const [selectedSearch, setSelectedSearch] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);
    const [content, setContent] = useState({value: null});
    const [title, setTitle] = useState({value: null});
    let [uid, setUid] = useState('');
    let myInfo = useSelector((state) => {return state.myInfo} );
    let navigate = useNavigate();

    const handleChange = value => {
        setContent({value});
    };

    const titleChange = value => {
        setTitle({value});
    };

    useEffect(() => {
        setUid(myInfo.uid);
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

    const register = () => {
        console.log('register')
        axios.post(`${API_BASE_URL}/community/register`,
            {
                title: title.value,
                cateNo: selectedSearch.value,
                tags: selectedOption.map(option => option.value),
                content: content.value,
                uid: uid
            }
        )
            .then(res=>{
                console.log('register success: ' + res.data);
            })
            .catch(err =>{
                console.log(err);
            })
    }

    useEffect(() => {
        console.log('title : '+title.value);
    },[title])

    return (<>
            <Container>
                <div className="write" style={{marginTop: "90px"}}>
                    <WriteHeader register={register}></WriteHeader>
                    <WriteTitleBar selectedSearch={selectedSearch}
                                   setSelectedSearch={setSelectedSearch}
                                   searchSelect={searchSelect}
                                   selectedOption={selectedOption}
                                   options={options}
                                   setSelectedOption={setSelectedOption}
                                   title={title}
                                   setTitle={setTitle}
                                   titleChange={titleChange}></WriteTitleBar>
                    <MyComponent handleChange={handleChange} content={content}></MyComponent>
                </div>
            </Container>
        </>
    )
}


export default CommunityWrite;