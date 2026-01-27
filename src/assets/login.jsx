import React, { useState } from 'react';
import { Mail, Lock, User, Eye, EyeOff, BookOpen, ChevronLeft } from 'lucide-react';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true); // للتبديل بين تسجيل الدخول والاشتراك
  const [showPassword, setShowPassword] = useState(false); // لإظهار/إخفاء كلمة المرور

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    // هنا ستكون منطقية إرسال البيانات (تسجيل الدخول أو الاشتراك)
    console.log(isLogin ? "بيانات تسجيل الدخول" : "بيانات الاشتراك");
    // يمكنك إضافة رسالة نجاح أو فشل هنا
  };

  return (
    <div className="min-h-screen bg-[#1A202C] text-[#E2E8F0] font-sans flex items-center justify-center p-6" dir="rtl">
      <div className="relative w-full max-w-md bg-[#2D3748]/70 backdrop-blur-xl rounded-3xl border border-[#2D3748]/50 shadow-2xl shadow-blue-900/40 p-10 transform transition-all duration-500 hover:scale-[1.01]">
        
        {/* Header with Icon and Title */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-16 h-16 bg-[#63B3ED]/20 border border-[#63B3ED]/50 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
            <BookOpen size={32} className="text-[#63B3ED]" />
          </div>
          <h2 className="text-4xl font-extrabold text-white drop-shadow-md">
            {isLogin ? "تسجيل الدخول" : "انضم للواحة"}
          </h2>
        </div>

        {/* Description */}
        <p className="text-center text-gray-400 mb-10 text-lg">
          {isLogin 
            ? "أهلاً بعودتك، أكمل رحلتك الإبداعية!" 
            : "ابدأ رحلتك ككاتب أو قارئ في واحة المعرفة."
          }
        </p>

        {/* Form */}
        <form onSubmit={handleAuthSubmit} className="space-y-6">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">البريد الإلكتروني</label>
            <div className="relative">
              <input
                type="email"
                id="email"
                placeholder="ادخل بريدك الإلكتروني"
                className="w-full pl-12 pr-4 py-3 bg-[#1A202C] border border-[#2D3748] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#63B3ED]/50 text-white placeholder-gray-500 transition-colors duration-300"
                required
              />
              <Mail size={20} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-gray-300 text-sm font-medium mb-2">كلمة المرور</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="ادخل كلمة المرور"
                className="w-full pl-12 pr-4 py-3 bg-[#1A202C] border border-[#2D3748] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#63B3ED]/50 text-white placeholder-gray-500 transition-colors duration-300"
                required
              />
              <Lock size={20} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#63B3ED] transition-colors duration-200"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Confirm Password (only for Sign Up) */}
          {!isLogin && (
            <div>
              <label htmlFor="confirmPassword" className="block text-gray-300 text-sm font-medium mb-2">تأكيد كلمة المرور</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="confirmPassword"
                  placeholder="أعد إدخال كلمة المرور"
                  className="w-full pl-12 pr-4 py-3 bg-[#1A202C] border border-[#2D3748] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#63B3ED]/50 text-white placeholder-gray-500 transition-colors duration-300"
                  required
                />
                <Lock size={20} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
              </div>
            </div>
          )}

          {/* Forgot Password Link (only for Login) */}
          {isLogin && (
            <div className="text-left text-sm">
              <a href="#" className="text-[#63B3ED] hover:underline transition-colors duration-200">نسيت كلمة المرور؟</a>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#63B3ED] text-white px-8 py-3 rounded-xl text-xl font-bold hover:bg-[#63B3ED]/90 transition-all duration-300 shadow-lg shadow-[#63B3ED]/0 transform active:scale-[0.98]"
          >
            {isLogin ? "تسجيل الدخول" : "إنشاء حساب"}
          </button>
        </form>

        {/* Toggle between Login and Sign Up */}
        <div className="mt-8 text-center text-gray-400 text-md">
          {isLogin ? (
            <span>ليس لديك حساب؟{" "}
              <button onClick={() => setIsLogin(false)} className="text-[#63B3ED] hover:underline transition-colors duration-200 font-medium">
                سجل الآن
              </button>
            </span>
          ) : (
            <span>لديك حساب بالفعل؟{" "}
              <button onClick={() => setIsLogin(true)} className="text-[#63edcf] hover:underline transition-colors duration-200 font-medium">
                سجل الدخول
              </button>
            </span>
          )}
        </div>

        {/* Back to Home Button (اختياري) */}
        <button className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2">
          <ChevronLeft size={20} className="rotate-180" />
          <span className="sr-only">العودة للخلف</span>
        </button>

      </div>
    </div>
  );
};

export default AuthPage;