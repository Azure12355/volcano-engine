"use client";

import React from 'react';
import { motion } from 'framer-motion';

const EcosystemSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">生态与产品矩阵</h2>
                    <p className="text-lg text-gray-600">打造企业AI落地的完整生态闭环</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    <div className="p-8 rounded-2xl bg-blue-50 border border-blue-100">
                        <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
                        <div className="text-gray-700 font-medium">头部生态伙伴</div>
                    </div>
                    <div className="p-8 rounded-2xl bg-purple-50 border border-purple-100">
                        <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
                        <div className="text-gray-700 font-medium">认证讲师</div>
                    </div>
                    <div className="p-8 rounded-2xl bg-green-50 border border-green-100">
                        <div className="text-4xl font-bold text-green-600 mb-2">2000+</div>
                        <div className="text-gray-700 font-medium">严选AI工具库</div>
                    </div>
                </div>

                <div className="mb-16">
                    <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">五位一体 · 全链路赋能</h3>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                        {['AI培训', 'AI证书', 'AI研学', 'AI工具', 'AI解决方案'].map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                className="bg-white p-6 rounded-xl shadow border border-gray-100 text-center flex flex-col items-center justify-center min-h-[140px]"
                            >
                                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mb-3 text-gray-600">
                                    <i className="fas fa-layer-group"></i>
                                </div>
                                <div className="font-bold text-gray-900">{item}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
                    <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">落地为王：实战数据</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="text-3xl font-bold text-gray-900 mb-1">ROI 1:5</div>
                            <div className="text-sm text-gray-500">投入产出比</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-gray-900 mb-1">效率 +30%</div>
                            <div className="text-sm text-gray-500">运营效率提升</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-gray-900 mb-1">成本 -50%</div>
                            <div className="text-sm text-gray-500">运营成本降低</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EcosystemSection;
