import React from 'react';
import { ListFilter, ChevronRight } from 'lucide-react';
import { SECTIONS } from './Header';

interface TableOfContentsProps {
  activeSection: string;
}

export default function TableOfContents({ activeSection }: TableOfContentsProps) {
  return (
    <nav
      id="toc"
      aria-label="章節全覽目錄"
      className="rounded-xl border border-[#223541] bg-[#121c23] p-5 mb-10 shadow-sm"
    >
      <div className="flex items-center justify-between pb-3 border-b border-[#1b2b35] mb-4">
        <div className="flex items-center space-x-2 text-slate-100">
          <ListFilter className="w-5 h-5 text-emerald-400" aria-hidden="true" />
          <p className="text-base font-bold tracking-wide">本章目錄導覽</p>
        </div>
        <span className="text-xs text-slate-400">點擊快速前往該節</span>
      </div>

      <ol className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
        {SECTIONS.map((sec) => (
          <li key={sec.id}>
            <a
              href={`#${sec.id}`}
              className={`flex items-center justify-between p-2.5 rounded-lg border transition-all ${
                activeSection === sec.id
                  ? 'border-emerald-500/80 bg-emerald-950/40 text-emerald-300 font-medium'
                  : 'border-transparent hover:border-[#223541] hover:bg-[#16232b] text-slate-300'
              }`}
            >
              <div className="flex items-center space-x-2.5 min-w-0 pr-2">
                <span className="text-xs font-mono font-bold text-emerald-400 shrink-0">
                  {sec.num}
                </span>
                <span className="truncate">{sec.title}</span>
              </div>
              <ChevronRight
                className="w-4 h-4 text-slate-500 shrink-0 group-hover:text-emerald-400 transition-colors"
                aria-hidden="true"
              />
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
