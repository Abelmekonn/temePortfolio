import React, { useEffect } from 'react';
import { styles } from '../style/style';
import photo from "../assets/IMG_8713 (2).jpg";
import ScrollReveal from 'scrollreveal';

function About() {
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
        <div id='about' className='flex w-[90%] mx-auto flex-col md:flex-row py-20 items-center justify-around gap-10 relative'>
            {/* Image Section */}
            <div className='md:w-1/2 sm:w-full flex relative px-6 mb-8 reveal-left'>
                <img
                    src={photo}
                    alt="About me"
                    className='z-30 w-[250px] sm:w-[300px] md:w-[400px] h-[350px] sm:h-[400px] md:h-[500px] object-cover rounded-xl shadow-lg'
                />
                <div className='w-[250px] reveal-right sm:w-[300px] md:w-[400px] mt-8 sm:mt-10 md:mt-14 h-[350px] sm:h-[400px] md:h-[500px] rounded-xl shadow-2xl border-[8px] sm:border-[10px] md:border-[12px] border-[#4FB7DC] hidden md:block absolute right-4 md:right-8'>
                </div>
            </div>

            {/* Content Section */}
            <div className='md:w-1/2 sm:w-full px-4 sm:px-6 md:text-left flex flex-col gap-6 py-8 reveal-right'>
                <h1 className='text-3xl sm:text-4xl font-bold mb-4 text-white sm:mt-5 md:mt-0'>
                    About Me
                </h1>
                <p className='text-base sm:text-lg md:text-2xl font-medium md:text-left mb-4 text-gray-500'>
                    Hello! I'm Abel, a passionate Front-end Developer and Web Designer based in Adama, Ethiopia. I specialize in creating dynamic and visually appealing websites and applications with a focus on user experience and functionality. With a strong foundation in React, JavaScript, and CSS, I enjoy bringing creative ideas to life in the digital space.
                    <br /><br />
                    My journey into web development began out of a fascination with technology and a drive to continuously learn and grow in this ever-evolving field. I am always eager to embrace new challenges and am committed to delivering high-quality projects that make a positive impact.
                </p>
                {/* Buttons Section */}
                <div className='w-full flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 reveal-bottom'>
                    <button className={`${styles.button} px-10 py-3 sm:px-16 sm:py-4 text-sm sm:text-base`}>
                        <a href='#'>Hire Me</a>
                    </button>
                    <a 
                        href='https://drive.google.com/file/d/1rTUOlqINencRbVZ6tbGbDLkYBRopGJcB/view?usp=drivesdk' 
                        target='_blank' 
                        rel='noopener noreferrer'
                        className='border border-[#1A35D1] px-10 py-3 sm:px-16 sm:py-4 text-sm sm:text-base text-white rounded-xl font-medium hover:bg-gradient-to-r hover:from-sky-custom hover:to-blue-custom transform transition-all duration-75 text-center'
                    >
                        Resume
                    </a>
                </div>
            </div>
        </div>
    );
}

export default About;
