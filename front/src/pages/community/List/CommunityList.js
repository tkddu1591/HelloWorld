import React, {useEffect, useState} from 'react';
import '../../../css/community/list.css';
import { Col, Container, FormGroup, Input, Row } from 'reactstrap';
import {useLocation, useNavigate} from 'react-router-dom';
import Paging from './Paging';
import ContentList from './ContentList';
import SearchBar from './SearchBar';
import ViewOption from "./ViewOption";
import ContentCard from "./ContentCard";
import LecturePagination from "../../../components/Lecture/LecturePagination";
import {API_BASE_URL} from "../../../App";
import axios from "axios";

const options = [
   { value: 'java', label: 'Java' },
   { value: 'python', label: 'Python' },
   { value: 'c', label: 'C' },
   { value: 'c#', label: 'C#' },
   { value: 'c++', label: 'C++' },
   { value: 'Android', label: 'Android' },
   { value: 'react', label: 'React' },
   { value: 'vue', label: 'Vue' },
   { value: 'mysql', label: 'MySql' },
   { value: 'oracle', label: 'Oracle' },
   { value: 'flutter', label: 'Flutter' },
   { value: 'javascript', label: 'Javascript' },
   { value: 'django', label: 'Django' },
   { value: 'html', label: 'Html' },
   { value: 'css', label: 'Css' },
   { value: 'node.js', label: 'Node.js' },
];

const searchSelect = [
   { value: '0', label: '게시글 + 댓글' },
   { value: '1', label: '제목만' },
   { value: '2', label: '글작성자' },
   { value: '3', label: '댓글내용' },
   { value: '4', label: '댓글작성자' },
];

function CommunityList() {
   const location = useLocation();
   const searchParams = new URLSearchParams(location.search);

   const newSearch = searchParams.get('search');
   const [search, setSearch] = useState(newSearch);
   const newType = searchParams.get('newType');
   const [type, setType] = useState(newType);
   const [num1, setNum1] = useState(0);
   const [num2, setNum2] = useState(0);
   const [detailSearch, setDetailSearch] = useState(newSearch);
   const newCate = searchParams.get('cateNo');
   const [cateNo, setCateNo] = useState(newCate);
   const [check, setCheck] = useState({
      numCheck: false,
   });

   let [pageRequestDTO, setPageRequestDTO] = useState({
      pg: 1, size: 10, cateNo: newCate
   })
   let [pageResponseDTO, setPageResponseDTO] = useState({
      cateNo: parseInt(cateNo), communityList: [], end: 10, start: 1, next: true, prev: true, total: 10, size: 10
   });
   const [selectedOption, setSelectedOption] = useState(null);
   const [selectedSearch, setSelectedSearch] = useState(null);
   const [listLoading, setListLoading] = useState({ loading: 'scroll', view: 'card' });
   const [clientWidth, setClientWidth] = useState(document.body.clientWidth);
   useEffect(() => {
      const windowResize = () => {
         setClientWidth(document.body.clientWidth);
      };

      window.addEventListener(`resize`, windowResize);

      return () => {
         window.removeEventListener(`resize`, windowResize);
      };
   }, []);


   // LIST 불러 오기
   useEffect(() => {
      axios.get(`${API_BASE_URL}/community/list`,{
         params: pageRequestDTO
      })
          .then(res=>{
             console.log('GET success'+res.data);
             console.log('cateNo : '+cateNo);
             setPageResponseDTO(res.data);
             console.log(pageResponseDTO);
          })
          .catch(err=>{
             console.log(err);
          })
   }, [pageRequestDTO]);


   let navigate = useNavigate();
   return (<>
      <Container style={{ userSelect: 'none' }}>
         <div className='list'>
            <SearchBar selectedSearch={selectedSearch} setSelectedSearch={setSelectedSearch}
                       searchSelect={searchSelect}
                       selectedOption={selectedOption}
                       setSelectedOption={setSelectedOption}
                       options={options}></SearchBar>
            <ViewOption listLoading={listLoading} setListLoading={setListLoading} navigate={navigate}></ViewOption>
            {listLoading && (clientWidth < 992 || listLoading.view === 'card') && <ContentCard></ContentCard>}
            {listLoading && clientWidth >= 992 && listLoading.view === 'list' && <ContentList></ContentList>}
            {listLoading && listLoading.loading === 'paging' && <LecturePagination></LecturePagination>}
         </div>
      </Container>
   </>);
}


export default CommunityList;