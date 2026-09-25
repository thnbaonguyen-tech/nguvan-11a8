/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { InteractiveCards } from './components/InteractiveCards';
import { AboutGroup } from './components/AboutGroup';
import { ProjectShowcase } from './components/ProjectShowcase';
import { QRCodeSection } from './components/QRCodeSection';
import { Footer } from './components/Footer';
import { INITIAL_PROJECT_LINKS, ProjectLinkItem } from './config/links';

export default function App() {
  const [links] = useState<ProjectLinkItem[]>(INITIAL_PROJECT_LINKS);

  return (
    <div className="min-h-screen bg-[#070b19] text-[#f1f5f9] selection:bg-amber-400/30 selection:text-amber-200">
      {/* Ambient page glow decorations */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[700px] h-[600px] bg-blue-900/10 rounded-full blur-[160px]" />
        <div className="absolute top-1/2 right-0 w-[600px] h-[700px] bg-amber-600/5 rounded-full blur-[180px]" />
        <div className="absolute bottom-0 left-1/3 w-[800px] h-[500px] bg-indigo-950/15 rounded-full blur-[180px]" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Sticky Header with navigation */}
        <Header />

        <main className="flex-1">
          {/* 1. Hero Section */}
          <Hero />

          {/* 2. Phần 10 Nút Liên Kết - KHÔNG GIAN TƯƠNG TÁC (Most Important) */}
          <InteractiveCards links={links} />

          {/* 3. Phần Giới Thiệu Nhóm - VỀ NHÓM CÔNG NGHỆ */}
          <AboutGroup />

          {/* 4. Phần Dự Án - DỰ ÁN NGỮ VĂN 11A8 & Nguyễn Quang Sáng */}
          <ProjectShowcase />

          {/* 5. Phần QR Code - SCAN TO EXPLORE */}
          <QRCodeSection />
        </main>

        {/* 6. Footer & Back to top */}
        <Footer links={links} />
      </div>
    </div>
  );
}
