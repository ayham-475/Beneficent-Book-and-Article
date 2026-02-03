import React from 'react'
import { motion } from 'framer-motion';
import { BookOpen, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

function BookCard({ id,src, name, desc, nameWriter, price }) {

    return (
        <div >
            <Link to={`/BookCardDeatils/${id}`}>
                <div key={id} className="grid grid-cols-lg  md:grid-cols-4 mb-20">
                    <motion.div
                        whileHover={{ y: -10 }}
                        className=" w-55 hover:bg-[#374165]  border-white/5 rounded-3xl overflow-hidden group shadow-2xl">
                        <div className="h-60  from-blue-900/50 to--900/50 relative">
                            <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-100 transition-opacity">
                                {/* <BookOpen size={60} /> */}
                                <img
                                    src={src}
                                    className=" h-[280px] object-cover rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10"
                                    alt="Book cover"
                                />
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between mb-4">
                                <span className="text-[10px] bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full font-bold uppercase tracking-widest italic">{name}</span>
                                <div className="flex text-yellow-500 gap-0.5"><Star size={12} fill="currentColor" /> <Star size={12} fill="currentColor" /></div>
                            </div>
                            <h4 className="text-lg font-bold mb-4 group-hover:text-emerald-400 transition-colors">{desc}</h4>
                            <div className="flex items-center justify-between text-xs text-gray-500">
                                <span>بواسطة:{nameWriter}</span>
                                <span className="text-emerald-400 font-black text-sm">${price}</span>
                            </div>
                        </div>
                    </motion.div>

                </div>

            </Link>
        </div>
    )
}

export default BookCard
