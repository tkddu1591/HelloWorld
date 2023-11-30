import {Button} from 'reactstrap';
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {changeDTO} from "../../../store/changeDTO";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";
import TermsModal from "../../member/componentsByMember/TermsModal";
import {API_BASE_URL, apiClient} from "../../../App";

function LectureOrderTotal({order, setOrder, orderList}) {
    let navigate = useNavigate();
    let [pageCondition, setPageCondition] = useState({isModal: false, modalCheck: false})
    return (
        <>
            <div className={'orderTotal'}>
                <div>
                    <label>
                        <input type={'radio'} value={1} checked={order.payment === 1}
                               onClick={() => {
                                   changeDTO(setOrder, 'payment', 1)
                                   changeDTO(setOrder, 'complete', 0)
                               }}></input>
                        <span>무통장입금</span>
                    </label>
                </div>
                <div>
                    <label>
                        <input type={'radio'} value={2} checked={order.payment === 2}
                               onClick={() => {
                                   changeDTO(setOrder, 'payment', 2)
                                   changeDTO(setOrder, 'complete', 1)
                               }}></input>
                        <span>신용카드</span>
                    </label>
                </div>
                <div>
                    <label>
                        <input type={'radio'} value={3} checked={order.payment === 3}
                               onClick={() => {
                                   changeDTO(setOrder, 'payment', 3)
                                   changeDTO(setOrder, 'complete', 0)
                               }}></input>
                        <span>계좌이체</span>
                    </label>
                </div>
                <div>
                    <label>
                        <input type={'radio'} value={4} checked={order.payment === 4}
                               onClick={() => {
                                   changeDTO(setOrder, 'payment', 4)
                                   changeDTO(setOrder, 'complete', 1)
                               }}></input>
                        <span>카카오페이</span>
                    </label>
                </div>
            </div>
            <div
                className={'orderTotal'}
                style={{
                    marginBottom: '20px',
                    borderTop:    'none',
                }}>
                <p>
                    입력하신 개인정보는 사이트내에서 이용할 예정이며 <strong>개인정보 보호정책</strong>을(를) 준수하고 있습니다.
                </p>

                <div>
                    <span style={{margin: 0}}>
                        본인은 웹사이트
                        <strong style={{color: '#2CA8FF', cursor: "pointer"}}
                                onClick={() => {
                                    changeDTO(setPageCondition, 'isModal', true)
                                }}>
                        이용약관</strong>
                        을(를) 읽었으며 이에 동의합니다.
                        <span style={{marginLeft: '0px'}} className={'red'}>
                            *
                        </span>
                        {pageCondition.modalCheck && <i className="bi bi-check-lg"
                                                        style={{marginLeft: '10px', color: "green", fontWeight: "bolder"}}></i>}
                    </span>
                </div>
                <Button
                    className={'payment'}
                    color={'danger'}
                    onClick={async () => {
                        try {
                            // 메인 주문 요청
                            await apiClient.post(`/api/lecture/order`, order).then(res => {
                            }).catch(err => console.log(err));
                            // orderList 배열을 비동기적으로 처리하기 위해 Promise.all 사용
                            let ordNo;
                            await apiClient.get(`/api/lecture/order/last?uid=` + order.uid).then((res) => ordNo =
                                res.data.ordNo).catch(err => console.log(err));
                            console.log(ordNo)
                            await Promise.all(
                                orderList?.map(async (orderItem) => {
                                    try {
                                        // 각 주문 항목에 대한 요청
                                        await apiClient.post(`/api/lecture/orderItem?ordNo=` + ordNo, orderItem);
                                    } catch (err) {
                                        // 주문 항목 처리 중 에러 발생 시 예외 처리
                                        console.error(err);
                                    }
                                })
                            );
                            // 모든 orderItem이 성공적으로 처리된 경우에 실행되는 블록
                            await apiClient.delete(`/api/lecture/cart/uid?uid=` + order.uid).then().catch(err => console.log(err));
                            await navigate('/lecture/complete')
                        } catch (err) {
                            // 메인 주문 요청 중 에러 발생 시 예외 처리
                            console.error('오류가 발생했습니다. 다시 시도해주세요.');
                        }
                    }}>
                    결제하기
                </Button>
            </div>
        </>
    );
}

export default LectureOrderTotal;