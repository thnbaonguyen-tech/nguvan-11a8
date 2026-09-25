import React, { useState, useEffect } from 'react';
import { Menu, X, QrCode } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'TRANG CHỦ', href: '#hero' },
    { label: 'NỘI DUNG', href: '#about' },
    { label: 'TÀI NGUYÊN', href: '#project' },
    { label: 'LIÊN KẾT', href: '#links' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070b19]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-2.5'
          : 'bg-[#070b19]/60 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand & Subtitle Zone */}
          <a
            href="#hero"
            className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg p-1"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors uppercase">
                NHÓM CÔNG NGHỆ – NGỮ VĂN 11A8
              </span>
            </div>
            <span className="text-xs md:text-sm font-normal text-slate-300 tracking-wide mt-0.5">
              Dự án học tập <span className="text-amber-400/80">|</span> Nguyễn Quang Sáng &amp; Văn học Việt Nam
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold tracking-wider text-slate-300">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative py-1 text-xs md:text-sm uppercase tracking-wider text-slate-300 hover:text-amber-300 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 hover:after:w-full after:transition-all after:duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#qr-code"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-400/40 transition-all duration-200"
              title="Xem &amp; Quét mã QR"
            >
              <QrCode className="w-3.5 h-3.5 text-amber-400" />
              <span>Mã QR</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg focus:outline-none"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-white/10 flex flex-col gap-2">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-amber-300 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 border-t border-white/5 flex">
              <a
                href="#qr-code"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 text-center py-2 text-xs font-medium text-slate-300 bg-white/5 rounded-lg border border-white/10"
              >
                Mã QR
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
