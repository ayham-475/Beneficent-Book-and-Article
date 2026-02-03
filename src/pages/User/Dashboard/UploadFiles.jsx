import React from 'react'
import { 
  UploadCloud
} from 'lucide-react';
import { Link } from 'react-router-dom';
function UploadFiles() {
  return (
    <div className='w-160   m-auto' dir='rtl'>

      <div className="animate-in zoom-in-95 duration-500 text-center">
            <div className="border-4 h-120 border-dashed border-[#E6FFFA] rounded-[3rem] p-16 bg-[#F0FDFA]/30 group hover:border-[#319795]/30 transition-all cursor-pointer">
              <div className="w-24 h-24 bg-white rounded-[2.5rem] shadow-sm flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500">
                <UploadCloud size={48} className="text-[#319795]" />
              </div>
              <h3 className="text-2xl font-black text-gray-800 italic">اسحب الملف هنا</h3>
              <p className="text-gray-400 font-bold mt-2">أو انقر لاختيار الملف من جهازك</p>
              <p className="text-[10px] text-[#319795] font-black mt-4 uppercase tracking-[0.2em]">أقصى حجم للملف: 50 ميجابايت</p>
            </div>

            <div className="flex justify-between mt-10">
                <Link to="/AddDataContent"  >
              <button onClick={() => setStep(2)} className="text-gray-400 font-black hover:text-[#319795]">العودة للتعديل</button>
              </Link>
              <button className="bg-gradient-to-r from-[#319795] to-[#4FD1C5] text-green-700 px-12 py-5 rounded-[2rem] font-black shadow-xl shadow-[#319795]/20 hover:scale-105 transition-all">
                اعتماد ونشر العمل الآن
              </button>
            </div>
          </div>
    </div>
  )
}

export default UploadFiles
