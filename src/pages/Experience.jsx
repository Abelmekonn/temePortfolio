import React from 'react';

const techStack = [
    { name: 'HTML', icon: 'https://skillicons.dev/icons?i=html' },
    { name: 'CSS', icon: 'https://skillicons.dev/icons?i=css' },
    { name: 'Bootstrap', icon: 'https://skillicons.dev/icons?i=bootstrap' },
    { name: 'JavaScript', icon: 'https://skillicons.dev/icons?i=js' },
    { name: 'React', icon: 'https://skillicons.dev/icons?i=react' },
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
];

function Experience() {
    return (
        <div className="w-[90%] mx-auto py-10 mt-9">
            <h1 className="text-5xl font-playfair font-bold text-white text-center mb-10">
                Experience
            </h1>
            <br /><br />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 px-20">
                {techStack.map((tech, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <img src={tech.icon} alt={tech.name} className="w-20 h-20 mb-2" />
                        <p className="text-white text-lg font-medium">{tech.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experience;
