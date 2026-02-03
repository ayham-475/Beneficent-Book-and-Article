import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, ChevronLeft, Sparkles } from 'lucide-react';
import  '../Dashboard/Dashboard.css'
import { ArticlesContextData } from '../../../features/Articles/ArticlesContext';
import { Link } from 'react-router-dom';
  const ReviewList = ({ ChangeContentPreviewData }) => {
  // بيانات تجريبية مكثفة لاختبار السكرول
  const pendingItems = Array(10).fill({
    title: "مستقبل الذكاء الاصطناعي في 2026",
    author: "م/ أحمد خالد",
    type: "مقال تقني",
    time: "منذ ساعتين",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=200"
  }).map((item, index) => ({ ...item, id: index + 1 }));
const ArticlesData =useContext(ArticlesContextData);


// console.log("item ",ArticlesData.ArticlesData)
  return (
    
    <Link >
    <div className="bg-[#161616] mt-10 rounded-[2.5rem] border border-white/5 h-[calc(100vh-100px)] flex flex-col overflow-hidden shadow-2xl sticky top-8">
      
      {/* رأس القائمة الثابت */}
      <div className="p-7 border-b border-white/5 bg-[#1a1a1a]/50 backdrop-blur-xl z-20">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-white font-black text-sm flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,1)]" />
            طلبات الانتظار
          </h3>
          <span className="text-[10px] font-black text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            {pendingItems.length} جديد
          </span>
        </div>
        <p className="text-[10px] text-gray-500 font-bold">قم باختيار محتوى للمراجعة والتدقيق</p>
      </div>

      {/* منطقة القائمة القابلة للتمرير بسكرول مخفي (No Scrollbar) */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4 scroll-smooth hide-scrollbar">
        {ArticlesData.ArticlesData.map((item) => {
          const isActive = item.id==1;
          return (
            <motion.button

              key={item.id}
              whileHover={{ scale: 1.02, x: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => ChangeContentPreviewData(item)}
              className={`w-full text-right p-4 rounded-[1.8rem] transition-all duration-500 border relative group overflow-hidden ${
                isActive 
                ? 'bg-emerald-500/5 border-emerald-500/40 shadow-[inset_0_0_15px_rgba(16,185,129,0.1)]' 
                : 'bg-[#0f0f0f] border-white/5 hover:border-white/10 shadow-lg'
              }`}
            >
              {/* توهج جانبي عند النشاط */}
              {isActive && (
                <div className="absolute right-0 top-0 bottom-0 w-1 bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.8)]" />
              )}

              <div className="flex gap-4 items-center relative z-10">
                <div className={`w-14 h-14 rounded-2xl overflow-hidden shrink-0 border transition-all duration-500 ${
                  isActive ? 'border-emerald-500/50 scale-105 shadow-lg' : 'border-white/10 grayscale opacity-60'
                }`}>
                  <img src={item.img} className="w-full h-full object-cover" alt="" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h4 className={`font-black text-[13px] truncate mb-1 transition-colors ${
                    isActive ? 'text-emerald-400' : 'text-gray-300'
                  }`}>
                    {item.title}
                  </h4>
                  <div className="flex items-center gap-2 text-[9px] font-bold">
                     <span className={isActive ? 'text-white/80' : 'text-gray-600'}>{item.author}</span>
                     <span className="w-1 h-1 bg-gray-800 rounded-full" />
                     <span className="text-emerald-500/70 uppercase tracking-tighter">{item.type}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex justify-between items-center opacity-60 group-hover:opacity-100 transition-opacity">
                <span className="text-[8px] text-gray-500 font-black uppercase tracking-widest">{item.time}</span>
                <ChevronLeft size={14} className={isActive ? 'text-emerald-400' : 'text-gray-700'} />
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* تذييل ناعم للقائمة */}
      <div className="p-4 bg-gradient-to-t from-[#161616] to-transparent pointer-events-none absolute bottom-0 left-0 right-0 h-12" />
    </div>
    
    </Link>

  );
};

export default ReviewList;