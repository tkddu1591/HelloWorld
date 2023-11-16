import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Axios from "axios";
import Pagination from "react-js-pagination";
import "../Pagination/PageStyle.css"


function CodeListTable() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // GET 요청을 보내는 부분
        Axios.get('http://localhost:8080/codingTest/problem')
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


    const [currentPost, setCurrentPost] = useState(data) // 페이지네이션을 통해 보여줄 게시글
    const [page, setPage] = useState(1) // 현재 페이지 번호

    const postPerPage = 10 // 페이지 당 게시글 개수
    const indexOfLastPost = page * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage

    const handlePageChange = (page) => {
        setPage(page)
    }



    useEffect(() => {
        setCurrentPost(data.slice(indexOfFirstPost, indexOfLastPost))
    }, [data, page])

        return <>
            <table class="table" style={{textAlign: 'center'}}>
                <thead>
                <tr>
                    <th scope="col" style={{width: '80px'}}>난이도</th>
                    <th scope="col">제목</th>
                    <th scope="col" style={{width: '150px'}}>완료한 사람</th>
                    <th scope="col" style={{width: '150px'}}>정답률</th>
                </tr>
                </thead>
                <tbody>
                {currentPost.map((datas, index) => (
                    <tr>
                        <td scope="row">
                            <Link to={'#'} style={{color: 'black'}}>{datas.level}</Link>
                        </td>
                        <td scope="row">
                            <Link to={'/codingtest/view?codingTestNo=' + datas.codingTestNo}
                                  style={{color: 'black'}}>{datas.title} </Link>
                        </td>
                        <td scope="row">
                            <Link to={'#'} style={{color: 'black'}}>{datas.answer}명</Link>
                        </td>
                        <td scope="row">
                            <Link to={'#'} style={{color: 'black'}}>{datas.answerPresent}%</Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <Pagination
                activePage={page}
                itemsCountPerPage={postPerPage}
                totalItemsCount={data.length}
                pageRangeDisplayed={10}
                prevPageText={"‹"}
                nextPageText={"›"}
                onChange={handlePageChange}/>

        </>
    }


export default CodeListTable;