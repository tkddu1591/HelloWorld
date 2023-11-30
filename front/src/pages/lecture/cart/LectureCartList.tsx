import React, {useEffect, useState} from 'react';
import {Col, Table} from 'reactstrap';
import InputNumber from '../../../components/Lecture/InputNumber';
import SelectBox from '../../../components/Lecture/SelectBox';
import {API_BASE_URL, apiClient} from "../../../App";

interface LectureCartListProps {
    coupon?: {
        list?: {
            value?: string;
            label?: string;
        }[];
        placeholder?: string;
    };
    cartList?: {
        cartNo: number,
        uid: string,
        lectureNo: number
        title: string,
        count: number,
        price: number,
        discount: number,
        point: number,
        total: number,
    }[];
    setCartList: (value: any) => void;
    isChange: boolean;
    setIsChange: (value: boolean) => void;
}

function LectureCartList({coupon, cartList, setCartList, isChange, setIsChange}: LectureCartListProps) {

    return (
        <Col lg={8}>
            {cartList?.length === 0 ? <div>장바구니에 담긴 상품이 없습니다.</div> :
                <>
                    <Table className={'lectureCartListTable'}>
                        <tbody>
                            <tr>
                                <th style={{width: '20px'}}></th>
                                <th>강좌</th>
                                <th style={{width: '100px'}}>가격</th>
                                <th style={{width: '100px'}}>할인</th>
                                <th style={{width: '100px'}}>총액</th>
                                <th style={{width: '80px'}}>수량</th>
                            </tr>

                            {cartList?.map((item, index) => {
                                return <LectureCartListItem setCartList={setCartList} setIsChange={setIsChange}
                                                            key={item.cartNo}
                                                            item={item} isChange={isChange}></LectureCartListItem>
                            })}


                        </tbody>
                    </Table>
                    <div
                        style={{
                            width:          '100%',
                            display:        'flex',
                            justifyContent: 'space-between',
                            alignItems:     'center',
                            padding:        '20px',
                            paddingTop:     '0',
                        }}>
                        {coupon && coupon.list &&
                            <SelectBox options={coupon.list} placeholder={coupon.placeholder}></SelectBox>}
                    </div>
                </>}
        </Col>
    )
        ;
}

function LectureCartListItem({item, setCartList, setIsChange, isChange}) {
    let [num, setNum] = useState(item.count);
    const updateCartItem = (cartNo: number, newTotal: number, newCount: number) => {
        setCartList(prevCartList => prevCartList.map(item => {
            if (item.cartNo === cartNo) {
                return {
                    ...item,
                    total: newTotal,
                    count: newCount,
                };
            }
            return item;
        }));
    };
    useEffect(() => {
        updateCartItem(item.cartNo, (item.price - item.price * item.discount / 100) * num, num);
    }, [num]);
    return <tr key={item.cartNo}>
        <td>
            <div>
                <i className="bi bi-x"
                   onClick={() => {
                       apiClient
                           .delete(`/api/lecture/cart?cartNo=${item?.cartNo}`)
                           .then(res => setIsChange(!isChange))
                           .catch((err) => console.log(err));
                   }}></i>
            </div>
        </td>
        <td>{item.title}</td>
        <td>{item.price?.toLocaleString()}</td>
        <td>{item.discount !== 0 ? item.discount + "%" : '-'}</td>
        <td>{Number(item.total?.toFixed(0)).toLocaleString()}</td>
        <td>
            <InputNumber num={num} setNum={setNum}></InputNumber>
        </td>
    </tr>
}

export default LectureCartList;