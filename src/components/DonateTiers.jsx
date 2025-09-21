import React, { useState } from 'react';
import { CheckCircle, Star } from 'lucide-react';

// --- Data array for donation tiers ---
const donationOptions = [
  {
    amount: 2000,
    impact: 'Funds essential workshop materials for one participant.',
    isFeatured: false,
  },
  {
    amount: 5000,
    impact: 'Provides a full month of mentorship for an individual in need.',
    isFeatured: true,
  },
  {
    amount: 10000,
    impact: 'Sponsors a family to attend a community resilience program.',
    isFeatured: false,
  },
];

export default function DonateTiers() {
  const [selectedAmount, setSelectedAmount] = useState(5000); // Default to the featured amount
  const [customAmount, setCustomAmount] = useState('');
  const [isCustom, setIsCustom] = useState(false);

  const handleTierClick = (amount) => {
    setSelectedAmount(amount);
    setIsCustom(false);
    setCustomAmount('');
  };

  const handleCustomClick = () => {
    setIsCustom(true);
    setSelectedAmount(null); // Deselect preset tiers
  };
  
  const handleCustomChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Allow only numbers
    setCustomAmount(value);
    setSelectedAmount(Number(value));
  };
  
  const finalAmount = isCustom ? customAmount : selectedAmount;

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {donationOptions.map(({ amount, impact, isFeatured }) => {
          const isSelected = selectedAmount === amount && !isCustom;
          return (
            <div
              key={amount}
              onClick={() => handleTierClick(amount)}
              className={`relative p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                isSelected 
                  ? 'bg-red-50 border-red-800 shadow-lg scale-105' 
                  : 'bg-white border-stone-200 hover:border-red-600'
              }`}
            >
              {isFeatured && (
                <div className="absolute -top-3 right-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <Star size={12} />
                  Most Popular
                </div>
              )}
              {isSelected && (
                 <div className="absolute top-4 left-4 text-red-800">
                    <CheckCircle size={24} />
                 </div>
              )}

              <div className={`text-center transition-all ${isSelected ? 'mt-6' : 'mt-0'}`}>
                <div className="text-3xl font-bold text-stone-800">
                  ₦{amount.toLocaleString()}
                </div>
                <p className="text-sm text-stone-600 mt-2 h-12">
                  {impact}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* --- Custom Amount & Final Donation Button --- */}
      <div className="mt-8 text-center bg-stone-50 p-6 rounded-xl border border-stone-200">
        {!isCustom ? (
          <button 
            onClick={handleCustomClick}
            className="text-stone-700 font-semibold hover:text-red-800 transition"
          >
            ... or choose your own amount
          </button>
        ) : (
          <div className="max-w-xs mx-auto">
            <label htmlFor="custom-amount" className="block text-sm font-semibold text-stone-700 mb-2">
              Enter your amount (₦)
            </label>
            <input
              id="custom-amount"
              type="text"
              value={customAmount}
              onChange={handleCustomChange}
              placeholder="e.g., 7500"
              className="w-full text-center text-2xl font-bold border-stone-300 rounded-lg p-2 focus:ring-2 focus:ring-red-700 outline-none"
              autoFocus
            />
          </div>
        )}

        <div className="mt-6">
          <button
            disabled={!finalAmount || finalAmount < 500} // Example minimum amount
            className="w-full max-w-md mx-auto bg-red-800 text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-red-700 transition-all text-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Donate ₦{Number(finalAmount).toLocaleString()}
          </button>
          {finalAmount > 0 && finalAmount < 500 && (
             <p className="text-xs text-red-600 mt-2">Minimum donation is ₦500.</p>
          )}
        </div>
      </div>
    </div>
  );
}