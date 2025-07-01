import React from 'react';
import { motion } from 'framer-motion';
import FuzzyText from './FuzzyText';

const About = () => {
    return (
        <section id="about" className="py-20 bg-[#15171A]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <FuzzyText 
                        baseIntensity={0.2} 
                        hoverIntensity={0.5} 
                        enableHover={true}
                        fontSize="clamp(2.5rem, 6vw, 4rem)"
                        color="#F7C9A0"
                    >
                        About Me
                    </FuzzyText>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <h3 className="text-xl font-bold text-white/90">Who am I?</h3>
                        <p className="text-base text-white/70 leading-relaxed">
                            I am a passionate Computer Engineering student and web developer with a keen interest in creating modern, user-friendly applications. My journey in technology began with a curiosity about how things work, which led me to explore various aspects of software development.
                        </p>
                        <p className="text-base text-white/70 leading-relaxed">
                            I specialize in building responsive web applications using modern technologies like React, Node.js, and various other tools in the JavaScript ecosystem. My goal is to create applications that not only look great but also provide an exceptional user experience.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <h3 className="text-xl font-bold text-white/90">What I Do</h3>
                        <div className="space-y-3">
                            <div className="bg-[#432371]/10 p-5 rounded-lg">
                                <h4 className="text-lg font-semibold text-[#F7C9A0] mb-2">Web Development</h4>
                                <p className="text-sm text-white/70">
                                    Creating modern, responsive web applications with a focus on user experience and performance.
                                </p>
                            </div>
                            <div className="bg-[#432371]/10 p-5 rounded-lg">
                                <h4 className="text-lg font-semibold text-[#F7C9A0] mb-2">Mobile Development</h4>
                                <p className="text-sm text-white/70">
                                    Building cross-platform mobile applications using React Native and other modern frameworks.
                                </p>
                            </div>
                            <div className="bg-[#432371]/10 p-5 rounded-lg">
                                <h4 className="text-lg font-semibold text-[#F7C9A0] mb-2">UI/UX Design</h4>
                                <p className="text-sm text-white/70">
                                    Designing intuitive and engaging user interfaces that enhance the overall user experience.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About; 