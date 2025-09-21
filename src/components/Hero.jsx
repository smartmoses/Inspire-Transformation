import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';

const headline = "Empowering Lives, Rebuilding with Hope";

const sentenceVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.05,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
  },
};

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center text-white text-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
        poster="/images/hero-fallback.jpg" // A high-quality fallback image
      >
        <source src="/videos/community-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for Contrast */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-6">
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-semibold text-amber-400 tracking-widest uppercase text-sm sm:text-base"
        >
          A Movement of Hope
        </motion.p>
        
        <motion.h1
          variants={sentenceVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold my-4 drop-shadow-xl leading-tight"
        >
          {headline.split("").map((char, index) => (
            <motion.span key={char + "-" + index} variants={letterVariants} className="inline-block">
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="max-w-xl mx-auto text-lg text-stone-300"
        >
          We are a faith-driven NGO creating resilient communities by partnering with individuals, churches, and organizations to create lasting change.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/donate"
              className="bg-red-800 text-white font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-red-700 transition-colors text-lg"
            >
              Donate Now
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/media" // Link to a page with videos
              className="group inline-flex items-center text-white font-semibold px-8 py-3 text-lg"
            >
              <PlayCircle className="mr-2 text-amber-400 transition-transform group-hover:scale-110" />
              Watch Our Story
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
