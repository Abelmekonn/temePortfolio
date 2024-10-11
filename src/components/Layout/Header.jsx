import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../../style/style';
import logo from "../../assets/logo.png";
import { HiMenuAlt3, HiX } from 'react-icons/hi'; // Import icons for hamburger and close

const Header = () => {
    const [isOpen, setIsOpen] = useState(false); // State to manage menu open/close

    return (
        <header className="w-[90%] mx-auto pt-10 pb-8 text-white relative mb-14">
            <div className="flex justify-between items-center">
                {/* Logo Section */}
                <div className="w-[60px] h-[70px] font-bold self-center">
                    <img src={logo} alt="logo" className="h-full" />
                </div>

                {/* Hamburger Icon for mobile */}
                <div className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
                </div>

                {/* Navigation Links - Hidden on small screens */}
                <nav className="hidden md:flex space-x-16 text-lg">
                    <Link to="/" className="hover:text-[#4EB7DB]">Home</Link>
                    <Link to="/about" className="hover:text-[#4EB7DB]">About Me</Link>
                    <Link to="/portfolio" className="hover:text-[#4EB7DB]">Portfolio</Link>
                    <Link to="/services" className="hover:text-[#4EB7DB]">Services</Link>
                    <Link to="/experience" className="hover:text-[#4EB7DB]">Experience</Link>
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
                <div className="md:hidden absolute top-20 left-0 w-full bg-gray-900 text-center py-4">
                    <nav className="space-y-4 text-lg">
                        <Link to="/" className="block hover:text-[#4EB7DB]" onClick={() => setIsOpen(false)}>Home</Link>
                        <Link to="/about" className="block hover:text-[#4EB7DB]" onClick={() => setIsOpen(false)}>About Me</Link>
                        <Link to="/portfolio" className="block hover:text-[#4EB7DB]" onClick={() => setIsOpen(false)}>Portfolio</Link>
                        <Link to="/services" className="block hover:text-[#4EB7DB]" onClick={() => setIsOpen(false)}>Services</Link>
                        <Link to="/experience" className="block hover:text-[#4EB7DB]" onClick={() => setIsOpen(false)}>Experience</Link>
                    </nav>
                    <button className={`${styles.button} mt-6`}>
                        Contact Me
                    </button>
                </div>
            )}
        </header>
    );
};

export default Header;
