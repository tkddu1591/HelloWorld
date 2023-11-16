import React, { useState } from 'react';
import { Col, Table } from 'reactstrap';
import InputNumber from '../../../components/Lecture/InputNumber';
import SelectBox from '../../../components/Lecture/SelectBox';

interface LectureCartListProps {
	coupon?: {
		list?: {
			value?: string;
			label?: string;
		}[];
		placeholder?: string;
	};
}

function LectureCartList({ coupon }: LectureCartListProps) {
	let [num, setNum] = useState(0);

	return (
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
					paddingTop: '0',
				}}>
				{coupon && coupon.list && <SelectBox options={coupon.list} placeholder={coupon.placeholder}></SelectBox>}
			</div>
		</Col>
	);
}

export default LectureCartList;