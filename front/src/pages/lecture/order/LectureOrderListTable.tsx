import {Table} from 'reactstrap';
import React from 'react';

function LectureOrderListTable({orderList, order}) {
    return (
        <div className={'dataChange'}>
            <h4>신청한 강좌</h4>
            <Table className={'lectureOrderListTable'}>
                <tbody>
                    <tr>
                        <th>강좌</th>
                        <th style={{width: '100px'}}>가격</th>
                    </tr>
                    {orderList?.map((item, index) => (
                        <tr key={item.title}>
                            <td>
                                {item.title} <strong>x {item.count}</strong>
                            </td>

                            <td>
                                {item.discount!==0 &&
                                    <div
                                        style={{color: "gray", textDecoration: 'line-through'}}>{Number((item.price * item.count).toFixed(0)).toLocaleString()} ￦
                                    </div>}
                                <div>{Number(item.total.toFixed(0)).toLocaleString()} ￦</div>
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <td style={{ fontWeight:700}}>소계</td>
                        <td style={{color: '#d61b1b', fontWeight:700}}>{order.price?.toLocaleString()}￦</td>
                    </tr>
                    <tr>
                        <td style={{ fontWeight:700}}>할인가</td>
                        <td style={{color: '#2CA8FF',fontWeight:700}}>{order.discount?.toLocaleString()}￦</td>
                    </tr>
                    <tr>
                        <td style={{ fontWeight:700}}>총계</td>
                        <td style={{color: '#d61b1b', fontWeight:700}}>{order.totalPrice?.toLocaleString()}￦</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default LectureOrderListTable;