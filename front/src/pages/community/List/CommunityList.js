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
import {API_BASE_URL, apiClient} from "../../../App";
import axios from "axios";
import {changeDTO} from "../../../store/changeDTO";
import {useDispatch, useSelector} from "react-redux";
import {changeURL} from "../../../slice/CommunityListURL";

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
   let dispatch = useDispatch();
   let listURL = useSelector((state)=>{return state.listURL});

   const newSearch = searchParams.get('search');
   const [search, setSearch] = useState(newSearch);
   const newSort = searchParams.get('tab');
   const [sort, setSort] = useState('communityNo');
   const [num1, setNum1] = useState(0);
   const [num2, setNum2] = useState(0);
   const [detailSearch, setDetailSearch] = useState(newSearch);
   const newCate = searchParams.get('cateNo');
   const [cateNo, setCateNo] = useState(newCate);
   const [check, setCheck] = useState({
      numCheck: false,
   });

   let [pageRequestDTO, setPageRequestDTO] = useState({
      pg: 1, size: 10, cateNo: newCate, sort: newSort
   })
   let [pageResponseDTO, setPageResponseDTO] = useState({
      cateNo: parseInt(cateNo), communityList: [], end: 10, start: 1, next: true, prev: true, total: 10, size: 10, sort: sort
   });
   const [selectedOption, setSelectedOption] = useState(null);
   const [selectedSearch, setSelectedSearch] = useState(null);
   const [listLoading, setListLoading] = useState({ loading: 'paging', view: 'list' });
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
      console.log(sort);
      apiClient.get(`/community/list`,{
         params: pageRequestDTO
      })
          .then(res=>{
             console.log('view axios success');
             console.log(pageRequestDTO);
             console.log(res.data.communityList[0].regDate);
             setPageResponseDTO(res.data);
             setSort(res.data.sort);
          })
          .catch(err=>{
             console.log(err);
          })
   }, []);

   useEffect(()=>{
      console.log('sort: '+sort);
      console.log('newSort: '+newSort);
      console.log('listURL: '+listURL.url);
      console.log('cate: '+pageRequestDTO.cateNo);
      changeDTO(setPageRequestDTO, 'sort', sort)
   },[sort])

   useEffect(() => {
      console.log('pageRequestDTO: '+pageRequestDTO);
      apiClient.get(`/community/list`,{
         params: pageRequestDTO
      })
          .then(res=>{
             dispatch(changeURL(location.pathname+location.search));
             console.log('view axios success');
             console.log(pageRequestDTO);
             setPageResponseDTO(res.data);
          })
          .catch(err=>{
             console.log(err);
          })
   }, [pageRequestDTO]);

   useEffect(() => {
      changeDTO(setPageRequestDTO, 'sort', sort)
   }, [newSort]);

   useEffect(() => {
      console.log(pageResponseDTO)
      console.log(pageRequestDTO)
   }, [pageResponseDTO]);

   useEffect(() => {
      setPageRequestDTO(prev => ({ ...prev, cateNo: newCate }));
   }, [newCate]);
   let navigate = useNavigate();
   if(pageResponseDTO.communityList.length!==0)
   return (<>
      <Container style={{ userSelect: 'none' }}>
         <div className='list'>
            <SearchBar selectedSearch={selectedSearch}
                       setSelectedSearch={setSelectedSearch}
                       searchSelect={searchSelect}
                       selectedOption={selectedOption}
                       setSelectedOption={setSelectedOption}
                       options={options}>
            </SearchBar>
            <ViewOption cateNo={cateNo} sort={sort} setSort={setSort} listLoading={listLoading} setListLoading={setListLoading} navigate={navigate}></ViewOption>
            {listLoading && (clientWidth < 992 || listLoading.view === 'card') && <ContentCard data={pageResponseDTO}></ContentCard>}
            {listLoading && clientWidth >= 992 && listLoading.view === 'list' && <ContentList sort={sort} data={pageResponseDTO}></ContentList>}
            {listLoading && listLoading.loading === 'paging' && <LecturePagination></LecturePagination>}
         </div>
      </Container>
   </>);
}


export default CommunityList;