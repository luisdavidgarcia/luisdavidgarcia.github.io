import React from 'react';
import Card from '../components/common/Card';

const embeddedProjects = [
    {
        title: "RememberIt!",
        description: "An interactive STM32-based memory game. Enhance your memory skills using a Nucleo-L476RG board, joystick, and touch LCD. Fun and challenging for all ages!",
        imageUrl: "https://lh3.googleusercontent.com/drive-viewer/AEYmBYQiKhcyZOndulOzkhjDBaHysKCGVM1kzFBzGwpRzApyDX7EQHsqKCHvyOvrmOSVrEo_uHkNHThPjtPs0T8XDNl7Nw8YGA=s1600",
        link: "https://github.com/luisdavidgarcia/RememberIt"
    },
    {
        title: "Levitating AirPod Holder ",
        description: "Experience the enchantment of the Levitating AirPod Holder, a unique Rube Goldberg project with a piano sequence-triggered electromagnet, to magically suspend your AirPods in mid-air.",
        imageUrl: "https://lh3.googleusercontent.com/drive-viewer/AEYmBYQPaNv4944Ro2_C3oz_34HdF-9-W7alX5Zzz833tsNCHBtYYvWGlSWS2qdMkHTFvD9Y1bK9deKqHqmfm8R7jZvBEed3=s1600",
        link: "https://github.com/luisdavidgarcia/Levitating-AirPod-Holder"
    },
    {
        title: "8Bit 2 ASCII",
        description: "System Verilog and Arduino Code that lets the user enter and send 8-bit binary using the Basys 3 switches and buttons to be converted to ASCII and displayed on an LCD.",
        imageUrl: "https://lh3.googleusercontent.com/drive-viewer/AEYmBYRi1B1g8QVbYdknFZLj46sxw3zPhpwtDusosHYHEKnzRDg9W8oEROcFTNgxPNcpM_Wb0IeuGjQHCb4gumt1IjUa-5mQwQ=s1600",
        link: "https://github.com/luisdavidgarcia/8Bit_2_ASCII"
    },
    {
        title: "Arduino Robot Car",
        description: "Discover my Arduino-powered line tracking robot, meticulously calibrated for precision and with a built-in obstacle detection and a modular C++ codebase.",
        imageUrl: "https://lh3.googleusercontent.com/drive-viewer/AEYmBYQ87FiKM_2tO1jTF4ErvJCJezOrR8VaXprKJ1UlNkIvQfup5g5lyqSTrRGFqwKR1lMgJogb4BCuywR-flFFypbQV0xLuw=s1600",
        link: "https://github.com/luisdavidgarcia/Arduino_LineTracking_Robot"
    },
    {
        title: "Kinect Security Camera",
        description: "Xbox 360 Kinect into a real-time webcam with this innovative project. Leveraging Flask, OpenCV2, and Kinect USB Adapter, it streams Kinect footage through a web app.",
        imageUrl: "https://lh3.googleusercontent.com/drive-viewer/AEYmBYRZycY9Tsy_d1Jy1tZ8QhMfUYAGbwJTB39t94BMZr-zTy3SdqFwhHzj4IUuUZBwXuIqn-4d5t759fAEF8HkiEkucXYrkw=s1600",
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
