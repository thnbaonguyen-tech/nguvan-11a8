import React, { useState } from 'react';
import { X, ExternalLink, RotateCcw, Save, Check, Link2, Copy, AlertCircle } from 'lucide-react';
import { ProjectLinkItem, INITIAL_PROJECT_LINKS } from '../config/links';

interface LinkConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  links: ProjectLinkItem[];
  onSaveLinks: (updatedLinks: ProjectLinkItem[]) => void;
}

export const LinkConfigModal: React.FC<LinkConfigModalProps> = ({
  isOpen,
  onClose,
  links,
  onSaveLinks,
}) => {
  const [editedLinks, setEditedLinks] = useState<ProjectLinkItem[]>(links);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Sync state if prop updates
  React.useEffect(() => {
    setEditedLinks(links);
  }, [links]);

  if (!isOpen) return null;

  const handleUrlChange = (id: string, newUrl: string) => {
    setEditedLinks((prev) =>
      prev.map((item) => (item.id === id ? { ...item, url: newUrl } : item))
    );
  };

  const handleFieldChange = (id: string, field: 'title' | 'description' | 'buttonText', value: string) => {
    setEditedLinks((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const handleSave = () => {
    onSaveLinks(editedLinks);
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
      onClose();
    }, 1200);
  };

  const handleResetToDefault = () => {
    if (window.confirm('Khôi phục toàn bộ 10 liên kết về cấu hình ban đầu?')) {
      setEditedLinks(INITIAL_PROJECT_LINKS);
      onSaveLinks(INITIAL_PROJECT_LINKS);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0b1329] border border-white/15 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-slate-900/80">
          <div>
            <h2 id="modal-title" className="text-xl font-bold text-white flex items-center gap-2">
              <Link2 className="w-5 h-5 text-amber-400" />
              <span>Đổi tên &amp; Cấu hình 10 Nút Liên Kết 11A8</span>
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Bạn có thể tự do đổi tên hiển thị (tiêu đề), mô tả ngắn, chữ nút bấm (Mở, Xem ngay...) và dán link thực tế của nhóm.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Đóng bảng cấu hình"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Links List Form */}
        <div className="p-6 overflow-y-auto space-y-4 max-h-[60vh] divide-y divide-white/10">
          {editedLinks.map((item) => (
            <div key={item.id} className="pt-4 first:pt-0 space-y-3">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-amber-400 font-bold bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                    {String(item.order).padStart(2, '0')}
                  </span>
                  <span className="text-[11px] uppercase font-semibold px-2 py-0.5 rounded bg-white/10 text-slate-300">
                    {item.platform}
                  </span>
                </div>
                
                {/* Test Link Button */}
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/15 text-[11px] text-slate-300 hover:text-amber-300 transition-colors shrink-0 border border-white/10"
                  title="Thử mở liên kết ở tab mới"
                >
                  <span>Mở thử link</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Editable Name & Button Text Row */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                <div className="sm:col-span-5">
                  <label className="block text-[11px] font-medium text-slate-400 mb-1">
                    Tên hiển thị (Tiêu đề):
                  </label>
                  <input
                    type="text"
                    value={item.title}
                    onChange={(e) => handleFieldChange(item.id, 'title', e.target.value)}
                    placeholder="VD: YOUTUBE 01..."
                    className="w-full px-3 py-1.5 rounded-lg bg-slate-950/80 border border-white/10 text-xs font-semibold text-white focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                <div className="sm:col-span-4">
                  <label className="block text-[11px] font-medium text-slate-400 mb-1">
                    Dòng mô tả ngắn:
                  </label>
                  <input
                    type="text"
                    value={item.description}
                    onChange={(e) => handleFieldChange(item.id, 'description', e.target.value)}
                    placeholder="VD: Video giới thiệu..."
                    className="w-full px-3 py-1.5 rounded-lg bg-slate-950/80 border border-white/10 text-xs text-slate-200 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                <div className="sm:col-span-3">
                  <label className="block text-[11px] font-medium text-slate-400 mb-1">
                    Chữ nút bấm:
                  </label>
                  <input
                    type="text"
                    value={item.buttonText || ''}
                    onChange={(e) => handleFieldChange(item.id, 'buttonText', e.target.value)}
                    placeholder="Mở (mặc định)"
                    className="w-full px-3 py-1.5 rounded-lg bg-slate-950/80 border border-white/10 text-xs text-amber-300 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
              </div>

              {/* Editable Link URL */}
              <div>
                <label className="block text-[11px] font-medium text-slate-400 mb-1">
                  Đường dẫn (URL):
                </label>
                <input
                  type="url"
                  value={item.url}
                  onChange={(e) => handleUrlChange(item.id, e.target.value)}
                  placeholder={item.placeholderPrompt}
                  className="w-full px-3 py-1.5 rounded-lg bg-slate-950/80 border border-white/10 text-xs font-mono text-amber-200/90 focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Modal Footer Controls */}
        <div className="p-6 border-t border-white/10 bg-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={handleResetToDefault}
            type="button"
            className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-rose-400 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Khôi phục liên kết mặc định</span>
          </button>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              type="button"
              className="flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              Hủy
            </button>
            <button
              onClick={handleSave}
              type="button"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-2 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-lg shadow-amber-400/20"
            >
              {saveSuccess ? (
                <>
                  <Check className="w-4 h-4 text-slate-950" />
                  <span>Đã lưu thành công!</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>Lưu thay đổi</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
