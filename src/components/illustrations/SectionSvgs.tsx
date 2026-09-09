import React from 'react';

/**
 * 01 為什麼需要了解法規 - 管理制度四大目的
 */
export function RegPurposeSvg() {
  return (
    <div className="w-full my-6 overflow-hidden rounded-xl border border-[#223541] bg-[#111a21] p-4 sm:p-6">
      <svg
        viewBox="0 0 760 260"
        role="img"
        aria-label="山域管理制度四大核心目的圖解：保護生態、降低風險、協助搜救、維護秩序"
        className="w-full h-auto block max-w-full text-slate-100"
      >
        <rect width="760" height="260" rx="10" fill="#0f171d" />

        {/* Central badge */}
        <g transform="translate(380, 48)">
          <circle cx="0" cy="0" r="32" fill="#1b2e38" stroke="#38a169" strokeWidth="2.5" />
          <path d="M-10 8 L0 -12 L10 8 Z" fill="#38a169" />
          <path d="M0 -12 L12 8 L4 8 Z" fill="#52b788" />
          <text x="0" y="44" textAnchor="middle" fill="#52b788" fontSize="13" fontWeight="600" letterSpacing="1">
            山域管理制度核心目的
          </text>
        </g>

        {/* 4 Cards */}
        {/* Card 1: 保護自然環境 */}
        <g transform="translate(30, 130)">
          <rect width="160" height="100" rx="8" fill="#16232b" stroke="#223b49" strokeWidth="1.5" />
          <circle cx="28" cy="28" r="14" fill="#1e382b" />
          <path d="M28 20 C24 24 24 32 28 34 C32 32 32 24 28 20 Z" fill="#52b788" />
          <text x="50" y="32" fill="#f1f5f9" fontSize="14" fontWeight="600">保護自然環境</text>
          <text x="16" y="60" fill="#94a3b8" fontSize="11" lineHeight="1.4">
            <tspan x="16" dy="0">控制承載負荷</tspan>
            <tspan x="16" dy="16">避免棲地生態破壞</tspan>
          </text>
          <line x1="160" y1="50" x2="348" y2="-50" stroke="#2b4554" strokeDasharray="3,3" strokeWidth="1" />
        </g>

        {/* Card 2: 降低事故風險 */}
        <g transform="translate(210, 130)">
          <rect width="160" height="100" rx="8" fill="#16232b" stroke="#223b49" strokeWidth="1.5" />
          <circle cx="28" cy="28" r="14" fill="#382d1c" />
          <path d="M28 19 L36 34 H20 Z" fill="#d97706" />
          <text x="50" y="32" fill="#f1f5f9" fontSize="14" fontWeight="600">降低事故風險</text>
          <text x="16" y="60" fill="#94a3b8" fontSize="11">
            <tspan x="16" dy="0">路線資訊可控</tspan>
            <tspan x="16" dy="16">評估隊伍能力資格</tspan>
          </text>
        </g>

        {/* Card 3: 協助救援掌握 */}
        <g transform="translate(390, 130)">
          <rect width="160" height="100" rx="8" fill="#16232b" stroke="#223b49" strokeWidth="1.5" />
          <circle cx="28" cy="28" r="14" fill="#1b2a3a" />
          <circle cx="28" cy="28" r="7" stroke="#38bdf8" strokeWidth="1.8" fill="none" />
          <path d="M28 24 V32 M24 28 H32" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="50" y="32" fill="#f1f5f9" fontSize="14" fontWeight="600">協助救援單位</text>
          <text x="16" y="60" fill="#94a3b8" fontSize="11">
            <tspan x="16" dy="0">確切掌握人數名冊</tspan>
            <tspan x="16" dy="16">掌握宿營與行進軌跡</tspan>
          </text>
        </g>

        {/* Card 4: 維護山區秩序 */}
        <g transform="translate(570, 130)">
          <rect width="160" height="100" rx="8" fill="#16232b" stroke="#223b49" strokeWidth="1.5" />
          <circle cx="28" cy="28" r="14" fill="#242238" />
          <path d="M22 25 H34 M22 29 H34 M22 33 H30" stroke="#a78bfa" strokeWidth="1.6" strokeLinecap="round" />
          <text x="50" y="32" fill="#f1f5f9" fontSize="14" fontWeight="600">維護山區秩序</text>
          <text x="16" y="60" fill="#94a3b8" fontSize="11">
            <tspan x="16" dy="0">山屋床位公平利用</tspan>
            <tspan x="16" dy="16">保障各隊伍合法權益</tspan>
          </text>
        </g>
      </svg>
    </div>
  );
}

/**
 * 02 台灣山域管理基本概念 - 四大多重管理身分
 */
export function MountainZonesSvg() {
  return (
    <div className="w-full my-6 overflow-hidden rounded-xl border border-[#223541] bg-[#111a21] p-4 sm:p-6">
      <svg
        viewBox="0 0 760 280"
        role="img"
        aria-label="台灣山域四大管理體系示意圖：國家公園、林業及自然保育署、山地管制區、其他保護區"
        className="w-full h-auto block max-w-full text-slate-100"
      >
        <rect width="760" height="280" rx="10" fill="#0f171d" />

        {/* Banner note */}
        <text x="380" y="36" textAnchor="middle" fill="#e2e8f0" fontSize="14" fontWeight="600">
          台灣山域常見多重管理身分（同一路線可能橫跨多單位）
        </text>

        {/* 4 Quadrants / Pillars */}
        {/* 1. 國家公園 */}
        <g transform="translate(30, 60)">
          <rect width="165" height="160" rx="8" fill="#14241d" stroke="#2b5e40" strokeWidth="1.5" />
          <rect x="14" y="16" width="34" height="24" rx="4" fill="#1e462f" />
          <text x="31" y="32" textAnchor="middle" fill="#52b788" fontSize="11" fontWeight="700">入園</text>
          <text x="56" y="32" fill="#f1f5f9" fontSize="15" fontWeight="600">國家公園</text>
          <line x1="14" y1="50" x2="151" y2="50" stroke="#234633" strokeWidth="1" />
          <text x="14" y="74" fill="#a7f3d0" fontSize="11" fontWeight="600">內政部國家公園署</text>
          <text x="14" y="98" fill="#94a3b8" fontSize="11">
            <tspan x="14" dy="0">• 生態保護區入園申請</tspan>
            <tspan x="14" dy="18">• 山屋床位/營地抽籤</tspan>
            <tspan x="14" dy="18">• 登山路線乘載量管制</tspan>
          </text>
        </g>

        {/* 2. 林業及自然保育區域 */}
        <g transform="translate(210, 60)">
          <rect width="165" height="160" rx="8" fill="#182329" stroke="#264858" strokeWidth="1.5" />
          <rect x="14" y="16" width="34" height="24" rx="4" fill="#203d4c" />
          <text x="31" y="32" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="700">保育</text>
          <text x="56" y="32" fill="#f1f5f9" fontSize="15" fontWeight="600">林保區域</text>
          <line x1="14" y1="50" x2="151" y2="50" stroke="#1d3d4e" strokeWidth="1" />
          <text x="14" y="74" fill="#7dd3fc" fontSize="11" fontWeight="600">農業部林業及自然保育署</text>
          <text x="14" y="98" fill="#94a3b8" fontSize="11">
            <tspan x="14" dy="0">• 自然保護區/保留區</tspan>
            <tspan x="14" dy="18">• 國家森林遊樂區步道</tspan>
            <tspan x="14" dy="18">• 九九山莊等林保山屋</tspan>
          </text>
        </g>

        {/* 3. 山地管制區域 */}
        <g transform="translate(390, 60)">
          <rect width="165" height="160" rx="8" fill="#231f24" stroke="#4d3b4b" strokeWidth="1.5" />
          <rect x="14" y="16" width="34" height="24" rx="4" fill="#3f273b" />
          <text x="31" y="32" textAnchor="middle" fill="#f472b6" fontSize="11" fontWeight="700">入山</text>
          <text x="56" y="32" fill="#f1f5f9" fontSize="15" fontWeight="600">山地管制區</text>
          <line x1="14" y1="50" x2="151" y2="50" stroke="#3b2b3a" strokeWidth="1" />
          <text x="14" y="74" fill="#f9a8d4" fontSize="11" fontWeight="600">內政部警政署</text>
          <text x="14" y="98" fill="#94a3b8" fontSize="11">
            <tspan x="14" dy="0">• 依國安法劃設管制區</tspan>
            <tspan x="14" dy="18">• 辦理入山許可手續</tspan>
            <tspan x="14" dy="18">• 治安防衛與秩序管理</tspan>
          </text>
        </g>

        {/* 4. 其他保護區域 */}
        <g transform="translate(570, 60)">
          <rect width="165" height="160" rx="8" fill="#23211c" stroke="#53462f" strokeWidth="1.5" />
          <rect x="14" y="16" width="34" height="24" rx="4" fill="#42341d" />
          <text x="31" y="32" textAnchor="middle" fill="#fbbf24" fontSize="11" fontWeight="700">特區</text>
          <text x="56" y="32" fill="#f1f5f9" fontSize="15" fontWeight="600">其他保護區</text>
          <line x1="14" y1="50" x2="151" y2="50" stroke="#3d3322" strokeWidth="1" />
          <text x="14" y="74" fill="#fde68a" fontSize="11" fontWeight="600">各主管機關 / 地方部落</text>
          <text x="14" y="98" fill="#94a3b8" fontSize="11">
            <tspan x="14" dy="0">• 水源水質保護區</tspan>
            <tspan x="14" dy="18">• 原住民族傳統領域</tspan>
            <tspan x="14" dy="18">• 地方自治自治條例</tspan>
          </text>
        </g>

        {/* Bottom takeaway message bar */}
        <rect x="30" y="235" width="700" height="30" rx="6" fill="#16232b" />
        <text x="380" y="255" textAnchor="middle" fill="#cbd5e1" fontSize="12">
          提醒：出發前請以實際踏足軌跡確認各段主管機關，勿以單一山名概括判定
        </text>
      </svg>
    </div>
  );
}

/**
 * 03 登山前需要確認的申請事項 - 三大檢視清單流程
 */
export function PermitCheckSvg() {
  return (
    <div className="w-full my-6 overflow-hidden rounded-xl border border-[#223541] bg-[#111a21] p-4 sm:p-6">
      <svg
        viewBox="0 0 760 260"
        role="img"
        aria-label="出發前申請事項三大檢核向度：入園申請、入山申請、山屋與營地住宿規定"
        className="w-full h-auto block max-w-full text-slate-100"
      >
        <rect width="760" height="260" rx="10" fill="#0f171d" />

        {/* Stage 1 */}
        <g transform="translate(30, 30)">
          <rect width="215" height="180" rx="8" fill="#132029" stroke="#253e4f" strokeWidth="1.5" />
          <circle cx="28" cy="28" r="14" fill="#1d3d52" />
          <text x="28" y="33" textAnchor="middle" fill="#38bdf8" fontSize="13" fontWeight="700">1</text>
          <text x="52" y="33" fill="#f1f5f9" fontSize="15" fontWeight="600">入園申請確認</text>
          <line x1="16" y1="52" x2="199" y2="52" stroke="#233644" strokeWidth="1" />
          <text x="16" y="78" fill="#94a3b8" fontSize="12">
            <tspan x="16" dy="0" fill="#cbd5e1" fontWeight="600">需逐項核對：</tspan>
            <tspan x="16" dy="22">• 路線是否進入生態保護區</tspan>
            <tspan x="16" dy="20">• 所屬國家公園管理單位</tspan>
            <tspan x="16" dy="20">• 申請開放時間與截止期限</tspan>
            <tspan x="16" dy="20">• 隊伍人數上限與領隊資格</tspan>
          </text>
        </g>

        {/* Stage 2 */}
        <g transform="translate(272, 30)">
          <rect width="215" height="180" rx="8" fill="#1c1d27" stroke="#393754" strokeWidth="1.5" />
          <circle cx="28" cy="28" r="14" fill="#322d52" />
          <text x="28" y="33" textAnchor="middle" fill="#c084fc" fontSize="13" fontWeight="700">2</text>
          <text x="52" y="33" fill="#f1f5f9" fontSize="15" fontWeight="600">入山申請確認</text>
          <line x1="16" y1="52" x2="199" y2="52" stroke="#2a2942" strokeWidth="1" />
          <text x="16" y="78" fill="#94a3b8" fontSize="12">
            <tspan x="16" dy="0" fill="#cbd5e1" fontWeight="600">需逐項核對：</tspan>
            <tspan x="16" dy="22">• 是否屬國安法山地管制區</tspan>
            <tspan x="16" dy="20">• 全體隊員身分證件與資料</tspan>
            <tspan x="16" dy="20">• 行程計畫路線與進出日期</tspan>
            <tspan x="16" dy="20">• 線上申辦或現場警局查驗</tspan>
          </text>
        </g>

        {/* Stage 3 */}
        <g transform="translate(515, 30)">
          <rect width="215" height="180" rx="8" fill="#17241f" stroke="#254d38" strokeWidth="1.5" />
          <circle cx="28" cy="28" r="14" fill="#1b422e" />
          <text x="28" y="33" textAnchor="middle" fill="#4ade80" fontSize="13" fontWeight="700">3</text>
          <text x="52" y="33" fill="#f1f5f9" fontSize="15" fontWeight="600">山屋營地規定</text>
          <line x1="16" y1="52" x2="199" y2="52" stroke="#1f3b2d" strokeWidth="1" />
          <text x="16" y="78" fill="#94a3b8" fontSize="12">
            <tspan x="16" dy="0" fill="#cbd5e1" fontWeight="600">需逐項核對：</tspan>
            <tspan x="16" dy="22">• 住宿型態（山屋/指定營地）</tspan>
            <tspan x="16" dy="20">• 床位/營位名額與抽籤方式</tspan>
            <tspan x="16" dy="20">• 緊急迫降備案與撤退點</tspan>
            <tspan x="16" dy="20">• 水源狀況與炊煮使用規範</tspan>
          </text>
        </g>

        {/* Bottom Banner */}
        <rect x="30" y="222" width="700" height="26" rx="4" fill="#1f2d37" />
        <text x="380" y="239" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="600">
          判斷原則：不能只靠山名！必須依「實際路線範圍、所屬主管機關、出發當時最新公告」確認
        </text>
      </svg>
    </div>
  );
}

/**
 * 04 登山計畫書的重要性 - 計畫書是風險工具而非行政文件
 */
export function PlanAsRiskToolSvg() {
  return (
    <div className="w-full my-6 overflow-hidden rounded-xl border border-[#223541] bg-[#111a21] p-4 sm:p-6">
      <svg
        viewBox="0 0 760 290"
        role="img"
        aria-label="登山計畫書架構：五大核心內容轉化為三大實務安全用途"
        className="w-full h-auto block max-w-full text-slate-100"
      >
        <rect width="760" height="290" rx="10" fill="#0f171d" />

        {/* Title comparison banner */}
        <g transform="translate(380, 26)">
          <rect x="-240" y="-12" width="480" height="28" rx="6" fill="#1a2732" stroke="#2c4252" strokeWidth="1" />
          <text x="0" y="7" textAnchor="middle" fill="#f8fafc" fontSize="13" fontWeight="600">
            登山計畫書：不是應付申請的行政文件，而是真實的風險管理工具
          </text>
        </g>

        {/* Left Box: 5 Key Components */}
        <g transform="translate(30, 60)">
          <rect width="330" height="205" rx="8" fill="#131e26" stroke="#253a47" strokeWidth="1.5" />
          <rect x="14" y="14" width="90" height="22" rx="4" fill="#1a3342" />
          <text x="59" y="29" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="700">五大必備內容</text>
          <text x="114" y="30" fill="#f1f5f9" fontSize="14" fontWeight="600">計畫書完整要素</text>
          <line x1="14" y1="46" x2="316" y2="46" stroke="#233744" strokeWidth="1" />

          {/* List items */}
          <g transform="translate(16, 68)">
            <circle cx="6" cy="0" r="3" fill="#38bdf8" />
            <text x="18" y="4" fill="#f1f5f9" fontSize="12" fontWeight="600">詳細路線與撤退逃生路線</text>
            <text x="18" y="20" fill="#94a3b8" fontSize="11">含備案路徑、關鍵轉折點與撤退時限</text>
          </g>

          <g transform="translate(16, 106)">
            <circle cx="6" cy="0" r="3" fill="#38bdf8" />
            <text x="18" y="4" fill="#f1f5f9" fontSize="12" fontWeight="600">日期、預定時間與每日行程</text>
            <text x="18" y="20" fill="#94a3b8" fontSize="11">精確里程高低落差、節點預計抵達時刻</text>
          </g>

          <g transform="translate(16, 144)">
            <circle cx="6" cy="0" r="3" fill="#38bdf8" />
            <text x="18" y="4" fill="#f1f5f9" fontSize="12" fontWeight="600">隊員資料、角色分工與裝備清單</text>
            <text x="18" y="20" fill="#94a3b8" fontSize="11">體能病史、公私糧裝備、通訊與急救品</text>
          </g>

          <g transform="translate(16, 182)">
            <circle cx="6" cy="0" r="3" fill="#38bdf8" />
            <text x="18" y="4" fill="#f1f5f9" fontSize="12" fontWeight="600">緊急聯絡方式與專責留守人</text>
            <text x="18" y="20" fill="#94a3b8" fontSize="11">回報約定機制、通訊無訊號逾期搜救準則</text>
          </g>
        </g>

        {/* Center Connecting Arrow */}
        <g transform="translate(375, 160)">
          <line x1="-10" y1="0" x2="10" y2="0" stroke="#52b788" strokeWidth="2.5" strokeDasharray="4,2" />
          <polygon points="10,-5 18,0 10,5" fill="#52b788" />
        </g>

        {/* Right Box: 3 Major Uses */}
        <g transform="translate(400, 60)">
          <rect width="330" height="205" rx="8" fill="#14241d" stroke="#255238" strokeWidth="1.5" />
          <rect x="14" y="14" width="90" height="22" rx="4" fill="#1e4630" />
          <text x="59" y="29" textAnchor="middle" fill="#52b788" fontSize="11" fontWeight="700">三大實務用途</text>
          <text x="114" y="30" fill="#f1f5f9" fontSize="14" fontWeight="600">落實風險管理</text>
          <line x1="14" y1="46" x2="316" y2="46" stroke="#234631" strokeWidth="1" />

          {/* 3 Uses */}
          <g transform="translate(16, 70)">
            <rect x="0" y="-8" width="22" height="22" rx="4" fill="#1f4b33" />
            <text x="11" y="7" textAnchor="middle" fill="#a7f3d0" fontSize="12" fontWeight="700">1</text>
            <text x="32" y="7" fill="#f1f5f9" fontSize="13" fontWeight="600">出發前自我具體掌握行程</text>
            <text x="32" y="25" fill="#94a3b8" fontSize="11">讓領隊隊員清楚掌握路線難度、撤退時機與負荷</text>
          </g>

          <g transform="translate(16, 122)">
            <rect x="0" y="-8" width="22" height="22" rx="4" fill="#1f4b33" />
            <text x="11" y="7" textAnchor="middle" fill="#a7f3d0" fontSize="12" fontWeight="700">2</text>
            <text x="32" y="7" fill="#f1f5f9" fontSize="13" fontWeight="600">提供留守人精確追蹤依據</text>
            <text x="32" y="25" fill="#94a3b8" fontSize="11">約定回報時間點，逾時未報能立即啟動緊急應變</text>
          </g>

          <g transform="translate(16, 174)">
            <rect x="0" y="-8" width="22" height="22" rx="4" fill="#1f4b33" />
            <text x="11" y="7" textAnchor="middle" fill="#a7f3d0" fontSize="12" fontWeight="700">3</text>
            <text x="32" y="7" fill="#f1f5f9" fontSize="13" fontWeight="600">事故發生時協助搜救研判</text>
            <text x="32" y="25" fill="#94a3b8" fontSize="11">救援單位依計畫縮小搜索熱區，黃金時間精準投入</text>
          </g>
        </g>
      </svg>
    </div>
  );
}

/**
 * 05 申請流程基本教學 - 五步標準流程
 */
export function ApplicationProcessSvg() {
  return (
    <div className="w-full my-6 overflow-hidden rounded-xl border border-[#223541] bg-[#111a21] p-4 sm:p-6">
      <svg
        viewBox="0 0 760 210"
        role="img"
        aria-label="登山申請標準五步驟流程圖：確認路線單位、準備資料、提出申請、確認核准、出發前再次確認"
        className="w-full h-auto block max-w-full text-slate-100"
      >
        <rect width="760" height="210" rx="10" fill="#0f171d" />

        {/* 5 Steps Horizontally */}
        {/* Step 1 */}
        <g transform="translate(20, 30)">
          <rect width="130" height="150" rx="8" fill="#142129" stroke="#254254" strokeWidth="1.5" />
          <circle cx="24" cy="24" r="13" fill="#1d3d52" />
          <text x="24" y="29" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="700">01</text>
          <text x="46" y="29" fill="#f1f5f9" fontSize="13" fontWeight="600">第一步</text>
          <line x1="12" y1="46" x2="118" y2="46" stroke="#223b4a" strokeWidth="1" />
          <text x="12" y="68" fill="#7dd3fc" fontSize="12" fontWeight="600">確認路線主管</text>
          <text x="12" y="90" fill="#94a3b8" fontSize="11">
            <tspan x="12" dy="0">確認路線所屬：</tspan>
            <tspan x="12" dy="16">• 國家公園</tspan>
            <tspan x="12" dy="16">• 林業保育署</tspan>
            <tspan x="12" dy="16">• 警政署管制區</tspan>
          </text>
        </g>

        <path d="M154 105 L166 105" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3,2" />

        {/* Step 2 */}
        <g transform="translate(170, 30)">
          <rect width="130" height="150" rx="8" fill="#142129" stroke="#254254" strokeWidth="1.5" />
          <circle cx="24" cy="24" r="13" fill="#1d3d52" />
          <text x="24" y="29" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="700">02</text>
          <text x="46" y="29" fill="#f1f5f9" fontSize="13" fontWeight="600">第二步</text>
          <line x1="12" y1="46" x2="118" y2="46" stroke="#223b4a" strokeWidth="1" />
          <text x="12" y="68" fill="#7dd3fc" fontSize="12" fontWeight="600">準備齊全資料</text>
          <text x="12" y="90" fill="#94a3b8" fontSize="11">
            <tspan x="12" dy="0">完整準備清單：</tspan>
            <tspan x="12" dy="16">• 人員身分證件</tspan>
            <tspan x="12" dy="16">• 行程日期天數</tspan>
            <tspan x="12" dy="16">• 完整路線軌跡</tspan>
          </text>
        </g>

        <path d="M304 105 L316 105" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3,2" />

        {/* Step 3 */}
        <g transform="translate(320, 30)">
          <rect width="130" height="150" rx="8" fill="#182721" stroke="#2a5840" strokeWidth="1.5" />
          <circle cx="24" cy="24" r="13" fill="#1e4630" />
          <text x="24" y="29" textAnchor="middle" fill="#4ade80" fontSize="12" fontWeight="700">03</text>
          <text x="46" y="29" fill="#f1f5f9" fontSize="13" fontWeight="600">第三步</text>
          <line x1="12" y1="46" x2="118" y2="46" stroke="#244835" strokeWidth="1" />
          <text x="12" y="68" fill="#86efac" fontSize="12" fontWeight="600">正式提出申請</text>
          <text x="12" y="90" fill="#94a3b8" fontSize="11">
            <tspan x="12" dy="0">依開放期程送件：</tspan>
            <tspan x="12" dy="16">• 臺灣登山一站式</tspan>
            <tspan x="12" dy="16">• 各國家公園系統</tspan>
            <tspan x="12" dy="16">• 警政署入山網</tspan>
          </text>
        </g>

        <path d="M454 105 L466 105" stroke="#4ade80" strokeWidth="2" strokeDasharray="3,2" />

        {/* Step 4 */}
        <g transform="translate(470, 30)">
          <rect width="130" height="150" rx="8" fill="#202219" stroke="#4e4f28" strokeWidth="1.5" />
          <circle cx="24" cy="24" r="13" fill="#3f401b" />
          <text x="24" y="29" textAnchor="middle" fill="#facc15" fontSize="12" fontWeight="700">04</text>
          <text x="46" y="29" fill="#f1f5f9" fontSize="13" fontWeight="600">第四步</text>
          <line x1="12" y1="46" x2="118" y2="46" stroke="#3d3e20" strokeWidth="1" />
          <text x="12" y="68" fill="#fef08a" fontSize="12" fontWeight="600">確認核准結果</text>
          <text x="12" y="90" fill="#94a3b8" fontSize="11">
            <tspan x="12" dy="0">核准狀態確認：</tspan>
            <tspan x="12" dy="16">• 下載許可證字號</tspan>
            <tspan x="12" dy="16">• 列印紙本隨身攜</tspan>
            <tspan x="12" dy="16">• 確認中籤與繳費</tspan>
          </text>
        </g>

        <path d="M604 105 L616 105" stroke="#facc15" strokeWidth="2" strokeDasharray="3,2" />

        {/* Step 5 */}
        <g transform="translate(620, 30)">
          <rect width="120" height="150" rx="8" fill="#241b1b" stroke="#5a2e2e" strokeWidth="1.5" />
          <circle cx="24" cy="24" r="13" fill="#461e1e" />
          <text x="24" y="29" textAnchor="middle" fill="#f87171" fontSize="12" fontWeight="700">05</text>
          <text x="46" y="29" fill="#f1f5f9" fontSize="13" fontWeight="600">第五步</text>
          <line x1="12" y1="46" x2="108" y2="46" stroke="#442222" strokeWidth="1" />
          <text x="12" y="68" fill="#fca5a5" fontSize="12" fontWeight="600">行前再確認</text>
          <text x="12" y="90" fill="#94a3b8" fontSize="11">
            <tspan x="12" dy="0">出發前最後把關：</tspan>
            <tspan x="12" dy="16">• 步道路況即時公告</tspan>
            <tspan x="12" dy="16">• 氣象天候與預警</tspan>
            <tspan x="12" dy="16">• 是否需異動補件</tspan>
          </text>
        </g>
      </svg>
    </div>
  );
}

/**
 * 06 國家公園登山注意事項 - 生態保護區四重合規守則
 */
export function NationalParkRulesSvg() {
  return (
    <div className="w-full my-6 overflow-hidden rounded-xl border border-[#223541] bg-[#111a21] p-4 sm:p-6">
      <svg
        viewBox="0 0 760 250"
        role="img"
        aria-label="國家公園入園四大合規守則：入園入屋申請、遵守生態規範、不採集不干擾、垃圾廚餘全下山"
        className="w-full h-auto block max-w-full text-slate-100"
      >
        <rect width="760" height="250" rx="10" fill="#0f171d" />

        <text x="380" y="32" textAnchor="middle" fill="#f1f5f9" fontSize="14" fontWeight="600">
          國家公園生態保護區登山核心規範
        </text>

        {/* 4 Cards */}
        <g transform="translate(30, 55)">
          <rect width="165" height="165" rx="8" fill="#14231b" stroke="#25523a" strokeWidth="1.5" />
          <circle cx="28" cy="28" r="14" fill="#1d432e" />
          <path d="M22 28 L26 32 L34 22" stroke="#4ade80" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <text x="50" y="33" fill="#f1f5f9" fontSize="14" fontWeight="600">入園入屋手續</text>
          <line x1="14" y1="52" x2="151" y2="52" stroke="#214230" strokeWidth="1" />
          <text x="14" y="76" fill="#a7f3d0" fontSize="12" fontWeight="600">合規核准進出</text>
          <text x="14" y="100" fill="#94a3b8" fontSize="11">
            <tspan x="14" dy="0">• 依規定申辦入園證</tspan>
            <tspan x="14" dy="18">• 依排定床位營位住宿</tspan>
            <tspan x="14" dy="18">• 隨身攜帶身分證件</tspan>
            <tspan x="14" dy="18">• 遇巡查員配合查驗</tspan>
          </text>
        </g>

        <g transform="translate(210, 55)">
          <rect width="165" height="165" rx="8" fill="#152129" stroke="#264555" strokeWidth="1.5" />
          <circle cx="28" cy="28" r="14" fill="#1d3846" />
          <path d="M20 28 C28 20 36 28 28 36 Z" fill="#38bdf8" />
          <text x="50" y="33" fill="#f1f5f9" fontSize="14" fontWeight="600">生態保護規範</text>
          <line x1="14" y1="52" x2="151" y2="52" stroke="#1f3745" strokeWidth="1" />
          <text x="14" y="76" fill="#7dd3fc" fontSize="12" fontWeight="600">循既定步道行進</text>
          <text x="14" y="100" fill="#94a3b8" fontSize="11">
            <tspan x="14" dy="0">• 不偏離主路徑踐踏</tspan>
            <tspan x="14" dy="18">• 避免邊坡土壤沖蝕</tspan>
            <tspan x="14" dy="18">• 保護高山脆弱植被</tspan>
            <tspan x="14" dy="18">• 嚴禁任意開闢捷徑</tspan>
          </text>
        </g>

        <g transform="translate(390, 55)">
          <rect width="165" height="165" rx="8" fill="#231f24" stroke="#4c364c" strokeWidth="1.5" />
          <circle cx="28" cy="28" r="14" fill="#3d263e" />
          <circle cx="28" cy="28" r="7" stroke="#f472b6" strokeWidth="1.8" fill="none" />
          <line x1="23" y1="23" x2="33" y2="33" stroke="#f472b6" strokeWidth="1.8" />
          <text x="50" y="33" fill="#f1f5f9" fontSize="14" fontWeight="600">不採集不干擾</text>
          <line x1="14" y1="52" x2="151" y2="52" stroke="#3d2a3c" strokeWidth="1" />
          <text x="14" y="76" fill="#f9a8d4" fontSize="12" fontWeight="600">尊重山區生命</text>
          <text x="14" y="100" fill="#94a3b8" fontSize="11">
            <tspan x="14" dy="0">• 嚴禁採折花木礦石</tspan>
            <tspan x="14" dy="18">• 不餵食野生動物</tspan>
            <tspan x="14" dy="18">• 不追逐干擾動物棲息</tspan>
            <tspan x="14" dy="18">• 保持安全觀察距離</tspan>
          </text>
        </g>

        <g transform="translate(570, 55)">
          <rect width="165" height="165" rx="8" fill="#221e1a" stroke="#4d3e2d" strokeWidth="1.5" />
          <circle cx="28" cy="28" r="14" fill="#3c2f1e" />
          <path d="M22 24 H34 V34 H22 Z" fill="none" stroke="#fbbf24" strokeWidth="1.8" />
          <line x1="20" y1="22" x2="36" y2="22" stroke="#fbbf24" strokeWidth="1.8" strokeLinecap="round" />
          <text x="50" y="33" fill="#f1f5f9" fontSize="14" fontWeight="600">垃圾廚餘下山</text>
          <line x1="14" y1="52" x2="151" y2="52" stroke="#382e1e" strokeWidth="1" />
          <text x="14" y="76" fill="#fde68a" fontSize="12" fontWeight="600">無痕山林核心</text>
          <text x="14" y="100" fill="#94a3b8" fontSize="11">
            <tspan x="14" dy="0">• 包含果皮骨頭果核</tspan>
            <tspan x="14" dy="18">• 避免野生動物翻食</tspan>
            <tspan x="14" dy="18">• 衛生紙品自行帶回</tspan>
            <tspan x="14" dy="18">• 帶下山比帶上山更多</tspan>
          </text>
        </g>
      </svg>
    </div>
  );
}

/**
 * 07 山屋與營地規範 - 山屋 vs 營地雙軌使用倫理
 */
export function HutCampRulesSvg() {
  return (
    <div className="w-full my-6 overflow-hidden rounded-xl border border-[#223541] bg-[#111a21] p-4 sm:p-6">
      <svg
        viewBox="0 0 760 250"
        role="img"
        aria-label="山屋與營地住宿規範對比：山屋遵守時限作息清潔、營地指定位置保護植被火源管理"
        className="w-full h-auto block max-w-full text-slate-100"
      >
        <rect width="760" height="250" rx="10" fill="#0f171d" />

        {/* Left: 山屋規範 */}
        <g transform="translate(30, 25)">
          <rect width="335" height="200" rx="8" fill="#142129" stroke="#244253" strokeWidth="1.5" />
          <rect x="16" y="16" width="36" height="26" rx="4" fill="#1a3546" />
          <path d="M24 34 L34 22 L44 34 Z" fill="#38bdf8" />
          <text x="60" y="34" fill="#f1f5f9" fontSize="16" fontWeight="600">山屋住宿守則</text>

          <line x1="16" y1="52" x2="319" y2="52" stroke="#223b4a" strokeWidth="1" />

          <g transform="translate(18, 70)">
            <circle cx="6" cy="0" r="3" fill="#38bdf8" />
            <text x="18" y="4" fill="#f1f5f9" fontSize="12" fontWeight="600">遵守到達與離開時限</text>
            <text x="18" y="20" fill="#94a3b8" fontSize="11">依申請核准日期入住，勿逾時佔用床位妨礙他人</text>
          </g>

          <g transform="translate(18, 110)">
            <circle cx="6" cy="0" r="3" fill="#38bdf8" />
            <text x="18" y="4" fill="#f1f5f9" fontSize="12" fontWeight="600">尊重其他隊伍作息</text>
            <text x="18" y="20" fill="#94a3b8" fontSize="11">入夜保持安靜，整理頭燈紅光模式，避免喧嘩打包噪音</text>
          </g>

          <g transform="translate(18, 150)">
            <circle cx="6" cy="0" r="3" fill="#38bdf8" />
            <text x="18" y="4" fill="#f1f5f9" fontSize="12" fontWeight="600">維護清潔，離開如未曾到訪</text>
            <text x="18" y="20" fill="#94a3b8" fontSize="11">廚餘不入洗手槽水源，床位徹底淨空，垃圾隨隊下山</text>
          </g>
        </g>

        {/* Right: 營地規範 */}
        <g transform="translate(395, 25)">
          <rect width="335" height="200" rx="8" fill="#15241d" stroke="#265239" strokeWidth="1.5" />
          <rect x="16" y="16" width="36" height="26" rx="4" fill="#1b452f" />
          <polygon points="26,35 34,22 42,35" fill="#52b788" />
          <text x="60" y="34" fill="#f1f5f9" fontSize="16" fontWeight="600">營地住宿守則</text>

          <line x1="16" y1="52" x2="319" y2="52" stroke="#224531" strokeWidth="1" />

          <g transform="translate(18, 70)">
            <circle cx="6" cy="0" r="3" fill="#52b788" />
            <text x="18" y="4" fill="#f1f5f9" fontSize="12" fontWeight="600">嚴格於指定劃設區域紮營</text>
            <text x="18" y="20" fill="#94a3b8" fontSize="11">禁止在未開放區域、林木保育核心任意開闢私闢營位</text>
          </g>

          <g transform="translate(18, 110)">
            <circle cx="6" cy="0" r="3" fill="#52b788" />
            <text x="18" y="4" fill="#f1f5f9" fontSize="12" fontWeight="600">不破壞原生植被與地表環境</text>
            <text x="18" y="20" fill="#94a3b8" fontSize="11">避免挖掘排水溝破壞水土，使用帳篷耐磨底布並復原地表</text>
          </g>

          <g transform="translate(18, 150)">
            <circle cx="6" cy="0" r="3" fill="#52b788" />
            <text x="18" y="4" fill="#f1f5f9" fontSize="12" fontWeight="600">嚴格控制用火火源與炊煮安全</text>
            <text x="18" y="20" fill="#94a3b8" fontSize="11">禁止野外生火營火，使用高山合格爐具並遠離乾燥落葉枯枝</text>
          </g>
        </g>
      </svg>
    </div>
  );
}

/**
 * 08 登山者責任與倫理 - 三大同心責任層次
 */
export function MountaineerDutySvg() {
  return (
    <div className="w-full my-6 overflow-hidden rounded-xl border border-[#223541] bg-[#111a21] p-4 sm:p-6">
      <svg
        viewBox="0 0 760 270"
        role="img"
        aria-label="負責任登山三大核心責任層次：環境責任、公共安全責任、團隊責任"
        className="w-full h-auto block max-w-full text-slate-100"
      >
        <rect width="760" height="270" rx="10" fill="#0f171d" />

        {/* Concentric rings or 3 Tier Structure */}
        {/* Tier 1: 環境責任 */}
        <g transform="translate(30, 30)">
          <rect width="215" height="195" rx="8" fill="#13231b" stroke="#255138" strokeWidth="1.5" />
          <circle cx="28" cy="28" r="14" fill="#1c452e" />
          <text x="28" y="33" textAnchor="middle" fill="#4ade80" fontSize="12" fontWeight="700">一</text>
          <text x="52" y="34" fill="#f1f5f9" fontSize="15" fontWeight="600">環境責任</text>
          <line x1="16" y1="52" x2="199" y2="52" stroke="#224531" strokeWidth="1" />
          <text x="16" y="78" fill="#a7f3d0" fontSize="12" fontWeight="600">對山林自然之責</text>
          <text x="16" y="102" fill="#94a3b8" fontSize="11">
            <tspan x="16" dy="0">• 垃圾廚餘全數帶走</tspan>
            <tspan x="16" dy="20">• 不留痕跡（LNT 準則）</tspan>
            <tspan x="16" dy="20">• 不破壞自然地貌與岩層</tspan>
            <tspan x="16" dy="20">• 尊重野生動植物與棲地</tspan>
            <tspan x="16" dy="20">• 維護高山水源純淨度</tspan>
          </text>
        </g>

        {/* Tier 2: 公共安全責任 */}
        <g transform="translate(272, 30)">
          <rect width="215" height="195" rx="8" fill="#152129" stroke="#244456" strokeWidth="1.5" />
          <circle cx="28" cy="28" r="14" fill="#1e3b4d" />
          <text x="28" y="33" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="700">二</text>
          <text x="52" y="34" fill="#f1f5f9" fontSize="15" fontWeight="600">公共安全責任</text>
          <line x1="16" y1="52" x2="199" y2="52" stroke="#1f3747" strokeWidth="1" />
          <text x="16" y="78" fill="#7dd3fc" fontSize="12" fontWeight="600">對社會搜救體系之責</text>
          <text x="16" y="102" fill="#94a3b8" fontSize="11">
            <tspan x="16" dy="0">• 提前評估隊伍自身能力</tspan>
            <tspan x="16" dy="20">• 不盲目冒險引發搜救負擔</tspan>
            <tspan x="16" dy="20">• 裝備、保險、通訊落實</tspan>
            <tspan x="16" dy="20">• 惡劣天候具備撤退決斷力</tspan>
            <tspan x="16" dy="20">• 善用搜救資源不濫用</tspan>
          </text>
        </g>

        {/* Tier 3: 團隊責任 */}
        <g transform="translate(515, 30)">
          <rect width="215" height="195" rx="8" fill="#211d26" stroke="#483857" strokeWidth="1.5" />
          <circle cx="28" cy="28" r="14" fill="#392a49" />
          <text x="28" y="33" textAnchor="middle" fill="#c084fc" fontSize="12" fontWeight="700">三</text>
          <text x="52" y="34" fill="#f1f5f9" fontSize="15" fontWeight="600">團隊責任</text>
          <line x1="16" y1="52" x2="199" y2="52" stroke="#332742" strokeWidth="1" />
          <text x="16" y="78" fill="#e9d5ff" fontSize="12" fontWeight="600">對全體隊員夥伴之責</text>
          <text x="16" y="102" fill="#94a3b8" fontSize="11">
            <tspan x="16" dy="0">• 嚴格遵守既定行程計畫</tspan>
            <tspan x="16" dy="20">• 尊重領隊專業安全決策</tspan>
            <tspan x="16" dy="20">• 彼此照應行進不脫隊散落</tspan>
            <tspan x="16" dy="20">• 主動告知身體高山反應</tspan>
            <tspan x="16" dy="20">• 全隊同進同退安全下山</tspan>
          </text>
        </g>

        {/* Footer rule note */}
        <text x="380" y="248" textAnchor="middle" fill="#94a3b8" fontSize="11">
          登山倫理不一定等同於法律文字，但負責任的登山行為應同時尊重：法規、環境、以及其他登山者。
        </text>
      </svg>
    </div>
  );
}

/**
 * 09 常見申請錯誤 - 三大申請盲點與改善對策
 */
export function CommonMistakesSvg() {
  return (
    <div className="w-full my-6 overflow-hidden rounded-xl border border-[#223541] bg-[#111a21] p-4 sm:p-6">
      <svg
        viewBox="0 0 760 260"
        role="img"
        aria-label="常見三大登山申請錯誤對比與改善作法：太晚準備、路線變更未重審、只把申請當形式"
        className="w-full h-auto block max-w-full text-slate-100"
      >
        <rect width="760" height="260" rx="10" fill="#0f171d" />

        {/* Mistake 1 */}
        <g transform="translate(30, 25)">
          <rect width="215" height="205" rx="8" fill="#1c1619" stroke="#4a2530" strokeWidth="1.5" />
          <rect x="14" y="14" width="60" height="22" rx="4" fill="#421a24" />
          <text x="44" y="29" textAnchor="middle" fill="#f87171" fontSize="11" fontWeight="700">錯誤一</text>
          <text x="82" y="30" fill="#f1f5f9" fontSize="14" fontWeight="600">太晚準備申請</text>

          <line x1="14" y1="46" x2="201" y2="46" stroke="#361a22" strokeWidth="1" />

          <text x="14" y="68" fill="#fca5a5" fontSize="11" fontWeight="600">常見問題：</text>
          <text x="14" y="86" fill="#cbd5e1" fontSize="11">
            <tspan x="14" dy="0">低估審查工作天，錯過</tspan>
            <tspan x="14" dy="16">特定單位期限，行程直接泡湯。</tspan>
          </text>

          <rect x="12" y="125" width="191" height="66" rx="6" fill="#14211b" stroke="#255137" strokeWidth="1" />
          <text x="22" y="144" fill="#4ade80" fontSize="11" fontWeight="600">具體改善：</text>
          <text x="22" y="162" fill="#94a3b8" fontSize="10">
            <tspan x="22" dy="0">提前 1～2 個月鎖定公告</tspan>
            <tspan x="22" dy="14">時程，設定抽籤與送件倒數行事曆。</tspan>
          </text>
        </g>

        {/* Mistake 2 */}
        <g transform="translate(272, 25)">
          <rect width="215" height="205" rx="8" fill="#1c1619" stroke="#4a2530" strokeWidth="1.5" />
          <rect x="14" y="14" width="60" height="22" rx="4" fill="#421a24" />
          <text x="44" y="29" textAnchor="middle" fill="#f87171" fontSize="11" fontWeight="700">錯誤二</text>
          <text x="82" y="30" fill="#f1f5f9" fontSize="14" fontWeight="600">變更未重確認</text>

          <line x1="14" y1="46" x2="201" y2="46" stroke="#361a22" strokeWidth="1" />

          <text x="14" y="68" fill="#fca5a5" fontSize="11" fontWeight="600">常見問題：</text>
          <text x="14" y="86" fill="#cbd5e1" fontSize="11">
            <tspan x="14" dy="0">臨時改道或延期，未重行</tspan>
            <tspan x="14" dy="16">核准，造成非法入園違規。</tspan>
          </text>

          <rect x="12" y="125" width="191" height="66" rx="6" fill="#14211b" stroke="#255137" strokeWidth="1" />
          <text x="22" y="144" fill="#4ade80" fontSize="11" fontWeight="600">具體改善：</text>
          <text x="22" y="162" fill="#94a3b8" fontSize="10">
            <tspan x="22" dy="0">遇路線、日期、人員異動</tspan>
            <tspan x="22" dy="14">前，重新確認是否需補辦變更。</tspan>
          </text>
        </g>

        {/* Mistake 3 */}
        <g transform="translate(515, 25)">
          <rect width="215" height="205" rx="8" fill="#1c1619" stroke="#4a2530" strokeWidth="1.5" />
          <rect x="14" y="14" width="60" height="22" rx="4" fill="#421a24" />
          <text x="44" y="29" textAnchor="middle" fill="#f87171" fontSize="11" fontWeight="700">錯誤三</text>
          <text x="82" y="30" fill="#f1f5f9" fontSize="14" fontWeight="600">只把申請當形式</text>

          <line x1="14" y1="46" x2="201" y2="46" stroke="#361a22" strokeWidth="1" />

          <text x="14" y="68" fill="#fca5a5" fontSize="11" fontWeight="600">常見問題：</text>
          <text x="14" y="86" fill="#cbd5e1" fontSize="11">
            <tspan x="14" dy="0">只求拿到許可證，資料隨便</tspan>
            <tspan x="14" dy="16">填寫，完全失去風險管控效益。</tspan>
          </text>

          <rect x="12" y="125" width="191" height="66" rx="6" fill="#14211b" stroke="#255137" strokeWidth="1" />
          <text x="22" y="144" fill="#4ade80" fontSize="11" fontWeight="600">具體改善：</text>
          <text x="22" y="162" fill="#94a3b8" fontSize="10">
            <tspan x="22" dy="0">把申請資料與留守清單當</tspan>
            <tspan x="22" dy="14">作救命保險真切盤點檢討。</tspan>
          </text>
        </g>

        {/* Bottom Alert */}
        <rect x="30" y="235" width="700" height="22" rx="4" fill="#241b14" />
        <text x="380" y="250" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="600">
          重要提醒：申請完成不代表條件永遠不變，凡路線、日期、人數、住宿有重大調整皆須確認辦理異動！
        </text>
      </svg>
    </div>
  );
}

/**
 * 10 領隊行政管理流程 - 領隊行前七項行政查核與動態回饋圈
 */
export function LeaderAdminCycleSvg() {
  return (
    <div className="w-full my-6 overflow-hidden rounded-xl border border-[#223541] bg-[#111a21] p-4 sm:p-6">
      <svg
        viewBox="0 0 760 270"
        role="img"
        aria-label="領隊出發前七大行政查核清單與出發前再次核對回饋流程"
        className="w-full h-auto block max-w-full text-slate-100"
      >
        <rect width="760" height="270" rx="10" fill="#0f171d" />

        {/* Header */}
        <text x="380" y="32" textAnchor="middle" fill="#f1f5f9" fontSize="15" fontWeight="600">
          專業領隊行前七項行政檢查清單
        </text>

        {/* 7 checklist grid */}
        <g transform="translate(30, 52)">
          {/* Item 1 */}
          <g transform="translate(0, 0)">
            <rect width="165" height="60" rx="6" fill="#142129" stroke="#253e4f" strokeWidth="1" />
            <circle cx="20" cy="30" r="10" fill="#1e3b4d" />
            <text x="20" y="34" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="700">1</text>
            <text x="38" y="27" fill="#f1f5f9" fontSize="12" fontWeight="600">路線確認</text>
            <text x="38" y="44" fill="#94a3b8" fontSize="10">實際軌跡與管制身分</text>
          </g>

          {/* Item 2 */}
          <g transform="translate(180, 0)">
            <rect width="165" height="60" rx="6" fill="#142129" stroke="#253e4f" strokeWidth="1" />
            <circle cx="20" cy="30" r="10" fill="#1e3b4d" />
            <text x="20" y="34" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="700">2</text>
            <text x="38" y="27" fill="#f1f5f9" fontSize="12" fontWeight="600">入園申請</text>
            <text x="38" y="44" fill="#94a3b8" fontSize="10">國家公園許可證取得</text>
          </g>

          {/* Item 3 */}
          <g transform="translate(360, 0)">
            <rect width="165" height="60" rx="6" fill="#142129" stroke="#253e4f" strokeWidth="1" />
            <circle cx="20" cy="30" r="10" fill="#1e3b4d" />
            <text x="20" y="34" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="700">3</text>
            <text x="38" y="27" fill="#f1f5f9" fontSize="12" fontWeight="600">入山申請</text>
            <text x="38" y="44" fill="#94a3b8" fontSize="10">警政署管制區入山許可</text>
          </g>

          {/* Item 4 */}
          <g transform="translate(540, 0)">
            <rect width="160" height="60" rx="6" fill="#142129" stroke="#253e4f" strokeWidth="1" />
            <circle cx="20" cy="30" r="10" fill="#1e3b4d" />
            <text x="20" y="34" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="700">4</text>
            <text x="38" y="27" fill="#f1f5f9" fontSize="12" fontWeight="600">山屋營地確認</text>
            <text x="38" y="44" fill="#94a3b8" fontSize="10">床位營位中籤與繳費</text>
          </g>

          {/* Item 5 */}
          <g transform="translate(0, 70)">
            <rect width="220" height="60" rx="6" fill="#142129" stroke="#253e4f" strokeWidth="1" />
            <circle cx="20" cy="30" r="10" fill="#1e3b4d" />
            <text x="20" y="34" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="700">5</text>
            <text x="38" y="27" fill="#f1f5f9" fontSize="12" fontWeight="600">隊員資料與保險</text>
            <text x="38" y="44" fill="#94a3b8" fontSize="10">名冊、病史身分、登山險投保</text>
          </g>

          {/* Item 6 */}
          <g transform="translate(240, 70)">
            <rect width="220" height="60" rx="6" fill="#142129" stroke="#253e4f" strokeWidth="1" />
            <circle cx="20" cy="30" r="10" fill="#1e3b4d" />
            <text x="20" y="34" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="700">6</text>
            <text x="38" y="27" fill="#f1f5f9" fontSize="12" fontWeight="600">緊急聯絡資訊</text>
            <text x="38" y="44" fill="#94a3b8" fontSize="10">家屬聯絡窗口、在地搜救總機</text>
          </g>

          {/* Item 7 */}
          <g transform="translate(480, 70)">
            <rect width="220" height="60" rx="6" fill="#142129" stroke="#253e4f" strokeWidth="1" />
            <circle cx="20" cy="30" r="10" fill="#1e3b4d" />
            <text x="20" y="34" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="700">7</text>
            <text x="38" y="27" fill="#f1f5f9" fontSize="12" fontWeight="600">留守計畫與回報</text>
            <text x="38" y="44" fill="#94a3b8" fontSize="10">定時回報時點、逾時啟動機制</text>
          </g>
        </g>

        {/* Dynamic Verification Loop Box at Bottom */}
        <g transform="translate(30, 195)">
          <rect width="700" height="60" rx="8" fill="#162721" stroke="#2b5f43" strokeWidth="1.5" />
          <polygon points="26,30 36,22 46,30 36,38" fill="#4ade80" />
          <text x="56" y="26" fill="#86efac" fontSize="12" fontWeight="700">出發前再次核對機制（行政確認不是做一次就結束）</text>
          <text x="56" y="45" fill="#cbd5e1" fontSize="11">
            出發當日與前一日再次比對：①最新公告狀況 ②許可證有效狀態 ③路線天候開放情形 ④隊員身心最新狀態
          </text>
        </g>
      </svg>
    </div>
  );
}
