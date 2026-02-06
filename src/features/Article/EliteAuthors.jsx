import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const EliteAuthors = () => {
  const authors = [
    { id: 1, name: "د. منال سعيد", pic: "https://randomuser.me/api/portraits/women/1.jpg", articles: 32 },
    { id: 2, name: "أ. ياسر الحربي", pic: "https://randomuser.me/api/portraits/men/1.jpg", articles: 45 },
    { id: 3, name: "م. ندى الفاضل", pic: "https://randomuser.me/api/portraits/women/2.jpg", articles: 28 },
    { id: 4, name: "أ.د. عصام الدين", pic: "https://randomuser.me/api/portraits/men/2.jpg", articles: 50 },
  ];

  return (
    <section className="py-[6vw] px-[4vw] bg-[#0f172a]" dir="rtl">
      <h2 className="text-[3.5vw] md:text-[2.5vw] font-black text-white mb-[4vw] text-center">
        نخبة <span className="text-purple-400">الكُتّاب</span>
      </h2>

      <div 
        className="flex flex-row justify-center md:justify-center gap-[4vw] md:gap-[2vw] overflow-x-auto no-scrollbar pb-[2vw]"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
      >
        {authors.map((author) => (
          <motion.div 
            key={author.id}
            whileHover={{ y: -10, boxShadow: "0 10px 30px rgba(124,58,237,0.3)" }}
            /* تم تعديل العرض هنا ليكون 21vw ليظهر 4 كتاب فقط في السطر */
            className="flex-none w-[40vw] md:w-[21vw] text-center bg-white/5 border border-purple-500/20 rounded-[3vw] p-[2.5vw] cursor-pointer group"
          >
            <div className="relative w-[15vw] h-[15vw] md:w-[8vw] md:h-[8vw] mx-auto mb-[2vw] rounded-full overflow-hidden border-4 border-purple-600 group-hover:border-blue-400 transition-colors">
              <img src={author.pic} className="w-full h-full object-cover" alt={author.name} />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <h3 className="text-[3vw] md:text-[1.6vw] font-black text-white group-hover:text-blue-400 transition-colors">{author.name}</h3>
            <p className="text-gray-400 text-[2.2vw] md:text-[1vw] mt-[0.5vw]">
              <span className="font-bold text-white">{author.articles}+</span> مقال
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EliteAuthors;