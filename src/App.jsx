import React from 'react'
import HomePage from './App/Public/Books/homePage.jsx'
import Page from './App/Public/Books/BooksCard/Cards.jsx'
import CardSm from './App/Public/Books/CardSm.jsx'
import AuthPage from './features/login.jsx'
import AuthorDashboard from './pages/User/Dashboard/dashboard.jsx'
import { Routes, Route } from 'react-router-dom';
import BookCardDeatils from './App/Public/Books/BooksCard/BookCardDeatils.jsx'
import { ArticlesContextData } from './features/Articles/ArticlesContext.jsx'
import ArticlesData from './App/apiArticles.json'
import { BookCardInfo } from './App/Public/Books/BooksCard/BookCardContext.jsx'
import Home from './App/Public/Books/Home.jsx';
import CategoriesPage from './App/Public/HomePages/CosmicHero.jsx'
import HomeAll from './App/Public/HomeAll.jsx'
import ArticlesHub from './features/Articles/allArticles.jsx'
import ArticlesHubPremium from './features/Articles/Articles.jsx'
import ArticleSection from './features/Articles/ArticleSection.jsx'
import AllArticles from './features/Articles/allArticles.jsx'
import CreativeArticleView from './features/Articles/ArticleDeatiles.jsx'
import AdminPendingReviews from './pages/Admin/Dashboard/AdminPendingReviews.jsx'
import AdminUsers from './pages/Admin/adminUsers.jsx'
import UsersManager from './pages/Admin/Users/UsersManager.jsx'
import AddDataContent from './pages/User/Dashboard/AddDataContent.jsx'
import UploadFiles from './pages/User/Dashboard/UploadFiles.jsx'
function App() {

  const CardInfo=[
    {id:1,name:"",src:"/imgs/download.webp", desc:"امواج في ليلة مظلمة ",nameWriter:"معاذ اليعري",price:20.32},
    {id:2,name:"",src:"/imgs/OIP (5).webp",desc:" الانجليزي سر النجاح",nameWriter:"عواد اليعري",price:15.30},
    {id:3,name:"",src:"/imgs/OIP (6).webp",desc:"اسرار الوصول الى الحرية",nameWriter:"رمزي اليعري",price:18.22},
    {id:4,name:"",src:"/imgs/OIP (3).webp",desc:"أسرار النجاح بالعلم",nameWriter:"صخر اليعري",price:19.3},
    {id:5,name:"",src:"/imgs/OIP.jfif",desc:"أقوال وحكم وامثال",nameWriter:"يونس طلان",price:23.3},
    {id:6,name:"",src:"/imgs/OIP.webp",desc:"اسرار اكتشاف الكون",nameWriter:"أروى الشامي",price:33.3},
    {id:7,name:"",src:"/imgs/OIP (2).webp",desc:"أسرار النجاح في القرن 21",nameWriter:"مازن اليعري",price:45.3},
    {id:7,name:"",src:"/imgs/OIP (2).webp",desc:"أسرار النجاح في القرن 21",nameWriter:"مازن طلان",price:12.3},
  ];
  return (
    <div>
      <BookCardInfo.Provider value={{CardInfo}}>
      <ArticlesContextData.Provider  value={{ArticlesData}} >
       <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/content" element={<AdminPendingReviews />} />
      <Route path="/content" element={<contentReturn />} />
      <Route path="/AddDataContent" element={<AddDataContent />} />
      <Route path="/UploadFiles" element={<UploadFiles />} />
      <Route path="/users" element={<UsersManager />} />
      <Route path="/dashboard" element={<AdminUsers />} />
      <Route path="/dashboardUser" element={<AuthorDashboard />} />

      <Route path="/" element={<HomeAll />} />
      <Route path="/category" element={<CategoriesPage />} />
      <Route path="/articlesAll" element={<ArticlesHub />}/>
      <Route path="/articles" element={<ArticlesHubPremium />}/>
      <Route path="/s" element={<ArticleSection />} />
      <Route path="/all" element={<AllArticles />} />
      <Route path="/BookCardDeatils/:bookId" element={<BookCardDeatils />} />
      <Route path="/ArticleDetail/:ArticleId" element={<CreativeArticleView />} />

      <Route path="/page" element={<Page />} />
      <Route path="/h" element={<CardSm />} />
      <Route path="/books" element={<HomePage/>} />
      <Route path="/user" element={<AuthPage />} />
      <Route path="/dashboard_user" element={<AuthorDashboard />} />
    </Routes>
    </ArticlesContextData.Provider>
      </BookCardInfo.Provider>
    </div>
  )
}
export default App
