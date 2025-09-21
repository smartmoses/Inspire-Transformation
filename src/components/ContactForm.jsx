import React, { useState, useEffect } from 'react';
import { User, Mail, MessageSquare, Loader2, CheckCircle } from 'lucide-react';

// Reusable FormField component for cleaner code
const FormField = ({ id, label, type = 'text', placeholder, value, onChange, icon, required = true, as = 'input' }) => {
  const commonProps = {
    id,
    name: id,
    className: "w-full border-stone-300 rounded-lg pl-10 pr-4 py-2 focus:ring-2 focus:ring-red-700 outline-none transition",
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
          <textarea {...commonProps} rows={5}></textarea>
        ) : (
          <input type={type} {...commonProps} />
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
  
  // Clear success message after 3 seconds
  useEffect(() => {
    if (status === 'sent') {
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
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
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
          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full sm:w-auto flex items-center justify-center bg-red-800 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold shadow-md disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
            aria-live="polite"
            aria-busy={status === 'sending'}
          >
            {status === 'sending' ? (
              <>
                <Loader2 size={20} className="animate-spin mr-2" />
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>

          {/* Submission Status Message */}
          {status === 'sent' && (
            <div className="mt-4 flex items-center text-emerald-600 font-semibold text-sm p-3 bg-emerald-50 rounded-lg">
              <CheckCircle size={20} className="mr-2" />
              <span>Thank you! Your message has been sent successfully.</span>
            </div>
          )}
          {status === 'error' && (
             <div className="mt-4 text-red-600 font-semibold">
              <span>Oops! Something went wrong. Please try again.</span>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}