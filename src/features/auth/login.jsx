import React, { useState,useContext } from 'react';
import { Mail, Lock, User, Eye, EyeOff, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './auther';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
const { login } = useContext(AuthContext);
  // States للبيانات
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState({ text: "", type: "" });

  // الرابط العالمي الخاص بك على MockAPI
  // const API_URL = "https://698292229c3efeb892a2ab23.mockapi.io/api/v1/users";
  const API_URL = "http://localhost:3000/users";

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  // 1. منطق تسجيل الدخول (جلب البيانات)
  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage({ text: "جاري التحقق من البيانات...", type: "info" });

    try {
      const res = await fetch(API_URL);
      const users = await res.json();

      // البحث عن مستخدم يطابق الإيميل وكلمة المرور
      const user = users.find(u => u.email === email && u.password === password);

      if (user) {
        setMessage({ text: `أهلاً بعودتك يا ${user.profile.name}!`, type: "success" });
        localStorage.setItem("user", JSON.stringify(user));

        setTimeout(() => {
          if (user.profile.type === "admin") {
              const mockToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...";

             login(user, mockToken);
            navigate("/dashboard");
           
          } else {
             const mockToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...";

             login(user, mockToken);
            navigate("/dashboardUser");
          }
        }, 1500);
      } else {
        setMessage({ text: "الإيميل أو كلمة المرور غير صحيحة.", type: "error" });
      }
    } catch (error) {
      setMessage({ text: "فشل الاتصال بالسيرفر العالمي.", type: "error" });
    }
  };

  // 2. منطق تسجيل حساب جديد (إرسال بيانات POST)
  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage({ text: "كلمتا المرور غير متطابقتين!", type: "error" });
      return;
    }

    setMessage({ text: "جاري إنشاء الحساب...", type: "info" });

    try {
      // أولاً: التحقق إذا كان الإيميل موجوداً مسبقاً
      const checkRes = await fetch(API_URL);
      const users = await checkRes.json();
      const isExist = users.some(u => u.email === email);

      if (isExist) {
        setMessage({ text: "هذا البريد الإلكتروني مسجل مسبقاً.", type: "error" });
        return;
      }

      // ثانياً: إضافة المستخدم الجديد (POST)
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
          profile: { 
            name, 
            type: "user" // افتراضياً يكون مستخدم عادي
          },
          createdAt: new Date().toISOString()
        })
      });

      if (res.ok) {
        setMessage({ text: "تم إنشاء الحساب بنجاح! يمكنك الدخول الآن.", type: "success" });
        setTimeout(() => {
          setIsLogin(true);
          setName(""); setEmail(""); setPassword(""); setConfirmPassword("");
          setMessage({ text: "", type: "" });
        }, 2000);
      }
    } catch (error) {
      setMessage({ text: "حدث خطأ أثناء الاتصال بالسيرفر.", type: "error" });
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-[#E2E8F0] font-sans flex items-center justify-center p-6 relative overflow-hidden" dir="rtl">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full" />

      <div className="relative w-full max-w-md bg-[#1e293b]/80 backdrop-blur-2xl rounded-[2.5rem] border border-white/10 shadow-2xl p-10">

        <div className="text-center mb-10">
          <div className="inline-flex w-20 h-20 bg-blue-500/10 border border-blue-500/30 rounded-3xl items-center justify-center mb-6 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
            <BookOpen size={40} className="text-blue-400" />
          </div>
          <h2 className="text-3xl font-black text-white mb-2 tracking-tight">
            {isLogin ? "تسجيل الدخول" : "إنشاء حساب جديد"}
          </h2>
          <p className="text-gray-400 text-sm font-medium">
            {isLogin ? "مرحباً بك في منصة النخبة الثقافية" : "ابدأ رحلتك المعرفية معنا اليوم"}
          </p>
        </div>

        <form onSubmit={isLogin ? handleLogin : handleRegister} className="space-y-5">
          {!isLogin && (
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 mr-2">الاسم الكامل</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="مثال: أحمد محمد"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pr-12 pl-4 py-3.5 bg-[#0f172a]/50 border border-white/5 rounded-2xl focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-sm"
                  required
                />
                <User size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
              </div>
            </div>
          )}

          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 mr-2">البريد الإلكتروني</label>
            <div className="relative">
              <input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pr-12 pl-4 py-3.5 bg-[#0f172a]/50 border border-white/5 rounded-2xl focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-sm"
                required
              />
              <Mail size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 mr-2">كلمة المرور</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pr-12 pl-12 py-3.5 bg-[#0f172a]/50 border border-white/5 rounded-2xl focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-sm"
                required
              />
              <Lock size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-400 transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {!isLogin && (
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 mr-2">تأكيد كلمة المرور</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="أعد كتابة كلمة المرور"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full pr-12 pl-4 py-3.5 bg-[#0f172a]/50 border border-white/5 rounded-2xl focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-sm"
                  required
                />
                <Lock size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-lg shadow-xl shadow-blue-600/20 transition-all active:scale-[0.98] mt-4"
          >
            {isLogin ? "دخول" : "إنشاء الحساب"}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm font-medium">
            {isLogin ? "لا تملك حساباً بعد؟" : "لديك حساب بالفعل؟"}
            <button
              onClick={() => { setIsLogin(!isLogin); setMessage({ text: "", type: "" }); }}
              className="mr-2 text-blue-400 hover:text-blue-300 font-black border-b border-blue-400/30 pb-0.5"
            >
              {isLogin ? "سجل الآن" : "سجل دخولك"}
            </button>
          </p>
        </div>

        {message.text && (
          <div className={`mt-6 p-4 rounded-2xl text-center text-xs font-bold ${
              message.type === "error" ? "bg-red-500/10 text-red-400 border border-red-500/20" :
              message.type === "success" ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" :
              "bg-blue-500/10 text-blue-400 border border-blue-500/20"
            }`}>
            {message.text}
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthPage;