import React from 'react';
import { motion } from 'framer-motion';
import ArticlesData from './apiArticles.json'
import { useParams } from 'react-router-dom';

import { 
  Heart,Share2, Bookmark, 
Quote, Clock, 
} from 'lucide-react'; // تأكد من المسار الصحيح للهيدر الذي صممناه
import Navbar from'../../App/Public/Layout/Hedder'
import CommentsSection from './CommentsSection'
const CreativeArticleView = () => {
  const { ArticleId } = useParams();
  // جلب المقال المختار من البيانات

const article=  Object.values(ArticlesData).map((category) => {
    
      if (category.id == ArticleId) {
       return category;
      }
  
  });
 console.log(" article ",article)
 
  // في حال لم يتم العثور على المقال
  if (!article) return <div className="text-white text-center py-20">جاري التحميل أو المقال غير موجود...</div>;

  return (
    <>
      <Navbar />

      <div className="bg-[#f8fafc] min-h-screen font-sans pb-20" dir="rtl">
        
        {/* 1. Hero Header - ديناميكي */}
        <header className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <img 
              src={article.img} 
              className="w-full h-full object-cover"
              alt={article.title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent" />
          </motion.div>

          <div className="relative z-10 container mx-auto h-full flex flex-col justify-end pb-12 md:pb-20 px-[5vw]">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl"
            >
              <span className="bg-blue-600 text-white px-5 py-1.5 rounded-full text-sm font-black mb-6 inline-block shadow-xl shadow-blue-600/30">
                {article.category || "مقالات مختارة"}
              </span>
              <h1 className="text-[8vw] md:text-[5vw] font-black text-white leading-tight mb-8 drop-shadow-2xl">
                {article.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white/90">
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-1.5 pl-5 rounded-full border border-white/20">
                      <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center font-bold text-white">
                        {article.author}
                      </div>
                      <span className="font-bold text-[3.5vw] md:text-[1.1vw]">{article.author}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Clock size={18} className="text-blue-400" />
                    <span className="font-medium text-[3.2vw] md:text-[1vw]">{article.time} للقراءة</span>
                  </div>
              </div>
            </motion.div>
          </div>
        </header>

        {/* 2. منطقة المحتوى */}
        <main className="container mx-auto px-[5vw] -mt-12 relative z-20">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
            
            {/* الأزرار العائمة - متجاوبة */}
            <aside className="lg:w-20 flex lg:flex-col gap-4 sticky top-24 h-fit order-2 lg:order-1 justify-center md:justify-start">
              {[
                { icon: <Heart size={24} />, color: "hover:text-red-500", count: "1.2k" },
                { icon: <Bookmark size={24} />, color: "hover:text-blue-500", count: "Saved" },
                { icon: <Share2 size={24} />, color: "hover:text-cyan-500", count: "Share" },
              ].map((item, idx) => (
                <motion.button  
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center gap-1 group"
                >
                  <div className={`w-14 h-14 md:w-16 md:h-16 bg-white shadow-xl rounded-2xl flex items-center justify-center text-gray-400 border border-gray-100 transition-all ${item.color}`}>
                    {item.icon}
                  </div>
                </motion.button>
              ))} 
            </aside>

            {/* جسم المقال */}
            <section className="flex-1 bg-white p-6 md:p-16 rounded-[2.5rem] md:rounded-[4rem] shadow-2xl shadow-gray-200/50 order-1 lg:order-2">
              <div className="prose prose-lg md:prose-2xl max-w-none text-gray-800 leading-[1.8] text-right">
                
                {/* المقدمة */}
                <p className="text-xl md:text-3xl font-light text-gray-500 mb-10 leading-relaxed border-r-4 border-blue-100 pr-6">
                  {article.description || "هذا المقال يستعرض أفكاراً معمقة حول الموضوع بأسلوب فلسفي وتطبيقي فريد..."}
                </p>

                {/* اقتباس مميز */}
                <div className="relative my-12 md:my-16 py-4">
                  <Quote className="text-blue-500/10 absolute -right-6 md:-right-12 -top-6 w-20 h-20 md:w-32 md:h-32" />
                  <h3 className="text-2xl md:text-4xl font-black text-gray-900 pr-6 md:pr-10 border-r-8 border-blue-600 leading-snug">
                    "إن الكلمات هي جسر العبور من عالم الخيال إلى واقع التأثير، ومداد هو القلم الذي يبني هذا الجسر."
                  </h3>
                </div>

                {/* نص تجريبي (يمكنك استبداله بـ article.content إذا توفر) */}
                <div className="space-y-6 text-gray-700 text-lg md:text-xl font-medium">
                  <p>هنا يبدأ سرد التفاصيل العميقة. نحن نؤمن أن المعرفة ليست مجرد معلومات، بل هي تجربة بصرية وفكرية متكاملة. من خلال هذا المنشور، نسلط الضوء على الزوايا الخفية التي تجعل من القراءة متعة حقيقية.</p>
                  
                  {/* صورة داخلية متناسقة */}
                  <div className="my-10 rounded-3xl overflow-hidden shadow-2xl">
                    <img src={article.img} className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity" alt="content" />
                  </div>

                  <p>وفي الختام، يبقى الإبداع هو المحرك الأساسي لكل ما نقدمه في منصة مداد. شكراً لكونك جزءاً من هذه الرحلة المعرفية.</p>
                </div>
              </div>

              {/* قسم التعليقات المطور */}
              <CommentsSection /> 
             
            </section>

          </div>
        </main>
      </div>
    </>
  );
};

export default CreativeArticleView;