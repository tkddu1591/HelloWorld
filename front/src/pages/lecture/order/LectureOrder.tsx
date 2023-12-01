import '../scss/lecture/cart/cart.scss';
import React, {useEffect, useState} from 'react';
import LectureOrderHeader from '../cart/LectureOrderHeader';
import '../scss/lecture/order/order.scss';
import LectureOrderMain from './LectureOrderMain';

function LectureOrder() {

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
			<LectureOrderHeader title={'주문하기'}></LectureOrderHeader>
			<LectureOrderMain></LectureOrderMain>
		</>
	);
}


export default LectureOrder;
