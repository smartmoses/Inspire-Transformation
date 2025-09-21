import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Handshake, Heart } from 'lucide-react';

// Import components
import AdvancedHero from '../components/AdvancedHero';
import ProgramCard from '../components/ProgramCard';
import TestimonialSlider from '../components/TestimonialSlider';
import PartnershipForm from '../components/PartnershipForm';

const heroContent = {
  title: 'Break Free, Transform,',
  subtitle: 'Redefine Yourself',
  description: 'Step into a safe space where real stories meet raw truth. We exist to empower you to break free from the limitations that have shaped your perceptions and step into a life of limitless possibilities in God.',
  primaryCTA: {
    text: 'Listen to the Podcast',
    to: '/media'
  },
  secondaryCTA: {
    text: 'Our Story',
    to: '/about'
  },
  image: '/images/real/inspiring-speaker-event.jpg',
  stats: [
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
      imageUrl: '/images/Gemini_Generated_Image_egkvz8egkvz8egkv.png',
      category: 'Mentorship & Support',
      title: 'Resilience Mentorship',
      description: 'A faith-driven partnership that enables you to rebuild your sense of worth and cultivate a resilient mindset, no matter your past.'
    },
    {
      slug: 'community-outreach-events',
      imageUrl: './images/Gemini_Generated_Image_v0l9w7v0l9w7v0l9.png',
      category: 'Community Building',
      title: 'Community Outreach Events',
      description: 'We create safe spaces and provide tangible support through local events, fostering connection and strengthening our community fabric.'
    },
    {
      slug: 'the-transformation-podcast',
      imageUrl: './images/Gemini_Generated_Image_v0l9w7v0l9w7v0l9 (1).png',
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

// Animation Variants
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
  transition: { duration: 0.3 }
};

export default function AdvancedHomePage() {
  return (
    <motion.div 
      className="bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* 1. Advanced Hero Section */}
      <AdvancedHero {...heroContent} />

      {/* 2. Our Mission Section */}
      <section className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 tracking-tight leading-tight">
                    Our Mission is to <span className="text-red-800">Empower You</span>
                </h2>
                <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                    Inspire Transformation was born out of a desire to help people who have been defined by opinions and situations. We create faith-centered pathways for individuals to rediscover their worth, build resilience, and step into a future filled with purpose and hope.
                </p>
                 <Link to="/about" className="group mt-8 inline-flex items-center text-red-800 font-bold text-lg">
                    Read Our Founder's Story
                    <ArrowRight size={22} className="ml-2 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                className="relative h-96 lg:h-[28rem]"
            >
                <div className="absolute top-0 left-0 w-full h-full bg-amber-300 rounded-2xl transform -rotate-3"></div>
                <img 
                    src="/images/1.jpg" 
                    alt="Inspire Transformation community members" 
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl"
                />
            </motion.div>
        </div>
      </section>

      {/* 3. Featured Programs Section */}
      <section className="bg-gray-50 py-24 sm:py-32">
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

      {/* 4. Testimonials */}
      <TestimonialSlider />

      {/* 5. "Ways to Help" Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 tracking-tight">You Can Make a Difference</h2>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
                    Lasting change is a collaborative effort. Here's how you can join us in this vital work and be a beacon of hope.
                </p>
            </motion.div>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
                {waysToHelp.map(item => (
                    <motion.div 
                        key={item.title}
                        variants={itemVariants}
                        whileHover={cardHover}
                        className="bg-gray-50 border border-gray-200 p-8 rounded-xl text-center flex flex-col items-center shadow-sm hover:shadow-lg transition-shadow duration-300"
                    >
                        <div className="bg-red-100 text-red-800 rounded-full w-20 h-20 flex items-center justify-center">
                            {item.icon}
                        </div>
                        <h3 className="mt-6 text-xl font-bold text-gray-800">{item.title}</h3>
                        <p className="mt-3 text-gray-600 flex-grow">{item.description}</p>
                        <div className="mt-8">
                             <Link to={item.link} className="font-bold text-red-800 hover:underline text-lg">
                                {item.cta} →
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
      </section>
      
      {/* 6. Partnership Form Section */}
      <section className="bg-gray-100 py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-6">
            <PartnershipForm />
        </div>
      </section>

    </motion.div>
  );
}