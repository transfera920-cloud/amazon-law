import React from 'react';
import { Layers, Bookmark } from 'lucide-react';

export default function RelatedChapters() {
  const chapters = [
    {
      num: '第 9 章',
      title: '登山風險管理',
      desc: '管理登山風險',
      isCurrent: false,
    },
    {
      num: '第 10 章',
      title: '登山求援與應變',
      desc: '事故後處理',
      isCurrent: false,
    },
    {
      num: '第 15 章',
      title: '登山法規與申請',
      desc: '確保合法、安全、有責任地進入山域',
      isCurrent: true,
    },
  ];

  return (
    <section
      id="related-chapters"
      aria-label="教材體系關聯"
      className="scroll-mt-24 rounded-2xl border border-[#223541] bg-[#121c23] p-6 sm:p-8 md:p-10 shadow-sm"
    >
      <div className="flex items-center space-x-3 mb-4">
        <span className="px-2.5 py-1 rounded text-xs font-mono font-bold bg-emerald-950 text-emerald-400 border border-emerald-800/60">
          CURRICULUM
        </span>
        <span className="text-xs text-slate-400 tracking-wide font-medium">
          教材架構脈絡
        </span>
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight mb-2">
        在整體教材中的位置
      </h2>
      <p className="text-sm sm:text-base text-slate-400 mb-8">
        本章與登山風險管理、登山求援與應變環環相扣，共同構成完整的登山安全防護網。
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {chapters.map((ch) => (
          <div
            key={ch.num}
            className={`rounded-xl p-5 border transition-all ${
              ch.isCurrent
                ? 'border-emerald-600 bg-[#14261f] shadow-md ring-1 ring-emerald-500/50'
                : 'border-[#223541] bg-[#16232b]'
            }`}
          >
            <div className="flex items-center justify-between mb-2.5">
              <span
                className={`text-xs font-bold px-2 py-0.5 rounded ${
                  ch.isCurrent
                    ? 'bg-emerald-900/80 text-emerald-200 border border-emerald-700/60'
                    : 'bg-[#1e2f3a] text-slate-400 border border-[#253d4c]'
                }`}
              >
                {ch.num}
              </span>
              {ch.isCurrent && (
                <span className="text-[11px] font-semibold text-emerald-400 flex items-center space-x-1">
                  <Bookmark className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>本章研讀中</span>
                </span>
              )}
            </div>

            <h3 className="text-base font-bold text-slate-100 mb-1.5">
              {ch.title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              {ch.desc}
            </p>

            {ch.isCurrent && (
              <span className="inline-block text-xs font-medium text-emerald-400 bg-emerald-950/70 border border-emerald-800/50 px-2.5 py-1 rounded">
                目前所在教材
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
