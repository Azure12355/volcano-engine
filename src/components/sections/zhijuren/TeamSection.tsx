"use client";

import React from 'react';
import { motion } from 'framer-motion';

const TeamSection = () => {
    const coreTeam = [
        { name: "徐小敏", role: "CMO", desc: "原抖商大学实战讲师，AIGC讲师联盟执行副院长" },
        { name: "孔洪海", role: "CPQ", desc: "前抖音电商学习中心负责人，淘宝大学资深产品经理" },
        { name: "徐兴兰", role: "COO", desc: "共有家园创始人，阿里本地生活高级运营专家" },
        { name: "陈洁毅", role: "CTO", desc: "前平安科技、阿里云、百度智能云技术专家" },
        { name: "王峰", role: "AI培训顾问", desc: "原阿里CIO学院执行院长，原阿里云研究院总监" },
        { name: "佘尚俊", role: "AI技术顾问", desc: "阿里云·达摩院高级AI架构师" },
        { name: "牛聪聪", role: "AI解决方案", desc: "前纳爱斯集团副总经理" }
    ];

    return (
        <section className="py-20 bg-gray-900 text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        创始人与核心团队
                    </motion.h2>
                    <p className="text-gray-400">汇聚阿里、字节、百度等一线互联网巨头精英</p>
                </div>

                {/* Founder */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto bg-gray-800 rounded-2xl p-8 md:p-12 mb-16 flex flex-col md:flex-row items-center gap-8 border border-gray-700"
                >
                    <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex-shrink-0 flex items-center justify-center text-4xl font-bold">
                        七
                    </div>
                    <div className="text-center md:text-left">
                        <h3 className="text-3xl font-bold mb-2">七天（王琪）</h3>
                        <p className="text-blue-400 font-medium mb-4">领路人 · 前淘宝大学达人学院院长</p>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            阿里十年经验；见证直播电商从0到1，单年营收破亿；中国AI百强年会创业领袖。
                            薇娅、李佳琦的启蒙导师。
                        </p>
                        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                            <span className="px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-300">中国AI百强年会领袖</span>
                            <span className="px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-300">工信部AIGC证书负责人</span>
                        </div>
                    </div>
                </motion.div>

                {/* Core Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {coreTeam.map((member, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-gray-800 p-6 rounded-xl hover:bg-gray-750 transition-colors border border-gray-700"
                        >
                            <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                            <div className="text-sm text-blue-400 mb-3 font-semibold">{member.role}</div>
                            <p className="text-sm text-gray-400">{member.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Shareholders */}
                <div className="mt-16 text-center border-t border-gray-800 pt-16">
                    <h3 className="text-xl font-bold mb-6 text-gray-300">战略股东与大咖支持</h3>
                    <div className="flex flex-wrap justify-center gap-8 text-gray-400 font-medium">
                        <span>林敏 (全域电商营销领军者)</span>
                        <span>吴晓波 (著名财经作家)</span>
                        <span>极客湾创始人</span>
                        <span>强脑科技</span>
                        <span>微软</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
