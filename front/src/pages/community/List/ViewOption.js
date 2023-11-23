import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import './../../../css/community/list.css';
import PageListViewType from '../../../components/Lecture/PageListType';
import Button from 'react-bootstrap/Button';

function ViewOption({sort, setSort, listLoading, setListLoading, navigate, cateNo}) {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>

            <Nav variant='pills' defaultActiveKey='link-0'
                 style={{ width: 'auto' }}>
                <Nav.Item>
                    <Nav.Link eventKey='link-0' active={sort==="communityNo"} onClick={()=>{
                        setSort("communityNo");
                        navigate(`/community/list?tab=communityNo&cateNo=${cateNo}`);
                    }}>최신순</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey='link-1' active={sort==="comAmount"} onClick={()=>{
                        setSort("comAmount");
                        navigate(`/community/list?tab=comAmount&cateNo=${cateNo}`);
                    }}>댓글 TOP</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey='link-2' active={sort==="likes"} onClick={()=>{
                        setSort("likes");
                        navigate(`/community/list?tab=likes&cateNo=${cateNo}`);
                    }}>좋아요 TOP</Nav.Link>
                </Nav.Item>
            </Nav>

            <div>
                <Button variant='primary' style={{ background: '#2CA8FF' }} onClick={
                    () => {
                        navigate('/community/write');
                    }
                }>
                    <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor'
                         className='bi bi-pencil-fill' viewBox='0 0 16 16' style={{ marginRight: '4px' }}>
                        <path
                            d='M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z' />
                    </svg>
                    글 작성하기
                </Button>{' '}
                <PageListViewType listLoading={listLoading} setListLoading={setListLoading}></PageListViewType>
            </div>
        </div>
    );
}

export default ViewOption;