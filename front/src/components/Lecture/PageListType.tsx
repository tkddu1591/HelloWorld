import {Button} from "reactstrap";
import {changeDTO} from "../../store/changeDTO";
import React from "react";

function PageListViewType({listLoading, setListLoading}){
    return<>
        {listLoading?.loading &&
            <div style={{display: 'inline-block', marginLeft: '10px'}}>
                <Button color={listLoading.loading == 'scroll' ? "info" : ''}
                        style={{width: '15px', paddingLeft: '10px'}}
                        onClick={() => {
                            if (setListLoading)
                                changeDTO(setListLoading, 'loading', 'scroll');
                        }}>
                    <i className="bi bi-chevron-double-down"></i>
                </Button>
                <Button color={listLoading.loading == 'paging' ? "info" : ''}
                        style={{width: '15px', paddingLeft: '10px'}}
                        onClick={() => {
                            if (setListLoading)
                                changeDTO(setListLoading, 'loading', 'paging');
                        }}>
                    <i className="bi bi-book-half"></i>
                </Button>
            </div>}
        {listLoading?.view &&
            <div style={{display: 'inline-block', marginLeft: '10px'}}>
                <Button color={listLoading.view == 'card' ? "success" : ''}
                        style={{width: '15px', paddingLeft: '10px'}}
                        onClick={() => {
                            if (setListLoading)
                                changeDTO(setListLoading, 'view', 'card');
                        }}>
                    <i className="bi bi-grid-fill"></i>
                </Button>
                <Button color={listLoading.view == 'list' ? "success" : ''}
                        style={{width: '15px', paddingLeft: '10px'}}
                        onClick={() => {
                            if (setListLoading)
                                changeDTO(setListLoading, 'view', 'list');
                        }}>
                    <i className="bi bi-list-task"></i>
                </Button>
            </div>}
    </>
}
export default PageListViewType;