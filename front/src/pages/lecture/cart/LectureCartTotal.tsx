import { useNavigate } from 'react-router-dom';
import { Button, Col, Table } from 'reactstrap';
import React from 'react';

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
						<h4
							style={{
								textAlign: 'center',
								fontFamily: 'NanumSquare',
							}}>
							장바구니 합계
						</h4>
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
							navigate('/lecture/order');
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
								fontWeight: '700',
								fontFamily: 'nanumsquare',
							}}>
							주문하기
						</span>
					</Button>
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						marginTop: '20px',
					}}>
					<Button style={{ fontFamily: 'nanumsquare' }}>주문 관련 궁금증이 있다면?</Button>
				</div>
			</Col>
		</>
	);
}

export default LectureCartTotal;