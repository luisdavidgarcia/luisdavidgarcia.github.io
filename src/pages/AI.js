import React from 'react';
import Card from '../components/common/Card';
import aiProjects from '../data/aiProjects';

function AI() {
    return (
        <div>
            <h1>AI Projects</h1>
            <div className="card-container">
                {aiProjects.map((project, index) => (
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

export default AI;
