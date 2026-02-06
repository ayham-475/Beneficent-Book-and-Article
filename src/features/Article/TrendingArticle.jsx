import React from 'react';
import { motion } from 'framer-motion';
import { Flame, User, Clock, ChevronLeft } from 'lucide-react'; 
import { Link } from 'react-router-dom';

const TrendingArticles = () => {
  const trending = [
    { 
      id: 1, 
      title: "ثورة الذكاء الاصطناعي: هل اقتربت نهاية عصر الموظف التقليدي؟", 
      author: "نوفل اليمني", 
      time: "8 د.", 
      category: "تكنولوجيا", 
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop" 
    },
    { 
      id: 2, 
      title: "سحر الكتابة: لماذا لا يزال الورق والمداد ينتصران على الشاشات؟", 
      author: "علياء سعيد", 
      time: "5 د.", 
      category: "فن الأدب", 
      img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1000&auto=format&fit=crop" 
    },
    { 
      id: 3, 
      title: "أسرار الفلاسفة: كيف واجه حكماء اليونان أزمات الوجود؟", 
      author: "أنس الحكيم", 
      time: "10 د.", 
      category: "فلسفة", 
      img: "https://images.unsplash.com/photo-1543505298-b8be9b52a21a?q=80&w=1000&auto=format&fit=crop" 
    },
    { 
      id: 4, 
      title: "إمبراطوريات المستقبل: كيف تبني مشروعك الملياري من غرفتك؟", 
      author: "فاطمة الزهراء", 
      time: "7 د.", 
      category: "بزنس", 
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop" 
    },
    { 
      id: 4, 
      title: "إمبراطوريات المستقبل: كيف تبني مشروعك الملياري من غرفتك؟", 
      author: "فاطمة الزهراء", 
      time: "7 د.", 
      category: "بزنس", 
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop" 
    },
    { 
      id: 4, 
      title: "إمبراطوريات المستقبل: كيف تبني مشروعك الملياري من غرفتك؟", 
      author: "فاطمة الزهراء", 
      time: "7 د.", 
      category: "بزنس", 
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop" 
    },
  ];

  return (
    <section className="py-[10vw] md:py-[6vw] px-[4vw] bg-[#020617]" dir="rtl">
      {/* رأس القسم */}
      <div className="flex justify-between items-end mb-[6vw] md:mb-[3vw]">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-amber-500 animate-pulse">
            <Flame size={"4vw"} className="md:w-[2vw] md:h-[2vw] fill-amber-500" />
            <span className="text-[3.2vw] md:text-[1.2vw] font-black uppercase tracking-tighter">تريند اليوم</span>
          </div>
          <h2 className="text-[6.5vw] md:text-[3.5vw] font-black text-white leading-tight">
            مقالات تشكل <span className="text-blue-500">مستقبلك</span>
          </h2>
        </div>
        <button className="flex items-center gap-1 text-[3.5vw] md:text-[1.2vw] text-gray-400 hover:text-blue-500 transition-all group">
          مشاهدة الكل <ChevronLeft size={"4vw"} className="md:w-[1.4vw] group-hover:-translate-x-1 transition-transform" />
        </button>
      </div>

      {/* حاوية السلايدر بدون سكرول */}

      <div className="relative overflow-visible">
        <div 
          className="flex flex-row gap-[3vw] md:gap-[2.5vw] overflow-x-auto no-scrollbar scroll-smooth pb-[5vw] md:pb-[2vw] md:justify-center"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none', 
            WebkitOverflowScrolling: 'touch' 
          }}
        >
          {/* كود إخفاء السكرول بار لمتصفحات Chrome/Safari */}
          <style dangerouslySetInnerHTML={{__html: `
            div::-webkit-scrollbar { display: none; }
          `}} />

          {trending.map((article) => (
            <Link to={`/ArticleDetail/${article.id}`}>
            <motion.div 
              key={article.id} 
              whileTap={{ scale: 0.96 }}
              /* العرض md:w-[21vw] يضمن ظهور 4 مقالات بالضبط في الكمبيوتر */
              className="flex-none w-[29.3vw] md:w-[21vw] bg-[#1e293b]/30 border border-white/5 rounded-[4vw] md:rounded-[2.5vw] p-[1.5vw] cursor-pointer group/card transition-all duration-500 hover:bg-[#1e293b]/60 hover:border-blue-500/30 shadow-xl"
            >
              {/* صورة بدقة عالية وتأثير درامي */}
              <div className="relative aspect-[4/5] md:aspect-[16/10] rounded-[3vw] md:rounded-[1.5vw] overflow-hidden mb-[2.5vw] md:mb-[1.5vw] bg-[#0f172a]">
                <img 
                  src={article.img} 
                  loading="lazy"
                  alt={article.title}
                  className="w-full h-full object-cover opacity-80 group-hover/card:opacity-100 group-hover/card:scale-110 transition-all duration-1000 ease-in-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-[1.5vw] right-[1.5vw] bg-blue-600/90 text-white text-[2vw] md:text-[0.8vw] font-bold px-[1.5vw] py-[0.5vw] rounded-lg backdrop-blur-md">
                  {article.category}
                </div>
              </div>

              {/* نصوص واضحة وعريضة */}
              <div className="space-y-[1.5vw] md:space-y-[0.8vw]">
                <h3 className="text-white font-black text-[3.2vw] md:text-[1.5vw] leading-[1.3] h-[8.5vw] md:h-auto overflow-hidden line-clamp-2 group-hover/card:text-blue-400 transition-colors">
                  {article.title}
                </h3>
                
                <div className="flex flex-col gap-[1vw] md:flex-row md:items-center md:justify-between text-gray-500 font-bold">
                  <div className="flex items-center gap-[0.8vw] text-[2.6vw] md:text-[1vw]">
                    <span className="text-blue-400">@</span>
                    <span className="truncate max-w-[15vw] text-gray-400">{article.author}</span>
                  </div>
                  <div className="flex items-center gap-[0.5vw] text-[2.4vw] md:text-[0.9vw] text-gray-600">
                    <Clock size={"2.5vw"} className="md:w-[1vw]" /> <span>{article.time}</span>
                  </div>
                </div>
              </div>
            </motion.div>
            </Link>
          ))}
        </div>

        {/* تظليل احترافي لإخفاء الأطراف */}
        <div className="absolute top-0 right-0 h-full w-[10vw] bg-gradient-to-l from-[#020617] to-transparent pointer-events-none z-10 hidden md:block"></div>
        <div className="absolute top-0 left-0 h-full w-[10vw] bg-gradient-to-r from-[#020617] to-transparent pointer-events-none z-10 hidden md:block"></div>
      </div>
    </section>
  );
};

export default TrendingArticles;