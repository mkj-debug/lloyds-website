import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Handshake, Award, Target, Users, CheckCircle, ArrowRight, Star, Globe, TrendingUp, Shield, Factory, Truck, ChevronRight, Building2, Briefcase, Rocket, Heart, Zap, Leaf, Clock } from 'lucide-react';

const Partners = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroSlides = [
    {
      title: 'Strategic Partnerships',
      subtitle: 'Driving Success Together',
      description: 'Building strong alliances with industry leaders to deliver exceptional logistics solutions across India.',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=2000&q=80',
    },
    {
      title: 'Innovation Through Collaboration',
      subtitle: 'Technology Meets Logistics',
      description: 'Partnering with cutting-edge technology providers to revolutionize supply chain management.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2000&q=80',
    },
    {
      title: 'Growing Together',
      subtitle: 'Sustainable Partnerships',
      description: 'Creating lasting value through collaborative growth strategies and shared success.',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=2000&q=80',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const keyPartners = [
    {
      name: 'Lloyds Metals & Energy Limited (LMEL)',
      type: 'Parent Company',
      relationship: 'Strategic Partnership',
      since: '2021',
      description: 'Our parent company and primary partner, providing the foundation for our operations and strategic direction.',
      logo: '/api/placeholder/120/60',
      highlights: ['Iron ore mining expertise', 'Financial backing', 'Operational guidance', 'Industry networks'],
      category: 'parent'
    },
    {
      name: 'TEMPL',
      type: 'Joint Venture Partner',
      relationship: 'Operational Partnership',
      since: '2021',
      description: '20+ years of mining expertise partner, contributing technical knowledge and operational excellence.',
      logo: '/api/placeholder/120/60',
      highlights: ['Mining expertise', 'Technical know-how', 'Equipment knowledge', 'Process optimization'],
      category: 'strategic'
    },
    {
      name: 'Maharashtra State Mining Corporation',
      type: 'Government Partner',
      relationship: 'Regulatory Compliance',
      since: '2022',
      description: 'Official mining permits and regulatory compliance partnership for Surjagarh operations.',
      logo: '/api/placeholder/120/60',
      highlights: ['Regulatory support', 'Mining permits', 'Compliance guidance', 'Government relations'],
      category: 'government'
    },
    {
      name: 'Indian Railways',
      type: 'Logistics Partner',
      relationship: 'Multi-modal Transport',
      since: '2021',
      description: 'Strategic railway transportation partnership for efficient cargo movement across India.',
      logo: '/api/placeholder/120/60',
      highlights: ['Railway transportation', 'Cargo handling', 'Pan-India reach', 'Cost optimization'],
      category: 'logistics'
    }
  ];

  const clientPartners = [
    {
      name: 'Steel Manufacturing Plants',
      type: 'Industrial Clients',
      volume: '15+ MMT',
      description: 'Major steel manufacturers across Maharashtra and Central India',
      services: ['Iron ore supply', 'Pellet transportation', 'Raw material logistics']
    },
    {
      name: 'Pellet Industries',
      type: 'Processing Partners',
      volume: '10+ MMT',
      description: 'Pelletization plants requiring consistent iron ore supply',
      services: ['Raw material transport', 'Finished product logistics', 'Quality assurance']
    },
    {
      name: 'DRI Plants',
      type: 'Manufacturing Partners',
      volume: '8+ MMT',
      description: 'Direct Reduced Iron manufacturing facilities',
      services: ['Specialized transportation', 'Temperature-controlled logistics', '24/7 operations']
    },
    {
      name: 'Export Terminals',
      type: 'Port Partners',
      volume: '5+ MMT',
      description: 'Port facilities for international trade',
      services: ['Port logistics', 'Export documentation', 'Container handling']
    }
  ];

  const technologyPartners = [
    {
      name: 'SAP',
      category: 'Enterprise Software',
      description: 'ERP and fleet management systems',
      integration: 'Inventory Management, Maintenance Scheduling, Financial Systems'
    },
    {
      name: 'GPS & IoT Providers',
      category: 'Tracking Technology',
      description: 'Real-time fleet monitoring and telematics',
      integration: 'Vehicle Tracking, Route Optimization, Driver Monitoring'
    },
    {
      name: 'AI Analytics Partners',
      category: 'Data Intelligence',
      description: 'Predictive maintenance and operational analytics',
      integration: 'Predictive Analytics, Performance Optimization, Cost Analysis'
    },
    {
      name: 'Green Technology Partners',
      category: 'Sustainability',
      description: 'LNG systems and electric vehicle infrastructure',
      integration: 'Green Fleet, Charging Infrastructure, Emission Monitoring'
    }
  ];

  const partnershipBenefits = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Market Reach',
      description: 'Extensive network coverage across Maharashtra and Central India',
      metric: '500+ Locations'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Reliability',
      description: 'Industry-leading on-time delivery and service quality',
      metric: '99.8% OTD'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Growth Partnership',
      description: 'Collaborative growth strategies and market expansion',
      metric: '25% YoY Growth'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Excellence',
      description: 'Award-winning service quality and industry recognition',
      metric: '15+ Awards'
    }
  ];

  const stats = [
    { number: '50+', label: 'Strategic Partners', icon: <Handshake className="h-5 w-5" /> },
    { number: '25+', label: 'MMT Partnership Volume', icon: <Factory className="h-5 w-5" /> },
    { number: '48+', label: 'Years Combined Experience', icon: <Star className="h-5 w-5" /> },
    { number: '24/7', label: 'Partnership Support', icon: <Clock className="h-5 w-5" /> }
  ];

  const partnerCategories = [
    {
      icon: <Building2 className="h-10 w-10" />,
      title: 'Strategic Partners',
      count: '15+',
      description: 'Major industry players and joint venture partners'
    },
    {
      icon: <Briefcase className="h-10 w-10" />,
      title: 'Client Partners',
      count: '200+',
      description: 'Steel manufacturers, DRI plants, and industrial clients'
    },
    {
      icon: <Rocket className="h-10 w-10" />,
      title: 'Technology Partners',
      count: '25+',
      description: 'Leading tech providers for IoT, AI, and automation'
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: 'Government Partners',
      count: '10+',
      description: 'Regulatory bodies and state corporations'
    }
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
                      Become a Partner
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <button 
                      className="group inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
                    >
                      Explore Network
                      <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
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

      {/* Partnership Stats */}
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

      {/* Partner Categories Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-6">
              Partner Ecosystem
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Comprehensive Partnership
              <span className="text-red-600"> Network</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our diverse partner ecosystem enables us to deliver end-to-end logistics solutions with unmatched reliability and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerCategories.map((category, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform shadow-xl">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.title}</h3>
                <div className="text-4xl font-bold text-red-600 mb-3">{category.count}</div>
                <p className="text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Strategic Partners */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
              Strategic Alliance
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Key Strategic
              <span className="text-red-600"> Partners</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Collaborating with industry leaders who share our vision for excellence, innovation, and sustainable growth
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {keyPartners.map((partner, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-600 to-red-400 opacity-10 rounded-bl-full"></div>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
                        partner.category === 'parent' ? 'bg-red-100 text-red-600' :
                        partner.category === 'strategic' ? 'bg-blue-100 text-blue-600' :
                        partner.category === 'government' ? 'bg-green-100 text-green-600' :
                        'bg-purple-100 text-purple-600'
                      }`}>
                        {partner.type}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{partner.name}</h3>
                      <p className="text-red-600 font-medium mb-4">{partner.relationship}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">Since</div>
                      <div className="text-2xl font-bold text-gray-900">{partner.since}</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{partner.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {partner.highlights.slice(0, 3).map((highlight, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="group/btn inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition-colors">
                    Explore Partnership
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Partners */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
              Client Network
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Trusted by
              <span className="text-red-600"> Industry Leaders</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Delivering specialized logistics solutions to diverse industries with unmatched reliability and expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clientPartners.map((client, index) => (
              <div 
                key={index} 
                className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 p-6 border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-red-100 text-red-600 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                  <Factory className="h-7 w-7" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{client.name}</h3>
                <p className="text-red-600 font-semibold text-sm mb-3">{client.type}</p>
                
                <div className="mb-4 pb-4 border-b border-gray-200">
                  <div className="text-3xl font-bold text-gray-900">{client.volume}</div>
                  <div className="text-xs text-gray-500">Annual Volume</div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{client.description}</p>
                
                <div className="space-y-2">
                  {client.services.slice(0, 2).map((service, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-xs">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
              Technology Excellence
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Innovation Through
              <span className="text-red-600"> Technology</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Leveraging cutting-edge technology partnerships to revolutionize logistics operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologyPartners.map((tech, index) => (
              <div 
                key={index} 
                className="group relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-500 to-blue-400 opacity-10 rounded-full"></div>
                
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <Zap className="h-7 w-7" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{tech.name}</h3>
                  <p className="text-blue-600 font-semibold text-sm mb-3">{tech.category}</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{tech.description}</p>
                  
                  <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-3 border border-blue-100">
                    <p className="text-xs text-gray-700 font-medium">Integration:</p>
                    <p className="text-xs text-gray-600 mt-1">{tech.integration}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-24 bg-gradient-to-r from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-red-600/20 text-red-400 rounded-full text-sm font-semibold mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Partnership Excellence
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Unlock exceptional value and drive mutual growth through strategic collaboration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600/20 text-red-400 rounded-2xl mb-6 group-hover:scale-110 transition-transform backdrop-blur-sm">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{benefit.description}</p>
                <div className="text-3xl font-bold text-red-400">{benefit.metric}</div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl text-center group hover:bg-white/20 transition-all duration-300">
              <Heart className="h-16 w-16 text-pink-400 mx-auto mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4">Partner-First Approach</h3>
              <p className="text-gray-300 leading-relaxed">Your success is our priority. We provide dedicated support, resources, and expertise to help you achieve your goals.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl text-center group hover:bg-white/20 transition-all duration-300">
              <Rocket className="h-16 w-16 text-blue-400 mx-auto mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4">Innovation Hub</h3>
              <p className="text-gray-300 leading-relaxed">Access cutting-edge logistics technology, AI-powered analytics, and continuous process improvements.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl text-center group hover:bg-white/20 transition-all duration-300">
              <Leaf className="h-16 w-16 text-green-400 mx-auto mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4">Sustainable Growth</h3>
              <p className="text-gray-300 leading-relaxed">Join our green logistics initiative with LNG/EV fleets and carbon-neutral operations for a sustainable future.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
              Partnership Journey
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Your Path to
              <span className="text-red-600"> Partnership</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A seamless, transparent process designed to create lasting value for all stakeholders
            </p>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-red-200 via-red-300 to-red-200 transform -translate-y-1/2 hidden lg:block"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {[
                {
                  step: '01',
                  title: 'Connect',
                  description: 'Initial discussion to understand your needs and explore collaboration opportunities.',
                  icon: <Handshake className="h-7 w-7" />
                },
                {
                  step: '02',
                  title: 'Evaluate',
                  description: 'Comprehensive assessment of capabilities, alignment, and mutual benefits.',
                  icon: <Target className="h-7 w-7" />
                },
                {
                  step: '03',
                  title: 'Formalize',
                  description: 'Structured partnership agreement with clear roles and expectations.',
                  icon: <Shield className="h-7 w-7" />
                },
                {
                  step: '04',
                  title: 'Grow',
                  description: 'Continuous support, performance optimization, and relationship growth.',
                  icon: <TrendingUp className="h-7 w-7" />
                }
              ].map((process, index) => (
                <div key={index} className="relative">
                  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform shadow-lg">
                      {process.icon}
                    </div>
                    <div className="absolute -top-4 -right-4 w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold text-sm">
                      {process.step}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-red-600 to-red-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-red-100 max-w-3xl mx-auto">
            Partner with Lloyds Surya and unlock new opportunities for growth, innovation, 
            and success in the logistics industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="group inline-flex items-center justify-center px-8 py-4 bg-white text-red-600 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl"
            >
              Start Partnership Journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button 
              className="group inline-flex items-center justify-center px-8 py-4 bg-transparent text-white border-2 border-white rounded-xl font-semibold text-lg hover:bg-white hover:text-red-600 transition-all duration-300"
            >
              Download Partner Guide
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;