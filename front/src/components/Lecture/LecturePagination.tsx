import {Pagination, PaginationItem, PaginationLink} from 'reactstrap';
import React, {useState} from 'react';
import {changeDTO} from "../../store/changeDTO";

interface LectureListPaginationProps {
    setPageRequest?: (value: any) => void;
    pageResponse?: any;
}

function LecturePagination({setPageRequest, pageResponse}: LectureListPaginationProps) {
    if (pageResponse) {

        return (
            <Pagination
                style={{
                    display:        'flex',
                    justifyContent: 'center',
                    textAlign:      'center',
                    width:          '100%',
                }}>
                <PaginationItem>
                    <PaginationLink aria-label="Previous" onClick={e => changeDTO(setPageRequest, 'pg', 1)}>
                        <i className="fa fa-angle-double-left"></i>
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink aria-label="Previous"
                                    onClick={e => changeDTO(setPageRequest, 'pg', pageResponse.start - 1)}>
                        <i className="fa fa-angle-left"></i>
                    </PaginationLink>
                </PaginationItem>
                {pageResponse.lectureList?.map((lecture, index) => {
                    return (
                        <PaginationItem className={pageResponse.pg===index+pageResponse.start?"active":''} key={lecture.lectureNo}>
                            <PaginationLink onClick={e => changeDTO(setPageRequest, 'pg', index+pageResponse.start)}>{index+pageResponse.start}</PaginationLink>
                        </PaginationItem>
                    );
                })}
                <PaginationItem>
                    <PaginationLink aria-label="Next"
                                    onClick={e => changeDTO(setPageRequest, 'pg', pageResponse.end + 1)}>
                    <span aria-hidden={true}>
                        <i aria-hidden={true} className="fa fa-angle-right"></i>
                    </span>
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink aria-label="Next"
                                    onClick={e => changeDTO(setPageRequest, 'pg', pageResponse.last)}>
                    <span aria-hidden={true}>
                        <i aria-hidden={true} className="fa fa-angle-double-right"></i>
                    </span>
                    </PaginationLink>
                </PaginationItem>
            </Pagination>
        );
    } else {
        return null;
    }
}

export default LecturePagination