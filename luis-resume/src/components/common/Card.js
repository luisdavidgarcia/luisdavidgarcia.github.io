import React from 'react';
import '../../assets/styles/Card.css';

function Card({ title, description, imageUrl, link, className = '' }) {
    return (
        <div className={`card ${className}`}>
            <img src={imageUrl} alt={title} />
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="card-text">{description}</p>
                <a href={link} className="btn">
                    Learn More
                </a>
            </div>
        </div>
    );
}

export default Card;
