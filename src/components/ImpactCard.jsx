import React from 'react';
import { motion } from 'framer-motion';

// --- Animation Variants for Framer Motion ---
const cardVariants = {
  initial: { y: 0, scale: 1 },
  hover: { 
    y: -8, 
    scale: 1.03, 
    boxShadow: "0px 10px 30px -5px rgba(0, 0, 0, 0.1)",
    transition: { type: 'spring', stiffness: 300, damping: 20 }
  }
};

export default function ImpactCard({ statistic, label, description, icon }) {
  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      className="bg-white rounded-xl border border-stone-200 p-6 text-center flex flex-col items-center"
    >
      {/* Icon */}
      {icon && (
        <div className="mb-4 text-red-800 bg-red-100 p-4 rounded-full">
          {/* Example: <Heart size={32} /> passed as icon prop */}
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

/*
  // HOW TO USE THIS COMPONENT IN ANOTHER FILE (e.g., ImpactPage.jsx)
  
  import ImpactCard from './ImpactCard';
  import { Users, Heart, Zap } from 'lucide-react';

  const impactData = [
    {
      statistic: '120+',
      label: 'Lives Transformed',
      description: 'Through our mentorship and support programs, individuals have found renewed hope and purpose.',
      icon: <Heart size={32} />
    },
    {
      statistic: '35+',
      label: 'Active Volunteers',
      description: 'A dedicated team of partners who commit their time and skills to uplifting our community.',
      icon: <Users size={32} />
    },
    {
      statistic: '10+',
      label: 'Community Projects',
      description: 'From local workshops to outreach programs, we are actively building a stronger community fabric.',
      icon: <Zap size={32} />
    }
  ];

  export default function ImpactPage() {
    return (
      <section className="py-20 bg-stone-50">
        <div className="max-w-5xl mx-auto px-4">
           <h2 className="text-3xl font-bold text-center text-stone-800 mb-12">Our Measured Impact</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactData.map(item => (
              <ImpactCard 
                key={item.label}
                statistic={item.statistic}
                label={item.label}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
*/