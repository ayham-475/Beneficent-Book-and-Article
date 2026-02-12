import React, { useState } from 'react';
import ReviewList from './ReviewList';
import ContentPreview from './ContentPreview';
import DecisionPanel from './DecisionPanel';

const AdminPendingReviews = () => {
  const [ContentPreviewData, setContentPreviewData] = useState({});

  function ChangeContentPreviewData(data) {
    setContentPreviewData(data);
    // في الموبايل، نريد السكرول أن يرتفع لأعلى عند اختيار مقال جديد
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-gray-200" dir="rtl">

      {/* padding-right يتغير حسب السايدبار، و padding-left يتغير للموبايل */}
      <main className="pr-0 md:pr-[110px] px-4 md:pl-10 py-6 md:py-10 transition-all duration-500">

        {/* عنوان الصفحة - متجاوب */}
        <div className="mb-8 px-2 md:px-0">
          <h1 className="text-2xl md:text-3xl font-black text-white">مراجعة المحتوى</h1>
          <p className="text-gray-500 text-[10px] md:text-xs mt-1 uppercase font-bold tracking-widest">Pending Approval Queue</p>
        </div>

        {/* الحاوية الرئيسية: عمودية في الموبايل، أفقية في الشاشات الكبيرة */}
        <div className="flex flex-col-reverse lg:flex-row gap-6 md:gap-10 items-start">

          {/* منطقة العرض: flex-1 تجعلها تأخذ المساحة الكبرى */}

          {/* القائمة الجانبية: في الموبايل تأخذ عرض كامل، في الكبير عرض ثابت ومتحرك مع السكرول */}
          <aside className="w-full lg:w-[380px] xl:w-[420px] lg:sticky lg:top-10 shrink-0 z-30">
            <ReviewList ChangeContentPreviewData={ChangeContentPreviewData} />
          </aside>
          <div className="w-full lg:flex-1 space-y-6 md:space-y-10">
            <ContentPreview ContentPreviewData={ContentPreviewData} />
            <DecisionPanel />
          </div>

        </div>
      </main>

    </div>
  );
};

export default AdminPendingReviews;