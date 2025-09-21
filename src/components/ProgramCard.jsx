import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ProgramCard({ program }) {
  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: '0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden flex flex-col border border-slate-200 dark:border-slate-700 h-full group"
    >
      <div className="h-48 w-full overflow-hidden">
        <motion.img
          src={program.imageUrl}
          alt={program.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </div>

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

        <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
          <Link
            to={`/programs/${program.slug}`}
            className="inline-flex items-center text-sm font-bold text-red-800 dark:text-red-500 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors"
          >
            Learn More
            <motion.div
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
                <ArrowRight size={16} className="ml-2" />
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
