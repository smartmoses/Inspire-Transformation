import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Handshake, Heart } from 'lucide-react';

// Import components
import AdvancedHero from '../components/AdvancedHero';
import ProgramCard from '../components/ProgramCard';
import TestimonialSlider from '../components/TestimonialSlider';
import PartnershipForm from '../components/PartnershipForm';

// --- ACTION REQUIRED: Replace placeholders with your real images ---
// --- Text has been updated to reflect your brand's voice from social media ---
const heroContent = {
  title: 'Break Free, Transform,',
  subtitle: 'Redefine Yourself',
  description: 'Step into a safe space where real stories meet raw truth. We exist to empower you to break free from the limitations that have shaped your perceptions and step into a life of limitless possibilities in God.',
  primaryCTA: {
    text: 'Listen to the Podcast',
    to: '/media' // Directing to the media page where the podcast is featured
  },
  secondaryCTA: {
    text: 'Our Story',
    to: '/about'
  },
  // SUGGESTION: Use a powerful, authentic photo from a community event or of your founder, Deborah Okoi.
  image: '/images/real/inspiring-speaker-event.jpg',
  stats: [
    // TODO: Update these with your latest numbers.
    { value: '1000+', label: 'Lives Impacted' },
    { value: '15+', label: 'Active Programs' },
    { value: '5', label: 'Communities' }
  ],
  variant: 'gradient',
  size: 'large',
  theme: 'light'
};

const featuredPrograms = [
    {
      slug: 'resilience-mentorship',
      // FIX: Replaced unreliable URL with a guaranteed working placeholder.
      imageUrl: 'https://i.pravatar.cc/500?u=mentorship',
      category: 'Mentorship & Support',
      title: 'Resilience Mentorship',
      description: 'A faith-driven partnership that enables you to rebuild your sense of worth and cultivate a resilient mindset, no matter your past.'
    },
    {
      slug: 'community-outreach-events',
      // FIX: Replaced unreliable URL with a guaranteed working placeholder.
      imageUrl: 'https://i.pravatar.cc/500?u=community',
      category: 'Community Building',
      title: 'Community Outreach Events',
      description: 'We create safe spaces and provide tangible support through local events, fostering connection and strengthening our community fabric.'
    },
    {
      slug: 'the-transformation-podcast',
      // FIX: Replaced unreliable URL with a guaranteed working placeholder.
      imageUrl: 'https://i.pravatar.cc/500?u=podcast',
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

export default function AdvancedHomePage() {
  return (
    <div className="bg-white">
      {/* 1. Advanced Hero Section */}
      <AdvancedHero {...heroContent} />

      {/* 2. Our Mission Section (Asymmetrical Layout) */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
                initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 tracking-tight">
                    Our Mission is to <span className="text-red-800">Empower You</span>
                </h2>
                <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                    Inspire Transformation was born out of a desire to help people who have been defined by opinions and situations. We create faith-centered pathways for individuals to rediscover their worth, build resilience, and step into a future filled with purpose and hope.
                </p>
                 <Link to="/about" className="group mt-8 inline-flex items-center text-red-800 font-bold">
                    Read Our Founder's Story
                    <ArrowRight size={20} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }}
                className="relative h-96"
            >
                <div className="absolute top-0 left-0 w-full h-full bg-amber-300 rounded-2xl transform -rotate-3"></div>
                <img 
                    // SUGGESTION: Use a candid, joyful photo of your community members interacting from your social media.
                    src="/images/1.jpg" 
                    alt="Inspire Transformation community members" 
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl"
                />
            </motion.div>
        </div>
      </section>

      {/* 3. Featured Programs Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 tracking-tight">Pathways to Empowerment</h2>
            <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-600">
                Each of our initiatives is a stepping stone toward a stronger, more resilient future.
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
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 tracking-tight">You Can Make a Difference</h2>
                <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-600">
                    Lasting change is a collaborative effort. Here's how you can join us in this vital work.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {waysToHelp.map(item => (
                    <motion.div 
                        key={item.title}
                        initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}
                        className="bg-gray-50 border border-gray-200 p-8 rounded-xl text-center flex flex-col"
                    >
                        <div className="mx-auto bg-red-100 text-red-800 rounded-full w-20 h-20 flex items-center justify-center">
                            {item.icon}
                        </div>
                        <h3 className="mt-6 text-xl font-bold text-gray-800">{item.title}</h3>
                        <p className="mt-2 text-gray-600 flex-grow">{item.description}</p>
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
      <section className="bg-gray-100 py-20">
        <div className="max-w-4xl mx-auto px-6">
            <PartnershipForm />
        </div>
      </section>

    </div>
  );
}