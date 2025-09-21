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

  return (
    <React.Fragment>
      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-b from-brand-100 to-white py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-brand-900"
            >
              Connect With Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-lg text-gray-950 max-w-2xl mx-auto"
            >
              Whether you are seeking personal transformation, wanting to share your story,
              or looking to connect, we are here to listen. Your journey matters to us.
            </motion.p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-brand-50 rounded-lg p-8 shadow-lg">
                <h2 className="text-2xl font-semibold text-brand-900 mb-6">
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-brand-900 mb-6">
                  Get in Touch
                </h2>
                <div className="space-y-6">
                  {contactDetails.map((detail, index) => (
                    <motion.div
                      key={detail.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="p-3 bg-brand-100 rounded-full">
                        {detail.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">
                          {detail.label}
                        </h3>
                        <a
                          href={detail.href}
                          className="text-brand-600 hover:text-brand-700 transition-colors"
                        >
                          {detail.value}
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Follow Us
                  </h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="p-2 bg-brand-100 rounded-full hover:bg-brand-200 transition-colors"
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Contact;
