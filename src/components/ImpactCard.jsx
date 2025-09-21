import React from 'react';
import { motion } from 'framer-motion';

// --- Animation Variants for Framer Motion ---
const cardVariants = {
  initial: { y: 0, scale: 1 },
  hover: { 
    y: -5, 
    scale: 1.02, 
    boxShadow: "0px 15px 25px -5px rgba(0, 0, 0, 0.1), 0px 8px 10px -6px rgba(0, 0, 0, 0.04)",
    transition: { type: 'spring', stiffness: 300, damping: 20 }
  }
};

export default function ImpactCard({ statistic, label, description, icon }) {
  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      className="bg-white rounded-xl border border-stone-200 p-6 text-center flex flex-col items-center transition-shadow duration-300"
    >
      {/* Icon */}
      {icon && (
        <div className="mb-4 text-red-800 bg-red-100 p-4 rounded-full">
          {icon} 
        </div>
      )}

      {/* Statistic */}
      <div className="text-5xl font-extrabold text-stone-800 mb-2 tracking-tight">
        {statistic}
      </div>

      {/* Label */}
      <h3 className="text-lg font-bold text-stone-900">{label}</h3>

      {/* Divider */}
      <div className="w-16 h-1 bg-amber-400 rounded-full my-4"></div>

      {/* Description */}
      <p className="text-stone-600 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}
