const DecisionPanel = () => (
  <div className="bg-[#161616] p-8 mr-15 rounded-[2.5rem] border border-white/5 shadow-2xl">
    <h4 className="text-white font-black mb-6 flex items-center gap-2 text-lg">
      اتخاذ إجراء مراجعة
    </h4>
    <div className="flex flex-col gap-6">
      <textarea 
        className="w-full bg-[#0f0f0f] border border-white/10 rounded-2xl p-4 text-gray-300 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all outline-none"
        rows="3"
        placeholder="أكتب ملاحظات المراجعة للكاتب (في حال الرفض أو القبول)..."
      ></textarea>
      
      <div className="flex gap-4">
        <button className="flex-1 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-2xl shadow-xl shadow-emerald-500/10 transition-all active:scale-95">
          قبول ونشر المحتوى (Approve)
        </button>
        <button className="flex-1 py-4 bg-gray-800 hover:bg-red-500/20 hover:text-red-500 text-gray-400 font-bold rounded-2xl transition-all active:scale-95 border border-white/5">
          رفض مع توضيح السبب (Reject)
        </button>
      </div>
    </div>
  </div>
);

export default DecisionPanel;