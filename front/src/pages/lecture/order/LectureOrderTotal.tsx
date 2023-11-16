import { Button } from 'reactstrap';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function LectureOrderTotal() {
	let navigate = useNavigate();
	return (
		<>
			<div className={'orderTotal'}>
				<div>
					<label>
						<input type={'radio'} value={'d'} title={'dd'}></input>
						<span>무통장입금</span>
					</label>
				</div>
				<div>
					<label>
						<input type={'radio'} value={'d'} title={'dd'}></input>
						<span>무통장입금</span>
					</label>
				</div>
				<div>
					<label>
						<input type={'radio'} value={'d'} title={'dd'}></input>
						<span>무통장입금</span>
					</label>
				</div>
				<div>
					<label>
						<input type={'radio'} value={'d'} title={'dd'}></input>
						<span>무통장입금</span>
					</label>
				</div>
			</div>
			<div
				className={'orderTotal'}
				style={{
					marginBottom: '20px',
					borderTop: 'none',
				}}>
				<p>
					입력하신 개인정보는 사이트내에서 이용할 예정이며 <strong>개인정보 보호정책</strong>을(를) 준수하고 있습니다.
				</p>

				<div>
					<label>
						<input type={'radio'} value={'d'} title={'dd'}></input>
						<span>
							본인은 웹사이트 이용 약관을(를) 읽었으며 이에 동의합니다.{' '}
							<span style={{ marginLeft: '0px' }} className={'red'}>
								*
							</span>
						</span>
					</label>
				</div>
				<Button
					className={'payment'}
					color={'danger'}
					onClick={() => {
						navigate('/lecture/complete');
					}}>
					결제하기
				</Button>
			</div>
		</>
	);
}

export default LectureOrderTotal;