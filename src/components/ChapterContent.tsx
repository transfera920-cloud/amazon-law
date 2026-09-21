import React from 'react';
import {
  ShieldAlert,
  CheckCircle2,
  FileText,
  AlertTriangle,
  Lightbulb,
  ExternalLink,
  ChevronRight,
  ClipboardList,
  Compass,
} from 'lucide-react';
import {
  RegPurposeSvg,
  MountainZonesSvg,
  PermitCheckSvg,
  PlanAsRiskToolSvg,
  ApplicationProcessSvg,
  NationalParkRulesSvg,
  HutCampRulesSvg,
  MountaineerDutySvg,
  CommonMistakesSvg,
  LeaderAdminCycleSvg,
} from './illustrations/SectionSvgs';

export default function ChapterContent() {
  return (
    <article className="space-y-16 lg:space-y-20">
      {/* ------------------------------------------------------------- */}
      {/* Section 01 */}
      {/* ------------------------------------------------------------- */}
      <section
        id="s1"
        className="scroll-mt-24 rounded-2xl border border-[#223541] bg-[#121c23] p-6 sm:p-8 md:p-10 shadow-sm"
      >
        <div className="flex items-center space-x-3 mb-4">
          <span className="px-2.5 py-1 rounded text-xs font-mono font-bold bg-emerald-950 text-emerald-400 border border-emerald-800/60">
            SECTION 01
          </span>
          <span className="text-xs text-slate-400 tracking-wide font-medium">
            制度建立初衷
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight mb-6">
          為什麼登山需要了解法規
        </h2>

        <div className="space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg">
          <p className="text-slate-200 font-medium border-l-2 border-emerald-500 pl-4 py-0.5">
            山域不是無管理空間。所有進入山區的人，都在一套共同的規範之中活動。
          </p>

          <p>
            管理制度的目的：
          </p>

          <ul className="space-y-2.5 my-4 pl-2">
            <li className="flex items-start space-x-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2.5 shrink-0" />
              <span>保護自然環境，避免生態負荷過重</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2.5 shrink-0" />
              <span>降低事故風險，讓路線資訊可控</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2.5 shrink-0" />
              <span>協助救援單位掌握位置與人數</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2.5 shrink-0" />
              <span>維護山區秩序與其他隊伍的權益</span>
            </li>
          </ul>
        </div>

        {/* Section 01 Inline SVG */}
        <RegPurposeSvg />

        {/* 核心觀念 Callout */}
        <div className="mt-6 rounded-xl border border-emerald-800/60 bg-[#12231e] p-5 sm:p-6">
          <div className="flex items-center space-x-2 text-emerald-400 font-bold mb-3">
            <Lightbulb className="w-5 h-5" aria-hidden="true" />
            <h3 className="text-base font-bold text-emerald-300">核心觀念</h3>
          </div>
          <div className="space-y-2 text-slate-200 text-sm sm:text-base leading-relaxed">
            <p>
              申請不是限制登山，而是安全管理的一部分。
            </p>
            <p>
              不同山域的管理制度與申請要求可能不同，並非所有路線都需要相同手續。
            </p>
            <p className="font-semibold text-emerald-200 pt-1">
              因此登山前先確認管理單位與適用規範，本身就是行程規劃的一部分。
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* Section 02 */}
      {/* ------------------------------------------------------------- */}
      <section
        id="s2"
        className="scroll-mt-24 rounded-2xl border border-[#223541] bg-[#121c23] p-6 sm:p-8 md:p-10 shadow-sm"
      >
        <div className="flex items-center space-x-3 mb-4">
          <span className="px-2.5 py-1 rounded text-xs font-mono font-bold bg-emerald-950 text-emerald-400 border border-emerald-800/60">
            SECTION 02
          </span>
          <span className="text-xs text-slate-400 tracking-wide font-medium">
            主管機關體系
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight mb-6">
          台灣山域管理基本概念
        </h2>

        <p className="text-slate-200 font-medium text-base sm:text-lg mb-6">
          台灣山區可能同時涉及多種管理身分，出發前必須先確認路線所在。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-6">
          <div className="rounded-xl border border-[#223541] bg-[#16232b] p-5">
            <div className="flex items-center space-x-2 text-emerald-400 font-bold text-base mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <h3 className="text-base font-bold text-slate-100">國家公園</h3>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              由國家公園主管機關管理，部分區域與路線通常需辦理入園申請。
            </p>
          </div>

          <div className="rounded-xl border border-[#223541] bg-[#16232b] p-5">
            <div className="flex items-center space-x-2 text-sky-400 font-bold text-base mb-2">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <h3 className="text-base font-bold text-slate-100">林業及自然保育區域</h3>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              涉及自然保護、生態研究、資源管理。
            </p>
          </div>

          <div className="rounded-xl border border-[#223541] bg-[#16232b] p-5">
            <div className="flex items-center space-x-2 text-purple-400 font-bold text-base mb-2">
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              <h3 className="text-base font-bold text-slate-100">山地管制區域</h3>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              涉及國防、治安管理，可能需依規定辦理入山手續。
            </p>
          </div>

          <div className="rounded-xl border border-[#223541] bg-[#16232b] p-5">
            <div className="flex items-center space-x-2 text-amber-400 font-bold text-base mb-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <h3 className="text-base font-bold text-slate-100">其他保護區域</h3>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              如水源保護、原住民傳統領域。
            </p>
          </div>
        </div>

        {/* Section 02 Inline SVG */}
        <MountainZonesSvg />

        <div className="mt-6 rounded-xl border border-[#223541] bg-[#142028] p-5 sm:p-6 space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
          <p>不同區域可能有不同的：</p>
          <ul className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm font-medium text-slate-200">
            <li className="px-3 py-2 rounded bg-[#1b2b35] border border-[#223d4d] text-center">
              入園規定
            </li>
            <li className="px-3 py-2 rounded bg-[#1b2b35] border border-[#223d4d] text-center">
              入山規定
            </li>
            <li className="px-3 py-2 rounded bg-[#1b2b35] border border-[#223d4d] text-center">
              申請方式
            </li>
            <li className="px-3 py-2 rounded bg-[#1b2b35] border border-[#223d4d] text-center">
              限制事項
            </li>
          </ul>
          <p className="pt-2 text-slate-300">
            同一條路線也可能橫跨多個管理身分。
          </p>
          <p>
            實際管理範圍與申請要求，仍須依：
            <span className="font-semibold text-slate-100">【路線位置】</span>、
            <span className="font-semibold text-slate-100">【主管機關】</span>與
            <span className="font-semibold text-slate-100">【當時公告】</span>確認。
          </p>
          <p className="text-emerald-400/90 font-medium">
            部分路線可能同時涉及不同管理機關。
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* Section 03 */}
      {/* ------------------------------------------------------------- */}
      <section
        id="s3"
        className="scroll-mt-24 rounded-2xl border border-[#223541] bg-[#121c23] p-6 sm:p-8 md:p-10 shadow-sm"
      >
        <div className="flex items-center space-x-3 mb-4">
          <span className="px-2.5 py-1 rounded text-xs font-mono font-bold bg-emerald-950 text-emerald-400 border border-emerald-800/60">
            SECTION 03
          </span>
          <span className="text-xs text-slate-400 tracking-wide font-medium">
            出發前逐項盤點
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight mb-6">
          登山前需要確認的申請事項
        </h2>

        <p className="text-slate-200 font-medium text-base sm:text-lg mb-6">
          建立自己的出發前檢查流程，逐項確認。
        </p>

        <div className="space-y-6 text-slate-300">
          <div className="rounded-xl border border-[#223541] bg-[#16232b] p-5 sm:p-6">
            <h3 className="text-lg font-bold text-slate-100 mb-3 flex items-center space-x-2">
              <span className="text-emerald-400">一、</span>
              <span>是否需要入園申請</span>
            </h3>
            <p className="text-slate-400 text-sm mb-2">需確認：</p>
            <ul className="space-y-1.5 text-sm sm:text-base pl-2">
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                <span>路線位置與範圍</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                <span>所屬管理單位</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                <span>申請開放與截止期限</span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-[#223541] bg-[#16232b] p-5 sm:p-6">
            <h3 className="text-lg font-bold text-slate-100 mb-3 flex items-center space-x-2">
              <span className="text-emerald-400">二、</span>
              <span>是否需要入山申請</span>
            </h3>
            <p className="text-slate-400 text-sm mb-2">需確認：</p>
            <ul className="space-y-1.5 text-sm sm:text-base pl-2">
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                <span>山域規範與管制強度</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                <span>身分資料與證件</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                <span>行程資料與人員名單</span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-[#223541] bg-[#16232b] p-5 sm:p-6">
            <h3 className="text-lg font-bold text-slate-100 mb-3 flex items-center space-x-2">
              <span className="text-emerald-400">三、</span>
              <span>山屋與營地規定</span>
            </h3>
            <p className="text-slate-400 text-sm mb-2">需確認：</p>
            <ul className="space-y-1.5 text-sm sm:text-base pl-2">
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                <span>住宿方式</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                <span>山屋 / 營地 / 迫降備案</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                <span>名額與抽籤方式</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                <span>使用規則與時段</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 03 Inline SVG */}
        <PermitCheckSvg />

        {/* 判斷原則 Callout */}
        <div className="mt-6 rounded-xl border border-sky-800/60 bg-[#112330] p-5 sm:p-6">
          <div className="flex items-center space-x-2 text-sky-400 font-bold mb-3">
            <ShieldAlert className="w-5 h-5" aria-hidden="true" />
            <h3 className="text-base font-bold text-sky-300">判斷原則</h3>
          </div>
          <p className="text-slate-200 font-semibold mb-2">
            「是否需要申請」不能只靠山名判斷。
          </p>
          <div className="space-y-1.5 text-slate-300 text-sm sm:text-base">
            <p>應確認：</p>
            <ul className="pl-4 space-y-1">
              <li>1. 實際路線範圍</li>
              <li>2. 所屬管理單位</li>
              <li>3. 當時公告內容</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* Section 04 */}
      {/* ------------------------------------------------------------- */}
      <section
        id="s4"
        className="scroll-mt-24 rounded-2xl border border-[#223541] bg-[#121c23] p-6 sm:p-8 md:p-10 shadow-sm"
      >
        <div className="flex items-center space-x-3 mb-4">
          <span className="px-2.5 py-1 rounded text-xs font-mono font-bold bg-emerald-950 text-emerald-400 border border-emerald-800/60">
            SECTION 04
          </span>
          <span className="text-xs text-slate-400 tracking-wide font-medium">
            核心安全工具
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight mb-4">
          登山計畫書的重要性
        </h2>

        <div className="inline-block px-3 py-1 rounded-md bg-emerald-900/50 border border-emerald-700/60 text-emerald-300 text-sm font-semibold mb-6">
          <h3 className="text-sm font-bold text-emerald-300 inline">不是文件，是風險工具</h3>
        </div>

        <p className="text-slate-200 font-medium text-base sm:text-lg mb-6">
          登山計畫書不是行政文件，而是風險管理工具。
        </p>

        <div className="rounded-xl border border-[#223541] bg-[#16232b] p-5 sm:p-6 mb-6">
          <h3 className="text-base font-bold text-slate-100 mb-3">一份完整的計畫書應包含：</h3>
          <ul className="space-y-2 text-slate-300 text-sm sm:text-base pl-2">
            <li className="flex items-start space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" aria-hidden="true" />
              <span>詳細路線與逃生路線</span>
            </li>
            <li className="flex items-start space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" aria-hidden="true" />
              <span>日期、預定時間與每日行程</span>
            </li>
            <li className="flex items-start space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" aria-hidden="true" />
              <span>隊員資料與角色分工</span>
            </li>
            <li className="flex items-start space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" aria-hidden="true" />
              <span>裝備清單</span>
            </li>
            <li className="flex items-start space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" aria-hidden="true" />
              <span>緊急聯絡方式與留守人</span>
            </li>
          </ul>
        </div>

        <div className="rounded-xl border border-emerald-900/60 bg-[#12231e] p-5 sm:p-6 mb-6">
          <h3 className="text-base font-bold text-emerald-300 mb-3">它同時承擔三個用途：</h3>
          <ol className="space-y-2.5 text-slate-200 text-sm sm:text-base">
            <li className="flex items-start space-x-3">
              <span className="w-6 h-6 rounded-full bg-emerald-800 text-emerald-200 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                1
              </span>
              <span>讓自己在出發前具體掌握行程</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="w-6 h-6 rounded-full bg-emerald-800 text-emerald-200 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                2
              </span>
              <span>提供留守人明確的資訊</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="w-6 h-6 rounded-full bg-emerald-800 text-emerald-200 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                3
              </span>
              <span>在事故發生時，協助救援單位判斷</span>
            </li>
          </ol>
        </div>

        {/* Section 04 Inline SVG */}
        <PlanAsRiskToolSvg />

        <div className="mt-6 rounded-xl border border-[#223541] bg-[#142028] p-5 sm:p-6 text-slate-300 text-sm sm:text-base leading-relaxed">
          <p className="mb-3">
            即使某些行程不需要提出申請，領隊仍應在出發前用計畫書逐項確認：
          </p>
          <div className="flex flex-wrap gap-2 text-sm font-medium text-slate-200 mb-3">
            <span className="px-3 py-1 rounded bg-[#1c2c36] border border-[#274252]">路線</span>
            <span className="px-3 py-1 rounded bg-[#1c2c36] border border-[#274252]">時間</span>
            <span className="px-3 py-1 rounded bg-[#1c2c36] border border-[#274252]">隊員</span>
            <span className="px-3 py-1 rounded bg-[#1c2c36] border border-[#274252]">裝備</span>
            <span className="px-3 py-1 rounded bg-[#1c2c36] border border-[#274252]">聯絡方式</span>
            <span className="px-3 py-1 rounded bg-[#1c2c36] border border-[#274252]">緊急應變</span>
            <span className="px-3 py-1 rounded bg-[#1c2c36] border border-[#274252]">留守資訊</span>
          </div>
          <p className="font-semibold text-emerald-400">
            而不是只把它當成通過申請用的表格。
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* Section 05 */}
      {/* ------------------------------------------------------------- */}
      <section
        id="s5"
        className="scroll-mt-24 rounded-2xl border border-[#223541] bg-[#121c23] p-6 sm:p-8 md:p-10 shadow-sm"
      >
        <div className="flex items-center space-x-3 mb-4">
          <span className="px-2.5 py-1 rounded text-xs font-mono font-bold bg-emerald-950 text-emerald-400 border border-emerald-800/60">
            SECTION 05
          </span>
          <span className="text-xs text-slate-400 tracking-wide font-medium">
            五階段程序
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight mb-4">
          申請流程基本教學
        </h2>

        <p className="text-slate-300 text-base sm:text-lg mb-6">
          不同區域細節不同，但一般流程一致：
        </p>

        <div className="space-y-4 mb-6">
          <div className="rounded-xl border border-[#223541] bg-[#16232b] p-4 sm:p-5 flex items-start space-x-4">
            <span className="w-8 h-8 rounded-lg bg-emerald-900/80 text-emerald-300 font-mono font-bold flex items-center justify-center shrink-0 mt-0.5 border border-emerald-700/50">
              01
            </span>
            <div>
              <h3 className="text-base font-bold text-slate-100">第一步</h3>
              <p className="text-slate-300 text-sm sm:text-base mt-1">
                確認路線與管理單位
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-[#223541] bg-[#16232b] p-4 sm:p-5 flex items-start space-x-4">
            <span className="w-8 h-8 rounded-lg bg-emerald-900/80 text-emerald-300 font-mono font-bold flex items-center justify-center shrink-0 mt-0.5 border border-emerald-700/50">
              02
            </span>
            <div>
              <h3 className="text-base font-bold text-slate-100">第二步</h3>
              <p className="text-slate-300 text-sm sm:text-base mt-1">
                準備資料：人員、行程、路線
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-[#223541] bg-[#16232b] p-4 sm:p-5 flex items-start space-x-4">
            <span className="w-8 h-8 rounded-lg bg-emerald-900/80 text-emerald-300 font-mono font-bold flex items-center justify-center shrink-0 mt-0.5 border border-emerald-700/50">
              03
            </span>
            <div>
              <h3 className="text-base font-bold text-slate-100">第三步</h3>
              <p className="text-slate-300 text-sm sm:text-base mt-1">
                提出申請
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-[#223541] bg-[#16232b] p-4 sm:p-5 flex items-start space-x-4">
            <span className="w-8 h-8 rounded-lg bg-emerald-900/80 text-emerald-300 font-mono font-bold flex items-center justify-center shrink-0 mt-0.5 border border-emerald-700/50">
              04
            </span>
            <div>
              <h3 className="text-base font-bold text-slate-100">第四步</h3>
              <p className="text-slate-300 text-sm sm:text-base mt-1">
                確認核准結果
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-[#223541] bg-[#16232b] p-4 sm:p-5 flex items-start space-x-4">
            <span className="w-8 h-8 rounded-lg bg-emerald-900/80 text-emerald-300 font-mono font-bold flex items-center justify-center shrink-0 mt-0.5 border border-emerald-700/50">
              05
            </span>
            <div>
              <h3 className="text-base font-bold text-slate-100">第五步</h3>
              <p className="text-slate-300 text-sm sm:text-base mt-1">
                出發前再次確認規定
              </p>
            </div>
          </div>
        </div>

        {/* Section 05 Inline SVG */}
        <ApplicationProcessSvg />

        <div className="mt-6 space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed bg-[#142028] p-5 sm:p-6 rounded-xl border border-[#223541]">
          <p>
            不同管理機關的：
            <span className="text-slate-100 font-medium">申請流程、開放時間、文件要求、申請期限</span>
            可能不同。
          </p>
          <p className="font-semibold text-slate-200">
            實際操作應以該管理單位最新公告為準。
          </p>
          <p className="text-emerald-400">
            目前官方「<a href="https://hike.taiwan.gov.tw/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-emerald-300">臺灣登山申請一站式服務網</a>」已整合部分國家公園、林業及自然保育與入山申請，可作為查詢起點。
          </p>
          <p className="text-xs text-slate-400 pt-2 border-t border-[#20323e]">
            本教材不取代主管機關的最新公告。
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* Section 06 */}
      {/* ------------------------------------------------------------- */}
      <section
        id="s6"
        className="scroll-mt-24 rounded-2xl border border-[#223541] bg-[#121c23] p-6 sm:p-8 md:p-10 shadow-sm"
      >
        <div className="flex items-center space-x-3 mb-4">
          <span className="px-2.5 py-1 rounded text-xs font-mono font-bold bg-emerald-950 text-emerald-400 border border-emerald-800/60">
            SECTION 06
          </span>
          <span className="text-xs text-slate-400 tracking-wide font-medium">
            自然生態保護區
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight mb-6">
          國家公園登山注意事項
        </h2>

        <div className="rounded-xl border border-[#223541] bg-[#16232b] p-5 sm:p-6 mb-6">
          <h3 className="text-base font-bold text-slate-100 mb-3">國家公園常見要求：</h3>
          <ul className="space-y-2.5 text-slate-200 text-sm sm:text-base pl-2">
            <li className="flex items-start space-x-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
              <span>依規定完成入園申請</span>
            </li>
            <li className="flex items-start space-x-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
              <span>依規定完成山屋申請</span>
            </li>
            <li className="flex items-start space-x-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
              <span>遵守生態保護規範</span>
            </li>
            <li className="flex items-start space-x-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
              <span>不採集</span>
            </li>
            <li className="flex items-start space-x-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
              <span>不干擾</span>
            </li>
            <li className="flex items-start space-x-2.5 font-semibold text-emerald-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
              <span>垃圾必須帶下山，包含廚餘</span>
            </li>
          </ul>
        </div>

        {/* Section 06 Inline SVG */}
        <NationalParkRulesSvg />

        {/* 觀念 Callout */}
        <div className="mt-6 rounded-xl border border-emerald-800/60 bg-[#12231e] p-5 sm:p-6">
          <div className="flex items-center space-x-2 text-emerald-400 font-bold mb-2">
            <Lightbulb className="w-5 h-5" aria-hidden="true" />
            <h3 className="text-base font-bold text-emerald-300">觀念</h3>
          </div>
          <p className="text-slate-100 font-medium text-base sm:text-lg leading-relaxed">
            進入自然保護區，不是只有享受環境，也需要維護環境。
          </p>
          <div className="mt-3 text-slate-300 text-sm sm:text-base space-y-2 border-t border-emerald-900/60 pt-3">
            <p>
              不同國家公園、不同生態保護區與不同路線，可能有不同的：申請、住宿、進出、環境保護規定。
            </p>
            <p className="font-semibold text-emerald-200">
              出發前應查閱該管理單位最新公告。
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* Section 07 */}
      {/* ------------------------------------------------------------- */}
      <section
        id="s7"
        className="scroll-mt-24 rounded-2xl border border-[#223541] bg-[#121c23] p-6 sm:p-8 md:p-10 shadow-sm"
      >
        <div className="flex items-center space-x-3 mb-4">
          <span className="px-2.5 py-1 rounded text-xs font-mono font-bold bg-emerald-950 text-emerald-400 border border-emerald-800/60">
            SECTION 07
          </span>
          <span className="text-xs text-slate-400 tracking-wide font-medium">
            山域過夜禮節
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight mb-6">
          山屋、營地與住宿規範
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="rounded-xl border border-[#223541] bg-[#16232b] p-5 sm:p-6">
            <h3 className="text-lg font-bold text-slate-100 mb-4 pb-2 border-b border-[#223746] flex items-center space-x-2">
              <span className="text-sky-400">■</span>
              <span>山屋</span>
            </h3>
            <ul className="space-y-3 text-slate-300 text-sm sm:text-base">
              <li className="flex items-start space-x-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span>遵守到達與離開時間。</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span>尊重其他隊伍作息。</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span>維護清潔。</span>
              </li>
              <li className="flex items-start space-x-2 font-medium text-emerald-300">
                <span className="text-emerald-400 font-bold">•</span>
                <span>離開如未曾到訪。</span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-[#223541] bg-[#16232b] p-5 sm:p-6">
            <h3 className="text-lg font-bold text-slate-100 mb-4 pb-2 border-b border-[#223746] flex items-center space-x-2">
              <span className="text-emerald-400">■</span>
              <span>營地</span>
            </h3>
            <ul className="space-y-3 text-slate-300 text-sm sm:text-base">
              <li className="flex items-start space-x-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span>於指定區域紮營。</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span>不破壞植被與地表。</span>
              </li>
              <li className="flex items-start space-x-2 font-medium text-amber-300">
                <span className="text-amber-400 font-bold">•</span>
                <span>嚴格控制火源。</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 07 Inline SVG */}
        <HutCampRulesSvg />

        <div className="mt-6 rounded-xl border border-[#223541] bg-[#142028] p-5 sm:p-6 text-slate-300 text-sm sm:text-base leading-relaxed space-y-2">
          <p>
            山屋、營地的：
            <span className="text-slate-100 font-medium">開放方式、住宿資格、申請方式、使用規範</span>
            可能依管理單位及當期公告調整。
          </p>
          <p className="font-semibold text-emerald-400">
            訂位或紮營前請再次確認。
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* Section 08 */}
      {/* ------------------------------------------------------------- */}
      <section
        id="s8"
        className="scroll-mt-24 rounded-2xl border border-[#223541] bg-[#121c23] p-6 sm:p-8 md:p-10 shadow-sm"
      >
        <div className="flex items-center space-x-3 mb-4">
          <span className="px-2.5 py-1 rounded text-xs font-mono font-bold bg-emerald-950 text-emerald-400 border border-emerald-800/60">
            SECTION 08
          </span>
          <span className="text-xs text-slate-400 tracking-wide font-medium">
            登山素養與自律
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight mb-4">
          登山者責任與倫理
        </h2>

        <p className="text-slate-200 font-medium text-base sm:text-lg mb-6">
          負責任登山不只是走完路線，而是承擔三個層次的責任。
        </p>

        <div className="space-y-4 mb-6">
          <div className="rounded-xl border border-[#223541] bg-[#16232b] p-5">
            <h3 className="text-base font-bold text-slate-100 mb-2.5 flex items-center space-x-2">
              <span className="w-6 h-6 rounded-full bg-emerald-950 border border-emerald-700/60 text-emerald-300 text-xs font-bold flex items-center justify-center">
                一
              </span>
              <span>環境責任</span>
            </h3>
            <ul className="space-y-1.5 text-slate-300 text-sm sm:text-base pl-8">
              <li>• 垃圾帶走，不留痕跡。</li>
              <li>• 不破壞自然地貌。</li>
              <li>• 尊重野生動物與棲地。</li>
            </ul>
          </div>

          <div className="rounded-xl border border-[#223541] bg-[#16232b] p-5">
            <h3 className="text-base font-bold text-slate-100 mb-2.5 flex items-center space-x-2">
              <span className="w-6 h-6 rounded-full bg-sky-950 border border-sky-700/60 text-sky-300 text-xs font-bold flex items-center justify-center">
                二
              </span>
              <span>公共安全責任</span>
            </h3>
            <ul className="space-y-1.5 text-slate-300 text-sm sm:text-base pl-8">
              <li>• 不冒險造成救援負擔。</li>
              <li>• 提前評估自身能力。</li>
            </ul>
          </div>

          <div className="rounded-xl border border-[#223541] bg-[#16232b] p-5">
            <h3 className="text-base font-bold text-slate-100 mb-2.5 flex items-center space-x-2">
              <span className="w-6 h-6 rounded-full bg-purple-950 border border-purple-700/60 text-purple-300 text-xs font-bold flex items-center justify-center">
                三
              </span>
              <span>團隊責任</span>
            </h3>
            <ul className="space-y-1.5 text-slate-300 text-sm sm:text-base pl-8">
              <li>• 遵守既定計畫。</li>
              <li>• 尊重領隊決策。</li>
            </ul>
          </div>
        </div>

        {/* Section 08 Inline SVG */}
        <MountaineerDutySvg />

        <div className="mt-6 rounded-xl border border-[#223541] bg-[#142028] p-5 sm:p-6 text-slate-300 text-sm sm:text-base leading-relaxed space-y-2">
          <p>
            登山倫理不一定等同於法律規定。
          </p>
          <p className="font-semibold text-slate-100">
            但負責任的登山行為應同時尊重：
            <span className="text-emerald-400">法規</span>、
            <span className="text-emerald-400">環境</span>、
            <span className="text-emerald-400">其他登山者</span>。
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* Section 09 */}
      {/* ------------------------------------------------------------- */}
      <section
        id="s9"
        className="scroll-mt-24 rounded-2xl border border-[#223541] bg-[#121c23] p-6 sm:p-8 md:p-10 shadow-sm"
      >
        <div className="flex items-center space-x-3 mb-4">
          <span className="px-2.5 py-1 rounded text-xs font-mono font-bold bg-amber-950 text-amber-400 border border-amber-800/60">
            SECTION 09
          </span>
          <span className="text-xs text-slate-400 tracking-wide font-medium">
            防錯警示與補救
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight mb-6">
          常見申請錯誤
        </h2>

        <div className="space-y-5 mb-6">
          <div className="rounded-xl border border-red-900/40 bg-[#1e1518] p-5">
            <h3 className="text-base font-bold text-red-300 mb-2 flex items-center space-x-2">
              <AlertTriangle className="w-4 h-4 text-red-400" aria-hidden="true" />
              <span>錯誤一：太晚準備申請</span>
            </h3>
            <p className="text-slate-300 text-sm sm:text-base">
              <span className="text-red-300 font-medium">問題：</span>錯過申請期限，行程直接取消。
            </p>
            <p className="text-emerald-300 text-sm sm:text-base mt-1">
              <span className="font-medium text-emerald-400">改善：</span>至少提前依各單位公告時程規劃申請。
            </p>
          </div>

          <div className="rounded-xl border border-red-900/40 bg-[#1e1518] p-5">
            <h3 className="text-base font-bold text-red-300 mb-2 flex items-center space-x-2">
              <AlertTriangle className="w-4 h-4 text-red-400" aria-hidden="true" />
              <span>錯誤二：路線變更卻未重新確認規定</span>
            </h3>
            <p className="text-slate-300 text-sm sm:text-base">
              <span className="text-red-300 font-medium">問題：</span>申請內容與實際行程不符，可能違反管理規定。
            </p>
            <p className="text-emerald-300 text-sm sm:text-base mt-1">
              <span className="font-medium text-emerald-400">改善：</span>任何路線變更前，重新確認管理單位與規定。
            </p>
          </div>

          <div className="rounded-xl border border-red-900/40 bg-[#1e1518] p-5">
            <h3 className="text-base font-bold text-red-300 mb-2 flex items-center space-x-2">
              <AlertTriangle className="w-4 h-4 text-red-400" aria-hidden="true" />
              <span>錯誤三：只把申請當形式</span>
            </h3>
            <p className="text-slate-300 text-sm sm:text-base">
              <span className="text-red-300 font-medium">問題：</span>忽略計畫書的安全價值，資料流於敷衍。
            </p>
            <p className="text-emerald-300 text-sm sm:text-base mt-1">
              <span className="font-medium text-emerald-400">改善：</span>將申請資料作為風險管理工具認真填寫。
            </p>
          </div>
        </div>

        {/* Section 09 Inline SVG */}
        <CommonMistakesSvg />

        {/* 重要提醒 Callout */}
        <div className="mt-6 rounded-xl border border-amber-800/70 bg-[#211b15] p-5 sm:p-6">
          <div className="flex items-center space-x-2 text-amber-400 font-bold mb-3">
            <AlertTriangle className="w-5 h-5" aria-hidden="true" />
            <h3 className="text-base font-bold text-amber-300">重要提醒</h3>
          </div>
          <p className="text-slate-200 font-medium text-base mb-2">
            申請完成不代表之後所有條件都不會改變。
          </p>
          <div className="text-slate-300 text-sm sm:text-base space-y-1.5">
            <p>若：路線、日期、人數、住宿安排發生重大變更：</p>
            <p className="font-semibold text-amber-200 pt-1">
              應重新確認是否需要辦理異動或重新申請。
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* Section 10 */}
      {/* ------------------------------------------------------------- */}
      <section
        id="s10"
        className="scroll-mt-24 rounded-2xl border border-[#223541] bg-[#121c23] p-6 sm:p-8 md:p-10 shadow-sm"
      >
        <div className="flex items-center space-x-3 mb-4">
          <span className="px-2.5 py-1 rounded text-xs font-mono font-bold bg-emerald-950 text-emerald-400 border border-emerald-800/60">
            SECTION 10
          </span>
          <span className="text-xs text-slate-400 tracking-wide font-medium">
            領隊專業職責
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight mb-6">
          領隊行政管理流程
        </h2>

        <div className="rounded-xl border border-[#223541] bg-[#16232b] p-5 sm:p-6 mb-6">
          <h3 className="text-base font-bold text-slate-100 mb-4">領隊出發前的行政檢查：</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base">
            <div className="flex items-center space-x-3 p-3 rounded-lg bg-[#111a21] border border-[#1f303b]">
              <span className="w-6 h-6 rounded bg-emerald-900/60 text-emerald-400 text-xs font-mono font-bold flex items-center justify-center">01</span>
              <span className="text-slate-200 font-medium">路線確認</span>
            </div>
            <div className="flex items-center space-x-3 p-3 rounded-lg bg-[#111a21] border border-[#1f303b]">
              <span className="w-6 h-6 rounded bg-emerald-900/60 text-emerald-400 text-xs font-mono font-bold flex items-center justify-center">02</span>
              <span className="text-slate-200 font-medium">入園申請</span>
            </div>
            <div className="flex items-center space-x-3 p-3 rounded-lg bg-[#111a21] border border-[#1f303b]">
              <span className="w-6 h-6 rounded bg-emerald-900/60 text-emerald-400 text-xs font-mono font-bold flex items-center justify-center">03</span>
              <span className="text-slate-200 font-medium">入山申請</span>
            </div>
            <div className="flex items-center space-x-3 p-3 rounded-lg bg-[#111a21] border border-[#1f303b]">
              <span className="w-6 h-6 rounded bg-emerald-900/60 text-emerald-400 text-xs font-mono font-bold flex items-center justify-center">04</span>
              <span className="text-slate-200 font-medium">山屋確認</span>
            </div>
            <div className="flex items-center space-x-3 p-3 rounded-lg bg-[#111a21] border border-[#1f303b]">
              <span className="w-6 h-6 rounded bg-emerald-900/60 text-emerald-400 text-xs font-mono font-bold flex items-center justify-center">05</span>
              <span className="text-slate-200 font-medium">隊員資料</span>
            </div>
            <div className="flex items-center space-x-3 p-3 rounded-lg bg-[#111a21] border border-[#1f303b]">
              <span className="w-6 h-6 rounded bg-emerald-900/60 text-emerald-400 text-xs font-mono font-bold flex items-center justify-center">06</span>
              <span className="text-slate-200 font-medium">緊急聯絡資訊</span>
            </div>
            <div className="flex items-center space-x-3 p-3 rounded-lg bg-[#111a21] border border-[#1f303b] sm:col-span-2">
              <span className="w-6 h-6 rounded bg-emerald-900/60 text-emerald-400 text-xs font-mono font-bold flex items-center justify-center">07</span>
              <span className="text-slate-200 font-medium">留守計畫</span>
            </div>
          </div>
        </div>

        {/* Section 10 Inline SVG */}
        <LeaderAdminCycleSvg />

        {/* 核心 Callout */}
        <div className="mt-6 rounded-xl border border-emerald-800/60 bg-[#12231e] p-5 sm:p-6 space-y-4">
          <div className="flex items-center space-x-2 text-emerald-400 font-bold">
            <Lightbulb className="w-5 h-5" aria-hidden="true" />
            <h3 className="text-base font-bold text-emerald-300">核心</h3>
          </div>
          <p className="text-slate-100 font-bold text-base sm:text-lg">
            完整的行政準備，是專業領隊的一部分。
          </p>
          <div className="text-slate-200 text-sm sm:text-base space-y-2 border-t border-emerald-900/60 pt-3">
            <p>行政確認不是出發前做一次就結束。</p>
            <p>應在出發前再次核對：</p>
            <ul className="pl-4 space-y-1 text-emerald-200 font-medium">
              <li>• 最新公告</li>
              <li>• 申請狀態</li>
              <li>• 路線開放情形</li>
              <li>• 隊伍資料</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}
