import React from 'react'
import { useState } from 'react';
import { 
   Image as ImageIcon, 
 ArrowLeft, ArrowRight
} from 'lucide-react';
import Hedder from '../../../App/Public/Layout/Hedder';
import { Link } from 'react-router-dom';
function AddDataContent() {
const [ContentData,SetContentData]=useState({
content_id:1,author_id:3,category_id:4,title:"",description:"",content_type:"",
price:"",file_path:"",preview_path:"",status:"",created_at:"",id:""
})
 const  handlAddContent=async(e)=>{
    console.log("ContentData :",ContentData)

    e.preventDefault();
    try {
    const res = await fetch("http://localhost:3000/contents",{
        method:"POST",
        headers: { "Content-Type": "application/json" },
        body:JSON.stringify(
          ContentData
        )
    })
    if (res.ok) {
console.log("success")
      }
    }catch{
      
    }
 }
  return (
    <>
    <Hedder />
     {/* "content_id": 101,
      "author_id": 1,
      "category_id": 1,
      "title": "دليل احتراف React.js للمبتدئين",
      "description": "كتاب رقمي شامل يشرح بناء تطبيقات الويب الحديثة باستخدام ريأكت من الصفر حتى الاحتراف.",
      "content_type": "BOOK",
      "price": 49.99,
      "file_path": "/secure/downloads/react_full_guide.pdf",
      "preview_path": "/public/previews/react_sample.pdf",
      "status": "APPROVED",
      "created_at": "2026-01-10T08:30:00Z",
      "id": "6ea4" */}
    <div className='container  ml-10' dir="rtl">
        <h1></h1>
       <div className="animate-in fade-in slide-in-from-left-8 duration-500 space-y-8">
        <form action="" onSubmit={handlAddContent}>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2  mt-20">
                <label className="text-xs font-black text-gray-500 uppercase pr-2 tracking-widest">عنوان العمل</label>
                <input value={ContentData.title} onChange={(e)=>SetContentData({...ContentData,title:e.target.value})} type="text" placeholder="مثلاً: أسرار النجاح في 2026" className="w-full p-5 bg-[#F8FAFA] border border-gray-100 rounded-2xl outline-none focus:border-[#319795] transition-all font-bold text-gray-700" />
              </div>
              <div className="space-y-2  mt-20">
                <label className="text-xs font-black text-gray-500 uppercase pr-2 tracking-widest">السعر (SAR)</label>
                <input value={ContentData.price} onChange={(e)=>SetContentData({...ContentData,price:e.target.value})} type="text" placeholder="0.00" className="w-full p-5 bg-[#F8FAFA] border border-gray-100 rounded-2xl outline-none focus:border-[#319795] transition-all font-black text-[#319795]" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2  mt-20">
                <label className="text-xs font-black text-gray-500 uppercase pr-2 tracking-widest"> content type</label>
                <input value={ContentData.content_type} onChange={(e)=>SetContentData({...ContentData,content_type:e.target.value})} type="text" placeholder="مثلاً: أسرار النجاح في 2026" className="w-full p-5 bg-[#F8FAFA] border border-gray-100 rounded-2xl outline-none focus:border-[#319795] transition-all font-bold text-gray-700" />
              </div>
              <div className="space-y-2  mt-20">
                <label className="text-xs font-black text-gray-500 uppercase pr-2 tracking-widest">السعر (SAR)</label>
                <input value={ContentData.status} onChange={(e)=>SetContentData({...ContentData,status:e.target.value})} type="text" placeholder="0.00" className="w-full p-5 bg-[#F8FAFA] border border-gray-100 rounded-2xl outline-none focus:border-[#319795] transition-all font-black text-[#319795]" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black text-gray-500 uppercase pr-2 tracking-widest">وصف مختصر</label>
              <textarea value={ContentData.description} onChange={(e)=>SetContentData({...ContentData,description:e.target.value})} rows="3" placeholder="اكتب نبذة تجذب القراء لشراء عملك..." className="w-full p-5 bg-[#F8FAFA] border border-gray-100 rounded-2xl outline-none focus:border-[#319795] transition-all font-medium text-gray-600"></textarea>
            </div>


            <div className="flex justify-between pt-6">
                <Link to="/dashboardUser">

              <button className="flex items-center gap-2 text-gray-400 font-black hover:text-[#319795] transition-colors">
                <ArrowRight size={20} /> العودة
              </button>
              </Link>
              <Link to="/UploadFiles">
              <button  className="bg-[#319795] text-white px-10 py-4 rounded-2xl font-black shadow-lg shadow-[#319795]/20 hover:bg-[#285E61] transition-all flex items-center gap-2">
                التالي <ArrowLeft size={20} />
              </button>
              </Link>
            </div>
            <button type='submit'> </button>
            
            </form>
          </div>
    </div>
    </>
  )
}

export default AddDataContent
