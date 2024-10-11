import React from 'react';
import { FaCode, FaMobileAlt, FaPaintBrush } from 'react-icons/fa'; // Import icons

const servicesData = [
    {
        icon: <FaCode size={50} className="text-white" />,
        title: 'Web Development',
        description: 'We specialize in building responsive, secure, and scalable web applications using the latest technologies. From single-page applications to full-featured web platforms, we deliver solutions tailored to your specific business needs. Our web development services cover front-end, back-end, and everything in between, ensuring a seamless and powerful digital presence.',
    },
    {
        icon: <FaMobileAlt size={50} className="text-white" />,
        title: 'Mobile App Development',
        description: 'Our team creates high-quality, cross-platform mobile applications that run smoothly on both iOS and Android devices. We focus on user experience, performance, and functionality to deliver apps that are both beautiful and intuitive. Whether you need a business app, an e-commerce platform, or a social networking solution, we have the expertise to bring your idea to life.',
    },
    {
        icon: <FaPaintBrush size={50} className="text-white" />,
        title: 'UI/UX Design',
        description: 'Design is more than just aesthetics—it’s about solving problems and creating experiences. We design user interfaces and experiences that are not only visually appealing but also user-friendly and efficient. We take a user-centric approach to design, ensuring your digital products look great and provide an intuitive and enjoyable experience for your customers.',
    },
];

function Service() {
    return (
        <div className='py-10 mt-9 w-[90%] mx-auto'>
            <h1 className='text-5xl font-playfair font-bold text-white text-center mb-10'>
                Services
            </h1>
            <br /><br />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-16 justify-items-center items-center px-20 mt-10'>
                {servicesData.map((service, index) => (
                    <div
                        key={index}
                        className='rounded-xl shadow-2xl p-[6px]' // Outer container with padding
                        style={{
                            background: 'linear-gradient(90deg, rgba(70,29,187,1) 0%, rgba(78,159,215,1) 100%)',
                            boxShadow: '0px 4px 20px rgba(70, 29, 187, 0.9)', // Border shadow effect
                        }}
                    >
                        <div className='bg-[#101630] rounded-lg p-8'> {/* Inner content */}
                            <div className='flex gap-4'>
                                <div className='mb-4'>{service.icon}</div>
                                <h2 className='text-2xl text-white self-center font-bold mb-2'>{service.title}</h2>
                            </div>
                            <p className='text-gray-300'>{service.description}</p> {/* Adjusted text color */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Service;
