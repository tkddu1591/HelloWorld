import {Col, Container, Row} from 'reactstrap';
import React, {useEffect, useState} from 'react';
import LectureOrderBasicInfo from './LectureOrderBasicInfo';
import LectureOrderAddInfo from './LectureOrderAddInfo';
import LectureOrderListTable from './LectureOrderListTable';
import LectureOrderTotal from './LectureOrderTotal';
import {API_BASE_URL, apiClient} from "../../../App";
import {useSelector} from "react-redux";
import {CartItem, CartTotal} from "../../../type/cart";

function LectureOrderMain() {
    const [member, setMember] = useState<any>({})

    const myCartList = useSelector<any>(state => state.myCart.myCartList) as CartItem[];
    const myCartTotal = useSelector<any>(state => state.myCartTotal) as CartTotal;
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
    const [order, setOrder] = useState({})
    const [orderList, setOrderList] = useState<CartItem[]>([])
    useEffect(() => {
        setOrder({
            uid:        member.uid,
            name:       member.name,
            email:      member.email,
            count:      myCartList.length,
            price:      myCartTotal.price,
            discount:   myCartTotal.price-myCartTotal.total,
            totalPrice: myCartTotal.total,
            hp:         member.hp,
        })
        setOrderList(myCartList)
        console.log(myCartList)
    }, [member]);
    return (
        <Container style={{marginTop: '30px'}} className={'lectureOrderItems'}>
            <Row>
                <Col>
                    <LectureOrderBasicInfo order={order} setOrder={setOrder}></LectureOrderBasicInfo>
                    <LectureOrderAddInfo order={order} setOrder={setOrder}></LectureOrderAddInfo>
                    <LectureOrderListTable orderList={orderList} order={order}></LectureOrderListTable>
                    <LectureOrderTotal setOrder={setOrder} orderList={orderList} order={order}></LectureOrderTotal>
                </Col>
            </Row>
        </Container>
    );
}

export default LectureOrderMain;