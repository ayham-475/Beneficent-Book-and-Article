import React from 'react';
import { useParams } from 'react-router-dom';

import { motion } from 'framer-motion';
import { Star, BookOpen,Users, ShieldCheck, Zap } from 'lucide-react';
import { useContext } from 'react';
import { BookCardInfo } from './BookCardContext';
import Hedder from '../Hedder/Hedder';
const BookDetails = () => {
    const bokinfo=useContext(BookCardInfo);
    const   BookId  =useParams();
    const bookDetails=bokinfo.CardInfo.map((b)=>{
     if(b.id==BookId.bookId){
           return b;
     }
    })
    const indexBookDetails =BookId.bookId-1;
  return (
 <> <Hedder/>
    <div className="min-h-screen  bg-[#050816] text-white font-sans p-4 md:p-12" dir="rtl">
      
      {/* Container الرئيسي بتصميم Glassmorphism كما في الصورة */}
      <div className="max-w-6xl mx-auto bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl relative">
        
        {/* شريط الإغلاق العلوي (كما في الصورة) */}
        <div className="absolute top-6 left-8 flex gap-2 z-20">
          <div className="w-3 h-3 bg-red-500/50 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500/50 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500/50 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          
          {/* الجانب الأيمن: غلاف الكتاب والإضاءة النيون */}
          <div className="relative p-12 flex items-center justify-center  bg-gradient-to-br from-blue-600/5 to-transparent">
            {/* الهالة المضيئة خلف الكتاب (Neon Glow) */}
            <div className="absolute w-[300px] h-[300px] bg-blue-500/20 blur-[100px] rounded-full animate-pulse"></div>
            
            <motion.div 
              initial={{ rotateY: 20, perspective: 1000 }}
              whileHover={{ rotateY: 0 }}
              className="relative z-10"
            >
              <img 
                src={bookDetails[indexBookDetails].src}
                className="w-80 h-[450px] object-cover rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10"
                alt="Book cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-emerald-500 text-black font-black px-4 py-2 rounded-lg text-sm">
                  ${bookDetails[indexBookDetails].price}
              </div>
            </motion.div>
          </div>
          {/* الجانب الأيسر: المحتوى الكتابي والـ Bento Grid */}
          <div className="p-12 lg:border-r border-white/5">
            <h3 className="text-4xl font-black mb-6 leading-tight">
           للكاتب : {bookDetails[indexBookDetails].nameWriter}</h3>
            {/* إحصائيات سريعة (الرموز الأربعة في الصورة) */}
            <div className="flex gap-8  ml-20 py-6 border-y border-white/5">
              <div className="text-center">
                <Users className="mx-auto text-gray-500 mb-2" size={20} />
                <span className="block text-xs text-gray-400 uppercase">الجمهور</span>
                <span className="font-bold">+100K</span>
              </div>
              <div className="text-center">
                <Star className="mx-auto text-yellow-500 mb-2" size={20} fill="currentColor" />
                <span className="block text-xs text-gray-400 uppercase">التقييم</span>
                <span className="font-bold">4.9</span>
              </div>
              <div className="text-center">
                <BookOpen className="mx-auto text-blue-400 mb-2" size={20} />
                <span className="block text-xs text-gray-400 uppercase">الصفحات</span>
                <span className="font-bold">422</span>
              </div>
            </div>

            {/* قسم الـ Bento Grid المصغر في الأسفل (المربعات الملونة) */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-default group">
                <ShieldCheck className="text-emerald-400 mb-2 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-sm">ضمان المحتوى</h4>
                <p className="text-[10px] text-gray-500 mt-1">تحديثات مدى الحياة للنسخة</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-default group">
                <Zap className="text-blue-400 mb-2 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-sm">قراءة فورية</h4>
                <p className="text-[10px] text-gray-500 mt-1">متاح بجميع الصيغ الرقمية</p>
              </div>
            </div>

            {/* زر الشراء كما في الصورة */}
            <button className="w-full bg-[#0FD3C4] text-black font-black py-5 rounded-2xl text-xl hover:shadow-[0_0_30px_rgba(15,211,196,0.4)] transition-all active:scale-95">
              انطلار السلي (شراء الآن)
            </button>
            
            <p className="text-center mt-4 text-gray-500 text-xs">
              دفع آمن 100% عبر جميع الوسائل المتاحة
            </p>
          </div>

        </div>
      </div>
    </div></>
  );
};

export default BookDetails;