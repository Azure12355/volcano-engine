"use client";

import React from 'react';
import { motion } from 'framer-motion';

const SolutionSection = () => {
    return (
        <section className="py-20 bg-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-50 z-0"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-4xl font-bold mb-6 text-gray-900">
                            智巨人：<br />
                            <span className="text-blue-600">填补真空的超级连接器</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            定位：连接AI技术与中小企业需求的超级平台。
                            <br /><br />
                            我们打通海量AI工具与顶尖技术，经过核心筛选与适配，最终落地到千万中小企业的迫切转型需求中。
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl mr-4">
                                    <i className="fas fa-bullseye"></i>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900">使命</h4>
                                    <p className="text-gray-600">让小企业成为AI时代的小巨人</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-xl mr-4">
                                    <i className="fas fa-eye"></i>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900">愿景</h4>
                                    <p className="text-gray-600">中国领先的AI应用聚合平台与全链路服务商</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 flex justify-center"
                    >
                        <div className="relative w-full max-w-md aspect-square rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-8 animate-pulse-slow">
                            <div className="w-full h-full bg-white rounded-full shadow-2xl flex flex-col items-center justify-center text-center p-8 border border-gray-100">
                                <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-2">Z</div>
                                <h3 className="text-2xl font-bold text-gray-800">智巨人</h3>
                                <div className="mt-4 text-sm text-gray-500">体验 · 应用 · 解决方案</div>
                                <div className="text-sm text-gray-500">落地 · 陪练 · 孵化</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SolutionSection;
