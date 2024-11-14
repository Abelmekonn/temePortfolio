import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const techStack = [
    { name: 'HTML', icon: 'https://skillicons.dev/icons?i=html' },
    { name: 'CSS', icon: 'https://skillicons.dev/icons?i=css' },
    { name: 'Bootstrap', icon: 'https://skillicons.dev/icons?i=bootstrap' },
    { name: 'JavaScript', icon: 'https://skillicons.dev/icons?i=js' },
    { name: 'React', icon: 'https://skillicons.dev/icons?i=react' },
    { name: 'Next', icon: 'https://skillicons.dev/icons?i=nextjs' },
    { name: 'Node.js', icon: 'https://skillicons.dev/icons?i=nodejs' },
    { name: 'Python', icon: 'https://skillicons.dev/icons?i=py' },
    { name: 'Django', icon: 'https://skillicons.dev/icons?i=django' },
    { name: 'Flask', icon: 'https://skillicons.dev/icons?i=flask' },
    { name: 'WordPress', icon: 'https://skillicons.dev/icons?i=wordpress' },
    { name: 'Git', icon: 'https://skillicons.dev/icons?i=git' },
    { name: 'GitHub', icon: 'https://skillicons.dev/icons?i=github' },
    { name: 'MongoDB', icon: 'https://skillicons.dev/icons?i=mongo' },
    { name: 'MySQL', icon: 'https://skillicons.dev/icons?i=mysql' },
    { name: 'VS Code', icon: 'https://skillicons.dev/icons?i=vscode' },
    { name: 'Postman', icon: 'https://skillicons.dev/icons?i=postman' },
    { name: 'Docker', icon: 'https://skillicons.dev/icons?i=docker' },

];

function Experience() {
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
        <div id='experience' className="w-[90%] mx-auto py-10 mt-9">
            <h1 className="text-5xl font-playfair font-bold text-white text-center mb-10">
                Experience
            </h1>

            {/* Work Experience Section */}
            <section className="mb-8">
                <h2 className="text-3xl font-semibold text-white mb-4">Work Experience</h2>
                <div className='flex md:flex-row flex-col  '>
                    <div className="text-white mb-4 reveal-left" >
                        <h3 className="text-xl font-bold">Backos Technologies Plc, Adama</h3>
                        <p className="italic text-xl my-3">Full Stack Developer Intern (Jul 2024 - Present)</p>
                        <div className="flex flex-col gap-4 relative px-4">
                            <div className="absolute  top-0  w-1 h-full left-0 bg-gray-300 z-0" style={{
                                background: 'linear-gradient(90deg, rgba(70,29,187,1) 0%, rgba(78,159,215,1) 100%)',
                                boxShadow: '0px 4px 20px rgba(70, 29, 187, 0.9)', // Border shadow effect
                            }}></div> {/* Timeline Line */}
                            <p>Engineered complex features for a school management platform, saving educators approximately 15 hours weekly.</p>
                            <p>Assisted in both frontend (React.js, Tailwind CSS) and backend (Node.js, Express.js, MySQL) development.</p>
                            <p>Integrated AWS services (EC2, S3) for scalability and security enhancements.</p>
                            <p>Contributed to optimizing load time by 300 milliseconds through code reviews.</p>
                        </div>
                    </div>
                    <div className="text-white reveal-right">
                        <h3 className="text-xl font-bold">Arba Minch University, Ethiopia</h3>
                        <p className="italic text-xl my-3">Full Stack Developer & Mentor (Oct 2023 - Present)</p>
                        <div className="flex flex-col gap-4 relative px-4">
                            <div className="absolute  top-0  w-1 h-full left-0 bg-gray-300 z-0" style={{
                                background: 'linear-gradient(90deg, rgba(70,29,187,1) 0%, rgba(78,159,215,1) 100%)',
                                boxShadow: '0px 4px 20px rgba(70, 29, 187, 0.9)', // Border shadow effect
                            }}></div> {/* Timeline Line */}
                            <p>Led a student team to develop a discussion forum using Node.js, React, and Tailwind CSS.</p>
                            <p>Built backend architecture with Node.js and Express.js for smooth communication with the frontend.</p>
                            <p>Implemented a peer review system, increasing code quality by 30%.</p>
                            <p>Conducted workshops for over 100 students on modern web development practices.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section className="mb-8 md:w-1/2 reveal-left">
                <h2 className="text-3xl font-semibold text-white mb-4">Education</h2>
                <div className="text-white">
                    <h3 className="text-xl my-3 font-bold">Arba Minch University</h3>
                    <div className='flex flex-col gap-4 relative px-4'>
                        <div className="absolute  top-0  w-1 h-full left-0 bg-gray-300 z-0" style={{
                            background: 'linear-gradient(90deg, rgba(70,29,187,1) 0%, rgba(78,159,215,1) 100%)',
                            boxShadow: '0px 4px 20px rgba(70, 29, 187, 0.9)', // Border shadow effect
                        }}></div> {/* Timeline Line */}
                        <p className="italic">B.E. in Software Engineering (Aug 2022 - Jun 2027)</p>
                        <p>CGPA: 3.71/4</p>
                        <p>Relevant Coursework: Object-Oriented Programming, Databases, Data Structures and Algorithms, Machine Learning, Data Mining, Advanced Algorithms, and Information Retrieval.</p>
                    </div>
                </div>
            </section>



            {/* Awards & Certificates Section */}
            <section className="mb-8 md:w-1/2 reveal-right">
                <h2 className="text-3xl font-semibold text-white mb-4">Awards & Certificates</h2>
                <div className="text-white mb-4 flex flex-col gap-4 relative px-4">
                    <div className="absolute  top-0  w-1 h-full left-0 bg-gray-300 z-0" style={{
                        background: 'linear-gradient(90deg, rgba(70,29,187,1) 0%, rgba(78,159,215,1) 100%)',
                        boxShadow: '0px 4px 20px rgba(70, 29, 187, 0.9)', // Border shadow effect
                    }}></div> {/* Timeline Line */}
                    <p>Certificate of Excellence from Arba Minch University for outstanding performance in Software Engineering (2023)</p>
                    <p>Top Performer Award at Evangadi Tech for excellence in full-stack web development (2024)</p>
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="mt-14">
                <h2 className="text-3xl font-semibold text-white text-center mb-6">Tech Stack</h2>
                <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 px-10 md:px-20">
                    {techStack.map((tech, index) => (
                        <div key={index} className="flex flex-col items-center reveal-bottom cursor-pointer ">
                            <img src={tech.icon} alt={tech.name} className="w-20 h-20 mb-2 hover:scale-110 transition-all duration-300" />
                            <p className="text-white text-lg font-medium">{tech.name}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Experience;
