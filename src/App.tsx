/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { InteractiveCards } from './components/InteractiveCards';
import { AboutGroup } from './components/AboutGroup';
import { ProjectShowcase } from './components/ProjectShowcase';
import { QRCodeSection } from './components/QRCodeSection';
import { Footer } from './components/Footer';
import { LinkConfigModal } from './components/LinkConfigModal';
import { INITIAL_PROJECT_LINKS, ProjectLinkItem } from './config/links';

const STORAGE_KEYS_LINKS = [
  'nguvan11a8_project_links_v2',
  'nguvan11a8_project_links_v1',
  'nguvan11a8_project_links',
];
const STORAGE_KEYS_QR = [
  'nguvan11a8_custom_qr_v1',
  'nguvan11a8_custom_qr',
];

export default function App() {
  const [links, setLinks] = useState<ProjectLinkItem[]>(INITIAL_PROJECT_LINKS);
  const [customQrImage, setCustomQrImage] = useState<string | null>(null);
  const [isConfigOpen, setIsConfigOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('nguvan11a8_theme');
      if (saved) return saved === 'dark';
    }
    return true;
  });

  const handleToggleTheme = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('nguvan11a8_theme', next ? 'dark' : 'light');
      } catch {}
      return next;
    });
  };

  // Sync theme attribute to HTML and Body for instant global CSS variable resolution
  useEffect(() => {
    const theme = isDarkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(theme);
    document.body.classList.remove('dark', 'light');
    document.body.classList.add(theme);
  }, [isDarkMode]);

  // Load saved links and custom QR from localStorage if user previously edited them
  useEffect(() => {
    try {
      // Clear old 10-item legacy cache if present
      for (const key of STORAGE_KEYS_LINKS) {
        const saved = localStorage.getItem(key);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length === 10) {
            localStorage.removeItem(key);
          }
        }
      }

      for (const key of STORAGE_KEYS_LINKS) {
        const saved = localStorage.getItem(key);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length === 9) {
            // Keep hardcoded titles, descriptions, taglines and URLs from INITIAL_PROJECT_LINKS fixed
            const merged = INITIAL_PROJECT_LINKS.map((initialItem, idx) => {
              const savedItem = parsed[idx];
              if (!savedItem) return initialItem;
              return {
                ...initialItem,
                title: initialItem.title,
                description: initialItem.description,
                tagline: initialItem.tagline,
                literaryNote: initialItem.literaryNote,
                buttonText: savedItem.buttonText || initialItem.buttonText,
                url: initialItem.url,
              };
            });
            setLinks(merged);
            break;
          }
        }
      }

      for (const key of STORAGE_KEYS_QR) {
        const savedQr = localStorage.getItem(key);
        if (savedQr) {
          setCustomQrImage(savedQr);
          break;
        }
      }
    } catch {
      // Fallback cleanly
    }
  }, []);

  const handleSaveLinks = (updatedLinks: ProjectLinkItem[]) => {
    setLinks(updatedLinks);
    try {
      localStorage.setItem('nguvan11a8_project_links_v2', JSON.stringify(updatedLinks));
    } catch {}
  };

  const handleUpdateQrImage = (dataUrl: string | null) => {
    setCustomQrImage(dataUrl);
    try {
      if (dataUrl) {
        localStorage.setItem('nguvan11a8_custom_qr_v1', dataUrl);
      } else {
        localStorage.removeItem('nguvan11a8_custom_qr_v1');
        localStorage.removeItem('nguvan11a8_custom_qr');
      }
    } catch {}
  };

  return (
    <div 
      data-theme={isDarkMode ? 'dark' : 'light'} 
      className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark' : 'light'} selection:bg-amber-400/30 selection:text-amber-200`}
    >
      {/* Ambient page glow decorations */}
      {isDarkMode && (
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-1/4 w-[700px] h-[600px] bg-blue-900/10 rounded-full blur-[160px]" />
          <div className="absolute top-1/2 right-0 w-[600px] h-[700px] bg-amber-600/5 rounded-full blur-[180px]" />
          <div className="absolute bottom-0 left-1/3 w-[800px] h-[500px] bg-indigo-950/15 rounded-full blur-[180px]" />
        </div>
      )}

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Sticky Header with navigation & theme switch at top-left */}
        <Header 
          isDarkMode={isDarkMode} 
          onToggleTheme={handleToggleTheme} 
        />

        <main className="flex-1">
          {/* 1. Hero Section */}
          <Hero />

          {/* 2. Phần 10 Nút Liên Kết - TRIỂN LÃM SỐ NGUYỄN QUANG SÁNG (Poster Cards) */}
          <InteractiveCards 
            links={links} 
            onOpenConfig={() => setIsConfigOpen(true)} 
          />

          {/* 3. Phần Giới Thiệu Nhóm - VỀ DỰ ÁN TẬP THỂ 11A8 */}
          <AboutGroup />

          {/* 4. Phần Dự Án - DỰ ÁN NGỮ VĂN 11A8 & Nguyễn Quang Sáng */}
          <ProjectShowcase />

          {/* 5. Phần QR Code - SCAN TO EXPLORE */}
          <QRCodeSection 
            customQrImage={customQrImage} 
            onUpdateQrImage={handleUpdateQrImage} 
          />
        </main>

        {/* 6. Footer & Back to top */}
        <Footer links={links} />

        {/* Modal chỉnh sửa liên kết thủ công */}
        <LinkConfigModal
          isOpen={isConfigOpen}
          onClose={() => setIsConfigOpen(false)}
          links={links}
          onSaveLinks={handleSaveLinks}
        />
      </div>
    </div>
  );
}
