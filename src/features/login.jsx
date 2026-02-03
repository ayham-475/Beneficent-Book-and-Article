import React, { useState } from 'react';
import { Mail, Lock, User, Eye, EyeOff, BookOpen, ChevronRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  // States للبيانات
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState({ text: "", type: "" }); // نوع الرسالة للتمييز بين الخطأ والنجاح

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  // 1. منطق تسجيل الدخول
  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage({ text: "جاري التحقق...", type: "info" });

    try {
      const res = await fetch(`http://localhost:3000/users?email=${email}`);
      const users = await res.json();
      console.log()
      if (users.length > 0) {
        const user = users[0];
        if (user.password === password) {
          setMessage({ text: `أهلاً بعودتك يا ${user.profile.name}! يتم توجيهك الآن...`, type: "success" });
          // داخل handleLogin
            setMessage({ text: "تم تسجيل الدخول بنجاح!", type: "success" });
            // حفظ البيانات (اختياري)
            localStorage.setItem("user", JSON.stringify(user));

            // التوجيه لصفحة المدير أو الصفحة الرئيسية بعد ثانية واحدة
            setTimeout(() => {
              if (user.profile.type === "admin") {
                navigate("/dashboard"); // يذهب لصفحة المدير
              } else {
                navigate("/dashboardUser"); // يذهب لصفحة المستخدم
              }
            }, 1000);

        } else {
          setMessage({ text: "كلمة المرور غير صحيحة، حاول مجدداً.", type: "error" });
        }
      } else {
        setMessage({ text: "هذا البريد الإلكتروني غير مسجل.", type: "error" });
      }
    } catch (error) {
      setMessage({ text: "فشل الاتصال بالخادم. تأكد من تشغيل json-server.", type: "error" });
    }
  };
  // 2. منطق تسجيل حساب جديد
  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage({ text: "كلمتا المرور غير متطابقتين!", type: "error" });
      return;
    }

    try {
      const check = await fetch(`http://localhost:3000/users?email=${email}`);
      const existing = await check.json();
      if (existing.length > 0) {
        setMessage({ text: "البريد الإلكتروني مستخدم بالفعل.", type: "error" });
        return;
      }
      const res = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
          profile: { name, type: "user" },
          createdAt: new Date().toISOString()
        })
      });

      if (res.ok) {
        setMessage({ text: "تم إنشاء الحساب بنجاح! يمكنك الدخول الآن.", type: "success" });
        setIsLogin(true);
        setName(""); setEmail(""); setPassword(""); setConfirmPassword("");
      }
    } catch (error) {
      setMessage({ text: "حدث خطأ أثناء التسجيل، حاول لاحقاً.", type: "error" });
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-[#E2E8F0] font-sans flex items-center justify-center p-6 relative overflow-hidden" dir="rtl">

      {/* خلفية جمالية (توهج نيون خلف النموذج) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full" />

      <div className="relative w-full max-w-md bg-[#1e293b]/80 backdrop-blur-2xl rounded-[2.5rem] border border-white/10 shadow-2xl p-10">

        {/* Header */}
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

        {/* Form */}
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

          {isLogin && (
            <div className="text-left">
              <button type="button" className="text-xs text-blue-400 hover:text-blue-300 font-bold transition-colors">
                نسيت كلمة المرور؟
              </button>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-lg shadow-xl shadow-blue-600/20 transition-all active:scale-[0.98] mt-4"
          >
            {isLogin ? "دخول" : "إنشاء الحساب"}
          </button>
        </form>

        {/* Footer Toggle */}
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

        {/* Feedback Message */}
        {message.text && (
          <div className={`mt-6 p-4 rounded-2xl text-center text-xs font-bold animate-bounce ${message.type === "error" ? "bg-red-500/10 text-red-400 border border-red-500/20" :
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