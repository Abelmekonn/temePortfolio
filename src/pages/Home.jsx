import React, { useEffect } from 'react';
import { styles } from '../style/style';
import img from '../assets/temepp.jpg';
import ScrollReveal from 'scrollreveal';

function Home() {

    useEffect(() => {
        const sr = ScrollReveal({
            distance: '50px',
            duration: 1000,
            easing: 'ease-in-out',
            reset: false,
            viewFactor: 0.2, // Elements appear when 20% of them is visible
        });

        sr.reveal('.reveal-bottom', { origin: 'bottom', interval: 200 });
        sr.reveal('.reveal-left', { origin: 'left', interval: 200 });
        sr.reveal('.reveal-right', { origin: 'right', interval: 300 });
    }, []);
    
    return (
        <div id="home" className="text-white py-10 relative w-[90%] mx-auto mt-24 flex flex-col-reverse md:flex-row items-center md:items-start md:space-x-10">
            {/* Text Section */}
            <div className="md:w-[60%] self-center flex flex-col items-start mb-6 md:mb-0 reveal-left">
                <h1 className="hello text-4xl sm:text-5xl md:text-7xl font-bold mb-4">
                    Hello! <br /> My name is <span className="name text-[#4EB7DB]">Temesgen</span>
                </h1>
                <h3 className="my-profession text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
                    I am a <span className="typing text-[#4EB7DB]">Full Stack Developer</span>
                </h3>
                <p className="mulish text-base sm:text-lg text-slate-400 mb-6">
                    A passionate Developer based in USA. 📍
                </p>
                <button className={`${styles.button} px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base`}>
                    <a href="#portfolio">Previous Projects</a>
                </button>
            </div>

            {/* Image Section with Fluid Animated Border */}
            <div className="md:w-[40%] h-auto flex justify-center relative mb-10 reveal-right">
                <div className="border-[#66b1cc] border-[8px] sm:border-[10px] rounded-full p-1 sm:p-2">
                    <img src={img} alt="Profile" className="profile-img max-h-52 sm:max-h-72 md:max-h-96 object-cover rounded-full" />
                </div>
            </div>
        </div>
    );
}

export default Home;
