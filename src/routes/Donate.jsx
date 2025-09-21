import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, PieChart, Repeat, Gift } from 'lucide-react';

// Import the interactive DonateTiers component
import DonateTiers from '../components/DonateTiers';

// Data for "Where Your Money Goes"
const allocationData = [
    { label: "Education & Skills", percentage: 40, color: "bg-red-800" },
    { label: "Community Empowerment", percentage: 30, color: "bg-red-600" },
    { label: "Relief & Outreach", percentage: 20, color: "bg-amber-500" },
    { label: "Administration", percentage: 10, color: "bg-gray-400" },
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

export default function DonatePage() {
  return (
    <motion.div 
        className="bg-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
    >
      {/* 1. Page Header */}
      <section className="bg-white py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
             initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
             className="mx-auto bg-red-100 text-red-800 rounded-full w-20 h-20 flex items-center justify-center"
          >
            <Gift size={40} />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-4xl sm:text-5xl font-bold text-gray-800 tracking-tight"
          >
            Become a Partner in Hope
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Your gift fuels programs that provide hope, education, and sustainable solutions to break cycles of poverty and despair.
          </motion.p>
        </div>
      </section>
      
      {/* 2. Main Donation Section */}
      <section className="py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-6">
            <motion.h2 
                className="text-3xl font-bold text-gray-800 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
            >
                Make Your One-Time Gift
            </motion.h2>
            <motion.p 
                className="text-center mt-2 text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                A single act of kindness can change a life. Choose a tier or give from the heart.
            </motion.p>
            <motion.div 
                className="mt-10"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <DonateTiers />
            </motion.div>
            <motion.div 
                className="mt-8 text-center flex items-center justify-center gap-2 text-sm text-gray-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <Lock size={14} />
                <span>Secure SSL Encrypted Payment</span>
            </motion.div>
        </div>
      </section>

      {/* 3. Monthly Support Section */}
      <section className="bg-gray-800 text-white py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                 <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                    Become a Monthly Changemaker
                </h2>
                <p className="mt-4 text-lg text-gray-300 leading-relaxed">
                   Sustained giving is the most powerful way to create lasting change. As a monthly supporter, you help us plan for the future, expand our programs, and respond immediately to urgent needs. You become the bedrock of our mission.
                </p>
                <div className="mt-8">
                     <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link to="/contact" className="bg-amber-500 text-white font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-amber-600 transition-colors">
                            Setup Monthly Gift
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
             <motion.div 
                className="bg-white/10 p-8 rounded-2xl flex items-center gap-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
                <div className="text-amber-400">
                    <Repeat size={48} />
                </div>
                <div>
                    <h3 className="text-xl font-bold">Your Consistent Support Ensures:</h3>
                    <ul className="mt-3 space-y-2 text-gray-300 list-disc list-inside">
                        <li>Long-term mentorship relationships</li>
                        <li>Continuous community workshops</li>
                        <li>Predictable aid for families in need</li>
                    </ul>
                </div>
            </motion.div>
        </div>
      </section>

      {/* 4. Transparency & Impact Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            {/* Visual Allocation Chart */}
            <motion.div 
                className="order-2 lg:order-1"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h3 className="text-2xl font-bold text-gray-800">Where Your Money Goes</h3>
                <p className="mt-2 text-gray-600">We are committed to transparency and good stewardship. Here's a breakdown of how your gift is used.</p>
                <div className="mt-6 space-y-4">
                    {allocationData.map((item, index) => (
                        <motion.div 
                            key={item.label}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className="flex justify-between font-semibold text-gray-700 mb-1">
                                <span>{item.label}</span>
                                <span>{item.percentage}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-4">
                                <motion.div 
                                    className={`${item.color} h-4 rounded-full`}
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${item.percentage}%` }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                                ></motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
            {/* Impact Story */}
            <motion.div 
                className="order-1 lg:order-2 bg-gray-50 p-8 rounded-2xl border border-gray-200"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="flex items-center gap-4">
                     <img 
                        src="https://i.pravatar.cc/150?u=grace" // Placeholder image
                        alt="Grace Nwosu"
                        className="w-20 h-20 rounded-full object-cover shadow-md"
                     />
                     <div>
                        <h3 className="text-xl font-bold text-gray-800">A Story of Hope</h3>
                        <p className="text-sm text-gray-500">Grace's Journey</p>
                     </div>
                </div>
                <blockquote className="mt-4 text-gray-600 italic border-l-4 border-amber-400 pl-4">
                    "Before the skills workshop, I felt lost. This program didn't just teach me a trade; it restored my dignity and gave my family a future. My ₦5,000 donation didn't just disappear—it became someone's new beginning."
                </blockquote>
            </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
