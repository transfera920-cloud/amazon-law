import React, { useState, useEffect } from 'react';
import Header, { SECTIONS } from './components/Header';
import Hero from './components/Hero';
import TableOfContents from './components/TableOfContents';
import ChapterContent from './components/ChapterContent';
import RelatedChapters from './components/RelatedChapters';
import KeyTakeaways from './components/KeyTakeaways';
import PreTripChecklist from './components/PreTripChecklist';
import Footer from './components/Footer';
import { ArrowUp, ListFilter, CheckSquare, Layers } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('s1');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Scroll spy for active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -65% 0px',
        threshold: 0.1,
      }
    );

    const sectionIds = [
      's1',
      's2',
      's3',
      's4',
      's5',
      's6',
      's7',
      's8',
      's9',
      's10',
      'related-chapters',
      'key-takeaways',
      'checklist-tool',
    ];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0d1418] text-slate-100 selection:bg-emerald-900 selection:text-emerald-100 flex flex-col font-sans">
      {/* Skip Link for Keyboard Accessibility (Section 24) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-emerald-600 focus:text-white focus:font-semibold focus:rounded-lg focus:shadow-xl focus:ring-2 focus:ring-white focus:outline-none"
      >
        跳至主要內容 (Skip to Main Content)
      </a>

      {/* Header */}
      <Header activeSection={activeSection} />

      {/* Hero */}
      <Hero />

      {/* Main Content Area */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Desktop Sticky Table of Contents Sidebar */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-20 rounded-2xl border border-[#223541] bg-[#111a21] p-5 shadow-sm space-y-4">
              <div className="flex items-center space-x-2 pb-3 border-b border-[#1b2b36] text-slate-100">
                <ListFilter className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                <span className="text-sm font-bold tracking-wide">本章目錄導覽</span>
              </div>

              <nav className="space-y-1 text-xs max-h-[calc(100vh-12rem)] overflow-y-auto pr-1" aria-label="章節側欄導覽">
                {SECTIONS.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    className={`group flex items-center justify-between px-2.5 py-2 rounded-lg transition-all ${
                      activeSection === sec.id
                        ? 'bg-emerald-950/70 text-emerald-300 font-semibold border-l-2 border-emerald-500'
                        : 'text-slate-400 hover:bg-[#16232c] hover:text-slate-200'
                    }`}
                  >
                    <div className="flex items-center space-x-2 min-w-0 pr-1">
                      <span
                        className={`font-mono shrink-0 ${
                          activeSection === sec.id
                            ? 'text-emerald-400 font-bold'
                            : 'text-slate-500 group-hover:text-slate-400'
                        }`}
                      >
                        {sec.num}
                      </span>
                      <span className="truncate">{sec.title}</span>
                    </div>
                  </a>
                ))}

                <div className="pt-2 border-t border-[#1b2b36] mt-2 space-y-1">
                  <a
                    href="#related-chapters"
                    className={`flex items-center space-x-2 px-2.5 py-1.5 rounded-lg transition-colors ${
                      activeSection === 'related-chapters'
                        ? 'bg-emerald-950 text-emerald-300 font-medium'
                        : 'text-slate-400 hover:bg-[#16232c] hover:text-slate-200'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                    <span>教材體系關聯</span>
                  </a>

                  <a
                    href="#key-takeaways"
                    className={`flex items-center space-x-2 px-2.5 py-1.5 rounded-lg transition-colors ${
                      activeSection === 'key-takeaways'
                        ? 'bg-emerald-950 text-emerald-300 font-medium'
                        : 'text-slate-400 hover:bg-[#16232c] hover:text-slate-200'
                    }`}
                  >
                    <span className="text-emerald-400 font-bold">★</span>
                    <span>五個帶下山的觀念</span>
                  </a>

                  <a
                    href="#checklist-tool"
                    className={`flex items-center space-x-2 px-2.5 py-1.5 rounded-lg transition-colors ${
                      activeSection === 'checklist-tool'
                        ? 'bg-sky-950 text-sky-300 font-medium'
                        : 'text-slate-400 hover:bg-[#16232c] hover:text-slate-200'
                    }`}
                  >
                    <CheckSquare className="w-3.5 h-3.5 text-sky-400" aria-hidden="true" />
                    <span>行前查核工具</span>
                  </a>
                </div>
              </nav>
            </div>
          </aside>

          {/* Main Article Content Container */}
          <main id="main-content" className="lg:col-span-9 focus:outline-none">
            {/* Top Table of contents for mobile / quick overview */}
            <TableOfContents activeSection={activeSection} />

            {/* Chapters 01 to 10 */}
            <ChapterContent />

            {/* Related Chapters (Section 11) */}
            <div className="mt-16">
              <RelatedChapters />
            </div>

            {/* Key Takeaways (Section 12) */}
            <div className="mt-16">
              <KeyTakeaways />
            </div>

            {/* Practical Interactive Pre-trip Checklist */}
            <div className="mt-16 mb-8">
              <PreTripChecklist />
            </div>
          </main>
        </div>
      </div>

      {/* Footer & Disclaimer */}
      <Footer />

      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-30 p-3 rounded-full bg-emerald-600/90 hover:bg-emerald-500 text-white shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 hover:scale-105"
          aria-label="返回頁首"
        >
          <ArrowUp className="w-5 h-5" aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
