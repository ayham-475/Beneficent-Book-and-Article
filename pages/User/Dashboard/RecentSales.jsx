import React from 'react';
import { ShoppingBag, ArrowUpRight, Clock, UserCheck, ExternalLink } from 'lucide-react';

const RecentSales = () => {
  // نفس بياناتك الأصلية بدون أي تغيير
  const salesData = [
    {
      id: "#INV-8862",
      title: "أساسيات الذكاء الاصطناعي",
      category: "كتاب رقمي",
      customer: "سارة محمد",
      price: "45.00",
      profit: "36.00",
      time: "منذ ساعتين",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=200&h=200&fit=crop",
      status: "تم التأكيد" 
    },
    {
      id: "#INV-8859",
      title: "دليل التصميم المعماري",
      category: "مقالة احترافية",
      customer: "خالد العتيبي",
      price: "12.00",
      profit: "10.00",
      time: "منذ 5 ساعات",
      image: "https://images.unsplash.com/photo-1503387762-592dee58c160?w=200&h=200&fit=crop",
      status: "تم التأكيد"
    },
    {
      id: "#INV-8850",
      title: "رواية مابعد الشمس",
      category: "كتاب رقمي",
      customer: "مريم علي",
      price: "25.00",
      profit: "20.00",
      time: "أمس",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=200&h=200&fit=crop",
      status: "تم التأكيد"
    },
    {
      id: "#INV-8840",
      title: "دليل الكاتب المحترف",
      category: "كتاب رقمي",
      customer: "فهد أحمد",
      price: "30.00",
      profit: "25.00",
      time: "قبل يومين",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=200",
      status: "تم التأكيد"
    }
  ];

  return (
    // التعديل هنا: استبدلنا mr-28 بـ هوامش متجاوبة mx-4 md:mr-28 لضمان العمل على الجوال
    <div className="bg-white/80 backdrop-blur-xl mx-4 md:mr-36   mb-10 rounded-[2rem] md:rounded-[3rem] p-4 md:p-8 border border-white shadow-[0_20px_50px_rgba(0,0,0,0.02)] h-[600px] md:h-[550px] flex flex-col transition-all duration-300">
      
      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      {/* Header القسم - متجاوب */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 md:mb-10 px-2 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-2 h-8 bg-[#319795] rounded-full"></div>
          <div>
            <h2 className="text-lg md:text-xl font-black text-[#1A202C]">آخر عمليات الحصاد</h2>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">تتبع مبيعاتك لحظة بلحظة</p>
          </div>
        </div>
        <button className="w-full sm:w-auto flex items-center justify-center gap-2 text-[#319795] font-black text-xs bg-[#E6FFFA] px-4 py-2.5 rounded-xl hover:bg-[#319795] hover:text-white transition-all duration-300">
          سجل المبيعات <ExternalLink size={14} />
        </button>
      </div>

      {/* قائمة المبيعات - السكرول المخفي */}
      <div className="flex-1 overflow-y-auto space-y-4 no-scrollbar pb-4">
        {salesData.map((sale, index) => (
          <div 
            key={index} 
            className="group flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 md:p-5 rounded-[1.5rem] md:rounded-[2rem] bg-white border border-gray-50 hover:border-[#319795]/20 hover:shadow-[0_15px_30px_rgba(49,151,149,0.05)] transition-all duration-500 cursor-pointer gap-4"
          >
            {/* الجزء الأيمن: الصورة والعنوان */}
            <div className="flex items-center gap-4 md:gap-5 w-full">
              <div className="relative shrink-0">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden border-2 border-white shadow-sm transition-transform group-hover:scale-105">
                  <img src={sale.image} alt={sale.title} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 md:w-6 md:h-6 bg-[#319795] text-white rounded-lg flex items-center justify-center shadow-md border-2 border-white scale-0 group-hover:scale-100 transition-transform">
                  <ShoppingBag size={10} />
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-black text-xs md:text-sm text-[#2D3748] mb-1 group-hover:text-[#319795] transition-colors truncate">{sale.title}</h3>
                <div className="flex flex-wrap items-center gap-2 md:gap-3">
                  <span className="flex items-center gap-1 text-[9px] md:text-[10px] font-bold text-gray-400 uppercase">
                    <Clock size={10} /> {sale.time}
                  </span>
                  <span className="hidden xs:block w-1 h-1 bg-gray-200 rounded-full"></span>
                  <span className="flex items-center gap-1 text-[9px] md:text-[10px] font-bold text-[#319795]">
                    <UserCheck size={10} /> {sale.customer}
                  </span>
                </div>
              </div>
            </div>

            {/* الجزء الأيسر: الربح والسعر - متوافق مع شاشات الهاتف */}
            <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4 md:gap-8 border-t sm:border-t-0 pt-3 sm:pt-0">
              <div className="block sm:hidden md:block">
                <p className="text-[9px] text-gray-300 font-bold uppercase mb-0.5">المبلغ</p>
                <p className="text-[10px] md:text-xs font-bold text-gray-500 tracking-tighter">{sale.price} SAR</p>
              </div>
              <div className="bg-[#F0FDFA] p-2 md:p-3 rounded-xl md:rounded-2xl border border-[#E6FFFA] text-center min-w-[80px] md:min-w-[100px] group-hover:bg-[#319795] transition-all">
                <p className="text-[8px] md:text-[9px] text-[#319795] font-black group-hover:text-white/80 uppercase">ربحك</p>
                <p className="text-sm md:text-lg font-black text-[#319795] group-hover:text-white tracking-tighter">+{sale.profit}</p>
              </div>
              <ArrowUpRight size={18} className="text-gray-200 group-hover:text-[#319795] transition-colors hidden sm:block" />
            </div>
          </div>
        ))}
      </div>

      {/* تلميح سفلي */}
      <div className="mt-auto pt-4 shrink-0">
        <div className="p-3 md:p-4 bg-[#F8FAFA] rounded-xl md:rounded-2xl border border-dashed border-gray-200 text-center">
          <p className="text-[9px] md:text-[11px] text-gray-400 font-medium">يتم تحديث هذه القائمة تلقائياً عند كل عملية شراء جديدة.</p>
        </div>
      </div>
    </div>
  );
};

export default RecentSales;