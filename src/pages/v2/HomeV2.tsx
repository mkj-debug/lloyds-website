import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, ChevronDown, Play, Pause, Volume2, VolumeX,
  TrendingUp, Users, Globe, Award, Truck, Factory,
  Leaf, Shield, Zap, Target, Clock, CheckCircle,
  ArrowUpRight, Building2, Package, Cpu, Heart,
  BarChart3, MapPin, Phone, Mail, Linkedin, Twitter
} from 'lucide-react';

const HomeV2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [activeSegment, setActiveSegment] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [countersVisible, setCountersVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Check if counters section is visible
      const countersSection = document.getElementById('counters');
      if (countersSection) {
        const rect = countersSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setCountersVisible(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animated Counter Component
  const AnimatedCounter = ({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (!countersVisible) return;
      
      let startTime: number | null = null;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }, [countersVisible, end, duration]);
    
    return <span>{count}{suffix}</span>;
  };

  const heroSlides = [
    {
      title: 'Transforming Logistics',
      subtitle: 'With Innovation & Excellence',
      description: 'Leading India\'s industrial growth through sustainable and technology-driven logistics solutions.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80',
      video: null,
      cta: { text: 'Explore Our Journey', link: '/about' }
    },
    {
      title: 'Sustainable Future',
      subtitle: 'Green Logistics Today',
      description: 'Pioneering eco-friendly transportation with LNG and EV fleets, reducing carbon footprint significantly.',
      image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=2000&q=80',
      video: null,
      cta: { text: 'Our Sustainability', link: '/sustainability' }
    },
    {
      title: 'Technology First',
      subtitle: 'AI-Powered Operations',
      description: 'Leveraging cutting-edge technology for real-time tracking, predictive maintenance, and optimal efficiency.',
      image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=2000&q=80',
      video: null,
      cta: { text: 'Innovation Hub', link: '/technology' }
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const businessSegments = [
    {
      icon: <Truck className="h-8 w-8" />,
      title: 'Transportation & Logistics',
      description: 'End-to-end logistics solutions with a fleet of 1,050+ vehicles handling 25+ MMT annually.',
      stats: { value: '1,050+', label: 'Fleet Size' },
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      link: '/services/transportation'
    },
    {
      icon: <Factory className="h-8 w-8" />,
      title: 'Mining Operations',
      description: 'Strategic mining operations at Surjagarh with sustainable extraction and processing capabilities.',
      stats: { value: '348', label: 'Hectares' },
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80',
      link: '/services/mining'
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: 'Green Initiatives',
      description: 'Leading sustainability with LNG/EV fleets and carbon-neutral operations.',
      stats: { value: '80K', label: 'Tonnes CO₂ Saved' },
      image: 'https://images.unsplash.com/photo-1473445730015-841f29a9490b?auto=format&fit=crop&w=800&q=80',
      link: '/services/sustainability'
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: 'Technology Solutions',
      description: 'AI-powered fleet management, IoT integration, and predictive analytics.',
      stats: { value: '99.8%', label: 'Uptime' },
      image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=800&q=80',
      link: '/services/technology'
    }
  ];

  const keyMetrics = [
    { value: 48, suffix: '+', label: 'Years of Excellence', icon: <Award className="h-6 w-6" /> },
    { value: 25, suffix: '+', label: 'MMT Annual Capacity', icon: <TrendingUp className="h-6 w-6" /> },
    { value: 1500, suffix: '+', label: 'Professional Drivers', icon: <Users className="h-6 w-6" /> },
    { value: 500, suffix: '+', label: 'Happy Clients', icon: <Heart className="h-6 w-6" /> }
  ];

  const newsUpdates = [
    {
      id: 'ev-trucks-launch',
      date: 'Dec 15, 2024',
      category: 'Sustainability',
      title: 'Lloyds Surya Launches 100 New EV Trucks',
      description: 'Expanding our green fleet to reduce emissions by additional 20,000 tonnes annually.',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'ai-route-optimization',
      date: 'Dec 10, 2024',
      category: 'Technology',
      title: 'AI-Powered Route Optimization Deployed',
      description: 'New system reduces fuel consumption by 15% and improves delivery times.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'global-partnership',
      date: 'Dec 5, 2024',
      category: 'Partnership',
      title: 'Strategic Alliance with Global Logistics Leader',
      description: 'Partnering to expand operations across South Asian markets.',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Consistent with AboutV2 */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <img
                src="/20221207ThriveniIDFinalHor_SP-01.png"
                alt="Thriveni Earth Movers Pvt Ltd"
                className="h-12 w-auto object-contain"
              />
            </div>
            
            <div className="hidden lg:flex items-center space-x-8">
              <Link to="/v2" className="text-red-600 font-medium">Home</Link>
              <Link to="/v2/about" className="text-gray-700 hover:text-red-600 font-medium transition-colors">About</Link>
              <Link to="/v2/services" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Services</Link>
              <Link to="/v2/careers" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Careers</Link>
              <Link to="/v2/contact" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Contact</Link>
              <Link 
                to="/contact" 
                className="px-6 py-2.5 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 transition-all duration-300"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Split Layout */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-red-50">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-0 w-96 h-96 bg-red-100/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Section */}
            <div className="order-2 lg:order-1">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-semibold mb-4">
                  Leading Logistics Solutions
                </span>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  {heroSlides[currentSlide].title}
                  <span className="text-red-600 block mt-2">
                    {heroSlides[currentSlide].subtitle}
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  {heroSlides[currentSlide].description}
                </p>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-gray-900">1,050+</div>
                  <div className="text-sm text-gray-600">Fleet Size</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-gray-900">25+ MMT</div>
                  <div className="text-sm text-gray-600">Annual Capacity</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-gray-900">15+ Years</div>
                  <div className="text-sm text-gray-600">Experience</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link 
                  to={heroSlides[currentSlide].cta.link}
                  className="group inline-flex items-center px-8 py-4 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {heroSlides[currentSlide].cta.text}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="inline-flex items-center px-8 py-4 bg-white text-red-600 border-2 border-red-600 rounded-full font-semibold hover:bg-red-50 transition-all duration-300">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Story
                </button>
              </div>

              {/* Slide Navigation */}
              <div className="flex items-center space-x-4 mt-8">
                <button
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
                  className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all"
                >
                  <ChevronDown className="h-5 w-5 text-gray-600 rotate-90" />
                </button>
                <div className="flex space-x-2">
                  {heroSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`transition-all duration-300 ${
                        index === currentSlide 
                          ? 'w-8 h-2 bg-red-600 rounded-full' 
                          : 'w-2 h-2 bg-gray-300 rounded-full hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
                  className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all"
                >
                  <ChevronDown className="h-5 w-5 text-gray-600 -rotate-90" />
                </button>
              </div>
            </div>

            {/* Image Section with Slider */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                {/* Main Image */}
                <div className="relative h-[400px] lg:h-[600px]">
                  {heroSlides.map((slide, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-700 ${
                        index === currentSlide 
                          ? 'opacity-100 scale-100' 
                          : 'opacity-0 scale-105'
                      }`}
                    >
                      <img 
                        src={slide.image} 
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                  ))}
                </div>

                {/* Overlay Info Cards */}
                <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-4">
                  <div className="bg-white/90 backdrop-blur-md rounded-lg p-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-red-100 rounded-lg">
                        <Truck className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">Active Fleet</div>
                        <div className="text-xs text-gray-600">Real-time Tracking</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-md rounded-lg p-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <Leaf className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">Eco-Friendly</div>
                        <div className="text-xs text-gray-600">Green Logistics</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide Counter */}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md rounded-full px-4 py-2">
                  <span className="text-sm font-medium text-gray-900">
                    {String(currentSlide + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 -top-4 -right-4 w-72 h-72 bg-red-100 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -z-10 -bottom-4 -left-4 w-72 h-72 bg-orange-100 rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics Section with Animation */}
      <section id="counters" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {keyMetrics.map((metric, index) => (
              <div 
                key={index} 
                className="text-center group"
                style={{
                  animation: countersVisible ? `fadeInUp 0.6s ease-out ${index * 0.1}s both` : 'none'
                }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 text-red-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform group-hover:bg-red-100">
                  {metric.icon}
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                  {countersVisible && (
                    <AnimatedCounter end={metric.value} suffix={metric.suffix} />
                  )}
                </div>
                <div className="text-gray-600 font-medium">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Segments Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Business Segments
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Diverse portfolio of services driving industrial growth and sustainable development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessSegments.map((segment, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onMouseEnter={() => setActiveSegment(index)}
                onMouseLeave={() => setActiveSegment(null)}
              >
                <div className="aspect-w-16 aspect-h-12 relative h-64">
                  <img 
                    src={segment.image} 
                    alt={segment.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-3 bg-white/20 backdrop-blur-md rounded-xl">
                      {segment.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">{segment.stats.value}</div>
                      <div className="text-xs opacity-80">{segment.stats.label}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{segment.title}</h3>
                  
                  <div className={`overflow-hidden transition-all duration-500 ${
                    activeSegment === index ? 'max-h-32' : 'max-h-0'
                  }`}>
                    <p className="text-sm opacity-90 mb-4">{segment.description}</p>
                    <Link 
                      to={segment.link}
                      className="inline-flex items-center text-white font-semibold hover:text-red-400 transition-colors"
                    >
                      Learn More
                      <ArrowUpRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation & Sustainability Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-6">
                <Leaf className="h-4 w-4 mr-2" />
                Sustainability First
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Building a 
                <span className="text-green-600"> Sustainable</span> Future
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our commitment to environmental stewardship drives every decision. From LNG-powered trucks to 
                electric vehicles, we're reducing our carbon footprint while maintaining operational excellence.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="p-6 bg-green-50 rounded-2xl">
                  <Zap className="h-10 w-10 text-green-600 mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">Electric Fleet</h4>
                  <p className="text-sm text-gray-600">100+ EV trucks reducing emissions</p>
                </div>
                <div className="p-6 bg-blue-50 rounded-2xl">
                  <Factory className="h-10 w-10 text-blue-600 mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">LNG Operations</h4>
                  <p className="text-sm text-gray-600">Clean fuel for long-haul transport</p>
                </div>
              </div>
              
              <Link 
                to="/sustainability"
                className="inline-flex items-center px-8 py-4 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-all duration-300"
              >
                Our Green Initiatives
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-blue-400 rounded-3xl opacity-20 blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1473445730015-841f29a9490b?auto=format&fit=crop&w=1200&q=80" 
                alt="Sustainable Operations" 
                className="relative rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="text-4xl font-bold text-green-600">80,000</div>
                <div className="text-gray-600">Tonnes CO₂ Saved Annually</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Updates Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">Latest Updates</h2>
              <p className="text-gray-600">Stay informed about our latest developments</p>
            </div>
            <Link 
              to="/v2/news"
              className="hidden lg:inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition-colors"
            >
              View All News
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsUpdates.map((news, index) => (
              <Link 
                key={index}
                to={`/v2/news/${news.id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 block"
              >
                <div className="aspect-w-16 aspect-h-10 relative h-48 overflow-hidden">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-xs font-semibold text-gray-700 rounded-full">
                      {news.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-3">{news.date}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-red-600 transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{news.description}</p>
                  <span className="inline-flex items-center text-red-600 font-semibold group-hover:text-red-700 transition-colors">
                    Read More
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-red-50 to-orange-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Logistics?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Partner with us for reliable, efficient, and sustainable logistics solutions backed by 48+ years of excellence.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/services"
              className="inline-flex items-center px-8 py-4 bg-white text-red-600 border-2 border-red-600 rounded-full font-semibold hover:bg-red-50 transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-600 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <img
                  src="/thriveni_earth_movers_pvt_ltd_logo.jpg"
                  alt="Thriveni Earth Movers Pvt Ltd"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <p className="text-sm mb-4">
                Leading logistics solutions provider transforming India's industrial landscape through innovation and sustainability.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-gray-900 font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="hover:text-red-600 transition-colors">About Us</Link></li>
                <li><Link to="/services" className="hover:text-red-600 transition-colors">Services</Link></li>
                <li><Link to="/careers" className="hover:text-red-600 transition-colors">Careers</Link></li>
                <li><Link to="/contact" className="hover:text-red-600 transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-gray-900 font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-red-600 transition-colors">Transportation</a></li>
                <li><a href="#" className="hover:text-red-600 transition-colors">Fleet Management</a></li>
                <li><a href="#" className="hover:text-red-600 transition-colors">Mining Operations</a></li>
                <li><a href="#" className="hover:text-red-600 transition-colors">Green Logistics</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-gray-900 font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                  <span>Mumbai, Maharashtra, India</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span>+91 XXX XXX XXXX</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span>info@lloydssurya.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-300 mt-12 pt-8 text-center text-sm">
            <p className="text-gray-600">&copy; 2024 Lloyds Surya Private Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-up {
          animation: slideUp 0.8s ease-out;
        }
        
        .animate-slide-up-delay {
          animation: slideUp 0.8s ease-out 0.2s both;
        }
        
        .animate-fade-in-delay {
          animation: fadeIn 0.8s ease-out 0.4s both;
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default HomeV2;