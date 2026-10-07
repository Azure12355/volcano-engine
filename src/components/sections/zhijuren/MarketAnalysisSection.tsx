"use client";

import React from 'react';
import { motion } from 'framer-motion';

const MarketAnalysisSection = () => {
    const cards = [
        {
            title: "万亿蓝海",
            subtitle: "AI应用大爆炸",
            description: "全球AI市场规模预计2027年突破万亿美元。中国成为核心增长极，工具爆发式增长。",
            icon: "fas fa-chart-line",
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: "国家意志",
            subtitle: "政策红利",
            description: "从中央到地方政策密集出台，专项补贴支持企业数字化转型与AI应用落地。",
            icon: "fas fa-landmark",
            color: "from-purple-500 to-pink-500"
        },
        {
            title: "AI革命",
            subtitle: "世纪大竞赛",
            description: "事关国运的世纪大竞赛。率先使用AI工具的人，将会替代那些拒绝改变的人。",
            icon: "fas fa-rocket",
            color: "from-orange-500 to-red-500"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">市场背景与趋势</h2>
                    <p className="text-lg text-gray-600">为什么现在是入局的最佳时机？</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                        >
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${card.color} opacity-10 rounded-bl-full -mr-8 -mt-8 group-hover:scale-150 transition-transform duration-500`}></div>

                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center text-white text-2xl mb-6 shadow-md`}>
                                <i className={card.icon}></i>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{card.title}</h3>
                            <h4 className={`text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r ${card.color} mb-4`}>
                                {card.subtitle}
                            </h4>
                            <p className="text-gray-600 leading-relaxed">
                                {card.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MarketAnalysisSection;
