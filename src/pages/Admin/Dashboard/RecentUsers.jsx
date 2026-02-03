 const RecentUsers = () => {
  const users = [
    { name: "عبدالله اليافعي", email: "abdullah@elite.com", status: "نشط", time: "2 دقيقة" },
    { name: "سارة المنصوري", email: "sara@elite.com", status: "أوفلاين", time: "1 ساعة" },
    { name: "محمد القحطاني", email: "mohd@elite.com", status: "نشط", time: "5 دقائق" },
  ];

  return (
    <div className="bg-[#161616] p-8 rounded-[2.5rem] border border-white/5 flex flex-col h-full shadow-2xl">
      <h3 className="text-white font-black mb-6 flex items-center gap-3">
        <div className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,1)]" />
        أحدث المنضمين
      </h3>
      <div className="space-y-4 flex-1">
        {users.map((user, i) => (
          <div key={i} className="flex items-center justify-between p-4 bg-black/20 rounded-2xl border border-white/5 hover:border-white/10 transition-all group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 border border-white/10 overflow-hidden">
                <img src={`https://i.pravatar.cc/100?u=${user.name}`} alt="" />
              </div>
              <div>
                <p className="text-sm font-black text-white group-hover:text-blue-400 transition-colors">{user.name}</p>
                <p className="text-[10px] text-gray-500">{user.email}</p>
              </div>
            </div>
            <span className="text-[9px] text-gray-600 font-bold">{user.time}</span>
          </div>
        ))}
      </div>
      <button className="w-full py-3 mt-6 bg-white/5 hover:bg-white/10 rounded-xl text-[10px] font-black text-gray-400 transition-all uppercase tracking-widest">
        عرض جميع الأعضاء
      </button>
    </div>
  );
};
export default RecentUsers