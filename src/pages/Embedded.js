import React from 'react';
import Card from '../components/common/Card';
import embeddedProjects from '../data/embeddedProjects';

function Embedded() {
    return (
        <div>
            <h1>Embedded Projects</h1>
            <div className="card-container">
                {embeddedProjects.map((project, index) => (
                    <Card
                        key={index}
                        className="fixed-size-card" 
                        title={project.title}
                        description={project.description}
                        imageUrl={project.imageUrl}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    );
}

export default Embedded;
