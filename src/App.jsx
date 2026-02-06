import React from 'react'
import AuthPage from './features/login.jsx'
import AuthorDashboard from './pages/User/Dashboard/dashboard.jsx'
import { Routes, Route } from 'react-router-dom';
import { BookCardInfo } from './features/books/BookCardContext.jsx'
import BookCardDeatils from './features/books/BookCardDeatils.jsx'
import CreativeArticleView from './features/Article/ArticleDeatiles.jsx'
import { ArticlesContextData } from './features/Article/ArticlesContext.jsx';

import ArticlesData from './features/Article/apiArticles.json'
import CategoriesPage from './App/Public/HomePages/CosmicHero.jsx'
import AdminPendingReviews from './pages/Admin/Dashboard/AdminPendingReviews.jsx'
import AdminUsers from './pages/Admin/adminUsers.jsx'
import UsersManager from './pages/Admin/Users/UsersManager.jsx'
import AddDataContent from './pages/User/Dashboard/AddDataContent.jsx'
import UploadFiles from './pages/User/Dashboard/UploadFiles.jsx'
import HomeH from './features/home/home.jsx'
import HomeBook from './features/books/home.jsx'
// import ArticlesHub from './features/Article/ArticlesHub.jsx'

import Articles from './features/Article/ArticlesHub.jsx'
function App() {

  const CardInfo=[
    
    { id: 1, title:"امواج في ليلة مظلمة ", price:"19.00", oldPrice: "24.00", rate: 4.6, reviews: 45, img: "/imgs/download.webp",nameWriter:"صخر اليعري", tag: null },
    { id: 2, title:" الانجليزي سر النجاح", price: "19.00", oldPrice: "24.00", rate: 4.6, reviews: 45, img:"/imgs/download.webp",nameWriter:"معاذ اليعري", tag: null },
    { id: 3, title:"اسرار الوصول الى الحرية", price: "19.00", oldPrice: "24.00", rate: 4.6, reviews: 45, img:"/imgs/OIP (5).webp",nameWriter:"عواد اليعري", tag: null },
    { id: 4, title:"أسرار النجاح بالعلم", price: "19.00", oldPrice: "24.00", rate: 4.6, reviews: 45, img:"/imgs/OIP (6).webp",nameWriter:"رمزي اليعري", tag: null },
    { id: 7, title: "فن الإقناع والتاثير", price: "25.00", oldPrice: "35.00", rate: 4.9, reviews: 120, img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=400&h=600&auto=format&fit=crop",nameWriter:"يونس طلان", tag: "الأكثر مبيعاً" },
    { id: 8, title: "سيكولوجية المال", price: "18.00", oldPrice: "22.00", rate: 4.8, reviews: 85, img: "https://images.unsplash.com/photo-1592492159418-39f319320569?q=80&w=400&h=600&auto=format&fit=crop",nameWriter:"أروى الشامي", tag: "خصم 20%" },
    { id: 9, title: "عادات ذرية", price: "20.00", oldPrice: "25.00", rate: 5.0, reviews: 210,img: "https://images.unsplash.com/photo-1544640808-32ca72ac7f37?q=80&w=400&h=600&auto=format&fit=crop",nameWriter:"مازن اليعري", tag: null },
    { id: 10, title: "تفكير سريع وبطيء", price: "30.00", oldPrice: "40.00", rate: 4.7, reviews: 64, img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400&h=600&auto=format&fit=crop",nameWriter:"مازن طلان", tag: "وصل حديثاً" },
    { id: 5, title: "العمل العميق", price: "22.00", oldPrice: "28.00", rate: 4.9, reviews: 92,img: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=400&h=600&auto=format&fit=crop",nameWriter:"سااره السعداني", tag: "مميز" },
    { id: 6, title: "الذكاء العاطفي", price: "19.00", oldPrice: "24.00", rate: 4.6, reviews: 45, img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=400&h=600&auto=format&fit=crop",nameWriter:"مريم ال سعود", tag: null },
  ];
  return (
    <div>
      <BookCardInfo.Provider value={{CardInfo}}>
      <ArticlesContextData.Provider  value={{ArticlesData}} >
       <Routes>
      {/* <Route path="/home" element={<Home />} /> */}
      <Route path="/homeBook" element={<HomeBook />} />
      <Route path="/content" element={<AdminPendingReviews />} />
      <Route path="/content" element={<contentReturn />} />
      <Route path="/AddDataContent" element={<AddDataContent />} />
      <Route path="/UploadFiles" element={<UploadFiles />} />
      <Route path="/users" element={<UsersManager />} />
      <Route path="/dashboard" element={<AdminUsers />} />
      <Route path="/dashboardUser" element={<AuthorDashboard />} />
      <Route path="/" element={<HomeH />} />

      {/* <Route path="/h" element={<HomeAll />} /> */}
      <Route path="/category" element={<CategoriesPage />} />
      {/* <Route path="/articlesAll" element={<ArticlesHub />}/> */}
      {/* <Route path="/articles" element={<ArticlesHubPremium />}/> */}
      <Route path="/articlenew" element={<Articles />}/>
      {/* <Route path="/s" element={<ArticleSection />} /> */}
      {/* <Route path="/all" element={<AllArticles />} /> */}
      <Route path="/BookCardDeatils/:bookId" element={<BookCardDeatils />} />
      <Route path="/ArticleDetail/:ArticleId" element={<CreativeArticleView />} />

      {/* <Route path="/page" element={<Page />} /> */}
      {/* <Route path="/h" element={<CardSm />} /> */}
      {/* <Route path="/books" element={<HomePage/>} /> */}
      <Route path="/user" element={<AuthPage />} />
      <Route path="/dashboard_user" element={<AuthorDashboard />} />
    </Routes>
    </ArticlesContextData.Provider>
      </BookCardInfo.Provider>
    </div>
  )
}
export default App
