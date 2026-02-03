import React from 'react';
import { motion } from 'framer-motion';
import { MoreHorizontal, ShieldCheck, Mail, Activity, TrendingUp } from 'lucide-react';

const UserIdentityCard = ({ user, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-[#1c1c1e] rounded-[2rem] border border-white/[0.05] p-5 relative overflow-hidden group hover:border-emerald-500/30 transition-all shadow-xl"
    >
      {/* التوهج العلوي */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 blur-[40px] rounded-full" />
      
      <div className="flex justify-between items-start mb-5 relative z-10">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img src={user.avatar} className="w-14 h-14 rounded-2xl object-cover ring-2 ring-white/5" alt="" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#1c1c1e] rounded-full flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full shadow-[0_0_8px_#10b981]" />
            </div>
          </div>
          <div>
            <h3 className="text-white font-bold text-sm tracking-wide">{user.name}</h3>
            <span className="text-gray-500 text-[10px] flex items-center gap-1 mt-1">
              <ShieldCheck size={12} className="text-emerald-500" /> {user.role}
            </span>
          </div>
        </div>
        <button className="text-gray-600 hover:text-white transition-colors">
          <MoreHorizontal size={20} />
        </button>
      </div>

      {/* تفاصيل البيانات (نفس تنسيق Dribbble) */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        <div className="bg-black/20 rounded-2xl p-3 border border-white/5">
          <p className="text-[9px] text-gray-500 uppercase font-black mb-1">الرصيد المتاح</p>
          <p className="text-emerald-400 font-black text-sm">{user.balance}</p>
        </div>
        <div className="bg-black/20 rounded-2xl p-3 border border-white/5">
          <p className="text-[9px] text-gray-500 uppercase font-black mb-1">نسبة التفاعل</p>
          <div className="flex items-center gap-2">
            <TrendingUp size={12} className="text-blue-400" />
            <p className="text-white font-black text-sm">{user.engagement}%</p>
          </div>
        </div>
      </div>

      {/* شريط الإجراءات */}
      <div className="flex items-center justify-between border-t border-white/5 pt-4">
        <div className="flex items-center gap-2 text-gray-400">
          <Mail size={14} />
          <span className="text-[10px] font-medium">{user.email}</span>
        </div>
        <button className="text-[10px] font-black text-emerald-500 hover:text-emerald-400 uppercase tracking-tighter">
          الملف الشخصي
        </button>
      </div>
    </motion.div>
  );
};

export default UserIdentityCard;