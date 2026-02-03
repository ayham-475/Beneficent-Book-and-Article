import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart2, BookOpen, DollarSign, Settings, 
  ChevronLeft, Layout, PieChart, LogOut 
} from 'lucide-react';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('الرئيسية');
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const menuItems = [
    { id: 'main', title: 'الرئيسية', icon: <Layout size={22} />, path: '/dashboard' },
    { 
      id: 'content', 
      title: 'إدارة المحتوى', 
      icon: <BookOpen size={22} />, 
      subItems: [
        { title: 'كتبي الرقمية', path: '/books' },
        { title: 'مقالاتي', path: '/articles' },
        { title: 'إضافة جديد', path: '/add' }
      ]
    },
    { 
      id: 'finance', 
      title: 'المالية', 
      icon: <DollarSign size={22} />, 
      subItems: [
        { title: 'الأرباح', path: '/earnings' },
        { title: 'طلبات السحب', path: '/withdraw' }
      ]
    },
    { id: 'stats', title: 'التحليلات', icon: <PieChart size={22} />, path: '/analytics' },
  ];

  return (
    <motion.aside
      // تطبيق حركة الـ Hover التي طلبتها
      initial={{ width: '90px' }}
      whileHover={{ width: '290px' }}
      transition={{ type: 'spring', stiffness: 150, damping: 22 }}
      className="fixed right-0 top-6 h-[calc(100vh-3rem)] bg-white/90 backdrop-blur-2xl border-l border-white/50 shadow-[20px_0_50px_rgba(0,0,0,0.05)] rounded-l-[2.5rem] flex flex-col z-[100] group overflow-hidden"
    >
      
      {/* ستايل السكرول الذكي (يظهر فقط عند التوسع والحوم) */}
      <style dangerouslySetInnerHTML={{__html: `
        .sidebar-scroll::-webkit-scrollbar { width: 4px; }
        .sidebar-scroll::-webkit-scrollbar-thumb { background: transparent; border-radius: 10px; }
        aside:hover .sidebar-scroll::-webkit-scrollbar-thumb { background: #319795; }
      `}} />

      {/* الشعار - Logo القسم */}
      <div className="h-24 flex items-center px-6 shrink-0 overflow-hidden">
        <div className="min-w-[50px] h-[50px] bg-gradient-to-br from-[#319795] to-[#4FD1C5] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-[#319795]/20 shrink-0">
          <BarChart2 size={24} />
        </div>
        <motion.div className="mr-4 flex flex-col opacity-0 group-hover:opacity-100 transition-all duration-500">
          <span className="font-black text-[#1A202C] text-lg tracking-tighter leading-none whitespace-nowrap">مرصد الإبداع</span>
          <span className="text-[10px] text-[#319795] font-bold uppercase tracking-widest mt-1 whitespace-nowrap">نسخة المؤلفين</span>
        </motion.div>
      </div>

      {/* روابط القائمة */}
      <nav className="flex-1 px-4 space-y-2 overflow-y-auto sidebar-scroll no-scrollbar overflow-x-hidden">
        {menuItems.map((item) => {
          const isActive = activeItem === item.title;
          return (
            <div key={item.id} className="relative">
              <div 
                onClick={() => {
                  setActiveItem(item.title);
                  if(item.subItems) setOpenSubMenu(openSubMenu === item.id ? null : item.id);
                }}
                className={`flex items-center h-14 rounded-2xl cursor-pointer transition-all duration-300 relative overflow-hidden ${
                  isActive 
                  ? 'bg-[#E6FFFA] text-[#319795] border border-[#B2F5EA]/30 shadow-sm' 
                  : 'text-gray-400 hover:bg-gray-50'
                }`}
              >
                {/* الأيقونة - ثابتة في المنتصف عند تصغير السايدبار */}
                <div className="min-w-[60px] flex justify-center items-center">
                  {item.icon}
                </div>

                {/* النص - يظهر فقط عند الـ Hover */}
                <motion.span className="font-black text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {item.title}
                </motion.span>

                {item.subItems && (
                  <ChevronLeft 
                    size={16} 
                    className={`mr-auto ml-4 transition-transform duration-300 opacity-0 group-hover:opacity-100 ${openSubMenu === item.id ? '-rotate-90' : ''}`} 
                  />
                )}
              </div>

              {/* القائمة المنسدلة - تظهر فقط عند الـ Hover والتوسيع */}
              <AnimatePresence>
                {item.subItems && openSubMenu === item.id && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="mr-12 mt-1 space-y-1 overflow-hidden"
                  >
                    {item.subItems.map((sub, idx) => (
                      <a 
                        key={idx} 
                        href={sub.path}
                        className="block py-2 text-xs font-bold text-gray-400 hover:text-[#319795] whitespace-nowrap transition-colors"
                      >
                        {sub.title}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </nav>

      {/* منطقة البروفايل السفلية */}
      <div className="p-4 border-t border-gray-50 shrink-0">
        <div className="flex items-center bg-[#F7FAFC] p-3 rounded-[2rem] border border-gray-100 overflow-hidden">
          <div className="min-w-[42px] h-[42px] bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-50 font-black text-[#319795] shrink-0">
            A
          </div>
          <div className="mr-3 flex flex-col opacity-0 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
            <span className="text-xs font-black text-gray-800 leading-none whitespace-nowrap">أحمد خالد</span>
            <span className="text-[9px] text-[#319795] font-bold mt-1 uppercase whitespace-nowrap">مؤلف مميز</span>
          </div>
          <button className="mr-auto ml-1 opacity-0 group-hover:opacity-100 text-gray-300 hover:text-red-500 transition-all">
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </motion.aside>
  );
};

export default Sidebar;