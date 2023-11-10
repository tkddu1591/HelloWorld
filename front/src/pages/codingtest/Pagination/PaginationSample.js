import {Pagination, PaginationItem, PaginationLink} from "reactstrap";
import React from "react";

function PaginationSample(){

    return<>
        <Pagination style={{display:'flex',justifyContent:'center',textAlign:'center', width:'100%'}}>
            <PaginationItem>
                <PaginationLink
                    aria-label="Previous"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                >
                        <span aria-hidden={true}>
                          <i
                              aria-hidden={true}
                              className="fa fa-angle-double-left"
                          ></i>
                        </span>
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                >
                    1
                </PaginationLink>
            </PaginationItem>
            <PaginationItem className="active">
                <PaginationLink
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                >
                    2
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                >
                    3
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink
                    aria-label="Next"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                >
                <span aria-hidden={true}>
                  <i
                      aria-hidden={true}
                      className="fa fa-angle-double-right"
                  ></i>
                </span>
                </PaginationLink>
            </PaginationItem>
        </Pagination>
    </>

}

export default PaginationSample;