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
  const isV2 = location.pathname.startsWith('/v2');

  // V2 routes don't use the default navbar and footer
  if (isV2) {
    return (
      <div className="min-h-screen bg-white scroll-smooth">
        <Routes>
          <Route path="/v2" element={<HomeV2 />} />
          <Route path="/v2/about" element={<AboutV2 />} />
          <Route path="/v2/services" element={<ServicesV2 />} />
          <Route path="/v2/careers" element={<CareersV2 />} />
          <Route path="/v2/contact" element={<ContactV2 />} />
          <Route path="/v2/news" element={<NewsV2 />} />
          <Route path="/v2/news/:id" element={<NewsArticle />} />
        </Routes>
      </div>
    );
  }

  // Original routes with navbar and footer
  return (
    <div className="min-h-screen bg-white scroll-smooth">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
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