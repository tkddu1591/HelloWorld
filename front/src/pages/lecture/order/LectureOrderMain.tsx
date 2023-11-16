import { Col, Container, Row } from 'reactstrap';
import React from 'react';
import LectureOrderBasicInfo from './LectureOrderBasicInfo';
import LectureOrderAddInfo from './LectureOrderAddInfo';
import LectureOrderListTable from './LectureOrderListTable';
import LectureOrderTotal from './LectureOrderTotal';

function LectureOrderMain() {
	return (
		<>
			<Container style={{ marginTop: '30px' }} className={'lectureOrderItems'}>
				<Row>
					<Col>
						<LectureOrderBasicInfo></LectureOrderBasicInfo>
						<LectureOrderAddInfo></LectureOrderAddInfo>
						<LectureOrderListTable></LectureOrderListTable>
						<LectureOrderTotal></LectureOrderTotal>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default LectureOrderMain;