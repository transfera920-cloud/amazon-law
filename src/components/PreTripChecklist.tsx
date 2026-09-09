import React, { useState } from 'react';
import { CheckSquare, Square, RotateCcw, AlertCircle, Sparkles } from 'lucide-react';

interface CheckItem {
  id: string;
  category: string;
  title: string;
  desc: string;
}

const CHECK_ITEMS: CheckItem[] = [
  {
    id: 'c1',
    category: '主管機關',
    title: '確認路線所屬主管機關',
    desc: '核對路徑是否經過國家公園生態保護區、林業保育署保護區或山地管制區。',
  },
  {
    id: 'c2',
    category: '入園證件',
    title: '完成入園申請（如進入國家公園）',
    desc: '下載並列印入園許可證，全員隨身攜帶身分證件正本以備抽驗。',
  },
  {
    id: 'c3',
    category: '入山許可',
    title: '完成入山許可（如進入山地管制區）',
    desc: '線上向警政署申辦或於登山口管制哨依規定完成名冊查驗。',
  },
  {
    id: 'c4',
    category: '山屋營地',
    title: '確認山屋床位 / 指定營位',
    desc: '已核對抽籤與繳費資格，嚴格禁止在未劃設營位任意開闢紮營。',
  },
  {
    id: 'c5',
    category: '計畫書備案',
    title: '登山計畫書（含逃生路線與時程）',
    desc: '完成各節點預計到達時刻、每日行進距離、體能負荷與撤退備案路線。',
  },
  {
    id: 'c6',
    category: '留守通訊',
    title: '約定緊急聯絡人與專責留守人',
    desc: '約定每日回報時間窗口與通訊無訊號處置程序，留守人掌握完整隊員名冊。',
  },
  {
    id: 'c7',
    category: '團隊裝備',
    title: '全員裝備清單與公私裝備盤點',
    desc: '急救箱、通訊裝備（衛星通訊/無線電）、雨具保暖層、緊急迫降露宿袋。',
  },
  {
    id: 'c8',
    category: '行前再審',
    title: '出發前 24-48 小時路況與氣象再核對',
    desc: '查詢林道崩塌封閉公告、步道維修狀態、中央氣象署高山預警。',
  },
];

export default function PreTripChecklist() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const toggleCheck = (id: string) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleReset = () => {
    setChecked({});
  };

  const checkedCount = Object.values(checked).filter(Boolean).length;
  const totalCount = CHECK_ITEMS.length;
  const percentage = Math.round((checkedCount / totalCount) * 100);

  return (
    <section
      id="checklist-tool"
      aria-label="行前申請自我查核工具"
      className="scroll-mt-24 rounded-2xl border border-[#264152] bg-[#111d26] p-6 sm:p-8 md:p-10 shadow-sm"
    >
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center space-x-2 text-sky-400 text-xs font-bold font-mono uppercase tracking-wider mb-1">
            <CheckSquare className="w-4 h-4" aria-hidden="true" />
            <span>登山者實務檢驗工具</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight">
            行前申請與行政管理查核清單
          </h2>
          <p className="text-sm text-slate-300 mt-1">
            出發前逐項盤點，將法規要求化為具體行動，確保隊伍合法且安全啟程。
          </p>
        </div>

        <button
          type="button"
          onClick={handleReset}
          className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-[#2b4455] bg-[#162734] hover:bg-[#1f3749] text-xs font-medium text-slate-300 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
          <span>重設清單</span>
        </button>
      </div>

      {/* Progress Bar Gauge */}
      <div className="rounded-xl border border-[#1e3444] bg-[#0d171f] p-4 mb-6">
        <div className="flex items-center justify-between text-xs sm:text-sm font-semibold mb-2">
          <span className="text-slate-200">
            行前行政查核進度：已完成 {checkedCount} / {totalCount} 項
          </span>
          <span className={checkedCount === totalCount ? 'text-emerald-400 font-bold' : 'text-sky-400 font-bold'}>
            {percentage}%
          </span>
        </div>
        <div className="h-2.5 w-full bg-[#182937] rounded-full overflow-hidden">
          <div
            className={`h-full transition-all duration-300 rounded-full ${
              checkedCount === totalCount ? 'bg-emerald-500' : 'bg-sky-500'
            }`}
            style={{ width: `${percentage}%` }}
          />
        </div>
        {checkedCount === totalCount && (
          <p className="text-xs text-emerald-400 font-medium mt-2 flex items-center space-x-1.5">
            <Sparkles className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span>太棒了！全體 8 項行政查核皆已就緒，請保持對山林的敬畏，安全啟程！</span>
          </p>
        )}
      </div>

      {/* Checklist items */}
      <div className="space-y-3">
        {CHECK_ITEMS.map((item) => {
          const isDone = !!checked[item.id];
          return (
            <div
              key={item.id}
              onClick={() => toggleCheck(item.id)}
              className={`flex items-start space-x-3.5 p-4 rounded-xl border cursor-pointer transition-colors select-none ${
                isDone
                  ? 'border-emerald-700/60 bg-[#14261f]'
                  : 'border-[#203544] bg-[#14222c] hover:bg-[#182a37]'
              }`}
            >
              <button
                type="button"
                className="mt-0.5 shrink-0 text-slate-400 hover:text-slate-200 focus:outline-none"
                aria-label={`標記 ${item.title}`}
              >
                {isDone ? (
                  <CheckSquare className="w-5 h-5 text-emerald-400" />
                ) : (
                  <Square className="w-5 h-5 text-slate-500" />
                )}
              </button>
              <div className="min-w-0 flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                      isDone
                        ? 'bg-emerald-900/80 text-emerald-300'
                        : 'bg-[#1b2f3d] text-slate-400'
                    }`}
                  >
                    {item.category}
                  </span>
                  <h3
                    className={`text-sm sm:text-base font-bold transition-colors ${
                      isDone ? 'text-emerald-200 line-through' : 'text-slate-100'
                    }`}
                  >
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
