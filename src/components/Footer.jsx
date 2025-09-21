import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Send } from 'lucide-react';

import { ThreadsIcon } from '../routes/ThreadsIcon';
import { TikTokIcon } from '../routes/TikTokIcon';


// --- Data arrays with updated, accurate links ---
const quickLinks = [
  { to: "/about", label: "About Us" },
  { to: "/programs", label: "Our Programs" },
  { to: "/media", label: "Media Center" },
  { to: "/get-involved", label: "Get Involved" },
];

const socialLinks = [
  { href: "https://www.facebook.com/share/1CPyqqrDde/?mibextid=wwXIfr", icon: <Facebook size={20} />, label: "Facebook" },
  { href: "https://www.instagram.com/inspiretransformationpodcast?igsh=MXdpZmVhYmgybmFzaQ%3D%3D&utm_source=qr", icon: <Instagram size={20} />, label: "Instagram" },
  { href: "https://youtube.com/@inspiretransformationpodcast?si=EQ7ZKCp-BVTCXVcb", icon: <Youtube size={20} />, label: "YouTube" },
  { href: "https://www.tiktok.com/@inspiretransformationpod?_t=ZP-8zGKaFnJHwt&_r=1", icon: <TikTokIcon />, label: "TikTok" },
  { href: "https://www.threads.com/@inspiretransformationpodcast?igshid=NTc4MTIwNjQ2YQ==", icon: <ThreadsIcon />, label: "Threads" },
];


export default function Footer() {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    alert(`Thank you for subscribing with ${email}!`);
    e.target.reset();
  };

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand & Mission */}
          <div className="md:col-span-2 lg:col-span-1">
             <Link to="/" className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="Inspire Transformation Logo" className="h-10 rounded-full" />
             
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              A safe space where real stories meet raw truth, empowering you to embrace limitless possibilities in God.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a 
                  key={social.label} 
                  href={social.href} 
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-red-500 transition-colors"
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
                  <Link to={link.to} className="hover:text-red-500 transition-colors">
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
              <li><a href="mailto:info@inspire-transformation.com" className="hover:text-red-500 transition-colors">info@inspire-transformation.com</a></li>
              <li className="text-slate-400">A Global Faith Community</li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="font-semibold text-white mb-4 tracking-wider">Stay Updated</h4>
            <p className="text-sm mb-4 text-slate-400">Subscribe for the latest stories and updates from our community.</p>
            <form onSubmit={handleNewsletterSubmit} className="flex">
              <label htmlFor="email-newsletter" className="sr-only">Email address</label>
              <input 
                id="email-newsletter"
                name="email"
                type="email" 
                required
                placeholder="Your email"
                className="w-full bg-slate-800 border border-slate-700 text-white px-3 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-600"
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
      <div className="border-t border-slate-800 text-sm text-center py-5">
        <p className="text-slate-500">&copy; {new Date().getFullYear()} Inspire Transformation. All Rights Reserved.</p>
      </div>
    </footer>
  );
}