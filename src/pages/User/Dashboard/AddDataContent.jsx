import React, { useState } from 'react';
import { 
  ArrowLeft, ArrowRight, LayoutGrid, Tag, 
  DollarSign, FileText, CheckCircle2, Info 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import TopHeader from './TopHeader';
import Sidebar from './SlideBar';
import Footer from '../../../App/Public/Layout/Fotter';
function AddDataContent() {
  const [ContentData, SetContentData] = useState({
    content_id: Date.now(), // توليد ID تلقائي مبدئي
    author_id: 3,
    category_id: 4,
    title: "",
    description: "",
    content_type: "BOOK", // قيمة افتراضية
    price: "",
    file_path: "",
    preview_path: "",
    status: "PENDING", // حالة افتراضية
    created_at: new Date().toISOString(),
    id: ""
  });
  

  const handlAddContent = async (e) => {
  e.preventDefault(); // منع الصفحة من التحديث
  
  // تأكد من أن السعر رقم وليس نص
  const dataToSubmit = {
    ...ContentData,
    price: parseFloat(ContentData.price) || 0,
    id: String(Date.now()) // توليد ID فريد يدوياً إذا كنت تواجه مشاكل مع السيرفر
  };

  try {
    const res = await fetch("http://localhost:3000/contents", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataToSubmit)
    });

    if (res.ok) {
      alert("تم حفظ البيانات في السيرفر بنجاح!");
      // يمكنك هنا التوجيه لصفحة أخرى برمجياً بعد النجاح
      // navigate("/dashboardUser"); 
    } else {
      alert("فشل الإرسال: تأكد أن السيرفر يعمل");
    }
  } catch (error) {
    console.error("خطأ في الاتصال:", error);
    alert("تعذر الوصول للسيرفر");
  }
};

  return (
    <>
    <Sidebar />
    <TopHeader />
    <div className="min-h-screen mt-20 bg-[#F0F4F8] pb-20 font-sans">
      

      <div className="max-w-4xl mx-auto mt-12 px-4" dir="rtl">
        {/* رأس الصفحة - Header Section */}
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-black text-gray-800">إضافة عمل إبداعي جديد</h1>
            <p className="text-gray-500 mt-2 font-medium">املأ التفاصيل أدناه لنشر محتواك في المتجر</p>
          </div>
          <div className="hidden md:block">
            <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#319795]/10 rounded-full flex items-center justify-center text-[#319795]">
                <Info size={20} />
              </div>
              <span className="text-xs font-bold text-gray-600">خطوة 1 من 2: المعلومات الأساسية</span>
            </div>
          </div>
        </div>

        <form onSubmit={handlAddContent} className="space-y-8">
          {/* البطاقة الأولى: معلومات المحتوى */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-2 h-full bg-[#319795]"></div>
            
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-gray-50 rounded-2xl text-gray-400">
                <FileText size={24} />
              </div>
              <h2 className="text-xl font-black text-gray-700">المعلومات الأساسية</h2>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-500 mr-2 flex items-center gap-2">
                   عنوان العمل <span className="text-red-400">*</span>
                </label>
                <input 
                  value={ContentData.title} 
                  onChange={(e) => SetContentData({...ContentData, title: e.target.value})}
                  type="text" 
                  placeholder="مثلاً: دليل احتراف React.js للمبتدئين" 
                  className="w-full p-5 bg-[#F8FAFB] border-2 border-transparent rounded-2xl outline-none focus:border-[#319795]/30 focus:bg-white transition-all font-bold text-gray-700 shadow-sm" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-500 mr-2">وصف العمل</label>
                <textarea 
                  value={ContentData.description} 
                  onChange={(e) => SetContentData({...ContentData, description: e.target.value})}
                  rows="4" 
                  placeholder="اشرح لجمهورك ما الذي يجعل هذا العمل مميزاً..." 
                  className="w-full p-5 bg-[#F8FAFB] border-2 border-transparent rounded-2xl outline-none focus:border-[#319795]/30 focus:bg-white transition-all font-medium text-gray-600 shadow-sm"
                ></textarea>
              </div>
            </div>
          </div>

          {/* البطاقة الثانية: التصنيف والمالية */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-[2.5rem] p-8 shadow-lg shadow-gray-200/40 border border-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-emerald-50 rounded-2xl text-[#319795]">
                  <DollarSign size={22} />
                </div>
                <h3 className="font-black text-gray-700">التسعير (SAR)</h3>
              </div>
              <input 
                value={ContentData.price} 
                onChange={(e) => SetContentData({...ContentData, price: e.target.value})}
                type="number" 
                placeholder="0.00" 
                className="w-full p-5 bg-[#F8FAFB] border-2 border-transparent rounded-2xl outline-none focus:border-[#319795] transition-all font-black text-2xl text-[#319795]" 
              />
              <p className="text-[10px] text-gray-400 mt-3 font-bold uppercase tracking-wider">سيتم إضافة رسوم المنصة تلقائياً</p>
            </div>

            <div className="bg-white rounded-[2.5rem] p-8 shadow-lg shadow-gray-200/40 border border-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-50 rounded-2xl text-blue-500">
                  <Tag size={22} />
                </div>
                <h3 className="font-black text-gray-700">نوع المحتوى</h3>
              </div>
              <select 
                value={ContentData.content_type}
                onChange={(e) => SetContentData({...ContentData, content_type: e.target.value})}
                className="w-full p-5 bg-[#F8FAFB] border-2 border-transparent rounded-2xl outline-none focus:border-blue-400 transition-all font-bold text-gray-600 appearance-none shadow-sm"
              >
                <option value="BOOK">كتاب رقمي (PDF)</option>
                <option value="COURSE">دورة تدريبية</option>
                <option value="TEMPLATE">قالب تصميم</option>
                <option value="VIDEO">فيديو حصري</option>
              </select>
            </div>
          </div>

          {/* أزرار التحكم - Action Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10">
            <Link to="/dashboardUser" className="order-2 md:order-1">
              <button type="button" className="flex items-center gap-2 text-gray-400 font-black hover:text-gray-600 transition-all group">
                <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-gray-200 transition-all">
                  <ArrowRight size={20} />
                </div>
                إلغاء والعودة
              </button>
            </Link>

            <div className="flex gap-4 w-full md:w-auto order-1 md:order-2">
              <button 
                type="button"
                className="flex-1 md:flex-none bg-gray-800 text-white px-8 py-4 rounded-2xl font-bold hover:bg-gray-900 transition-all shadow-lg"
              >
                حفظ كمسودة
              </button>
              
              
            </div>
            <Link  to="/UploadFiles">
           
            <div className="flex gap-4 w-full md:w-auto order-1 md:order-2">
              <button 
                type="button"
                className="flex-1 md:flex-none bg-gray-800 text-white px-8 py-4 rounded-2xl font-bold hover:bg-gray-900 transition-all shadow-lg"
              >
                التالي</button>
              
              
            </div>
             </Link>
          </div>
         
        </form>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default AddDataContent;