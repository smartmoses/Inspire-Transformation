import React, { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Users, Heart, Zap } from 'lucide-react';

// --- Animated Counter Component ---
// This sub-component handles the number animation logic.
function Counter({ from = 0, to, duration = 1.5 }) {
  const nodeRef = useRef();
  const isInView = useInView(nodeRef, { once: true }); // Trigger animation only once

  useEffect(() => {
    if (isInView) {
      const node = nodeRef.current;
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          // Use Math.round to ensure we display whole numbers
          node.textContent = Math.round(value).toLocaleString();
        },
      });
      return () => controls.stop();
    }
  }, [isInView, from, to, duration]);

  return <span ref={nodeRef}>{from}</span>;
}

// --- Main Impact Counter Component ---
export default function ImpactCounter() {
    
  const stats = [
    { label: 'Lives Touched', value: 120, icon: <Heart size={28} /> },
    { label: 'Active Volunteers', value: 35, icon: <Users size={28} /> },
    { label: 'Community Projects', value: 10, icon: <Zap size={28} /> },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }} // Animate when 50% of the element is in view
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center"
    >
      {stats.map((stat) => (
        <motion.div
          key={stat.label}
          variants={itemVariants}
          className="bg-white rounded-xl shadow-lg p-6 border border-stone-200"
        >
          <div className="mx-auto mb-4 text-red-800 bg-red-100 w-fit p-4 rounded-full">
            {stat.icon}
          </div>
          <div className="text-5xl font-extrabold text-stone-800 tracking-tighter">
            <Counter to={stat.value} />+
          </div>
          <div className="mt-2 text-base font-semibold text-stone-700">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
}