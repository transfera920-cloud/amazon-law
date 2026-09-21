import React, { useState, useEffect } from 'react';
import { Compass } from 'lucide-react';

interface HeaderProps {
  activeSection?: string;
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
              <div className="text-sm font-bold tracking-wider text-slate-100 leading-tight group-hover:text-emerald-400 transition-colors">
                亞馬遜國家山岳協會
              </div>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
}
