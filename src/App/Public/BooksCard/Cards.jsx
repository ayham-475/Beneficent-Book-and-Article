import React, { useContext } from 'react';
import { ChevronRight } from 'lucide-react';
import BookCard from './BookCard';
import { BookCardInfo } from './BookCardContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

// استيراد ملفات التنسيق الضرورية (بدونها لن يعمل السلايدر)
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Cards = () => {
  const { CardInfo } = useContext(BookCardInfo); // تفكيك الكائن مباشرة

  return (
    <div className="py-24 bg-[#F8FAFC] overflow-hidden" dir="rtl">
      <div className="container mx-auto px-6">
        
        {/* الرأس (Header) */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-[#1A202C] mb-4">
              أكثر الكتب <span className="text-[#0A7D75]">رواجاً</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              اكتشف آخر الإبداعات التي تُشعل شغف القراء وتصدر قائمة الأكثر مبيعاً في واحتنا الرقمية.
            </p>
          </div>
          <button className="group flex items-center gap-2 text-[#0A7D75] font-bold text-lg hover:gap-4 transition-all duration-300">
            شاهد المكتبة كاملة <ChevronRight size={22} className="rotate-180 transition-transform" />
          </button>
        </div>

        {/* السلايدر (The Slider) */}
        <div className="relative group px-4">
          <Swiper
            dir="rtl" // لضمان اتجاه الحركة من اليمين لليسار
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            spaceBetween={0} // المسافة بين الكروت
            centeredSlides={false}
            slidesPerView={5}         // عدد الكروت التي تريدها ثابتة في الشاشة
          slidesPerGroup={1}
          loopAddBlankSlides={false}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            navigation={true}
            pagination={{ clickable: true }}
            modules={[Navigation, Autoplay, Pagination]}
            className="pb-16 !overflow-visible" // لجعل الظلال تظهر بوضوح
          >
            {CardInfo.map((card) => (
              <SwiperSlide key={card.id}>
                <div className=" h-full"> {/* لإعطاء مساحة للظلال (Shadows) */}
                  <BookCard src={card.src} id={card.id} name={card.name} desc={card.desc} nameWriter={card.nameWriter} price={card.price} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* تنسيق مخصص لأزرار التنقل (CSS مدمج) */}
          <style jsx global>{`
            .swiper-button-next, .swiper-button-prev {
              background: white;
              width: 50px !important;
              height: 50px !important;
              border-radius: 50%;
              color: #0A7D75 !important;
              box-shadow: 0 10px 20px rgba(0,0,0,0.1);
              transition: all 0.3s ease;
            }
            .swiper-button-next:after, .swiper-button-prev:after {
              font-size: 20px !important;
              font-weight: bold;
            }
            .swiper-button-next:hover, .swiper-button-prev:hover {
              background: #0A7D75;
              color: white !important;
            }
            .swiper-pagination-bullet-active {
              background: #0A7D75 !important;
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};

export default Cards;