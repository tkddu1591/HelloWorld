import React from 'react';

const ScrollToTopButton = () => {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button onClick={handleScrollToTop}>
            Scroll to Top
        </button>
    );
};

export default ScrollToTopButton;