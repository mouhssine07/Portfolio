import React from 'react';
import Waves from './Waves';
import BlurText from "./BlurText";


const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#15171A] to-[#432371]/5 relative overflow-hidden">
            <Waves
                lineColor="#432371"
                backgroundColor="rgba(21, 23, 26, 0.8)"
                waveSpeedX={0.02}
                waveSpeedY={0.01}
                waveAmpX={40}
                waveAmpY={20}
                friction={0.9}
                tension={0.01}
                maxCursorMove={120}
                xGap={12}
                yGap={36}
            />
            
           
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
                <div className="text-center">
                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                        <BlurText 
                            className="text-white/90"
                            text="Hi, I am"
                            delay={100}
                            animateBy="words"
                            direction="top"
                        />
                        <BlurText 
                            className="text-[#F7C9A0]"
                            text="Mouhssine Jaiba"
                            delay={300}
                            animateBy="words"
                            direction="top"
                        />
                    </div>
                    <h2 className="text-lg sm:text-xl md:text-2xl text-white/80 mb-6 font-light tracking-wide">
                        Computer Engineering Student & Web Developer
                    </h2>
                    <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                        I love creating modern web and mobile applications. I enjoy learning new technologies and building useful apps like SmartStock.
                    </p>
                    <a
                        href="/Professional_Modern_CV_Resume.pdf"
                        download
                        className=" cursor-default inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-[#432371] to-[#432371]/80   transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >


                            
                        <button>Download my CV</button>

                        <svg
                            className="ml-2 -mr-1 w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                            />
                        </svg>
                        
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero; 