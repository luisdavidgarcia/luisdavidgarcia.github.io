import React from 'react';
import Card from '../components/common/Card';
import myHeadShot from '../assets/images/Headshot.png';
import linkedInLogo from '../assets/images/linkedin.png';
import gitHubLogo from '../assets/images/github.png';
import emailLogo from '../assets/images/email.png';
import kaggleLogo from '../assets/images/kaggle.png';
import softwareImage from '../assets/images/software.avif';
import embeddedImage from '../assets/images/embedded.jpg';
import aiImage from '../assets/images/ai.jpg';
import '../assets/styles/Home.css';
import RecentWorks from '../components/common/RecentWorks';

function Home() {
    return (
        <div>
            <section className="about-section">
                <div className="about-short">
                    <h1>Luis David Garcia</h1>
                    <img
                        src={myHeadShot}
                        alt="Luis David Garcia"
                        className="headshot"
                    />
                    <p className="strength-statement">
                        My defining strength is my resilience, enabling me to
                        thrive in the rapidly evolving landscape of software
                        engineering and network systems, consistently delivering
                        innovative solutions even under challenging conditions.
                    </p>
                    <div className="profile-links">
                        <a
                            href="https://www.linkedin.com/in/luisgd/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={linkedInLogo}
                                alt="LinkedIn"
                                className="profile-logo"
                            />
                        </a>
                        <a
                            href="https://github.com/luisdavidgarcia"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={gitHubLogo}
                                alt="GitHub"
                                className="profile-logo"
                            />
                        </a>
                        <a href="mailto:your.luisdavidgarcia@protonmail.com">
                            <img
                                src={emailLogo}
                                alt="ProtonMail"
                                className="profile-logo"
                            />
                        </a>
                        <a
                            href="https://www.kaggle.com/rufusb98"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={kaggleLogo}
                                alt="Kaggle"
                                className="profile-logo"
                            />
                        </a>
                    </div>
                </div>
                <div className="about-long">
                    <h2>About</h2>
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
                        I am actively seeking software engineering roles
                        pertaining to systems, networks, and security. My
                        professional journey includes hands-on experience in
                        software engineering at{' '}
                        <a
                            href="https://www.technipfmc.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            TechnipFMC
                        </a>{' '}
                        in the Davis, CA Schilling Robotics office, where I
                        developed a nuanced understanding of the
                        publish/subscribe model using DDS. This culminated in
                        the creation of an API ready for integration into a C#
                        Nuget Library. Additionally, my tenure as an IT
                        Programmer at{' '}
                        <a
                            href="#ApexSemiconductorLink"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Apex Semiconductor
                        </a>{' '}
                        in Santa Clara, CA allowed me to delve into Data
                        Visualization and Disk Usage analysis, honing my skills
                        in managing and presenting complex datasets. My academic
                        rigor, combined with my practical experience, has
                        instilled a robust adaptability to new technologies and
                        challenges. I am enthusiastic about leveraging my
                        expertise in API development, data visualization, and
                        system optimizations in a dynamic team environment,
                        contributing to innovative and impactful technological
                        solutions.
                    </p>
                </div>
            </section>
            <section className="recent-works-section">
                <h2>Recent Works</h2>
                <RecentWorks
                    project1Title="Cook My Fridge"
                    project1Description="A brief description of the Cook My Fridge project."
                    project1URL="https://github.com/aahmadyar123/CookMyFridge"
                    project1Image="path_to_project1_image"
                    project2Title="Kinect Security Flask Server"
                    project2Description="A brief description of the Kinect Security Flask Server project."
                    project2URL="https://github.com/luisdavidgarcia/Kinect_Security_Flask_Server"
                    project2Image="path_to_project2_image"
                    project3Title="Caption This"
                    project3Description="A brief description of the Caption This project."
                    project3URL="https://github.com/luisdavidgarcia/CaptionThis"
                    project3Image="path_to_project3_image"
                />
            </section>
            <section className="skills-section">
                <h2>Skills</h2>
                {/* List or showcase of skills */}
            </section>
            <section className="projects-section">
                <h2>My Projects</h2>
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
            </section>
        </div>
    );
}

export default Home;
