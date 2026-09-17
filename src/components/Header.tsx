import React, { useState, useEffect } from 'react';
import { Menu, X, Compass, ChevronDown, CheckSquare } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

export const SECTIONS = [
  { id: 's1', num: '01', title: '為什麼登山需要了解法規' },
  { id: 's2', num: '02', title: '台灣山域管理基本概念' },
  { id: 's3', num: '03', title: '登山前需要確認的申請事項' },
  { id: 's4', num: '04', title: '登山計畫書的重要性' },
  { id: 's5', num: '05', title: '申請流程基本教學' },
  { id: 's6', num: '06', title: '國家公園登山注意事項' },
  { id: 's7', num: '07', title: '山屋、營地與住宿規範' },
  { id: 's8', num: '08', title: '登山者責任與倫理' },
  { id: 's9', num: '09', title: '常見申請錯誤' },
  { id: 's10', num: '10', title: '領隊行政管理流程' },
];

export default function Header({ activeSection }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#1f303b] bg-[#0d1418]/95 backdrop-blur-md">
      {/* Scroll Progress Bar */}
      <div
        className="h-1 bg-gradient-to-r from-emerald-600 via-teal-500 to-sky-500 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="章節閱讀進度"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand & Chapter Identity */}
        <div className="flex items-center space-x-3">
          <a
            href="https://amazon-hike.com/"
            className="flex items-center space-x-2.5 text-slate-100 hover:text-emerald-400 transition-colors group"
            title="亞馬遜國家山岳協會首頁"
          >
            <div className="w-9 h-9 rounded-lg bg-[#14232c] border border-emerald-700/50 flex items-center justify-center text-emerald-400 group-hover:border-emerald-500 transition-colors">
              <Compass className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <div className="text-sm font-bold tracking-wider text-slate-100 leading-tight">
                亞馬遜國家山岳協會
              </div>
              <div className="text-xs text-slate-400 font-medium tracking-wide">
                登山教育教材 · 第十五章
              </div>
            </div>
          </a>
        </div>

        {/* Desktop Quick Nav */}
        <nav className="hidden lg:flex items-center space-x-1" aria-label="章節主要導覽">
          <a
            href="#s1"
            className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-emerald-400 hover:bg-[#16232b] rounded transition-colors"
          >
            01 法規目的
          </a>
          <a
            href="#s2"
            className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-emerald-400 hover:bg-[#16232b] rounded transition-colors"
          >
            02 山域管理
          </a>
          <a
            href="#s3"
            className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-emerald-400 hover:bg-[#16232b] rounded transition-colors"
          >
            03 申請事項
          </a>
          <a
            href="#s4"
            className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-emerald-400 hover:bg-[#16232b] rounded transition-colors"
          >
            04 計畫書工具
          </a>
          <a
            href="#s5"
            className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-emerald-400 hover:bg-[#16232b] rounded transition-colors"
          >
            05 申請流程
          </a>
          <a
            href="#s10"
            className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-emerald-400 hover:bg-[#16232b] rounded transition-colors"
          >
            10 領隊管理
          </a>
          <a
            href="#key-takeaways"
            className="ml-2 px-3 py-1.5 text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 hover:bg-emerald-900/60 rounded transition-colors flex items-center space-x-1"
          >
            <CheckSquare className="w-3.5 h-3.5" aria-hidden="true" />
            <span>重點精華</span>
          </a>
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center space-x-2 lg:hidden">
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-lg bg-[#14232c] border border-[#223541] text-slate-200 hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? '關閉章節目錄' : '開啟章節目錄'}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden border-t border-[#1f303b] bg-[#0f171d] px-4 pt-3 pb-6 max-h-[calc(100vh-4rem)] overflow-y-auto"
        >
          <div className="flex items-center justify-between pb-3 border-b border-[#1b2b36] mb-3">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              第十五章 目錄章節
            </span>
            <span className="text-xs text-emerald-400">共 10 節教材</span>
          </div>
          <nav className="space-y-1" aria-label="手機端章節目錄">
            {SECTIONS.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                onClick={closeMenu}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  activeSection === sec.id
                    ? 'bg-emerald-950/70 text-emerald-300 font-medium border-l-2 border-emerald-500'
                    : 'text-slate-300 hover:bg-[#16232b] hover:text-emerald-400'
                }`}
              >
                <div className="flex items-center space-x-2.5">
                  <span className="text-xs font-mono text-emerald-500/80">{sec.num}</span>
                  <span>{sec.title}</span>
                </div>
              </a>
            ))}
            <div className="pt-2 border-t border-[#1b2b36] mt-2 space-y-1">
              <a
                href="#checklist-tool"
                onClick={closeMenu}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm text-sky-300 hover:bg-[#16232b]"
              >
                <CheckSquare className="w-4 h-4 text-sky-400" aria-hidden="true" />
                <span>行前申請查核檢視工具</span>
              </a>
              <a
                href="#key-takeaways"
                onClick={closeMenu}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm text-emerald-300 hover:bg-[#16232b]"
              >
                <span className="text-emerald-400 font-bold">★</span>
                <span>五個帶下山的觀念</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
