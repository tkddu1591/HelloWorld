import React from "react";

interface SubheadProps {
    title: string;
}

function Subhead({title}: SubheadProps) {
    return <>
        <div style={{marginTop: '20px', borderBottom: '2px solid lightgray'}}>
            <span style={{fontSize: '20px', borderBottom: '2px solid red'}}>
                {title}</span>
        </div>

    </>
}
export default Subhead
