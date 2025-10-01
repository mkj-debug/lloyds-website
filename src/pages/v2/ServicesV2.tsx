import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, ChevronRight, Truck, Shield, Clock, Users, 
  Zap, Factory, Route, Database, CheckCircle, Star, 
  TrendingUp, Globe, Award, MapPin, Phone, Mail, 
  Linkedin, Twitter, Package, Cpu, Settings, BarChart3,
  Leaf, Wrench, GraduationCap, Rocket, Target, Eye,
  ArrowUpRight, FileCheck, Headphones, Activity
} from 'lucide-react';

const ServicesV2 = () => {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState('transportation');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mainServices = [
    {
      id: 'transportation',
      icon: <Truck className="h-8 w-8" />,
      title: 'Transportation & Logistics',
      subtitle: 'End-to-End Supply Chain Solutions',
      description: 'Comprehensive logistics services handling 25+ MMT annually with our fleet of 1,050+ vehicles.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
      features: [
        { title: 'Iron Ore Transport', desc: 'From Surjagarh mines to processing plants' },
        { title: 'Pellet Logistics', desc: '10 MTPA capacity handling' },
        { title: 'DRI Operations', desc: 'Specialized temperature-controlled transport' },
        { title: 'Multi-Modal Transport', desc: 'Road, rail, and pipeline integration' }
      ],
      stats: { vehicles: '1,050+', capacity: '25+ MMT', routes: '89 km', uptime: '99.8%' }
    },
    {
      id: 'fleet',
      icon: <Settings className="h-8 w-8" />,
      title: 'Fleet Management',
      subtitle: 'Smart Fleet Operations',
      description: 'AI-powered fleet management with real-time tracking, predictive maintenance, and route optimization.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80',
      features: [
        { title: 'GPS Tracking', desc: 'Real-time vehicle location monitoring' },
        { title: 'Predictive Maintenance', desc: 'AI-driven maintenance scheduling' },
        { title: 'Fuel Management', desc: 'Optimization and consumption tracking' },
        { title: 'Driver Management', desc: 'Performance monitoring and training' }
      ],
      stats: { tracking: '24/7', efficiency: '+40%', savings: '30%', safety: '100%' }
    },
    {
      id: 'green',
      icon: <Leaf className="h-8 w-8" />,
      title: 'Green Logistics',
      subtitle: 'Sustainable Transportation',
      description: 'Leading the industry with LNG and EV fleets, reducing carbon emissions by 80,000 tonnes annually.',
      image: 'https://images.unsplash.com/photo-1473445730015-841f29a9490b?auto=format&fit=crop&w=1200&q=80',
      features: [
        { title: 'Electric Fleet', desc: '100+ EV trucks in operation' },
        { title: 'LNG Vehicles', desc: 'Clean fuel for long-haul transport' },
        { title: 'Carbon Reduction', desc: '80,000 tonnes CO₂ saved annually' },
        { title: 'Green Infrastructure', desc: 'Charging stations and LNG terminals' }
      ],
      stats: { evFleet: '100+', lngTrucks: '200+', emissions: '-80K T', greenScore: '95%' }
    },
    {
      id: 'technology',
      icon: <Cpu className="h-8 w-8" />,
      title: 'Technology Solutions',
      subtitle: 'Digital Transformation',
      description: 'Cutting-edge technology integration with IoT, AI, and data analytics for optimal efficiency.',
      image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1200&q=80',
      features: [
        { title: 'IoT Integration', desc: 'Connected vehicle ecosystem' },
        { title: 'AI Analytics', desc: 'Predictive insights and optimization' },
        { title: 'Digital Platform', desc: 'Customer portal and mobile apps' },
        { title: 'Automation', desc: 'Streamlined operations and processes' }
      ],
      stats: { sensors: '5,000+', dataPoints: '1M+/day', automation: '85%', accuracy: '99.9%' }
    }
  ];

  const additionalServices = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: 'Driver Training',
      description: 'Comprehensive training programs for 1,500+ drivers ensuring safety and efficiency.',
      highlight: 'ISO Certified'
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: 'Maintenance Services',
      description: '24/7 maintenance support across 3 fully equipped garages.',
      highlight: '98% Uptime'
    },
    {
      icon: <Route className="h-6 w-6" />,
      title: 'Route Optimization',
      description: 'AI-powered route planning reducing fuel consumption by 15%.',
      highlight: 'Smart Routing'
    },
    {
      icon: <FileCheck className="h-6 w-6" />,
      title: 'Compliance Management',
      description: 'Complete regulatory compliance and documentation support.',
      highlight: 'Zero Violations'
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support and emergency assistance.',
      highlight: 'Always Available'
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: 'Performance Analytics',
      description: 'Real-time dashboards and detailed performance reports.',
      highlight: 'Data-Driven'
    }
  ];

  const serviceProcess = [
    {
      step: '01',
      title: 'Consultation',
      description: 'Understanding your unique logistics requirements',
      icon: <Users className="h-6 w-6" />
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Customized solution design and route optimization',
      icon: <Target className="h-6 w-6" />
    },
    {
      step: '03',
      title: 'Execution',
      description: 'Seamless implementation with real-time tracking',
      icon: <Rocket className="h-6 w-6" />
    },
    {
      step: '04',
      title: 'Monitoring',
      description: 'Continuous monitoring and performance optimization',
      icon: <Activity className="h-6 w-6" />
    }
  ];

  const capabilities = [
    { metric: '25+', label: 'MMT Annual Capacity', icon: <Factory className="h-5 w-5" /> },
    { metric: '1,050+', label: 'Fleet Vehicles', icon: <Truck className="h-5 w-5" /> },
    { metric: '1,500+', label: 'Professional Drivers', icon: <Users className="h-5 w-5" /> },
    { metric: '99.8%', label: 'On-Time Delivery', icon: <Clock className="h-5 w-5" /> }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Same as other V2 pages */}
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
              <Link to="/" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-red-600 font-medium transition-colors">About</Link>
              <Link to="/services" className="text-red-600 font-medium">Services</Link>
              <Link to="/careers" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Careers</Link>
              <Link to="/contact" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Contact</Link>
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Comprehensive
              <span className="text-blue-600"> Logistics Solutions</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              End-to-end transportation services powered by cutting-edge technology, 
              sustainable practices, and operational excellence.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              {capabilities.map((cap, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                      {cap.icon}
                    </div>
                    <div className="text-left">
                      <div className="text-2xl font-bold text-gray-900">{cap.metric}</div>
                      <div className="text-sm text-gray-600">{cap.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Tabs */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Integrated solutions designed to meet diverse logistics needs
            </p>
          </div>

          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {mainServices.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === service.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Active Service Content */}
          {mainServices.map((service) => (
            <div
              key={service.id}
              className={`transition-all duration-500 ${
                activeTab === service.id ? 'block' : 'hidden'
              }`}
            >
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl mb-6">
                      {service.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-xl text-blue-600 mb-4">{service.subtitle}</p>
                    <p className="text-lg text-gray-700 mb-8">{service.description}</p>
                    
                    <div className="space-y-4 mb-8">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                            <p className="text-sm text-gray-600">{feature.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(service.stats).map(([key, value]) => (
                        <div key={key} className="bg-white p-4 rounded-xl shadow-md">
                          <div className="text-2xl font-bold text-blue-600">{value}</div>
                          <div className="text-xs uppercase tracking-wider text-gray-500">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-3xl opacity-20 blur-2xl"></div>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="relative rounded-3xl shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services Grid */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive support services to enhance your logistics experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-gradient-to-br from-red-50 to-orange-50 text-red-600 rounded-xl group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                    {service.highlight}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                
                <div className={`mt-4 pt-4 border-t border-gray-100 transition-all duration-300 ${
                  activeService === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <button className="inline-flex items-center text-red-600 font-semibold hover:text-red-700">
                    Learn More
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Service Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A streamlined approach to deliver exceptional logistics solutions
            </p>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 transform -translate-y-1/2 hidden lg:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {serviceProcess.map((process, index) => (
                <div key={index} className="relative">
                  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      {process.step}
                    </div>
                    <div className="mt-6 mb-4 inline-flex items-center justify-center w-14 h-14 bg-blue-50 text-blue-600 rounded-xl">
                      {process.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h3>
                    <p className="text-gray-600">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Innovation */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
                <Cpu className="h-4 w-4 mr-2" />
                Technology First
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Powered by
                <span className="text-purple-600"> Innovation</span>
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We leverage cutting-edge technology to deliver superior logistics solutions. 
                From AI-powered route optimization to IoT-enabled fleet tracking, our technology 
                stack ensures efficiency, reliability, and transparency.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">
                  <Zap className="h-10 w-10 text-purple-600 mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">AI Analytics</h4>
                  <p className="text-sm text-gray-600">Predictive insights for optimization</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl">
                  <Database className="h-10 w-10 text-blue-600 mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">Big Data</h4>
                  <p className="text-sm text-gray-600">1M+ data points processed daily</p>
                </div>
              </div>
              
              <Link
                to="/technology"
                className="inline-flex items-center px-8 py-4 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-all duration-300"
              >
                Explore Our Tech
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80" 
                  alt="Technology" 
                  className="rounded-2xl shadow-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=600&q=80" 
                  alt="Innovation" 
                  className="rounded-2xl shadow-lg mt-8"
                />
              </div>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">85%</div>
                  <div className="text-gray-600">Process Automation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Industry-leading capabilities that set us apart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-2xl mb-6">
                <Award className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">48+ years of industry expertise and proven track record</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl mb-6">
                <Shield className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Reliability</h3>
              <p className="text-gray-600">99.8% on-time delivery with zero-accident safety record</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl mb-6">
                <Rocket className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">Cutting-edge technology and continuous improvement</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-2xl mb-6">
                <Leaf className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainability</h3>
              <p className="text-gray-600">Green fleet initiatives reducing environmental impact</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to Optimize Your Logistics?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Let's discuss how our comprehensive services can transform your supply chain operations.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Custom Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/case-studies"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Footer - Same as other V2 pages */}
      <footer className="bg-gray-100 text-gray-600 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center">
                  <Truck className="h-6 w-6 text-white" />
                </div>
                <div className="text-xl font-bold text-gray-900">Lloyds Surya</div>
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
                <li><Link to="/" className="hover:text-red-600 transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-red-600 transition-colors">About</Link></li>
                <li><Link to="/services" className="hover:text-red-600 transition-colors">Services</Link></li>
                <li><Link to="/contact" className="hover:text-red-600 transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-gray-900 font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-red-600 transition-colors">Transportation</a></li>
                <li><a href="#" className="hover:text-red-600 transition-colors">Fleet Management</a></li>
                <li><a href="#" className="hover:text-red-600 transition-colors">Green Logistics</a></li>
                <li><a href="#" className="hover:text-red-600 transition-colors">Technology Solutions</a></li>
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
            <p className="text-gray-600">&copy; 2025 Lloyds Surya Private Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ServicesV2;