import React, { useState, useRef, useContext } from 'react';
import {
  ArrowLeft, Edit3, Save, UploadCloud,
  Maximize2, Minimize2, Text,
  Bold, Italic, Underline, List, ListOrdered, Link as LinkIcon, Image, AlignLeft, AlignCenter, AlignRight
} from 'lucide-react';
import { AuthContext } from '../../../../features/auth/auther';

import { Link } from 'react-router-dom';
function ArticleEditor() {
  const [message, setMessage] = useState({ text: "", type: "" });
    const {user }=useContext(AuthContext);

  const numID =104;
  const [articleData, setArticleData] = useState({
    content_id: numID+1,
    author_id: user.id,
    category_id: 1,
    title: '',
    description: '',
    content_type: '',
    price: 20,
    TextContent: "",
    img_path: "",
    status: 'DRAFT',
    created_at: new Date().toISOString().split('T')[0],
    id: ""
  });


  const [isFullscreen, setIsFullscreen] = useState(false);
  const editorRef = useRef(null);
  // أنماط التصميم المدمجة لضمان الظهور (Inline Styles)
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
    setArticleData(prev => ({ ...prev, content: editorRef.current.innerHTML }));
  };

  const API_URL = "https://698292229c3efeb892a2ab23.mockapi.io/api/v1/contents";

  const AddArticle = async (e) => {
    console.log("articl  ", articleData);

    e.preventDefault();
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          articleData
        )
      })
      if (res.ok) {
        setMessage({ text: "تم إنشاء المقالة بنجاح. ", type: "success" });
        setTimeout(() => {
          setMessage({ text: "", type: "" });
        }, 2000);
      }
    } catch (error) {
      setMessage({ text: "حدث خطأ أثناء الاتصال بالسيرفر.", type: "error" });
    }
  }

  return (
    <div className={`min-h-screen bg-[#E0E5EC] pb-20 font-sans text-gray-800 ${isFullscreen ? 'fixed inset-0 z-[999] overflow-y-auto' : ''}`}>
      <div className={`max-w-6xl mx-auto pt-16 px-4 ${isFullscreen ? 'w-full' : ''}`} dir="rtl">

        {/* رأس الصفحة الزجاجي الفاخر */}
        <div style={glassStyle} className="p-8 md:p-10 mb-12 flex flex-col md:flex-row items-start md:items-center justify-between">
          <div>
            <h1 className="text-4xl font-black tracking-tighter text-gray-900 mb-2 flex items-center gap-3">
              <span className="p-3 bg-[#319795]/10 rounded-2xl text-[#319795]">
                <Edit3 size={32} />
              </span>
              كتابة مقال جديد
            </h1>
            <p className="text-gray-600 font-medium mr-16">ابدأ في صياغة أفكارك ونشرها للعالم. هنا مساحتك للإبداع.</p>
          </div>
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="mt-4 md:mt-0 px-6 py-3 bg-white/40 hover:bg-white/60 backdrop-blur-md border border-white/50 rounded-2xl flex items-center gap-2 font-bold transition-all active:scale-95"
          >
            {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
            <span>{isFullscreen ? 'تصغير' : 'ملء الشاشة'}</span>
          </button>
        </div>
        <form onSubmit={AddArticle} action="">
          {/* حقول المعلومات (Neumorphism) */}
          <div style={neumorphicCardStyle} className="p-8 md:p-12 mb-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-8 bg-[#319795] rounded-full"></div>
              <h2 className="text-2xl font-black text-gray-700">تفاصيل المقال</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
              <div className="space-y-4">
                <label className="text-sm font-black text-gray-500 mr-2">عنوان المقال *</label>
                <input
                  style={neumorphicInputStyle}
                  value={articleData.title}
                  onChange={(e) => setArticleData({ ...articleData, title: e.target.value })}
                  type="text"
                  placeholder="أدخل عنواناً ملهماً..."
                />
              </div>
              <div className="space-y-4">
                <label className="text-sm font-black text-gray-500 mr-2"> نوع المحتوى *</label>
                <input
                  style={neumorphicInputStyle}
                  value={articleData.content_type}
                  onChange={(e) => setArticleData({ ...articleData,content_type: e.target.value })}
                  type="text"
                   placeholder="أدخل نوع المحتوى ..."
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
              <div className="space-y-4">
                <label className="text-sm font-black text-gray-500 mr-2">رابط الصوره *</label>
                <input
                  style={neumorphicInputStyle}
                  value={articleData.img_path}
                  onChange={(e) => setArticleData({ ...articleData, img_path: e.target.value })}
                  type="text"
                  placeholder="أدخل عنواناً ملهماً..."
                />
              </div>
              
          
              <div className="space-y-4">
                <label className="text-sm font-black text-gray-500 mr-2"> نوع الفئة *</label>
                <select 
                value={articleData.category_id}
                onChange={(e) => setArticleData({...articleData, category_id: e.target.value})}
                className="w-full p-5 bg-[#F8FAFB] border-2 border-transparent rounded-2xl outline-none focus:border-blue-400 transition-all font-bold text-gray-600 appearance-none shadow-sm"
              >
                <option value="مقالة تكنلوجيا </">مقالة تكنلوجيا </option>
                <option value="مقالة اسلامية">مقالة اسلامية</option>
                <option value="مقالة رياضة">مقالة رياضة</option>
                <option value="مقالة عن الطبيعة ">مقالة عن الطبيعة </option>
              </select>
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-sm font-black text-gray-500 mr-2">وصف قصير/ملخص</label>
              <textarea
                style={neumorphicInputStyle}
                value={articleData.TextContent}
                onChange={(e) => setArticleData({ ...articleData, TextContent: e.target.value })}
                rows="3"
                placeholder="عن ماذا يتحدث هذا المقال؟"
                className="resiz"
              ></textarea>
            </div>
          </div>

          {/* محرر النصوص الاحترافي */}
          <div style={neumorphicCardStyle} className="p-8 md:p-12 mb-10">
            <div className="flex items-center gap-3 mb-8 text-purple-600">
              <div className="w-2 h-8 bg-purple-500 rounded-full"></div>
              <h2 className="text-2xl font-black">محتوى المقال</h2>
            </div>

            {/* شريط الأدوات */}
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

            {/* المحرر */}
            <div
              ref={editorRef}
              contentEditable={true}
              onInput={(e) => setArticleData({ ...articleData, content: e.target.innerHTML })}
              className="w-full min-h-[400px] p-8 bg-white/80 rounded-3xl shadow-inner border border-gray-100 outline-none focus:ring-2 ring-[#319795]/20 text-xl leading-relaxed transition-all"
              dangerouslySetInnerHTML={{ __html: articleData.content }}
            >
            </div>
          </div>

          {/* الأزرار النهائية */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link to="/user-content-manager">
              <button className="flex items-center gap-2 text-gray-500 font-bold hover:text-gray-800 transition-colors">
                <ArrowLeft size={20} /> إلغاء وحذف
              </button>
            </Link>

            <div className="flex gap-4 w-full md:w-auto">
              <button className="flex-1 md:flex-none px-10 py-4 bg-gray-800 text-white rounded-2xl font-bold shadow-xl hover:bg-black transition-all active:scale-95">
                حفظ كمسودة
              </button>
              <button type='submit' className="flex-1 md:flex-none px-10 py-4 bg-[#319795] text-white rounded-2xl font-bold shadow-lg shadow-[#319795]/30 hover:shadow-[#319795]/50 transition-all active:scale-95">
                نشر الآن
              </button>
            </div>
            {message.text && (
              <div className={`mt-6 p-4 rounded-2xl text-center text-xs font-bold ${message.type === "error" ? "bg-red-500/10 text-red-400 border border-red-500/20" :
                  message.type === "success" ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" :
                    "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                }`}>
                {message.text}
              </div>
            )}
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