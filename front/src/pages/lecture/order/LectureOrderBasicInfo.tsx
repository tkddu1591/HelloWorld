import { Input } from 'reactstrap';
import React from 'react';

function LectureOrderBasicInfo() {
	return (
		<>
			<p>* 무통장입금 결제시 입금확인까지 평일 영업시간 내 10~20분 소요됩니다.</p>
			<p>
				* <strong>영수증/수강증</strong>은 본인 이메일로 발송됩니다.
			</p>
			<div>
				<div className={'dataChange'}>
					<h4>신청자 정보</h4>
					<p className={'input'}>
						<strong>
							이름 <span className={'red'}>*</span>
						</strong>
					</p>
					<Input className={'inputData'} value={'김상엽'}></Input>
					<p className={'input'}>
						<strong>
							이메일 <span className={'red'}>*</span>
						</strong>
					</p>
					<Input className={'inputData'} value={'tkddu1591@gmail.com'}></Input>
				</div>
			</div>
		</>
	);
}

export default LectureOrderBasicInfo;