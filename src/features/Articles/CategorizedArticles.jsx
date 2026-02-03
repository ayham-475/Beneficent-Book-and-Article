import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft, Bookmark, ArrowUpLeft } from 'lucide-react';
const CompactArticleSlider = () => {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  const articles = [
    { id: 1, title: "مستقبل الذكاء الاصطناعي في 2026", cat: "تقنية", img: "https://picsum.photos/400/500?random=11" },
    { id: 2, title: "كيف تنظم وقتك بذكاء؟", cat: "تطوير", img: "https://picsum.photos/400/500?random=22" },
    { id: 3, title: "أسرار الفلسفة الرواقية", cat: "فكر", img: "https://picsum.photos/400/500?random=33" },
    { id: 4, title: "مدن المستقبل المستدامة", cat: "ابتكار", img: "https://picsum.photos/400/500?random=44" },
    { id: 5, title: "رحلة في عالم الميتافيرس", cat: "تقنية", img: "https://picsum.photos/400/500?random=55" },
    { id: 6, title: "سيكولوجية الألوان في التصميم", cat: "فنون", img: "https://picsum.photos/400/500?random=66" },
    { id: 7, title: "بداية عصر الكوانتم", cat: "تقنية", img: "https://picsum.photos/400/500?random=77" },
  ];

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const scroll = (direction) => {
    const { current } = carousel;
    const scrollAmount = 300; // مقدار الإزاحة عند الضغط
    if (direction === 'right') {
      current.scrollLeft += scrollAmount;
    } else {
      current.scrollLeft -= scrollAmount;
    }
  };

  return (
    <section className="relative w-full py-16 bg-[#fcfcfc] overflow-hidden" dir="rtl">
      <div className="container mx-auto px-6 relative">
        
        {/* العناوين */}
        <div className="mb-10 text-right">
          <h2 className="text-4xl font-black text-gray-900 mb-2">مقالات مختارة</h2>
          <p className="text-gray-400 font-medium">اكتشف أحدث الأفكار والابتكارات</p>
        </div>

        {/* أزرار التنقل (يمين ويسار البطاقات) */}
        <div className="absolute top-1/2 -translate-y-1/2 left-2 right-2 flex justify-between z-20 pointer-events-none">
          <button 
            onClick={() => scroll('left')}
            className="w-14 h-14 bg-white/90 backdrop-blur-xl border border-gray-100 rounded-full flex items-center justify-center shadow-xl text-gray-800 hover:bg-emerald-500 hover:text-white transition-all pointer-events-auto active:scale-90"
          >
            <ChevronRight size={28} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-14 h-14 bg-white/90 backdrop-blur-xl border border-gray-100 rounded-full flex items-center justify-center shadow-xl text-gray-800 hover:bg-emerald-500 hover:text-white transition-all pointer-events-auto active:scale-90"
          >
            <ChevronLeft size={28} />
          </button>
        </div>

        {/* منطقة السحب والعرض */}
        <motion.div 
          ref={carousel}
          className="cursor-grab overflow-hidden active:cursor-grabbing scroll-smooth px-4"
        >
          <motion.div 
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex gap-6"
          >
            {articles.map((item) => (
              <motion.div 
                key={item.id}
                className="min-w-[260px] md:min-w-[280px] bg-white rounded-[2.5rem] border border-gray-50 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group relative"
              >
                {/* الجزء العلوي: الصورة */}
                <div className="relative h-60 rounded-[2.2rem] overflow-hidden m-2">
                  <img 
                    src={item.img} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    alt={item.title} 
                  />
                  <div className="absolute top-4 left-4">
                    <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-emerald-500 transition-colors">
                      <Bookmark size={18} />
                    </button>
                  </div>
                </div>

                {/* الجزء السفلي: النصوص */}
                <div className="p-6">
                  <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-2 block">
                    {item.cat}
                  </span>
                  <h3 className="text-xl font-black text-gray-800 leading-tight mb-6 h-12 line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <div className="flex items-center justify-between border-t border-gray-50 pt-4">
                    <span className="text-gray-400 text-xs font-bold">5 دقائق قراءة</span>
                    <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                      <ArrowUpLeft size={20} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompactArticleSlider;