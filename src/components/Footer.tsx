import React from 'react';
import { ArrowUp } from 'lucide-react';
import { ProjectLinkItem } from '../config/links';

interface FooterProps {
  links: ProjectLinkItem[];
}

export const Footer: React.FC<FooterProps> = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050814] border-t border-white/10 pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-slate-400">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Block */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/5">
          {/* Brand Info */}
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase font-display">
              NHÓM CÔNG NGHỆ – NGỮ VĂN 11A8
            </h3>
            <p className="mt-2 text-sm text-amber-300 font-medium tracking-wide">
              “Made with creativity by 11A8”
            </p>
            <p className="mt-1 text-xs text-slate-400 font-light">
              Dự án học tập liên môn Ngữ văn 11 &amp; Công nghệ thông tin · Hệ thống 10 video tương tác YouTube
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <span>© 2026 Nhóm Công nghệ – Ngữ văn 11A8. All rights reserved.</span>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            type="button"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 hover:border-amber-400/40 transition-all duration-200 group"
            aria-label="Lên đầu trang"
          >
            <span>Lên đầu trang</span>
            <ArrowUp className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-1 text-amber-400" />
          </button>
        </div>

      </div>
    </footer>
  );
};
