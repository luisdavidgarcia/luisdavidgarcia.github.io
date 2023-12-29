import React from 'react';
import Card from '../components/common/Card';

const softwareProjects = [
    {
        title: 'CookMyFridge',
        description: 'A short description of what Project 1 entails.',
        imageUrl: 'https://drive.google.com/uc?id=1BjlAUKaKBo19KdwxshJ7CqEctpjL1eoD',
        link: 'https://github.com/aahmadyar123/CookMyFridge',
    },
    {
        title: 'Rcopy',
        description: 'A C/C++ implementation for remote file copying over UDP, featuring selective-reject ARQ, sliding window flow control, and error handling for reliable transmission. ',
        imageUrl: 'https://drive.google.com/uc?id=1JH9D-tZuPqwUVGiz1zxC7L4EWx8VwPoU',
        link: 'https://github.com/luisdavidgarcia',
    },
    {
        title: 'TinyFS',
        description: 'A feature-rich filesystem crafted in Rust for my Operating Systems class project. With built-in support for creation time, modification time, and read/write permissions.',
        imageUrl: 'https://drive.google.com/uc?id=1AOIqm6fD2OQxneKHKTzlf7sYVUxUEaDr',
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
