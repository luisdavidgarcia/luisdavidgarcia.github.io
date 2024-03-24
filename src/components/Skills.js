import React from 'react';
import '../assets/styles/Skills.css';
import pythonLogo from '../assets/logo_images/python-logo.png';
import cppLogo from '../assets/logo_images/C++_Logo.png';
import cLogo from '../assets/logo_images/C_Logo.png';
import rustLogo from '../assets/logo_images/Rust-Logo.png';
import cSharpLogo from '../assets/logo_images/C-Sharp_Logo.png';
import javaLogo from '../assets/logo_images/Java-Logo.png';
import goLogo from '../assets/logo_images/go-logo.png';
import bashLogo from '../assets/logo_images/bashlogo.png';
import reactLogo from '../assets/logo_images/reactlogo.svg';
import htmlLogo from '../assets/logo_images/html5logo.jpg';
import cssLogo from '../assets/logo_images/csslogo.png';
import nodeJSLogo from '../assets/logo_images/nodelogo.svg';
import linuxLogo from '../assets/logo_images/Linux-Logo.png';
import gitLogo from '../assets/logo_images/gitlogo.png';
import vimLogo from '../assets/logo_images/Vim-Logo.png';
import stm32Logo from '../assets/logo_images/stm32-logo.jpg';
import raspberryPiLogo from '../assets/logo_images/raspberrypilogo.png';
import dockerLogo from '../assets/logo_images/docker_logo.svg';
import tensorflowLogo from '../assets/logo_images/tensorflow_logo.webp';
import kerasLogo from '../assets/logo_images/keras-logo.png';
import pytorchLogo from '../assets/logo_images/pytorchlogo.webp';

function Skills() {
    const skills = [
        { src: cppLogo, alt: 'C++', title: 'C++' },
        { src: cLogo, alt: 'C', title: 'C' },
        { src: pythonLogo, alt: 'Python', title: 'Python' },
        { src: rustLogo, alt: 'Rust', title: 'Rust' },
        { src: cSharpLogo, alt: 'C#', title: 'C#' },
        { src: javaLogo, alt: 'Java', title: 'Java' },
        { src: goLogo, alt: 'Go', title: 'Go'},
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
        { src: dockerLogo, alt: 'Docker', title: 'Docker'},
        { src: tensorflowLogo, alt: 'TensorFlow', title: 'TensorFlow' },
        { src: kerasLogo, alt: 'Keras', title: 'Keras' },
        { src: pytorchLogo, alt: 'PyTorch', title: 'PyTorch' },
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
