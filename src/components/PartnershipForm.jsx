import React, { useState, useEffect } from 'react';
import { submitLeadStub } from '../services/placeholder'; // Assuming this service exists
import { User, Mail, Building, MessageSquare, Loader2, CheckCircle, AlertTriangle } from 'lucide-react';

// --- Reusable FormField Component ---
const FormField = ({ id, label, icon, ...props }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-semibold text-stone-700 mb-1">
      {label}
    </label>
    <div className="relative">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-stone-400">
        {icon}
      </span>
      {props.as === 'select' ? (
        <select id={id} name={id} {...props} className="w-full border-stone-300 rounded-lg pl-10 pr-4 py-2.5 focus:ring-2 focus:ring-red-700 outline-none transition" />
      ) : props.as === 'textarea' ? (
        <textarea id={id} name={id} {...props} className="w-full border-stone-300 rounded-lg pl-10 pr-4 py-2 focus:ring-2 focus:ring-red-700 outline-none transition" />
      ) : (
        <input id={id} name={id} {...props} className="w-full border-stone-300 rounded-lg pl-10 pr-4 py-2 focus:ring-2 focus:ring-red-700 outline-none transition" />
      )}
    </div>
  </div>
);

// --- Main Partnership Form Component ---
export default function PartnershipForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    type: 'Individual',
    message: '',
  });
  const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'

  // Automatically clear status messages after 4 seconds
  useEffect(() => {
    if (status === 'success' || status === 'error') {
      const timer = setTimeout(() => setStatus(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await submitLeadStub(form); // Your actual API call
      setStatus('success');
      setForm({ name: '', email: '', type: 'Individual', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-2xl mx-auto border border-stone-200">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-stone-800">Become a Partner</h2>
        <p className="text-stone-600 mt-2">Join us in our mission to create lasting change. We'd love to hear from you.</p>
      </div>
      <form onSubmit={handleSubmit} className="grid gap-6">
        <FormField
          id="name"
          label="Full Name"
          type="text"
          placeholder="Enter your full name"
          value={form.name}
          onChange={handleChange}
          icon={<User size={18} />}
          required
        />
        <FormField
          id="email"
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
          icon={<Mail size={18} />}
          required
        />
        <FormField
          id="type"
          label="Partnership Type"
          as="select"
          value={form.type}
          onChange={handleChange}
          icon={<Building size={18} />}
        >
          <option>Individual</option>
          <option>Organization</option>
          <option>Church</option>
        </FormField>
        <FormField
          id="message"
          label="How would you like to partner?"
          as="textarea"
          rows={4}
          placeholder="Briefly describe your interest..."
          value={form.message}
          onChange={handleChange}
          icon={<MessageSquare size={18} />}
        />

        <div>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full flex items-center justify-center bg-red-800 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 text-base"
            aria-busy={status === 'loading'}
          >
            {status === 'loading' ? (
              <>
                <Loader2 size={20} className="animate-spin mr-2" />
                Sending...
              </>
            ) : (
              'Submit Partnership Inquiry'
            )}
          </button>
        </div>

        {/* Status Messages */}
        {status === 'success' && (
          <div className="flex items-center text-emerald-700 font-semibold p-3 bg-emerald-50 rounded-lg">
            <CheckCircle size={20} className="mr-2" />
            <span>Thank you! We've received your inquiry and will be in touch soon.</span>
          </div>
        )}
        {status === 'error' && (
          <div className="flex items-center text-red-700 font-semibold p-3 bg-red-50 rounded-lg">
            <AlertTriangle size={20} className="mr-2" />
            <span>Oops! Something went wrong. Please try again later.</span>
          </div>
        )}
      </form>
    </div>
  );
}