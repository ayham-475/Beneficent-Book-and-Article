import React, { useState, useEffect } from 'react';
import { ChevronRight} from 'lucide-react';
const Home= () => {
  return (
    <div className="min-h-screen bg-i text-[#2D3748] font-sans selection:bg-emerald-100" dir="rtl">
      {/* --- Hero Section - مع تأثير الخلفية المتوهجة (Particles) --- */}
      <header className="relative pt-40 pb-24 px-6  from-[#FFFDFB] to-[#F8F4F1] overflow-hidden">
        <div className="container mx-auto text-center max-w-5xl relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-gray-200 px-5 py-2.5 rounded-full mb-6 shadow-md animate-pulse">
            <span className="flex h-2.5 w-2.5 rounded-full bg-[#C79A7F]"></span>
            <span className="text-sm font-semibold text-[#2D3748]">انطلق في رحاب المعرفة والإبداع</span>
          </div>
          <h1 className="text-6xl sm:text-7xl font-extrabold leading-tight mb-8 text-[#2D3748] drop-shadow-lg">
            اكتب. <span className="text-[#0A7D75]">انشر.</span> <span className="text-[#C79A7F]">اربح.</span> 
            <br className="hidden md:block" /> واحة <span className="text-[#0A7D75]">المعرفة</span> تنتظرك
          </h1>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            منصة "واحة الكتب" هي بوابتك نحو عالم النشر الحر، حول أفكارك إلى كتب ومقالات تصل لملايين القراء حول العالم، 
            واستمتع بأرباحك في بيئة إبداعية محفزة.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-[#0A7D75] text-white px-12 py-4 rounded-3xl text-xl font-bold hover:bg-[#0A7D75]/90 transition-all duration-300 shadow-xl shadow-emerald-200 hover:-translate-y-2 active:scale-95 transform">
              ابدأ رحلتك الإبداعية الآن
            </button>
            <button className="bg-whit text-[#0A7D75] border-2 border-[#C79A7F]/50 px-12 py-4 rounded-3xl text-xl font-bold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-1">
              استكشف المكتبة <ChevronRight size={22} className="rotate-180" />
            </button>
          </div>
        </div>
      </header>

    </div>
  );
};

export default Home;