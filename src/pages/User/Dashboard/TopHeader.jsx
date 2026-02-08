import React, { useContext } from 'react';
import { Bell, Search, ChevronDown, Sparkles, Globe, Menu } from 'lucide-react';

import { AuthContext } from '../../../features/auth/auther';
const TopHeader = ({ authorName = "د. أحمد خالد" }) => {
  const {user}=useContext(AuthContext)
  return (
    // أزلنا w-320 واستبدلناها بـ w-full مع max-w لضمان عدم الخروج عن الإطار
    <div className="fixed top-1 left-0 right-14 z-50 px-4 md:px-8">
      <header className="mx-auto max-w-[1600px] w-full flex justify-between items-center py-3 md:py-4 px-4 md:px-8 bg-white/70 backdrop-blur-xl border border-white/50 rounded-[1.5rem] md:rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.03)] transition-all duration-500">
        
        {/* الجزء الأيمن: الترحيب (يختفي الوصف الصغير في الهواتف جداً للحفاظ على المساحة) */}
        <div className="flex items-center gap-4">
          {/* زر القائمة للهواتف (يظهر فقط في الشاشات الصغيرة) */}
          <button className="lg:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-lg">
            <Menu size={20} />
          </button>

          <div className="flex flex-col"> 
            <div className="flex items-center gap-1">
              <h1 className="text-sm md:text-xl font-black text-[#1A202C] tracking-tight truncate max-w-[120px] md:max-w-none">
                {user.profile.name} أهلاً،
              </h1>
              <Sparkles size={16} className="text-[#319795] animate-pulse hidden xs:block" />
            </div>
            <p className="hidden md:block text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-0.5">
              لوحة التحكم • <span className="text-[#4FD1C5]">متصل</span>
            </p>
          </div>
        </div>

        {/* شريط البحث: يختفي في الهواتف ويتحول لأيقونة أو يظهر فقط في الشاشات الكبيرة */}
        <div className="hidden lg:flex items-center relative group flex-1 max-w-md mx-10">
          <Search className="absolute right-4 text-gray-300 group-hover:text-[#319795] transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="ابحث عن محتواك..."
            className="w-full bg-[#F0F4F4]/50 border border-transparent focus:border-[#319795]/20 focus:bg-white rounded-2xl py-2.5 pr-12 pl-5 text-xs font-bold outline-none transition-all duration-300 shadow-inner"
          />
        </div>

        {/* الجزء الأيسر: الإشعارات والبروفايل */}
        <div className="flex items-center gap-2 md:gap-5">
          
          {/* الإشعارات: نخفي زر اللغة في الهواتف الصغيرة جداً */}
          <div className="flex items-center gap-1 md:gap-2 border-l border-gray-100 pl-2 md:pl-5">
             <button className="hidden sm:block p-2.5 text-gray-400 hover:text-[#319795] hover:bg-[#E6FFFA] rounded-xl transition-all">
                <Globe size={18} />
             </button>
             <button className="p-2.5 text-gray-400 hover:text-[#319795] hover:bg-[#E6FFFA] rounded-xl transition-all relative">
                <Bell size={18} />
                <span className="absolute top-2 right-2 w-3.5 h-3.5 bg-red-500 border-2 border-white text-[8px] text-white flex items-center justify-center rounded-full font-black">
                  3
                </span>
             </button>
          </div>

          {/* البروفايل: جعلناه أكثر مرونة */}
          <div className="flex items-center gap-2 md:gap-3 bg-white sm:bg-gradient-to-r sm:from-[#F7FAFC] sm:to-white p-1 sm:p-1.5 sm:pr-4 rounded-xl md:rounded-2xl border border-transparent sm:border-white shadow-none sm:shadow-sm hover:shadow-md transition-all cursor-pointer group">
             <div className="hidden sm:flex flex-col text-left items-end">
                <span className="text-[11px] font-black text-[#2D3748] group-hover:text-[#319795] transition-colors whitespace-nowrap">
                  {user.profile.name}
                </span>
                <span className="text-[8px] text-[#38A169] font-black uppercase tracking-tighter">
                  موثق ✓
                </span>
             </div>
             
             <div className="relative shrink-0">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl overflow-hidden border-2 border-[#E6FFFA] shadow-sm">
                  <img 
                    src={`https://ui-avatars.com/api/?name=${authorName}&background=319795&color=fff&bold=true`} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-[#38A169] border-2 border-white rounded-full"></div>
             </div>
             
             <ChevronDown size={14} className="text-gray-400 hidden sm:block group-hover:translate-y-0.5 transition-transform" />
          </div>

        </div>
      </header>
    </div>
  );
};

export default TopHeader;