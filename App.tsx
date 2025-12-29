
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Tours from './pages/Tours';
import PackageDetail from './pages/PackageDetail';
import Payments from './pages/Payments';
import Contact from './pages/Contact';
import Safety from './pages/Safety';
import Festivals from './pages/Festivals';
import Booking from './pages/Booking';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  useEffect(() => {
    // Register service worker for caching
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    }
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen overflow-x-hidden">
        <Navbar />
        <main className="flex-grow pt-[190px] md:pt-[200px] pb-20 md:pb-0 overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/package/:id" element={<PackageDetail />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/safety" element={<Safety />} />
            <Route path="/festivals" element={<Festivals />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </main>
        <Footer />
        <Chatbot />
        <WhatsAppButton />
      </div>
    </Router>
  );
};

export default App;
