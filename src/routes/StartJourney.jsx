import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Users, Handshake, Heart } from 'lucide-react';

// --- Import your advanced components ---
import ProgramCard from '../components/ProgramCard';
import StoryReelTestimonials from '../components/TestimonialSlider';
import PartnershipForm from '../components/PartnershipForm';


// --- Data for the page with new, authentic image suggestions ---
const featuredPrograms = [
    { 
        slug: 'resilience-mentorship', 
        // Image: A thoughtful young Nigerian woman, reflecting introspection and growth.
        imageUrl: 'https://images.unsplash.com/photo-1620608976800-ec5e1b199d75?q=80&w=1935&auto=format&fit=crop', 
        category: 'Mentorship & Support', 
        title: 'Resilience Mentorship', 
        description: 'A faith-driven partnership that enables you to rebuild your sense of worth and cultivate a resilient mindset, no matter your past.' 
    },
    { 
        slug: 'community-outreach-events', 
        // Image: A vibrant group of African women in a community setting.
        imageUrl: 'https://images.unsplash.com/photo-1531210222251-22c5a2c42c2a?q=80&w=2070&auto=format&fit=crop', 
        category: 'Community Building', 
        title: 'Community Outreach Events', 
        description: 'We create safe spaces and provide tangible support through local events, fostering connection and strengthening our community fabric.' 
    },
    { 
        slug: 'the-transformation-podcast', 
        // Image: A Nigerian woman with headphones, representing the podcast.
        imageUrl: 'https://images.unsplash.com/photo-1618882047913-a24b1d62a225?q=80&w=1942&auto=format&fit=crop', 
        category: 'Global Outreach', 
        title: 'The Inspire Transformation Podcast', 
        description: 'Sharing raw, truthful stories of transformation to inspire and empower a global audience to begin their own journey.' 
    }
];

const waysToHelp = [
    { icon: <Heart size={32} />, title: "Give a Gift", description: "Your financial gift provides essential resources that allow us to create safe spaces and support individuals on their journey.", link: "/donate", cta: "Give Today" },
    { icon: <Users size={32} />, title: "Volunteer", description: "Lend your time and skills as a mentor or event supporter to make a direct, personal impact in the community.", link: "/get-involved", cta: "Join The Team" },
    { icon: <Handshake size={32} />, title: "Partner With Us", description: "Collaborate with us as an organization or church to amplify our collective impact and foster community-wide transformation.", link: "/contact", cta: "Become a Partner" },
];


// --- The New, Built-in Hero Section ---
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
      <AmazingHero />

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
                    <ProgramCard program={p} /> 
                </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <StoryReelTestimonials />

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
                {/* Image: Hands holding a sprouting plant, a universal symbol of hope, featuring Black hands. */}
                <img src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2070&auto=format&fit=crop" alt="Hands holding soil with a sprouting plant" className="w-full h-full object-cover" />
            </motion.div>
        </div>
      </section>
    </div>
  );
}