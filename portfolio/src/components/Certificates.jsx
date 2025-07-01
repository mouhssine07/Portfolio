import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BlurText from './BlurText';

const Certificates = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        { id: 'all', name: 'All Certificates' },
        { id: 'aws', name: 'AWS' },
        { id: 'ibm', name: 'IBM' },
        { id: 'coursera', name: 'Coursera' },
        { id: 'udemy', name: 'Udemy' },
        { id: 'other', name: 'Others' }
    ];

    const certificates = [
        {
            title: "Linux Shell Scripting & Vi Editor Mastery Course [2024] ! ",
            issuer: "Udemy",
            category: "udemy",
            date: "2023",
            image: "/LinuxShellUdemy.png",
            link: "https://www.udemy.com/certificate/UC-e08b63e9-1bb3-41e4-8dc5-baffd6794038/",
            description: "Master shell scripting and the Linux shell for automation through practical exercises and real-world challenges. Learn to create adaptable scripts with control structures, streamline system administration tasks, and integrate with tools like Visual Studio Code, GitHub, and Nmap. Additionally, enhance your text editing skills in Vi by mastering key commands and personalizing your workflow for greater efficiency."
        },
        {
            title: "Machine Learning Specialization",
            issuer: "Coursera",
            category: "coursera",
            date: "2023",
            image: "/certificates/ml.jpg",
            link: "https://www.coursera.org/account/accomplishments/specialization/123456",
            description: "Comprehensive machine learning course covering algorithms, neural networks, and deep learning"
        },
        {
            title: "AWS Cloud Practitioner",
            issuer: "Amazon Web Services",
            category: "aws",
            date: "2024",
            image: "/certificates/aws.jpg",
            link: "https://www.credly.com/badges/123456",
            description: "Foundational AWS cloud concepts, services, security, architecture, pricing, and support"
        },
        {
            title: "People and Soft Skills for Professional and Personal Success",
            issuer: "IBM",
            category: "ibm",
            date: "2024",
            image: "/PeopleAndSoftSkillsIBM.png",
            link: "https://www.credly.com/badges/123456",
            description: "Professional certification in data science, machine learning, and AI"
        },
        // Add more certificates as needed
    ];

    const filteredCertificates = selectedCategory === 'all' 
        ? certificates 
        : certificates.filter(cert => cert.category === selectedCategory);

    useEffect(() => {
        setCurrentIndex(0);
        let interval;
        if (isAutoPlaying && filteredCertificates.length > 0) {
            interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % filteredCertificates.length);
            }, 5000);
        }
        return () => clearInterval(interval);
    }, [isAutoPlaying, filteredCertificates.length, selectedCategory]);

    const handlePrev = () => {
        if (filteredCertificates.length === 0) return;
        setCurrentIndex((prev) => (prev - 1 + filteredCertificates.length) % filteredCertificates.length);
        setIsAutoPlaying(false);
    };

    const handleNext = () => {
        if (filteredCertificates.length === 0) return;
        setCurrentIndex((prev) => (prev + 1) % filteredCertificates.length);
        setIsAutoPlaying(false);
    };

    const handleCertificateClick = (link) => {
        window.open(link, '_blank');
    };

    const currentCertificate = filteredCertificates[currentIndex];

    return (
        <section id="certificates" className="py-20 bg-[#15171A] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <BlurText 
                        className="text-white/90"
                        text="Certificates"
                        delay={100}
                        animateBy="words"
                        direction="top"
                    />
                </div>

                {/* Category Selector */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <motion.button
                            key={category.id}
                            onClick={() => {
                                setSelectedCategory(category.id);
                                setIsAutoPlaying(false);
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                selectedCategory === category.id
                                    ? 'bg-[#432371] text-white'
                                    : 'bg-[#1E1E1E]/50 text-white/70 hover:bg-[#432371]/50'
                            }`}
                        >
                            {category.name}
                        </motion.button>
                    ))}
                </div>

                {filteredCertificates.length > 0 ? (
                    <div className="relative">
                        {/* Navigation Buttons */}
                        <button
                            onClick={handlePrev}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#432371]/80 hover:bg-[#432371] text-white p-3 rounded-full transition-all duration-300"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={handleNext}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#432371]/80 hover:bg-[#432371] text-white p-3 rounded-full transition-all duration-300"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Carousel */}
                        <div className="overflow-hidden">
                            <AnimatePresence mode="wait">
                                {currentCertificate && (
                                    <motion.div
                                        key={currentIndex}
                                        initial={{ opacity: 0, x: 100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -100 }}
                                        transition={{ duration: 0.5 }}
                                        className="bg-[#1E1E1E]/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 cursor-pointer"
                                        onClick={() => handleCertificateClick(currentCertificate.link)}
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                            <div className="relative aspect-video rounded-lg overflow-hidden">
                                                <img
                                                    src={currentCertificate.image}
                                                    alt={currentCertificate.title}
                                                    className="w-full h-full object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                            </div>
                                            <div className="space-y-4">
                                                <h3 className="text-2xl font-bold text-white/90">
                                                    {currentCertificate.title}
                                                </h3>
                                                <div className="flex items-center space-x-4 text-white/70">
                                                    <span>{currentCertificate.issuer}</span>
                                                    <span>•</span>
                                                    <span>{currentCertificate.date}</span>
                                                </div>
                                                <p className="text-white/60">
                                                    {currentCertificate.description}
                                                </p>
                                                <div className="flex items-center text-[#F7C9A0]">
                                                    <span className="mr-2">View Certificate</span>
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Dots Navigation */}
                        <div className="flex justify-center mt-8 space-x-2">
                            {filteredCertificates.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setCurrentIndex(index);
                                        setIsAutoPlaying(false);
                                    }}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                        index === currentIndex ? 'bg-[#F7C9A0] w-4' : 'bg-white/30'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-white/60">No certificates found in this category.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Certificates; 