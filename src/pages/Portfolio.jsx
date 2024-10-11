import React from 'react';
import photo from "../assets/aboutpp.jpg";
import { styles } from '../style/style';
import { Link } from 'react-router-dom';
import { MdArrowForward } from 'react-icons/md';
function Portfolio() {
    return (
        <div id='portfolio' className="py-10 mt-20 relative w-[90%] mx-auto"> {/* Increased margin-top to avoid overlap */}
            <h1 className="text-4xl sm:text-5xl font-playfair font-bold text-white text-center mb-10">
                Portfolio
            </h1>
            <div className="mt-4 flex flex-col gap-20 relative">
                <div className="flex flex-col-reverse lg:flex-row gap-10">
                    <div className="px-10 md:w-full lg:w-1/2 flex justify-center">
                        <div className="my-auto">
                            <h1 className="text-[#4FB7DC] text-3xl sm:text-4xl mb-5">Project 1</h1>
                            <h2 className="text-white text-3xl sm:text-4xl font-bold mb-4">
                                Demo app for web
                            </h2>
                            <p className="text-gray-500 text-lg sm:text-2xl font-medium mb-4">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis deserunt laboriosam officiis voluptatem aperiam non amet dolor libero eius! Quae temporibus error consequuntur, animi dolorem ducimus incidunt ipsa omnis autem.
                            </p>
                            <Link to="#" className="text-[#ebf7fb] text-lg flex items-center hover:text-xl gap-1 transition-all hover:gap-3">
                                Read more <MdArrowForward size={30}/>
                            </Link>
                        </div>
                    </div>
                    <div className="md:w-full lg:w-1/2 flex justify-center px-10 relative mb-12">
                        <div className="w-full sm:hidden mt-12 h-[300px]  rounded-xl shadow-2xl border-[10px] sm:border-[12px] border-[#4FB7DC] absolute left-0">
                        </div>
                        <img
                            src={photo}
                            alt="Project 1"
                            className="z-50 w-full sm:w-[600px] h-[300px] sm:h-[400px] object-cover rounded-xl shadow-lg"
                        />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-10">
                    <div className="md:w-full lg:w-1/2 flex justify-center px-10 relative mb-12">
                        <div className="w-full sm:hidden mt-12 h-[300px]  rounded-xl shadow-2xl border-[10px] sm:border-[12px] border-[#4FB7DC] absolute right-0">
                        </div>
                        <img
                            src={photo}
                            alt="Project 2"
                            className="z-50 w-full sm:w-[600px] h-[300px] sm:h-[400px] object-cover rounded-xl shadow-lg"
                        />
                    </div>
                    <div className="px-10 md:w-full lg:w-1/2 flex justify-center">
                        <div className="my-auto">
                            <h1 className="text-[#4FB7DC] text-3xl sm:text-4xl mb-5">Project 2</h1>
                            <h2 className="text-white text-3xl sm:text-4xl font-bold mb-4">
                                Demo app for web
                            </h2>
                            <p className="text-gray-500 text-lg sm:text-2xl font-medium mb-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis deserunt laboriosam officiis voluptatem aperiam non amet dolor libero eius!
                            </p>
                            <Link to="#" className="text-[#ebf7fb] text-lg flex items-center hover:text-xl gap-1 transition-all hover:gap-3">
                                Read more <MdArrowForward size={30}/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-14">
                <button className={`${styles.button}`}>
                    <Link to="#projects">View all</Link>
                </button>
            </div>
        </div>
    );
}

export default Portfolio;
