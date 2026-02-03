import React from 'react';
import { motion } from 'framer-motion';
import { Users, FileText, DollarSign, Activity, BarChart3, Bell, Search } from 'lucide-react';
import Sidebar from './Dashboard/Sidebar'; // السايدبار الذي صممناه سابقاً
import StatCard from './Dashboard/StatCard';
import RecentUsers from './Dashboard/RecentUsers'

const Dashboard = () => {
  const statsData = [
  { 
    title: "إجمالي المستخدمين", 
    value: "1,250", 
    change: "Live Now", 
    icon: <Users size={24} />, 
    color: {
      text: "text-blue-400", 
      bg: "bg-blue-500/20", 
      glow: "bg-blue-500", 
      shadow: "bg-blue-500/20",
      dot: "bg-blue-400",
      brand: "blue-500"
    } 
  },
  { 
    title: "إجمالي المستخدمين", 
    value: "1,250", 
    change: "Live Now", 
    icon: <Users size={24} />, 
    color: {
      text: "text-blue-400", 
      bg: "bg-blue-500/20", 
      glow: "bg-blue-500", 
      shadow: "bg-blue-500/20",
      dot: "bg-blue-400",
      brand: "blue-500"
    } 
  },
  { 
    title: "المحتوى المعتمد", 
    value: "482", 
    change: "Updated", 
    icon: <FileText size={24} />, 
    color: {
      text: "text-emerald-400", 
      bg: "bg-emerald-500/20", 
      glow: "bg-emerald-400", 
      shadow: "bg-emerald-500/20",
      dot: "bg-emerald-400",
      brand: "emerald-500"
    } 
  },
 
  { 
    title: "معدل النشاط", 
    value: "78%", 
    change: "Optimal", 
    icon: <Activity size={24} />, 
    color: {
      text: "text-rose-400", 
      bg: "bg-rose-500/20", 
      glow: "bg-rose-400", 
      shadow: "bg-rose-500/20",
      dot: "bg-rose-400",
      brand: "rose-500"
    } 
  }
];
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-gray-200 font-sans flex" dir="rtl">
      {/* 1. السايدبار الثابت */}
      <Sidebar />

      {/* 2. المحتوى الرئيسي */}
      <main className="flex-1 pr-[110px] pl-10 py-10 overflow-x-hidden">
        
        {/* شريط البحث والتنبيهات (Topbar) */}
        <header className="flex justify-between items-center mb-12 bg-[#161616]/50 p-4 rounded-3xl border border-white/5 backdrop-blur-xl">
          <div className="relative w-96">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <input 
              type="text" 
              placeholder="ابحث عن إحصائيات، مستخدمين، أو تقارير..." 
              className="w-full bg-black/20 border border-white/5 rounded-2xl py-3 pr-12 text-sm focus:outline-none focus:border-emerald-500/50 transition-all"
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="p-3 bg-white/5 rounded-xl text-gray-400 hover:text-white transition-all relative">
              <Bell size={20} />
              <span className="absolute top-3 left-3 w-2 h-2 bg-red-500 rounded-full border-2 border-[#161616]" />
            </button>
            <div className="h-10 w-px bg-white/5 mx-2" />
            <div className="flex items-center gap-3">
              <p className="text-xs font-black text-white">لوحة الإدارة العليا</p>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-500 border border-emerald-500/30">
                <BarChart3 size={20} />
              </div>
            </div>
          </div>
        </header>

        {/* رسالة الترحيب (Banner) */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-10 relative h-64 rounded-[3rem] overflow-hidden border border-emerald-500/20 shadow-[0_0_50px_rgba(16,185,129,0.05)]"
        >
          <div className="absolute inset-0 bg-gradient-to-l from-emerald-500/20 via-transparent to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2000" 
            className="absolute inset-0 w-full h-full object-cover opacity-40"
            alt="Dashboard Banner"
          />
          <div className="relative z-20 h-full flex flex-col justify-center px-12">
            <h1 className="text-5xl font-black text-white mb-4">أهلاً بك يا قائد 👋</h1>
            <p className="text-emerald-400/80 font-bold max-w-md leading-relaxed">
              إليك نظرة شاملة على ما حدث في "النخبة" خلال الـ 24 ساعة الماضية. الأمور تسير بشكل ممتاز!
            </p>
          </div>
        </motion.div>

        {/* شبكة الإحصائيات (Stats Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        
  
         {statsData.map((item)=>{
         return  <StatCard 
            title={item.title} value={item.value} change= {item.change}
            icon={item.icon} color={{text:item.color.text, bg:item.color.bg ,glow: item.color.glow, shadow: item.color.shadow,dot: item.color.dot,brand:item.color.brand}} delay={0.3}
          />
         })
         
}
        
        </div>

        {/* قسم البيانات المختلط (Charts & Tables) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* مساحة الرسم البياني الفخمة */}
          <div className="lg:col-span-2 bg-[#161616] p-10 rounded-[2.5rem] border border-white/5 relative shadow-2xl overflow-hidden">
             <div className="flex justify-between items-center mb-10">
               <h3 className="text-white font-black text-xl">منحنى نمو المنصة</h3>
               <select className="bg-black/40 border border-white/10 rounded-xl px-4 py-2 text-xs font-bold outline-none">
                 <option>آخر 30 يوم</option>
                 <option>آخر 7 أيام</option>
               </select>
             </div>
             {/* مساحة وهمية للرسم البياني للتوضيح */}
             <div className="h-[300px] w-full border-b border-l border-white/5 flex items-end justify-around px-4">
                {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                  <motion.div 
                    initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ delay: i*0.1 }}
                    key={i} className="w-12 bg-emerald-500/20 border-t-2 border-emerald-500 rounded-t-lg shadow-[0_0_20px_rgba(16,185,129,0.2)]" 
                  />
                ))}
             </div>
          </div>

          {/* قائمة المستخدمين الجدد */}
          <RecentUsers />
        </div>

      </main>
    </div>
  );
};

export default Dashboard;