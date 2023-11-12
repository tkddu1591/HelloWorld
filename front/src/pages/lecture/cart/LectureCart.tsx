import { Button, Col, Container, Input, Row, Table } from 'reactstrap';
import '../scss/lecture/cart/cart.scss';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputNumber from '../../../components/Lecture/InputNumber';
import SelectBox from '../../../components/Lecture/SelectBox';
import Select from 'react-select';

function LectureCart() {
	let navigate = useNavigate();
	let [num, setNum] = useState(0);
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
	console.log(num);
	return (
		<>
			<div style={{ backgroundColor: '#FAFAFA', borderBottom: '1px solid lightgray' }}>
				<Container style={{ marginTop: '50px' }} className="lectureCart">
					<div
						style={{
							height: '130px',
							paddingTop: '45px',
						}}>
						<span style={{ color: 'gray' }}>주문 &gt; 장바구니</span>
						<h3>장바구니</h3>
					</div>
				</Container>
			</div>
			<Container>
				<Row style={{ marginTop: '20px' }}>
					<Col lg={8}>
						<Table className={'lectureCartListTable'}>
							<tbody>
								<tr>
									<th style={{ width: '20px' }}></th>
									<th>강좌</th>
									<th style={{ width: '100px' }}>가격</th>
									<th style={{ width: '80px' }}>수량</th>
								</tr>
								<tr>
									<td>
										<div>
											<i className="bi bi-x"></i>
										</div>
									</td>
									<td>코딩애플 프리패스 Essential (웹개발 7과목 1년 수강권)</td>
									<td>85,000￦</td>
									<td>
										<InputNumber num={num} setNum={setNum}></InputNumber>
									</td>
								</tr>
							</tbody>
						</Table>
						<div
							style={{
								width: '100%',
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
								padding: '20px',
								paddingTop:'0',

							}}>
							<SelectBox options={coupon.list} placeholder={coupon.placeholder}></SelectBox>
						</div>
					</Col>
					<LectureCartTotal></LectureCartTotal>
				</Row>
{/*				<div style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'100px'}}>
					<i className="bi bi-cart-x" style={{fontSize: '100px'}}></i>
					<span style={{fontSize:'20px'}}>고객님의 장바구니가 현재 비어있습니다.</span>
				</div>*/}
			</Container>
		</>
	);
}

function LectureCartTotal() {
	let navigate = useNavigate();
	return (
		<>
			<Col lg="4">
				<div
					style={{
						border: '1px solid lightgray',
						borderRadius: '2px',
						height: 'auto',
						padding: '20px',
						backgroundColor: '#Fafafa',
					}}>
					<div
						style={{
							display: 'flex',
							justifyContent: 'left',
							borderBottom: '2px solid lightgray',
							paddingBottom: '5px',
						}}>
						<h4 style={{ textAlign: 'center', fontFamily: 'NanumSquare' }}>장바구니 합계</h4>
					</div>
					<Table className="lectureCartTotalTable">
						<tbody>
							<tr>
								<td style={{ paddingLeft: '0' }}>소계</td>
								<td style={{ textAlign: 'right' }}>85,000￦</td>
							</tr>
							<tr className={'discount'}>
								<td style={{ paddingLeft: '0' }}>할인금액</td>
								<td style={{ textAlign: 'right' }}>-85,000￦</td>
							</tr>
							<tr>
								<td style={{ paddingLeft: '0' }}>총액</td>
								<td style={{ textAlign: 'right' }}>85,000￦</td>
							</tr>
						</tbody>
					</Table>

					<Button
						onClick={() => {
							navigate('/lecture/detail/lectureNo');
						}}
						style={{
							borderRadius: '5px',
							height: '60px',
							width: '100%',
							backgroundColor: '#FF5554',
							paddingTop: '20px',
							display: 'flex',
							justifyContent: 'center',
							cursor: 'pointer',
							marginBottom: '0',
						}}>
						<span
							style={{
								textAlign: 'center',
								color: 'white',
								display: 'inline-block',
								fontSize: '17px',
								fontWeight: 'bold',
								fontFamily: '한컴 말랑말랑',
							}}>
							주문하기
						</span>
					</Button>
				</div>
				<div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
					<Button style={{ fontFamily: 'nanumsquare' }}>주문 관련 궁금증이 있다면?</Button>
				</div>
			</Col>
		</>
	);
}

export default LectureCart;
