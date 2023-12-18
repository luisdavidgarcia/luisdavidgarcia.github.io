import React from 'react';
import Card from '../components/common/Card';

const embeddedProjects = [
    {
        title: "Embedded Project 1",
        description: "A short description of Embedded Project 1.",
        imageUrl: "../assets/images/embedded_project1.jpg",
        link: "https://github.com/yourusername/embedded_project1"
    },
    // Add more embedded projects as needed
];

function Embedded() {
    return (
        <div>
            <h1>Embedded Projects</h1>
            <div className="card-container">
                {embeddedProjects.map((project, index) => (
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

export default Embedded;
