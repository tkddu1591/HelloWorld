import React, { useEffect, useState } from 'react';
import ListHeader from '../../pages/lecture/ListHeader';
import CardList from '../../pages/lecture/CardList';
import LecturePagination from './LecturePagination';
import ListList from './ListList';

interface LectureListTableProps {
    colSize?: number;
    sorts?: {
        title: string;
        placeholder: string;
        isSearchable?: boolean;
        list: { value: number | string; label: string }[];
        isMulti?: boolean;
    }[];
    sortType?: {
        title: string;
        placeholder?: string;
        isSearchable?: boolean;
        list: { value: number | string; label: string }[];
        isMulti?: boolean;
    };
    isMore?: boolean;
    isLoadingType?: boolean;
    LoadingType?: string;
    title?: string;
    setSort?: (value: string) => void;
    setPageRequest?: (value: any) => void;
    pageResponse?: any;
    tags?: {value: number, label:string}[];
}

function ListTable({
    colSize,
    setSort,
    sortType = undefined,
    isMore = false,
    title = '목록',
    isLoadingType = false,
    setPageRequest,
    pageResponse,
    tags
}: LectureListTableProps) {
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

    const [listLoading, setListLoading] = useState<{
        loading?: string;
        view?: string;
    }>({ loading: 'scroll', view: 'card' });

    return (
        <>
            <div style={{ marginTop: '20px' }}>
                <ListHeader
                    isLoadingType={isLoadingType}
                    setListLoading={setListLoading}
                    listLoading={listLoading}
                    sortType={sortType}
                    title={title}
                    setSort={setSort}
                    more={isMore}></ListHeader>
                {listLoading && (clientWidth < 992 || listLoading.view === 'card') && <CardList tags={tags} pageResponse={pageResponse}></CardList>}
                {listLoading && clientWidth >= 992 && listLoading.view === 'list' && <ListList tags={tags} pageResponse={pageResponse}></ListList>}
            </div>
            <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                {listLoading && listLoading.loading === 'paging' && <LecturePagination setPageRequest={setPageRequest} pageResponse={pageResponse}></LecturePagination>}
            </div>
        </>
    );
}

export default ListTable