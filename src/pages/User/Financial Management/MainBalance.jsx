import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Wallet, ArrowDownLeft, Plus, Zap } from 'lucide-react';

const MainBalance = () => {
  return (
    <div className="grid mt-20 mr-20 grid-cols-1 lg:grid-cols-3 gap-6" dir="rtl">
      {/* البطاقة الكبيرة - الرصيد */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="lg:col-span-2  relative overflow-hidden bg-[#0a0a0a] rounded-[3rem] p-10 border border-white/5 shadow-2xl"
      >
        <div className="relative z-10 flex flex-col h-full justify-between">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-emerald-500 font-black text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
                <Zap size={14} fill="currentColor"/> إجمالي المحفظة المالية
              </p>
              <h2 className="text-5xl md:text-7xl font-black text-white tabular-nums tracking-tighter">
                $42,850<span className="text-2xl text-gray-600">.00</span>
              </h2>
            </div>
            <div className="bg-emerald-500/10 p-4 rounded-3xl border border-emerald-500/20">
              <Wallet className="text-emerald-500" size={32} />
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <button className="flex-1 px-8 py-5 bg-emerald-500 hover:bg-emerald-600 text-black font-black rounded-2xl transition-all shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-2">
              <ArrowUpRight size={20} /> سحب الأرباح للبنك
            </button>
            <button className="flex-1 px-8 py-5 bg-white/5 hover:bg-white/10 text-white font-black rounded-2xl border border-white/10 transition-all flex items-center justify-center gap-2">
              <Plus size={20} /> تحويل رصيد
            </button>
          </div>
        </div>

        {/* تأثير التوهج الخلفي */}
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-emerald-500/10 blur-[120px] rounded-full"></div>
      </motion.div>

      {/* بطاقة إحصائية سريعة - الأرباح الشهرية */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-[3rem] p-8 border border-gray-100 shadow-xl flex flex-col justify-between"
      >
        <div className="space-y-4">
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block">أرباح الشهر الحالي</span>
          <div className="flex items-end gap-2">
            <h3 className="text-4xl font-black text-gray-800">$12,400</h3>
            <span className="text-emerald-500 font-bold text-sm mb-1">+24%</span>
          </div>
          {/* رسم بياني مصغر تفاعلي (بسيط) */}
          <div className="h-20 w-full flex items-end gap-1 px-2">
            {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
              <motion.div 
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                className="flex-1 bg-emerald-500/20 rounded-t-lg hover:bg-emerald-500 transition-colors cursor-pointer"
              />
            ))}
          </div>
        </div>
        <div className="pt-6 border-t border-gray-50">
          <p className="text-xs text-gray-400 font-bold leading-relaxed">أنت تحقق أداءً أفضل من الشهر الماضي بـ <span className="text-gray-800">3,200$</span></p>
        </div>
      </motion.div>
    </div>
  );
};
export default MainBalance