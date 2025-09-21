import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Users, Heart, ChevronDown, ArrowRight } from 'lucide-react';

// Import your advanced ProgramCard component
import ProgramCard from '../components/ProgramCard';

// --- Data for the page with new, authentic image suggestions ---
const programsData = {
    personal: [
        { 
          slug: 'identity-transformation', 
          // New Image: A thoughtful young Black woman, suggesting introspection and growth.
          imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop', 
          category: 'Personal Growth', 
          title: 'Identity Transformation Program', 
          description: 'Break free from limiting beliefs and discover your true identity through guided self-discovery and spiritual growth sessions.' 
        },
        { 
          slug: 'mindset-renewal', 
          // New Image: A Black man meditating or in a calm, focused state.
          imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop', 
          category: 'Personal Growth', 
          title: 'Mindset Renewal Journey', 
          description: 'Transform your thought patterns and develop a resilient mindset rooted in faith and personal truth.' 
        },
    ],
    development: [
        { 
          slug: 'purpose-discovery', 
          // New Image: A group of Black professionals collaborating in a workshop.
          imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop', 
          category: 'Spiritual Development', 
          title: 'Purpose Discovery Workshop', 
          description: 'Uncover your God-given purpose and learn to walk in your authentic calling through interactive sessions.' 
        },
        { 
          slug: 'resilience-building', 
          // New Image: A strong and confident Black woman looking forward.
          imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop', 
          category: 'Personal Growth', 
          title: 'Resilience Building Program', 
          description: 'Develop inner strength and unwavering faith as you learn to overcome life\'s challenges with grace and confidence.' 
        },
    ]
};

// --- Reusable FAQ Item Component ---
const FaqItem = ({ q, a }) => (
    <details className="group border-b border-zinc-200 py-4">
        <summary className="flex items-center justify-between cursor-pointer list-none">
            <span className="font-semibold text-zinc-800 text-lg group-hover:text-red-800">{q}</span>
            <ChevronDown className="transform transition-transform duration-300 group-open:-rotate-180 text-zinc-500" />
        </summary>
        <p className="mt-4 text-zinc-600 leading-relaxed pl-2">{a}</p>
    </details>
);

// --- New, Built-in Hero Section ---
const ProgramsHero = () => {
    return (
        <section className="relative h-[60vh] min-h-[500px] bg-slate-900 flex items-center justify-center text-center text-white overflow-hidden">
            {/* Background Image with Parallax Effect */}
            <motion.div 
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop')",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className="absolute inset-0 bg-black/60"></div>
            </motion.div>
            
            {/* Animated Text Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-6">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: { transition: { staggerChildren: 0.2 } }
                    }}
                >
                    <motion.div 
                        variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
                        className="mx-auto bg-red-800/20 text-red-500 rounded-full w-20 h-20 flex items-center justify-center border-2 border-red-500/50"
                    >
                        <BookOpen size={40} />
                    </motion.div>
                    <motion.h1 
                        variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight"
                    >
                        Pathways to Empowerment
                    </motion.h1>
                    <motion.p 
                        variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto"
                    >
                        Discover our range of transformative programs, each designed to help you rediscover your worth, build resilience, and step into your God-given purpose.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};


export default function ProgramsPage() {
  return (
    <div className="bg-white">
      {/* 1. New, Built-in Hero Section */}
      <ProgramsHero />

      {/* 2. Program Categories Section with Advanced Layout */}
      <section id="programs" className="py-24">
        <div className="max-w-6xl mx-auto px-6 space-y-20">
            {/* Category 1: Personal Growth */}
            <div>
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="flex items-center gap-4 mb-8"
                >
                    <div className="bg-red-100 p-3 rounded-full text-red-800"><Heart size={28} /></div>
                    <h2 className="text-3xl font-bold text-zinc-900">Personal Growth</h2>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {programsData.personal.map((p, i) => (
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

            {/* Category 2: Spiritual Development */}
            <div>
                 <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="flex items-center gap-4 mb-8"
                >
                    <div className="bg-red-100 p-3 rounded-full text-red-800"><Users size={28} /></div>
                    <h2 className="text-3xl font-bold text-zinc-900">Spiritual & Community Development</h2>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     {programsData.development.map((p, i) => (
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
        </div>
      </section>

      {/* 3. Program FAQs Section */}
       <section className="bg-zinc-50 py-24">
        <div className="max-w-4xl mx-auto px-6">
             <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight">Your Questions Answered</h2>
                <p className="mt-3 max-w-2xl mx-auto text-lg text-zinc-600">
                   Information to help you understand how our programs work and how you can get involved.
                </p>
            </div>
            <div className="border-t border-zinc-200">
                <FaqItem 
                    q="Who is eligible to join these programs?"
                    a="Our programs are open to all members of the communities we serve. While some programs are tailored for specific groups like youth or women, our goal is to be as inclusive as possible. Please check the specific program details for any age or other requirements."
                />
                 <FaqItem 
                    q="Is there a cost to participate in your programs?"
                    a="Thanks to the generosity of our donors and partners, the vast majority of our programs are offered completely free of charge to participants. In rare cases, a small fee may be required for specialized materials, which will be clearly communicated beforehand."
                />
                 <Faq-item 
                    q="How can I or my organization suggest a new program?"
                    a="We love hearing ideas from the community! If you have a suggestion for a new program or a need you've identified, please reach out to us through our contact page. We are always looking for new ways to serve."
                />
            </div>
        </div>
      </section>
      
      {/* 4. Call to Action */}
       <section className="bg-white py-24">
         <div className="max-w-4xl mx-auto px-6 text-center bg-red-700 text-white p-12 rounded-2xl shadow-2xl">
             <h2 className="text-3xl sm:text-4xl font-bold">
                Ready to Begin Your Transformation?
             </h2>
             <p className="mt-4 max-w-xl mx-auto text-lg text-red-100">
                Your journey towards a more purposeful and resilient life starts here. Take the next step by supporting our mission.
             </p>
             <div className="mt-8">
                <Link
                    to="/donate"
                    className="bg-white text-red-800 font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-slate-100 transition-transform transform hover:scale-105"
                >
                    Support a Program
                </Link>
             </div>
         </div>
      </section>
    </div>
  );
}