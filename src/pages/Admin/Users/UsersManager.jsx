import React, { useEffect, useState } from 'react';
import Sidebar from '../Dashboard/Sidebar';
// ملاحظة: تأكد أن مكون UserIdentityCard لا يحتوي على هوامش ضخمة لتناسب التصميم الجديد
import { Search, Plus, Zap, Crown, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const UsersManager = () => {
  const [Users, setUser] = useState([]);
  const [UserBalance, SetUserBalance] = useState([]);
  const API_URL = "http://localhost:3000/users";
  const API_URL_profile = "http://localhost:3000/profiles";
  const GetUsers = async () => {
    const users = await fetch(API_URL);
    const usersdata = await users.json();
    const usersProfile = await fetch(API_URL_profile);
    const usersdata_profile = await usersProfile.json();
    setUser(usersdata);
    SetUserBalance(usersdata_profile)
  }

  useEffect(() => {
    GetUsers();
  }, [])
  
  return (
    // h-screen + overflow-hidden تضمن ثبات الصفحة بالكامل
    <div className="h-screen bg-[#080809] flex overflow-hidden font-sans text-white" dir="rtl">
      <Sidebar />

      <main className="flex-1 md:pr-[110px] relative flex flex-col h-full overflow-hidden">
        {/* تأثير الإضاءة الخلفي الثابت */}
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[300px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none"></div>

        {/* --- الهيدر (ثابت لا يتحرك) --- */}
        <header className="px-6 md:px-12 pt-10 pb-6 shrink-0 relative z-20 bg-[#080809]/50 backdrop-blur-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                <Crown className="text-black" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-black tracking-tight text-white">إدارة المجتمع</h1>
                <p className="text-emerald-500/80 text-[9px] font-black uppercase tracking-[0.2em] mt-1">Elite System Active</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative group flex-1 md:ml-100 md:w-100">
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                <input
                  type="text"
                  placeholder="بحث سريع..."
                  className="w-full bg-[#121214] border border-white/5 rounded-xl py-3 pr-10 pl-4 text-xs focus:outline-none focus:border-emerald-500/50 transition-all"
                />
              </div>
              <Link to={"/login"} ><button className="bg-emerald-500 text-black p-3 rounded-xl hover:bg-emerald-400 transition-all active:scale-95">
                <Plus size={20} />
              </button>
              </Link>
            </div>
          </div>
        </header>


        {/* --- منطقة البطاقات (هذا الجزء الوحيد الذي يتحرك) --- */}
        <div className="flex-1 overflow-y-auto px-6 md:px-12 pt-4 pb-20 no-scrollbar relative z-10">
          {/* إخفاء السكرول بار بذكاء */}
          <style>{`
            .no-scrollbar::-webkit-scrollbar { display: none; }
            .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
          `}</style>

          <div className="grid grid-cols-1 gap-4">
            {UserBalance.map((user, index) => (
              <div
                key={index}
                className="
                  group relative bg-[#121214]/40 border border-white/[0.03] 
                  hover:bg-[#161618] hover:border-emerald-500/20 
                  rounded-2xl p-4 transition-all duration-300
                  flex items-center justify-between gap-4
                "
              >
                {/* المحتوى الأفقي داخل البطاقة */}
                <div className="flex items-center gap-4 flex-1">
                  <img src={user.avatar_url} className="w-10 h-10 rounded-lg object-cover" alt="img" />
                  <div className="grid grid-cols-2 md:grid-cols-4 flex-1 items-center gap-4">
                    <div className="min-w-[120px]">
                      <h3 className="text-sm font-bold text-gray-100">{user.display_name}</h3>
                      <p className="text-[10px] text-gray-500 truncate">{user.payout_details}</p>
                    </div>
                    <div className="hidden md:block">
                      <span className="bg-white/5 text-[9px] px-2 py-1 rounded-md text-gray-400 border border-white/5">{user.payout_details}</span>
                    </div>
                    <div className="hidden md:block">
                      <span className="text-sm font-mono text-emerald-400 font-bold">{user.user_id}</span>
                    </div>
                    <div className="w-24">
                      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500" style={{ width: `${user.payout_method}%` }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <Link to='/ContentModeration' state={{ user: user }}><button className="text-gray-600 hover:text-emerald-500 transition-colors">
                  <Filter size={14} />تفاصيل
                </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
        {/* قسم "النشاط المباشر" السفلي - يزيد من جمال الصفحة */}
        <section className="mt-16 bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 rounded-[3rem] p-8 md:p-12 text-center relative overflow-hidden">
          <div className="relative z-10">
            <Zap className="mx-auto text-blue-500 mb-4 animate-pulse" size={32} />
            <h2 className="text-2xl font-black mb-2">رؤية كاملة لمجتمعك</h2>
            <p className="text-gray-500 text-sm max-w-lg mx-auto leading-relaxed font-medium">
              أنت الآن تشرف على 5,230 مستخدم. تم رصد 12 مستخدم جديد خلال الساعة الماضية يحتاجون لمراجعة بياناتهم.
            </p>
            <button className="mt-8 px-8 py-4 bg-white text-black rounded-2xl font-black text-xs hover:bg-blue-500 hover:text-white transition-all">
              عرض تقرير الأداء السنوي
            </button>
          </div>
          {/* زينة خلفية */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full"></div>
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-indigo-500/10 blur-[100px] rounded-full"></div>
        </section>

        {/* تأثير تلاشي سفلي ثابت ليعطي عمق عند انتهاء السكرول */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#080809] to-transparent pointer-events-none z-20"></div>
      </main>
    </div>
  );
};

export default UsersManager;
