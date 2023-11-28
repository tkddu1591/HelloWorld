import {Pagination, PaginationItem, PaginationLink} from 'reactstrap';
import React from 'react';
import {changeDTO} from "../../store/changeDTO";
import ScrollToTopButton from "../ScrollToTopButton";

interface LectureListPaginationProps {
    setPageRequest?: (value: any) => void;
    pageResponse?: any;
    top?: number
}

function LecturePagination({setPageRequest, pageResponse, top=0}: LectureListPaginationProps) {
    const handlePageClick = (pageNumber: number) => {
        changeDTO(setPageRequest, 'pg', pageNumber);
        window.scrollTo({ top: top, behavior: 'smooth' });
    };

    if (pageResponse) {
        let pageNum: number[] = [];
        for (let num = pageResponse.start; num <= pageResponse.end; num++)
            pageNum.push(num);
        return (
            <Pagination
                style={{
                    display:        'flex',
                    justifyContent: 'center',
                    textAlign:      'center',
                    width:          '100%',
                }}>
                {pageResponse.prev && <>
                    <PaginationItem>
                        <PaginationLink aria-label="Previous" onClick={() => handlePageClick(1)}>
                            <i className="fa fa-angle-double-left"></i>
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink aria-label="Previous" onClick={() => handlePageClick(pageResponse.start - 1)}>
                            <i className="fa fa-angle-left"></i>
                        </PaginationLink>
                    </PaginationItem>
                </>}
                {pageNum?.map((number, index) => {
                    return (
                        <PaginationItem className={pageResponse.pg === index + pageResponse.start ? "active" : ''}
                                        key={number}>
                            <PaginationLink
                                onClick={() => handlePageClick(index + pageResponse.start)}>
                                {index + pageResponse.start}
                            </PaginationLink>
                        </PaginationItem>
                    );
                })}
                {pageResponse.next && <>
                    <PaginationItem>
                        <PaginationLink aria-label="Next" onClick={() => handlePageClick(pageResponse.end + 1)}>
                            <span aria-hidden={true}>
                                <i aria-hidden={true} className="fa fa-angle-right"></i>
                            </span>
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink aria-label="Next" onClick={() => handlePageClick(pageResponse.last)}>
                            <span aria-hidden={true}>
                                <i aria-hidden={true} className="fa fa-angle-double-right"></i>
                            </span>
                        </PaginationLink>
                    </PaginationItem>
                </>
                }
            </Pagination>
        );
    } else {
        return null;
    }
}

export default LecturePagination;