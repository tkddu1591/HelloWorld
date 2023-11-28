import { Input } from 'reactstrap';
import React from 'react';
import {changeDTO} from "../../../store/changeDTO";

function LectureOrderAddInfo({order, setOrder}) {
	return (
			<div className={'dataChange'}>
				<h4>추가정보</h4>
				<p className={'input'}>
					<strong>
						휴대폰번호 <span className={'red'}>*</span>
					</strong>
				</p>
				<Input className={'inputData'} value={order.hp} onChange={e=>changeDTO(setOrder, 'hp', e.target.value)}></Input>
				<p className={'input'}>
					<strong>기타사항</strong>
				</p>
				<textarea className={'inputData'} placeholder={'(무통장 입금시 이체자 성함 등)'}></textarea>
			</div>
	);
}

export default LectureOrderAddInfo;