import React from 'react';
import { DollarSign, Users, BookOpen, TrendingUp, ArrowUpRight, Award } from 'lucide-react';

const StatsCard = ({ title, value, subValue, icon: Icon, colorClass, trend }) => (
  // md:w-full تجعل البطاقة تأخذ حجم العمود الثابت في الكمبيوتر
  // w-[48%] تجعلها تأخذ نصف الشاشة في الموبايل ليظهر 2 فقط
  <div className="relative group  bg-white flex-shrink-0 w-[48%] h-[50%] md:w-70 mt-10 md:mt-20  mr-18  rounded-[2rem] md:rounded-[2.8rem] p-4 md:p-7 border border-white shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_60px_rgba(49,151,149,0.12)] transition-all duration-500 hover:-translate-y-2 overflow-hidden">
    
    <div className="absolute -right-10 -top-10 w-32 h-32 md:w-40 md:h-40 bg-[#E6FFFA]/40 rounded-full blur-2xl md:blur-3xl group-hover:bg-[#E6FFFA]/80 transition-all duration-700" />

    <div className="relative z-10 ">
      <div className="flex flex-col sm:flex-row justify-between items-start ">
        <div className={`p-3 md:p-4 rounded-[1.2rem] md:rounded-[1.5rem] ${colorClass} shadow-sm border border-white/50 transition-transform duration-500 group-hover:scale-110`}>
          <Icon size={24} />
        </div>
        
        <div className="flex items-center gap-1 bg-[#F0FDF4] text-[#16A34A] px-2 py-1 md:px-3 md:py-1.5 rounded-full border border-[#DCFCE7]">
          <TrendingUp size={12} />
          <span className="text-[10px] font-black whitespace-nowrap">{trend}</span>
        </div>
      </div>

      <div className="space-y-1">
        <p className="text-[#718096] text-[10px] md:text-xs font-black uppercase tracking-[0.15em] mb-1 italic opacity-80 italic">
          {title}
        </p>
        <div className="flex items-baseline gap-2">
          <h3 className="text-2xl md:text-4xl font-black text-[#1A202C] tracking-tighter italic">
            {value}
          </h3>
          {subValue && <span className="text-[10px] md:text-xs font-bold text-gray-400">{subValue}</span>}
        </div>
      </div>

      <div className="mt-6 pt-5 border-t border-gray-50 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
        <span className="text-[10px] font-black text-[#319795] uppercase tracking-widest cursor-pointer">عرض التفاصيل</span>
        <ArrowUpRight size={14} className="text-[#319795]" />
      </div>
    </div>
  </div>
);

const StatsGrid = () => {
  const stats = [
    { title: "إجمالي الأرباح", value: "1,240.50", subValue: "SAR", trend: "+12%", icon: DollarSign, colorClass: "bg-[#E6FFFA] text-[#319795]" },
    { title: "جمهورك (القراء)", value: "3.5K", subValue: "قارئ", trend: "+8.4%", icon: Users, colorClass: "bg-[#EBF8FF] text-[#3182CE]" },
    { title: "المحتوى المباع", value: "84", subValue: "مبيعة", trend: "+5.2%", icon: BookOpen, colorClass: "bg-[#F0FDF4] text-[#16A34A]" },
    { title: "المركز الحالي", value: "#12", subValue: "عالمياً", trend: "Top 5%", icon: Award, colorClass: "bg-[#FFFBEB] text-[#D97706]" },
  ];

  return (
    <div className="w-full mb-12" dir="rtl">
      {/* ستايل إخفاء السكرول بار في الجوال فقط */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 767px) {
          .custom-slider {
            display: flex !important;
            overflow-x: auto !important;
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .custom-slider::-webkit-scrollbar { display: none; }
        }
      `}} />

      {/* هنا السحر: 
        1. في الموبايل الكلاس هو custom-slider (الذي عرفناه فوق كسلايدر).
        2. في الكمبيوتر md:grid تلغي الـ flex وتجعلها شبكة ثابتة 4 أعمدة.
      */}
      <div className="custom-slider md:grid md:grid-cols-4 gap-4 md:gap-8 px-4 md:px-0 py-4">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>
    </div>
  );
};

export default StatsGrid;


