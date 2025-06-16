import React from 'react';
import Card from '../components/common/Card';
import myHeadShot from '../assets/logo_images/Headshot.png';
import linkedInLogo from '../assets/logo_images/linkedin.png';
import gitHubLogo from '../assets/logo_images/github.png';
import emailLogo from '../assets/logo_images/email.png';
import kaggleLogo from '../assets/logo_images/kaggle.png';
import softwareImage from '../assets/logo_images/software.avif';
import embeddedImage from '../assets/logo_images/embedded.jpg';
import aiImage from '../assets/logo_images/ai.jpg';
import '../assets/styles/Home.css';
import RecentWorks from '../components/RecentWorks';
import Skills from '../components/Skills';
import aiProjects from '../data/aiProjects';
import strengthStatement from '../data/strengthStatement';
import missionStatement from '../data/missionStatement';

function Home() {
    const selectedProjects = aiProjects.slice(0, 3);

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
                        {strengthStatement}
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
                        {missionStatement}
                    </p>
                </div>
            </section>
            <section className="recent-works-section">
                <RecentWorks
                    project1Title={selectedProjects[0].title}
                    project1Description={selectedProjects[0].description}
                    project1URL={selectedProjects[0].link}
                    project1Image={selectedProjects[0].imageUrl}

                    project2Title={selectedProjects[1].title}
                    project2Description={selectedProjects[1].description}
                    project2URL={selectedProjects[1].link}
                    project2Image={selectedProjects[1].imageUrl}

                    project3Title={selectedProjects[2].title}
                    project3Description={selectedProjects[2].description}
                    project3URL={selectedProjects[2].link}
                    project3Image={selectedProjects[2].imageUrl}
                />
            </section>
            <br />
            <section className="skills-section">
                <Skills />
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
            <br />
        </div>
    );
}

export default Home;
