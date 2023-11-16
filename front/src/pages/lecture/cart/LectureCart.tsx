import '../scss/lecture/cart/cart.scss';
import React, { useState } from 'react';
import LectureOrderHeader from './LectureOrderHeader';
import LectureCartItem from './LectureCartItem';

function LectureCart() {
	let [coupon, setCoupon] = useState({
		list: [
			{
				value: '',
				label: '쿠폰 선택',
			},
			{
				value: 'coupon2',
				label: '쿠폰2',
			},
			{
				value: 'coupon3',
				label: '쿠폰3',
			},
		],
		placeholder: '쿠폰 선택',
	});
	return (
		<>
			<LectureOrderHeader></LectureOrderHeader>
			<LectureCartItem coupon={coupon}></LectureCartItem>
		</>
	);
}


export default LectureCart;
