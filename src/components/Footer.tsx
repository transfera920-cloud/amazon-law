import React from 'react';
import { Compass } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-[#1e303c] bg-[#090e12] text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col items-center justify-center text-center">
        {/* Brand Link (matches Header, centered) */}
        <a
          href="https://amazon-hike.com/"
          className="inline-flex items-center space-x-2.5 text-slate-100 hover:text-emerald-400 transition-colors group mb-6"
          title="亞馬遜國家山岳協會首頁"
        >
          <div className="w-9 h-9 rounded-lg bg-[#14232c] border border-emerald-700/50 flex items-center justify-center text-emerald-400 group-hover:border-emerald-500 transition-colors">
            <Compass className="w-5 h-5" aria-hidden="true" />
          </div>
          <span className="text-base font-bold tracking-wider text-slate-100 group-hover:text-emerald-400 transition-colors">
            亞馬遜國家山岳協會
          </span>
        </a>

        {/* Copyright */}
        <div className="pt-6 border-t border-[#182631] w-full max-w-xs text-center text-xs text-slate-500">
          <p>© 2026 亞馬遜國家山岳協會</p>
        </div>
      </div>
    </footer>
  );
}
