// src/pages/HomePage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Handshake, Heart } from 'lucide-react';

// Import our new Advanced Hero and other components
import AdvancedHero from '../components/AdvancedHero';
import ProgramCard from '../components/ProgramCard';
import TestimonialSlider from '../components/TestimonialSlider';
import PartnershipForm from '../components/PartnershipForm'; // Re-using this!

const featuredPrograms = [
    {
      slug: 'youth-mentorship-program',
      imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop',
      category: 'Youth Empowerment',
      title: 'Youth Mentorship Program',
      description: 'Connecting young individuals with experienced mentors to guide them through life\'s challenges and career decisions.'
    },
    {
      slug: 'community-resilience-workshops',
      imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop',
      category: 'Community Building',
      title: 'Community Resilience Workshops',
      description: 'Interactive workshops designed to equip community members with the tools and mindset for overcoming adversity.'
    },
    {
      slug: 'leadership-training-seminars',
      imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
      category: 'Leadership Development',
      title: 'Leadership Training Seminars',
      description: 'Empowering the next generation of leaders with the skills and confidence to make a positive impact.'
    }
];

const waysToHelp = [
    { icon: <Heart size={32} />, title: "Donate", description: "Your financial gift provides essential resources for our programs and the people we serve.", link: "/donate", cta: "Give Today" },
    { icon: <Users size={32} />, title: "Volunteer", description: "Lend your time and skills to make a direct impact. Become a mentor, help at events, or support our operations.", link: "/get-involved", cta: "Join Our Team" },
    { icon: <Handshake size={32} />, title: "Partner", description: "Collaborate with us as an organization, church, or business to create a wider network of support.", link: "/contact", cta: "Become a Partner" },
];

export default function AdvancedHomePage() {
  return (
    <div className="bg-white">
      {/* 1. Advanced Hero Section */}
      <AdvancedHero />

      {/* 2. Our Mission Section (Asymmetrical Layout) */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
                initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 tracking-tight">
                    We Exist to See Lives <span className="text-red-800">Transformed</span>
                </h2>
                <p className="mt-6 text-lg text-stone-600 leading-relaxed">
                    Inspire Transformation was born from a passion to help people break free from the limitations holding them back. We create faith-centered pathways for individuals to rediscover their worth, build resilience, and step into a future filled with purpose.
                </p>
                 <Link to="/about" className="group mt-8 inline-flex items-center text-red-800 font-bold">
                    Our Story
                    <ArrowRight size={20} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }}
                className="relative h-96"
            >
                <div className="absolute top-0 left-0 w-full h-full bg-amber-300 rounded-2xl transform -rotate-3"></div>
                <img 
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop" 
                    alt="Team collaboration" 
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl"
                />
            </motion.div>
        </div>
      </section>

      {/* 3. Featured Programs Section */}
      <section className="bg-stone-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 tracking-tight">Pathways to Empowerment</h2>
            <p className="mt-3 max-w-2xl mx-auto text-lg text-stone-600">
                Each of our programs is a stepping stone toward a stronger future.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPrograms.map(p => <ProgramCard key={p.slug} program={p} />)}
          </div>
        </div>
      </section>

      {/* 4. Testimonials */}
      <TestimonialSlider />

      {/* 5. "Ways to Help" Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 tracking-tight">You Can Make a Difference</h2>
                <p className="mt-3 max-w-2xl mx-auto text-lg text-stone-600">
                    Lasting change is a collaborative effort. Here's how you can join us in this vital work.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {waysToHelp.map(item => (
                    <motion.div 
                        key={item.title}
                        initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}
                        className="bg-stone-50 border border-stone-200 p-8 rounded-xl text-center flex flex-col"
                    >
                        <div className="mx-auto bg-red-100 text-red-800 rounded-full w-20 h-20 flex items-center justify-center">
                            {item.icon}
                        </div>
                        <h3 className="mt-6 text-xl font-bold text-stone-800">{item.title}</h3>
                        <p className="mt-2 text-stone-600 flex-grow">{item.description}</p>
                        <div className="mt-6">
                             <Link to={item.link} className="font-bold text-red-800 hover:underline">
                                {item.cta} →
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>
      
      {/* 6. Partnership Form Section */}
      <section className="bg-stone-800 py-20">
        <div className="max-w-4xl mx-auto px-6">
            <PartnershipForm />
        </div>
      </section>

    </div>
  );
}