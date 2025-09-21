import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, MessageSquare, Loader2, CheckCircle, XCircle } from 'lucide-react';

// Reusable FormField component for cleaner code
const FormField = ({ id, label, type = 'text', placeholder, value, onChange, icon, required = true, as = 'input' }) => {
  const commonProps = {
    id,
    name: id,
    className: "w-full border-stone-300 rounded-lg pl-10 pr-4 py-2 focus:ring-2 focus:ring-red-700 outline-none transition-all duration-200",
    placeholder,
    value,
    onChange,
    required,
  };

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-stone-700 mb-1">
        {label}
      </label>
      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-stone-400">
          {icon}
        </span>
        {as === 'textarea' ? (
          <motion.textarea 
            {...commonProps} 
            rows={5}
            whileFocus={{ borderColor: '#dc2626', boxShadow: '0 0 0 2px rgba(220, 38, 38, 0.5)' }}
          ></motion.textarea>
        ) : (
          <motion.input 
            type={type} 
            {...commonProps} 
            whileFocus={{ borderColor: '#dc2626', boxShadow: '0 0 0 2px rgba(220, 38, 38, 0.5)' }}
          />
        )}
      </div>
    </div>
  );
};

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // 'sending', 'sent', 'error'
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };
  
  // Clear success/error message after 3 seconds
  useEffect(() => {
    if (status === 'sent' || status === 'error') {
      const timer = setTimeout(() => setStatus(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Demo: mimic async request
    setTimeout(() => {
      // You can add logic here to randomly fail for demo purposes if needed
      const success = Math.random() > 0.2; // 80% success rate for demo
      if (success) {
        setStatus('sent');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    }, 1500);
  };

  return (
    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg w-full max-w-xl border border-stone-200">
      <form onSubmit={handleSubmit} className="grid gap-6">
        <FormField
          id="name"
          label="Full Name"
          placeholder="Enter your name"
          value={form.name}
          onChange={handleChange}
          icon={<User size={18} />}
        />
        <FormField
          id="email"
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
          icon={<Mail size={18} />}
        />
        <FormField
          id="message"
          label="Your Message"
          placeholder="How can we help?"
          as="textarea"
          value={form.message}
          onChange={handleChange}
          icon={<MessageSquare size={18} />}
        />
        
        <div className="flex flex-col items-start">
          <motion.button
            type="submit"
            disabled={status === 'sending'}
            className="w-full sm:w-auto flex items-center justify-center bg-red-800 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold shadow-md disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {status === 'sending' ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center"
              >
                <Loader2 size={20} className="animate-spin mr-2" />
                Sending...
              </motion.div>
            ) : (
              'Send Message'
            )}
          </motion.button>

          {/* Submission Status Message */}
          <AnimatePresence>
            {status === 'sent' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="mt-4 flex items-center text-emerald-600 font-semibold text-sm p-3 bg-emerald-50 rounded-lg"
              >
                <CheckCircle size={20} className="mr-2" />
                <span>Thank you! Your message has been sent successfully.</span>
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="mt-4 flex items-center text-red-600 font-semibold text-sm p-3 bg-red-50 rounded-lg"
              >
                <XCircle size={20} className="mr-2" />
                <span>Oops! Something went wrong. Please try again.</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </form>
    </div>
  );
}
