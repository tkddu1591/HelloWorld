import React, { useState } from 'react';

interface StarProps {
    size: number;
    change?: boolean;
    score?: number;
}

function Star({ size, change = false, score = 0 }: StarProps) {
    let [count, setCount] = useState(0);
    if (!change) {
        if (score !== count) setCount(score);
    }
    let [hoverCount, setHoverCount] = useState(0);
    let [hover, setHover] = useState(false);
    let num = [1, 2, 3, 4, 5];

    if (score === 0 && !change) {
        return null;
    }
    return (
        <>
            <div
                style={{ display: 'inline-block' }}
                onMouseEnter={() => {
                    if (!hover) setHover(true);
                }}
                onMouseLeave={() => {
                    if (hover) setHover(false);
                }}>
                {num.map((item, index) => {
                    if (change)
                        return (
                            <i
                                key={item}
                                className={
                                    hover
                                        ? hoverCount >= item
                                            ? 'bi bi-star-fill'
                                            : 'bi bi-star'
                                        : count >= item
                                        ? 'bi bi-star-fill'
                                        : 'bi bi-star'
                                }
                                onMouseOver={() => {
                                    setHoverCount(item);
                                }}
                                onClick={() => {
                                    setCount(item);
                                    setHover(false);
                                }}
                                style={{
                                    color: hover ? '' : 'orange',
                                    cursor: 'pointer',
                                    fontSize: size + 'px',
                                }}></i>
                        );
                    else
                        return (
                            <i
                                key={item}
                                style={{ color: 'orange', fontSize: size + 'px' }}
                                className={score >= item ? 'bi bi-star-fill' : 'bi bi-star'}></i>
                        );
                })}
            </div>
        </>
    );
}

export default Star;
