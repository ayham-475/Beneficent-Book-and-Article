import React from 'react';
import Sidebar from '../Dashboard/Sidebar';// السايدبار الخاص بك
import UserCard from './UserIdentityCard';
import UserHeader from './UsersManager';

const UsersManagement = () => {
  const usersData = [
    { name: "عبدالله اليافعي", email: "abdullah@elite.com", role: "Main Admin", status: "online", joinDate: "2023/10/12", avatar: "https://i.pravatar.cc/150?u=1" },
    { name: "سارة المنصوري", email: "sara.m@elite.com", role: "Content Editor", status: "offline", joinDate: "2023/11/05", avatar: "https://i.pravatar.cc/150?u=2" },
    { name: "ياسر القحطاني", email: "yasser@elite.com", role: "VIP User", status: "online", joinDate: "2024/01/20", avatar: "https://i.pravatar.cc/150?u=3" },
    { name: "نورة العتيبي", email: "noura.a@elite.com", role: "Moderator", status: "online", joinDate: "2023/09/15", avatar: "https://i.pravatar.cc/150?u=4" },
    { name: "خالد الشمري", email: "khalid@elite.com", role: "Standard User", status: "offline", joinDate: "2024/02/01", avatar: "https://i.pravatar.cc/150?u=5" },
    { name: "ريم الدوسري", email: "reem.d@elite.com", role: "Premium User", status: "online", joinDate: "2023/12/10", avatar: "https://i.pravatar.cc/150?u=6" },
  ];

  return (
    <div className="min-h-screen bg-[#0d0d0d] flex text-right" dir="rtl">
      <Sidebar />
      <main className="flex-1 pr-[110px] pl-10 py-12">
        <UserHeader />
        
        {/* شبكة البطاقات (The Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {usersData.map((user, index) => (
            <UserCard key={index} user={user} index={index} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default UsersManagement;