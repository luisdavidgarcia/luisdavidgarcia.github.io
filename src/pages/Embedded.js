import React from 'react';
import Card from '../components/common/Card';

const embeddedProjects = [
    {
        title: "RememberIt!",
        description: "An interactive STM32-based memory game. Enhance your memory skills using a Nucleo-L476RG board, joystick, and touch LCD. Fun and challenging for all ages!",
        imageUrl: "https://drive.google.com/uc?id=1RNY90Vum16kkLnX-MzoBHLa5w3CMPo_X",
        link: "https://github.com/luisdavidgarcia/RememberIt"
    },
    {
        title: "Levitating AirPod Holder ",
        description: "Experience the enchantment of the Levitating AirPod Holder, a unique Rube Goldberg project with a piano sequence-triggered electromagnet, to magically suspend your AirPods in mid-air.",
        imageUrl: "https://drive.google.com/uc?id=1SxWwDlZ_CABKZA6D3KLmXNR27QOiPHEj",
        link: "https://github.com/luisdavidgarcia/Levitating-AirPod-Holder"
    },
    {
        title: "8Bit 2 ASCII",
        description: "System Verilog and Arduino Code that lets the user enter and send 8-bit binary using the Basys 3 switches and buttons to be converted to ASCII and displayed on an LCD.",
        imageUrl: "https://drive.google.com/uc?id=1b_crWCfa9pBCKkW1eiUvcHOk5aLyy3c1",
        link: "https://github.com/luisdavidgarcia/8Bit_2_ASCII"
    },
    {
        title: "Arduino Robot Car",
        description: "Discover my Arduino-powered line tracking robot, meticulously calibrated for precision and with a built-in obstacle detection and a modular C++ codebase.",
        imageUrl: "https://drive.google.com/uc?id=1DGSb5HpafvXAAXUFxh9N4C25Zl6Rxh37",
        link: "https://github.com/luisdavidgarcia/Arduino_LineTracking_Robot"
    },
    {
        title: "Kinect Security Camera",
        description: "Xbox 360 Kinect into a real-time webcam with this innovative project. Leveraging Flask, OpenCV2, and Kinect USB Adapter, it streams Kinect footage through a web app. ",
        imageUrl: "https://drive.google.com/uc?id=1LHEa1Iy886dhJ7Urnuqdsfm9EGUuWkx0",
        link: "https://github.com/luisdavidgarcia/Kinect_Security_Flask_Server"
    },
];

function Embedded() {
    return (
        <div>
            <h1>Embedded Projects</h1>
            <div className="card-container">
                {embeddedProjects.map((project, index) => (
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

export default Embedded;
