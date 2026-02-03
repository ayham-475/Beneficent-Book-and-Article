import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, CheckCircle2, Globe, Shield, Zap } from 'lucide-react';

const SocialAndTabletSectionLight = () => {
  // توزيع المؤلفين في زوايا دائرية دقيقة (نفس التنسيق السابق)
  const authors = [
    { angle: 0 }, { angle: 45 }, { angle: 90 }, { angle: 135 }, 
    { angle: 180 }, { angle: 225 }, { angle: 270 }, { angle: 315 }
  ];
  return (
    <section className="relative min-h-[800px] bg-[#fcfcfc] text-[#1a1c20] p-6 md:p-20 overflow-hidden" dir="rtl">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
        
        {/* الجانب الأيمن: دائرة المجتمع (The Social Circle) */}
        <div className="lg:col-span-6 relative flex justify-center items-center h-[500px]">
          {/* الخطوط النيونية الممتدة خلف الدائرة - تم تلطيفها لتناسب الخلفية الفاتحة */}
          <div className="absolute w-[150%] h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent rotate-45" />
          <div className="absolute w-[150%] h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent -rotate-45" />

          {/* الدائرة الكبرى */}
          <div className="relative w-[400px] h-[400px] border border-gray-200 rounded-full flex justify-center items-center shadow-[0_0_80px_rgba(0,0,0,0.02)]">
            {/* النص المركزي داخل الدائرة */}
            <div className="z-10 text-center bg-white p-8 rounded-full border border-gray-100 shadow-xl">
              <h4 className="text-xl font-black mb-1 text-gray-800">مجتمع <span className="text-emerald-500 text-2xl">الواحة</span></h4>
              <p className="text-[10px] text-gray-400 uppercase tracking-[0.3em] font-bold">المؤلفون المبدعون</p>
            </div>

            {/* الأفاتارز الموزعة على محيط الدائرة */}
            {authors.map((auth, i) => {
              const radius = 200; 
              const x = Math.cos((auth.angle * Math.PI) / 180) * radius;
              const y = Math.sin((auth.angle * Math.PI) / 180) * radius;

              return (
                <motion.div
                  key={i}
                  className="absolute w-16 h-16 rounded-full border-2 border-white p-1 bg-white shadow-lg hover:shadow-emerald-500/20 transition-all"
                  style={{ x, y }}
                  whileHover={{ scale: 1.2, borderColor: '#10b981' }}
                >
                  <img src={`https://i.pravatar.cc/150?u=${i + 40}`} className="w-full h-full rounded-full grayscale hover:grayscale-0 transition-all" alt="Author" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* الجانب الأيسر: عرض التابلت والقائمة (Tablet & Features) */}
        <div className="lg:col-span-6 space-y-12">
          <div className="text-right">
            <h2 className="text-5xl font-black mb-6 leading-tight text-gray-900">تجربة قراءة <br/> <span className="text-emerald-500">تنبض بالحياة</span></h2>
            <p className="text-gray-500 text-lg max-w-md leading-relaxed font-medium">
              لقد صممنا واجهة المستخدم لتكون امتداداً لخيالك، حيث تلتقي التكنولوجيا بمتعة القراءة التقليدية في جهاز واحد.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* قائمة المميزات (النقاط الملونة) */}
            <ul className="space-y-6">
              {[
                { text: 'مزامنة سحابية فورية', color: 'bg-emerald-500' },
                { text: 'وضع القراءة الليلي المتقدم', color: 'bg-blue-500' },
                { text: 'تحليلات ذكية لأدائك ككاتب', color: 'bg-purple-500' },
                { text: 'حماية كاملة للملكية الفكرية', color: 'bg-cyan-500' }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 group cursor-pointer border-b border-gray-50 pb-4">
                  <div className={`w-3 h-3 rounded-full ${item.color} shadow-lg group-hover:scale-150 transition-transform`} />
                  <span className="text-gray-600 font-bold group-hover:text-emerald-600 transition-colors">{item.text}</span>
                </li>
              ))}
            </ul>

            {/* جهاز التابلت المضيء (نفس التصميم بمظهر فاتح) */}
            <div className="relative group">
              {/* هالة الضوء خلف التابلت */}
              <div className="absolute -inset-4 bg-emerald-100 rounded-[2.5rem] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity" />
              
              <div className="relative w-full aspect-[3/4] bg-white border-[6px] border-gray-100 rounded-[2rem] overflow-hidden shadow-2xl">
                {/* محتوى الشاشة */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-white to-blue-50/50 flex flex-col items-center justify-center p-6 text-center">
                   <div className="w-20 h-20 bg-emerald-50 rounded-2xl flex items-center justify-center mb-4 border border-emerald-100">
                      <Smartphone className="text-emerald-500" size={40} />
                   </div>
                   <h5 className="font-black text-xl mb-2 italic text-gray-800">الواحة Mobile</h5>
                   <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">تطبيق الهاتف متاح الآن</p>
                   
                   <button className="mt-8 bg-gray-900 text-white px-6 py-2 rounded-full text-[10px] font-black hover:bg-emerald-600 transition-all shadow-lg">
                      تحميل التطبيق
                   </button>
                </div>
                {/* انعكاس الضوء على الشاشة */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-white/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SocialAndTabletSectionLight;