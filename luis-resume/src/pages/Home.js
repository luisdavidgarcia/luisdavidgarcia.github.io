import React from 'react';
import Card from '../components/common/Card';
import myHeadShot from '../assets/images/HeadShot.png';
import '../assets/styles/Home.css';

function Home() {
    const softwareImage =
        'https://bairesdev.mo.cloudinary.net/blog/2023/08/Fastest-Programming-Languages.jpg';
    const embeddedImage =
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ89MvCnZxR_max4EIAyM6qfuxlk5ZYnEnQig&usqp=CAU';
    const aiImage =
        'https://incubator.ucf.edu/wp-content/uploads/2023/07/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai-scaled-1.jpg';

    return (
        <div>
            <h1>Luis David Garcia's Portfolio</h1>
            <img
                src={myHeadShot}
                alt="Head shot of Luis David Garcia."
                className="headshot"
            />
            <p className="mission-statement">
                As a Computer Science Master's candidate and Computer
                Engineering Bachelor's graduate from{' '}
                <a
                    href="https://www.calpoly.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Cal Poly San Luis Obispo
                </a>{' '}
                I am actively seeking software engineering roles pertaining to
                systems, networks, and security. My professional journey
                includes hands-on experience in software engineering at{' '}
                <a
                    href="https://www.technipfmc.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    TechnipFMC
                </a>{' '}
                in the Davis, CA Schilling Robotics office, where I developed a
                nuanced understanding of the publish/subscribe model using DDS.
                This culminated in the creation of an API ready for integration
                into a C# Nuget Library. Additionally, my tenure as an IT
                Programmer at{' '}
                <a
                    href="#ApexSemiconductorLink"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Apex Semiconductor
                </a>{' '}
                in Santa Clara, CA allowed me to delve into Data Visualization
                and Disk Usage analysis, honing my skills in managing and
                presenting complex datasets. My academic rigor, combined with my
                practical experience, has instilled a robust adaptability to new
                technologies and challenges. I am enthusiastic about leveraging
                my expertise in API development, data visualization, and system
                optimizations in a dynamic team environment, contributing to
                innovative and impactful technological solutions.
            </p>
            <br />
            <div className="card-container">
                <Card
                    title="Software Projects"
                    description="Check out my software development projects."
                    imageUrl={softwareImage}
                    link="/software"
                />
                <Card
                    title="Embedded Projects"
                    description="Explore my embedded systems work."
                    imageUrl={embeddedImage}
                    link="/embedded"
                />
                <Card
                    title="AI Projects"
                    description="Discover my projects in Artificial Intelligence."
                    imageUrl={aiImage}
                    link="/ai"
                />
            </div>
        </div>
    );
}

export default Home;
