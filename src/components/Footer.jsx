import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Youtube, Send } from 'lucide-react';

// --- Data arrays for easier management ---
const quickLinks = [
  { to: "/about", label: "About Us" },
  { to: "/programs", label: "Our Programs" },
  { to: "/impact", label: "Our Impact" },
  { to: "/get-involved", label: "Get Involved" },
];

const socialLinks = [
  { href: "#", icon: <Facebook size={20} />, label: "Facebook" },
  { href: "#", icon: <Twitter size={20} />, label: "Twitter" },
  { href: "#", icon: <Instagram size={20} />, label: "Instagram" },
  { href: "#", icon: <Linkedin size={20} />, label: "LinkedIn" },
  { href: "#", icon: <Youtube size={20} />, label: "YouTube" },
];


export default function Footer() {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    alert(`Thank you for subscribing with ${email}!`);
    e.target.reset();
  };

  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand & Mission */}
          <div className="md:col-span-2 lg:col-span-1">
             <Link to="/" className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="Inspire Transformation Logo" className="h-10 w-10 rounded-full" />
              <span className="font-bold text-xl text-white">Inspire Transformation</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Empowering communities and restoring hope to build a brighter, resilient future together.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a 
                  key={social.label} 
                  href={social.href} 
                  aria-label={social.label}
                  className="text-stone-400 hover:text-red-600 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 tracking-wider">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-red-600 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
               <li>
                  <Link to="/donate" className="text-amber-400 hover:text-amber-300 font-semibold transition-colors">
                    Donate Now
                  </Link>
                </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4 tracking-wider">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="mailto:info@inspiretransformation.org" className="hover:text-red-600 transition-colors">info@inspire.org</a></li>
              <li><a href="tel:+2348012345678" className="hover:text-red-600 transition-colors">+234 801 234 5678</a></li>
              <li className="text-stone-400">123 Inspire Avenue,<br />Lagos, Nigeria</li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="font-semibold text-white mb-4 tracking-wider">Stay Updated</h4>
            <p className="text-sm mb-4">Subscribe to our newsletter for the latest news and impact stories.</p>
            <form onSubmit={handleNewsletterSubmit} className="flex">
              <label htmlFor="email-newsletter" className="sr-only">Email address</label>
              <input 
                id="email-newsletter"
                name="email"
                type="email" 
                required
                placeholder="Your email"
                className="w-full bg-stone-800 border border-stone-700 text-white px-3 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-700"
              />
              <button 
                type="submit" 
                aria-label="Subscribe to newsletter"
                className="bg-red-800 hover:bg-red-700 text-white px-4 py-2 rounded-r-md transition-colors"
              >
                <Send size={20} />
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-800 text-sm text-center py-5">
        <p>&copy; {new Date().getFullYear()} Inspire Transformation. All Rights Reserved.</p>
      </div>
    </footer>
  );
}