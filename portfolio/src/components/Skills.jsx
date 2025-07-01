import React from 'react';
import { motion } from 'framer-motion';
import FuzzyText from './FuzzyText';

const Skills = () => {
    const skills = [
        {
            category: "Frontend Development",
            items: [
                { name: "React", level: 90 },
                { name: "JavaScript", level: 85 },
                { name: "HTML/CSS", level: 90 },
                { name: "Tailwind CSS", level: 85 }
            ]
        },
        {
            category: "Backend Development",
            items: [
                { name: "Spring Boot", level: 80 },
                { name: "Java", level: 70 },
                { name: "Django", level: 75 },
                { name: "Node.js", level: 60 }
            ]
        },
        {
            category: "Database & Tools",
            items: [
                { name: "SqlServer", level: 80 },
                { name: "MySQL", level: 75 },
                { name: "Git", level: 85 },
                { name: "Docker", level: 70 }
            ]
        }
    ];

    return (
        <section id="skills" className="py-20 bg-[#15171A] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <FuzzyText 
                        baseIntensity={0.2} 
                        hoverIntensity={0.5} 
                        enableHover={true}
                        fontSize="clamp(1rem, 5vw, 4rem)"
                        color="#F7C9A0"
                    >
                        Skills & Expertise
                    </FuzzyText>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((category, index) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-[#432371]/10 p-8 rounded-2xl backdrop-blur-sm"
                        >
                            <h3 className="text-2xl font-bold text-white/90 mb-6">{category.category}</h3>
                            <div className="space-y-6">
                                {category.items.map((skill) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-white/70">{skill.name}</span>
                                            <span className="text-[#F7C9A0]">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 bg-[#432371]/20 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1, delay: 0.5 }}
                                                viewport={{ once: true }}
                                                className="h-full bg-gradient-to-r from-[#432371] to-[#F7C9A0] rounded-full"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills; 