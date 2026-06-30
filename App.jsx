import React, { useState ,useEffect} from 'react'

import './App.css'; // تأكد من المسار الصحيح
import AuthPage from './features/auth/login.jsx';
import Articles from './features/Article/ArticlesHub.jsx'
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

import ArticlesManager from './pages/User/Content Adminstorition/ArticlesHome/ArticlesManager.jsx';

import CreativeHub from './pages/User/Content Adminstorition/UserContentManager.jsx';
import ArticleEditor from './pages/User/Content Adminstorition/ArticlesHome/ArticleEditor.jsx';
import UserLayout from './App/Public/Layout/MainLayoutUser.jsx';
import AdminLayout from './App/Public/Layout/MainLayoutAdmin.jsx';
import BookContentHome from './pages/User/Content Adminstorition/BooksHome/BookContentHome.jsx';
import AddBookContent from './pages/User/Content Adminstorition/BooksHome/AddBookContent.jsx';
import FinancialHome from './pages/User/Financial Management/FinancialHome.jsx';

import FinanceManager from './pages/Admin/FinanceManager/FinanceManager.jsx';
import SettingsManager from './pages/Admin/System Settings/SettingsManager.jsx';
import UserManagement from './pages/Admin/Content Moderation Hub/ContentModeration.jsx';
import ReaderCategoryView from './features/Categories/ReaderCategoryView.jsx';
import ArticleCategoryView from './features/Categories/ArticleCard.jsx';
import MySnakbar from './App/Public/Toast.jsx';
import { ToastContext } from './App/ToastContext.jsx';
import { ContentDataContext } from './pages/User/Content Adminstorition/ArticlesHome/ArticlesContext.jsx';
function App() {

  const CardInfo = [

    { id: 1, title: "امواج في ليلة مظلمة ", price: "19.00", oldPrice: "24.00", rate: 4.6, reviews: 45, img: "/imgs/download.webp", nameWriter: "صخر اليعري", tag: null },
    { id: 3, title: "اسرار الوصول الى الحرية", price: "19.00", oldPrice: "24.00", rate: 4.6, reviews: 45, img: "/imgs/OIP (5).webp", nameWriter: "عواد اليعري", tag: null },
    { id: 4, title: "أسرار النجاح بالعلم", price: "19.00", oldPrice: "24.00", rate: 4.6, reviews: 45, img: "/imgs/OIP (6).webp", nameWriter: "رمزي اليعري", tag: null },
    { id: 7, title: "فن الإقناع والتاثير", price: "25.00", oldPrice: "35.00", rate: 4.9, reviews: 120, img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=400&h=600&auto=format&fit=crop", nameWriter: "يونس طلان", tag: "الأكثر مبيعاً" },
    { id: 8, title: "سيكولوجية المال", price: "18.00", oldPrice: "22.00", rate: 4.8, reviews: 85, img: "https://images.unsplash.com/photo-1592492159418-39f319320569?q=80&w=400&h=600&auto=format&fit=crop", nameWriter: "أروى الشامي", tag: "خصم 20%" },
    // { id: 9, title: "عادات ذرية", price: "20.00", oldPrice: "25.00", rate: 5.0, reviews: 210, img: "https://images.unsplash.com/photo-1544640808-32ca72ac7f37?q=80&w=400&h=600&auto=format&fit=crop", nameWriter: "مازن اليعري", tag: null },
    { id: 10, title: "تفكير سريع وبطيء", price: "30.00", oldPrice: "40.00", rate: 4.7, reviews: 64, img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400&h=600&auto=format&fit=crop", nameWriter: "مازن طلان", tag: "وصل حديثاً" },
    { id: 5, title: "العمل العميق", price: "22.00", oldPrice: "28.00", rate: 4.9, reviews: 92, img: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=400&h=600&auto=format&fit=crop", nameWriter: "سااره السعداني", tag: "مميز" },
    { id: 6, title: "الذكاء العاطفي", price: "19.00", oldPrice: "24.00", rate: 4.6, reviews: 45, img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=400&h=600&auto=format&fit=crop", nameWriter: "مريم ال سعود", tag: null },
    { 
    id: 11, 
    title: "أسرار الذكاء الاصطناعي", 
    price: "29.00", 
    oldPrice: "39.00", 
    rate: 4.8, 
    reviews: 88, 
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&h=600&auto=format&fit=crop", 
    nameWriter: "أيهم اليعري", 
    tag: "الأكثر مبيعاً" 
  },
  { 
    id: 12, 
    title: "هندسة البرمجيات الحديثة", 
    price: "35.00", 
    oldPrice: "45.00", 
    rate: 4.9, 
    reviews: 56, 
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=400&h=600&auto=format&fit=crop", 
    nameWriter: "صالح اليعري", 
    tag: "وصل حديثاً" 
  },
  { 
    id: 13, 
    title: "لغة الجسد في القيادة", 
    price: "15.00", 
    oldPrice: "20.00", 
    rate: 4.5, 
    reviews: 32, 
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400&h=600&auto=format&fit=crop", 
    nameWriter: "خالد اليعري", 
    tag: null 
  },
  { 
    id: 14, 
    title: "قوة التركيز والانضباط", 
    price: "18.00", 
    oldPrice: "24.00", 
    rate: 4.7, 
    reviews: 112, 
    img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=400&h=600&auto=format&fit=crop", 
    nameWriter: "عصام اليعري", 
    tag: "مميز" 
  },
  { 
    id: 15, 
    title: "إدارة المشاريع الناشئة", 
    price: "24.00", 
    oldPrice: "30.00", 
    rate: 4.6, 
    reviews: 47, 
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&h=600&auto=format&fit=crop", 
    nameWriter: "فارس الحمادي", 
    tag: "خصم 20%" 
  },
  { 
    id: 16, 
    title: "فلسفة الابتكار الرقمي", 
    price: "21.00", 
    oldPrice: "26.00", 
    rate: 4.4, 
    reviews: 19, 
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=400&h=600&auto=format&fit=crop", 
    nameWriter: "ريما طلان", 
    tag: null 
  },
  { 
    id: 17, 
    title: "قواعد التسويق الإستراتيجي", 
    price: "27.00", 
    oldPrice: "35.00", 
    rate: 4.8, 
    reviews: 143, 
    img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=400&h=600&auto=format&fit=crop", 
    nameWriter: "أنس المقبلي", 
    tag: "شائع حالياً" 
  },
  { 
    id: 18, 
    title: "بناء الهوية الشخصية", 
    price: "16.00", 
    oldPrice: "22.00", 
    rate: 4.6, 
    reviews: 65, 
    img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=400&h=600&auto=format&fit=crop", 
    nameWriter: "ليلى الصنعاني", 
    tag: null 
  }

  ];
  const [ContentData,setContentdata]=useState({
        id: "1782678868584",
      content_id: 5800,
      author_id: "f126",
      category_id: "",
      title: "",
      description: "",
      content_type: "BOOK",
      price: 20,
      TextContent: "",
      img_path: "",
      file_url: "",
      language: "",
      status: "DRAFT",
      created_at: ""
  })
  const APT_URL="http://localhost:3000/contents";
    const GetDatacontent=async()=>{
      const res = await fetch(APT_URL);

      const contentdat = await res.json();
      console.log("s ",contentdat)
      setContentdata(contentdat)
  }
 useEffect(() => {
 GetDatacontent();
   
  }, []);
const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState("");

 function showHideToast(message){
  setOpen(true); 
  setTimeout(()=>{
    setOpen(false)
  },2000)
  setMessage(message)
 }
// console.log("app ",ContentData)
  return (
    //i am ayham alyaari
    <div>
      <MySnakbar open={open}  message={message} />
      <AuthProvider>
        <ToastContext.Provider value={{showHideToast}}>
          <ContentDataContext.Provider value={{ContentData}}>
        <BookCardInfo.Provider value={{ CardInfo }}>
          <ArticlesContextData.Provider value={{ ArticlesData }}>
            <Routes>

              {/* 1. المسارات العامة ( بدون سلايد بار) */}
              <Route path="/" element={<HomeH />} />
              <Route path="s" element={<MySnakbar />} />
              <Route path="/login" element={<AuthPage />} />
              <Route path="/category" element={<CategoriesPage />} />
              <Route path="/Categories" element={<ReaderCategoryView />} />
              <Route path="/CategoriesArticle" element={<ArticleCategoryView />} />

              <Route path="/articlenew" element={<Articles />} />
              <Route path="/BookCardDeatils/:bookId" element={<BookCardDeatils />} />
              <Route path="/ArticleDetail/:ArticleId" element={<CreativeArticleView />} />
              <Route path="/homeBook" element={<HomeBook />} />

              {/* 2. مسارات لوحة التحكم (هنا السحر! السلايد بار سيظهر في كل هؤلاء) */}
              <Route element={<ProtectedRoute allowedRoles={['user']}><UserLayout /></ProtectedRoute>}>

                {/* كل هذه الصفحات ستظهر داخل الـ Outlet وتأخذ السلايد بار تلقائياً */}
                <Route path="/dashboardUser" element={<AuthorDashboard />} />
                <Route path="/content_user" element={<CreativeHub />} />
                <Route path="/ArticleEditor" element={<ArticleEditor />} />
                <Route path="/ArticlesManager" element={<ArticlesManager />} />
                <Route path="/AddDataContent" element={<AddDataContent />} />
                <Route path="/UploadFiles" element={<UploadFiles />} />
                <Route path="/BookContentHome" element={<BookContentHome />} />
                <Route path="/AddBookContent" element={<AddBookContent />} />
                <Route path="/FinancialHome" element={<FinancialHome />} />

              </Route>

              {/* 3. مسارات الأدمن (إذا أردت لها سلايد بار مختلف أو نفس الشيء) */}
              <Route element={<ProtectedRoute allowedRoles={['admin']}><AdminLayout /></ProtectedRoute>}>
                <Route path="/dashboard" element={<AdminUsers />} />
                
                <Route path="/users" element={<UsersManager />} />
                <Route path="/ContentModeration" element={<UserManagement />} />
                <Route path="/content" element={<AdminPendingReviews />} />
                <Route path="/FinanceManager" element={<FinanceManager />} />
                <Route path="/SettingsManager" element={<SettingsManager />} />
              </Route>
            </Routes>
          </ArticlesContextData.Provider>
        </BookCardInfo.Provider>
        </ContentDataContext.Provider>
        </ToastContext.Provider>
      </AuthProvider>
    </div>
  );

}
export default App
