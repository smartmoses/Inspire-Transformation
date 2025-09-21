import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../utils/constants'; // Make sure this path is correct

export default function StoryReelTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setActiveIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length),
      7000 // Change story every 7 seconds
    );
    return () => resetTimeout();
  }, [activeIndex]);
  
  const handleThumbClick = (index) => {
    setActiveIndex(index);
  };

  const activeTestimonial = TESTIMONIALS[activeIndex];

  return (
    <section className="bg-slate-900 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Stories of Transformation
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-300">
            Hear directly from the individuals, volunteers, and partners at the heart of our mission.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Main Display */}
          <div className="lg:col-span-2 relative h-[24rem] rounded-2xl overflow-hidden">
            <AnimatePresence>
                <motion.img
                    key={`img-${activeIndex}`}
                    src={activeTestimonial.image}
                    alt={activeTestimonial.name}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white">
                <AnimatePresence mode="wait">
                     <motion.blockquote
                        key={`quote-${activeIndex}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative"
                    >
                        <Quote className="absolute -top-4 -left-4 text-white/20" size={32} />
                        <p className="text-2xl font-semibold italic">
                            “{activeTestimonial.quote}”
                        </p>
                    </motion.blockquote>
                </AnimatePresence>
            </div>
          </div>

          {/* Navigation Reel */}
          <div className="flex flex-col space-y-4 h-full">
            {TESTIMONIALS.map((testimonial, index) => (
              <button
                key={index}
                onClick={() => handleThumbClick(index)}
                className="relative w-full text-left p-4 rounded-xl bg-slate-800 border-2 border-transparent hover:border-red-500 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className={`w-14 h-14 rounded-full object-cover transition-all duration-300 ${activeIndex === index ? 'ring-2 ring-red-500 ring-offset-4 ring-offset-slate-800' : 'opacity-70'}`}
                  />
                  <div>
                    <p className={`font-bold text-white transition-colors ${activeIndex !== index && 'opacity-70'}`}>
                        {testimonial.name}
                    </p>
                    <p className={`text-sm text-slate-400 transition-colors ${activeIndex !== index && 'opacity-70'}`}>
                        {testimonial.title}
                    </p>
                  </div>
                </div>
                {activeIndex === index && (
                    <div className="absolute bottom-0 left-2 right-2 h-1 bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-red-500"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 7, ease: "linear" }}
                        />
                    </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}