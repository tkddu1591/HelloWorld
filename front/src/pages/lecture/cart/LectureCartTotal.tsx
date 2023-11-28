import {useNavigate} from 'react-router-dom';
import {Button, Col, Table} from 'reactstrap';
import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {changeMyCart, changeMyCartTotal} from "../../../slice/myCartSlice";

function LectureCartTotal({cartList}) {
    const [total, setTotal] = useState<{ price, discount, total, count }>()
    useEffect(() => {
        // cartList를 순회하면서 price, discount, total 값을 더함
        const updatedTotal = cartList?.reduce((accumulator, currentItem) => {
            return {
                price:    accumulator.price + (currentItem.price * currentItem.count || 0),
                discount: accumulator.discount + (currentItem.discount || 0),
                total:    accumulator.total + (currentItem.total || 0),
                count:    accumulator.count + (currentItem.count || 0),
            };
        }, {price: 0, discount: 0, total: 0, count: 0});

        // setTotal을 통해 상태 업데이트
        setTotal(updatedTotal);
    }, [cartList]);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(changeMyCart(cartList))
    }, [cartList]);
    useEffect(() => {
        dispatch(changeMyCartTotal(total))
    }, [total]);
    let navigate = useNavigate();
    return (
        <Col lg="4">
            <div
                style={{
                    border:          '1px solid lightgray',
                    borderRadius:    '2px',
                    height:          'auto',
                    padding:         '20px',
                    backgroundColor: '#Fafafa',
                }}>
                <div
                    style={{
                        display:        'flex',
                        justifyContent: 'left',
                        borderBottom:   '2px solid lightgray',
                        paddingBottom:  '5px',
                    }}>
                    <h4
                        style={{
                            textAlign:  'center',
                            fontFamily: 'NanumSquare',
                        }}>
                        장바구니 합계
                    </h4>
                </div>
                {total?.total === 0 ? <div style={{marginTop: '20px'}}>상품을 선택해주세요</div> : <>
                    <Table className="lectureCartTotalTable">
                        <tbody>
                            {total && <>
                                <tr>
                                    <td style={{paddingLeft: '0'}}>소계</td>
                                    <td style={{textAlign: 'right'}}>{(total?.price).toLocaleString()}￦</td>
                                </tr>
                                {total?.count * total?.price - total?.total > 0 &&
                                    <tr className={'discount'}>
                                        <td style={{paddingLeft: '0'}}>할인금액</td>
                                        <td style={{textAlign: 'right'}}>-{(Number((total?.price - total?.total).toFixed(0)).toLocaleString())}￦</td>
                                    </tr>}
                                <tr>
                                    <td style={{paddingLeft: '0'}}>총액</td>
                                    <td style={{textAlign: 'right'}}>{Number((total?.total).toFixed(0)).toLocaleString()}￦</td>
                                </tr>
                            </>}
                        </tbody>
                    </Table>

                    <Button
                        onClick={() => {
                            navigate('/lecture/order');
                        }}
                        style={{
                            borderRadius:    '5px',
                            height:          '60px',
                            width:           '100%',
                            backgroundColor: '#FF5554',
                            paddingTop:      '20px',
                            display:         'flex',
                            justifyContent:  'center',
                            cursor:          'pointer',
                            marginBottom:    '0',
                        }}>
						<span
                            style={{
                                textAlign:  'center',
                                color:      'white',
                                display:    'inline-block',
                                fontSize:   '17px',
                                fontWeight: '700',
                                fontFamily: 'nanumsquare',
                            }}>
							주문하기
						</span>
                    </Button></>
                }
            </div>
            <div
                style={{
                    display:        'flex',
                    justifyContent: 'center',
                    marginTop:      '20px',
                }}>
                <Button style={{fontFamily: 'nanumsquare'}}>주문 관련 궁금증이 있다면?</Button>
            </div>
        </Col>
    );
}

export default LectureCartTotal;