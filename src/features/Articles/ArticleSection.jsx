import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpLeft, Clock, Bookmark, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const ArticleSection = ({category, title, articles }) => {
  return (
  <>
    <section className="py-10 bg-[#fcfcfc] border-b border-gray-300" dir="rtl">
      <div className="container mx-auto px-6">
        
        {/* رأس القسم: تصميم بسيط ونيق */}
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="text-emerald-500 font-black text-xs uppercase tracking-[0.2em] mb-2 block">
              {category}
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">{title}</h2>
          </div>
          <button className="group flex items-center gap-2 text-gray-400 font-bold text-sm hover:text-gray-900 transition-colors">
            استكشاف المزيد <Plus size={16} className="group-hover:rotate-90 transition-transform" />
          </button>
        </div>

        {/* شبكة البطاقات: 4 أعمدة، بطاقات صغيرة وعصرية */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {articles.map((article) => (
             <Link to={`/ArticleDetail/${article.id}`}>
              <motion.div
              key={article.id}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-[2rem] border border-gray-100 p-3 hover:shadow-2xl hover:shadow-emerald-500/5 transition-all duration-500"
            >
              {/* صورة المقال */}
              <div className="relative h-44 w-full rounded-[1.5rem] overflow-hidden mb-5">
                <img 
                  src={article.img} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2" 
                  alt={article.title} 
                />
                <div className="absolute top-3 left-3">
                  <button className="w-8 h-8 bg-white/80 backdrop-blur rounded-full flex items-center justify-center text-gray-800 opacity-0 group-hover:opacity-100 transition-all">
                    <Bookmark size={14} />
                  </button>
                </div>
              </div>

              {/* محتوى المقال */}
              <div className="px-2 pb-2">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-md">
                    <Clock size={12} />
                    <span>{article.time}</span>
                  </div>
                  <span className="text-[10px] font-bold text-gray-300 uppercase tracking-wider">{article.author}</span>
                </div>

                <h3 className="text-lg font-black text-gray-800 leading-[1.4] mb-4 h-12 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                  {article.title}
                </h3>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                  <p className="text-[11px] text-gray-400 font-medium line-clamp-1 flex-1 ml-4">
                    {article.desc}
                  </p>
                  <div className="w-9 h-9 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 group-hover:bg-emerald-500 group-hover:text-white transition-all transform group-hover:rotate-45">
                    <ArrowUpLeft size={18} />
                  </div>
                </div>
              </div>
            </motion.div>
                  </Link>

          ))}
        </div>
      </div>
    </section>

    </>
  );
};

export default ArticleSection;