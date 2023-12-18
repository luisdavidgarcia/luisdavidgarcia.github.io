import React from 'react';
import '../assets/styles/Skills.css';
import pythonLogo from '../assets/images/python-logo.png';
import cppLogo from '../assets/images/C++_Logo.png';
import cLogo from '../assets/images/C_Logo.png';
import rustLogo from '../assets/images/Rust-Logo.png';
import cSharpLogo from '../assets/images/C-Sharp_Logo.png';
import javaLogo from '../assets/images/Java-Logo.png';
import bashLogo from '../assets/images/bashlogo.png';
import reactLogo from '../assets/images/reactlogo.svg';
import htmlLogo from '../assets/images/html5logo.jpg';
import cssLogo from '../assets/images/csslogo.png';
import nodeJSLogo from '../assets/images/nodelogo.svg';
import linuxLogo from '../assets/images/Linux-Logo.png';
import gitLogo from '../assets/images/gitlogo.png';
import vimLogo from '../assets/images/Vim-Logo.png';
import stm32Logo from '../assets/images/stm32-logo.jpg';
import raspberryPiLogo from '../assets/images/raspberrypilogo.png';

function Skills() {
    const skills = [
        { src: cppLogo, alt: 'C++', title: 'C++' },
        { src: cLogo, alt: 'C', title: 'C' },
        { src: pythonLogo, alt: 'Python', title: 'Python' },
        { src: rustLogo, alt: 'Rust', title: 'Rust' },
        { src: cSharpLogo, alt: 'C#', title: 'C#' },
        { src: javaLogo, alt: 'Java', title: 'Java' },
        { src: bashLogo, alt: 'Bash', title: 'Bash' },
        { src: reactLogo, alt: 'React', title: 'React' },
        { src: htmlLogo, alt: 'HTML', title: 'HTML' },
        { src: cssLogo, alt: 'CSS', title: 'CSS' },
        { src: nodeJSLogo, alt: 'node.js', title: 'node.js' },
        { src: linuxLogo, alt: 'Linux', title: 'Linux' },
        { src: gitLogo, alt: 'Git', title: 'Git' },
        { src: vimLogo, alt: 'Vim', title: 'Vim' },
        { src: stm32Logo, alt: 'STM32', title: 'STM32' },
        { src: raspberryPiLogo, alt: 'Raspberry Pi', title: 'Raspberry Pi' },
    ];

    return (
        <section className="skills-section">
            <h2>Skills</h2>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                        <img src={skill.src} alt={skill.alt} />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
