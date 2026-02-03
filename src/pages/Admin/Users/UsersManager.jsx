import React from 'react';
import Sidebar from '../Dashboard/Sidebar'; // استخدم السايدبار الذي صممناه
import UserIdentityCard  from '../Users/UserIdentityCard'; // استخدم السايدبار الذي صم
import { Search, Filter, Plus, LayoutGrid, List } from 'lucide-react';

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
    <div className="min-h-screen bg-[#0f0f11] flex" dir="rtl">
      <Sidebar />
      
      <main className="flex-1 pr-[110px] pl-10 py-10 overflow-y-auto">
        
        {/* شريط الأدوات العلوي (Header) */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <div>
            <h1 className="text-3xl font-black text-white tracking-tight">إدارة المجتمع</h1>
            <p className="text-gray-500 text-sm font-medium mt-1">تحكم كامل في أعضاء المنصة وصلاحياتهم</p>
          </div>

          <div className="flex items-center gap-3">
             <div className="flex bg-[#1c1c1e] p-1.5 rounded-2xl border border-white/5 mr-4">
                <button className="p-2 bg-emerald-500 rounded-xl text-black shadow-lg"><LayoutGrid size={18} /></button>
                <button className="p-2 text-gray-500 hover:text-white"><List size={18} /></button>
             </div>
             <button className="flex items-center gap-2 bg-white text-black font-black px-6 py-3 rounded-2xl hover:bg-emerald-400 transition-all">
                <Plus size={18} />
                <span>إضافة مستخدم</span>
             </button>
          </div>
        </div>

        {/* صندوق البحث والتصفية المتطور */}
        <div className="bg-[#1c1c1e] border border-white/5 p-4 rounded-[2rem] mb-10 flex flex-wrap items-center gap-4 shadow-2xl">
           <div className="relative flex-1 min-w-[300px]">
              <Search className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input 
                type="text" 
                placeholder="ابحث عن مستخدم بالاسم، البريد أو المعرف..." 
                className="w-full bg-black/30 border border-white/5 rounded-2xl py-3.5 pr-14 pl-5 text-sm text-white focus:outline-none focus:border-emerald-500/50 transition-all"
              />
           </div>
           <button className="flex items-center gap-2 px-5 py-3.5 bg-white/5 rounded-2xl text-gray-300 font-bold border border-white/5 hover:bg-white/10 transition-all">
              <Filter size={18} />
              <span>تصفية متقدمة</span>
           </button>
        </div>

        {/* شبكة المستخدمين (The Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {users.map((user, index) => (
            <UserIdentityCard key={index} user={user} index={index} />
          ))}
        </div>

      </main>
    </div>
  );
};

export default UsersManager;