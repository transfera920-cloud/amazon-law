import React from 'react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[#1f303b] bg-gradient-to-b from-[#0a1014] via-[#0e171e] to-[#121c24] pt-12 pb-16 sm:pt-16 sm:pb-20">
      {/* Background Topographic Contour & Mountain Silhouette Pattern in CSS/SVG */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          className="w-full h-full object-cover"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 450 C320 380 500 520 800 420 C1100 320 1260 480 1440 400 L1440 600 L0 600 Z"
            fill="#1f333f"
          />
          <path
            d="M0 490 C280 430 520 540 760 470 C1000 400 1200 510 1440 460 L1440 600 L0 600 Z"
            fill="#162732"
          />
          <path
            d="M0 540 C360 500 680 560 1020 510 C1240 480 1360 530 1440 520 L1440 600 L0 600 Z"
            fill="#101c24"
          />
          {/* Subtle Contour Lines */}
          <path
            d="M-50 200 C300 120 700 300 1100 180 C1300 120 1400 220 1500 190"
            stroke="#2d4959"
            strokeWidth="1"
            strokeDasharray="4 6"
          />
          <path
            d="M-50 280 C320 200 680 370 1080 250 C1280 190 1380 290 1500 260"
            stroke="#223946"
            strokeWidth="1"
            strokeDasharray="4 6"
          />
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sole H1 on page */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight sm:leading-tight mb-4">
          登山法規與申請
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-6 max-w-3xl">
          了解登山相關規範，做好申請準備，建立負責任的登山行為。
        </p>

        {/* Supplementary Text Callout Box */}
        <div className="border-l-4 border-emerald-600 bg-[#142029]/85 backdrop-blur-sm rounded-r-xl p-4 sm:p-5 mb-8 border-y border-r border-[#1e303d]">
          <div className="space-y-2 text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
            <p className="flex items-start space-x-2">
              <span className="text-emerald-400 font-bold select-none">•</span>
              <span>出發前，先完成申請與計畫——這是專業登山的第一步。</span>
            </p>
            <p className="flex items-start space-x-2">
              <span className="text-emerald-400 font-bold select-none">•</span>
              <span>登山自由，但不是無限制的自由。</span>
            </p>
            <p className="flex items-start space-x-2">
              <span className="text-emerald-400 font-bold select-none">•</span>
              <span>尊重山域管理規範，也是保護自己與環境。</span>
            </p>
          </div>
        </div>

        {/* Quick jump to first section */}
        <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm">
          <a
            href="#s1"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold shadow-sm transition-colors duration-200"
          >
            <span>開始研讀第 01 節</span>
            <ArrowDown className="w-4 h-4" aria-hidden="true" />
          </a>
          <a
            href="#toc"
            className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-lg bg-[#16232c] hover:bg-[#1e2f3b] border border-[#223541] text-slate-300 font-medium transition-colors duration-200"
          >
            <span>瀏覽全章目錄（10 節）</span>
          </a>
        </div>
      </div>
    </section>
  );
}
