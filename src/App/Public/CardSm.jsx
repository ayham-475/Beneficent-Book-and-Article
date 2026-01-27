import React from 'react';
import { motion } from 'framer-motion';
import {  Sparkles, Zap, Globe, } from 'lucide-react';


const CardSm = () => {
  
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };
  const Cards=[
                    { icon: <Globe />, title: "وصول عابر للقارات", desc: "عملك سيُقرأ في كل ركن من أركان الأرض بضغطة زر." },
                    { icon: <Zap />, title: "دفع فوري", desc: "أرباحك تصل لمحفظتك فوراً بمجرد بيع أي نسخة." },
                    { icon: <Sparkles />, title: "أدوات ذكية", desc: "محرر ذكاء اصطناعي يساعدك في تنسيق كتابك ليبدو احترافياً." }
                  ];

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };
  return ( 
    <div className="min-h-screen  relative overflow-hidden font-sans" dir="rtl">
       
      {/* الخلفية المضيئة */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-900/20 blur-[120px] rounded-full"></div>
      </div>
<div className="inline-flex items-center absolute gap-2 top-10 left-130 bg-white/70 backdrop-blur-sm border border-gray-100 px-5 py-2.5 rounded-full mb-6 shadow-md animate-pulse">
            <span className="flex h-2.5 w-2.5 rounded-full bg-[#C79A7F]"></span>
            <span className="text-sm font-semibold text-[#2D3748]"> ماتوفرة لكم منصتنا </span>
          </div>            {/* --- Features Grid (The Magic Part) --- */}
            <section className="py-24 px-6 relative mt-15 z-10">
              <div className="container mx-auto">
                <motion.div 
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                  className="grid  grid-cols-1 md:grid-cols-3 gap-8"
                >
                  {Cards.map((feature, index) => (
                    <motion.div  
                      key={index} variants={fadeIn}
                      className="group p-8  bg-violet-50   rounded-2xl border border-white/10 hover:text-white hover:border-blue-500/50 hover:bg-[#374165] transition-all duration-500"
                    >
                      <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                        {feature.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>
      
    </div>
  );
};

export default CardSm;