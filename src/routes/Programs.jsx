import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Users, Heart, ChevronDown } from 'lucide-react';

import AdvancedHero from '../components/AdvancedHero';
import ProgramCard from '../components/ProgramCard';

// Hero configuration
const heroContent = {
  title: 'Transform Your Life',
  subtitle: 'Through Our Programs',
  description: 'Discover a range of transformative programs designed to help you grow spiritually, emotionally, and personally. Each program is crafted with care and rooted in faith.',
  primaryCTA: {
    text: 'Find Your Program',
    to: '#programs'
  },
  secondaryCTA: {
    text: 'Contact Us',
    to: '/contact'
  },
  image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2069&auto=format&fit=crop',
  variant: 'dark',
  size: 'medium',
  theme: 'dark',
  alignment: 'center'
};

// --- Data for the page ---
// In a real app, you would fetch this and filter by category.
const programsData = {
    personal: [
        { slug: 'identity-transformation', imageUrl: '/images/identity.jpg', category: 'Personal Growth', title: 'Identity Transformation Program', description: 'Break free from limiting beliefs and discover your true identity through guided self-discovery and spiritual growth sessions.' },
        { slug: 'mindset-renewal', imageUrl: '/images/mindset.jpg', category: 'Personal Growth', title: 'Mindset Renewal Journey', description: 'Transform your thought patterns and develop a resilient mindset rooted in faith and personal truth.' },
    ],
    development: [
        { slug: 'purpose-discovery', imageUrl: '/images/purpose.jpg', category: 'Spiritual Development', title: 'Purpose Discovery Workshop', description: 'Uncover your God-given purpose and learn to walk in your authentic calling through interactive sessions.' },
        { slug: 'resilience-building', imageUrl: '/images/resilience.jpg', category: 'Personal Growth', title: 'Resilience Building Program', description: 'Develop inner strength and unwavering faith as you learn to overcome life\'s challenges with grace and confidence.' },
    ]
};

// --- Reusable FAQ Item Component ---
const FaqItem = ({ q, a }) => (
    <details className="group border-b border-gray-200 py-4">
        <summary className="flex items-center justify-between cursor-pointer list-none">
            <span className="font-semibold text-gray-800 group-hover:text-red-800">{q}</span>
            <ChevronDown className="transform transition-transform duration-300 group-open:-rotate-180" />
        </summary>
        <p className="mt-4 text-gray-600 leading-relaxed">{a}</p>
    </details>
);

export default function ProgramsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <AdvancedHero {...heroContent} />

      {/* Programs List */}
      <div id="programs" className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
                <div className="mx-auto bg-red-100 text-red-800 rounded-full w-20 h-20 flex items-center justify-center">
                    <BookOpen size={40} />
                </div>
            </motion.div>
            <motion.h2
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 text-3xl sm:text-4xl font-bold text-gray-800 tracking-tight"
            >
                Available Programs
            </motion.h2>
            <motion.p 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
            >
                Explore the pathways to empowerment we've created. Each program is a testament to our commitment to building a resilient and hopeful community.
            </motion.p>
        </div>
      </div>

      {/* 2. Program Categories Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
            {/* Category 1: Personal Growth */}
            <div>
                <div className="flex items-center gap-4 mb-8">
                    <Heart className="text-red-800" size={32} />
                    <h2 className="text-3xl font-bold text-gray-800">Personal Growth</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {programsData.personal.map(p => <ProgramCard key={p.slug} program={p} />)}
                </div>
            </div>

            {/* Category 2: Development */}
            <div>
                <div className="flex items-center gap-4 mb-8">
                    <Users className="text-red-800" size={32} />
                    <h2 className="text-3xl font-bold text-gray-800">Spiritual Development</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {programsData.development.map(p => <ProgramCard key={p.slug} program={p} />)}
                </div>
            </div>
        </div>
      </section>

      {/* 3. Program FAQs Section */}
       <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
             <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 tracking-tight">Your Questions Answered</h2>
                <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-600">
                   Information to help you understand how our programs work and how you can get involved.
                </p>
            </div>
            <div className="space-y-2">
                <FaqItem 
                    q="Who is eligible to join these programs?"
                    a="Our programs are open to all members of the communities we serve. While some programs are tailored for specific groups like youth or women, our goal is to be as inclusive as possible. Please check the specific program details for any age or other requirements."
                />
                 <FaqItem 
                    q="Is there a cost to participate in your programs?"
                    a="Thanks to the generosity of our donors and partners, the vast majority of our programs are offered completely free of charge to participants. In rare cases, a small fee may be required for specialized materials, which will be clearly communicated beforehand."
                />
                 <FaqItem 
                    q="How can I or my organization suggest a new program?"
                    a="We love hearing ideas from the community! If you have a suggestion for a new program or a need you've identified, please reach out to us through our contact page. We are always looking for new ways to serve."
                />
            </div>
        </div>
      </section>
      
      {/* 4. Call to Action */}
       <section className="bg-amber-400">
         <div className="max-w-4xl mx-auto px-6 py-16 text-center">
             <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Support Our Work
             </h2>
             <p className="mt-4 max-w-xl mx-auto text-lg text-gray-800">
                Your contribution directly funds these programs, allowing us to continue offering life-changing support to those who need it most.
             </p>
             <div className="mt-8">
                <Link
                    to="/donate"
                    className="bg-red-800 text-white font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-red-700 transition-transform transform hover:scale-105"
                >
                    Donate to a Program
                </Link>
             </div>
         </div>
      </section>
    </div>
  );
}