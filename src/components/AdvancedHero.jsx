import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

export default function AdvancedHero({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  image,
  stats, 
}) {

  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  
  const sentenceVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: i * 0.5 },
    }),
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(8px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="relative min-h-screen bg-slate-900 overflow-hidden pt-24 pb-12 lg:pt-0 lg:pb-0">
      {/* Background Video */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0">
        <video
          autoPlay loop muted playsInline
          className="w-full h-full object-cover opacity-30"
          poster="/images/hero-fallback 2.jpg"
        >
          <source src="/videos/BEGINNING OF A NEW SCHOOL.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30 z-10"></div>
      </motion.div>

      {/* Main Content Grid */}
      <div className="relative z-20 h-full flex items-center md:pt-14">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Text Content */}
            <motion.div 
                initial="hidden" 
                animate="visible"
                variants={sentenceVariants}
                className="text-center lg:text-left"
            >
                <motion.div variants={wordVariants} className="font-semibold text-red-500 uppercase tracking-widest">
                    A Non-Profit Organization
                </motion.div>
                
                <motion.h1 
                    variants={sentenceVariants}
                    className="mt-4 text-4xl sm:text-5xl font-extrabold text-white tracking-tight"
                >
                    {(title + ' ' + subtitle).split(' ').map((word, index) => (
                        <motion.span key={index} variants={wordVariants} className="inline-block mr-3">
                            {word}
                        </motion.span>
                    ))}
                </motion.h1>

                <motion.p variants={wordVariants} className="mt-6 text-base sm:text-lg text-slate-300 max-w-lg mx-auto lg:mx-0">
                    {description}
                </motion.p>
                <motion.div variants={wordVariants} className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
                     <motion.div
                        animate={{
                            scale: [1, 1.05, 1],
                            transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                        }}
                     >
                        <Link to={primaryCTA.to} className="bg-red-700 text-white font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-red-600 transition-colors flex items-center gap-2">
                            <Heart size={18}/> {primaryCTA.text}
                        </Link>
                     </motion.div>
                    <Link to={secondaryCTA.to} className="border-2 border-slate-400 text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
                        {secondaryCTA.text}
                    </Link>
                </motion.div>
            </motion.div>

            {/* Right: Image - Smaller and Flashing */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
                // FIX: Aligned the image container to the right on large screens
                className="w-full max-w-sm mx-auto lg:ml-auto lg:mr-0" 
                style={{ perspective: 1000 }}
            >
                <motion.div 
                    whileHover={{ scale: 1.05 }}
                    style={{ transformStyle: "preserve-3d" }}
                    className="relative rounded-2xl overflow-hidden shadow-2xl"
                >
                    <img
                        src="/images/hero-fallback.jpg"
                        alt="Inspire Transformation community"
                        className="w-full h-[250px] sm:h-[350px] lg:h-[450px] object-cover" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent"></div>
                    <motion.p 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}
                        className="absolute top-4 right-4 text-white text-sm font-semibold bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full"
                    >
                        Founded by Deborah Okoi
                    </motion.p>
                </motion.div>
            </motion.div>
        </div>
      </div>
    </div>
  );
}