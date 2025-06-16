import React from 'react';
import Slider from 'react-slick';
import '../assets/styles/Skills.css';
import pythonLogo from '../assets/logo_images/python-logo.png';
import cppLogo from '../assets/logo_images/C++_Logo.png';
import cLogo from '../assets/logo_images/C_Logo.png';
import rustLogo from '../assets/logo_images/Rust-Logo.png';
import bashLogo from '../assets/logo_images/bashlogo.png';
import linuxLogo from '../assets/logo_images/Linux-Logo.png';
import gitLogo from '../assets/logo_images/gitlogo.png';
import vimLogo from '../assets/logo_images/Vim-Logo.png';
import stm32Logo from '../assets/logo_images/stm32-logo.jpg';
import raspberryPiLogo from '../assets/logo_images/raspberrypilogo.png';
import dockerLogo from '../assets/logo_images/docker_logo.svg';
import pytorchLogo from '../assets/logo_images/pytorchlogo.webp';

function Skills() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    };

    const skills = {
        "Programming Languages": [
            { src: cppLogo, alt: 'C++', title: 'C++' },
            { src: cLogo, alt: 'C', title: 'C' },
            { src: pythonLogo, alt: 'Python', title: 'Python' },
            { src: rustLogo, alt: 'Rust', title: 'Rust' },
        ],
        "Tools & Technologies": [
            { src: bashLogo, alt: 'Bash', title: 'Bash' },
            { src: linuxLogo, alt: 'Linux', title: 'Linux' },
            { src: gitLogo, alt: 'Git', title: 'Git' },
            { src: vimLogo, alt: 'Vim', title: 'Vim' },
            { src: dockerLogo, alt: 'Docker', title: 'Docker'},
            { src: pytorchLogo, alt: 'PyTorch', title: 'PyTorch' }
        ],
        "Embedded Systems & Hardware": [
            { src: stm32Logo, alt: 'STM32', title: 'STM32' },
            { src: raspberryPiLogo, alt: 'Raspberry Pi', title: 'Raspberry Pi' },
        ],
    };

    return (
        <section className="skills-section">
            <h2>Programming Languages</h2>
            <Slider {...{...settings, slidesToShow: 4}}>
                {skills["Programming Languages"].map((skill, index) => (
                    <div key={index} className="skill-item">
                        <img src={skill.src} alt={skill.alt} />
                    </div>
                ))}
            </Slider>
            <h2>Machine Learning</h2>
            <Slider {...{...settings, slidesToShow: 3}}>
                {skills["Machine Learning"].map((skill, index) => (
                    <div key={index} className="skill-item">
                        <img src={skill.src} alt={skill.alt} />
                    </div>
                ))}
            </Slider>
            <h2>Tools & Technologies</h2>
            <Slider {...{...settings, slidesToShow: 4}}>
                {skills["Tools & Technologies"].map((skill, index) => (
                    <div key={index} className="skill-item">
                        <img src={skill.src} alt={skill.alt} />
                    </div>
                ))}
            </Slider>
            <h2>Embedded Systems & Hardware</h2>
            <Slider {...{...settings, slidesToShow: 2}}>
                {skills["Embedded Systems & Hardware"].map((skill, index) => (
                    <div key={index} className="skill-item">
                        <img src={skill.src} alt={skill.alt} />
                    </div>
                ))}
            </Slider>
        </section>
    );
}

export default Skills;
