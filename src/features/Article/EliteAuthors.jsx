import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const EliteAuthors = ({contentType}) => {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);

  const UserUrl = "http://localhost:3000/users";
  const ContentUrl = "http://localhost:3000/contents";
  useEffect(() => {
    const fetchEliteAuthors = async () => {
      try {
        // جلب البيانات من الروابط بالتوازي
        const [usersRes, contentsRes] = await Promise.all([
          fetch(UserUrl),
          fetch(ContentUrl)
        ]);

        const users = await usersRes.json();
        const contents = await contentsRes.json();

        // 1. حساب عدد الكتب لكل كاتب (بشرط أن يكون نوع المحتوى BOOK)
        const booksCountByAuthor = contents.reduce((acc, content) => {
          if (content.content_type === contentType) {
            const authorId = content.author_id;
            acc[authorId] = (acc[authorId] || 0) + 1;
          }
          return acc;
        }, {});

        // 2. دمج بيانات المستخدمين مع عدد الكتب التي قاموا بنشرها
        const compiledAuthors = users
          .map((user) => {
            const bookCount = booksCountByAuthor[user.id] || 0;
            return {
              id: user.id,
              name: user.profile?.name || "كاتب غير معروف",
              // إذا كان لديك رابط صورة في البروفايل استخدمه، وإلا يتم استخدام صورة افتراضية مبنية على اسمه
              pic: user.profile?.avatar_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.profile?.name || 'Author')}&background=7c3aed&color=fff`,
              books: bookCount
            };
          })
          // 3. تصفية المستخدمين الذين لديهم كتاب واحد على الأقل
          .filter(author => author.books > 0)
          // 4. الترتيب من الأكثر كتباً إلى الأقل
          .sort((a,   b) => b.books -   a.books)
          // 5. أخذ أعلى 4 كتاب فقط ليناسب تصميم السطر
          .slice(0, 4);

        setAuthors(compiledAuthors);
      } catch (error) {
        console.error("حدث خطأ أثناء جلب بيانات النخبة:", error);
      } finally {
        setLoading(false);
      }
    };


    fetchEliteAuthors();
  }, []);

  if (loading) {
    return (
      <section className="py-[6vw] px-[4vw] bg-[#0f172a] text-center text-white" dir="rtl">
        <p className="text-[2vw]">جاري تحميل نخبة الكُتّاب...</p>
      </section>
    );
  }

  return (
    <section className="py-[6vw] px-[4vw] bg-[#0f172a] dir-rtl" dir="rtl">
      <h2 className="text-[3.5vw] md:text-[2.5vw] font-black text-white mb-[4vw] text-center">
        نخبة <span className="text-purple-400">الكُتّاب</span>
      </h2>

      {authors.length === 0 ? (
        <p className="text-center text-gray-400 text-[1.5vw]">لا يوجد كتاب لديهم كتب منشورة حالياً.</p>
      ) : (
        <div 
          className="flex flex-row justify-center gap-[4vw] md:gap-[2vw] overflow-x-auto no-scrollbar pb-[2vw]"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          {authors.map((author) => (
            <motion.div 
              key={author.id}
              whileHover={{ y: -10, boxShadow: "0 10px 30px rgba(124,58,237,0.3)" }}
              className="flex-none w-[40vw] md:w-[21vw] text-center bg-white/5 border border-purple-500/20 rounded-[3vw] p-[2.5vw] cursor-pointer group"
            >
              <div className="relative w-[15vw] h-[15vw] md:w-[8vw] md:h-[8vw] mx-auto mb-[2vw] rounded-full overflow-hidden border-4 border-purple-600 group-hover:border-blue-400 transition-colors">
                <img src={author.pic} className="w-full h-full object-cover" alt={author.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="text-[3vw] md:text-[1.6vw] font-black text-white group-hover:text-blue-400 transition-colors truncate px-2">
                {author.name}
              </h3>
              <p className="text-gray-400 text-[2.2vw] md:text-[1vw] mt-[0.5vw]">
                <span className="font-bold text-white">{author.books}</span> {author.books === 1 ? 'كتاب' : 'كتب'}
              </p>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default EliteAuthors;