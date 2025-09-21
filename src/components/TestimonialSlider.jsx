import React, { useState, useEffect, useCallback } from 'react';
import { TESTIMONIALS } from '../utils/constants'; // Make sure this path is correct
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
  }, []);

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000); // Change testimonial every 5 seconds
    return () => clearInterval(interval);
  }, [nextTestimonial]);

  const testimonial = TESTIMONIALS[currentIndex];

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section className="bg-stone-50 py-16">
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-2xl shadow-xl border border-stone-200 overflow-hidden">
        <div className="absolute top-8 left-8 text-red-100">
            <Quote size={64} />
        </div>
        <div className="relative flex items-center justify-center min-h-[20rem] p-8">
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: 'spring', stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                    }}
                    className="absolute w-full px-12 text-center"
                >
                    <p className="text-xl italic text-stone-700 leading-relaxed">
                        “{testimonial.quote}”
                    </p>
                    <footer className="mt-6">
                        <div className="mx-auto h-16 w-16 mb-3">
                           <img 
                                src={testimonial.image || `https://i.pravatar.cc/150?u=${testimonial.name}`} 
                                alt={testimonial.name}
                                className="w-full h-full rounded-full object-cover shadow-md"
                            />
                        </div>
                        <div className="font-bold text-stone-800">{testimonial.name}</div>
                        <div className="text-sm text-stone-500">{testimonial.title}</div>
                    </footer>
                </motion.div>
            </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevTestimonial}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/50 hover:bg-white text-stone-600 hover:text-red-800 transition shadow-md"
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/50 hover:bg-white text-stone-600 hover:text-red-800 transition shadow-md"
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </button>

         {/* Dots / Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex justify-center gap-2">
            {TESTIMONIALS.map((_, idx) => (
            <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 w-2 rounded-full transition-colors ${
                idx === currentIndex ? 'bg-red-800' : 'bg-stone-300 hover:bg-stone-400'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
            />
            ))}
        </div>
      </div>
    </section>
  );
}

/*
  // HOW TO USE THIS COMPONENT

  // Your TESTIMONIALS constant in '../utils/constants.js' should look like this:
  
  export const TESTIMONIALS = [
    {
      name: 'Sarah Johnson',
      title: 'Workshop Participant',
      quote: 'The mentorship program completely changed my perspective. I feel more confident and equipped for the future.',
      image: '/images/testimonials/sarah-j.jpg', // Add paths to your images
    },
    {
      name: 'David Chen',
      title: 'Community Volunteer',
      quote: 'Volunteering with Inspire Transformation has been a deeply rewarding experience. Seeing the direct impact on people\'s lives is incredible.',
      image: '/images/testimonials/david-c.jpg',
    },
    // ... more testimonials
  ];
*/