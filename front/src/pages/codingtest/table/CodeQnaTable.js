import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Axios from "axios";

function CodeQnaTable(){
    const [data, setData] = useState([]);

    useEffect(() => {
        // GET 요청을 보내는 부분
        Axios.get('http://localhost:8080/codingTest/qna')
            .then(response => {
                setData(response.data);
                console.log(data)
                ;
            })
            .then(result => {

            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);



    return<>
            <table class="table" style={{textAlign:'center',width:'100%',justifyContent:'center'}}>
                <thead>
                    <tr>
                        <th scope="col" style={{width:'80px'}} ></th>
                        <th scope="col" style={{width:'80px'}} >난이도</th>
                        <th scope="col">제목</th>
                        <th scope="col" style={{width:'150px'}}>조회수</th>
                        <th scope="col" style={{width:'150px'}}>추천수</th>
                    </tr>
                </thead>
                    <tbody>
                    { data.map((datas,index) => (
                        <tr>
                        <td scope="row">
                            <Link to={'#'} style={{color:'black',justifyContent:'center',display:'flex'}}>
                                <div style={{border:'1px solid #E6E6FA',width:'100%',textAlign:'center',height:'50px'}}>답변<br/>
                                    {datas.codeQnaNo}
                                </div>
                            </Link>
                        </td>
                        <td scope="row">
                            <Link to={'#'} style={{color:'black'}}>1</Link>
                        </td>
                        <td scope="row">
                            <Link to={'/codingtest/qna/view'} style={{color:'black'}}>{datas.title}</Link>
                        </td>
                        <td scope="row">
                            <Link to={'#'} style={{color:'black'}}>{datas.hit}</Link>
                        </td>
                        <td scope="row">
                            <Link to={'#'} style={{color:'black'}}>{datas.regIp}</Link>
                        </td>
                    </tr>
                    )) }
                </tbody>
            </table>



        </>

}

export default CodeQnaTable;