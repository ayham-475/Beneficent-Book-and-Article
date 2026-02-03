import React from 'react'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search,Sparkles,Brain,Cpu,Rocket,PenTool} from 'lucide-react';
function HedderArticle({activeCategory,setActiveCategory}) {
      const categories = [
        { id:1, name: 'الكل', icon: <Sparkles size={16} /> },
        {id:2, name: 'الفكر', icon: <Brain size={16} /> },
        {id:3, name: 'التقنية', icon: <Cpu size={16} /> },
        {id:4, name: 'الحياة', icon: <Rocket size={16} /> },
        {id:5, name: 'الأدب', icon: <PenTool size={16} /> }
      ];
    
    
  return (

      
    <div className="min-h-screen bg-[#fcfcfc] text-[#1a1c20] font-sans pb-20" dir="rtl">
      
      {/* 1. الهيدر (حافظنا على التنسيق مع لمسة جمالية) */}
      <header className="pt-24 pb-16 px-6 text-center">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">
            منصة <span className="text-emerald-500 underline decoration-emerald-100">الحصاد</span>
          </h1>
          <p className="text-gray-400 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            مقالات مختارة بعناية لتغذي فضولك المعرفي وتفتح لك آفاقاً جديدة.
          </p>
        </motion.div>

        {/* حقل البحث الذكي (نفس العمليات) */}
        <div className="max-w-3xl mx-auto mt-12 relative group">
          <div className="absolute inset-0 bg-emerald-500/5 blur-3xl group-focus-within:bg-emerald-500/10 transition-all rounded-full" />
          <div className="relative flex items-center bg-white border border-gray-100 rounded-[2rem] p-3 shadow-[0_10px_40px_rgba(0,0,0,0.02)] focus-within:shadow-2xl focus-within:shadow-emerald-500/5 transition-all">
            <Search className="mr-4 text-gray-300 group-focus-within:text-emerald-500 transition-colors" />
            <input 
              type="text" 
              placeholder="عن ماذا تود القراءة اليوم؟" 
              className="w-full bg-transparent outline-none text-xl px-4 font-medium placeholder:text-gray-300"
            />
            <button className="bg-[#1a1c20] text-white px-10 py-4 rounded-[1.5rem] font-black text-lg hover:bg-emerald-600 transition-all active:scale-95 shadow-lg">
              اكتشف
            </button>
          </div>
        </div>
      </header>

      {/* 2. الأزرار وعمليات التبديل (نفس المنطق بجمالية أعلى) */}
      <nav className="sticky top-0 z-50 bg-[#fcfcfc]/90 backdrop-blur-xl border-y border-gray-100 py-5 ">
        <div className="container mx-auto flex justify-center gap-4 px-4 overflow-x-auto scrollbar-hide">
          {categories.map((cat) => (
          
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}

              className={`flex items-center gap-2 px-8 py-3 rounded-2xl font-black text-sm transition-all relative ${
                activeCategory === cat.id
                ? 'text-emerald-600 bg-emerald-50' 
                : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
              }`}
            > 
             {cat.icon}
              {cat.name}
              {activeCategory === cat.id && (
                <motion.div layoutId="activeCat" className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-emerald-500 rounded-full" />
              )}
            </button>
          ))}
        </div>
      </nav>

    </div>
  )
}

export default HedderArticle
