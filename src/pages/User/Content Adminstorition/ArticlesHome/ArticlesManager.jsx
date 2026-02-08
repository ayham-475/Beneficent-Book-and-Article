import React, { useState } from 'react';
import { 
  Plus, Search, Filter, MoreHorizontal, 
  Eye, MessageSquare, Share2, Edit2, 
  Trash2, ChevronRight, FileText, Globe, Clock
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ArticlesTable from './ArticlesTable'
import { Link } from 'react-router-dom';

const ArticlesManager = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // بيانات تجريبية تحاكي الواقع
  const myArticles = [
    { id: 1, title: "مستقبل الذكاء الاصطناعي في 2026", status: "منشور", views: "1.2k", comments: 45, date: "2026-02-01", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=200" },
    { id: 2, title: "كيف تبني براند شخصي كمبرمج؟", status: "مسودة", views: "0", comments: 0, date: "2026-02-05", image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=200" },
    { id: 3, title: "أسرار تجربة المستخدم في التطبيقات", status: "مراجعة", views: "850", comments: 12, date: "2026-01-28", image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=200" },
  ];

  const cardStyle = {
    background: "rgba(255, 255, 255, 0.4)",
    backdropFilter: "blur(15px)",
    border: "1px solid rgba(255, 255, 255, 0.5)",
    borderRadius: "2.5rem",
    boxShadow: "0 10px 40px rgba(0,0,0,0.03)"
  };

  return (
    <div className="min-h-screen bg-[#F0F2F5] p-6 md:p-12" dir="rtl">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <header className="flex flex-col md:flex-row justify-between items-end md:items-center gap-6 mb-12">
          <div>
            <h1 className="text-5xl font-black text-gray-900 tracking-tighter mb-3">مقالاتي</h1>
            <p className="text-gray-500 font-bold text-lg">لديك <span className="text-[#319795]">{myArticles.length}</span> مقالات منشورة ومسودات.</p>
          </div>
          <Link to="/ArticleEditor" >
          <button className="flex items-center gap-2 bg-[#319795] text-white px-8 py-4 rounded-3xl font-black shadow-lg shadow-[#319795]/30 hover:scale-105 transition-transform">
            <Plus size={24} /> كتابة مقال جديد
          </button>
          </Link>
        </header>

        {/* Search & Filter Bar */}
        <div style={cardStyle} className="p-4 mb-10 flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1 w-full">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text"
              placeholder="ابحث عن عنوان مقال..."
              className="w-full bg-white/50 border-none rounded-2xl py-4 pr-12 pl-4 focus:ring-2 ring-[#319795]/20 outline-none font-bold"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <button className="flex-1 md:flex-none p-4 bg-white/60 rounded-2xl text-gray-600 hover:bg-white transition-colors"><Filter size={20} /></button>
            <select className="flex-1 md:flex-none p-4 bg-white/60 rounded-2xl text-gray-700 font-bold border-none outline-none">
              <option>الأحدث أولاً</option>
              <option>الأكثر مشاهدة</option>
            </select>
          </div>
        </div>

        {/* Articles List / Grid */}
       <ArticlesTable />
      </div>
    </div>
  );
};

// أيقونة التاريخ لعدم نسيانها
const CalendarDays = ({ size }) => <Clock size={size} />;

export default ArticlesManager;