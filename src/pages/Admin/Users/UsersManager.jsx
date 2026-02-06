import React from 'react';
import Sidebar from '../Dashboard/Sidebar';
import UserIdentityCard from '../Users/UserIdentityCard';
import { Search, Filter, Plus, LayoutGrid, List, Users } from 'lucide-react';
import Footer from '../../../App/Public/Layout/Fotter';

const UsersManager = () => {
  const users = [
    { name: "أحمد بن علي", email: "ahmed@elite.com", avatar: "https://i.pravatar.cc/150?u=a1", role: "ADMIN", balance: "$12,400", engagement: 94 },
    { name: "ليان الدوسري", email: "layan@elite.com", avatar: "https://i.pravatar.cc/150?u=a2", role: "EDITOR", balance: "$3,120", engagement: 78 },
    { name: "محمد العتيبي", email: "m.otibi@elite.com", avatar: "https://i.pravatar.cc/150?u=a3", role: "VIP USER", balance: "$8,900", engagement: 88 },
    { name: "سلطان خالد", email: "sultan@elite.com", avatar: "https://i.pravatar.cc/150?u=a4", role: "USER", balance: "$450", engagement: 45 },
    { name: "نورة فيصل", email: "noura@elite.com", avatar: "https://i.pravatar.cc/150?u=a5", role: "PREMIUM", balance: "$5,600", engagement: 91 },
    { name: "فهد الشهري", email: "fahad@elite.com", avatar: "https://i.pravatar.cc/150?u=a6", role: "ADMIN", balance: "$15,200", engagement: 99 },
  ];

  return (
    <div className="min-h-screen bg-[#0d0d0f] flex overflow-hidden" dir="rtl">
      <Sidebar />
      
      {/* استبدال pr-[110px] بـ md:pr-[110px] لضمان عدم وجود فراغ في الموبايل */}
      <main className="flex-1 md:pr-[110px] px-4 md:px-10 py-6 md:py-10 overflow-y-auto no-scrollbar">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500 border border-emerald-500/20 md:hidden">
                <Users size={24} />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight">إدارة المجتمع</h1>
              <p className="text-gray-500 text-[10px] md:text-sm font-medium mt-1 uppercase tracking-widest">Elite Community Access</p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
             <div className="hidden md:flex bg-[#1c1c1e] p-1.5 rounded-2xl border border-white/5 ml-4">
                <button className="p-2 bg-emerald-500 rounded-xl text-black shadow-lg"><LayoutGrid size={18} /></button>
                <button className="p-2 text-gray-500 hover:text-white"><List size={18} /></button>
             </div>
             <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-emerald-500 text-black font-black px-6 py-4 rounded-2xl hover:bg-emerald-400 transition-all shadow-[0_10px_30px_rgba(16,185,129,0.2)] active:scale-95">
                <Plus size={20} />
                <span className="text-sm">إضافة عضو</span>
             </button>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-[#161618] border border-white/5 p-2 md:p-3 rounded-[2rem] mb-10 flex items-center gap-2 shadow-2xl">
           <div className="relative flex-1">
              <Search className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
              <input 
                type="text" 
                placeholder="ابحث بالاسم أو البريد..." 
                className="w-full bg-black/20 border border-transparent rounded-[1.5rem] py-3.5 pr-12 pl-5 text-sm text-white focus:outline-none focus:border-emerald-500/30 transition-all placeholder:text-gray-700"
              />
           </div>
           <button className="p-4 bg-white/5 rounded-[1.5rem] text-gray-400 border border-white/5 hover:bg-white/10">
              <Filter size={20} />
           </button>
        </div>

        {/* الجزء الخاص بالسلايدر المتجاوب:
            - في الموبايل: flex مع overflow-x-auto (سلايدر)
            - في الكبير: grid مع 3 أعمدة
        */}
        <div className="relative">
          {/* تلميح بصري للسحب في الموبايل */}
          <div className="flex items-center justify-between mb-4 md:hidden px-2">
            <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">اسحب للعرض ←</span>
            <div className="flex gap-1">
              <div className="w-4 h-1 bg-emerald-500 rounded-full"></div>
              <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
              <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
            </div>
          </div>

          <div className="
            flex md:grid 
            overflow-x-auto md:overflow-visible 
            md:grid-cols-2 lg:grid-cols-3 
            gap-6 pb-10 md:pb-0
            no-scrollbar
            snap-x snap-mandatory md:snap-none
          ">
            {users.map((user, index) => (
              <div key={index} className="min-w-[85%] md:min-w-0 snap-center">
                <UserIdentityCard user={user} index={index} />
              </div>
            ))}
          </div>
        </div>
<Footer />
      </main>
    </div>
  );
};

export default UsersManager;