import { Container, Row } from 'reactstrap';
import React from 'react';
import LectureCartList from './LectureCartList';
import LectureCartTotal from './LectureCartTotal';

interface LectureCartItemProps {
	coupon?: {
		list?: {
			value?: string;
			label?: string;
		}[];
		placeholder?: string;
	};
	cartList?:{
		cartNo: number,
		uid: string,
		lectureNo: number
		title: string,
		count : number,
		price: number,
		discount: number,
		point: number,
		total: number,
	}[];
	setCartList: (value: any)=> void
	isChange: boolean;
	setIsChange: (value: boolean)=> void
}

function LectureCartItem({ coupon, cartList, setCartList, isChange, setIsChange }:LectureCartItemProps) {

	return (
		<Container>
			<Row style={{ marginTop: '20px' }}>
				<LectureCartList isChange={isChange} setIsChange={setIsChange} setCartList={setCartList} coupon={coupon} cartList={cartList}></LectureCartList>
				<LectureCartTotal cartList={cartList}></LectureCartTotal>
			</Row>
			{/*				<div style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'100px'}}>
					<i className="bi bi-cart-x" style={{fontSize: '100px'}}></i>
					<span style={{fontSize:'20px'}}>고객님의 장바구니가 현재 비어있습니다.</span>
				</div>*/}
		</Container>
	);
}

export default LectureCartItem;