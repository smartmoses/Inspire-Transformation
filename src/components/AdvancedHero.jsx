import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AdvancedHero() {
  return (
    <div className="relative min-h-[600px] flex items-center bg-gradient-to-br from-rose-50 to-slate-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-grid-slate-800/20"></div>
      </div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 leading-tight">
              Transforming Lives Through{' '}
              <span className="text-rose-600">Community Action</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
              Join us in our mission to create lasting positive change. Together, we can build 
              stronger communities and brighter futures for those in need.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/get-involved"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-rose-600 text-white font-medium hover:bg-rose-700 transition-colors"
              >
                Get Involved
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/donate"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-rose-600 font-medium border-2 border-rose-600 hover:bg-rose-50 transition-colors"
              >
                Donate Now
              </Link>
            </div>
          </motion.div>

          {/* Image/Stats Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop"
                alt="Community impact"
                className="w-full h-[400px] object-cover"
              />
              {/* Stats Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="grid grid-cols-3 gap-4 text-white">
                  <div>
                    <div className="text-2xl font-bold">1000+</div>
                    <div className="text-sm opacity-80">Lives Impacted</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">15+</div>
                    <div className="text-sm opacity-80">Active Programs</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">5</div>
                    <div className="text-sm opacity-80">Communities</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}