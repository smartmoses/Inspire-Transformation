import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// --- Import necessary components ---
// We are building the Hero inside this file, so no 'AdvancedHero' import is needed.
import ProgramCard from '../components/ProgramCard'; // The new advanced card
import StoryReelTestimonials from '../components/TestimonialSlider'; // The story reel concept

// --- Data for the page ---
const featuredPrograms = [
    { slug: 'youth-mentorship-program', imageUrl: '/images/youth-mentorship.jpg', category: 'Youth Empowerment', title: 'Youth Mentorship Program', description: 'Connecting young individuals with experienced mentors to guide them through life\'s challenges and career decisions.' },
    { slug: 'community-resilience-workshops', imageUrl: '/images/community-workshop.jpg', category: 'Community Building', title: 'Community Resilience Workshops', description: 'Equipping members with tools for overcoming adversity.' },
    { slug: 'leadership-training-seminars', imageUrl: '/images/leadership-training.jpg', category: 'Leadership Development', title: 'Leadership Training Seminars', description: 'Empowering the next generation of community leaders.' },
];

// --- The New, Built-in Hero Section Component Logic ---
const AmazingHero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <section className="relative h-screen flex items-center justify-center text-white text-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <video
          autoPlay loop muted playsInline
          className="w-full h-full object-cover"
          poster="/images/hero-fallback.jpg"
        >
          <source src="/videos/community-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
      </motion.div>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: '-100%' }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 1.5 }}
        className="absolute top-0 left-0 w-1/2 h-full bg-red-800 z-20"
      />
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: '100%' }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 1.5 }}
        className="absolute bottom-0 right-0 w-1/2 h-full bg-red-800 z-20"
      />
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold drop-shadow-2xl tracking-tight">
            Hope in Action.
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-lg text-slate-200">
            We are a movement of faith, empowering individuals and rebuilding communities from the inside out.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link
              to="/get-involved"
              className="bg-white text-slate-900 font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-slate-200 transition-transform transform hover:scale-105"
            >
              Get Involved
            </Link>
            <Link
              to="/donate"
              className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition"
            >
              Donate Now
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};


export default function AdvancedHomePage() {
  return (
    <div className="bg-slate-900">
      {/* 1. AMAZING HERO SECTION (Built-in) */}
      <AmazingHero />

      {/* 2. "Our Pathways to Empowerment" Section */}
      <section className="bg-slate-800 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Our Pathways to Empowerment
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-300">
              Explore our core programs, each a stepping stone toward a stronger, more resilient future.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPrograms.map((p, i) => (
                <motion.div
                    key={p.slug}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                    {/* Using the new advanced ProgramCard */}
                    <ProgramCard program={p} /> 
                </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 3. THE PROOF - Standalone Testimonial Section */}
      <StoryReelTestimonials />

      {/* 4. "Become Part of the Story" Section (WHITE BACKGROUND) */}
      <section className="bg-white text-slate-900">
        <div className="max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
                 initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }}
            >
                <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                    Become Part of the Story
                </h2>
                <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                   Your partnership, donation, or time can create a ripple effect of hope that transforms countless lives. You are the final, most important step in this journey of transformation.
                </p>
                 <div className="mt-8 flex flex-wrap gap-4">
                    <Link
                        to="/donate"
                        className="bg-red-800 text-white font-bold px-10 py-3 rounded-lg shadow-lg hover:bg-red-700 transition-transform transform hover:scale-105"
                    >
                        Give a Gift of Hope
                    </Link>
                    <Link
                        to="/get-involved"
                        className="bg-slate-100 text-slate-800 font-bold px-10 py-3 rounded-lg hover:bg-slate-200 transition"
                    >
                        Get Involved
                    </Link>
                </div>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }}
                className="h-96 rounded-2xl overflow-hidden shadow-xl"
            >
                <img src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto-format=fit-crop" alt="Hands holding soil with a sprouting plant" className="w-full h-full object-cover" />
            </motion.div>
        </div>
      </section>
    </div>
  );
}