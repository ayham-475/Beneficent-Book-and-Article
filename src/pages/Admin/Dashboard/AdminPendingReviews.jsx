import React, { useState ,useContext} from 'react';
import Sidebar from './Sidebar';
import ReviewList from './ReviewList';
import ContentPreview from './ContentPreview';
import DecisionPanel from './DecisionPanel';
// import Hedder from './App/Public/Layout/Hedder';

const AdminPendingReviews = () => {
    const [ContentPreviewData,setContentPreviewData]=useState({});
  
  function ChangeContentPreviewData(data){
    setContentPreviewData(data)
  }
  return (
    <>
    
    <div className="min-h-screen  bg-[#0f0f0f] text-gray-200" dir="rtl">
      {/* السايدبار ثابت في مكانه */}
      <Sidebar />

      {/* المحتوى الرئيسي يتحرك بالكامل مع السكرول الطبيعي للمتصفح */}
      <main className="pr-[110px] pl-8 py-12 max-w-[1600px] mx-auto transition-all duration-500">
        
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          
         

          {/* منطقة العرض واتخاذ القرار - تتبع سكرول الصفحة */}
          <div className="flex-1 space-y-10">
            <ContentPreview  ContentPreviewData={ContentPreviewData} />
            
            {/* لوحة القرار تأتي في نهاية المقال بشكل جمالي */}
            <DecisionPanel />
          </div>
 {/* قائمة المراجعة - جانبية وثابتة مع الصفحة */}
          <div className="w-full lg:w-[400px] lg:sticky lg:top-12">
            <ReviewList ChangeContentPreviewData={ChangeContentPreviewData} />
          </div>
        </div>
      </main>
    </div>
    </>
  );
  
};
export default AdminPendingReviews;