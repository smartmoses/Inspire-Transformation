import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Target, Eye, Handshake, Heart, ShieldCheck, Gem } from 'lucide-react';
import ImpactCounter from '../components/ImpactCounter'; // Re-using this component here adds great value

// --- Data for Core Values ---
const coreValues = [
    { icon: <Heart size={28} />, title: "Faith-Driven Compassion", description: "Guided by faith, we serve with empathy, kindness, and profound respect for every individual's journey." },
    { icon: <ShieldCheck size={28} />, title: "Unwavering Integrity", description: "We are committed to transparency, honesty, and accountability in our programs, finances, and partnerships." },
    { icon: <Handshake size={28} />, title: "Collaborative Spirit", description: "We thrive by building strong partnerships with communities and organizations to amplify our collective impact." },
    { icon: <Gem size={28} />, title: "Commitment to Excellence", description: "We hold ourselves to the highest standards in our service, delivery, and the lasting outcomes we create." },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* 1. Page Header/Hero */}
      <section className="relative bg-stone-800 text-white py-20 sm:py-28">
         <div 
            className="absolute inset-0 bg-cover bg-center opacity-20" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541544331-73862394a114?q=80&w=1974&auto=format&fit=crop')" }}
        ></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight"
          >
            About Inspire Transformation
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-stone-300 max-w-3xl mx-auto"
          >
            We are more than an organization; we are a faith-driven movement dedicated to unlocking human potential and rebuilding communities from the inside out.
          </motion.p>
        </div>
      </section>

      {/* 2. Our Story Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, amount: 0.3 }}
             transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 tracking-tight">The Story Behind Our Mission</h2>
            <div className="w-24 h-1.5 bg-amber-400 rounded-full my-6"></div>
            <div className="text-stone-600 space-y-4 leading-relaxed">
              <p>
                Inspire Transformation was born from a simple but powerful observation: too many people are confined by limiting beliefs, past trauma, and societal labels. Our founder, Deborah Okoi, witnessed firsthand how these invisible barriers prevent individuals from realizing their God-given potential.
              </p>
              <p>
                Driven by a passion to see lives restored, she dedicated her life to creating safe spaces where individuals can heal, rediscover their worth, and be equipped to build resilient futures. What started as a small community outreach has grown into a movement touching hundreds of lives, all centered on the belief that true transformation is always possible.
              </p>
            </div>
          </motion.div>
          <motion.div 
             initial={{ opacity: 0, scale: 0.8 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true, amount: 0.3 }}
             transition={{ duration: 0.8 }}
             className="h-80 lg:h-full"
          >
             <img
              src="/images/founder.jpg" // Make sure you have this image in your public/images folder
              alt="A group of smiling community members"
              className="rounded-2xl shadow-xl object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </section>

      {/* 3. Vision & Mission Section */}
      <section className="bg-stone-50 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
            <div className="text-center">
                <Target size={40} className="mx-auto text-red-800"/>
                <h3 className="mt-4 text-2xl font-bold text-stone-800">Our Mission</h3>
                <p className="mt-2 text-stone-600 leading-relaxed">
                  To provide safe spaces and partnerships that enable individuals to rebuild worth, cultivate resilience, and access opportunities that lead to lasting, faith-driven transformation.
                </p>
            </div>
             <div className="text-center">
                <Eye size={40} className="mx-auto text-red-800"/>
                <h3 className="mt-4 text-2xl font-bold text-stone-800">Our Vision</h3>
                <p className="mt-2 text-stone-600 leading-relaxed">
                 A world where individuals and communities, once defined by limitations, live out their full potential with confidence, purpose, and unshakeable hope.
                </p>
            </div>
        </div>
      </section>

      {/* 4. Core Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 tracking-tight">Our Core Values</h2>
            <p className="mt-3 max-w-2xl mx-auto text-lg text-stone-600">
              These principles are the bedrock of our work, guiding every decision we make.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map(value => (
              <div key={value.title} className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm text-center">
                <div className="mx-auto bg-red-100 text-red-800 rounded-full w-16 h-16 flex items-center justify-center">
                    {value.icon}
                </div>
                <h4 className="mt-5 text-lg font-bold text-stone-800">{value.title}</h4>
                <p className="mt-2 text-sm text-stone-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 5. Impact Counter - Re-used for context */}
        <section className="py-20 bg-stone-800 text-white">
            <div className="max-w-5xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                        Our Journey So Far
                    </h2>
                    <p className="mt-2 text-md text-stone-300">Here's a snapshot of the progress we've made together.</p>
                </div>
                {/* A custom-styled ImpactCounter for this dark background */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                    <div className="bg-white/10 p-6 rounded-xl">
                        <h3 className="text-5xl font-extrabold text-amber-400">120+</h3>
                        <p className="mt-2 font-semibold text-stone-200">Lives Touched</p>
                    </div>
                     <div className="bg-white/10 p-6 rounded-xl">
                        <h3 className="text-5xl font-extrabold text-amber-400">35+</h3>
                        <p className="mt-2 font-semibold text-stone-200">Active Volunteers</p>
                    </div>
                     <div className="bg-white/10 p-6 rounded-xl">
                        <h3 className="text-5xl font-extrabold text-amber-400">10+</h3>
                        <p className="mt-2 font-semibold text-stone-200">Community Projects</p>
                    </div>
                </div>
            </div>
        </section>

      {/* 6. Call to Action */}
      <section className="bg-amber-400">
         <div className="max-w-4xl mx-auto px-6 py-16 text-center">
             <h2 className="text-3xl sm:text-4xl font-bold text-stone-900">
                Be a Part of the Story
             </h2>
             <p className="mt-4 max-w-xl mx-auto text-lg text-stone-800">
                Our work is only possible through the generosity and commitment of partners like you. Join us in our mission to bring hope and lasting change.
             </p>
             <div className="mt-8 flex justify-center gap-4">
                <Link
                    to="/get-involved"
                    className="bg-red-800 text-white font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-red-700 transition-transform transform hover:scale-105"
                >
                    Get Involved
                </Link>
                <Link
                    to="/donate"
                    className="bg-white text-stone-800 font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-stone-100 transition-transform transform hover:scale-105"
                >
                    Donate Now
                </Link>
             </div>
         </div>
      </section>
    </div>
  );
}