"use client";

import React from 'react';
import { motion } from 'framer-motion';

const CooperationSection = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white overflow-hidden relative">
            {/* Background decorators */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-20 -mr-20 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-20 -ml-20 -mb-20"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">招募与合作模式</h2>
                    <p className="text-xl text-blue-200">席位有限：一城一主，先到先得</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    <div>
                        <h3 className="text-2xl font-bold mb-6 flex items-center">
                            <i className="fas fa-user-check mr-3 text-blue-400"></i>
                            招募要求
                        </h3>
                        <ul className="space-y-4">
                            <li className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                                <span className="font-bold text-blue-300">认同愿景：</span>看好AI赛道，长期主义。
                            </li>
                            <li className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                                <span className="font-bold text-blue-300">资源匹配：</span>有B端客户或政府资源。
                            </li>
                            <li className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                                <span className="font-bold text-blue-300">超强执行：</span>说到做到，拿结果说话。
                            </li>
                            <li className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                                <span className="font-bold text-blue-300">资金实力：</span>具备启动资金，抗风险。
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold mb-6 flex items-center">
                            <i className="fas fa-coins mr-3 text-yellow-400"></i>
                            八大收益来源
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {['AI培训', 'AI工具', 'AI证书', 'AI研学', 'AI咨询', 'AI陪跑', 'AI外包', '政策补贴'].map((item, i) => (
                                <div key={i} className="bg-white/10 p-4 rounded-lg backdrop-blur-sm text-center font-medium hover:bg-white/20 transition-colors cursor-default">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-16">
                    <h3 className="text-2xl font-bold mb-10 text-center">加入流程</h3>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative">
                        {/* Connecting line for desktop */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -z-10"></div>

                        {[
                            { step: "01", title: "咨询", desc: "对接需求" },
                            { step: "02", title: "考察", desc: "实地探访" },
                            { step: "03", title: "签约", desc: "锁定区域" },
                            { step: "04", title: "培训", desc: "全员集训" },
                            { step: "05", title: "开业", desc: "流量导入" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05 }}
                                className="bg-gray-900 p-6 rounded-xl border border-gray-700 text-center w-full md:w-auto min-w-[140px]"
                            >
                                <div className="text-3xl font-bold text-blue-500 mb-2">{item.step}</div>
                                <div className="font-bold text-lg mb-1">{item.title}</div>
                                <div className="text-xs text-gray-400">{item.desc}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CooperationSection;
