import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import '../../assets/styles/Card.css';

function Card({ title, description, imageUrl, link, className = '' }) {
    return (
        <div className={`card ${className}`}>
            <Link to={link}>
                <img src={imageUrl} alt={title} />
            </Link>
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="card-text">{description}</p>
                <Link to={link} className="btn">
                    Learn More
                </Link>
            </div>
        </div>
    );
}

export default Card;
