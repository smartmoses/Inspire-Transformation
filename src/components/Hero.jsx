import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Heart, Zap } from 'lucide-react';

const stats = [
  { value: '120+', label: 'Lives Touched', icon: <Heart className="w-6 h-6 mx-auto mb-1 text-amber-300" /> },
  { value: '35+', label: 'Active Volunteers', icon: <Users className="w-6 h-6 mx-auto mb-1 text-amber-300" /> },
  { value: '10+', label: 'Community Projects', icon: <Zap className="w-6 h-6 mx-auto mb-1 text-amber-300" /> },
];

const formInputs = [
  { name: 'fullName', placeholder: 'Your Full Name', type: 'text', required: true },
  { name: 'email', placeholder: 'Your Email Address', type: 'email', required: true },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const PartnershipForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    partnerType: 'Individual',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.fullName}! Your partnership inquiry has been received.`);
    setFormData({ fullName: '', email: '', partnerType: 'Individual', message: '' });
  };
  
  return (
    <motion.div variants={itemVariants} className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 text-stone-800">
      <h3 className="font-bold text-xl text-center mb-1">Partner With Us</h3>
      <p className="text-sm text-stone-600 text-center mb-6">
        Let's create lasting change together. We'll reply within 48 hours.
      </p>
      <form onSubmit={handleSubmit} className="grid gap-4">
        {formInputs.map(input => (
          <div key={input.name}>
            <label htmlFor={input.name} className="sr-only">{input.placeholder}</label>
            <input
              id={input.name}
              name={input.name}
              type={input.type}
              value={formData[input.name]}
              onChange={handleChange}
              placeholder={input.placeholder}
              required={input.required}
              className="w-full border-stone-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-700 outline-none transition"
            />
          </div>
        ))}
        <div>
          <label htmlFor="partnerType" className="sr-only">Type of Partnership</label>
          <select 
            id="partnerType"
            name="partnerType" 
            value={formData.partnerType}
            onChange={handleChange}
            className="w-full border-stone-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-700 outline-none transition"
          >
            <option>As an Individual</option>
            <option>As an Organization</option>
            <option>As a Church</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="sr-only">How would you like to partner?</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Briefly, how would you like to partner with us?"
            rows={3}
            className="w-full border-stone-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-700 outline-none transition"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-red-800 text-white font-semibold px-5 py-3 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800 transition shadow-md"
        >
          Submit Inquiry
        </button>
      </form>
    </motion.div>
  );
};

export default function Hero() {
  return (
    <section className="relative bg-hero-pattern bg-cover bg-center text-white">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center md:text-left"
          >
            <motion.h1 variants={itemVariants} className="text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight drop-shadow-lg">
              Empowering Lives, <br className="hidden md:block" /> Rebuilding with Hope
            </motion.h1>
            <motion.p variants={itemVariants} className="mt-6 text-lg text-stone-200 max-w-xl mx-auto md:mx-0">
              We are a faith-driven NGO dedicated to creating resilient communities by partnering with individuals, churches, and organizations to create lasting change.
            </motion.p>
            <motion.div variants={itemVariants} className="mt-10 flex flex-wrap justify-center md:justify-start gap-4">
              <Link
                to="/get-involved"
                className="inline-block bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition-transform transform hover:scale-105"
              >
                Partner With Us
              </Link>
              <Link
                to="/donate"
                className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-800 transition"
              >
                Donate
              </Link>
            </motion.div>
            <motion.div variants={itemVariants} className="mt-12 grid grid-cols-3 gap-6 text-center">
              {stats.map((stat) => (
                <div key={stat.label}>
                  {stat.icon}
                  <div className="text-3xl font-bold tracking-tighter">{stat.value}</div>
                  <div className="text-sm text-stone-300">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
          <PartnershipForm />
        </div>
      </div>
    </section>
  );
}