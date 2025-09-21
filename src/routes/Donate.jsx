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
    { label: "Administration", percentage: 10, color: "bg-stone-400" },
];

export default function DonatePage() {
  return (
    <div className="bg-stone-50">
      {/* 1. Page Header */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
             initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
             className="mx-auto bg-red-100 text-red-800 rounded-full w-20 h-20 flex items-center justify-center"
          >
            <Gift size={40} />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-4xl sm:text-5xl font-bold text-stone-800 tracking-tight"
          >
            Become a Partner in Hope
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 text-lg text-stone-600 max-w-2xl mx-auto"
          >
            Your gift fuels programs that provide hope, education, and sustainable solutions to break cycles of poverty and despair.
          </motion.p>
        </div>
      </section>
      
      {/* 2. Main Donation Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-stone-800 text-center">Make Your One-Time Gift</h2>
            <p className="text-center mt-2 text-stone-600">A single act of kindness can change a life. Choose a tier or give from the heart.</p>
            <div className="mt-10">
                <DonateTiers />
            </div>
            <div className="mt-8 text-center flex items-center justify-center gap-2 text-sm text-stone-500">
                <Lock size={14} />
                <span>Secure SSL Encrypted Payment</span>
            </div>
        </div>
      </section>

      {/* 3. Monthly Support Section */}
      <section className="bg-stone-800 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
            <div>
                 <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                    Become a Monthly Changemaker
                </h2>
                <p className="mt-4 text-lg text-stone-300 leading-relaxed">
                   Sustained giving is the most powerful way to create lasting change. As a monthly supporter, you help us plan for the future, expand our programs, and respond immediately to urgent needs. You become the bedrock of our mission.
                </p>
                <div className="mt-8">
                     <Link to="/contact" className="bg-amber-500 text-white font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-amber-600 transition-transform transform hover:scale-105">
                        Setup Monthly Gift
                    </Link>
                </div>
            </div>
             <div className="bg-white/10 p-8 rounded-2xl flex items-center gap-6">
                <div className="text-amber-400">
                    <Repeat size={48} />
                </div>
                <div>
                    <h3 className="text-xl font-bold">Your Consistent Support Ensures:</h3>
                    <ul className="mt-3 space-y-2 text-stone-300 list-disc list-inside">
                        <li>Long-term mentorship relationships</li>
                        <li>Continuous community workshops</li>
                        <li>Predictable aid for families in need</li>
                    </ul>
                </div>
            </div>
        </div>
      </section>

      {/* 4. Transparency & Impact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            {/* Visual Allocation Chart */}
            <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-bold text-stone-800">Where Your Money Goes</h3>
                <p className="mt-2 text-stone-600">We are committed to transparency and good stewardship. Here's a breakdown of how your gift is used.</p>
                <div className="mt-6 space-y-4">
                    {allocationData.map(item => (
                        <div key={item.label}>
                            <div className="flex justify-between font-semibold text-stone-700 mb-1">
                                <span>{item.label}</span>
                                <span>{item.percentage}%</span>
                            </div>
                            <div className="w-full bg-stone-200 rounded-full h-4">
                                <div className={`${item.color} h-4 rounded-full`} style={{ width: `${item.percentage}%` }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Impact Story */}
            <div className="order-1 lg:order-2 bg-stone-50 p-8 rounded-2xl border border-stone-200">
                <div className="flex items-center gap-4">
                     <img 
                        src="https://i.pravatar.cc/150?u=grace" // Placeholder image
                        alt="Grace Nwosu"
                        className="w-20 h-20 rounded-full object-cover shadow-md"
                     />
                     <div>
                        <h3 className="text-xl font-bold text-stone-800">A Story of Hope</h3>
                        <p className="text-sm text-stone-500">Grace's Journey</p>
                     </div>
                </div>
                <blockquote className="mt-4 text-stone-600 italic border-l-4 border-amber-400 pl-4">
                    "Before the skills workshop, I felt lost. This program didn't just teach me a trade; it restored my dignity and gave my family a future. My ₦5,000 donation didn't just disappear—it became someone's new beginning."
                </blockquote>
            </div>
        </div>
      </section>
    </div>
  );
}