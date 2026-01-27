import React from 'react';
import { DollarSign, BookOpen, Users, UploadCloud, TrendingUp, Settings, BarChart2, Briefcase, Bell, ChevronDown } from 'lucide-react';
const AuthorDashboard = () => {
  const authorName = "م. أحمد خالد"; // اسم الكاتب (سيأتي من قاعدة البيانات لاحقاً)
  const totalEarnings = 1240.50;
  const booksSold = 84;
  const readersCount = 3500;
  const publishedBooks = 12;
  const pendingReviews = 2;

  // دالة بسيطة لإنشاء تأثير توهج (يمكن تحسينها بـ CSS custom properties)
  const getGlowEffect = (color) => `shadow-md shadow-[${color}/30]`;

  return (
    <div className="min-h-screen bg-[#1A202C] text-[#E2E8F0] font-sans flex" dir="rtl">
      {/* Sidebar - القائمة الجانبية المضيئة */}
      <aside className="w-72 bg-[#1A202C] border-l border-[#2D3748] shadow-lg flex flex-col p-6">
        <div className="text-3xl font-extrabold text-[#63B3ED] border-b border-[#2D3748] pb-6 mb-8 text-center drop-shadow-md">
          مرصد الإبداع
        </div>
        <nav className="flex-1">
          <a href="#" className="flex items-center gap-4 py-4 px-6 rounded-xl hover:bg-[#2D3748] transition-all duration-300 text-lg group">
            <BarChart2 size={24} className="text-[#63B3ED] group-hover:text-[#F6AD55] transition-colors" />
            <span className="font-semibold group-hover:text-white">الرئيسية (الإحصائيات)</span>
          </a>
          <a href="#" className="flex items-center gap-4 py-4 px-6 rounded-xl bg-[#2D3748] border-r-4 border-[#63B3ED] transition-all duration-300 text-lg group">
            <BookOpen size={24} className="text-[#63B3ED] group-hover:text-[#F6AD55] transition-colors" />
            <span className="font-semibold text-white">كتبي ومقالاتي</span>
          </a>
          <a href="#" className="flex items-center gap-4 py-4 px-6 rounded-xl hover:bg-[#2D3748] transition-all duration-300 text-lg group">
            <DollarSign size={24} className="text-[#63B3ED] group-hover:text-[#F6AD55] transition-colors" />
            <span className="font-semibold group-hover:text-white">المحفظة والسحب</span>
          </a>
          <a href="#" className="flex items-center gap-4 py-4 px-6 rounded-xl hover:bg-[#2D3748] transition-all duration-300 text-lg group">
            <Settings size={24} className="text-[#63B3ED] group-hover:text-[#F6AD55] transition-colors" />
            <span className="font-semibold group-hover:text-white">الإعدادات</span>
          </a>
        </nav>
        <div className="mt-auto pt-6 border-t border-[#2D3748] text-center">
          <a href="#" className="text-sm text-gray-400 hover:text-[#63B3ED] transition">مساعدة ودعم</a>
        </div>
      </aside>

      {/* Main Content - المحتوى الرئيسي */}
      <main className="flex-1 p-10">
        {/* Header Bar */}
        <header className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-extrabold text-white drop-shadow-lg">أهلاً بك، {authorName}!</h1>
          <div className="flex items-center gap-6">
            <button className="relative text-[#E2E8F0] hover:text-[#63B3ED] transition">
              <Bell size={24} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-ping-slow">
                3
              </span>
            </button>
            <div className="flex items-center gap-3 bg-[#2D3748] px-4 py-2 rounded-full cursor-pointer hover:bg-[#2D3748]/70 transition">
              <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center text-xl font-bold">A</div>
              <span className="text-lg font-semibold">{authorName.split(' ')[1]}</span>
              <ChevronDown size={18} className="text-gray-400" />
            </div>
          </div>
        </header>

        {/* Stats Cards - بطاقات الإحصائيات الفاخرة */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* إجمالي الأرباح */}
          <div className={`relative bg-[#2D3748]/70 backdrop-blur-sm p-8 rounded-3xl border border-[#2D3748]/50 ${getGlowEffect('#48BB78')} transition-all duration-300 hover:scale-[1.02] cursor-pointer`}>
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-400 text-sm font-medium">إجمالي الأرباح</p>
              <div className="bg-[#48BB78]/20 p-3 rounded-xl text-[#48BB78]"><DollarSign size={24}/></div>
            </div>
            <h3 className="text-4xl font-extrabold text-white mb-2">${totalEarnings.toFixed(2)}</h3>
            <p className="text-[#48BB78] text-sm mt-2 flex items-center gap-1"><TrendingUp size={14}/> +12% هذا الشهر</p>
            <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-[#48BB78] transition-all duration-300"></div> {/* تأثير الحدود */}
          </div>

          {/* الكتب المباعة */}
          <div className={`relative bg-[#2D3748]/70 backdrop-blur-sm p-8 rounded-3xl border border-[#2D3748]/50 ${getGlowEffect('#63B3ED')} transition-all duration-300 hover:scale-[1.02] cursor-pointer`}>
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-400 text-sm font-medium">الكتب المباعة</p>
              <div className="bg-[#63B3ED]/20 p-3 rounded-xl text-[#63B3ED]"><BookOpen size={24}/></div>
            </div>
            <h3 className="text-4xl font-extrabold text-white mb-2">{booksSold}</h3>
            <p className="text-[#63B3ED] text-sm mt-2">من أصل {publishedBooks} كتاب منشور</p>
            <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-[#63B3ED] transition-all duration-300"></div>
          </div>

          {/* عدد القراء */}
          <div className={`relative bg-[#2D3748]/70 backdrop-blur-sm p-8 rounded-3xl border border-[#2D3748]/50 ${getGlowEffect('#F6AD55')} transition-all duration-300 hover:scale-[1.02] cursor-pointer`}>
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-400 text-sm font-medium">عدد القراء</p>
              <div className="bg-[#F6AD55]/20 p-3 rounded-xl text-[#F6AD55]"><Users size={24}/></div>
            </div>
            <h3 className="text-4xl font-extrabold text-white mb-2">{readersCount}</h3>
            <p className="text-[#F6AD55] text-sm mt-2">زيادة في التفاعل هذا الأسبوع</p>
            <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-[#F6AD55] transition-all duration-300"></div>
          </div>
        </div>

        {/* Latest Activities / Recent Sales - آخر النشاطات والمبيعات */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-[#2D3748]/70 backdrop-blur-sm rounded-3xl shadow-lg border border-[#2D3748]/50 p-8">
            <h2 className="text-2xl font-bold mb-8 text-white">آخر المبيعات</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-right table-auto">
                <thead>
                  <tr className="text-gray-500 text-sm border-b border-[#2D3748]">
                    <th className="pb-4 pr-2 font-medium">الكتاب</th>
                    <th className="pb-4 font-medium">التاريخ</th>
                    <th className="pb-4 font-medium">السعر</th>
                    <th className="pb-4 pl-2 font-medium text-[#48BB78]">ربحك</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300 divide-y divide-[#2D3748]">
                  <tr className="hover:bg-[#2D3748] transition-colors duration-200">
                    <td className="py-4 pr-2 font-semibold text-white">أساسيات الذكاء الاصطناعي</td>
                    <td className="py-4">منذ ساعتين</td>
                    <td className="py-4 font-bold text-[#F6AD55]">$20.00</td>
                    <td className="py-4 pl-2 font-bold text-[#48BB78]">$16.00</td>
                  </tr>
                  <tr className="hover:bg-[#2D3748] transition-colors duration-200">
                    <td className="py-4 pr-2 font-semibold text-white">رواية مابعد الشمس</td>
                    <td className="py-4">أمس</td>
                    <td className="py-4 font-bold text-[#F6AD55]">$15.00</td>
                    <td className="py-4 pl-2 font-bold text-[#48BB78]">$12.00</td>
                  </tr>
                  <tr className="hover:bg-[#2D3748] transition-colors duration-200">
                    <td className="py-4 pr-2 font-semibold text-white">دليل الكاتب المحترف</td>
                    <td className="py-4">2026/01/20</td>
                    <td className="py-4 font-bold text-[#F6AD55]">$25.00</td>
                    <td className="py-4 pl-2 font-bold text-[#48BB78]">$20.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Pending Reviews / Quick Actions - المحتوى قيد المراجعة / إجراءات سريعة */}
          <div className="bg-[#2D3748]/70 backdrop-blur-sm rounded-3xl shadow-lg border border-[#2D3748]/50 p-8">
            <h2 className="text-2xl font-bold mb-8 text-white">المحتوى قيد المراجعة</h2>
            {pendingReviews > 0 ? (
              <div className="space-y-6">
                <div className="flex items-center gap-4 bg-[#1A202C] p-4 rounded-xl border border-gray-700">
                  <BookOpen size={24} className="text-[#F6AD55]" />
                  <div>
                    <p className="font-semibold text-white">كتاب: تاريخ الحضارات القديمة</p>
                    <p className="text-gray-400 text-sm">تم الرفع بتاريخ: 2026/01/22</p>
                  </div>
                  <button className="mr-auto bg-[#63B3ED] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#63B3ED]/90 transition">
                    تفاصيل
                  </button>
                </div>
                <div className="flex items-center gap-4 bg-[#1A202C] p-4 rounded-xl border border-gray-700">
                  <Briefcase size={24} className="text-[#63B3ED]" />
                  <div>
                    <p className="font-semibold text-white">مقال: مستقبل العملات الرقمية</p>
                    <p className="text-gray-400 text-sm">تم الرفع بتاريخ: 2026/01/21</p>
                  </div>
                  <button className="mr-auto bg-[#63B3ED] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#63B3ED]/90 transition">
                    تفاصيل
                  </button>
                </div>
              </div>
            ) : (
              <p className="text-gray-400 text-center py-10">لا يوجد محتوى قيد المراجعة حالياً. ابدأ بالنشر!</p>
            )}
            <button className="mt-8 w-full bg-[#63B3ED] text-white px-6 py-3 rounded-xl flex items-center justify-center gap-3 hover:bg-[#63B3ED]/90 shadow-lg shadow-[#63B3ED]/30 transition transform hover:-translate-y-1">
              <UploadCloud size={24} /> نشر محتوى جديد
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AuthorDashboard;