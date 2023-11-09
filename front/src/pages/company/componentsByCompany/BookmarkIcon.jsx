import React from "react";
import {ReactComponent as BookmarkTRUE} from "assets/icons/bookmark-solid.svg";
import {ReactComponent as BookmarkFALSE} from "assets/icons/bookmark-regular.svg";
function BookmarkIcon({isBookmark}) {
    return (
        <>
            {isBookmark && <BookmarkTRUE style={{width:"8%", margin:"3px"}}/>}
            {!isBookmark && <BookmarkFALSE style={{width:"8%", margin:"3px"}}/>}
        </>
    )
}
export default BookmarkIcon;