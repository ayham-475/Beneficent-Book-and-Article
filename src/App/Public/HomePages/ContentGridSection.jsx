import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Database, PieChart, Users, BookOpen, ChevronLeft } from 'lucide-react';

const MegaSectionLight = () => {
  return (
    <section className="relative min-h-[850px] bg-[#f0f3fa] text-[#2d3748] p-4 md:p-12 overflow-hidden" dir="rtl">
      
      {/* لمسات خلفية ناعمة لكسر حدة اللون الواحد */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/40 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-100/40 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/4" />

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
        
        {/* الجانب الأيمن: مركز القيادة (تنسيق البطاقات البارزة) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="text-right pr-4">
            <h3 className="text-[#a0aec0] font-bold tracking-[0.3em] text-[10px] uppercase">الإدارة والتحليل</h3>
            <h2 className="text-3xl font-black text-[#1a202c] mt-2">لوحة التحكم</h2>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {/* بطاقة الإحصائيات (تأثير بروز ناعم) */}
            <div className="relative h-44 bg-white/70 backdrop-blur-md border border-white rounded-[2.5rem] p-8 flex items-center justify-between shadow-[0_15px_35px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.06)] transition-all group">
              <div className="z-10 text-right">
                <div className="flex items-center gap-2 mb-2">
                  <PieChart size={18} className="text-emerald-500" />
                  <h4 className="text-xl font-bold text-[#2d3748]">إحصائيات ذكية</h4>
                </div>
                <p className="text-[#718096] text-xs max-w-[220px] leading-relaxed">تحليل مباشر لتفاعل الجمهور مع إصداراتك الجديدة بدقة ثانية.</p>
              </div>
              <div className="w-16 h-16 bg-[#f0f3fa] rounded-2xl flex items-center justify-center border border-white shadow-inner group-hover:bg-emerald-50 transition-colors">
                <span className="text-emerald-600 font-black text-xl italic">01</span>
              </div>
            </div>

            {/* أيقونات الوسط الثلاثية */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: <Database size={20} />, label: 'البيانات' },
                { icon: <LayoutDashboard size={20} />, label: 'الواجهة' },
                { icon: <Users size={20} />, label: 'الأعضاء' }
              ].map((item, i) => (
                <div key={i} className="h-28 bg-white/50 border border-white rounded-2xl flex flex-col items-center justify-center hover:bg-white transition-all shadow-sm group cursor-pointer">
                  <div className="text-blue-500 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <span className="mt-3 text-[10px] font-bold text-[#a0aec0] uppercase tracking-tighter">{item.label}</span>
                </div>
              ))}
            </div>

            {/* بطاقة التوزيع (تنسيق انسيابي) */}
            <div className="relative h-44 bg-gradient-to-l from-white/80 to-white/40 backdrop-blur-md border border-white rounded-[2.5rem] p-8 flex items-center justify-between shadow-[0_15px_35px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.06)] transition-all group">
              <div className="z-10 text-right">
                <div className="flex items-center gap-2 mb-2">
                  <Database size={18} className="text-blue-500" />
                  <h4 className="text-xl font-bold text-[#2d3748]">توزيع المحتوى</h4>
                </div>
                <p className="text-[#718096] text-xs max-w-[220px] leading-relaxed">خوارزميات ذكية تضمن وصول محتواك للمهتمين في الوقت المناسب.</p>
              </div>
              <div className="w-16 h-16 bg-[#f0f3fa] rounded-full flex items-center justify-center border border-white shadow-inner group-hover:bg-blue-50 transition-colors">
                <span className="text-blue-600 font-black text-xl italic">02</span>
              </div>
            </div>
          </div>
        </div>

        {/* الجانب الأيسر: المكتبة (الشبكة البيضاء الفخمة) */}
        <div className="lg:col-span-7 bg-white/40 border border-white/60 rounded-[3.5rem] p-10 relative shadow-[0_20px_50px_rgba(0,0,0,0.02)]">
          
          <div className="flex justify-between items-center mb-10">
            <div className="text-right">
              <h2 className="text-3xl font-black text-[#1a202c]">مكتبة <span className="text-emerald-500">الواحة</span></h2>
              <p className="text-[#718096] text-sm font-medium mt-1">تصفح عالمك المعرفي الخاص</p>
            </div>
            <button className="flex items-center gap-1 text-[10px] font-black text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full hover:bg-emerald-100 transition-colors">
              عرض الكل <ChevronLeft size={14} />
            </button>
          </div>

          {/* شبكة الكتب بلمسة نظيفة (Clean Grid) */}
          <div className="grid grid-cols-4 gap-4 mb-12">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className={`relative rounded-2xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-500 ${i % 2 === 0 ? 'h-44 mt-6' : 'h-52'}`}>
                <img 
                  src={`https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400&auto=format&fit=crop&i=${i}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt="Book"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a202c]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                  <span className="text-[9px] font-bold text-white uppercase tracking-widest">إصدار {i}</span>
                </div>
              </div>
            ))}
          </div>

          {/* قسم المؤلفين بلمسة زجاجية */}
          <div className="pt-8 border-t border-gray-100">
            <h3 className="text-[#a0aec0] font-bold tracking-[0.2em] text-[10px] mb-6 uppercase text-right">المؤلفون الأكثر تفاعلاً</h3>
            <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-hide">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex-shrink-0 flex items-center gap-3 bg-white/80 p-2 pr-4 rounded-full border border-white shadow-sm hover:shadow-md hover:bg-white transition-all cursor-pointer group">
                  <div className="relative">
                    <img src={`https://i.pravatar.cc/150?u=user${i}`} className="w-10 h-10 rounded-full object-cover" alt="Author" />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full" />
                  </div>
                  <div className="text-right">
                    <h5 className="text-xs font-bold text-[#2d3748]">د. أحمد فؤاد</h5>
                    <span className="text-[9px] text-[#a0aec0]">12 كتاب</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default MegaSectionLight;