import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#15171A] text-white py-8 border-t border-[#432371]/20">
            <div className=" mx-auto px-4 sm:px-6 lg:px-8">
                <div className=" items-center text-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-white/80">
                            © {new Date().getFullYear()} Mouhssine Jaiba. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 