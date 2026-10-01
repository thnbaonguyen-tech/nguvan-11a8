import React, { useState, useEffect } from 'react';
import { Menu, X, QrCode, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  isDarkMode?: boolean;
  onToggleTheme?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isDarkMode = true, onToggleTheme }) => {
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
    { label: 'TƯ LIỆU', href: '#links' },
    { label: 'GIỚI THIỆU', href: '#about' },
    { label: 'DỰ ÁN', href: '#project' },
    { label: 'MÃ QR', href: '#qr-code' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const id = href.slice(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-md shadow-lg py-2.5' : 'backdrop-blur-sm py-3'
      }`}
      style={{
        backgroundColor: 'var(--bg-glass)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Left Zone: Theme Switcher (Trắng / Đen) at Top Left Corner + Brand */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Top Left Theme Toggle Button */}
            {onToggleTheme && (
              <button
                onClick={onToggleTheme}
                type="button"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer shadow-sm ${
                  isDarkMode
                    ? 'bg-white/10 hover:bg-white/15 text-amber-300 border border-amber-400/40 shadow-amber-400/10'
                    : 'bg-amber-500/10 hover:bg-amber-500/15 text-amber-800 border border-amber-600/30'
                }`}
                title={isDarkMode ? "Chuyển sang nền sáng (Trắng)" : "Chuyển sang nền tối (Đen)"}
                aria-label="Chuyển đổi nền trắng đen"
              >
                {isDarkMode ? (
                  <>
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-[11px] font-sans font-medium text-amber-200">Nền trắng</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-3.5 h-3.5 text-indigo-700" />
                    <span className="text-[11px] font-sans font-semibold text-slate-800">Nền đen</span>
                  </>
                )}
              </button>
            )}

            {/* Brand Title (Dự án Ngữ văn tập thể 11A8) */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg p-0.5"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                <span 
                  className="text-sm sm:text-base md:text-lg font-bold tracking-tight transition-colors uppercase"
                  style={{ color: 'var(--text-primary)' }}
                >
                  DỰ ÁN NGỮ VĂN TẬP THỂ 11A8
                </span>
              </div>
              <span 
                className="text-[11px] sm:text-xs font-normal tracking-wide"
                style={{ color: 'var(--text-muted)' }}
              >
                Nguyễn Quang Sáng <span style={{ color: 'var(--gold)' }}>|</span> Văn học Nam Bộ
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold tracking-wider">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="relative py-1 uppercase tracking-wider transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 hover:after:w-full after:transition-all after:duration-300"
                style={{ color: 'var(--text-secondary)' }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#qr-code"
              onClick={(e) => handleNavClick(e, '#qr-code')}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200"
              style={{
                backgroundColor: 'var(--accent-soft)',
                border: '1px solid var(--border)',
                color: 'var(--text-secondary)',
              }}
              title="Xem &amp; Quét mã QR Padlet"
            >
              <QrCode className="w-3.5 h-3.5" style={{ color: 'var(--gold)' }} />
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
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-3 py-2 rounded-md text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-amber-300 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 border-t border-white/5 flex">
              <a
                href="#qr-code"
                onClick={(e) => handleNavClick(e, '#qr-code')}
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
