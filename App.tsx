
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActionsPortal from './components/FloatingActionsPortal';
import Home from './pages/Home';
import Tours from './pages/Tours';
import PackageDetail from './pages/PackageDetail';
import Payments from './pages/Payments';
import Contact from './pages/Contact';
import Safety from './pages/Safety';
import Festivals from './pages/Festivals';
import Blogs from './pages/Blogs';
import BlogDetail from './pages/BlogDetail';
import Booking from './pages/Booking';
import JourneyInFrames from './pages/JourneyInFrames';
import Terms from './pages/Terms';
import PackingList from './pages/PackingList';

// Enhanced dynamic header height measurement hook
function useHeaderHeightVar() {
  useEffect(() => {
    const header = document.querySelector("nav"); // Main header container
    if (!header) return;

    const setVar = () => {
      // Measure the ENTIRE header stack (utility bar + main header + navigation)
      const totalHeaderHeight = header.getBoundingClientRect().height;
      document.documentElement.style.setProperty("--headerH", `${totalHeaderHeight}px`);

      // Debug log to verify measurement
      console.log('Header height updated:', totalHeaderHeight + 'px');
    };

    // Initial measurement
    setVar();

    // ResizeObserver for header changes
    const ro = new ResizeObserver(() => {
      // Small delay to ensure DOM is updated
      setTimeout(setVar, 10);
    });
    ro.observe(header);

    // Window resize and orientation change
    window.addEventListener("resize", setVar);
    window.addEventListener("orientationchange", () => {
      setTimeout(setVar, 100); // Delay for orientation change
    });

    // Hamburger menu toggle detection
    const hamburgerButton = document.querySelector('[data-testid="hamburger"], .hamburger, button[aria-expanded]');
    if (hamburgerButton) {
      const observer = new MutationObserver(() => {
        setTimeout(setVar, 50); // Recalculate after menu toggle
      });
      observer.observe(hamburgerButton, { attributes: true, attributeFilter: ['aria-expanded', 'class'] });

      hamburgerButton.addEventListener('click', () => {
        setTimeout(setVar, 100); // Recalculate after click
      });
    }

    // Also listen for any class changes on the header itself
    const headerObserver = new MutationObserver(() => {
      setTimeout(setVar, 50);
    });
    headerObserver.observe(header, { attributes: true, attributeFilter: ['class'], subtree: true });

    return () => {
      ro.disconnect();
      headerObserver.disconnect();
      window.removeEventListener("resize", setVar);
      window.removeEventListener("orientationchange", setVar);
    };
  }, []);
}

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small timeout to ensure DOM is ready
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const App: React.FC = () => {
  // Dynamic header height measurement
  useHeaderHeightVar();

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

  // Force body background to black on mount to prevent beige/grey bars from index.html classes
  useEffect(() => {
    document.body.style.backgroundColor = '#000000';
    document.body.classList.remove('bg-yellow-50');
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div id="app-wrapper" className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pb-20 md:pb-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/package/:id" element={<PackageDetail />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/safety" element={<Safety />} />
            <Route path="/festivals" element={<Festivals />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/journey-in-frames" element={<JourneyInFrames />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/packing-list" element={<PackingList />} />
          </Routes>
        </main>
        <Footer />
        <FloatingActionsPortal />
      </div>
    </Router>
  );
};

export default App;
