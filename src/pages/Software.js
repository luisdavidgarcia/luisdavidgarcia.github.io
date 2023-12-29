import React from 'react';
import Card from '../components/common/Card';

const softwareProjects = [
    {
        title: 'CookMyFridge',
        description: 'An automated recipe generator that suggests recipes based on the ingredients you have in your fridge. Built with React, Node.js, and MongoDB.',
        imageUrl: 'https://lh3.googleusercontent.com/drive-viewer/AEYmBYQ07GZIfNC7LtbpD7p0OsX7VRVnvIqS09sUXs4lZGwVRXiuT6iD2A26pJRBzxPgf0zZTW6Jj6Okm1w3P7ozBWpSI3_Xlg=s1600',
        link: 'https://github.com/aahmadyar123/CookMyFridge',
    },
    {
        title: 'Rcopy',
        description: 'A C/C++ implementation for remote file copying over UDP, featuring selective-reject ARQ, sliding window flow control, and error handling for reliable transmission. ',
        imageUrl: 'https://lh3.googleusercontent.com/drive-viewer/AEYmBYQFCrfM-UiQ5bjtw1S0hNmH8hEO7I5eE3umK9vOV3vs8oXedu4ziaSx2yxBGG9e3ejAy3aCJ-1ANiqSSX7doCeCblpuNg=s1600',
        link: 'https://github.com/luisdavidgarcia',
    },
    {
        title: 'TinyFS',
        description: 'A feature-rich filesystem crafted in Rust for my Operating Systems class project. With built-in support for creation time, modification time, and read/write permissions.',
        imageUrl: 'https://lh3.googleusercontent.com/drive-viewer/AEYmBYQgdIawM26a7hjFwwjKF2DEF7-0BXmYoG0V5r-H2LO80k8uDTy515Z5BvXrPh3JF7gOjrZilk3VH3aTZbS7JDg5Cg4T=s1600',
        link: 'https://github.com/luisdavidgarcia',
    },
];

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
