import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ProgramCard({ program }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden flex flex-col border border-slate-200 dark:border-slate-700 h-full group hover:border-red-500"
    >
      {/* 1. Image Section */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={program.imageUrl}
          alt={program.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* 2. Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-sm font-semibold text-red-700 dark:text-red-500 mb-1">
          {program.category}
        </p>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white line-clamp-2">
          {program.title}
        </h3>

        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex-grow line-clamp-3">
          {program.description}
        </p>

        {/* 3. Footer with CTA */}
        <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
          <Link
            to={`/programs/${program.slug}`}
            className="inline-flex items-center text-sm font-bold text-amber-600 dark:text-amber-400 group-hover:text-red-700 dark:group-hover:text-red-500 transition-colors"
          >
            Learn More
            <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}