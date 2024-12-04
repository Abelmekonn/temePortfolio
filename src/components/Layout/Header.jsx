import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { styles } from '../../style/style';
import logo from '../../assets/temelogo.png';
import { HiMenuAlt3, HiX } from 'react-icons/hi'; // Import icons for hamburger and close

const Header = () => {
    const [isOpen, setIsOpen] = useState(false); // State to manage menu open/close

    return (
        <header className="lg:w-[70%] w-full mx-auto md:mt-5 pt-2 pb-2 text-white bg-opacity-25 fixed top-0 left-0 right-0 z-50 rounded-xl bg-slate-50 mb-14">
            <div className="flex px-4 justify-around items-center">
                {/* Logo Section */}
                <div className="w-[80px] h-[70px] font-bold self-center">
                    <img src={logo} alt="logo" className="h-full" />
                </div>

                {/* Hamburger Icon for mobile */}
                <div className="md:hidden absolute top-6 right-3 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
                </div>

                {/* Navigation Links - Hidden on small screens */}
                <nav className="hidden md:flex space-x-16 text-lg">
                    <Link smooth to="/#home" className="hover:text-[#4EB7DB]">Home</Link>
                    <Link smooth to="/#about" className="hover:text-[#4EB7DB]">About Me</Link>
                    <Link smooth to="/#portfolio" className="hover:text-[#4EB7DB]">Portfolio</Link>
                    <Link smooth to="/#services" className="hover:text-[#4EB7DB]">Services</Link>
                    <Link smooth to="/#experience" className="hover:text-[#4EB7DB]">Experience</Link>
                </nav>

                {/* Contact Button - Hidden on small screens */}
                <div className="hidden md:block">
                    <button className={`${styles.button}`}>
                        Contact Me
                    </button>
                </div>
            </div>

            {/* Mobile Menu - Shows only when `isOpen` is true */}
            {isOpen && (
                <div className="md:hidden absolute top-0 left-0 w-full h-auto bg-black bg-opacity-50 z-40 transition-all duration-300">
                    <div className="md:hidden absolute top-0 right-0 cursor-pointer self-center" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
                    </div>
                    <div className="w-full h-full bg-gray-900 text-white text-center py-12 space-y-6">
                        <nav className="space-y-4 text-lg">
                            <Link smooth to="/#home" className="block hover:text-[#4EB7DB]" onClick={() => setIsOpen(false)}>Home</Link>
                            <Link smooth to="/#about" className="block hover:text-[#4EB7DB]" onClick={() => setIsOpen(false)}>About Me</Link>
                            <Link smooth to="/#portfolio" className="block hover:text-[#4EB7DB]" onClick={() => setIsOpen(false)}>Portfolio</Link>
                            <Link smooth to="/#services" className="block hover:text-[#4EB7DB]" onClick={() => setIsOpen(false)}>Services</Link>
                            <Link smooth to="/#experience" className="block hover:text-[#4EB7DB]" onClick={() => setIsOpen(false)}>Experience</Link>
                        </nav>
                        <button className={`${styles.button} mt-6`} onClick={() => setIsOpen(false)}>
                            Contact Me
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
