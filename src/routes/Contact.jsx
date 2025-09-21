import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const contactDetails = [
    {
      icon: <Mail size={20} />,
      label: "General Inquiries",
      value: "info@inspiretransformation.org",
      href: "mailto:info@inspiretransformation.org"
    },
    {
      icon: <Phone size={20} />,
      label: "Phone",
      value: "(555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: <MapPin size={20} />,
      label: "Location",
      value: "Los Angeles, CA",
      href: "https://goo.gl/maps/yourlocation"
    }
  ];

  const socialLinks = [
    {
      icon: <Facebook size={24} />,
      href: "https://facebook.com/inspiretransformation"
    },
    {
      icon: <Instagram size={24} />,
      href: "https://instagram.com/inspiretransformation"
    },
    {
      icon: <Linkedin size={24} />,
      href: "https://linkedin.com/company/inspiretransformation"
    },
    {
      icon: <Youtube size={24} />,
      href: "https://youtube.com/c/inspiretransformation"
    }
  ];

  // Animation Variants
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

  return (
    <motion.div 
        className="min-h-screen bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
    >
      <section className="bg-gradient-to-b from-red-50 to-white py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold text-gray-800 tracking-tight"
          >
            Connect With Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Whether you are seeking personal transformation, wanting to share your story,
            or looking to connect, we are here to listen. Your journey matters to us.
          </motion.p>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div 
                className="bg-red-50 rounded-lg p-8 shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                  Send Us a Message
                </h2>
                <ContactForm />
              </motion.div>

              <div>
                <motion.h2 
                    className="text-2xl font-semibold text-gray-800 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                  Get in Touch
                </motion.h2>
                <motion.div 
                    className="space-y-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                  {contactDetails.map((detail) => (
                    <motion.a
                      key={detail.label}
                      href={detail.href}
                      variants={itemVariants}
                      className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="p-3 bg-red-100 rounded-full text-red-800">
                        {detail.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">
                          {detail.label}
                        </h3>
                        <span
                          className="text-red-600 hover:text-red-700 transition-colors"
                        >
                          {detail.value}
                        </span>
                      </div>
                    </motion.a>
                  ))}
                </motion.div>

                <div className="mt-12">
                  <motion.h3 
                    className="text-lg font-medium text-gray-900 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                  >
                    Follow Us
                  </motion.h3>
                  <motion.div 
                    className="flex space-x-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.href}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={itemVariants}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="p-2 bg-red-100 rounded-full text-red-800 hover:bg-red-200 transition-colors"
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
  );
};

export default Contact;