import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Shield, Users, Target, ChevronRight, Zap, Award, TrendingUp, Globe, Leaf, Clock, CheckCircle } from 'lucide-react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const stats = [
    { number: '1,050+', label: 'Fleet Vehicles', icon: <Truck className="h-5 w-5" /> },
    { number: '25+', label: 'MMT Annual Capacity', icon: <TrendingUp className="h-5 w-5" /> },
    { number: '1,500+', label: 'Professional Drivers', icon: <Users className="h-5 w-5" /> },
    { number: '24/7', label: 'Operations Support', icon: <Clock className="h-5 w-5" /> },
  ];

  const heroSlides = [
    {
      title: 'Driving India\'s Industrial Growth',
      subtitle: 'Through Innovation & Excellence',
      description: 'Leading logistics solutions for iron ore, pellets, and DRI transportation with a fleet of 1,050+ vehicles.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80',
    },
    {
      title: 'Sustainable Logistics',
      subtitle: 'For a Greener Tomorrow',
      description: 'Pioneering eco-friendly transportation with LNG and EV trucks, reducing emissions by 80,000 tonnes annually.',
      image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=2000&q=80',
    },
    {
      title: 'Technology-Driven Operations',
      subtitle: 'Smart Fleet Management',
      description: 'AI-powered logistics with real-time tracking, predictive maintenance, and optimized routing.',
      image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=2000&q=80',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      title: 'Iron Ore Transportation',
      description: 'Specialized bulk mineral logistics from Surjagarh mines with advanced fleet management systems.',
      icon: <Truck className="h-8 w-8" />,
      image: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=800&q=80',
      features: ['GPS Tracking', 'Real-time Updates', 'Safety Protocols']
    },
    {
      title: 'Pellet & DRI Logistics',
      description: 'Comprehensive solutions for pellet plants and DRI operations with 10 MTPA capacity.',
      icon: <Globe className="h-8 w-8" />,
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80',
      features: ['Specialized Vehicles', 'Temperature Control', 'Quality Assurance']
    },
    {
      title: 'Smart Fleet Management',
      description: 'IoT-enabled fleet with telematics and AI-powered analytics for optimal efficiency.',
      icon: <Zap className="h-8 w-8" />,
      image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=800&q=80',
      features: ['Predictive Maintenance', 'Route Optimization', 'Fuel Management']
    },
    {
      title: 'Green Initiatives',
      description: 'Leading sustainability with LNG/EV trucks and carbon-neutral operations.',
      icon: <Leaf className="h-8 w-8" />,
      image: 'https://images.unsplash.com/photo-1473445730015-841f29a9490b?auto=format&fit=crop&w=800&q=80',
      features: ['Emission Reduction', 'Green Fleet', 'Sustainable Practices']
    },
  ];

  const innovations = [
    {
      icon: <Award className="h-10 w-10" />,
      title: 'Industry Excellence',
      description: 'Recognized as the leading logistics provider in Maharashtra with multiple industry awards.',
      stat: '15+ Awards'
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: 'Zero Accident Record',
      description: 'Maintaining highest safety standards with comprehensive driver training programs.',
      stat: '100% Safety'
    },
    {
      icon: <Target className="h-10 w-10" />,
      title: 'On-Time Delivery',
      description: 'Industry-leading punctuality with advanced route optimization and tracking.',
      stat: '99.8% OTD'
    },
  ];

  const partners = [
    'Lloyd\'s Group', 'Surjagarh Mines', 'DRI Plants', 'Pellet Industries', 'Steel Manufacturers'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section with Slider */}
      <section className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
            </div>
            <div className="relative h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl animate-fade-in">
                  <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
                    {slide.title}
                    <span className="block text-red-500 mt-2">{slide.subtitle}</span>
                  </h1>
                  <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      to="/contact" 
                      className="group inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white rounded-xl font-semibold text-lg hover:bg-red-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link 
                      to="/services" 
                      className="group inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
                    >
                      Explore Services
                      <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 transition-all duration-300 rounded-full ${
                index === currentSlide ? 'w-8 bg-red-600' : 'w-2 bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="group text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 text-red-600 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-6">
                About Lloyds Surya
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Leading the Future of 
                <span className="text-red-600"> Industrial Logistics</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Part of the prestigious Lloyds Group since 1977, we've revolutionized logistics through innovation, 
                sustainability, and operational excellence. Our journey from a traditional transport company to a 
                tech-driven logistics powerhouse exemplifies our commitment to progress.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  'Revolutionary relay driving system increasing efficiency by 40%',
                  'Sustainable operations with green fleet initiatives',
                  'AI-powered fleet management and predictive analytics',
                  'Comprehensive driver welfare and training programs'
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              
              <Link 
                to="/about" 
                className="group inline-flex items-center text-red-600 font-semibold text-lg hover:text-red-700 transition-colors"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-600 to-red-400 rounded-3xl opacity-20 blur-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80" 
                alt="Lloyds Surya Fleet" 
                className="relative rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold text-gray-900">48+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
              Our Services
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive Logistics Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              End-to-end transportation services powered by technology and driven by excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-red-100 text-red-600 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-500">
                        <CheckCircle className="h-4 w-4 text-red-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Highlights */}
      <section className="py-24 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-red-600/20 text-red-400 rounded-full text-sm font-semibold mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Excellence in Every Mile
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Setting industry benchmarks with our commitment to innovation, safety, and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {innovations.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600/20 text-red-400 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300 mb-4">{item.description}</p>
                <div className="text-3xl font-bold text-red-400">{item.stat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Trusted Partners</h2>
            <p className="text-lg text-gray-600">Building strong relationships across the industry</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {partners.map((partner, index) => (
              <div key={index} className="px-8 py-4 bg-gray-50 rounded-xl text-gray-700 font-semibold hover:bg-red-50 hover:text-red-600 transition-all duration-300">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-red-600 to-red-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Logistics?
          </h2>
          <p className="text-xl mb-8 text-red-100 max-w-3xl mx-auto">
            Partner with Lloyds Surya for reliable, efficient, and sustainable logistics solutions backed by 48+ years of excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="group inline-flex items-center justify-center px-8 py-4 bg-white text-red-600 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/services" 
              className="group inline-flex items-center justify-center px-8 py-4 bg-transparent text-white border-2 border-white rounded-xl font-semibold text-lg hover:bg-white hover:text-red-600 transition-all duration-300"
            >
              View Our Services
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;