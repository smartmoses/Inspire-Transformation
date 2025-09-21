import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Newspaper, Camera, Video, Download, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- Data for the page (In a real app, this would come from a CMS) ---
const featuredArticle = {
    slug: 'youth-empowerment-launch',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto-format&fit=crop',
    category: 'Press Release',
    date: 'September 15, 2025',
    title: 'Inspire Transformation Launches Groundbreaking Youth Empowerment Program',
    excerpt: 'Over 100 young people have enrolled in our new skills training and mentorship initiative, designed to foster the next generation of community leaders...'
};

const latestNews = [
    { slug: 'partnership-expansion', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto-format&fit=crop', title: 'Partnership with Local Schools Expands Mentorship', date: 'September 5, 2025' },
    { slug: 'food-drive-success', image: 'https://images.unsplash.com/photo-1488521787991-ed7b2f28a727?q=80&w=2070&auto-format&fit=crop', title: 'Community Food Drive Supports 200+ Families', date: 'August 28, 2025' },
    { slug: 'national-recognition', image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto-format&fit=crop', title: 'Inspire Transformation Receives National Recognition', date: 'August 12, 2025' },
];

const photoGallery = [
    { src: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=2070&auto=format&fit=crop', alt: 'Community event attendees' },
    { src: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto-format&fit=crop', alt: 'Volunteer distributing food' },
    { src: 'https://images.unsplash.com/photo-1579208575657-c595a05383b7?q=80&w=2070&auto-format&fit=crop', alt: 'Children in a workshop' },
    { src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop', alt: 'Team meeting' },
];

const videoGallery = [
    { videoId: 'dQw4w9WgXcQ', title: 'Our 2025 Impact Story' }, // Example YouTube video ID
    { videoId: '3tmd-ClpJxA', title: 'A Volunteer\'s Testimony' },
];


export default function MediaPage() {
  const [activeTab, setActiveTab] = useState('News');

  const tabs = [
    { name: 'News', icon: <Newspaper size={18} /> },
    { name: 'Photos', icon: <Camera size={18} /> },
    { name: 'Videos', icon: <Video size={18} /> },
  ];
  
  const renderTabContent = () => {
    switch(activeTab) {
        case 'Photos':
            return <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {photoGallery.map((photo, i) => <img key={i} src={photo.src} alt={photo.alt} className="rounded-lg object-cover w-full h-48 hover:scale-105 transition-transform duration-300" />)}
            </div>;
        case 'Videos':
             return <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {videoGallery.map(video => (
                    <div key={video.videoId} className="aspect-video">
                        <iframe
                            className="w-full h-full rounded-lg shadow-lg"
                            src={`https://www.youtube.com/embed/${video.videoId}`}
                            title={video.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                ))}
            </div>;
        case 'News':
        default:
            return <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {latestNews.map(news => (
                    <Link to={`/media/${news.slug}`} key={news.slug} className="bg-white border border-stone-200 p-4 rounded-xl shadow-sm hover:shadow-lg transition-shadow group">
                         <img src={news.image} alt={news.title} className="rounded-lg mb-4 object-cover h-40 w-full" />
                         <p className="text-xs text-stone-500 mb-1">{news.date}</p>
                         <h3 className="font-semibold text-stone-800 group-hover:text-red-800 transition-colors">{news.title}</h3>
                    </Link>
                ))}
            </div>;
    }
  };

  return (
    <div className="bg-white">
      {/* 1. Page Header */}
      <section className="bg-stone-50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.h1 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl font-bold text-stone-800 tracking-tight"
            >
                Media Center
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-4 text-lg text-stone-600 max-w-2xl mx-auto"
            >
                Stay connected with our latest stories, press releases, and resources. Discover the impact we're making together.
            </motion.p>
        </div>
      </section>

      {/* 2. Featured Story Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-10 items-center bg-white p-8 rounded-2xl shadow-xl border border-stone-200">
                <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                    <img src={featuredArticle.image} alt={featuredArticle.title} className="rounded-xl object-cover w-full h-full" />
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                    <p className="font-semibold text-red-800">{featuredArticle.category}</p>
                    <h2 className="mt-2 text-3xl font-bold text-stone-800 tracking-tight">
                        {featuredArticle.title}
                    </h2>
                    <p className="mt-4 text-stone-600 leading-relaxed">{featuredArticle.excerpt}</p>
                    <Link to={`/media/${featuredArticle.slug}`} className="group mt-6 inline-flex items-center text-red-800 font-bold">
                        Read Full Story <ArrowRight size={20} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </motion.div>
            </div>
        </div>
      </section>

      {/* 3. Tabbed Content Section */}
      <section className="bg-stone-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
            <div className="flex justify-center border-b border-stone-300 mb-12">
                {tabs.map(tab => (
                    <button
                        key={tab.name}
                        onClick={() => setActiveTab(tab.name)}
                        className={`flex items-center gap-2 px-6 py-3 font-semibold text-lg transition-colors ${
                            activeTab === tab.name 
                            ? 'border-b-2 border-red-800 text-red-800'
                            : 'text-stone-500 hover:text-stone-800'
                        }`}
                    >
                        {tab.icon} {tab.name}
                    </button>
                ))}
            </div>
            <div>
                {renderTabContent()}
            </div>
        </div>
      </section>

      {/* 4. Media Kit & Press Contact */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
             <h2 className="text-3xl font-bold text-stone-800">For the Press</h2>
             <p className="mt-3 max-w-2xl mx-auto text-lg text-stone-600">
                Access our official brand assets or get in touch with our media relations team for inquiries and interviews.
            </p>
            <div className="mt-10 grid sm:grid-cols-2 gap-8">
                <div className="bg-white border border-stone-200 p-8 rounded-xl text-left">
                    <div className="flex items-center gap-4">
                        <div className="bg-red-100 text-red-800 p-3 rounded-full"><Download size={24} /></div>
                        <h3 className="text-2xl font-bold text-stone-800">Media Kit</h3>
                    </div>
                    <p className="mt-4 text-stone-600">Download our comprehensive media kit, including our logo, brand guidelines, and high-resolution images.</p>
                    <a href="/inspire-transformation-media-kit.zip" className="group mt-6 inline-flex items-center text-red-800 font-bold">
                        Download (.zip) <ArrowRight size={20} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                </div>
                 <div className="bg-white border border-stone-200 p-8 rounded-xl text-left">
                    <div className="flex items-center gap-4">
                        <div className="bg-red-100 text-red-800 p-3 rounded-full"><Mail size={24} /></div>
                        <h3 className="text-2xl font-bold text-stone-800">Press Inquiries</h3>
                    </div>
                    <p className="mt-4 text-stone-600">For all media inquiries, interviews, or event invitations, please contact our team directly.</p>
                     <a href="mailto:press@inspiretransformation.org" className="group mt-6 inline-flex items-center text-red-800 font-bold">
                        Email Us <ArrowRight size={20} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}