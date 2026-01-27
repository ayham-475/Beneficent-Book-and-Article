import React from 'react'
import { BookOpen } from 'lucide-react';

function Fotter() {
  return (
    <div>
            {/* Footer */}
      <footer className="bg-[#2D3748] text-gray-400 py-12 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <BookOpen className="text-[#0A7D75]" size={28} />
            <span className="text-3xl font-bold text-white"> اليعري للأستثمار</span>
          </div>
          <p className="text-sm">&copy; {new Date().getFullYear()}  اليعري. جميع الحقوق محفوظة.</p>
          <div className="flex justify-center gap-6 mt-6">
            <a href="#" className="hover:text-white transition">سياسة الخصوصية</a>
            <a href="#" className="hover:text-white transition">شروط الاستخدام</a>
            <a href="#" className="hover:text-white transition">اتصل بنا</a>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default Fotter
