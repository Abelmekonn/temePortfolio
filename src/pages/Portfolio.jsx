import React, { useEffect } from 'react';
import { styles } from '../style/style';
import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import photo from "../assets/aboutpp.jpg"; // Your photo for the project
import bahran1 from "../assets/project/bahran/bahiran1.png"
import bahran2 from "../assets/project/bahran/bahiran2.png"
import bahran3 from "../assets/project/bahran/bahiran3.png"
import forum1 from "../assets/project/forum/forum.png"
import garage from "../assets/project/garage/garage.png"
import lms1 from "../assets/project/lms/elearning1.png"
import lms2 from "../assets/project/lms/lms2.png"
import lms3 from "../assets/project/lms/lms3.png"
import negarit1 from "../assets/project/negarit/negarit1.png"
import negarit2 from "../assets/project/negarit/negarit2.png"
import negarit3 from "../assets/project/negarit/negrati3.png"
import ScrollReveal from 'scrollreveal';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Updated project data to include techStack and multiple images
const projectData = [
    {
        id: 1,
        title: 'Abe Garage',
        subtitle: 'Full-stack garage web application',
        description: 'A comprehensive garage management system that includes vehicle management, customer orders, and service tracking.',
        imgSrc: [garage, garage, garage], // Multiple images
        githubLink: 'https://github.com/yourusername/abe-garage',
        livePreviewLink: 'https://abegarage.carmelmishel.com/',
        techStack: ['React', 'Node.js', 'MySQL', 'Express']
    },
    {
        id: 2,
        title: 'Evangadi Forum',
        subtitle: 'Community discussion platform',
        description: 'A platform for users to engage in discussions, post questions, and reply to others on various topics.',
        imgSrc: [forum1, photo, photo], // Multiple images
        githubLink: 'https://github.com/yourusername/evangadi-forum',
        livePreviewLink: 'https://forum-frontend-7wi.pages.dev/',
        techStack: ['React', 'Node.js', 'MongoDB', 'Express']
    },
    {
        id: 3,
        title: 'LMS (Learning Management System)',
        subtitle: 'Online course management platform',
        description: 'A platform to create, manage, and deliver online courses, including student management and assessments.',
        imgSrc: [lms1, lms2, lms3], // Multiple images
        githubLink: 'https://github.com/Abelmekonn/LMS',
        livePreviewLink: 'https://yourproject3.live',
        techStack: ['React', 'Node.js', 'MySQL', 'Express']
    },
    {
        id: 4,
        title: 'Bahran General Contractor',
        subtitle: 'Business website for a contracting company',
        description: 'A website for showcasing the services and projects of a general contracting company.',
        imgSrc: [bahran1, bahran2, bahran3], // Multiple images
        githubLink: 'https://github.com/Abelmekonn/BahiranGeneralConstructor',
        livePreviewLink: 'https://majestic-brigadeiros-25b5b0.netlify.app/',
        techStack: ['Next.js', 'Tailwind CSS', 'PostgreSQL']
    },
    {
        id: 5,
        title: 'NegaritBeats',
        subtitle: 'Music streaming and sharing platform',
        description: 'A music website that allows users to listen to tracks, create playlists, and share music with others.',
        imgSrc: [negarit1, negarit2, negarit3], // Multiple images
        githubLink: 'https://github.com/yourusername/negaritbeats',
        livePreviewLink: 'https://yourproject5.live',
        techStack: ['React', 'Node.js', 'MongoDB', 'Express']
    }
];


function Portfolio() {
    useEffect(() => {
        const sr = ScrollReveal({
            distance: '50px',
            duration: 1000,
            easing: 'ease-in-out',
            reset: false,
            viewFactor: 0.2, // Elements appear when 20% of them is visible
        });

        sr.reveal('.reveal-bottom', { origin: 'bottom', interval: 300 });
        sr.reveal('.reveal-left', { origin: 'left', interval: 300 });
        sr.reveal('.reveal-right', { origin: 'right', interval: 300 });
    }, []);
    return (
        <div id='portfolio' className="py-10 mt-20 relative md:w-[90%] mx-auto">
            <h1 className="text-4xl sm:text-5xl font-playfair font-bold text-white text-center mb-20">
                Portfolio
            </h1>
            <div className="mt-4 flex flex-col gap-20 relative">
                {projectData.map((project, index) => (
                    <div key={project.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 `}>
                        <div className={`px-10 md:w-full lg:w-1/2 flex justify-center ${index % 2 === 0 ? 'reveal-right' : 'reveal-left'}`}>
                            <div className="flex flex-col">
                                <h1 className="text-[#4FB7DC] text-3xl sm:text-4xl mb-5">{project.title}</h1>
                                <h2 className="text-white text-3xl sm:text-4xl font-bold mb-4">
                                    {project.subtitle}
                                </h2>
                                <p className="text-gray-500 text-lg sm:text-2xl font-medium mb-4">
                                    {project.description}
                                </p>
                                <div className="mt-4 mb-3">
                                    <h3 className="text-lg font-bold text-[#4FB7DC] mb-2">Tech Stack:</h3>
                                    <div className="flex gap-4 flex-wrap">
                                        {project.techStack.map((tech, idx) => (
                                            <a key={idx} href={`https://www.google.com/search?q=${tech}`} target="_blank" rel="noopener noreferrer" className="text-[#ebf7fb] text-lg hover:text-xl transition-all">
                                                {tech}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex gap-7 mt-4">
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-[#ebf7fb] text-lg border border-spacing-2.5 px-3 py-2 flex items-center gap-2 hover:text-xl transition-all">
                                        GitHub <FaGithub size={20} />
                                    </a>
                                    <a href={project.livePreviewLink} target="_blank" rel="noopener noreferrer" className="text-[#ebf7fb] border border-spacing-2.5 px-3 py-2 text-lg flex items-center gap-2 hover:text-xl transition-all">
                                        Live Preview Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={`md:w-full lg:w-1/2 flex h-[400px] justify-center px-10 relative mb-12 ${index % 2 === 0 ? 'reveal-left' : 'reveal-right'}`}>
                            <Carousel
                                showThumbs={false}
                                showStatus={false}
                                infiniteLoop
                                autoPlay
                                interval={3000}
                                className="w-full h-full"
                            >
                                {project.imgSrc.map((img, idx) => (
                                    <div key={idx}>
                                        <img src={img} alt={`Project ${project.id} - Image ${idx + 1}`} className="w-full h-[400px] object-cover rounded-xl shadow-lg" />
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;