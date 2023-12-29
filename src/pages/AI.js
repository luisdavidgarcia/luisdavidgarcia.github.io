import React from 'react';
import Card from '../components/common/Card';

const aiProjects = [
    {
        title: 'CaptionThis',
        description: "A Python-based deep learning tool for generating insightful captions for images. Utilizing the BLIP model and trained using Google's Conceptual Captions dataset.",
        imageUrl: 'https://lh3.googleusercontent.com/drive-viewer/AEYmBYTiPm75wR9vREFqWv4z5ZtxNMosivTo3Zn3bTE4Tb24Mn14gtdb6iF9I0tgulMbDWZIb9bkfIuflpa7IYk_oJGSuTqfsw=s1600',
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
