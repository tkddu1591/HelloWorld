import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Axios from "axios";
import {Pagination} from "reactstrap";

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


        const [page, setPage] = useState(1);

        const handlePageChange = (page) => {
            setPage(page);
        };


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
                {data.map((datas, index) => (
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
                activePage={page} // 현재 페이지
                itemsCountPerPage={10} // 한 페이지랑 보여줄 아이템 갯수
                totalItemsCount={10} // 총 아이템 갯수
                pageRangeDisplayed={10} // paginator의 페이지 범위
                prevPageText={"‹"} // "이전"을 나타낼 텍스트
                nextPageText={"›"} // "다음"을 나타낼 텍스트
                onChange={handlePageChange} // 페이지 변경을 핸들링하는 함수
            />
        </>
    }


export default CodeListTable;