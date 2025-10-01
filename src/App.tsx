import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Careers from './pages/Careers';
import Partners from './pages/Partners';
import Contact from './pages/Contact';
import HomeV2 from './pages/v2/HomeV2';
import AboutV2 from './pages/v2/AboutV2';
import ServicesV2 from './pages/v2/ServicesV2';
import ContactV2 from './pages/v2/ContactV2';
import CareersV2 from './pages/v2/CareersV2';
import NewsV2 from './pages/v2/NewsV2';
import NewsArticle from './pages/v2/NewsArticle';

function AppContent() {
  const location = useLocation();
  const isV1 = location.pathname.startsWith('/v1');

  // Old V1 routes with navbar and footer (moved to /v1 prefix)
  if (isV1) {
    return (
      <div className="min-h-screen bg-white scroll-smooth">
        <Navbar />
        <main>
          <Routes>
            <Route path="/v1" element={<Home />} />
            <Route path="/v1/about" element={<About />} />
            <Route path="/v1/services" element={<Services />} />
            <Route path="/v1/careers" element={<Careers />} />
            <Route path="/v1/partners" element={<Partners />} />
            <Route path="/v1/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    );
  }

  // V2 routes are now the default (no prefix needed)
  return (
    <div className="min-h-screen bg-white scroll-smooth">
      <Routes>
        <Route path="/" element={<HomeV2 />} />
        <Route path="/about" element={<AboutV2 />} />
        <Route path="/services" element={<ServicesV2 />} />
        <Route path="/careers" element={<CareersV2 />} />
        <Route path="/contact" element={<ContactV2 />} />
        <Route path="/news" element={<NewsV2 />} />
        <Route path="/news/:id" element={<NewsArticle />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;