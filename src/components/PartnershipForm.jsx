import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Building, Church, MessageSquare, ArrowRight, ArrowLeft, Loader2, CheckCircle } from 'lucide-react';
import { submitLeadStub } from '../services/placeholder'; // Assuming this service exists

const steps = [
  { id: 1, name: 'Your Details' },
  { id: 2, name: 'Partnership Type' },
  { id: 3, name: 'Your Interest' },
];

export default function AdvancedPartnershipForm() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '', email: '', type: 'Individual', orgName: '', volunteerInterest: '', partnershipGoal: ''
    });
    const [status, setStatus] = useState(null);
    const [direction, setDirection] = useState(1);

    const nextStep = () => {
        if (currentStep < steps.length) {
            setDirection(1);
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setDirection(-1);
            setCurrentStep(currentStep - 1);
        }
    };

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        try {
            await submitLeadStub(formData);
            setStatus('success');
        } catch (err) {
            setStatus('error');
            console.error(err);
        }
    };

    const variants = {
        enter: (direction) => ({ opacity: 0, x: direction * 30 }),
        center: { opacity: 1, x: 0 },
        exit: (direction) => ({ opacity: 0, x: direction * -30 }),
    };

    if (status === 'success') {
        return (
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                className="text-center p-6 sm:p-10 bg-white rounded-2xl shadow-2xl border border-zinc-200"
            >
                <CheckCircle className="mx-auto w-12 h-12 sm:w-16 sm:h-16 text-emerald-500" />
                <h2 className="mt-4 sm:mt-6 text-2xl sm:text-3xl font-bold text-zinc-900">Thank You!</h2>
                <p className="mt-2 sm:mt-3 text-base sm:text-lg text-zinc-600">We've received your partnership inquiry and a member of our team will be in touch shortly.</p>
                <button 
                    onClick={() => { 
                        setStatus(null); 
                        setCurrentStep(1); 
                        setFormData({ name: '', email: '', type: 'Individual', orgName: '', volunteerInterest: '', partnershipGoal: '' }); 
                    }} 
                    className="mt-6 sm:mt-8 font-semibold text-red-800 hover:underline"
                >
                    Submit another inquiry
                </button>
            </motion.div>
        );
    }
    
    return (
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-auto border border-zinc-200 overflow-hidden">
            {/* Header with Progress Bar */}
            <div className="p-6 sm:p-8 border-b border-zinc-200">
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-900">Become a Partner</h2>
                <p className="text-zinc-600 mt-1 text-sm sm:text-base">Follow the steps below to get started.</p>
                <div className="mt-4 sm:mt-6">
                    <div className="flex justify-between mb-1">
                        {steps.map(step => (
                            <span key={step.id} className={`text-xs sm:text-sm font-semibold ${currentStep >= step.id ? 'text-red-800' : 'text-zinc-400'}`}>
                                {step.name}
                            </span>
                        ))}
                    </div>
                    <div className="w-full bg-zinc-200 rounded-full h-1.5">
                        <motion.div 
                            className="bg-red-700 h-1.5 rounded-full"
                            initial={{ width: '0%' }}
                            animate={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        />
                    </div>
                </div>
            </div>

            {/* Form Steps */}
            <div className="p-6 sm:p-8">
                <AnimatePresence mode="wait" initial={false} custom={direction}>
                    <motion.form 
                        key={currentStep}
                        variants={variants}
                        custom={direction}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.3 }}
                        onSubmit={handleSubmit} 
                        className="space-y-6"
                    >
                        {currentStep === 1 && (
                            <>
                                <h3 className="text-base sm:text-lg font-semibold text-zinc-800">Step 1: Your Contact Information</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                    <input name="name" type="text" placeholder="Full Name" required value={formData.name} onChange={handleChange} className="w-full bg-zinc-50 border border-zinc-300 rounded-lg p-3 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none" />
                                    <input name="email" type="email" placeholder="Email Address" required value={formData.email} onChange={handleChange} className="w-full bg-zinc-50 border border-zinc-300 rounded-lg p-3 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none" />
                                </div>
                            </>
                        )}

                        {currentStep === 2 && (
                             <>
                                <h3 className="text-base sm:text-lg font-semibold text-zinc-800">Step 2: How would you like to partner?</h3>
                                <div className="space-y-3">
                                    {[
                                        { value: 'Individual', icon: <User size={20} />, label: 'As an Individual' },
                                        { value: 'Organization', icon: <Building size={20} />, label: 'As an Organization' },
                                        { value: 'Church', icon: <Church size={20} />, label: 'As a Church' }
                                    ].map(opt => (
                                        <label key={opt.value} className={`flex items-center gap-3 sm:gap-4 p-3 sm:p-4 border-2 rounded-lg cursor-pointer transition-all ${formData.type === opt.value ? 'border-red-700 bg-red-50' : 'border-zinc-300 hover:border-zinc-400'}`}>
                                            <input type="radio" name="type" value={opt.value} checked={formData.type === opt.value} onChange={handleChange} className="hidden" />
                                            <div className={`p-2 rounded-full ${formData.type === opt.value ? 'bg-red-700 text-white' : 'bg-zinc-200 text-zinc-600'}`}>{opt.icon}</div>
                                            <span className="font-semibold text-sm sm:text-base text-zinc-800">{opt.label}</span>
                                        </label>
                                    ))}
                                </div>
                            </>
                        )}
                        
                        {currentStep === 3 && (
                             <>
                                <h3 className="text-base sm:text-lg font-semibold text-zinc-800">Step 3: Tell us more about your interest</h3>
                                {formData.type === 'Individual' && (
                                     <textarea name="volunteerInterest" placeholder="What volunteer activities interest you? (e.g., mentoring, event support)" rows={5} value={formData.volunteerInterest} onChange={handleChange} className="w-full bg-zinc-50 border border-zinc-300 rounded-lg p-3 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none" />
                                )}
                                {(formData.type === 'Organization' || formData.type === 'Church') && (
                                    <div className="space-y-4">
                                        <input name="orgName" type="text" placeholder={`${formData.type} Name`} required value={formData.orgName} onChange={handleChange} className="w-full bg-zinc-50 border border-zinc-300 rounded-lg p-3 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none" />
                                        <textarea name="partnershipGoal" placeholder="What are your primary goals for this partnership?" rows={4} value={formData.partnershipGoal} onChange={handleChange} className="w-full bg-zinc-50 border border-zinc-300 rounded-lg p-3 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none" />
                                    </div>
                                )}
                             </>
                        )}

                        {/* Navigation */}
                        <div className="flex flex-col sm:flex-row justify-between items-center pt-4 border-t border-zinc-200 space-y-4 sm:space-y-0">
                            <button type="button" onClick={prevStep} disabled={currentStep === 1} className="w-full sm:w-auto flex items-center justify-center gap-2 font-semibold text-zinc-600 hover:text-zinc-900 disabled:opacity-50 transition order-2 sm:order-1">
                                <ArrowLeft size={16} /> 
                                <span className="sm:inline">Previous Step</span>
                            </button>
                            
                            {currentStep < steps.length ? (
                                <button type="button" onClick={nextStep} className="w-full sm:w-auto flex items-center justify-center gap-2 bg-red-800 text-white font-semibold px-5 py-2.5 rounded-lg shadow-md hover:bg-red-700 transition order-1 sm:order-2">
                                    Next Step <ArrowRight size={16} />
                                </button>
                            ) : (
                                <button type="submit" disabled={status === 'loading'} className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-600 text-white font-semibold px-5 py-2.5 rounded-lg shadow-md hover:bg-emerald-700 transition disabled:opacity-60 order-1 sm:order-2">
                                    {status === 'loading' ? <><Loader2 size={18} className="animate-spin"/> Submitting...</> : 'Submit Inquiry'}
                                </button>
                            )}
                        </div>
                    </motion.form>
                </AnimatePresence>
            </div>
        </div>
    );
}