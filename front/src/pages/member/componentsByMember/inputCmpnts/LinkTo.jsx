import React from 'react';
import { Link } from 'react-router-dom';

function LinkTo({ to, text, pos }) {
    return (
        <>
            <div className={'pull-' + pos}>
                <h6>
                    <Link to={to} style={{ color: 'grey' }}>
                        {text}
                    </Link>
                </h6>
            </div>
        </>
    );
}

export default LinkTo;
