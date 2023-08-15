import React, { useEffect, useState } from 'react';
import UpperArrow from '../assets/images/upperArrow.svg';


const TopScroller = () => {
    const [shouldShowScroller, setShouldShowScroller] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= window.innerHeight) {
                setShouldShowScroller(true);
            } else {
                setShouldShowScroller(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            {shouldShowScroller && (
                <a href="#dashBoardMe" className="scrollerLink">
                    <div className="topScroller">
                        <img src={UpperArrow} alt="" />
                    </div>
                </a>
            )}
        </>
    )
}

export default TopScroller