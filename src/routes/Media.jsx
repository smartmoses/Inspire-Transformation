import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Newspaper, Camera, Video, Download, Mail, ArrowRight, Rss } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- Data for the page (using your specified paths) ---
const mediaStats = [
    { value: '25+', label: 'Press Mentions' },
    { value: '50+', label: 'Published Articles' },
    { value: '10K+', label: 'Social Reach' },
];

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

// --- Using YOUR specified image paths ---
const photoGallery = [
    { src: './images/1.jpg', alt: 'Inspire Transformation Event 1' },
    { src: './images/hero-fallback 2.jpg', alt: 'Inspire Transformation Community' },
    { src: './images/2.jpg', alt: 'Inspire Transformation Workshop' },
    { src: './images/3.jpg', alt: 'Inspire Transformation Mentorship' },
];

// --- Using YOUR specified video IDs ---
const videoGallery = [
    { videoId: 'r3zjJpkK9gQ', title: 'BEGINNING OF A NEW SCHOOL' },
    { videoId: '7sAmKSUcoao', title: 'Misconceptions on who needs therapy, and strategies to preventing molestation' },
    { videoId: 'Ji1FMvf2Bw8', title: 'From Brokenness to Wholeness: A Testimony of Forgiveness After Abuse and Rape' },
    { videoId: 'H5J_MIK2iFk', title: 'The Courage to Start Over'},
];

// Reusable Tab Button with improved responsiveness
const TabButton = ({ name, icon, activeTab, setActiveTab }) => (
    <button
        onClick={() => setActiveTab(name)}
        className={`flex items-center gap-2 px-4 sm:px-6 py-3 font-semibold text-base sm:text-lg transition-colors relative ${
            activeTab === name 
            ? 'text-red-500'
            : 'text-slate-400 hover:text-slate-100'
        }`}
    >
        {icon} {name}
        {activeTab === name && (
            <motion.div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500" layoutId="underline" />
        )}
    </button>
);


export default function MediaPage() {
  const [activeTab, setActiveTab] = useState('Videos'); // Defaulting to 'Videos' as requested previously
  
  const tabs = [
    { name: 'Videos', icon: <Video size={18} /> },
    { name: 'Photos', icon: <Camera size={18} /> },
    { name: 'News', icon: <Newspaper size={18} /> },
  ];

  const renderTabContent = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    switch(activeTab) {
        case 'Photos':
            return <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {photoGallery.map((photo, i) => 
                    <motion.div key={i} variants={itemVariants} className="overflow-hidden rounded-lg">
                        <motion.img src={photo.src} alt={photo.alt} className="w-full h-40 sm:h-48 object-cover" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}/>
                    </motion.div>
                )}
            </motion.div>;
        case 'News':
            return <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {latestNews.map(news => (
                    <motion.div key={news.slug} variants={itemVariants}>
                        <Link to={`/media/${news.slug}`} className="bg-slate-800 block border border-slate-700 p-4 rounded-xl shadow-sm hover:shadow-lg hover:border-red-500 transition-all group h-full">
                             <img src={news.image} alt={news.title} className="rounded-lg mb-4 object-cover h-48 w-full" />
                             <p className="text-xs text-slate-400 mb-1">{news.date}</p>
                             <h3 className="font-semibold text-slate-200 group-hover:text-red-500 transition-colors text-lg leading-tight">{news.title}</h3>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>;
        case 'Videos':
        default:
             return <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {videoGallery.map(video => (
                    <motion.div key={video.videoId} variants={itemVariants} className="aspect-video">
                        <iframe
                            className="w-full h-full rounded-lg shadow-lg"
                            src={`https://www.youtube.com/embed/${video.videoId}`}
                            title={video.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </motion.div>
                ))}
            </motion.div>;
    }
  };

  return (
    <div className="bg-slate-900 text-slate-200">
      <section className="relative bg-slate-800 pt-32 pb-20 overflow-hidden">
        <div 
            className="absolute inset-0 bg-cover bg-center opacity-20" 
            style={{ backgroundImage: "url('/images/hero-fallback 2.jpg')" }}
        ></div>
        <div className="relative max-w-5xl mx-auto px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <Rss size={48} className="mx-auto text-amber-400" />
            </motion.div>
            <motion.h1 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 text-4xl sm:text-5xl font-extrabold text-white tracking-tight"
            >
                Media & Press Center
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto"
            >
                Stay connected with our latest stories, press releases, and resources. Discover the impact we're making together.
            </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-4">Story Spotlight</h2>
            <div className="grid lg:grid-cols-5 gap-8 items-center bg-slate-800 p-6 sm:p-8 rounded-2xl shadow-2xl">
                <div className="lg:col-span-2 h-64 sm:h-80 rounded-xl overflow-hidden">
                    <img src={featuredArticle.image} alt={featuredArticle.title} className="w-full h-full object-cover" />
                </div>
                <div className="lg:col-span-3">
                    <p className="font-semibold text-red-500">{featuredArticle.category}</p>
                    <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-white tracking-tight">
                        {featuredArticle.title}
                    </h3>
                    <p className="mt-4 text-slate-300 leading-relaxed text-sm sm:text-base">{featuredArticle.excerpt}</p>
                    <Link to={`/media/${featuredArticle.slug}`} className="group mt-6 inline-flex items-center text-amber-400 font-bold">
                        Read Full Story <ArrowRight size={20} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </div>
      </section>

      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-center border-b border-slate-700 mb-12">
                {tabs.map(tab => (
                    <TabButton 
                        key={tab.name}
                        name={tab.name}
                        icon={tab.icon}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                    />
                ))}
            </div>
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    {renderTabContent()}
                </motion.div>
            </AnimatePresence>
        </div>
      </section>

      <section className="py-20 bg-slate-800">
        <div className="max-w-5xl mx-auto px-6 text-center">
             <h2 className="text-2xl sm:text-3xl font-bold text-white">For the Press</h2>
             <p className="mt-3 max-w-2xl mx-auto text-base sm:text-lg text-slate-300">
                Access official assets or contact our media team for inquiries and interviews.
            </p>
            <div className="mt-12 grid sm:grid-cols-2 gap-8 text-left">
                <div className="bg-slate-900 p-8 rounded-xl transform hover:-translate-y-2 transition-transform duration-300">
                    <div className="flex items-center gap-4">
                        <div className="bg-red-800/20 text-red-500 p-3 rounded-full"><Download size={24} /></div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white">Media Kit</h3>
                    </div>
                    <p className="mt-4 text-slate-300 text-sm sm:text-base">Download our comprehensive media kit, including logos, brand guidelines, and high-resolution images.</p>
                    <a href="/inspire-transformation-media-kit.zip" className="group mt-6 inline-flex items-center text-amber-400 font-bold">
                        Download (.zip) <ArrowRight size={20} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                </div>
                 <div className="bg-slate-900 p-8 rounded-xl transform hover:-translate-y-2 transition-transform duration-300">
                    <div className="flex items-center gap-4">
                        <div className="bg-red-800/20 text-red-500 p-3 rounded-full"><Mail size={24} /></div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white">Press Inquiries</h3>
                    </div>
                    <p className="mt-4 text-slate-300 text-sm sm:text-base">For all media inquiries, interviews, or event invitations, please contact our team directly.</p>
                     <a href="mailto:press@inspiretransformation.org" className="group mt-6 inline-flex items-center text-amber-400 font-bold">
                        Email Us <ArrowRight size={20} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}