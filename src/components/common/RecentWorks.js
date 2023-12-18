import React from 'react';
import Slider from 'react-slick';
import Card from '../../components/common/Card';
import NextArrow from './NextSliderArrow';
import PrevArrow from './PrevSliderArrow';
import '../../assets/styles/RecentWorks.css';

function RecentWorks({
    project1Title,
    project1Description,
    project1URL,
    project1Image,
    project2Title,
    project2Description,
    project2URL,
    project2Image,
    project3Title,
    project3Description,
    project3URL,
    project3Image,
}) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div className="recent-works-section">
            <h2>Recent Works</h2>
            <Slider {...settings}>
                {/* Slide for Project 1 */}
                <div>
                    <Card
                        className="recent-works-card"
                        title={project1Title}
                        description={project1Description}
                        imageUrl={project1Image}
                        link={project1URL}
                    />
                </div>
                {/* Slide for Project 2 */}
                <div>
                    <Card
                        className="recent-works-card"
                        title={project2Title}
                        description={project2Description}
                        imageUrl={project2Image}
                        link={project2URL}
                    />
                </div>
                {/* Slide for Project 3 */}
                <div>
                    <Card
                        className="recent-works-card"
                        title={project3Title}
                        description={project3Description}
                        imageUrl={project3Image}
                        link={project3URL}
                    />
                </div>
            </Slider>
        </div>
    );
}

export default RecentWorks;
