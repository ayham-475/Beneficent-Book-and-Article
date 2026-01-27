import React from 'react'
import { BookOpen, Search, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import './hedder.css'
function Hedder() {
  const Links=[
    {id:1,link:'/', name:'الصفحة الرئيسية '},
    {id:2,link:'/books', name:'الكتب'},
    {id:3,link:'', name:'المقالات'},
  ];
 const linkList= Links.map((l)=>{
    return(
      <Link className=' text-md ml-10  font-bold hover:text-emerald-400 py-2 border-b border-white/5' key={l.id} to={l.link} ><span>{l.name}</span></Link>
    )
  })
  return (
    <div>
      
      <nav dir="rtl" className='nav mt-1 mx-7 flex gap-30 bg-gray-200   border border-[#63B3ED]/50  h-18  '>
       <div  className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute -inset-1  from-blue-600 to-emerald-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative mr-4 w-10 h-10 bg-[#0A0F1E] border border-white/10 rounded-xl flex items-center justify-center shadow-2xl">
                <BookOpen className="text-emerald-400 group-hover:text-blue-400 transition-colors" size={22} />
              </div>
            </div>
            <span className="text-emerald-500 text-2xl font-black tracking-tighter">
              منصة<span className="text-[#0A0F1E]">-</span>اليعري
            </span>
          </div>
        <div className='ml-40 mr-38'     >
         {linkList}
        </div>
        
          <div className="flex items-center gap-4">
            <button className="hidden sm:flex w-10 h-10 items-center justify-center text-gray-400 hover:text-white transition-colors">
             
              <Search size={20} />
            </button>
            
            <Link to="/user" className="relative hidden sm:block group">
              <div className="absolute -inset-0.5  from-emerald-500 to-blue-500 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
              <button className="relative flex items-center gap-2 px-6 py-2.5 bg-[#050816] border border-white/10 rounded-xl text-white font-bold text-sm transition-all active:scale-95">
                <User size={16} className="text-emerald-400" />
                  تسجيل الدخول
              </button>
            </Link>
        </div>
      </nav>
      
    </div>
  )
}

export default Hedder
