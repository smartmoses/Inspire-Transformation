import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Target, Eye, Handshake, Heart, ShieldCheck, Gem, Milestone } from 'lucide-react';

// --- Data for new, advanced sections ---
const journeyTimeline = [
    { year: '2021', title: 'The Vision is Born', description: 'Deborah Okoi establishes Inspire Transformation as a safe space where individuals can break free from limiting beliefs and discover their true potential.' },
    { year: '2022', title: 'First Transformation Series', description: 'Launch of our signature program helping individuals reshape their self-perceptions and embrace God-given possibilities.' },
    { year: '2023', title: 'Expanding Our Impact', description: 'Introduction of personalized mentoring and group sessions, creating deeper connections and lasting transformation.' },
    { year: '2024', title: 'Growing Community', description: 'Building a thriving community of individuals embracing personal growth and spiritual transformation.' },
];

const teamMembers = [
    { name: 'Deborah Okoi', title: 'Founder & Executive Director', image: '/images/founder.jpg' },
    { name: 'Samuel Adebayo', title: 'Head of Programs', image: 'https://i.pravatar.cc/300?u=samuel' },
    { name: 'Grace Nwosu', title: 'Community Outreach Coordinator', image: 'https://i.pravatar.cc/300?u=grace' },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* 1. Page Header/Hero */}
      <section className="relative bg-gray-800 text-white py-24 sm:py-32">
         <div 
            className="absolute inset-0 bg-cover bg-center opacity-20" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541544331-73862394a114?q=80&w=1974&auto=format&fit=crop')" }}
        ></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight"
          >
            About Inspire Transformation
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            We are a faith-driven movement unlocking human potential and rebuilding communities from the inside out.
          </motion.p>
        </div>
      </section>

      {/* 2. Mission & Vision Section with Image */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
                initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }}
            >
                <div className="space-y-8">
                    <div className="flex items-start gap-4">
                        <div className="bg-red-100 p-3 rounded-full text-red-800"><Target size={24} /></div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
                            <p className="mt-2 text-gray-600 leading-relaxed">
                                To offer a safe space and partnership that enables you to recreate worth and value 
                                with a resilience mindset, irrespective of where you've been or where you are.
                            </p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <div className="bg-red-100 p-3 rounded-full text-red-800"><Eye size={24} /></div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
                            <p className="mt-2 text-gray-600 leading-relaxed">
                                To empower individuals to break free from the shackles of limiting opinions and situations, 
                                embracing a transformative shift that redefines their lives into one of limitless 
                                possibilities in God.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }}
                className="h-80 lg:h-[28rem] rounded-2xl overflow-hidden shadow-xl"
            >
                <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop" alt="Team collaborating" className="w-full h-full object-cover" />
            </motion.div>
        </div>
      </section>

      {/* 3. "Our Journey" Timeline Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 tracking-tight">Our Journey of Impact</h2>
                <p className="mt-3 text-lg text-gray-600">From a simple vision to a growing movement, here are the key milestones that have shaped our story.</p>
            </div>
            <div className="relative">
                {/* The vertical line */}
                <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-300" aria-hidden="true"></div>
                {/* Timeline items */}
                <div className="space-y-12">
                    {journeyTimeline.map((item, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6 }}
                            className="relative pl-12"
                        >
                            <div className="absolute left-0 top-1 flex items-center justify-center bg-red-800 text-white rounded-full w-8 h-8">
                                <Milestone size={16} />
                            </div>
                            <p className="font-bold text-amber-600">{item.year}</p>
                            <h3 className="mt-1 text-xl font-bold text-gray-800">{item.title}</h3>
                            <p className="mt-2 text-gray-600">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* 4. "Meet Our Leaders" Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 tracking-tight">Meet Our Leaders</h2>
                <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-600">
                   Our organization is guided by a passionate team dedicated to our mission.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {teamMembers.map(member => (
                    <motion.div 
                        key={member.name}
                        initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <div className="mx-auto h-48 w-48 mb-4">
                            <img src={member.image} alt={member.name} className="w-full h-full rounded-full object-cover shadow-lg" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                        <p className="text-red-800 font-semibold">{member.title}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* 5. Final Call to Action */}
      <section className="bg-brand-900">
         <div className="max-w-4xl mx-auto px-6 py-20 text-center">
             <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Be a Part of the Story
             </h2>
             <p className="mt-4 max-w-xl mx-auto text-lg text-gray-300">
                Our work is only possible through the generosity and commitment of partners like you. Join us in our mission to bring hope and lasting change.
             </p>
             <div className="mt-8 flex justify-center gap-4">
                <Link to="/get-involved" className="bg-amber-500 text-white font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-amber-600 transition-transform transform hover:scale-105">
                    Get Involved
                </Link>
             </div>
         </div>
      </section>
    </div>
  );
}