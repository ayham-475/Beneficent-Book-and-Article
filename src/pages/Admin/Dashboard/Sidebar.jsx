import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, FileText, Users, DollarSign, 
  Settings, BarChart3, LayoutDashboard 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [ActiveTab,setActiveTab]=useState("dashboard");
  // الأزرار الديناميكية
const menuItems = [
  { id: 'dashboard', icon: <LayoutDashboard size={22} />, label: 'لوحة التحكم', path: '/dashboard' },
  { id: 'content', icon: <FileText size={22} />, label: 'مراجعة المحتوى', path: '/content' }, // مثال لمسار مختلف
  { id: 'users', icon: <Users size={22} />, label: 'إدارة المستخدمين', path: '/users' },
  { id: 'finance', icon: <DollarSign size={22} />, label: 'الطلبات المالية', path: '/finance' },
  { id: 'settings', icon: <Settings size={22} />, label: 'إعدادات المنصة', path: '/settings' },
];

  return (
    <motion.aside
      initial={{ width: '90px' }}
      whileHover={{ width: '280px' }}
      transition={{ type: 'spring', stiffness: 150, damping: 22 }}
      className="fixed right-0 top-16 h-160 bg-[#0d0d0d] border-l border-white/5 flex flex-col z-[100] group shadow-[25px_0_50px_rgba(0,0,0,0.8)]"
    >
      {/* منطقة الشعار العليا */}
      <div className="h-28 flex items-center px-6 overflow-hidden">
        <div className="min-w-[54px] h-[54px] rounded-2xl flex items-center justify-center border border-emerald-500/30 bg-emerald-500/5 shadow-[0_0_20px_rgba(16,185,129,0.1)] relative">
            <BarChart3 className="text-emerald-500" size={26} />
            {/* توهج خلف الشعار */}
            <div className="absolute inset-0 bg-emerald-500/10 blur-xl rounded-full" />
        </div>
        <motion.div className="mr-4 flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-500">
           <span className="text-white font-black text-lg leading-none tracking-tight">إدارة</span>
           <span className="text-emerald-500 text-[10px] font-bold tracking-[0.3em]">THE ELITE</span>
        </motion.div>
      </div>

      {/* قائمة التنقل المضيئة */}
      <nav className="flex-1 px-4 space-y-5 mt-6">
        {menuItems.map((item) => {
          const isActive = ActiveTab == item.id;
          return (
          <>
          <Link to={item.path}>
              <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full h-14 flex items-center rounded-2xl transition-all duration-500 relative group/btn ${
                isActive 
                ? 'border border-emerald-500/40 bg-emerald-500/5 shadow-[0_0_25px_rgba(16,185,129,0.1)]' 
                : 'border border-transparent text-gray-500 hover:bg-white/5 hover:text-gray-300'
              }`}
            >
              {/* التوهج الداخلي المشع (Inner Glow) - يظهر عند النشاط */}
              <AnimatePresence>
                {isActive && (
                  <motion.div 
                    layoutId="activeGlow"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 rounded-2xl shadow-[inset_0_0_15px_rgba(16,185,129,0.25)] pointer-events-none"
                  />
                )}
              </AnimatePresence>

              {/* الأيقونة المشعة (Neon Icon) */}
              <div className={`min-w-[64px] flex justify-center items-center z-10 transition-all duration-300 ${
                isActive ? 'text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.7)]' : 'group-hover/btn:text-gray-200'
              }`}>
                {item.icon}
              </div>

              {/* نص الزر */}
              <motion.span 
                className={`font-black text-sm whitespace-nowrap z-10 pr-2 opacity-0 group-hover:opacity-100 transition-all duration-500 ${
                  isActive ? 'text-emerald-400' : 'text-inherit'
                }`}
              >
                {item.label}
              </motion.span>

              {/* مؤشر "نبض" نيون صغير بجانب الزر النشط */}
              {isActive && (
                <motion.div 
                   layoutId="pulse-indicator"
                   className="absolute left-3 w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,1)]"
                />
              )}
            </button>
            </Link>
            </>
          );
          
        })}
      </nav>

      {/* منطقة البروفايل السفلية */}
      <div className="p-6 mb-4 overflow-hidden border-t border-white/5 bg-gradient-to-t from-black/20 to-transparent">
        <div className="flex items-center gap-4">
          <div className="relative min-w-[48px]">
            <img 
              src="https://i.pravatar.cc/150?u=admin_pro" 
              className="w-[48px] h-[48px] rounded-2xl object-cover border border-white/10 p-0.5" 
              alt="Admin" 
            />
            {/* نقطة الأونلاين المشعة */}
            <div className="absolute -bottom-0.5 -left-0.5 w-3.5 h-3.5 bg-emerald-500 border-[3px] border-[#0d0d0d] rounded-full shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
          </div>
          <div className="flex flex-col opacity-0 group-hover:opacity-100 transition-all duration-500">
            <span className="text-sm font-black text-white whitespace-nowrap">م : الايهم اليعري</span>
            <span className="text-[9px] text-emerald-500/80 font-bold uppercase tracking-widest">Main Developer</span>
          </div>
        </div>
      </div>
    </motion.aside>
  );
};

export default Sidebar;