import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Handshake, Heart } from 'lucide-react';

// --- Import your advanced components ---
import ProgramCard from '../components/ProgramCard';
import StoryReelTestimonials from '../components/TestimonialSlider';

// --- Data for the page ---
const featuredPrograms = [
    { 
        slug: 'resilience-mentorship', 
        imageUrl: 'https://images.unsplash.com/photo-1620608976800-ec5e1b199d75?q=80&w=1935&auto=format&fit=crop', 
        category: 'Mentorship & Support', 
        title: 'Resilience Mentorship', 
        description: 'A faith-driven partnership that enables you to rebuild your sense of worth and cultivate a resilient mindset, no matter your past.' 
    },
    { 
        slug: 'community-outreach-events', 
        imageUrl: 'https://images.unsplash.com/photo-1531210222251-22c5a2c42c2a?q=80&w=2070&auto=format&fit=crop', 
        category: 'Community Building', 
        title: 'Community Outreach Events', 
        description: 'We create safe spaces and provide tangible support through local events, fostering connection and strengthening our community fabric.' 
    },
    { 
        slug: 'the-transformation-podcast', 
        imageUrl: 'https://images.unsplash.com/photo-1618882047913-a24b1d62a225?q=80&w=1942&auto=format&fit=crop', 
        category: 'Global Outreach', 
        title: 'The Inspire Transformation Podcast', 
        description: 'Sharing raw, truthful stories of transformation to inspire and empower a global audience to begin their own journey.' 
    }
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const cardHover = { 
  scale: 1.05, 
  boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.1)',
  transition: { duration: 0.3 }
};

// --- The Hero Section ---
const StartJourneyHero = () => {
    return (
        <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-white text-center overflow-hidden bg-slate-900">
            <motion.div 
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 z-0"
            >
                <img
                    src="/images/hero-fallback.jpg"
                    alt="Community gathering"
                    className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-black/50 to-transparent"></div>
            </motion.div>
            
            <div className="relative z-10 max-w-4xl mx-auto px-6">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1 
                        variants={itemVariants}
                        className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-shadow-lg"
                    >
                        Your Journey Starts Here
                    </motion.h1>
                    <motion.p 
                        variants={itemVariants}
                        className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-slate-200"
                    >
                        Join a movement of faith and action. Discover how you can contribute to a story of hope and transformation.
                    </motion.p>
                    <motion.div 
                        variants={itemVariants}
                        className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4"
                    >
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                to="/get-involved"
                                className="w-full sm:w-auto bg-red-700 text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-red-600 transition-colors flex items-center justify-center text-lg"
                            >
                                Get Involved
                            </Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                to="/donate"
                                className="w-full sm:w-auto border-2 border-slate-400 text-white font-bold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center text-lg"
                            >
                                Donate Now
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};


export default function StartJourney() {
  return (
    <motion.div 
        className="bg-slate-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
    >
      <StartJourneyHero />

      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 tracking-tight">Pathways to Empowerment</h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
                Each of our initiatives is a stepping stone toward a stronger, more resilient future, grounded in faith and community.
            </p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {featuredPrograms.map(p => (
              <motion.div key={p.slug} variants={itemVariants} whileHover={cardHover}>
                <ProgramCard program={p} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      <StoryReelTestimonials />

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-24 sm:py-32 grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true, amount: 0.5 }}
                 transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-800 leading-tight">
                    Become Part of the Story
                </h2>
                <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                   Your partnership, donation, or time can create a ripple effect of hope that transforms countless lives. You are the final, most important step in this journey of transformation.
                </p>
                 <div className="mt-10 flex flex-wrap gap-4">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link
                            to="/donate"
                            className="bg-red-800 text-white font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-red-700 transition-colors text-lg"
                        >
                            Give a Gift of Hope
                        </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link
                            to="/get-involved"
                            className="bg-slate-100 text-slate-800 font-bold px-8 py-3 rounded-lg hover:bg-slate-200 transition-colors text-lg"
                        >
                            Get Involved
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="h-96 lg:h-[28rem] rounded-2xl overflow-hidden shadow-xl"
            >
                <img src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2070&auto=format&fit=crop" alt="Hands holding soil with a sprouting plant" className="w-full h-full object-cover" />
            </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
