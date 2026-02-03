import React from 'react'
import ArticleSection from './ArticleSection'
import CompactArticleSlider from './CategorizedArticles'
import ArticlesData from './articles.json'; 

function AllArticles() {

  
  return (
    <div>
    {
  // تحويل الكائن (tech, life, thought) إلى مصفوفة للمرور عليها
  Object.values(ArticlesData).map((categoryData) => {
    let i=1;
    return (
      <ArticleSection 
       
        key={categoryData.id} 
        id={categoryData.articles}
        category={categoryData.label}
        title={categoryData.label} 
        articles={categoryData.articles} // نمرر مصفوفة المقالات كاملة للقسم
      />
    );
  })
}
      <CompactArticleSlider/>
    </div>
  )
}

export default AllArticles
