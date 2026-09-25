import React, { useState, useEffect, useRef } from 'react';
import { QrCode, Check, Sparkles, Upload, RotateCcw, ExternalLink } from 'lucide-react';
import QRCode from 'qrcode';
import craneQrAsset from '../assets/images/crane_qr.svg';
import { LINKS } from '../config/links';

interface QRCodeSectionProps {
  customQrImage?: string | null;
  onUpdateQrImage?: (dataUrl: string | null) => void;
}

export const QRCodeSection: React.FC<QRCodeSectionProps> = ({ 
  customQrImage,
  onUpdateQrImage
}) => {
  const [copied, setCopied] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [generatedQrSvg, setGeneratedQrSvg] = useState<string>('');
  const [useWebsiteQr, setUseWebsiteQr] = useState(false);
  const [currentUrl, setCurrentUrl] = useState<string>(() => {
    return typeof window !== 'undefined' ? window.location.href : '';
  });

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = window.location.href;
      setCurrentUrl(url);

      // Generate real, scannable QR code SVG for current website URL
      QRCode.toString(url, {
        type: 'svg',
        margin: 1,
        color: {
          dark: '#0f172a',
          light: '#ffffff',
        },
        errorCorrectionLevel: 'M',
      })
        .then((svgString) => {
          setGeneratedQrSvg(svgString);
        })
        .catch((err) => {
          console.error('Error generating dynamic QR code:', err);
        });
    }
  }, []);

  const handleCopyLink = () => {
    const urlToCopy = (typeof window !== 'undefined' && window.location.href)
      ? window.location.href
      : currentUrl;

    if (urlToCopy) {
      navigator.clipboard.writeText(urlToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onUpdateQrImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setImageError(false);
          setUseWebsiteQr(false);
          onUpdateQrImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetQr = () => {
    if (onUpdateQrImage) {
      onUpdateQrImage(null);
      setImageError(false);
      setUseWebsiteQr(true);
    }
  };

  const activeImage = customQrImage || craneQrAsset;

  return (
    <section id="qr-code" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-[#070c1e] overflow-hidden">
      {/* Cinematic ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
          <QrCode className="w-3.5 h-3.5" />
          <span>Điểm quét tương tác trên lớp</span>
        </div>

        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase font-display">
          SCAN TO EXPLORE
        </h2>

        {/* QR Code Container Box in Center */}
        <div className="mt-10 inline-block relative group">
          {/* Subtle glowing halo border */}
          <div className="absolute -inset-2 bg-gradient-to-r from-amber-400/40 via-blue-500/30 to-amber-500/40 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-700 pointer-events-none" />

          {/* QR Display Card */}
          <div className="relative p-6 sm:p-8 rounded-2xl bg-white text-slate-900 shadow-2xl flex flex-col items-center justify-center border-4 border-amber-300/40 max-w-[340px] sm:max-w-[380px] mx-auto">
            
            {/* Header info in QR card */}
            <div className="w-full text-center pb-3 border-b border-slate-200 mb-4">
              <span className="text-[11px] font-bold text-slate-500 tracking-wider uppercase block">
                NGỮ VĂN 11A8 · DỰ ÁN HỌC TẬP
              </span>
              <span className="text-xs font-bold text-slate-900 block mt-0.5">
                Nguyễn Quang Sáng &amp; Văn học Nam Bộ
              </span>
            </div>

            {/* QR Image Box */}
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-xl overflow-hidden bg-slate-50 flex items-center justify-center border border-slate-200 p-2 shadow-inner">
              {!useWebsiteQr && activeImage && !imageError ? (
                <img
                  src={activeImage}
                  alt="Mã QR dự án Ngữ Văn 11A8"
                  className="w-full h-full object-contain"
                  onError={() => setImageError(true)}
                  referrerPolicy="no-referrer"
                />
              ) : generatedQrSvg ? (
                /* Dynamic real scannable SVG QR Code generated from window.location.href */
                <div
                  className="w-full h-full flex items-center justify-center [&>svg]:w-full [&>svg]:h-full [&>svg]:rounded-lg"
                  dangerouslySetInnerHTML={{ __html: generatedQrSvg }}
                />
              ) : (
                /* Crisp Loading placeholder */
                <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 gap-2">
                  <QrCode className="w-12 h-12 animate-pulse text-amber-500" />
                  <span className="text-xs font-medium">Đang tạo mã QR...</span>
                </div>
              )}
            </div>

            {/* Bottom text inside card */}
            <div className="mt-3 text-center">
              <span className="text-[11px] font-semibold text-slate-600 block">
                {!useWebsiteQr 
                  ? '★ Quét mở Padlet: Góc để lại lời nhắn 11A8' 
                  : 'Quét bằng camera điện thoại hoặc Zalo'}
              </span>
            </div>
          </div>
        </div>

        {/* Required text: “Quét mã để truy cập toàn bộ không gian dự án.” */}
        <p className="mt-6 text-base sm:text-lg text-slate-200 font-medium">
          “Quét mã để truy cập toàn bộ không gian dự án.”
        </p>

        {/* Link action buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={LINKS.padlet}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 transition-all shadow-md shadow-amber-400/20"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Mở Padlet trực tiếp</span>
          </a>

          <button
            onClick={handleCopyLink}
            type="button"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-amber-300 bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 transition-all shadow-sm"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">Đã sao chép link website!</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Sao chép link trang web</span>
              </>
            )}
          </button>

          {!useWebsiteQr ? (
            <button
              type="button"
              onClick={() => setUseWebsiteQr(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all cursor-pointer"
              title="Chuyển sang mã QR trang web"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Hiện mã QR web</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setUseWebsiteQr(false)}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-amber-300 bg-amber-400/10 hover:bg-amber-400/20 border border-amber-400/20 transition-all cursor-pointer"
              title="Hiện lại mã QR Padlet"
            >
              <QrCode className="w-3.5 h-3.5" />
              <span>Hiện mã QR Padlet</span>
            </button>
          )}

          {onUpdateQrImage && (
            <>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileUpload}
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs text-slate-400 hover:text-slate-200 bg-white/5 hover:bg-white/10 border border-white/5 transition-all cursor-pointer"
                title="Tải lên ảnh mã QR riêng của bạn"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Đổi ảnh</span>
              </button>
            </>
          )}
        </div>

        {/* Tips for class presentation */}
        <p className="mt-4 text-xs text-slate-400 font-light">
          Thầy cô và các bạn học sinh có thể quét mã để vào trực tiếp trang Padlet thảo luận hoặc bấm nút sao chép link website để lưu lại.
        </p>
      </div>
    </section>
  );
};
