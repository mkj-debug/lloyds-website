import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, ChevronDown, Award, Users, Target, Eye, Heart, 
  Zap, Truck, Shield, Factory, Calendar, TrendingUp, Globe, 
  CheckCircle, ArrowUpRight, Building2, Briefcase, Star,
  MapPin, Phone, Mail, Linkedin, Twitter, Lightbulb, Leaf,
  BarChart3, Clock, Gem, Rocket
} from 'lucide-react';

const AboutV2 = () => {
  const [activeValue, setActiveValue] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [timelineVisible, setTimelineVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Check if timeline section is visible
      const timelineSection = document.getElementById('timeline');
      if (timelineSection) {
        const rect = timelineSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setTimelineVisible(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Excellence',
      description: 'We pursue excellence in every mile, every delivery, and every interaction.',
      color: 'red'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Integrity',
      description: 'Transparency and ethical practices guide all our business decisions.',
      color: 'blue'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Collaboration',
      description: 'Success through teamwork, partnerships, and collective growth.',
      color: 'green'
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Innovation',
      description: 'Pioneering new technologies and methods in logistics.',
      color: 'purple'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Empowerment',
      description: 'Creating opportunities and fostering inclusive growth.',
      color: 'pink'
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: 'Sustainability',
      description: 'Committed to environmental stewardship and green operations.',
      color: 'emerald'
    }
  ];

  const milestones = [
    {
      year: '1977',
      title: 'Foundation',
      description: 'Lloyds Group established, marking the beginning of our industrial journey.',
      icon: <Building2 className="h-6 w-6" />
    },
    {
      year: '2007-2019',
      title: 'Resilience & Growth',
      description: 'Overcame Naxalite challenges while maintaining operational excellence.',
      icon: <Shield className="h-6 w-6" />
    },
    {
      year: '2021',
      title: 'Strategic Partnership',
      description: 'LSPL formed through LMEL & TEMPL partnership, creating logistics powerhouse.',
      icon: <Briefcase className="h-6 w-6" />
    },
    {
      year: '2023',
      title: 'Scale Achievement',
      description: 'Reached 10 MTPA capacity with expanded fleet and operations.',
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      year: '2024',
      title: 'Fleet Milestone',
      description: 'Achieved 1,050+ vehicle fleet with advanced tracking systems.',
      icon: <Truck className="h-6 w-6" />
    },
    {
      year: '2025',
      title: 'Future Vision',
      description: 'Targeting 25 MTPA capacity with sustainable operations.',
      icon: <Rocket className="h-6 w-6" />
    }
  ];

  const leadership = [
    {
      name: 'Mr. B. Prabhakaran',
      role: 'Managing Director',
      description: 'Visionary leader with 20+ years of mining and logistics expertise, driving strategic growth.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
      linkedin: '#'
    },
    {
      name: 'Ms. Anita Sharma',
      role: 'Chief Operations Officer',
      description: 'Leading operational excellence and fleet management with focus on efficiency.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
      linkedin: '#'
    },
    {
      name: 'Mr. Rajesh Kumar',
      role: 'Chief Technology Officer',
      description: 'Spearheading digital transformation and AI integration in logistics.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
      linkedin: '#'
    },
    {
      name: 'Ms. Priya Patel',
      role: 'Chief Sustainability Officer',
      description: 'Driving green initiatives and sustainable practices across operations.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
      linkedin: '#'
    }
  ];

  const stats = [
    { value: '48+', label: 'Years of Excellence', icon: <Award className="h-5 w-5" /> },
    { value: '1,500+', label: 'Team Members', icon: <Users className="h-5 w-5" /> },
    { value: '25+', label: 'MMT Capacity', icon: <Factory className="h-5 w-5" /> },
    { value: '500+', label: 'Happy Clients', icon: <Heart className="h-5 w-5" /> }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Same as HomeV2 */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center">
                <Truck className="h-7 w-7 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">Lloyds Surya</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Private Limited</div>
              </div>
            </div>
            
            <div className="hidden lg:flex items-center space-x-8">
              <Link to="/v2" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Home</Link>
              <Link to="/v2/about" className="text-red-600 font-medium">About</Link>
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-red-50 via-white to-orange-50">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-0 w-96 h-96 bg-red-100/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our Story of
              <span className="text-red-600"> Excellence</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              From humble beginnings in 1977 to becoming India's leading logistics provider, 
              our journey is defined by innovation, resilience, and unwavering commitment to excellence.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-red-50 text-red-600 rounded-xl">
                      {stat.icon}
                    </div>
                    <div className="text-left">
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-red-50 text-red-700 rounded-full text-sm font-semibold mb-6">
                <Building2 className="h-4 w-4 mr-2" />
                Who We Are
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Building India's
                <span className="text-red-600"> Logistics Future</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Lloyds Surya Private Limited (LSPL) stands as Maharashtra's premier logistics provider, 
                formed through a strategic partnership between Lloyds Metals & Energy Ltd (LMEL) and TEMPL 
                in 2021. We combine decades of expertise with cutting-edge innovation.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our integrated operations span from iron ore extraction at the 348-hectare Surjagarh mines 
                to sophisticated pellet logistics and DRI plant operations, handling over 25 MMT annually 
                with our fleet of 1,050+ vehicles.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl">
                  <Factory className="h-10 w-10 text-blue-600 mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">Mining Excellence</h4>
                  <p className="text-sm text-gray-600">348-hectare Surjagarh operations</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl">
                  <Truck className="h-10 w-10 text-green-600 mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">Fleet Power</h4>
                  <p className="text-sm text-gray-600">1,050+ modern vehicles</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80" 
                  alt="Fleet Operations" 
                  className="rounded-2xl shadow-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80" 
                  alt="Mining Operations" 
                  className="rounded-2xl shadow-lg mt-8"
                />
              </div>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">25+ MMT</div>
                  <div className="text-gray-600">Annual Capacity</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Vision & Mission
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Guided by purpose, driven by innovation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-2xl mb-6">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Vision</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To revolutionize logistics through relentless innovation, building a smart, scalable, 
                and tech-driven transportation ecosystem that sets new industry standards while maximizing 
                efficiency and minimizing environmental impact.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl mb-6">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Empowering local employment through next-gen driver integration, strategic partnerships, 
                and continuous innovation. We enhance efficiency, reduce costs, and improve work culture 
                while ensuring seamless, high-capacity logistics solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide every decision and action
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setActiveValue(index)}
                onMouseLeave={() => setActiveValue(null)}
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 bg-${value.color}-50 text-${value.color}-600 rounded-xl mb-4 group-hover:scale-110 transition-transform`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
                
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-${value.color}-400 to-${value.color}-600 rounded-b-2xl transition-all duration-300 ${
                  activeValue === index ? 'opacity-100' : 'opacity-0'
                }`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Milestones that shaped our success story
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-300"></div>
            
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
                style={{
                  animation: timelineVisible ? `fadeInUp 0.6s ease-out ${index * 0.15}s both` : 'none'
                }}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className={`flex items-center space-x-3 mb-3 ${index % 2 === 1 ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <div className="p-2 bg-red-50 text-red-600 rounded-lg">
                        {milestone.icon}
                      </div>
                      <div className="text-2xl font-bold text-red-600">{milestone.year}</div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Visionary leaders driving our mission forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((member, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <a 
                    href={member.linkedin}
                    className="absolute bottom-4 right-4 p-2 bg-white/90 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <Linkedin className="h-5 w-5 text-blue-600" />
                  </a>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-red-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Awards & Recognition
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Industry recognition for our excellence and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 text-white rounded-2xl mb-6">
                <Award className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence in Logistics</h3>
              <p className="text-gray-600 mb-4">Maharashtra's Leading Logistics Provider 2024</p>
              <div className="text-sm text-gray-500">Industry Excellence Awards</div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 text-white rounded-2xl mb-6">
                <Leaf className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainability Leader</h3>
              <p className="text-gray-600 mb-4">Green Fleet Initiative of the Year 2024</p>
              <div className="text-sm text-gray-500">Environmental Excellence</div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-2xl mb-6">
                <Star className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Safety Excellence</h3>
              <p className="text-gray-600 mb-4">5-Star Safety Rating 2024</p>
              <div className="text-sm text-gray-500">National Safety Council</div>
            </div>
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
            Join Our Success Story
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Partner with us to experience logistics excellence backed by decades of expertise and innovation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/v2/contact"
              className="inline-flex items-center px-8 py-4 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Partner With Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/v2/careers"
              className="inline-flex items-center px-8 py-4 bg-white text-red-600 border-2 border-red-600 rounded-full font-semibold hover:bg-red-50 transition-all duration-300"
            >
              Join Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Footer - Same as HomeV2 */}
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
                <li><Link to="/v2" className="hover:text-red-600 transition-colors">Home</Link></li>
                <li><Link to="/v2/about" className="hover:text-red-600 transition-colors">About</Link></li>
                <li><Link to="/v2/services" className="hover:text-red-600 transition-colors">Services</Link></li>
                <li><Link to="/v2/contact" className="hover:text-red-600 transition-colors">Contact</Link></li>
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
      `}</style>
    </div>
  );
};

export default AboutV2;