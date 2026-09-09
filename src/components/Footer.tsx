import React from 'react';
import { Compass, AlertCircle, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#1e303c] bg-[#090e12] text-slate-400">
      {/* Disclaimer Section (二十七、正式免責聲明) */}
      <section
        id="disclaimer"
        aria-label="正式免責聲明"
        className="border-b border-[#182631] py-8 px-4 sm:px-6 lg:px-8 bg-[#0c1318]"
      >
        <div className="max-w-4xl mx-auto flex items-start space-x-3.5 text-xs sm:text-sm text-slate-300 leading-relaxed rounded-xl border border-[#213543] bg-[#111a21] p-4 sm:p-5">
          <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-1">
              登山教育教材免責聲明
            </h2>
            <p>
              本教材為登山教育用途，內容用於建立登山者對法規、申請與行政管理的基本觀念；實際申請資格、流程、期限、費用及管制規定，請以各主管機關最新公告為準。
            </p>
          </div>
        </div>
      </section>

      {/* Main Footer (二十八、Footer) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-3 text-center md:text-left">
            <div className="w-10 h-10 rounded-lg bg-[#14232c] border border-emerald-700/60 flex items-center justify-center text-emerald-400 shrink-0">
              <Compass className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <div className="text-base font-bold text-slate-100">
                亞馬遜國家山岳協會
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                登山教育教材 · 第十五章 登山法規與申請
              </div>
            </div>
          </div>

          {/* Quick links & Back to top */}
          <div className="flex items-center space-x-4 text-xs">
            <a
              href="#toc"
              className="text-slate-400 hover:text-emerald-400 transition-colors"
            >
              章節目錄
            </a>
            <span className="text-slate-600">|</span>
            <a
              href="#s1"
              className="text-slate-400 hover:text-emerald-400 transition-colors"
            >
              回第 01 節
            </a>
            <span className="text-slate-600">|</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center space-x-1 text-slate-300 hover:text-emerald-400 bg-[#14232c] hover:bg-[#1a2d38] border border-[#223541] px-3 py-1.5 rounded transition-colors"
              aria-label="回到頁面最頂端"
            >
              <span>回到頂部</span>
              <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#182631] text-center text-xs text-slate-500">
          <p>© 2026 亞馬遜國家山岳協會</p>
        </div>
      </div>
    </footer>
  );
}
