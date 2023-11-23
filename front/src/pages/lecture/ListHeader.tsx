import PageListViewType from '../../components/Lecture/PageListType';
import React from 'react';
import { Container } from 'reactstrap';
import SelectBox from '../../components/Lecture/SelectBox';

interface ListHeaderProps {
    more?: boolean;
    sortType?: {
        title: string;
        placeholder?: string;
        isSearchable?: boolean;
        list: { value: number | string; label: string }[];
        isMulti?: boolean;
    };
    title: string;
    listLoading?: { loading?: string; view?: string };
    setListLoading?: (state: { loading?: string; view?: string }) => void;
    isLoadingType?: boolean;
    setSort?: (value: string) => void;
}

function ListHeader({
    title,
    isLoadingType = false,
    setListLoading,
    listLoading,
    more = false,
    setSort,
    sortType,
}: ListHeaderProps) {
    return (
        <Container>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    {title && (
                        <h3
                            style={{
                                textAlign: 'left',
                                marginBottom: '10px',
                                display: 'inline-block',
                                fontSize: '20px',
                            }}>
                            {title}
                        </h3>
                    )}
                    {isLoadingType && (
                        <PageListViewType setListLoading={setListLoading} listLoading={listLoading}></PageListViewType>
                    )}
                </div>
                <div>
                    {more && (
                        <span
                            style={{
                                textAlign: 'right',
                                marginTop: 20,
                                cursor: 'pointer',
                                color: 'gray',
                            }}>
                            더보기
                            <i
                                className="now-ui-icons ui-1_simple-add"
                                style={{
                                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                    backgroundColor: 'lightgray',
                                    padding: '3px',
                                    marginLeft: '2px',
                                    fontSize: '11px',
                                    fontWeight: 'bolder',
                                }}></i>
                        </span>
                    )}

                    {sortType && (
                        <div style={{ marginTop: '10px' }}>
                            <SelectBox
                                options={sortType.list}
                                value={sortType.list[0]}
                                setSelect={setSort}
                                isSearchable={sortType.isSearchable}></SelectBox>
                        </div>
                    )}
                </div>
            </div>
        </Container>
    );
}

export default ListHeader;