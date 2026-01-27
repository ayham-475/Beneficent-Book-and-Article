import React from 'react'
import HomePage from './App/Public/homePage.jsx'
import Page from './App/Public/BooksCard/Cards.jsx'
import CardSm from './App/Public/CardSm.jsx'
import AuthPage from './assets/login'
import AuthorDashboard from './assets/dashboard'
// import { Route,Routes} from 'lucide-react'
import { Routes, Route } from 'react-router-dom';
import BookCardDeatils from './App/Public/BooksCard/BookCardDeatils.jsx'
import { BookCardInfo } from './App/Public/BooksCard/BookCardContext.jsx'
// import img from './assets/imgs/download.webp'
import Home from './App/Public/Home';
import CategoriesPage from './App/Public/Cagegories/CosmicHero.jsx'
import HomeAll from './App/Public/HomeAll.jsx'
// import './assets/im'
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
      <img src={`./assets/${CardInfo[0].src}`} alt="" />
      <BookCardInfo.Provider value={{CardInfo}}>
       <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<HomeAll />} />

      <Route path="/category" element={<CategoriesPage />} />
      <Route path="/BookCardDeatils/:bookId" element={<BookCardDeatils />} />
      <Route path="/page" element={<Page />} />
      <Route path="/h" element={<CardSm />} />
      <Route path="/books" element={<HomePage/>} />
      <Route path="/user" element={<AuthPage />} />
      <Route path="/dashboard" element={<AuthorDashboard />} />
    </Routes>
      </BookCardInfo.Provider>
    </div>
  )
}
export default App
