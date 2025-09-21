import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Handshake, Heart } from 'lucide-react';

// --- Import your custom components ---
import Hero from '../components/Hero';
import ProgramCard from '../components/ProgramCard';
import ImpactCounter from '../components/ImpactCounter';
import TestimonialSlider from '../components/TestimonialSlider';

// --- Data for new sections ---
const ourApproachData = [
    {
        icon: <Heart size={32} className="text-red-800" />,
        title: 'Personalized Mentorship',
        description: 'We connect individuals with dedicated mentors to provide guidance, support, and encouragement on their personal journey.'
    },
    {
        icon: <Users size={32} className="text-red-800" />,
        title: 'Community Workshops',
        description: 'Our expert-led workshops equip community members with practical skills for resilience, leadership, and personal growth.'
    },
    {
        icon: <Handshake size={32} className="text-red-800" />,
        title: 'Strategic Partnerships',
        description: 'We collaborate with local churches and organizations to amplify our impact and create a unified network of support.'
    }
];

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


export default function HomePage() {
  return (
    <div className="bg-white">
      {/* 1. Hero Section - Captures immediate attention. */}
      <Hero />

      {/* 2. "Our Approach" Section - Explains HOW you create change. More informational. */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 tracking-tight">
              Our Approach to Transformation
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-lg text-stone-600">
              We believe lasting change is built on a foundation of personal support, skill-building, and strong community ties.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {ourApproachData.map(item => (
              <div key={item.title} className="text-center">
                <div className="mx-auto bg-red-100 rounded-full w-20 h-20 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="mt-6 text-xl font-bold text-stone-800">{item.title}</h3>
                <p className="mt-2 text-stone-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Combined Impact & Testimonials Section - A powerful narrative flow. */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left side: The numbers and proof. */}
          <div className="mb-12 lg:mb-0">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 tracking-tight">
              Real Stories, Measurable Impact
            </h2>
            <div className="w-24 h-1.5 bg-amber-400 rounded-full my-6"></div>
            <p className="text-lg text-stone-600 mb-10">
              Our mission is not just about programs; it's about people. We track our progress through both data and the powerful stories of transformation that emerge from our community.
            </p>
            <ImpactCounter />
          </div>
          {/* Right side: The human element. */}
          <div className="lg:-mt-10 lg:-mb-10">
            <TestimonialSlider />
          </div>
        </div>
      </section>
      
      {/* 4. Featured Programs Section - Clear next step for learning more. */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 tracking-tight">
              Explore Our Core Programs
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-lg text-stone-600">
              Each program is a pathway to empowerment, designed to address specific needs within our community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPrograms.map(p => <ProgramCard key={p.slug} program={p} />)}
          </div>
          <div className="mt-16 text-center">
            <Link 
              to="/programs" 
              className="group inline-flex items-center bg-red-800 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-red-700 transition-colors"
            >
              See All Programs
              <ArrowRight size={20} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Final, High-Impact CTA */}
      <section className="relative bg-stone-800">
        {/* Background Image */}
        <div 
            className="absolute inset-0 bg-cover bg-center opacity-20" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1498673397121-2e21b0a80b15?q=80&w=2070&auto=format&fit=crop')" }}
        ></div>
        <div className="relative max-w-4xl mx-auto px-6 py-24 text-center text-white">
             <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                Join Us in a Mission of Hope
             </h2>
             <p className="mt-6 max-w-xl mx-auto text-lg text-stone-300">
                Your partnership, donation, or time can create a ripple effect of transformation in countless lives. Become a part of the story today.
             </p>
             <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link
                    to="/donate"
                    className="bg-amber-500 text-white font-bold px-10 py-4 rounded-lg shadow-lg hover:bg-amber-600 transition-transform transform hover:scale-105"
                >
                    Donate Now
                </Link>
                <Link
                    to="/get-involved"
                    className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold px-10 py-4 rounded-lg shadow-lg hover:bg-white/20 transition-transform transform hover:scale-105"
                >
                    Get Involved
                </Link>
             </div>
        </div>
      </section>
    </div>
  );
}