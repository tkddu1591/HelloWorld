import React from 'react';
import '../../../../css/community/view.css';

function ArticleTagList(){
    return(<>
        <div className="ArticleTagList">
            <strong className={'blind'}>태그</strong>
            <ul className={'tag_list'}>
                <li className={'item'}>
                    <a href={'#'} className={'tag_link'}>
                        {' '}
                        #일상{' '}
                    </a>
                </li>
                <li className={'item'}>
                    <a href={'#'} className={'tag_link'}>
                        {' '}
                        #음식{' '}
                    </a>
                </li>
                <li className={'item'}>
                    <a href={'#'} className={'tag_link'}>
                        {' '}
                        #여행{' '}
                    </a>
                </li>
                <li className={'item'}>
                    <a href={'#'} className={'tag_link'}>
                        {' '}
                        #java{' '}
                    </a>
                </li>
                <li className={'item'}>
                    <a href={'#'} className={'tag_link'}>
                        {' '}
                        #ootd{' '}
                    </a>
                </li>
            </ul>
        </div>
    </>)
}

export default ArticleTagList;