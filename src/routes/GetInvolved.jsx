import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Handshake, Megaphone, ChevronDown } from 'lucide-react';
import PartnershipForm from '../components/PartnershipForm';

// --- Data for new, advanced sections ---
const involvementOptions = [
    {
        icon: <Heart size={32} />,
        title: "Volunteer Your Time",
        description: "Become the heartbeat of our mission by lending your skills in mentorship, event support, or administrative roles.",
        cta: "See Open Roles",
        link: "#open-roles"
    },
    {
        icon: <Handshake size={32} />,
        title: "Corporate & Church Partnership",
        description: "Align your organization's social responsibility goals with our mission. We offer bespoke partnership packages.",
        cta: "Become a Partner",
        link: "#partnership-form"
    },
    {
        icon: <Megaphone size={32} />,
        title: "Become an Ambassador",
        description: "Use your voice to advocate for our cause. Ambassadors represent our mission in their communities and help us grow.",
        cta: "Learn More",
        link: "#"
    }
];

const volunteerRoles = [
    { role: "Youth Mentor", commitment: "2-4 hours/week", description: "Guide and support a young person through their personal and professional development journey. Training provided." },
    { role: "Workshop Facilitator", commitment: "Per event basis", description: "Lead or assist in our community workshops, sharing your expertise in areas like financial literacy, job skills, or wellness." },
    { role: "Event Support Staff", commitment: "Flexible (per event)", description: "Help with setup, registration, and logistics during our community outreach events and fundraisers." },
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
  y: -8,
  boxShadow: '0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)',
  transition: { duration: 0.3 }
};

// --- Reusable Accordion Item for Volunteer Roles ---
const RoleItem = ({ role, commitment, description }) => (
    <motion.details 
        className="group border-b border-zinc-200 py-4"
        variants={itemVariants}
    >
        <summary className="flex items-center justify-between cursor-pointer list-none">
            <div className="flex items-center gap-4">
                 <span className="font-bold text-zinc-800 text-lg group-hover:text-red-800">{role}</span>
                 <span className="text-xs font-semibold text-zinc-500 bg-zinc-100 px-2 py-1 rounded-full">{commitment}</span>
            </div>
            <ChevronDown className="transform transition-transform duration-300 group-open:-rotate-180 text-zinc-500" />
        </summary>
        <p className="mt-4 text-zinc-600 leading-relaxed pl-2">{description}</p>
    </motion.details>
);

export default function GetInvolvedPage() {
  return (
    <motion.div 
        className="bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
    >
      {/* 1. Advanced Hero Section with Overlapping Image */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1 
                        variants={itemVariants}
                        className="text-4xl sm:text-6xl font-extrabold text-zinc-900 tracking-tight"
                    >
                        Become a Catalyst for <span className="text-red-800">Change</span>.
                    </motion.h1>
                    <motion.p 
                        variants={itemVariants}
                        className="mt-6 text-lg text-zinc-600 leading-relaxed"
                    >
                        Inspire Transformation is powered by people like you. Whether you’re an individual, a corporate body, or a church, there’s a meaningful way for you to make a lasting impact.
                    </motion.p>
                </motion.div>
                <div className="relative h-80 lg:h-96">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="absolute -top-8 -right-8 w-full h-full bg-amber-300 rounded-2xl"
                    ></motion.div>
                    <motion.img 
                        src="/images/Gemini_Generated_Image_egkvz8egkvz8egkv.png"
                        alt="A group of diverse volunteers"
                        className="relative w-full h-full object-cover rounded-2xl shadow-xl"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    />
                </div>
            </div>
        </div>
      </section>
      
      {/* 2. "Ways to Get Involved" Section */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-6xl mx-auto px-6">
            <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl font-bold text-zinc-900">Opportunities to Make an Impact</h2>
                <p className="mt-3 text-lg text-zinc-600">Find the path that best fits your passion and capacity.</p>
            </motion.div>
            <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {involvementOptions.map((option) => (
                    <motion.div 
                        key={option.title}
                        variants={itemVariants}
                        whileHover={cardHover}
                        className="bg-white border border-zinc-200 p-8 rounded-2xl flex flex-col text-center items-center shadow-sm"
                    >
                        <div className="bg-red-100 text-red-800 p-4 rounded-full">
                            {option.icon}
                        </div>
                        <h3 className="mt-6 text-2xl font-bold text-zinc-900">{option.title}</h3>
                        <p className="mt-2 text-zinc-600 flex-grow">{option.description}</p>
                        <div className="mt-6">
                            <Link to={option.link} className="font-bold text-red-800 hover:underline">
                                {option.cta} →
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
      </section>

      {/* 3. Current Volunteer Openings (Interactive Accordion) */}
      <section id="open-roles" className="py-24">
        <div className="max-w-4xl mx-auto px-6">
            <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl font-bold text-zinc-900">Current Volunteer Openings</h2>
                <p className="mt-3 text-lg text-zinc-600">
                   We have several key roles where your skills can make a profound difference.
                </p>
            </motion.div>
            <motion.div 
                className="border-t border-zinc-200"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {volunteerRoles.map(role => <RoleItem key={role.role} {...role} />)}
            </motion.div>
        </div>
      </section>

      {/* 4. Partnership Form Section */}
      <section id="partnership-form" className="bg-zinc-50 py-24">
        <div className="max-w-4xl mx-auto px-6">
            <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
            >
                <Handshake size={40} className="mx-auto text-amber-500" />
                <h2 className="mt-4 text-3xl font-bold text-zinc-900">Partner With Us</h2>
                <p className="mt-3 text-lg text-zinc-600 max-w-2xl mx-auto">
                   Ready to align your organization with our mission? Fill out this quick form and our partnerships team will connect with you.
                </p>
            </motion.div>
            <motion.div 
                className="mt-12 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <PartnershipForm />
            </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
