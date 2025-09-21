import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ProgramCard({ program }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col border border-stone-200 h-full"
    >
      {/* Program Image */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={program.imageUrl || 'https://via.placeholder.com/400x250/fde68a/444444?text=Inspire'} // Placeholder
          alt={program.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        {/* Category/Tag */}
        <p className="text-sm font-semibold text-red-800 mb-1">
          {program.category}
        </p>

        {/* Title */}
        <h3 className="text-xl font-bold text-stone-800 line-clamp-2">
          {program.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm text-stone-600 leading-relaxed flex-grow line-clamp-3">
          {program.description}
        </p>

        {/* Learn More Button */}
        <div className="mt-6 pt-4 border-t border-stone-200">
          <Link
            to={`/programs/${program.slug}`}
            className="group inline-flex items-center text-sm font-bold text-red-800 hover:text-red-700 transition-colors"
          >
            Learn More
            <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

/*
  // HOW TO USE THIS COMPONENT

  // 1. Define your program data with the new fields
  const programsData = [
    {
      slug: 'youth-mentorship-program',
      imageUrl: '/images/youth-mentorship.jpg',
      category: 'Youth Empowerment',
      title: 'Youth Mentorship Program',
      description: 'Connecting young individuals with experienced mentors to guide them through life\'s challenges and career decisions.'
    },
    {
      slug: 'community-resilience-workshops',
      imageUrl: '/images/community-workshop.jpg',
      category: 'Community Building',
      title: 'Community Resilience Workshops',
      description: 'Interactive workshops designed to equip community members with the tools and mindset for overcoming adversity.'
    }
  ];

  // 2. Map over the data to render the cards
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {programsData.map(program => (
      <ProgramCard key={program.slug} program={program} />
    ))}
  </div>
*/