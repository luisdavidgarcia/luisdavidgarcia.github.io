import React from 'react';
import Card from '../components/common/Card';
import softwareProjects from '../data/softwareProjects';

function Software() {
    return (
        <div>
            <h1>Software Projects</h1>
            <div className="card-container">
                {softwareProjects.map((project, index) => (
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

export default Software;
