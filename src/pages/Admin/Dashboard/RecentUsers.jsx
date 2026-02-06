import React from 'react';
import { motion } from 'framer-motion';

const RecentUsers = () => {
  const users = [
    { name: "عبدالله اليافعي", email: "abdullah@elite.com", status: "نشط", time: "2 دقيقة" },
    { name: "سارة المنصوري", email: "sara@elite.com", status: "أوفلاين", time: "1 ساعة" },
    { name: "محمد القحطاني", email: "mohd@elite.com", status: "نشط", time: "5 دقائق" },
    { name: "أحمد العتيبي", email: "ahmed@elite.com", status: "نشط", time: "10 دقائق" },
    { name: "ريم الشمري", email: "reem@elite.com", status: "أوفلاين", time: "3 ساعات" },
    { name: "فهد البقمي", email: "fahad@elite.com", status: "نشط", time: "مباشر" },
  ];

  return (
    <div className="bg-[#161616] p-8 rounded-[2.5rem] border border-white/5 flex flex-col h-[520px] shadow-2xl relative overflow-hidden group">
      {/* 1. العنوان ثابت في الأعلى */}
      <h3 className="text-white font-black mb-6 flex items-center gap-3 flex-shrink-0 italic text-xl">
        <div className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,1)] animate-pulse" />
        أحدث المنضمين
      </h3>

      {/* 2. منطقة السكرول للبطاقات */}
      <div className="flex-1 overflow-y-auto pr-1 space-y-4 custom-scrollbar-neon scroll-smooth">
        {/* ستايل شريط التمرير النيوني */}
        <style dangerouslySetInnerHTML={{__html: `
          .custom-scrollbar-neon::-webkit-scrollbar { width: 4px; }
          .custom-scrollbar-neon::-webkit-scrollbar-track { background: transparent; }
          .custom-scrollbar-neon::-webkit-scrollbar-thumb { 
            background: rgba(59, 130, 246, 0.1); 
            border-radius: 10px; 
            transition: all 0.3s;
          }
          .custom-scrollbar-neon:hover::-webkit-scrollbar-thumb { 
            background: rgba(59, 130, 246, 0.4); 
          }
        `}} />

        {users.map((user, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center justify-between p-4 bg-black/20 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all group/card cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 border border-white/10 overflow-hidden flex-shrink-0 shadow-lg">
                <img src={`https://i.pravatar.cc/100?u=${user.name}`} alt="" className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-500" />
              </div>
              <div className="overflow-hidden">
                <p className="text-sm font-black text-white group-hover/card:text-blue-400 transition-colors truncate">{user.name}</p>
                <p className="text-[10px] text-gray-500 truncate">{user.email}</p>
              </div>
            </div>
            <div className="flex flex-col items-end gap-1 flex-shrink-0">
               <span className="text-[9px] text-gray-600 font-bold">{user.time}</span>
               <div className={`w-1.5 h-1.5 rounded-full ${user.status === 'نشط' ? 'bg-emerald-500 shadow-[0_0_5px_#10b981]' : 'bg-gray-700'}`} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* 3. الزر ثابت في الأسفل */}
      <div className="mt-6 pt-4 border-t border-white/5 bg-[#161616] z-10">
        <button className="w-full py-3 bg-white/5 hover:bg-blue-500/10 rounded-xl text-[10px] font-black text-gray-400 hover:text-blue-400 transition-all uppercase tracking-[0.2em]">
          عرض جميع الأعضاء
        </button>
      </div>
    </div>
  );
};

export default RecentUsers;