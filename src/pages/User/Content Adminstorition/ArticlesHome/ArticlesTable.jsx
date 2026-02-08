import React from 'react';
import { 
  Edit3, Trash2, Eye, Calendar, 
  ChevronLeft, ExternalLink, MessageSquare, Tag 
} from 'lucide-react';
import { motion } from 'framer-motion';

const SmartArticlesManager = () => {
  const articles = [
    { id: 1, title: "مستقبل الذكاء الاصطناعي في 2026", category: "تقنية", status: "منشور", views: "1.5k", comments: "24", date: "2026/02/01" },
    { id: 2, title: "كيف تبني براند شخصي كمبرمج؟", category: "مهني", status: "مسودة", views: "0", comments: "0", date: "2026/02/05" },
    { id: 3, title: "أسرار تجربة المستخدم الحديثة", category: "تصميم", status: "قيد المراجعة", views: "850", comments: "12", date: "2026/01/28" },
    { id: 3, title: "أسرار تجربة المستخدم الحديثة", category: "تصميم", status: "قيد المراجعة", views: "850", comments: "12", date: "2026/01/28" },
    { id: 3, title: "أسرار تجربة المستخدم الحديثة", category: "تصميم", status: "قيد المراجعة", views: "850", comments: "12", date: "2026/01/28" },
    { id: 3, title: "أسرار تجربة المستخدم الحديثة", category: "تصميم", status: "قيد المراجعة", views: "850", comments: "12", date: "2026/01/28" },
  ];

  return (
    <div className="p-2 md:p-8" dir="rtl">
      {/* الحاوية الكبيرة بتأثير Glassmorphism */}
      <div className="bg-white/40 backdrop-blur-2xl rounded-[2rem] md:rounded-[3rem] border border-white/50 shadow-2xl overflow-hidden">
        
        {/* Header - متجاوب */}
        <div className="p-6 md:p-10 border-b border-white/40 flex justify-between items-center bg-white/20">
          <div>
            <h2 className="text-xl md:text-3xl font-black text-gray-900 tracking-tighter">إدارة المقالات</h2>
            <p className="text-[10px] md:text-sm font-bold text-gray-500 mt-1">تحكم في محتواك الإبداعي من هنا</p>
          </div>
          <button className="bg-[#319795] text-white px-5 py-2 md:px-8 md:py-4 rounded-2xl md:rounded-3xl font-black text-xs md:text-base shadow-lg shadow-[#319795]/30 hover:scale-105 transition-transform">
            إضافة +
          </button>
        </div>

        {/* محتوى المقالات مع سكرول مخفي */}
        <div className="max-h-[70vh] overflow-y-auto no-scrollbar">
          
          {/* --- أولاً: تصميم الكمبيوتر (Desktop Table) --- */}
          <div className="hidden md:block">
            <table className="w-full text-right border-collapse">
              <thead className="sticky top-0 bg-white/50 backdrop-blur-xl z-10">
                <tr className="text-gray-500 text-xs uppercase tracking-widest">
                  <th className="px-10 py-6 font-black">المقال</th>
                  <th className="px-10 py-6 font-black">التصنيف</th>
                  <th className="px-10 py-6 font-black">الإحصائيات</th>
                  <th className="px-10 py-6 font-black">الحالة</th>
                  <th className="px-10 py-6 font-black">الإجراءات</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/30">
                {articles.map((art) => (
                  <tr key={art.id} className="hover:bg-white/40 transition-all group">
                    <td className="px-10 py-6">
                      <span className="font-bold text-gray-800 text-lg group-hover:text-[#319795] transition-colors">{art.title}</span>
                      <div className="text-xs text-gray-400 mt-1 flex items-center gap-1"><Calendar size={12}/> {art.date}</div>
                    </td>
                    <td className="px-10 py-6">
                      <span className="bg-white/60 px-4 py-1.5 rounded-xl text-xs font-black text-gray-600 border border-white">{art.category}</span>
                    </td>
                    <td className="px-10 py-6">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1.5 text-sm font-bold text-gray-600"><Eye size={16} className="text-blue-500"/> {art.views}</span>
                        <span className="flex items-center gap-1.5 text-sm font-bold text-gray-600"><MessageSquare size={16} className="text-purple-500"/> {art.comments}</span>
                      </div>
                    </td>
                    <td className="px-10 py-6">
                       <StatusBadge status={art.status} />
                    </td>
                    <td className="px-10 py-6 text-left text-gray-400 hover:text-gray-900 transition-colors">
                      <div className="flex gap-2 justify-end">
                        <button className="p-2 bg-white rounded-xl shadow-sm hover:text-[#319795]"><Edit3 size={18}/></button>
                        <button className="p-2 bg-white rounded-xl shadow-sm hover:text-red-500"><Trash2 size={18}/></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* --- ثانياً: تصميم الهاتف (Mobile Cards) --- */}
          <div className="md:hidden p-4 flex flex-col gap-4">
            {articles.map((art) => (
              <div key={art.id} className="bg-white/60 p-5 rounded-[2rem] border border-white/80 shadow-sm relative">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[9px] font-black bg-[#319795]/10 text-[#319795] px-3 py-1 rounded-full border border-[#319795]/10">
                    {art.category}
                  </span>
                  <div className="flex gap-3 text-gray-400">
                    <Edit3 size={16} />
                    <Trash2 size={16} className="text-red-400" />
                  </div>
                </div>

                <h3 className="text-sm font-black text-gray-800 leading-snug mb-4">
                  {art.title}
                </h3>

                <div className="flex justify-between items-center pt-3 border-t border-white/40">
                  <div className="flex gap-3">
                    <span className="flex items-center gap-1 text-[10px] font-bold text-gray-500"><Eye size={12}/> {art.views}</span>
                    <span className="flex items-center gap-1 text-[10px] font-bold text-gray-500"><Calendar size={12}/> {art.date}</span>
                  </div>
                  <StatusBadge status={art.status} isMobile />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

// مكون الحالة (Status Badge) المتجاوب
const StatusBadge = ({ status, isMobile }) => {
  const styles = {
    "منشور": "bg-emerald-100 text-emerald-600 border-emerald-200",
    "مسودة": "bg-gray-100 text-gray-600 border-gray-200",
    "قيد المراجعة": "bg-amber-100 text-amber-600 border-amber-200",
  };
  return (
    <span className={`rounded-full font-black border ${isMobile ? 'px-2 py-0.5 text-[8px]' : 'px-4 py-1.5 text-[11px]'} ${styles[status]}`}>
      {status}
    </span>
  );
};

export default SmartArticlesManager;