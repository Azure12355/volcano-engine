// src/app/page.tsx
"use client";
import React, { useState } from 'react';

// 布局组件
import Header from '@/components/layout/Header/Header';
import FloatingSidebar from '@/components/layout/FloatingSidebar/FloatingSidebar';
import Footer from '@/components/layout/Footer/Footer';

// 智巨人新版组件
import HeroSection from '@/components/sections/zhijuren/HeroSection';
import MarketAnalysisSection from '@/components/sections/zhijuren/MarketAnalysisSection';
import PainPointsSection from '@/components/sections/zhijuren/PainPointsSection';
import SolutionSection from '@/components/sections/zhijuren/SolutionSection';
import TeamSection from '@/components/sections/zhijuren/TeamSection';
import EcosystemSection from '@/components/sections/zhijuren/EcosystemSection';
import StrengthSection from '@/components/sections/zhijuren/StrengthSection';
import CooperationSection from '@/components/sections/zhijuren/CooperationSection';

// 小组件 (Widgets)
import ChatbotWidget from '@/components/widgets/ChatbotWidget/ChatbotWidget';

export default function HomePage() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const handleOpenChatbot = () => {
    setIsChatbotOpen(true);
  };

  const handleCloseChatbot = () => {
    setIsChatbotOpen(false);
  };

  return (
    <>
      <Header />
      <FloatingSidebar onConsultClick={handleOpenChatbot} />

      <main>
        <HeroSection />
        <MarketAnalysisSection />
        <PainPointsSection />
        <SolutionSection />
        <TeamSection />
        <EcosystemSection />
        <StrengthSection />
        <CooperationSection />
      </main>

      <Footer />

      <ChatbotWidget isOpen={isChatbotOpen} onClose={handleCloseChatbot} />
    </>
  );
}