import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import Hedder from '../../App/Public/Layout/Hedder';
import Fotter from '../../App/Public/Layout/Fotter';
import AllArticles from './allArticles';
import ArticleSection from './ArticleSection';
import HedderArticle from './HedderArticle'
import ArticlesData from './articles.json'; 

const ArticlesHubPremium = () => {
  const [activeCategory, setActiveCategory] = useState("الكل");

  // دالة لتحديد المحتوى المعروض بناءً على الفئة النشطة
  const renderContent = () => {
    if (activeCategory === "الكل") {
      return <AllArticles />;
    }

    // هنا نقوم بالبحث عن البيانات في ملف الـ JSON بناءً على الاسم المختار
    // قمت باستخدام Object.values للبحث عن الفئة التي يطابق الـ label الخاص بها الـ activeCategory
    const selectedCategory = Object.values(ArticlesData).find(
      (cat) => cat.label === activeCategory
    );

    if (selectedCategory) {
      return (
        <ArticleSection 
          title={selectedCategory.label} 
          articles={selectedCategory.articles} 
        />
      );
    }

    return <div className="text-center py-20 text-gray-400">لا توجد مقالات في هذه الفئة</div>;
  };

  return (
    <>
      <Hedder />
      <HedderArticle activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      
      <main className="container mx-auto px-6 min-h-[6vh]">
        <motion.div
          key={activeCategory} // مفتاح لجعل الأنيميشن يعمل عند تغيير الفئة
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {renderContent()}
        </motion.div>
      </main>

      {/* زر إضافة مقال */}
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-10 left-10 bg-emerald-500 text-white p-6 rounded-3xl shadow-2xl flex items-center gap-4 z-[100] group"
      >
        <span className="font-black text-lg max-w-0 overflow-hidden group-hover:max-w-[200px] transition-all duration-500 whitespace-nowrap">
          اكتب مقالك الآن
        </span>
        <Zap className="fill-white" />
      </motion.button>

      <Fotter />
    </>
  );
};

export default ArticlesHubPremium;