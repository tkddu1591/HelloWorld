import React from 'react';
import '../../../../css/community/view.css';

function ArticleTagList({tagsList}){
    return(<>
        <div className="ArticleTagList">
            <strong className={'blind'}>태그</strong>
            <ul className={'tag_list'}>
                {tagsList.map(function(a, i){
                    return (<>
                        <li className={'item'}>
                            <a href={'#'} className={'tag_link'}>
                                {' '}
                                #{a.tagName}{' '}
                            </a>
                        </li>
                    </>)
                })}
            </ul>
        </div>
    </>)
}

export default ArticleTagList;