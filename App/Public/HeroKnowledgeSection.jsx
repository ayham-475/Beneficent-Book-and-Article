import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowLeft, GraduationCap, Quote } from 'lucide-react';

const LuxuryHeroSection = () => {
  return (
    <section className="relative w-full h-[100vh] flex items-center overflow-hidden bg-[#0a0a0a]" dir="rtl">
      
      {/* 1. الصورة الخلفية الأساسية (المكتبة العريقة) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/imgs/OIP (9).webp" 
          className="w-full h-full object-cover opacity-30 grayscale-[30%]"
          alt="Luxury Library Background"
        />
        {/* طبقات تعتيم وتدرج لإبراز المحتوى */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-8 md:px-16 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* الجانب الأيمن: المحتوى النصي الفاخر */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full md:w-1/2 text-right"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-3 mb-6 justify-start"
          >
            <div className="w-12 h-[2px] bg-emerald-500" />
            <span className="text-emerald-500 font-black tracking-[0.2em] text-sm uppercase flex items-center gap-2">
              <Sparkles size={16} /> صرح المعرفة العربي
            </span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-black text-white leading-tight mb-8">
            جوهر <span className="text-emerald-500">الفكر</span> <br /> 
            في أبهى صوره
          </h1>

          <div className="relative mb-10">
            <Quote className="absolute -right-8 -top-4 text-emerald-500/20 w-16 h-16" />
            <p className="text-gray-400 text-xl md:text-2xl leading-relaxed font-light border-r-2 border-emerald-500/30 pr-6">
              نحن لا نصنع الكلمات، بل نصيغ الوعي. اكتشف مقالات حصرية كتبت بأيدي نخبة من المفكرين والعلماء في مكان صُمم خصيصاً لعشاق العمق.
            </p>
          </div>

          <div className="flex items-center gap-8">
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "#10b981" }}
              className="px-12 py-5 bg-emerald-600 text-white rounded-full font-black text-xl shadow-[0_15px_30px_rgba(16,185,129,0.3)] transition-all flex items-center gap-4"
            >
              ابدأ الإبحار
              <ArrowLeft size={24} />
            </motion.button>
            
            <div className="hidden md:flex flex-col">
              <span className="text-white font-bold text-2xl">+25k</span>
              <span className="text-gray-500 text-xs">قارئ متميز شهرياً</span>
            </div>
          </div>
        </motion.div>

        {/* الجانب الأيسر: صورة الرجل الذي يقرأ (الفخامة البصرية) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, x: -50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="w-full md:w-1/2 flex justify-center relative"
        >
          {/* الإطار الضوئي الخلفي (Glowing Aura) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-emerald-500/10 blur-[100px] rounded-full" />
          
          <div className="relative group">
            {/* الصورة الرئيسية للرجل */}
            <div className="relative w-72 mt-20 h-[450px] md:w-[450px] md:h-[500px] rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
              <img 
                src="/imgs/OIP (8).webp" 
                className="w-full h-full object-cover"
                alt="رجل يقرأ بتركيز"
              />
              {/* طبقة تظليل ناعمة فوق الصورة */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              {/* بطاقة طافية صغيرة على الصورة (Floating Tag) */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -right-4 bg-white/10 backdrop-blur-md p-4 rounded-3xl border border-white/20 shadow-2xl flex items-center gap-3"
              >
                <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/40">
                  <GraduationCap className="text-white" size={28} />
                </div>
                <div className="text-right">
                  <p className="text-white font-black text-sm">رمز المعرفة</p>
                  <p className="text-gray-300 text-[10px]">Elite Member</p>
                </div>
              </motion.div>
            </div>

            {/* زخرفة هندسية خلفية */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-4 border-l-4 border-emerald-500/50 rounded-bl-[3rem] z-[-1]" />
          </div>
        </motion.div>

      </div>

      {/* لمسة نهائية: خط تمرير جانبي رقمي */}
      <div className="absolute left-10 bottom-20 hidden lg:flex flex-col items-center gap-6">
        <div className="h-24 w-[1px] bg-gradient-to-t from-emerald-500 to-transparent" />
        <span className="text-[10px] text-emerald-500 font-bold uppercase tracking-[0.5em] rotate-180 [writing-mode:vertical-lr]">SCROLL</span>
      </div>
    </section>
  );
};

export default LuxuryHeroSection;