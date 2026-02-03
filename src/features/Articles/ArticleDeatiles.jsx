import React from 'react';
import { motion } from 'framer-motion';
import ArticlesData from './articles.json'; 
import { useParams } from 'react-router-dom';

import { 
  Heart, MessageSquare, Share2, Bookmark, 
  ArrowRight, Play, Quote, Sparkles, Send 
} from 'lucide-react';
import Hedder from '../../App/Public/Layout/Hedder';
import { article, object } from 'framer-motion/client';
const CreativeArticleView = () => {
const articleId=useParams();
const c=[];
 Object.values(ArticlesData).map((article)=>{
  article.articles.map((a)=>{
      if(a.id==articleId.ArticleId){
         c.push(a) ;
      }     
}) })
console.log("a :  ",c)
  return (
    <>
    <Hedder />

    <div className="bg-[#fafafa] min-h-screen font-sans pb-20" dir="rtl">
      
      {/* 1. رأس الصفحة الفخم (Hero Header) */}
      <header className="relative h-[80vh] w-full overflow-hidden">
        {/* الصورة الخلفية بتأثير Zoom ناعم */}
        <motion.div 
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0"
        >
          <img 
            src={c[0].img} 
            className="w-full h-full object-cover"
            alt="Hero"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        </motion.div>

        {/* محتوى الهيرو المتداخل */}
        <div className="relative z-10 container mx-auto h-full flex flex-col justify-end pb-20 px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="bg-emerald-500 text-white px-6 py-2 rounded-full text-sm font-black mb-6 inline-block shadow-xl shadow-emerald-500/20">
              فلسفة التصميم
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8 drop-shadow-2xl">
              كيف يغير <span className="text-emerald-400">الإبداع</span> <br /> 
              طريقة فهمنا للواقع الرقمي؟
            </h1>
            <div className="flex items-center gap-6 text-white/80">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-2 pl-6 rounded-full border border-white/20">
                    <img src="https://i.pravatar.cc/100" className="w-10 h-10 rounded-full" />
                    <span className="font-bold">ياسين المنصوري</span>
                </div>
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                <span className="font-medium">15 مايو 2026</span>
            </div>
          </motion.div>
        </div>
      </header>

      {/* 2. منطقة المحتوى بتنسيق إبداعي */}
      <main className="container mx-auto px-6 -mt-10 relative z-20">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* شريط الأدوات الجانبي العائم (Floating Glass Actions) */}
          <aside className="lg:w-20  flex lg:flex-col gap-4 sticky top-20 h-fit order-2 lg:order-1">
            {[
              { icon: <Heart size={24} />, color: "hover:text-red-500" },
              { icon: <Bookmark size={24} />, color: "hover:text-emerald-500" },
              { icon: <Share2 size={24} />, color: "hover:text-blue-500" },
              { icon: <MessageSquare size={24} />, color: "hover:text-purple-500" },
            ].map((item, idx) => (
              <motion.button  
                key={idx}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-16 h-16 bg-white shadow-xl rounded-2xl flex  hover:bg-sky-300 items-center justify-center text-gray-400 border border-gray-100 transition-all ${item.color}`}
              >
                {item.icon}
              </motion.button>
            ))} 
          </aside>

          {/* جسد المقال (The Article Core) */}
          <section className="flex-1 bg-white p-8 md:p-16 rounded-[4rem] shadow-2xl shadow-gray-200/50 order-1 lg:order-2">
            <div className="prose prose-2xl max-w-none text-gray-800 leading-[1.8] text-right">
              <p className="text-3xl font-light text-gray-500 mb-12 leading-relaxed">
                التصميم ليس مجرد ما نراه، بل هو الكيفية التي نشعر بها تجاه الأشياء. في هذا المقال نغوص في أعماق الجماليات الرقمية...
              </p>

              <div className="relative my-16">
                <Quote className="text-emerald-500/20 absolute -right-12 -top-10 w-32 h-32" />
                <h3 className="text-4xl font-black text-gray-900 pr-10 border-r-8 border-emerald-500">
                  "البساطة هي قمة التعقيد، والجمال يكمن في التفاصيل التي لا تُرى بالعين المجردة."
                </h3>
              </div>

              <p>
                هنا نكتب المحتوى الأساسي... يتميز هذا التصميم بمساحات بيضاء (White Space) مريحة جداً تسمح للعين بالتركيز على الكلمات والصور.
              </p>

              {/* معرض صور إبداعي داخل المقال */}
              <div className="grid grid-cols-12 gap-4 my-16">
                <div className="col-span-8 h-80 rounded-[3rem] overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000" className="w-full h-full object-cover" />
                </div>
                <div className="col-span-4 h-80 bg-emerald-500 rounded-[3rem] flex items-center justify-center text-white text-center p-6">
                    <Sparkles size={40} className="mb-4" />
                    <p className="font-black text-xl leading-snug">الإبداع لا حدود له</p>
                </div>
              </div>
            </div>

            {/* قسم التعليقات (Modern Neumorphic Design) */}
            <div className="mt-24">
              <h4 className="text-3xl font-black mb-12 flex items-center gap-4">
                نبض القراء <span className="text-emerald-500 text-lg bg-emerald-50 px-4 py-1 rounded-full">12</span>
              </h4>

              {/* صندوق إضافة تعليق */}
              <div className="bg-gray-50 p-8 rounded-[3rem] mb-12 border border-gray-100 group focus-within:border-emerald-500 transition-all">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                    <Send className="text-emerald-500 rotate-180" size={20} />
                  </div>
                  <textarea 
                    placeholder="بماذا تفكر؟ شاركنا رأيك المبدع..."
                    className="flex-1 bg-transparent border-none focus:ring-0 text-xl resize-none"
                    rows="2"
                  ></textarea>
                </div>
              </div>

              {/* قائمة التعليقات */}
              <div className="space-y-8">
                {[1, 2].map((i) => (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="flex gap-6 p-8 bg-white border border-gray-100 rounded-[2.5rem] hover:shadow-xl transition-all"
                  >
                    <img src={`https://i.pravatar.cc/150?img=${i+10}`} className="w-16 h-16 rounded-2xl object-cover" />
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-4">
                        <h5 className="text-xl font-black">مازن القحطاني</h5>
                        <span className="text-sm text-gray-400">منذ يومين</span>
                      </div>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        هذا المقال غير نظرتي تماماً لكيفية دمج الألوان في مشاريعي القادمة. التنسيق هنا قمة في الإبداع!
                      </p>
                      <div className="mt-6 flex gap-4">
                        <button className="flex items-center gap-2 text-sm font-bold text-emerald-500 bg-emerald-50 px-4 py-2 rounded-full">
                          <Heart size={14} fill="currentColor" /> 24
                        </button>
                        <button className="text-sm font-bold text-gray-400 hover:text-gray-900 transition-all">رد</button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
    </>
  );
};

export default CreativeArticleView;