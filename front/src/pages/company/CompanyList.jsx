import React, { useState } from 'react';
import { Container, Row } from 'reactstrap';
import CompanyCard from './componentsByCompany/CompanyCard';
import SearchBar from '../../components/Lecture/SearchBar';

function CompanyList() {
	const [companyData, setCompanyData] = useState([
		{
			image: '/images/home/main_logo.png',
			title: 'JAVA 백엔드 개발자 모집',
			company: '(주)만두래곤요리킹조리킹',
			location: '강서구',
			career: '2~10년',
			education: '무관',
			expireDate: '11/14',
			isBookmark: false,
		},
		{
			image: '/images/home/main_logo.png',
			title: 'JAVA 백엔드 개발자 모집',
			company: '(주)만두래곤요리킹조리킹',
			location: '강서구',
			career: '2~10년',
			education: '무관',
			expireDate: '11/14',
			isBookmark: false,
		},
		{
			image: '/images/home/main_logo.png',
			title: 'JAVA 백엔드 개발자 모집',
			company: '(주)만두래곤요리킹조리킹',
			location: '강서구',
			career: '2~10년',
			education: '무관',
			expireDate: '11/14',
			isBookmark: true,
		},
		{
			image: '/images/home/main_logo.png',
			title: 'JAVA 백엔드 개발자 모집',
			company: '(주)만두래곤요리킹조리킹',
			location: '강서구',
			career: '2~10년',
			education: '무관',
			expireDate: '11/14',
			isBookmark: true,
		},
		{
			image: '/images/home/main_logo.png',
			title: 'JAVA 백엔드 개발자 모집',
			company: '(주)만두래곤요리킹조리킹',
			location: '강서구',
			career: '2~10년',
			education: '무관',
			expireDate: '11/14',
			isBookmark: false,
		},
		{
			image: '/images/home/main_logo.png',
			title: 'JAVA 백엔드 개발자 모집',
			company: '(주)만두래곤요리킹조리킹',
			location: '강서구',
			career: '2~10년',
			education: '무관',
			expireDate: '11/14',
			isBookmark: true,
		},
		{
			image: '/images/home/main_logo.png',
			title: 'JAVA 백엔드 개발자 모집',
			company: '(주)만두래곤요리킹조리킹',
			location: '강서구',
			career: '2~10년',
			education: '무관',
			expireDate: '11/14',
			isBookmark: false,
		},
		{
			image: '/images/home/main_logo.png',
			title: 'JAVA 백엔드 개발자 모집',
			company: '(주)만두래곤요리킹조리킹',
			location: '강서구',
			career: '2~10년',
			education: '무관',
			expireDate: '11/14',
			isBookmark: false,
		},
		{
			image: '/images/home/main_logo.png',
			title: 'JAVA 백엔드 개발자 모집',
			company: '(주)만두래곤요리킹조리킹',
			location: '강서구',
			career: '2~10년',
			education: '무관',
			expireDate: '11/14',
			isBookmark: false,
		},
	]);
	const [sorts, setSorts] = useState([
		{
			title: 'position',
			placeholder: '직무',
			list: [
				{ value: 0, label: '전체' },
				{ value: 1, label: '프론트엔드' },
				{ value: 2, label: '백엔드' },
				{ value: 3, label: '웹 풀스택' },
				{ value: 4, label: '안드로이드' },
			],
			isSearchable: false,
			isMulti: true,
		},
		{
			title: 'skill',
			placeholder: '기술스택',
			list: [
				{ value: 'java', label: 'java' },
				{ value: 'python', label: 'python' },
				{ value: 'node', label: 'node' },
				{ value: 'react', label: 'react' },
				{ value: 'next', label: 'next' },
			],
			isMulti: true,
		},
		{
			title: 'career',
			placeholder: '경력',
			list: [
				{ value: '0', label: '신입' },
				{ value: '1', label: '1년 경력' },
				{ value: '2', label: '2년 경력' },
				{ value: '3', label: '3년 경력' },
				{ value: '4', label: '4년 경력' },
				{ value: '5', label: '5년 경력' },
			],
			isMulti: true,
		},
		{
			title: 'location',
			placeholder: '지역',
			list: [
				{ value: '02', label: '서울' },
				{ value: '031', label: '경기도' },
				{ value: '032', label: '인천' },
				{ value: '042', label: '대전' },
				{ value: '044', label: '세종' },
				{ value: '051', label: '부산' },
				{ value: '052', label: '울산' },
				{ value: '053', label: '대구' },
				{ value: '063', label: '광주' },
			],
			isMulti: true,
		},
	]);
	return (
		<>
			<Container>
				<div style={{ marginTop: '100px' }}>
					<SearchBar sorts={sorts}></SearchBar>
				</div>

				<div style={{ marginTop: '62px', width: '100%', height: 'auto', minHeight: '300px' }}>
					<h3
						style={{
							textAlign: 'left',
							marginBottom: '10px',
							borderBottom: '1px solid lightgrey',
							display: 'inline-block',
						}}>
						채용중인 회사
					</h3>
					<div id="cards">
						<Row style={{ padding: '10px' }}>
							{companyData.map((company, index) => (
								<CompanyCard key={index} data={company} />
							))}
						</Row>
					</div>
				</div>
			</Container>
		</>
	);
}


export default CompanyList;