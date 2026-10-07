"use client";

import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <section className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-gray-50">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.1),transparent_50%)]"></div>
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-blue-50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-t from-purple-50 to-transparent"></div>
            </div>

            <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-6"
                >
                    <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-6xl shadow-xl">
                        Z
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight mb-4">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                            智巨人
                        </span>
                    </h1>
                    <p className="text-2xl md:text-3xl font-medium text-gray-600 mb-2">
                        AI时代的商业新物种
                    </p>
                    <p className="text-xl md:text-2xl text-gray-500 font-light">
                        让小企业成为AI时代的小巨人
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-4 mt-8"
                >
                    <button className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
                        立即咨询
                    </button>
                    <button className="px-8 py-4 rounded-full bg-white text-gray-700 border border-gray-200 font-semibold text-lg hover:bg-gray-50 hover:border-gray-300 transition-all duration-300">
                        了解更多
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
