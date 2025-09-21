import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BarChart2, FileText, ArrowRight, Quote } from 'lucide-react';
import ImpactCounter from '../components/ImpactCounter'; // Re-using our great counter component

// --- Data for the new sections ---
const storiesOfChange = [
    {
        name: "Joy's Story",
        image: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?q=80&w=2053&auto=format&fit=crop",
        quote: "Once struggling with self-doubt, I found confidence through the mentorship program. It wasn't just about skills; it was about rediscovering my own worth. Now, I'm honored to be a mentor to others.",
        category: "Mentorship Program Graduate"
    },
    {
        name: "The Ade Family's Journey",
        image: "https://images.unsplash.com/photo-1504307797824-378a87f102b3?q=80&w=2070&auto=format&fit=crop",
        quote: "The support we received during a difficult season was more than just food; it was a lifeline of hope. It inspired us to give back, and now we volunteer regularly to support other families.",
        category: "Community Support Recipient"
    }
];

const impactReports = [
    { title: "2024 Annual Impact Report", description: "A comprehensive look at our achievements, financials, and stories from the past year.", link: "/reports/annual-report-2024.pdf" },
    { title: "Q3 2025 Community Outreach Summary", description: "An overview of our most recent quarterly activities and their direct impact on the community.", link: "/reports/q3-2025-summary.pdf" }
];

export default function ImpactPage() {
  return (
    <div className="bg-white">
      {/* 1. Page Header */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}
                className="mx-auto bg-red-100 text-red-800 rounded-full w-20 h-20 flex items-center justify-center"
            >
                <BarChart2 size={40} />
            </motion.div>
            <motion.h1 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 text-4xl sm:text-5xl font-bold text-gray-800 tracking-tight"
            >
                Our Measured Impact
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
            >
                Transformation is visible in lives restored and communities strengthened. We track both the stories and the numbers to ensure lasting change.
            </motion.p>
        </div>
      </section>
      
      {/* 2. Impact in Numbers Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
                 <h2 className="text-3xl font-bold text-gray-800 tracking-tight">
                    By the Numbers
                </h2>
                <p className="mt-2 text-md text-gray-600">Each number represents a real person, a real family, a real story of hope.</p>
            </div>
            <ImpactCounter />
        </div>
      </section>

      {/* 3. "Stories of Change" Spotlight Section */}
      <section className="bg-gray-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
                 <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                    Stories of Change
                </h2>
                <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-300">
                   Beyond the data, we celebrate the individuals who embody the spirit of transformation.
                </p>
            </div>
            <div className="space-y-20">
                {storiesOfChange.map((story, index) => (
                    <motion.div 
                        key={story.name}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''}`}
                    >
                        <div className={`relative h-96 ${index % 2 !== 0 ? 'lg:col-start-2' : ''}`}>
                            <div className={`absolute top-0 left-0 w-full h-full bg-amber-400 rounded-2xl transform ${index % 2 !== 0 ? 'rotate-3' : '-rotate-3'}`}></div>
                             <img src={story.image} alt={story.name} className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl"/>
                        </div>
                        <div className="relative">
                            <Quote size={48} className="absolute -top-8 -left-4 text-gray-700" />
                            <blockquote className="text-2xl italic text-gray-100 leading-relaxed">
                                {story.quote}
                            </blockquote>
                            <footer className="mt-6">
                                <p className="text-xl font-bold text-white">{story.name}</p>
                                <p className="text-amber-400 font-semibold">{story.category}</p>
                            </footer>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* 4. Reports & Accountability Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 tracking-tight">Transparency & Accountability</h2>
                <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-600">
                    We believe in stewarding every resource with integrity. Our reports are available to our partners and community.
                </p>
            </div>
            <div className="space-y-6">
                {impactReports.map(report => (
                    <a href={report.link} key={report.title} target="_blank" rel="noopener noreferrer" className="group block bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-red-800 hover:shadow-lg transition-all">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="bg-red-100 text-red-800 p-3 rounded-full">
                                    <FileText />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 group-hover:text-red-800">{report.title}</h3>
                                    <p className="text-sm text-gray-600">{report.description}</p>
                                </div>
                            </div>
                            <ArrowRight className="text-gray-400 group-hover:text-red-800 transition-transform group-hover:translate-x-1" />
                        </div>
                    </a>
                ))}
            </div>
        </div>
      </section>
      
      {/* 5. Final CTA */}
       <section className="bg-amber-400">
         <div className="max-w-4xl mx-auto px-6 py-16 text-center">
             <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Your Support Multiplies Our Impact
             </h2>
             <p className="mt-4 max-w-xl mx-auto text-lg text-gray-800">
                Every number grows with you. Partner with us today to help us write the next chapter of transformation in our community.
             </p>
             <div className="mt-8">
                <Link
                    to="/donate"
                    className="bg-red-800 text-white font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-red-700 transition-transform transform hover:scale-105"
                >
                    Give a Gift of Hope
                </Link>
             </div>
         </div>
      </section>
    </div>
  );
}