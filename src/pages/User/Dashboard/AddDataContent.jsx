import React, { useContext, useEffect, useState } from 'react';
import {
  ArrowRight, Tag, DollarSign, FileText,
} from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../../features/auth/auther';

function AddDataContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const bookdata = location.state?.BookData; // البيانات القادمة من صفحة الإدارة عند التعديل
  const { user } = useContext(AuthContext);
    const [message, setMessage] = useState({ text: "", type: "" });
  
  const [ContentData, SetContentData] = useState({
    content_id: Math.floor(Math.random() * 10000), // توليد ID عشوائي مؤقت
    author_id: user?.id,
    category_id: "",
    title: '',
    description: '',
    content_type: 'BOOK',
    price: 20,
    TextContent: "",
    content: "", // المحتوى الخاص بالمحرر
    img_path: "",
    status: 'DRAFT',
    created_at: new Date().toISOString().split('T')[0]
  });

  // 1. تصحيح منطق الـ useEffect لمنع أخطاء الـ undefined
  useEffect(() => {
    if (bookdata) {
      SetContentData({
        ...bookdata, // نأخذ كل بيانات الكتاب القادم
        title: bookdata.title || "",
        content_type: bookdata.content_type || "BOOK",
        category_id: bookdata.category_id || "مقالة تكنلوجيا",
        description: bookdata.description || "", // تم تصحيح المسمى هنا
        price: bookdata.price || ""
      });
    }
  }, [bookdata]);

  const handlAddContent = async (e) => {
    if (e) e.preventDefault();

    // تحديد هل هي عملية إضافة (POST) أم تعديل (PUT)
    const isEdit = Boolean(bookdata?.id);
    const method = isEdit ? "PUT" : "POST";
    const url = isEdit
      ? `http://localhost:3000/contents/${bookdata.id}`
      : "http://localhost:3000/contents";

    const dataToSubmit = {
      ...ContentData,
      price: parseFloat(ContentData.price) || 0,
      id: isEdit ? ContentData.id : String(Date.now())
    };

    try {
      const res = await fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSubmit)
      });

      if (res.ok) {
              if (res.ok) {
          setMessage({
            text: message ? "تم تحديث الكتاب بنجاح!" : "تم إنشاء الكتاب بنجاح!",
            type: "success"
          });
          setTimeout(() => navigate('/BookContentHome'), 2000);

        }
      } else {
        alert("فشل الإرسال: تأكد أن السيرفر يعمل");
      }
    } catch (error) {
      console.error("خطأ في الاتصال:", error);
      alert("تعذر الوصول للسيرفر");
    }
  };

  return (
    <div className="min-h-screen mt-20 bg-[#F0F4F8] pb-20 font-sans">
      <div className="max-w-4xl mx-auto mt-12 px-4" dir="rtl">
        {/* رأس الصفحة */}
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-black text-gray-800">
              {bookdata ? "تعديل العمل الإبداعي" : "إضافة عمل إبداعي جديد"}
            </h1>
            <p className="text-gray-500 mt-2 font-medium">املأ التفاصيل أدناه لنشر محتواك في المتجر</p>
          </div>
        </div>

        <form onSubmit={handlAddContent} className="space-y-8">
          {/* البطاقة الأولى */}
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
                <label className="text-sm font-bold text-gray-500 mr-2">عنوان العمل *</label>
                <input
                  value={ContentData.title}
                  onChange={(e) => SetContentData({ ...ContentData, title: e.target.value })}
                  type="text"
                  placeholder="مثلاً: دليل احتراف React.js"
                  className="w-full p-5 bg-[#F8FAFB] border-2 border-transparent rounded-2xl outline-none focus:border-[#319795]/30 focus:bg-white transition-all font-bold text-gray-700 shadow-sm"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-500 mr-2">وصف العمل</label>
                <textarea
                  value={ContentData.description}
                  onChange={(e) => SetContentData({ ...ContentData, description: e.target.value })}
                  rows="4"
                  placeholder="اشرح لجمهورك ما الذي يجعل هذا العمل مميزاً..."
                  className="w-full p-5 bg-[#F8FAFB] border-2 border-transparent rounded-2xl outline-none focus:border-[#319795]/30 focus:bg-white transition-all font-medium text-gray-600 shadow-sm"
                ></textarea>
              </div>
            </div>
          </div>

          {/* البطاقة الثانية */}
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
                onChange={(e) => SetContentData({ ...ContentData, price: e.target.value })}
                type="number"
                placeholder="0.00"
                className="w-full p-5 bg-[#F8FAFB] border-2 border-transparent rounded-2xl outline-none focus:border-[#319795] transition-all font-black text-2xl text-[#319795]"
              />
            </div>

            <div className="bg-white rounded-[2.5rem] p-8 shadow-lg shadow-gray-200/40 border border-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-50 rounded-2xl text-blue-500">
                  <Tag size={22} />
                </div>
                <h3 className="font-black text-gray-700">نوع المحتوى</h3>
              </div>
              <select
                value={ContentData.TextContent}
                onChange={(e) => SetContentData({ ...ContentData, TextContent: e.target.value })}
                className="w-full p-5 bg-[#F8FAFB] border-2 border-transparent rounded-2xl outline-none focus:border-blue-400 transition-all font-bold text-gray-600 shadow-sm"
              >
                <option value="عملي">كتاب عن العلم  (PDF)</option>
                <option value="ديني">كتاب عن الدين  </option>
                <option value="عن الحياة"> كتاب عن الحياة</option>
                <option value="التكنولوجيا">كتاب عن التكنولوجيا </option>
              </select>
            </div>
          </div>

          {/* أزرار التحكم */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10">
            <Link to="/dashboardUser" className="order-2 md:order-1 flex items-center gap-2 text-gray-400 font-black hover:text-gray-600 transition-all">
              <ArrowRight size={20} /> إلغاء والعودة
            </Link>

            <div className="flex gap-4 w-full md:w-auto order-1 md:order-2">
              {/* زر ينقل لصفحة الرفع مع إرسال البيانات الحالية */}
              <Link to="/UploadFiles" state={{ currentData: ContentData }}>
                <button type="button" className="bg-gray-800 text-white px-8 py-4 rounded-2xl font-bold hover:bg-gray-900 shadow-lg">
                  التالي (رفع الملفات)
                </button>
              </Link>

              <button
                type="submit"
                className="bg-[#319795] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#2a8381] shadow-lg"
              >
                {bookdata ? "تحديث البيانات" : "حفظ فقط"}
              </button>
            </div>
          </div>
        </form>
      </div>
       {message.text && (
            <div className={`mt-10 p-5 rounded-3xl text-center font-black shadow-lg animate-bounce ${
              message.type === "error" ? "bg-rose-100 text-rose-600 border border-rose-200" : "bg-emerald-100 text-emerald-600 border border-emerald-200"
            }`}>
              {message.text}
            </div>
          )}
      
    </div>
  );
}

export default AddDataContent;