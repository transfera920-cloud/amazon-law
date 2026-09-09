import React from 'react';
import { Compass, CheckCircle } from 'lucide-react';

export default function KeyTakeaways() {
  const takeaways = [
    {
      num: '01',
      title: '了解管理規範',
      desc: '登山前需要了解管理規範。',
      sub: '山域非無法地帶，預先確認主管機關與管制強度是行程規劃的必要起點。',
    },
    {
      num: '02',
      title: '申請制度的本質',
      desc: '申請制度是安全管理的一環。',
      sub: '申請非設限阻擋，而是承載量管控、行蹤掌握與搜救啟動的制度基礎。',
    },
    {
      num: '03',
      title: '計畫書是安全工具',
      desc: '登山計畫書不是文件，而是風險工具。',
      sub: '不應流於應付核准的形式，而是自我掌握、留守約定與應變判斷的保命儀表板。',
    },
    {
      num: '04',
      title: '尊重與倫理',
      desc: '尊重山域規則，也是尊重山與其他登山者。',
      sub: '遵守山屋作息、恪遵無痕山林垃圾全下山，共同維護山林生態與登山者社群。',
    },
    {
      num: '05',
      title: '責任與專業',
      desc: '專業登山者除了會走山，也懂管理責任。',
      sub: '兼備體能路感與行政法規素養，同進同退，才是真正成熟負責的登山家。',
    },
  ];

  return (
    <section
      id="key-takeaways"
      aria-label="本章重點整理"
      className="scroll-mt-24 rounded-2xl border border-emerald-800/70 bg-[#10221b] p-6 sm:p-8 md:p-10 shadow-sm"
    >
      <div className="flex items-center space-x-3 mb-4">
        <span className="px-2.5 py-1 rounded text-xs font-mono font-bold bg-emerald-900/80 text-emerald-300 border border-emerald-700/60">
          TAKEAWAYS
        </span>
        <span className="text-xs text-emerald-400 tracking-wide font-medium">
          核心觀念精華
        </span>
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight mb-2">
        本章重點整理
      </h2>
      <h3 className="text-lg sm:text-xl font-semibold text-emerald-300 mb-8 flex items-center space-x-2">
        <span>五個帶下山的觀念</span>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {takeaways.map((item, idx) => (
          <div
            key={item.num}
            className={`rounded-xl border border-emerald-900/60 bg-[#142820] p-5 flex flex-col justify-between ${
              idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl font-black font-mono text-emerald-400">
                  {item.num}
                </span>
                <CheckCircle className="w-5 h-5 text-emerald-500/80" aria-hidden="true" />
              </div>
              <p className="text-base sm:text-lg font-bold text-slate-100 mb-2">
                {item.desc}
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {item.sub}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
