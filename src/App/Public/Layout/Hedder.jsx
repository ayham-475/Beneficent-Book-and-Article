import React, { useState, useEffect } from 'react';
import { BookOpen, Search, User, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // مراقبة السكرول لجعل الهيدر يتقلص قليلاً عند النزول (حركة احترافية)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const Links = [
    { id: 1, link: '/', name: 'الصفحة الرئيسية' },
    { id: 2, link: '/books', name: 'الكتب' },
    { id: 3, link: '/articles', name: 'المقالات' },
  ];

  return (
    // جعل الهيدر ثابت (fixed) في أعلى الصفحة
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
      isScrolled ? 'py-2' : 'py-4'
    }`}>
      <nav 
        dir="rtl" 
        className={`max-w-8xl mx-auto flex items-center justify-between px-5 md:px-10 rounded-[1.5rem] md:rounded-[2rem] transition-all duration-500 ${
          isScrolled 
          ? 'h-16 bg-white/90 backdrop-blur-xl shadow-lg border border-emerald-500/10 mx-4 md:mx-10' 
          : 'h-20 bg-white/60 backdrop-blur-md border border-white/50 mx-4 md:mx-10 shadow-sm'
        }`}
      >
        
        {/* الجزء الأيمن: شعار منصة اليعري (ثابت وواضح) */}
        <div className="flex items-center gap-3 md:gap-4 group shrink-0">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative w-9 h-9 md:w-11 md:h-11 bg-[#0A0F1E] border border-white/10 rounded-xl flex items-center justify-center shadow-2xl">
              <BookOpen className="text-emerald-400" size={20} />
            </div>
          </div>
          <span className="text-emerald-500 text-lg md:text-2xl font-black tracking-tighter whitespace-nowrap">
            منصة<span className="text-[#0A0F1E]">-</span>اليعري
          </span>
        </div>

        {/* الجزء الأوسط: الروابط (تظهر في الحاسوب فقط) */}
        <div className="hidden lg:flex items-center gap-8">
          {Links.map((l) => (
            <Link 
              key={l.id} 
              to={l.link} 
              className="text-gray-700 text-sm font-bold hover:text-emerald-500 transition-all relative group"
            >
              {l.name}
              <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* الجزء الأيسر: الأزرار والمنيو */}
        <div className="flex items-center gap-2">
          <button className="p-2.5 text-gray-500 hover:text-emerald-500 transition-colors">
            <Search size={20} />
          </button>
          
          <Link to="/user" className="hidden sm:block">
            <button className="flex items-center gap-2 px-5 py-2.5 bg-[#0A0F1E] rounded-xl text-white font-bold text-xs hover:bg-emerald-600 transition-all">
              <User size={16} className="text-emerald-400" />
              <span>دخول</span>
            </button>
          </Link>

          {/* زر الجوال */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5 bg-gray-100 text-gray-700 rounded-xl hover:bg-emerald-50"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* قائمة الجوال المنسدلة (Mobile Menu) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="absolute top-24 left-4 right-4 bg-white/95 backdrop-blur-2xl border border-emerald-500/10 shadow-2xl rounded-[2rem] p-6 lg:hidden flex flex-col gap-3 z-[150]"
          >
            {Links.map((l) => (
              <Link
                key={l.id}
                to={l.link}
                onClick={() => setIsOpen(false)}
                className="w-full py-4 px-6 text-gray-700 font-bold hover:bg-emerald-50 hover:text-emerald-500 rounded-2xl transition-all text-right"
              >
                {l.name}
              </Link>
            ))}
            <div className="h-[1px] bg-gray-100 my-2" />
            <Link
              to="/user"
              onClick={() => setIsOpen(false)}
              className="w-full py-4 bg-[#0A0F1E] text-white rounded-2xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-emerald-500/10"
            >
              <User size={18} className="text-emerald-400" />
              تسجيل الدخول
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;