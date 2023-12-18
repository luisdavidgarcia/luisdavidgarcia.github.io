import React from 'react';
import Card from '../components/common/Card';

const softwareProjects = [
    {
        title: 'Project Title 1',
        description: 'A short description of what Project 1 entails.',
        imageUrl: '../assets/images/software_project1.jpg',
        link: 'https://github.com/yourusername/project1',
    },
    {
        title: 'Project Title 2',
        description: 'Overview of Project 2 and its main features.',
        imageUrl: '../assets/images/software_project2.jpg',
        link: 'https://github.com/yourusername/project2',
    },
    // Add more projects as needed
];

function Software() {
    return (
        <div>
            <h1>Software Projects</h1>
            <div className="card-container">
                {softwareProjects.map((project, index) => (
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

export default Software;
