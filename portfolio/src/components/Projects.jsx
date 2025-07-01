import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: "SmartStock",
            description: "Desktop + Web app for stock management with real-time inventory tracking and reporting features.",
            technologies: ["Python", "SQL Server"],
            image: "/Designe_SmartStock.png"
        },
        {
            title: "Flight Ticket Booking App",
            description: "A modern web application for booking flight tickets with real-time availability and payment integration.",
            technologies: ["React", "Node.js", "MongoDB"],
            image: "/flightBooking.png"
        },
        {
            title: "GreenShop",
            description: "E-commerce website for eco-friendly products, built with React and Spring Boot.",
            technologies: ["React", "Spring Boot"],
            image: "GreenShop.png"
        },
        {
            title: "E-commerce Website (PFA - 3rd Year Engineering)",
            description: "A fully functional e-commerce website developed as part of my final project in the 3rd year at engineering university, utilizing the .NET framework for robust backend and modern frontend features.",
            technologies: [".NET", "C#", "Entity Framework", "SQL Server", "JavaScript", "HTML/CSS"],
            image: "EcommerceDotNET.png"
        }
    ];

    return (
        <section id="projects" className="min-h-screen py-16 bg-[#15171A] relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-10">
                    <h2 className="text-2xl font-bold text-white sm:text-3xl">
                        Featured Projects
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group bg-[#1a1d21]/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 border border-[#432371]/20"
                        >
                            <div className="relative h-32 bg-[#432371]/10">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-base font-semibold text-white mb-1.5">
                                    {project.title}
                                </h3>
                                <p className="text-xs text-white/70 mb-2.5 line-clamp-2">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-1.5">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-2 py-0.5 bg-[#432371]/20 text-white/90 rounded-full text-xs font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects; 