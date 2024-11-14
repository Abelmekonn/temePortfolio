import React, { useEffect } from 'react';
import { FaDatabase, FaServer, FaLaptopCode, FaCloud } from 'react-icons/fa'; // Import relevant icons
import ScrollReveal from 'scrollreveal';

const servicesData = [
    {
        icon: <FaLaptopCode size={50} className="text-white" />,
        title: 'Full-Stack Web Development',
        description: 'I provide end-to-end web development services, from building intuitive front-end interfaces to creating secure, scalable back-end systems. Using the latest technologies, I create robust web applications that align with your business needs, ensuring seamless integration and exceptional user experiences.',
    },
    {
        icon: <FaServer size={50} className="text-white" />,
        title: 'Backend Development & APIs',
        description: 'Specializing in backend architecture, I design and implement reliable server-side logic, API endpoints, and data processing. I focus on creating efficient, secure, and scalable backend solutions that enhance functionality and provide a smooth experience across multiple devices and platforms.',
    },
    {
        icon: <FaDatabase size={50} className="text-white" />,
        title: 'Database Management & Optimization',
        description: 'With expertise in both SQL and NoSQL databases, I build, optimize, and maintain data structures that ensure data integrity, quick access, and high performance. Whether handling large-scale data or optimizing queries, I design database solutions that support your application’s goals and scalability.',
    },
    {
        icon: <FaCloud size={50} className="text-white" />,
        title: 'DevOps & Deployment',
        description: 'I manage deployment and infrastructure, including cloud services and CI/CD pipelines, to ensure your application is secure, scalable, and highly available. With expertise in containerization, automated deployment, and monitoring, I streamline the deployment process and ensure a seamless transition from development to production.',
    },
];

function Service() {
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
        <div id='services' className='py-10 mt-9 w-[90%] mx-auto'>
            <h1 className='text-5xl font-playfair font-bold text-white text-center mb-10'>
                Services
            </h1>
            <br /><br />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-16 justify-items-center items-center px-20 mt-10'>
                {servicesData.map((service, index) => (
                    <div
                        key={index}
                        className={`rounded-xl shadow-2xl p-[6px] ${index % 2 === 0 ? 'reveal-left' : 'reveal-right'}`} // Outer container with padding
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
