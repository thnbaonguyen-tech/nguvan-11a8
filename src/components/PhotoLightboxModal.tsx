import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export interface ClassPhotoItem {
  src: string;
  fallback?: string;
  alt: string;
  title?: string;
  description?: string;
}

interface PhotoLightboxModalProps {
  photos: ClassPhotoItem[];
  currentIndex: number | null;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export const PhotoLightboxModal: React.FC<PhotoLightboxModalProps> = ({
  photos,
  currentIndex,
  onClose,
  onSelectIndex,
}) => {
  const isOpen = currentIndex !== null && currentIndex >= 0 && currentIndex < photos.length;
  const currentPhoto = isOpen ? photos[currentIndex] : null;

  const handlePrev = useCallback(() => {
    if (currentIndex === null) return;
    const nextIdx = (currentIndex - 1 + photos.length) % photos.length;
    onSelectIndex(nextIdx);
  }, [currentIndex, photos.length, onSelectIndex]);

  const handleNext = useCallback(() => {
    if (currentIndex === null) return;
    const nextIdx = (currentIndex + 1) % photos.length;
    onSelectIndex(nextIdx);
  }, [currentIndex, photos.length, onSelectIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !currentPhoto) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 select-none p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Xem ảnh phóng to lớp 11A8"
    >
      {/* Top Bar Overlay: Title & Close Button */}
      <div 
        className="absolute top-4 left-4 right-4 flex items-center justify-between z-50 pointer-events-none"
      >
        <div className="flex items-center gap-3 pointer-events-auto">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white/90 text-xs font-mono font-bold tracking-wider border border-white/10 shadow-lg">
            <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
            <span>KHOẢNH KHẮC 11A8</span>
          </div>
          <span className="text-sm font-mono text-amber-400 font-bold px-2.5 py-1 rounded-full bg-black/60 border border-amber-400/30 backdrop-blur-md shadow-md">
            0{currentIndex + 1} / 0{photos.length}
          </span>
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="pointer-events-auto p-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white shadow-xl backdrop-blur-md transition-all cursor-pointer hover:rotate-90 duration-200"
          title="Đóng (Esc)"
          aria-label="Đóng"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Prev Navigation Arrow */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
        }}
        className="absolute left-3 sm:left-6 z-50 p-3 sm:p-3.5 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer backdrop-blur-md hover:text-amber-400"
        title="Ảnh trước (Mũi tên trái)"
        aria-label="Ảnh trước"
      >
        <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
      </button>

      {/* Next Navigation Arrow */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        className="absolute right-3 sm:right-6 z-50 p-3 sm:p-3.5 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer backdrop-blur-md hover:text-amber-400"
        title="Ảnh tiếp theo (Mũi tên phải)"
        aria-label="Ảnh tiếp theo"
      >
        <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
      </button>

      {/* Main Active Image: Exact sizing requested */}
      <div 
        className="relative flex items-center justify-center cursor-default max-w-full max-h-full"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentPhoto.src}
          alt={currentPhoto.alt}
          referrerPolicy="no-referrer"
          onError={(e) => {
            if (currentPhoto.fallback && e.currentTarget.src !== currentPhoto.fallback) {
              e.currentTarget.src = currentPhoto.fallback;
            }
          }}
          className="max-w-[90vw] max-h-[85vh] object-contain w-auto h-auto rounded-xl shadow-2xl mx-auto"
        />

        {/* Caption Overlay */}
        {(currentPhoto.title || currentPhoto.description) && (
          <div className="absolute bottom-3 inset-x-3 sm:inset-x-8 p-3 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 text-center pointer-events-none max-w-2xl mx-auto shadow-lg">
            <h4 className="text-white font-bold text-sm sm:text-base">
              {currentPhoto.title || currentPhoto.alt}
            </h4>
            {currentPhoto.description && (
              <p className="text-zinc-300 text-xs sm:text-sm mt-0.5 line-clamp-2">
                {currentPhoto.description}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Bottom Thumbnail Strip (Non-intrusive floating overlay) */}
      <div 
        className="absolute bottom-3 left-0 right-0 flex justify-center z-40 pointer-events-none px-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="pointer-events-auto flex items-center gap-2 overflow-x-auto max-w-[90vw] py-1 px-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 no-scrollbar">
          {photos.map((item, idx) => {
            const isSelected = idx === currentIndex;
            return (
              <button
                key={`lightbox-thumb-${idx}`}
                type="button"
                onClick={() => onSelectIndex(idx)}
                className={`relative shrink-0 w-12 sm:w-14 h-8 sm:h-10 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                  isSelected 
                    ? 'border-amber-400 scale-105 shadow-md shadow-amber-400/30 opacity-100' 
                    : 'border-white/20 opacity-50 hover:opacity-90 hover:border-white/50'
                }`}
                title={`Ảnh 0${idx + 1}`}
              >
                <img
                  src={item.src}
                  alt={`Thumbnail 0${idx + 1}`}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    if (item.fallback && e.currentTarget.src !== item.fallback) {
                      e.currentTarget.src = item.fallback;
                    }
                  }}
                  className="w-full h-full object-cover"
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
