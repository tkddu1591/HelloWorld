import React, {useEffect, useState} from 'react';
import '../../../css/community/list.css';
import { Col, Container, FormGroup, Input, Row } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import Paging from './Paging';
import ContentList from './ContentList';
import SearchBar from './SearchBar';
import ViewOption from "./ViewOption";
import ContentCard from "./ContentCard";
import LecturePagination from "../../../components/Lecture/LecturePagination";

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

function CommunityList({
                          colSize,
                          sortType = undefined,
                          isMore = false,
                          title = '목록',
                          isLoadingType = false,
                       }) {
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