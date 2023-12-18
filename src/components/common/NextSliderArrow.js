import React from 'react';
import '../../assets/styles/RecentWorks.css';

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} slick-next`}
            style={{ ...style }}
            onClick={onClick}
        />
    );
};

export default NextArrow;
