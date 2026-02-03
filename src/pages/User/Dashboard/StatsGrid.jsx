import React from 'react';
import { DollarSign, Users, BookOpen, TrendingUp, ArrowUpRight, Award } from 'lucide-react';

const StatsCard = ({ title, value, subValue, icon: Icon, colorClass, trend }) => (
  // التعديل: استبدال mr-28 بـ mx-4 md:mr-28 (في الجوال يكون التوسيط متساوي وفي الحاسوب يطبق مرجامك الخاص)
  <div className="relative group bg-white mx-4 mt-20 md:mr-28 rounded-[2.5rem] md:rounded-[2.8rem] p-6 md:p-7 border border-white shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_60px_rgba(49,151,149,0.12)] transition-all duration-500 hover:-translate-y-2 overflow-hidden shrink-0">
    
    {/* تأثير الخلفية النعناعي */}
    <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#E6FFFA]/40 rounded-full blur-3xl group-hover:bg-[#E6FFFA]/80 transition-all duration-700" />

    <div className="relative z-10">
      <div className="flex justify-between items-start mb-6">
        {/* الأيقونة */}
        <div className={`p-3 md:p-4 rounded-[1.2rem] md:rounded-[1.5rem] ${colorClass} shadow-sm border border-white/50 transition-transform duration-500 group-hover:scale-110`}>
          <Icon size={24} />
        </div>
        
        {/* مؤشر النسبة المئوية */}
        <div className="flex items-center gap-1 bg-[#F0FDF4] text-[#16A34A] px-3 py-1.5 rounded-full border border-[#DCFCE7]">
          <TrendingUp size={12} />
          <span className="text-[10px] font-black whitespace-nowrap">{trend}</span>
        </div>
      </div>

      <div className="space-y-1">
        <p className="text-[#718096] text-[10px] md:text-xs font-black uppercase tracking-[0.15em] mb-1 italic opacity-80">
          {title}
        </p>
        <div className="flex items-baseline gap-2">
          <h3 className="text-3xl md:text-4xl font-black text-[#1A202C] tracking-tighter">
            {value}
          </h3>
          {subValue && <span className="text-[10px] md:text-xs font-bold text-gray-400">{subValue}</span>}
        </div>
      </div>

      {/* الرابط السفلي التفاعلي */}
      <div className="mt-6 pt-5 border-t border-gray-50 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
        <span className="text-[10px] font-black text-[#319795] uppercase tracking-widest cursor-pointer">عرض التفاصيل</span>
        <ArrowUpRight size={14} className="text-[#319795]" />
      </div>
    </div>
  </div>
);

const StatsGrid = () => {
  const stats = [
    {
      title: "إجمالي الأرباح",
      value: "1,240.50",
      subValue: "SAR",
      trend: "+12%",
      icon: DollarSign,
      colorClass: "bg-[#E6FFFA] text-[#319795]",
    },
    {
      title: "جمهورك (القراء)",
      value: "3.5K",
      subValue: "قارئ",
      trend: "+8.4%",
      icon: Users,
      colorClass: "bg-[#EBF8FF] text-[#3182CE]",
    },
    {
      title: "المحتوى المباع",
      value: "84",
      subValue: "مبيعة",
      trend: "+5.2%",
      icon: BookOpen,
      colorClass: "bg-[#F0FDF4] text-[#16A34A]",
    },
    {
      title: "المركز الحالي",
      value: "#12",
      subValue: "عالمياً",
      trend: "Top 5%",
      icon: Award,
      colorClass: "bg-[#FFFBEB] text-[#D97706]",
    },
  ];

  return (
    // التعديل هنا: استخدام max-w-full لضمان عدم خروج العناصر عن الشاشة
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 w-full px-2 md:px-0">
      {stats.map((stat, index) => (
        <StatsCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default StatsGrid;