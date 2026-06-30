import React, { useState, useRef, useContext, useEffect } from 'react';
import {
  ArrowLeft, Edit3, 
  Maximize2, Minimize2,
  Bold, Italic, Underline, List, ListOrdered, Link as AlignLeft, AlignCenter, AlignRight
} from 'lucide-react';
import { AuthContext } from '../../../../features/auth/auther';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { ToastContext } from '../../../../App/ToastContext';
function ArticleEditor() {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const { showHideToast } = useContext(ToastContext);
  const dataArticle = location.state?.articledata; // البيانات القادمة من صفحة الإدارة

  const [isFullscreen, setIsFullscreen] = useState(false);
  const editorRef = useRef(null);

  // الحالة الابتدائية (للإضافة)
  const [articleData, setArticleData] = useState({
    content_id: Math.floor(Math.random() * 10000), // توليد ID عشوائي مؤقت
    author_id: user?.id,
    category_id: "مقالة تكنلوجيا",
    title: '',
    description: '',
    content_type: 'ARTICLE',
    price: 20,
    img_path: "",
    status: 'DRAFT',
    created_at: new Date().toISOString().split('T')[0]
  });

  // معالجة البيانات القادمة من التعديل (تستخدم useEffect لمنع الـ Infinite Loop)
  useEffect(() => {
    if (dataArticle) {
      setArticleData({
        ...dataArticle,
        // نضمن أن الحقول ليست undefined لتجنب الأخطاء في الـ Input
        title: dataArticle.title || "",
        content_type: dataArticle.content_type || "ARTICLE",
        img_path: dataArticle.img_path || "",
        category_id: dataArticle.category_id || "مقالة تكنلوجيا",
        TextContent: dataArticle.TextContent || "",
        content: dataArticle.content || ""
      });
    }
  }, [dataArticle]);

  const [dataArticleeatils,SetDataArticleDeatils]=useState({
      id: Math.floor(Math.random() * 10000),
        content_id:articleData.content_id,
        body_html: "",
        pages_count: 320,
        
    })

  // أنماط التصميم
  const glassStyle = {
    background: "rgba(255, 255, 255, 0.25)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    borderRadius: "2.5rem",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.1)"
  };

  const neumorphicCardStyle = {
    background: "#E0E5EC",
    borderRadius: "2.5rem",
    boxShadow: "20px 20px 60px #becad9, -20px -20px 60px #ffffff",
    border: "none"
  };

  const neumorphicInputStyle = {
    background: "#E0E5EC",
    boxShadow: "inset 6px 6px 12px #b8c1cc, inset -6px -6px 12px #ffffff",
    border: "none",
    borderRadius: "1rem",
    width: "100%",
    padding: "1.2rem",
    outline: "none"
  };

  const handleEditorCommand = (command, value = null) => {
    document.execCommand(command, false, value);
    // تحديث المحتوى في الـ State عند التنسيق
    setArticleData(prev => ({ ...prev, content: editorRef.current.innerHTML }));
  };

const API_URL = "http://localhost:3000/contents";
const urlArticleDeatils="http://localhost:3000/articles_details"
  const AddArticleDeatils =async()=>{
 try{
      const res =await fetch(urlArticleDeatils,{
        method:"POST",
         headers: { "Content-Type": "application/json" },
         body:JSON.stringify(dataArticleeatils)
        
      })
       if (res.ok) {
        showHideToast("تم إنشاء الكتاب بنجاح");
      
      } else {
        alert("فشل الإرسال: تأكد أن السيرفر يعمل");
      }
    }catch (error) {
      console.error("خطأ في الاتصال:", error);
      alert("تعذر الوصول للسيرفر");
    }

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // تحديد النوع: إذا كان هناك ID فهو تعديل (PUT)، وإلا فهو إضافة (POST)
    const method = dataArticle ? "PUT" : "POST";
    const url = dataArticle ? `${API_URL}/${dataArticle.id}` : API_URL;

    try {
      const res = await fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(articleData)
      });

      if (res.ok) {
        showHideToast("تم إنشاء المقالة بنجاح");
         AddArticleDeatils()
        setTimeout(() => navigate('/ArticlesManager'), 2000);
      }
    }
    catch (error) {
      setMessage({ text: "حدث خطأ أثناء الاتصال بالسيرفر.", type: "error" });
    }
  };
  return (
    <div className={`min-h-screen bg-[#E0E5EC] pb-20 font-sans text-gray-800 ${isFullscreen ? 'fixed inset-0 z-[999] overflow-y-auto' : ''}`}>
      <div className={`max-w-6xl mx-auto pt-16 px-4 ${isFullscreen ? 'w-full' : ''}`} dir="rtl">

        {/* رأس الصفحة */}
        <div style={glassStyle} className="p-8 md:p-10 mb-12 flex flex-col md:flex-row items-start md:items-center justify-between">
          <div>
            <h1 className="text-4xl font-black tracking-tighter text-gray-900 mb-2 flex items-center gap-3">
              <span className="p-3 bg-[#319795]/10 rounded-2xl text-[#319795]">
                <Edit3 size={32} />
              </span>
              {dataArticle ? "تعديل المقال" : "كتابة مقال جديد"}
            </h1>
            <p className="text-gray-600 font-medium mr-16 italic">مرحباً {user?.name}، محتواك الإبداعي يبدأ من هنا.</p>
          </div>
          <button
            type="button"
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="mt-4 md:mt-0 px-6 py-3 bg-white/40 hover:bg-white/60 backdrop-blur-md border border-white/50 rounded-2xl flex items-center gap-2 font-bold transition-all active:scale-95"
          >
            {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
            <span>{isFullscreen ? 'تصغير' : 'ملء الشاشة'}</span>
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {/* تفاصيل المقال */}
          <div style={neumorphicCardStyle} className="p-8 md:p-12 mb-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-8 bg-[#319795] rounded-full"></div>
              <h2 className="text-2xl font-black text-gray-700">تفاصيل المقال الأساسية</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
              <div className="space-y-4">
                <label className="text-sm font-black text-gray-500 mr-2 uppercase tracking-widest">عنوان المقال *</label>
                <input
                  style={neumorphicInputStyle}
                  value={articleData.title || ""}
                  onChange={(e) => setArticleData({ ...articleData, title: e.target.value })}
                  type="text"
                  required
                  placeholder="أدخل عنواناً ملهماً..."
                />
              </div>
              <div className="space-y-4">
                <label className="text-sm font-black text-gray-500 mr-2 uppercase tracking-widest">نوع المحتوى *</label>
                <input
                  style={neumorphicInputStyle}
                  value={articleData.content_type || ""}
                  onChange={(e) => setArticleData({ ...articleData, content_type: e.target.value })}
                  type="text"
                  placeholder="ARTICLE, NEWS..."
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
              <div className="space-y-4">
                <label className="text-sm font-black text-gray-500 mr-2 uppercase tracking-widest">رابط صورة الغلاف *</label>
                <input
                  style={neumorphicInputStyle}
                  value={articleData.img_path || ""}
                  onChange={(e) => setArticleData({ ...articleData, img_path: e.target.value })}
                  type="text"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              <div className="space-y-4">
                <label className="text-sm font-black text-gray-500 mr-2 uppercase tracking-widest">التصنيف المختص *</label>
                <select
                  value={articleData.category_id}
                  onChange={(e) => setArticleData({ ...articleData, category_id: e.target.value })}
                  className="w-full p-5 bg-[#E0E5EC] border-none rounded-2xl outline-none focus:ring-2 ring-[#319795]/20 transition-all font-bold text-gray-600 appearance-none shadow-[inset_6px_6px_12px_#b8c1cc,inset_-6px_-6px_12px_#ffffff]"
                >
                  <option value="مقالة تكنلوجيا">مقالة تكنولوجيا</option>
                  <option value="مقالة اسلامية">مقالة إسلامية</option>
                  <option value="مقالة رياضة">مقالة رياضة</option>
                  <option value="مقالة عن الطبيعة">مقالة عن الطبيعة</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-sm font-black text-gray-500 mr-2 uppercase tracking-widest">ملخص سريع (Description)</label>
              <textarea
                style={neumorphicInputStyle}
                value={articleData.TextContent || ""}
                onChange={(e) => setArticleData({ ...articleData, TextContent: e.target.value })}
                rows="3"
                placeholder="اكتب نبذة مختصرة تجذب القراء..."
              ></textarea>
            </div>
          </div>

          {/* محرر النص الغني */}
          <div style={neumorphicCardStyle} className="p-8 md:p-12 mb-10">
            <div className="flex items-center gap-3 mb-8 text-[#319795]">
              <div className="w-2 h-8 bg-[#319795] rounded-full"></div>
              <h2 className="text-2xl font-black text-gray-700">محتوى المقال التفصيلي</h2>
            </div>

            <div className="flex flex-wrap gap-2 p-4 bg-white/30 rounded-2xl mb-6 shadow-inner border border-white/20">
              <EditorButton icon={<Bold size={18} />} onClick={() => handleEditorCommand('bold')} />
              <EditorButton icon={<Italic size={18} />} onClick={() => handleEditorCommand('italic')} />
              <EditorButton icon={<Underline size={18} />} onClick={() => handleEditorCommand('underline')} />
              <div className="w-[1px] h-8 bg-gray-300 mx-2"></div>
              <EditorButton icon={<List size={18} />} onClick={() => handleEditorCommand('insertUnorderedList')} />
              <EditorButton icon={<ListOrdered size={18} />} onClick={() => handleEditorCommand('insertOrderedList')} />
              <div className="w-[1px] h-8 bg-gray-300 mx-2"></div>
              <EditorButton icon={<AlignLeft size={18} />} onClick={() => handleEditorCommand('justifyLeft')} />
              <EditorButton icon={<AlignCenter size={18} />} onClick={() => handleEditorCommand('justifyCenter')} />
              <EditorButton icon={<AlignRight size={18} />} onClick={() => handleEditorCommand('justifyRight')} />
            </div>

            <div
              ref={editorRef}
              contentEditable={true}
              onInput={(e) => SetDataArticleDeatils({ ...dataArticleeatils, body_html: e.target.innerHTML })}
              className="w-full min-h-[400px] p-8 bg-white/80 rounded-3xl shadow-inner border border-gray-100 outline-none focus:ring-2 ring-[#319795]/20 text-xl leading-relaxed transition-all"
              dangerouslySetInnerHTML={{ __html: articleData.content }}
            ></div>
          </div>

          {/* أزرار التحكم والرسائل */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link to="/user-content-manager" className="flex items-center gap-2 text-gray-500 font-bold hover:text-rose-500 transition-colors">
              <ArrowLeft size={20} /> إلغاء وحذف التغييرات
            </Link>

            <div className="flex gap-4 w-full md:w-auto">
              <button 
                type="button" 
                onClick={() => setArticleData({...articleData, status: 'DRAFT'})}
                className="flex-1 md:flex-none px-10 py-4 bg-gray-400 text-white rounded-2xl font-black shadow-lg hover:bg-gray-500 transition-all active:scale-95"
              >
                حفظ مسودة
              </button>
              <button 
                type="submit" 
                onClick={() => setArticleData({...articleData, status: 'PUBLISHED'})}
                className="flex-1 md:flex-none px-10 py-4 bg-[#319795] text-white rounded-2xl font-black shadow-xl shadow-[#319795]/30 hover:bg-[#2a8381] transition-all active:scale-95"
              >
                {dataArticle ? "تحديث الآن" : "نشر المقال"}
              </button>
            </div>
          </div>

          
        </form>
      </div>
    </div>
  );
}

const EditorButton = ({ icon, onClick }) => (
  <button
    type="button"
    onMouseDown={(e) => { e.preventDefault(); onClick(); }}
    className="p-3 rounded-xl bg-white/50 text-gray-700 hover:bg-white hover:text-[#319795] hover:shadow-md transition-all active:scale-90"
  >
    {icon}
  </button>
);

export default ArticleEditor;