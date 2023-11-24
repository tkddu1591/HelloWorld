import React, {useEffect, useState} from 'react';
import ListHeader from '../../pages/lecture/ListHeader';
import CardList from '../../pages/lecture/CardList';
import LecturePagination from './LecturePagination';
import ListList from './ListList';
import {changeDTO} from "../../store/changeDTO";
import {getRandomValueFromArray} from "../../utils/getRandomValueFromArray";

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
    tags?: { value: number, label: string }[];
    pageRequest?: any;
    moreLink?: string
}

//스크롤 맨 아래 확인

function useScrollToBottom() {
    const [isBottom, setIsBottom] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const scrollHeight =
                      document.documentElement.scrollHeight - document.documentElement.clientHeight;

            const reachedBottom = scrollTop >= scrollHeight;

            setIsBottom(reachedBottom);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return isBottom;
}


function ListTable({
                       setSort,
                       sortType = undefined,
                       isMore = false,
                       title = '목록',
                       isLoadingType = false,
                       setPageRequest,
                       pageResponse,
                       tags,
                       pageRequest,
                       moreLink,
                   }: LectureListTableProps) {

    const [clientWidth, setClientWidth] = useState(document.body.clientWidth);
    const [timer, setTimer] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setTimer(true);
        }, 1000);

        // Cleanup function to clear the timeout in case the component unmounts

        const windowResize = () => {
            setClientWidth(document.body.clientWidth);
        };

        window.addEventListener(`resize`, windowResize);


        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener(`resize`, windowResize);
        };
    }, []);

    const [listLoading, setListLoading] = useState<{
        loading?: string;
        view?: string;
    }>({loading: 'scroll', view: 'card'});

    const scrolledToBottom = useScrollToBottom();
    useEffect(() => {
        if (timer)
            if (scrolledToBottom && listLoading.loading === 'scroll' && !isMore) {
                changeDTO(setPageRequest, 'pg', pageResponse?.pg + 1).then(res => {
                })
            }
    }, [scrolledToBottom]);
    const [list, setList] = useState<any>([]);
    const [end, setEnd] = useState<boolean>(false);

    useEffect(() => {

        if (tags !== undefined) {
            setTagColor(tags.map(tag => ({value: tag.label, color: getRandomValueFromArray()})));
        }
    }, [tags]);
    let [tagColor, setTagColor] = useState<{ value: string, color: string }[]>([]);
    const [prevSort, setPrevSort] = useState<string>(pageRequest?.sort);
    useEffect(() => {
        const updateList = async () => {
            if (listLoading.loading !== 'scroll' && setEnd) {
                setEnd(false);
            }

            if (pageResponse?.lectureList) {
                if (listLoading.loading !== 'scroll' || (pageRequest?.sort && pageRequest.sort !== prevSort)) {
                    // 리스트 초기화 후 새로운 데이터 추가
                    console.log(pageResponse.lectureList.length);
                    console.log(list.length)
                    if (!(pageResponse?.lectureList?.length < 12 && list.length > 12)) {
                        setList?.(pageResponse?.lectureList);
                    }
                    setEnd?.(false);
                } else {
                    // 기존 리스트에 데이터 추가
                    if (pageRequest?.pg === 1) {
                        setList?.(pageResponse?.lectureList);
                    } else {
                        if (pageResponse?.last <= pageResponse?.pg) {
                            setList?.([...list, ...(pageResponse?.lectureList || [])]);
                            setEnd?.(true);
                        } else {
                            setEnd?.(false);
                            console.log(list)
                            setList?.([...list, ...(pageResponse?.lectureList || [])]);
                        }
                    }
                }
            }

        };

        if (!isMore) {
            setPrevSort(pageRequest?.sort)
            updateList();
        } else
            setList?.(pageResponse?.lectureList);

    }, [pageResponse, listLoading, pageRequest?.sort]);
    useEffect(() => {
        if (setPageRequest)
            changeDTO(setPageRequest, 'pg', 1)
    }, [listLoading]);
    return (
        <>
            <div style={{marginTop: '20px'}}>
                <ListHeader
                    isLoadingType={isLoadingType}
                    setListLoading={setListLoading}
                    listLoading={listLoading}
                    sortType={sortType}
                    title={title}
                    setSort={setSort}
                    more={isMore}
                    moreLink={moreLink}
                    value={pageRequest?.sort}
                ></ListHeader>
                {listLoading && (clientWidth < 992 || listLoading.view === 'card') &&
                    <CardList setPageRequest={setPageRequest} list={list} end={end}
                              listLoading={listLoading.loading} tagColor={tagColor}></CardList>}
                {listLoading && clientWidth >= 992 && listLoading.view === 'list' &&
                    <ListList list={list} tagColor={tagColor}
                    ></ListList>}
            </div>
            <div style={{marginTop: '20px', marginBottom: '20px'}}>
                {listLoading && listLoading.loading === 'paging' && !isMore &&
                    <LecturePagination setPageRequest={setPageRequest} pageResponse={pageResponse}></LecturePagination>}
            </div>
        </>
    );
}

export default ListTable