import React from 'react';
import '../../assets/styles/RecentWorks.css';

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} slick-prev`}
            style={{ ...style }}
            onClick={onClick}
        />
    );
};

export default PrevArrow;
