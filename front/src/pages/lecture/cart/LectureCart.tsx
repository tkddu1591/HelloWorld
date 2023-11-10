import { Button, Col, Container, Row } from 'reactstrap';
import './cart.scss';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function LectureCart() {
	let navigate = useNavigate();
	return (
		<Container style={{ marginTop: '100px' }} className="lectureCart">
			<div
				style={{
					borderBottom: '1px solid lightgray',
					display: 'flex',
					justifyContent: 'left',
					alignItems: 'center',
					height: '100px',
				}}>
				<h3>장바구니</h3>
			</div>
			<Row style={{ marginTop: '20px' }}>
				<Col lg={8}></Col>
				<Col lg="4">
					<div
						style={{
							border: '1px solid lightgray',
							borderRadius: '2px',
							height: 'auto',
							padding: '20px',
							backgroundColor: '#Fafafa',
						}}>
						<div style={{ display: 'flex', justifyContent: 'left' }}>
							<h5 style={{ textAlign: 'center', fontFamily: 'NanumSquare' }}>장바구니 합계</h5>
						</div>

						<div
							style={{
								paddingBottom: '10px',
								paddingTop: '20px',
								marginTop: '10px',
								borderBottom: '1px solid lightgray',
								borderTop: '1px solid lightgray',
								display: 'flex',
								justifyContent: 'space-between',
							}}>
							<span>￦85,500</span>
							<i className="bi bi-calendar"></i>
						</div>

						<div
							style={{
								paddingBottom: '10px',
								paddingTop: '20px',
								marginTop: '10px',
								borderBottom: '1px solid lightgray',
								borderTop: '1px solid lightgray',
								display: 'flex',
								justifyContent: 'space-between',
							}}>
							<span style={{ fontFamily: '', fontSize: '12px' }}>145 Days</span>
							<i className="bi bi-calendar"></i>
						</div>

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
						<span style={{ borderBottom: '1px solid lightgray' }}>22745명의 수강생</span>
					</div>
					<div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
						<Button style={{ fontFamily: 'nanumsquare' }}>영상 버퍼링 이슈가 있다면?</Button>
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default LectureCart;
