import React, {useEffect, useState} from "react";
import {Button, Table} from "reactstrap";
import {changeDTO} from "../../../../../store/changeDTO";
import firebase from "firebase/compat";


interface LectureWriteAsideTableProps {
    deleteBySet: (item: { orderNo: number, title: string }) => void;
    updateTitle: (index: number, title: string, set: React.Dispatch<React.SetStateAction<any>>) => void;
    part: { orderNo: number, title: string, lectureNo: number };
    setPart: React.Dispatch<React.SetStateAction<{ title: string, orderNo: number, lectureNo: number }>>;
}

function LectureWriteAsideTable({setPost, deleteBySet, part, updateTitle, setPart,  generateOrderNo, setAside, lectureNo, setContentList, contentList, post}) {

    let [content, setContent] = useState<{ orderNo: number, title: string, lectureNo: number, partNo: number }[]>([])

    const updateContentListPartNo = () => {
        setContentList((oldContentList) => {
            return oldContentList.map((item) => ({
                ...item,
                contents: item.contents.map((contentItem) => ({
                    ...contentItem,
                    partNo:    item.orderNo,
                    contentNo: (item.orderNo * 100 + contentItem.contentNo % 100)// partNo를 orderNo과 같게 설정
                })),
            }));
        });
    };


    return <Table style={{marginBottom: '5px'}}>
        <tbody style={{boxSizing: 'border-box'}}>
            <tr>
                <th style={{
                    padding:      '20px', display: "flex", justifyContent: 'space-between', fontSize: '16px',
                    borderBottom: '2px solid #dddddd'
                }}>
                    <input placeholder={'파트명을 입력해주세요'} style={{backgroundColor: 'transparent'}}
                           onChange={(e) => {
                               updateTitle(part.orderNo, e.target.value, setPart)
                           }}
                           value={part.title}
                    />
                    <i className="bi bi-x-circle" style={{fontSize: '20px', cursor: "pointer"}} onClick={async () => {
                        try {
                            // deleteBySet 함수 실행
                            await deleteBySet(part, setPart, lectureNo);

                            // deleteBySet 함수 실행
                            await deleteBySet(part, setContentList, lectureNo);

                            // contentList 정렬
                            await contentList.sort((a, b) => a.orderNo - b.orderNo);

                            // updateContentListPartNo 함수 실행
                            await updateContentListPartNo();
                            setContent((prevContent) => {
                                return prevContent;
                            });

                            if (post.partNo&&(post.partNo === part.orderNo)) {
                                setPost(undefined)
                            }
                        } catch (error) {
                            console.error('Error in onClick:', error);
                        }
                    }}></i>

                </th>
            </tr>

            <ContentList setContentList={setContentList} contentList={contentList} lectureNo={lectureNo}
                         setPost={setPost} post={post}  setAside={setAside}
                         generateOrderNo={generateOrderNo} part={part} content={content}
            ></ContentList>


        </tbody>
    </Table>

}


function ContentList({part, setPost, generateOrderNo, lectureNo, contentList, setContentList, content, post,  setAside}) {
    const deleteContent = (orderNoToDelete: number, contentNoToDelete: number) => {
        // contentList 배열을 복사하여 새로운 배열을 생성
        const updatedContentList = contentList.map(item => ({...item}));

        // orderNoToDelete와 일치하는 객체를 찾음
        const targetContentIndex = updatedContentList.findIndex(content => content.orderNo === orderNoToDelete);

        if (targetContentIndex !== -1) {
            // contentNoToDelete와 일치하는 객체의 내부 항목을 제외한 배열을 생성
            const targetContents = updatedContentList[targetContentIndex].contents.filter(content => content.contentNo !== contentNoToDelete);

            // 찾은 객체의 contents를 갱신하고 contentNo를 0부터 순차적으로 변경
            updatedContentList[targetContentIndex].contents = targetContents.map((content, index) => ({
                ...content,
                contentNo: generateOrderNo(orderNoToDelete, index + 1)
            }));

            // contentList 상태 업데이트
            setContentList(updatedContentList.map(item => ({
                ...item,
                contents: item.contents.length > 0 ? item.contents.sort((a, b) => a.contentNo - b.contentNo) : [],
            })));
        }
    };
    const addContentToOrder = (orderNoToAddContent: number) => {
        // contentList 배열을 복사하여 새로운 배열을 생성
        const updatedContentList = contentList.map(item => ({...item}));

        // orderNoToAddContent와 일치하는 객체를 찾음
        const targetContentIndex = updatedContentList.findIndex(content => content.orderNo === orderNoToAddContent);

        if (targetContentIndex !== -1) {
            // 새로운 content 객체 생성
            const newContent = {
                contentNo: generateOrderNo(orderNoToAddContent, updatedContentList[targetContentIndex].contents.length + 1),
                lectureNo: lectureNo,
                partNo:    part.orderNo,
            };

            // 새로운 content 객체를 기존 객체의 contents에 추가
            updatedContentList[targetContentIndex].contents =
                [...updatedContentList[targetContentIndex].contents, newContent];

            // contentList 상태 업데이트
            setContentList(updatedContentList);
        }
    };

    const transformContentToContentList = () => {
        const transformedContentList = content.map(({orderNo, title, lectureNo, partNo}) => ({
            contentNo: orderNo,
            title,
            lectureNo,
            partNo,
        }));
        setContentList((prevContentList) => {
            const updatedContentList = prevContentList.filter(item => item.orderNo !== part.orderNo);
            return [
                ...updatedContentList,
                {orderNo: part.orderNo, contents: transformedContentList},
            ];
        });
    };
    const updateTitle2 = (orderNo: number, contentNo: number, newTitle: string) => {
        // contentList 배열을 복사하여 새로운 배열을 생성
        const updatedContentList = [...contentList];

        // 해당 orderNo와 contentNo에 해당하는 객체를 찾음
        const targetContent = updatedContentList.find(content => content.orderNo === orderNo);
        if (targetContent) {
            // 해당 객체의 title을 새로운 값으로 업데이트
            const targetContentIndex = targetContent.contents.findIndex(content => content.contentNo === contentNo);
            if (targetContentIndex !== -1) {
                targetContent.contents[targetContentIndex].title = newTitle;

                // 상태 업데이트
                setContentList(updatedContentList);
            }
        }
    };
    useEffect(() => {
        transformContentToContentList();
    }, [content]);
    return <>
        {contentList.map((value) => {
            if (part.orderNo === value.orderNo) {
                return (
                    value.contents.map((item) => (
                        <tr key={item.orderNo}>
                            <td style={{
                                border:       'none', borderLeft: '2px solid red', boxSizing: 'border-box',
                                borderBottom: '1px solid lightgrey',
                                display:      'flex', justifyContent: 'space-between',
                                alignItems:   'center'
                            }}>
                                <input
                                    value={item.title ? item.title : ''}
                                    placeholder={'컨텐츠 명을 입력해주세요'} style={{
                                    fontWeight:      '500', fontSize: '14px', width: '240px', padding: '10px',
                                    paddingLeft:     '5px',
                                    backgroundColor: 'transparent'
                                }} onChange={(e) => {
                                    updateTitle2(value.orderNo, item.contentNo, e.target.value)
                                }}></input>
                                <span style={{cursor: 'pointer', color: 'blue'}}
                                      onClick={(e) => {
                                          setAside(false)
                                          setPost({
                                              partTitle: part.title,
                                              contentNo: item.contentNo,
                                              title:     item.title,
                                              partNo:    value.orderNo,
                                              lectureNo: lectureNo,
                                          })

                                      }}>작성</span>


                                <i className="bi bi-x-circle" style={{fontSize: '20px', cursor: "pointer"}}
                                   onClick={() => {
                                       if (post.contentNo&&(post.contentNo === item.contentNo)) {
                                           setPost(undefined)
                                       }
                                       deleteContent(value.orderNo, item.contentNo)
                                   }}></i>
                            </td>
                        </tr>
                    ))
                )
            }
        })}
        <tr className={'plusBox'}
            onClick={() => {
                addContentToOrder(part.orderNo)

            }}>
            <td>
                <i className={"bi bi-plus-circle"}></i>
            </td>
        </tr>
    </>
}

export default LectureWriteAsideTable