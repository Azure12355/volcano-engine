"use client";

import React from 'react';
import { motion } from 'framer-motion';

const PainPointsSection = () => {
    const painPoints = [
        { title: "流量贵", desc: "公域流量枯竭，获客成本(CAC)激增，投产比(ROI)断崖式下跌。", icon: "fas fa-money-bill-wave" },
        { title: "成本高", desc: "人力、房租硬性支出不断上涨，企业利润薄如刀片。", icon: "fas fa-arrow-trend-up" },
        { title: "效率低", desc: "传统人工模式响应慢、易出错，正在被AI武装的同行降维打击。", icon: "fas fa-hourglass-half" }
    ];

    const barriers = [
        { title: "找不到", sub: "Can't Find", desc: "工具海量，信息过载，难以甄别适合的AI应用。" },
        { title: "玩不转", sub: "Can't Master", desc: "技术门槛高，学习成本大，缺乏专业指导。" },
        { title: "用不好", sub: "Can't Use Well", desc: "通用工具与业务场景不匹配，缺乏深度陪跑服务。" },
        { title: "不敢信", sub: "Dare Not Believe", desc: "市场鱼龙混杂，效果承诺难兑现，决策风险高。" }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900"
                    >
                        中小企业的生死局：不转型，就淘汰
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {painPoints.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow"
                            >
                                <div className="text-red-500 text-4xl mb-4"><i className={item.icon}></i></div>
                                <h3 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900"
                    >
                        AI落地的四大拦路虎
                    </motion.h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {barriers.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-6 rounded-xl border-l-4 border-red-500 shadow-sm"
                            >
                                <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                                <span className="text-xs font-uppercase text-gray-400 tracking-wider block mb-3">{item.sub}</span>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PainPointsSection;
