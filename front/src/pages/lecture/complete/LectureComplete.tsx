import '../scss/lecture/cart/cart.scss';
import React, {useEffect, useState} from 'react';
import LectureOrderHeader from '../cart/LectureOrderHeader';
import '../scss/lecture/order/order.scss';
import {Button, Col, Container, Row, Table} from 'reactstrap';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {CartItem, CartTotal} from "../../../type/cart";
import {API_BASE_URL, apiClient} from "../../../App";
import {changeDTO} from "../../../store/changeDTO";

function LectureComplete() {
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

    const myCartList = useSelector<any>(state => state.myCart.myCartList) as CartItem[];
    const myCartTotal = useSelector<any>(state => state.myCartTotal) as CartTotal;
    const [order, setOrder] = useState<any>({})
    const [orderList, setOrderList] = useState<CartItem[]>([])
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
    useEffect(() => {
        setOrder({
            uid:        member.uid,
            name:       member.name,
            email:      member.email,
            count:      myCartList.length,
            price:      myCartTotal.price,
            discount:   myCartTotal.price - myCartTotal.total,
            totalPrice: myCartTotal.total,
            hp:         member.hp,
        })
        setOrderList(myCartList)
        console.log(myCartList)
        apiClient.get(`/api/lecture/order/last?uid=` + member.uid,).then((res) => {
            changeDTO(setOrder, 'ordNo', res.data.ordNo)
            changeDTO(setOrder, 'complete', res.data.complete)
            changeDTO(setOrder, 'payment', res.data.payment)
            changeDTO(setOrder, 'ordDate', res.data.ordDate)
        }).catch(err => console.log(err));
    }, [member]);
    console.log(order)
    let navigate = useNavigate();

    function paymentCheck(value) {
        if (order.payment === 1) {
            return '무통장입금'
        } else if (order.payment === 2) {
            return '신용카드'
        } else if (order.payment === 3) {
            return '계좌이체'
        } else if (order.payment === 4) {
            return '카카오페이'
        }
    }

    return (
        <>
            <LectureOrderHeader title={'주문완료'}></LectureOrderHeader>
            <Container style={{marginTop: '30px'}} className={'lectureOrderItems'}>
                <Row>
                    <Col>
                        <p>* 무통장입금 결제시 입금확인까지 평일 영업시간 내 10~20분 소요됩니다.</p>
                        <p>
                            * <strong>영수증/수강증</strong>은 본인 이메일로 발송됩니다.
                        </p>
                        <div className={'dataChange'} style={{marginBottom: '20px'}}>
                            <span>감사합니다. 강의 신청이 완료되었습니다.</span>
                        </div>
                        <h4>주문정보</h4>
                        <Table style={{marginTop: '5px'}}>
                            <tbody>
                                <tr>
                                    <th>주문번호</th>
                                    <th>날짜</th>
                                    <th>이메일</th>
                                    <th>총계</th>
                                    <th>결제방법</th>
                                </tr>
                                {order &&
                                    <tr>
                                        <td>{order?.ordNo}</td>
                                        <td>{Array.isArray(order.ordDate) && (
                                            order.ordDate.slice(0, 6).map((number, index) => (
                                                (index === 0 ? String(number).padStart(4, '0') :
                                                    String(number).padStart(2, '0')) +
                                                ((index < 2) ? '-' : (index === 2 ? ' ' : (index === 5 ? '' : ':')))
                                            )).join('')
                                        )}</td>
                                        <td>{order.email}</td>
                                        <td>￦{order.totalPrice?.toLocaleString()}</td>
                                        <td>{paymentCheck(order.payment)}</td>
                                    </tr>}
                            </tbody>
                        </Table>
                        <div className={'dataChange'}>
                            <h4>신청 정보</h4>
                            <Table className={'lectureOrderListTable'}>
                                <tbody>
                                    <tr>
                                        <th>강좌</th>
                                        <th style={{width: '100px'}}>가격</th>
                                    </tr>

                                    {orderList?.map((item, index) => (
                                        <tr key={item.title}>
                                            <td style={{color: "#105796"}}>
                                                <ins style={{cursor: "pointer"}} onClick={() => {
                                                    navigate('/lecture/view?lectureNo=' + item.lectureNo)
                                                }}>
                                                    {item.title} <strong>x {item.count}</strong>
                                                </ins>
                                            </td>

                                            <td>
                                                {item.discount !== 0 &&
                                                    <div
                                                        style={{color:      "gray", textDecoration: 'line-through'
                                                        }}>{Number((item.price * item.count).toFixed(0)).toLocaleString()} ￦
                                                    </div>}
                                                <div>{Number(item.total.toFixed(0)).toLocaleString()} ￦</div>
                                            </td>
                                        </tr>
                                    ))}
                                    <tr>
                                        <td style={{fontWeight: 700}}>소계</td>
                                        <td style={{color: '#d61b1b'}}>{order.price?.toLocaleString()}￦</td>
                                    </tr>
                                    <tr>
                                        <td style={{fontWeight: 700}}>할인가</td>
                                        <td style={{color: '#2CA8FF'}}>{Number(order.discount?.toFixed(0))?.toLocaleString()}￦</td>
                                    </tr>
                                    <tr>
                                        <td style={{fontWeight: 700}}>총계</td>
                                        <td style={{color: '#d61b1b'}}>{Number(order.totalPrice?.toFixed(0))?.toLocaleString()}￦</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <div className={'dataChange'}>
                            <h4>고객 정보</h4>
                            <div>
                                <p
                                    style={{
                                        fontWeight: '500',
                                        fontSize:   '15px',
                                    }}>
                                    {order.name}
                                </p>
                                <p
                                    style={{
                                        fontWeight: '500',
                                        fontSize:   '15px',
                                        marginTop:  '0',
                                    }}>
                                    {order.email}
                                </p>
                            </div>
                        </div>

                        <div
                            style={{
                                display:        'flex',
                                justifyContent: 'center',
                                marginBottom:   '50px',
                                marginTop:      '20px'
                            }}>
                            <Button className={'payment'} color={'danger'} onClick={() => {
                                navigate('/lecture/list')
                            }}>
                                게시판 돌아가기
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}


export default LectureComplete;
