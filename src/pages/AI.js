import React from 'react';
import Card from '../components/common/Card';

const aiProjects = [
    {
        title: 'CaptionThis',
        description: 'A Python-based deep learning tool for generating insightful captions for images. Utilizing the BLIP model and trained using Google\'s Conceptual Captions dataset.',
        imageUrl: 'https://drive.google.com/uc?id=1l40u9ihqn7qqN0xVnurPe0NWXkrSg1B3',
        link: 'https://github.com/luisdavidgarcia/CaptionThis',
    },
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
