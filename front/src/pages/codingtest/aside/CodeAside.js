import {Card, CardBody, CardText, CardTitle} from "reactstrap";
import CardListCode from "./CardListCode";
import React, {useState} from "react";


function CodeAside(){
    const [listLoading, setListLoading] = useState({loading:'scroll', view:'card'});
    const [sortType, setSortType] = useState(
        {
            title: 'sort',
            list: [
                {value: 'lectureNo', label: '최신순'},
                {value: 'hit', label: '조회순'},
                {value: 'sold', label: '판매많은순'},
                {value: 'review', label: '리뷰많은순'},
                {value: 'price', label: '가격높은순'},
            ],
            isSearchable: false,
            isMulti: false,
        })
    return<>
        <div className="right-aside" style={{position:'fixed',top:'350px'}}>
            <Card style={{ width: "18rem"}}>
                <CardBody style={{borderBottom:'1px solid #E6E6FA'}}>
                    <CardTitle tag="a" style={{color:'#2CA8FF',fontSize:'20px',fontWeight:'bold'}}>ainu90@gmail.com님!</CardTitle>
                    <div style={{height:'10px'}}></div>
                    <CardText>
                        해결한 문제 : 42개(5%)
                    </CardText>
                    <div style={{height:'10px'}}></div>
                    <CardText>
                        남은 문제 : 798(95%)
                    </CardText>
                    <div style={{height:'10px'}}></div>
                </CardBody>
                <CardBody>
                    <CardTitle tag="a" style={{color:'#2CA8FF',fontSize:'20px',fontWeight:'bold'}}>문제가 너무 어려우신가요?</CardTitle>
                    <CardTitle tag="a" style={{color:'#2CA8FF',fontSize:'20px',fontWeight:'bold'}}>Hello World가 추천하는 강의를 한번 들어보세요!</CardTitle>
                    <div style={{height:'10px'}}></div>
                    <CardListCode title={"강의목록"} listLoading={listLoading} setListLoading={setListLoading}
                                  sortType={sortType}></CardListCode>

                </CardBody>
            </Card>
        </div>
    </>
}

export default CodeAside;