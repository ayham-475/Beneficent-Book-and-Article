import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  UploadCloud, BookOpen, Tag, DollarSign, 
  FileText, CheckCircle2, ArrowRight, Image as ImageIcon,
  Sparkles, Layers, Globe
} from 'lucide-react';

const AddBookContent = () => {
  const [step, setStep] = useState(1);
  const [dragActive, setDragActive] = useState(false);

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  return (
    <div className="max-w-5xl mx-auto py-10 px-4" dir="rtl">
      
      {/* 1. مؤشر التقدم الذكي (Progress Indicator) */}
      <div className="flex justify-between items-center mb-12 px-4 md:px-20">
        {[1, 2, 3].map((num) => (
          <div key={num} className="flex flex-col items-center relative z-10">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 border-2 ${
              step >= num ? 'bg-[#319795] border-[#319795] text-white shadow-lg shadow-teal-200' : 'bg-white border-gray-100 text-gray-300'
            }`}>
              {step > num ? <CheckCircle2 size={24} /> : <span className="font-black">{num}</span>}
            </div>
            <span className={`text-[10px] font-black mt-2 uppercase tracking-widest ${step >= num ? 'text-[#319795]' : 'text-gray-300'}`}>
              {num === 1 ? 'الهوية' : num === 2 ? 'المحتوى' : 'النشر'}
            </span>
          </div>
        ))}
        {/* خط الخلفية للمؤشر */}
        <div className="absolute top-[84px] left-1/2 -translate-x-1/2 w-[60%] h-[2px] bg-gray-100 -z-0 hidden md:block"></div>
      </div>

      {/* 2. حاوية النموذج الرئيسية */}
      <div className="bg-white/70 backdrop-blur-2xl rounded-[3.5rem] p-8 md:p-12 shadow-2xl border border-white relative overflow-hidden">
        
        <AnimatePresence mode="wait">
          {/* المرحلة الأولى: هوية الكتاب */}
          {step === 1 && (
            <motion.div 
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="text-center md:text-right">
                <h2 className="text-3xl font-black text-gray-800 flex items-center gap-3">
                  <Sparkles className="text-teal-500" /> تعريف المخطوطة
                </h2>
                <p className="text-gray-400 font-bold mt-2">ابدأ بوضع العناوين العريضة لتحفتك الفنية القادمة.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-500 mr-2 uppercase tracking-widest">عنوان الكتاب</label>
                  <div className="relative">
                    <BookOpen className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input type="text" placeholder="مثلاً: أسرار المجرّة" className="w-full bg-white border-2 border-gray-50 rounded-[1.5rem] p-4 pr-12 focus:ring-4 ring-teal-500/5 focus:border-[#319795] outline-none transition-all font-bold" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-500 mr-2 uppercase tracking-widest">التصنيف الأدبي</label>
                  <div className="relative">
                    <Tag className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <select className="w-full bg-white border-2 border-gray-50 rounded-[1.5rem] p-4 pr-12 focus:ring-4 ring-teal-500/5 focus:border-[#319795] outline-none transition-all font-bold appearance-none">
                      <option>رواية</option>
                      <option>علمي</option>
                      <option>تطوير ذات</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black text-gray-500 mr-2 uppercase tracking-widest">نبذة تعريفية مشوقة</label>
                <textarea rows="4" placeholder="اكتب ملخصاً يجذب القراء..." className="w-full bg-white border-2 border-gray-50 rounded-[1.5rem] p-6 focus:ring-4 ring-teal-500/5 focus:border-[#319795] outline-none transition-all font-bold leading-relaxed"></textarea>
              </div>
            </motion.div>
          )}

          {/* المرحلة الثانية: رفع الغلاف والملفات */}
          {step === 2 && (
            <motion.div 
              key="step2"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-8 text-center"
            >
              <div className="text-right">
                <h2 className="text-3xl font-black text-gray-800 flex items-center gap-3">
                  <Layers className="text-teal-500" /> الملفات والأغلفة
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* رفع الغلاف */}
                <div 
                  className={`border-4 border-dashed rounded-[3rem] p-10 transition-all duration-300 ${dragActive ? 'border-[#319795] bg-teal-50/50' : 'border-gray-100 bg-gray-50/30'}`}
                  onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
                  onDragLeave={() => setDragActive(false)}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center text-[#319795] mb-4">
                      <ImageIcon size={40} />
                    </div>
                    <p className="font-black text-gray-700">اسحب غلاف الكتاب هنا</p>
                    <p className="text-[10px] text-gray-400 mt-2">يفضل مقاس 1600x2400 بكسل</p>
                    <button className="mt-6 px-6 py-2 bg-black text-white rounded-xl text-xs font-black">تصفح الصور</button>
                  </div>
                </div>

                {/* رفع ملف الكتاب */}
                <div className="border-4 border-dashed border-gray-100 rounded-[3rem] p-10 bg-gray-50/30">
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center text-blue-500 mb-4">
                      <FileText size={40} />
                    </div>
                    <p className="font-black text-gray-700">ارفع المخطوطة (PDF/EPUB)</p>
                    <p className="text-[10px] text-gray-400 mt-2">الحد الأقصى للملف 50 ميجابايت</p>
                    <button className="mt-6 px-6 py-2 bg-black text-white rounded-xl text-xs font-black">اختيار الملف</button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* المرحلة الثالثة: التسعير والنشر */}
          {step === 3 && (
            <motion.div 
              key="step3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-10"
            >
              <div className="text-right">
                <h2 className="text-3xl font-black text-gray-800 flex items-center gap-3">
                  <Globe className="text-teal-500" /> إعدادات السوق
                </h2>
              </div>

              <div className="bg-[#319795]/5 rounded-[2.5rem] p-8 border border-[#319795]/10">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-1 space-y-4">
                    <label className="text-xs font-black text-gray-500 uppercase tracking-widest mr-2">حدد سعر البيع</label>
                    <div className="relative">
                      <DollarSign className="absolute right-4 top-1/2 -translate-y-1/2 text-[#319795]" size={24} />
                      <input type="number" placeholder="0.00" className="w-full bg-white border-2 border-[#319795]/20 rounded-2xl p-5 pr-14 text-2xl font-black text-gray-800 focus:ring-4 ring-teal-500/10 outline-none transition-all" />
                    </div>
                  </div>
                  <div className="w-full md:w-[250px] bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                    <p className="text-[10px] font-black text-gray-400 uppercase mb-4">صافي أرباحك التقريبي</p>
                    <p className="text-3xl font-black text-[#319795]">0.00$</p>
                    <div className="h-1 w-full bg-gray-50 mt-4 rounded-full overflow-hidden">
                      <div className="h-full bg-[#319795] w-2/3"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-2xl text-orange-700 border border-orange-100">
                <CheckCircle2 size={20} />
                <p className="text-xs font-bold">بضغطك على "نشر"، أنت توافق على شروط حقوق الملكية الفكرية للمنصة.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 3. أزرار التنقل (Control Buttons) */}
        <div className="mt-12 pt-8 border-t border-gray-100 flex justify-between items-center">
          {step > 1 ? (
            <button onClick={prevStep} className="flex items-center gap-2 text-gray-400 font-black hover:text-gray-800 transition-colors">
              <ArrowRight className="rotate-180" size={20} /> السابق
            </button>
          ) : <div></div>}

          {step < 3 ? (
            <button onClick={nextStep} className="bg-[#319795] text-white px-10 py-4 rounded-[1.5rem] font-black shadow-xl shadow-teal-500/20 hover:scale-105 transition-all">
              المتابعة للخطوة التالية
            </button>
          ) : (
            <button className="bg-black text-white px-12 py-4 rounded-[1.5rem] font-black shadow-xl hover:bg-[#319795] transition-all flex items-center gap-3">
              إطلاق الكتاب للعالم <Sparkles size={20} />
            </button>
          )}
        </div>

      </div>
    </div>
  );
};

export default AddBookContent;