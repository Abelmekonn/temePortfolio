import React from 'react';
import { styles } from '../style/style';
import photo from "../assets/aboutpp.jpg";

function About() {
    return (
        <div id='about' className='flex w-[90%] mx-auto flex-col md:flex-row  py-32 items-center justify-around gap-10 relative'>
            {/* Image Section */}
            <div className='md:w-1/2 sm:w-full flex relative px-10 mb-12'>
                <img
                    src={photo}
                    alt="About me"
                    className='z-50 w-[500px] h-[600px] object-cover rounded-xl shadow-lg '
                />
                <div className='w-[500px] mt-14 h-[600px] rounded-xl shadow-2xl border-[12px] border-[#4FB7DC] absolute right-0'>
                </div>
            </div>

            {/* Content Section */}
            <div className='md:w-1/2 sm:w-full px-6 text-center md:text-left flex flex-col gap-8 py-10'>
                <h1 className='text-4xl font-bold mb-4 text-white sm:mt-5 md:mt-0'>
                    About Me
                </h1>
                <p className='text-2xl font-medium sm:text-center md:text-left mb-6 text-gray-500'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis voluptatibus nihil libero inventore corrupti porro soluta reprehenderit maxime perferendis sed ut veniam natus est possimus vitae consequatur, cumque optio. Deserunt!
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis voluptatibus nihil libero inventore corrupti porro soluta reprehenderit maxime perferendis sed ut veniam natus est possimus vitae consequatur, cumque optio. Deserunt!
                </p>
                {/* Buttons Section */}
                <div className='w-full flex justify-around md:justify-start space-x-6'>
                    <button className={`${styles.button} py-6 px-20`}>
                        <a href='#'>Hire Me</a>
                    </button>
                    <button className='border border-[#1A35D1] px-20 py-6 text-white text-xl rounded-xl font-medium hover:bg-gradient-to-r hover:from-sky-custom hover:to-blue-custom transform transition-all duration-75'>
                        Resume
                    </button>
                </div>
            </div>
        </div>
    );
}

export default About;
