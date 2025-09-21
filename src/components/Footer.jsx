import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Youtube, Send, CheckCircle } from 'lucide-react';

import { ThreadsIcon } from '../routes/ThreadsIcon';
import { TikTokIcon } from '../routes/TikTokIcon';

const quickLinks = [
  { to: "/about", label: "About Us" },
  { to: "/programs", label: "Our Programs" },
  { to: "/media", label: "Media Center" },
  { to: "/get-involved", label: "Get Involved" },
];

const socialLinks = [
  { href: "https://www.facebook.com/share/1CPyqqrDde/?mibextid=wwXIfr", icon: Facebook, label: "Facebook" },
  { href: "https://www.instagram.com/inspiretransformationpodcast?igsh=MXdpZmVhYmgybmFzaQ%3D%3D&utm_source=qr", icon: Instagram, label: "Instagram" },
  { href: "https://youtube.com/@inspiretransformationpodcast?si=EQ7ZKCp-BVTCXVcb", icon: Youtube, label: "YouTube" },
  { href: "https://www.tiktok.com/@inspiretransformationpod?_t=ZP-8zGKaFnJHwt&_r=1", icon: TikTokIcon, label: "TikTok" },
  { href: "https://www.threads.com/@inspiretransformationpodcast?igshid=NTc4MTIwNjQ2YQ==", icon: ThreadsIcon, label: "Threads" },
];

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

export default function Footer() {
  const [newsletterStatus, setNewsletterStatus] = useState('idle');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    setNewsletterStatus('success');
    // In a real app, you would handle the API submission here.
    console.log(`Newsletter subscription for: ${email}`);
    setTimeout(() => {
        e.target.reset();
        setNewsletterStatus('idle');
    }, 3000);
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t-4 border-red-800">
      <motion.div 
        className="max-w-7xl mx-auto px-6 lg:px-8 py-16 sm:py-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand & Mission */}
          <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-1">
             <Link to="/" className="flex items-center gap-3 mb-4">
              <img src="/logo 2.png" alt="Inspire Transformation Logo" className="h-12" />
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 mt-5">
              A safe space where real stories meet raw truth, empowering you to embrace limitless possibilities in God.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a 
                      key={social.label} 
                      href={social.href} 
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-red-500 transition-colors"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                    >
                      <Icon size={22} />
                    </motion.a>
                  )
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-white mb-5 tracking-wider uppercase text-sm">Quick Links</h4>
            <ul className="space-y-3 text-base">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-red-400 transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
               <li>
                  <Link to="/donate" className="text-amber-400 hover:text-amber-300 font-bold transition-colors duration-300">
                    Give Now
                  </Link>
                </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-white mb-5 tracking-wider uppercase text-sm">Contact Us</h4>
            <ul className="space-y-3 text-base">
              <li><a href="mailto:info@inspire-transformation.com" className="hover:text-red-400 transition-colors duration-300">info@inspire-transformation.com</a></li>
              <li className="text-slate-400">A Global Faith Community</li>
            </ul>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-white mb-5 tracking-wider uppercase text-sm">Stay Updated</h4>
            <p className="text-sm mb-4 text-slate-400">Subscribe for the latest stories and updates from our community.</p>
            {newsletterStatus === 'success' ? (
                <div className="flex items-center gap-2 text-emerald-400 bg-emerald-900/50 p-3 rounded-md">
                    <CheckCircle size={20} />
                    <span>Thank you for subscribing!</span>
                </div>
            ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex">
                  <label htmlFor="email-newsletter" className="sr-only">Email address</label>
                  <input 
                    id="email-newsletter"
                    name="email"
                    type="email" 
                    required
                    placeholder="Your email address"
                    className="w-full bg-slate-800 border border-slate-700 text-white px-4 py-2.5 rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-600 text-sm"
                  />
                  <button 
                    type="submit" 
                    aria-label="Subscribe to newsletter"
                    className="bg-red-800 hover:bg-red-700 text-white px-4 py-2.5 rounded-r-md transition-colors flex items-center"
                  >
                    <Send size={20} />
                  </button>
                </form>
            )}
          </motion.div>

        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="bg-slate-900/50 border-t border-slate-800 text-sm text-center py-6">
        <p className="text-slate-500">&copy; {new Date().getFullYear()} Inspire Transformation. All Rights Reserved.</p>
      </div>
    </footer>
  );
}