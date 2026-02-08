import React from 'react'
import './App.css'; // تأكد من المسار الصحيح
import AuthPage from'./features/auth/login.jsx';
import AuthorDashboard from './pages/User/Dashboard/dashboard.jsx'
import { Routes, Route } from 'react-router-dom';
import { BookCardInfo } from './features/books/BookCardContext.jsx'
import BookCardDeatils from './features/books/BookCardDeatils.jsx'
import CreativeArticleView from './features/Article/ArticleDeatiles.jsx'
import { ArticlesContextData } from './features/Article/ArticlesContext.jsx';

import { AuthProvider } from './features/auth/auther.jsx';
import ProtectedRoute from './features/auth/ProtectedRoute.jsx';
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

import ArticlesManager from './pages/User/Content Adminstorition/ArticlesHome/ArticlesManager.jsx';

import CreativeHub from './pages/User/Content Adminstorition/UserContentManager.jsx';
import ArticleEditor from './pages/User/Content Adminstorition/ArticlesHome/ArticleEditor.jsx';
// import ArticlesManager from './pages/User/Content Adminstorition/ArticlesManager.jsx';
import UserLayout from './App/Public/Layout/MainLayout.jsx'; 
import BookContentHome from './pages/User/Content Adminstorition/BooksHome/BookContentHome.jsx';
import AddBookContent from './pages/User/Content Adminstorition/BooksHome/AddBookContent.jsx';
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
      <AuthProvider>
        <BookCardInfo.Provider value={{CardInfo}}>
          <ArticlesContextData.Provider value={{ArticlesData}}>
            <Routes>
              
              {/* 1. المسارات العامة (بدون سلايد بار) */}
              <Route path="/" element={<HomeH />} />
              <Route path="/login" element={<AuthPage />} />
              <Route path="/category" element={<CategoriesPage />} />
              {/* <Route path="/articlenew" element={<Articles />} /> */}
              <Route path="/BookCardDeatils/:bookId" element={<BookCardDeatils />} />
              <Route path="/ArticleDetail/:ArticleId" element={<CreativeArticleView />} />
              <Route path="/homeBook" element={<HomeBook />} />

              {/* 2. مسارات لوحة التحكم (هنا السحر! السلايد بار سيظهر في كل هؤلاء) */}
              <Route element={<ProtectedRoute allowedRoles={['admin', 'user']}><UserLayout /></ProtectedRoute>}>
                
                {/* كل هذه الصفحات ستظهر داخل الـ Outlet وتأخذ السلايد بار تلقائياً */}
                <Route path="/dashboardUser" element={<AuthorDashboard />} />
                <Route path="/content_user" element={<CreativeHub />} />
                <Route path="/ArticleEditor" element={<ArticleEditor />} />
                <Route path="/ArticlesManager" element={<ArticlesManager />} />
                <Route path="/AddDataContent" element={<AddDataContent />} />
                <Route path="/UploadFiles" element={<UploadFiles />} />
                <Route path="/BookContentHome" element={<BookContentHome />} />
                <Route path="/AddBookContent" element={<AddBookContent />} />
                
              </Route>

              {/* 3. مسارات الأدمن (إذا أردت لها سلايد بار مختلف أو نفس الشيء) */}
              <Route path="/dashboard" element={<ProtectedRoute allowedRoles={['admin']}><AdminUsers /></ProtectedRoute>} />
              <Route path="/users" element={<UsersManager />} />
              <Route path="/content" element={<AdminPendingReviews />} />

            </Routes>
          </ArticlesContextData.Provider>
        </BookCardInfo.Provider>
      </AuthProvider>
    </div>
  );

}
export default App
