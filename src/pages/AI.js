import React from 'react';
import Card from '../components/common/Card';

const aiProjects = [
    {
        title: 'AI Project 1',
        description: 'A brief overview of AI Project 1.',
        imageUrl: '../assets/images/ai_project1.jpg',
        link: 'https://github.com/yourusername/ai_project1',
    },
    // Add more AI projects as needed
];

function AI() {
    return (
        <div>
            <h1>AI Projects</h1>
            <div className="card-container">
                {aiProjects.map((project, index) => (
                    <Card
                        key={index}
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
