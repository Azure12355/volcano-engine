"use client";

import React from 'react';

const StrengthSection = () => {
    const honors = [
        "2025中国人工智能行业领先平台",
        "中国AI企业家百强年会-AI创业领袖",
        "工信部工业文化发展中心-尚工行动AIGC技能证书培训管理研发中心",
        "淘宝直播官方授权基地",
        "阿里巴巴最佳合作伙伴 (2024年度)"
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl font-bold mb-8 text-gray-900">公司实力与荣誉</h2>
                        <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
                            <h4 className="font-bold text-lg mb-2">政商考察</h4>
                            <p className="text-gray-600">杭州城投集团、平安集团、复旦大学、各地市政府（温州、南京、苏州等）纷纷莅临考察指导。</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h4 className="font-bold text-lg mb-4">企业荣誉</h4>
                            <ul className="space-y-3">
                                {honors.map((honor, index) => (
                                    <li key={index} className="flex items-start">
                                        <i className="fas fa-trophy text-yellow-500 mt-1 mr-3"></i>
                                        <span className="text-gray-700">{honor}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="lg:w-1/2 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold mb-6 text-gray-900">媒体报道</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white h-24 rounded-lg flex items-center justify-center shadow-sm text-gray-400 font-bold border border-gray-100">新华网</div>
                            <div className="bg-white h-24 rounded-lg flex items-center justify-center shadow-sm text-gray-400 font-bold border border-gray-100">首尔论坛</div>
                            <div className="bg-white h-24 rounded-lg flex items-center justify-center shadow-sm text-gray-400 font-bold border border-gray-100">世界AI数商大会</div>
                            <div className="bg-white h-24 rounded-lg flex items-center justify-center shadow-sm text-gray-400 font-bold border border-gray-100">赢在AI+</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StrengthSection;
