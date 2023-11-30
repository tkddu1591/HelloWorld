import React, {useEffect, useState} from 'react';
import LectureWriteAsideHeader from './LectureWriteAsideHeader';
import LectureWriteAsideTable from './LectureWriteAsideTable';
import LectureWriteAsideFooter from './LectureWriteAsideFooter';

function LectureWriteAside({lectureNo, setPost, part, contentList,setPart,setContentList, contentListSave,partSave, post}) {
    let [aside, setAside] = useState(false);
    const updateTitle = (index, title, set) => {
        // orderNo가 1인 객체를 찾아 해당 객체를 복사한 후 title을 수정합니다.
        set(prevData => {
            return prevData.map(item =>
                item.orderNo === index ? {...item, title: title} : item
            );
        });
    };
    const deleteBySet = (item, set, firstNo) => {
        return new Promise((resolve) => {
            set((oldValues) => {
                const newValues = oldValues
                    .filter((value) => value.orderNo !== item.orderNo)
                    .map((value, index) => ({
                        ...value,
                        orderNo: generateOrderNo(firstNo, index + 1),
                    }));

                resolve(newValues);
                return newValues;
            });
        });
    };
    useEffect(() => {
    }, [part]);



    const generateOrderNo = (postNo: number, partNo: number, contentNo?: number) => {
        if (contentNo === undefined) {
            return postNo * 100 + partNo;
        } else
            return postNo * 10000 + partNo * 100 + contentNo;
    };

    useEffect(() => {

    }, [contentList]);

    const filterContentsByPartNo = (set) => {
        return Promise.all(
            part.map(async (value) => {
                const filteredContents = contentList
                    .flatMap((item) => item.contents)
                    .filter((contentItem) => contentItem.partNo === value.orderNo)
                    .map((filteredItem) => ({
                        orderNo:   filteredItem.contentNo, // contentNo 대신 orderNo 사용
                        title:     filteredItem.title,
                        lectureNo: filteredItem.lectureNo,
                        partNo:    filteredItem.partNo,
                    }));

                set(filteredContents);
            })
        );
    };

    return (<div
            className={'aside'}
            style={{
                zIndex:             '2',
                backgroundColor:    '#fafafa',
                height:             '100vh',
                width:              '350px',
                position:           'fixed',
                translate:          aside ? '0' : '-350px',
                transitionDuration: '0.5s',
            }}>
            <LectureWriteAsideHeader partNum={part} setPartNum={setPart} aside={aside}
                                     setAside={setAside} generateOrderNo={generateOrderNo}
                                     lectureNo={lectureNo} contentList={contentList}></LectureWriteAsideHeader>


            <div style={{height: 'calc(100vh - 280px)', width: '100%', overflowY: 'scroll'}}>
                {part.map((value, index) => {
                    return <LectureWriteAsideTable setPost={setPost} deleteBySet={deleteBySet} key={value.orderNo}
                                                   updateTitle={updateTitle} setPart={setPart} lectureNo={lectureNo}
                                                   part={value} setContentList={setContentList}
                                                   contentList={contentList} post={post} setAside={setAside}
                                                   generateOrderNo={generateOrderNo}></LectureWriteAsideTable>
                })}
            </div>
            <LectureWriteAsideFooter part={part} contentList={contentList} contentListSave={contentListSave}
                                     partSave={partSave}></LectureWriteAsideFooter>
        </div>
    );
}

export default LectureWriteAside;
