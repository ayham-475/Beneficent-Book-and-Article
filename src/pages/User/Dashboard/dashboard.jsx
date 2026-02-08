import React from 'react';
import { DollarSign, BookOpen, Users, UploadCloud, TrendingUp, Settings, BarChart2, Briefcase, Bell, ChevronDown } from 'lucide-react';
import Sidebar from './SlideBar';
import TopHeader from './TopHeader';
import UploadContent from './UploadContent';
import StatsGrid from './StatsGrid';
import RecentSales from './RecentSales';
import Footer from '../../../App/Public/Layout/Fotter';
const AuthorDashboard = () => {
  

  return (
    <div className="min-h-screen bg-[#EDF2F7] text-[#2D3748] font-sans flex" dir="rtl">

      {/* Sidebar - الألوان مستوحاة من قوائم التصميم الحديثة الهادئة */}
      <Sidebar />
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Header - أبيض بارز بظلال ناعمة */}
        <TopHeader />
        {/* Stats Cards - الألوان المائية تماماً كالصورة */}
        <StatsGrid />
        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* جدول المبيعات */}
          <RecentSales />

          {/* إجراء سريع */}
          <UploadContent />
         <Footer />
        </div>
      </main>
    </div>
  );
};

export default AuthorDashboard;