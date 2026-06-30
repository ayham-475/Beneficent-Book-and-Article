import React from 'react';
import TrendingArticles from './TrendingArticle';
import ArticleCategories from './ArticleCategories';
import EliteAuthors from './EliteAuthors';
import ArticleHero from './ArticleHero';
import ArticleCTA from './ArticleCTA';// قسم إضافي للدعوة للنشر
import Header from '../../App/Public/Layout/Hedder';
import Footer from '../../App/Public/Layout/Fotter';
const Articles = () => {
  return (
    <div className="bg-[#020617] min-h-screen text-white font-sans overflow-x-hidden" dir="rtl">
        <Header />
      {/* <ArticleHero /> المقالة الرئيسية في الأعلى */}
      <ArticleHero />   
      <ArticleCategories />
      <TrendingArticles title={"مقالات تشكل مستقبلك "}  /> {/* مقالات شائعة بسلايدر */}
      <TrendingArticles title={"المقالات الاكثر شهرة هذا الاسبوع"} /> {/* مقالات شائعة بسلايدر */}
      <TrendingArticles title={"المقالات الحديثة"}  /> {/* مقالات شائعة بسلايدر */}
      <TrendingArticles title={"المقالات الاكثر تقييما هذا الاسبوع"}   /> {/* مقالات شائعة بسلايدر */}
      <EliteAuthors /> {/* نخبة الكتاب */}
      <ArticleCTA /> {/* زر لنشر مقالات جديدة */}
      <Footer />
    </div>
  );
};

export default Articles;