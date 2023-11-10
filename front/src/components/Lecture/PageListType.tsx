import { Button } from 'reactstrap';
import { changeDTO } from '../../store/changeDTO';
import React, { useEffect, useState } from 'react';

interface PageListViewType {
    listLoading?: { loading?: string; view?: string };
    setListLoading?: (state: { loading?: string; view?: string }) => void;
}

function PageListViewType({ listLoading, setListLoading }: PageListViewType) {
    const [clientWidth, setClientWidth] = useState(document.body.clientWidth);
    useEffect(() => {
        const windowResize = () => {
            setClientWidth(document.body.clientWidth);
        };

        window.addEventListener(`resize`, windowResize);

        return () => {
            window.removeEventListener(`resize`, windowResize);
        };
    }, []);
    return (
        <>
            {listLoading?.loading && (
                <div style={{ display: 'inline-block', marginLeft: '10px' }}>
                    <Button
                        color={listLoading.loading == 'scroll' ? 'info' : ''}
                        style={{ width: '15px', paddingLeft: '10px' }}
                        onClick={() => {
                            if (setListLoading) changeDTO(setListLoading, 'loading', 'scroll');
                        }}>
                        <i className="bi bi-chevron-double-down"></i>
                    </Button>
                    <Button
                        color={listLoading.loading == 'paging' ? 'info' : ''}
                        style={{ width: '15px', paddingLeft: '10px' }}
                        onClick={() => {
                            if (setListLoading) changeDTO(setListLoading, 'loading', 'paging');
                        }}>
                        <i className="bi bi-book-half"></i>
                    </Button>
                </div>
            )}
            {listLoading?.view && clientWidth >= 992 && (
                <div style={{ display: 'inline-block', marginLeft: '10px' }}>
                    <Button
                        color={listLoading.view == 'card' ? 'success' : ''}
                        style={{ width: '15px', paddingLeft: '10px' }}
                        onClick={() => {
                            if (setListLoading) changeDTO(setListLoading, 'view', 'card');
                        }}>
                        <i className="bi bi-grid-fill"></i>
                    </Button>
                    <Button
                        color={listLoading.view == 'list' ? 'success' : ''}
                        style={{ width: '15px', paddingLeft: '10px' }}
                        onClick={() => {
                            if (setListLoading) changeDTO(setListLoading, 'view', 'list');
                        }}>
                        <i className="bi bi-list-task"></i>
                    </Button>
                </div>
            )}
        </>
    );
}

export default PageListViewType;