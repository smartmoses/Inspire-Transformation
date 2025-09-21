import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './routes/Home';
import About from './routes/About';
import Programs from './routes/Programs';
import Impact from './routes/Impact';
import Media from './routes/Media';
import GetInvolved from './routes/GetInvolved';
import Donate from './routes/Donate';
import Contact from './routes/Contact';
import StartJourney from './routes/StartJourney';

// Utility component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased">
      <Header />
      <main className="flex-1">
        <ScrollToTop />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/media" element={<Media />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/start-journey" element={<StartJourney />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
