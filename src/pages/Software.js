import React from 'react';
import Card from '../components/common/Card';
import CookMyFridgeImage from '../assets/card_images/cookmyfridge.png'
import RcopyImage from '../assets/card_images/rcopy.png'
import TinyFSImage from '../assets/card_images/tinyfs.png'


const softwareProjects = [
    {
        title: 'CookMyFridge',
        description: 'An automated recipe generator that suggests recipes based on the ingredients you have in your fridge. Built with React, Node.js, and MongoDB.',
        imageUrl: CookMyFridgeImage,
        link: 'https://github.com/aahmadyar123/CookMyFridge',
    },
    {
        title: 'Rcopy',
        description: 'A C/C++ implementation for remote file copying over UDP, featuring selective-reject ARQ, sliding window flow control, and error handling for reliable transmission. ',
        imageUrl: RcopyImage,
        link: 'https://github.com/luisdavidgarcia',
    },
    {
        title: 'TinyFS',
        description: 'A feature-rich filesystem crafted in Rust for my Operating Systems class project. With built-in support for creation time, modification time, and read/write permissions.',
        imageUrl: TinyFSImage,
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
