import { Table } from 'reactstrap';
import React from 'react';

function LectureOrderListTable() {
	return (
		<>
			<div className={'dataChange'}>
				<h4>신청한 강좌</h4>
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
		</>
	);
}

export default LectureOrderListTable;