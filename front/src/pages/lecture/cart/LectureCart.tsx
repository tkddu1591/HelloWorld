import '../scss/lecture/cart/cart.scss';
import React, {useEffect, useState} from 'react';
import LectureOrderHeader from './LectureOrderHeader';
import LectureCartItem from './LectureCartItem';
import {API_BASE_URL, apiClient} from "../../../App";

function LectureCart() {
    let [coupon, setCoupon] = useState({
        list:        [
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
    const [member, setMember] = useState<any>({})
    const [cartList, setCartList] = useState<{
        cartNo: number,
        uid: string,
        lectureNo: number
        title: string,
        count: number,
        price: number,
        discount: number,
        point: number,
        total: number,
    }[]>([]);
    useEffect(() => {
        const accessToken = localStorage.getItem("helloWorld_ACCESS_TOKEN")
        if (accessToken !== null)
            apiClient.get(`/me`, {
                headers: {"Authorization": `Bearer ${accessToken}`}
            })
                .then((res) => {
                    setMember(res.data);

                })
                .catch((err) => {
                    console.log("실패? : " + JSON.stringify(err));
                });
    }, []);
    const [isChange, setIsChange] = useState(false);
    useEffect(() => {
        apiClient.get(`/api/lecture/cart?uid=` + member.uid).then(res => {
            setCartList(res.data)
        })
    }, [member, isChange]);
    useEffect(() => {
        console.log(cartList)
    }, [cartList]);

    return (
        <>
            <LectureOrderHeader></LectureOrderHeader>
            <LectureCartItem isChange={isChange} setIsChange={setIsChange} coupon={coupon} setCartList={setCartList} cartList={cartList}></LectureCartItem>
        </>
    );
}


export default LectureCart;
