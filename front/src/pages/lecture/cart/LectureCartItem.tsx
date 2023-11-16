import { Container, Row } from 'reactstrap';
import React from 'react';
import LectureCartList from './LectureCartList';
import LectureCartTotal from './LectureCartTotal';

interface LectureCartItmeProps {
	coupon?: {
		list?: {
			value?: string;
			label?: string;
		}[];
		placeholder?: string;
	};
}

function LectureCartItem({ coupon }) {
	return (
		<Container>
			<Row style={{ marginTop: '20px' }}>
				<LectureCartList coupon={coupon}></LectureCartList>
				<LectureCartTotal></LectureCartTotal>
			</Row>
			{/*				<div style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'100px'}}>
					<i className="bi bi-cart-x" style={{fontSize: '100px'}}></i>
					<span style={{fontSize:'20px'}}>고객님의 장바구니가 현재 비어있습니다.</span>
				</div>*/}
		</Container>
	);
}

export default LectureCartItem;