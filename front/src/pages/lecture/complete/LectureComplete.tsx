import '../scss/lecture/cart/cart.scss';
import React, { useState } from 'react';
import LectureOrderHeader from '../cart/LectureOrderHeader';
import '../scss/lecture/order/order.scss';
import { Button, Col, Container, Row, Table } from 'reactstrap';

function LectureComplete() {
	let [coupon, setCoupon] = useState({
		list: [
			{
				value: '',
				label: '쿠폰 선택',
			},
			{
				value: 'coupon2',
				label: '쿠폰2',
			},
			{
				value: 'coupon3',
				label: '쿠폰3',
			},
		],
		placeholder: '쿠폰 선택',
	});

	return (
		<>
			<LectureOrderHeader title={'주문완료'}></LectureOrderHeader>
			<Container style={{ marginTop: '30px' }} className={'lectureOrderItems'}>
				<Row>
					<Col>
						<p>* 무통장입금 결제시 입금확인까지 평일 영업시간 내 10~20분 소요됩니다.</p>
						<p>
							* <strong>영수증/수강증</strong>은 본인 이메일로 발송됩니다.
						</p>
						<div className={'dataChange'} style={{ marginBottom: '20px' }}>
							<span>감사합니다. 강의 신청이 완료되었습니다.</span>
						</div>
						<h4>주문정보</h4>
						<Table style={{ marginTop: '5px' }}>
							<tbody>
								<tr>
									<th>주문번호</th>
									<th>날짜</th>
									<th>이메일</th>
									<th>총계</th>
									<th>결제방법</th>
								</tr>
								<tr>
									<td>100000</td>
									<td>2023/10/21 15:11:12</td>
									<td>tkddu1591@gmail.com</td>
									<td>￦100,000</td>
									<td>무통장입금</td>
								</tr>
							</tbody>
						</Table>
						<div className={'dataChange'}>
							<h4>신청 정보</h4>
							<Table className={'lectureOrderListTable'}>
								<tbody>
									<tr>
										<th>강좌</th>
										<th style={{ width: '100px' }}>가격</th>
									</tr>
									<tr>
										<td>
											코딩애플 프리패스 Essential (웹개발 7과목 1년 수강권) <strong>x 1</strong>
										</td>
										<td style={{ color: '#d61b1b' }}>85,000￦</td>
									</tr>
									<tr>
										<td>소계</td>
										<td style={{ color: '#d61b1b' }}>85,000￦</td>
									</tr>
									<tr>
										<td>총계</td>
										<td style={{ color: '#d61b1b' }}>85,000￦</td>
									</tr>
								</tbody>
							</Table>
						</div>
						<div className={'dataChange'}>
							<h4>고객 정보</h4>
							<div>
								<p
									style={{
										fontWeight: '500',
										fontSize: '15px',
									}}>
									김상엽
								</p>
								<p
									style={{
										fontWeight: '500',
										fontSize: '15px',
										marginTop: '0',
									}}>
									tkddu1591@gmail.com
								</p>
							</div>
						</div>

						<div className={'dataChange'}>
							<h4>강좌 정보</h4>
							<Table className={'lectureOrderTotal'}>
								<tbody>
									<tr>
										<th>강좌</th>
									</tr>
									<tr>
										<td>
											<span>코딩애플 프리패스 Essential (웹개발 7과목 1년 수강권)</span>
										</td>
									</tr>
									<tr>
										<td>
											<span>코딩애플 프리패스 Essential (웹개발 7과목 1년 수강권)</span>
										</td>
									</tr>
									<tr>
										<td>
											<span>코딩애플 프리패스 Essential (웹개발 7과목 1년 수강권)</span>
										</td>
									</tr>
								</tbody>
							</Table>
						</div>
						<div
							style={{
								display: 'flex',
								justifyContent: 'center',
								marginBottom: '50px',
							}}>
							<Button className={'payment'} color={'danger'}>
								게시판 돌아가기
							</Button>
						</div>
					</Col>
				</Row>
			</Container>
		</>
	);
}


export default LectureComplete;
