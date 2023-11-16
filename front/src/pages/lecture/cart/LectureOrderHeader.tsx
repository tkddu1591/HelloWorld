import { Container } from 'reactstrap';
import React from 'react';

interface LectureOrderHeaderProps {
	title?: string;
}

function LectureOrderHeader({ title = '장바구니' }: LectureOrderHeaderProps) {
	return (
		<div
			style={{
				backgroundColor: '#FAFAFA',
				borderBottom: '1px solid lightgray',
			}}>
			<Container style={{ marginTop: '50px' }} className="lectureCart">
				<div
					style={{
						height: '130px',
						paddingTop: '45px',
					}}>
					<span style={{ color: 'gray' }}>주문 &gt; {title}</span>
					<h3>{title}</h3>
				</div>
			</Container>
		</div>
	);
}

export default LectureOrderHeader;