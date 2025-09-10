import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Users, Heart, Trophy, Coffee, Briefcase, MapPin, Clock, ArrowRight, CheckCircle, Star, Globe, Award, TrendingUp, Shield, ChevronRight, Zap, Target, Leaf, Truck, Factory, Route, Database } from 'lucide-react';

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const heroSlides = [
    {
      title: 'Build Your Legacy',
      subtitle: 'With Industry Leaders',
      description: 'Join 1,500+ professionals driving India\'s logistics revolution with cutting-edge technology and sustainable practices.',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=80',
    },
    {
      title: 'Empowering Women',
      subtitle: 'Iron Women Program',
      description: 'Breaking barriers in logistics with equal opportunities and comprehensive support for women in transportation.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=2000&q=80',
    },
    {
      title: 'Innovation First',
      subtitle: 'Technology-Driven Careers',
      description: 'Work with AI, IoT, and cutting-edge fleet management systems shaping the future of logistics.',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=2000&q=80',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const benefits = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, medical coverage for family, and wellness programs.',
      features: ['Medical Insurance', 'Wellness Programs', 'Health Checkups']
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: 'Growth Opportunities',
      description: 'Clear career progression paths, skill development, and leadership training programs.',
      features: ['Career Development', 'Training Programs', 'Skill Enhancement']
    },
    {
      icon: <Coffee className="h-8 w-8" />,
      title: 'Work-Life Balance',
      description: 'Flexible working hours, family-friendly policies, and recreational facilities.',
      features: ['Flexible Hours', 'Family Support', 'Recreation']
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Safety First',
      description: 'Industry-leading safety protocols, equipment, and training for all team members.',
      features: ['Safety Training', 'PPE Provided', '5-Star Safety Rating']
    }
  ];

  const jobOpenings = [
    {
      title: 'Fleet Operations Manager',
      location: 'Mumbai, Maharashtra',
      type: 'Full-time',
      experience: '7-10 years',
      salary: '₹8-12 LPA',
      department: 'Operations',
      description: 'Lead our fleet operations across Maharashtra and Central India. Oversee 1,050+ vehicles and ensure operational excellence.',
      requirements: ['Bachelor\'s degree in Engineering/Management', 'Fleet management experience', 'Leadership skills', 'Knowledge of logistics software'],
      responsibilities: ['Manage daily fleet operations', 'Optimize route planning', 'Ensure compliance and safety', 'Team management and development'],
      featured: true
    },
    {
      title: 'Senior Heavy Vehicle Driver',
      location: 'Gadchiroli, Maharashtra',
      type: 'Full-time',
      experience: '5+ years',
      salary: '₹4-6 LPA',
      department: 'Operations',
      description: 'Experienced drivers for iron ore and heavy mineral transportation. Join our Iron Women program.',
      requirements: ['Valid Heavy Vehicle License', 'Mining area driving experience', 'Clean driving record', 'Safety certification'],
      responsibilities: ['Safe transportation of materials', 'Vehicle maintenance checks', 'Route compliance', 'Documentation'],
      featured: false
    },
    {
      title: 'Logistics Technology Specialist',
      location: 'Pune, Maharashtra',
      type: 'Full-time',
      experience: '4-6 years',
      salary: '₹6-9 LPA',
      department: 'Technology',
      description: 'Implement and maintain IoT, GPS tracking, and fleet management technologies.',
      requirements: ['Engineering degree in IT/Electronics', 'IoT/GPS systems experience', 'Fleet software knowledge', 'Problem-solving skills'],
      responsibilities: ['Technology implementation', 'System maintenance', 'Data analysis', 'User training'],
      featured: false
    },
    {
      title: 'Workshop Maintenance Engineer',
      location: 'Allapalli, Maharashtra',
      type: 'Full-time',
      experience: '3-5 years',
      salary: '₹3.5-5.5 LPA',
      department: 'Maintenance',
      description: 'Ensure optimal fleet performance through preventive and predictive maintenance programs.',
      requirements: ['Mechanical Engineering degree', 'Heavy vehicle maintenance experience', 'SAP knowledge preferred', 'Technical skills'],
      responsibilities: ['Preventive maintenance', 'Breakdown repairs', 'Inventory management', 'Quality assurance'],
      featured: false
    },
    {
      title: 'Safety & Compliance Officer',
      location: 'Various Locations',
      type: 'Full-time',
      experience: '4-7 years',
      salary: '₹5-7 LPA',
      department: 'Safety',
      description: 'Maintain our industry-leading safety standards and ensure regulatory compliance.',
      requirements: ['Safety certification', 'Mining industry experience', 'Regulatory knowledge', 'Training abilities'],
      responsibilities: ['Safety audits', 'Training programs', 'Compliance monitoring', 'Incident investigation'],
      featured: false
    },
    {
      title: 'Business Development Executive',
      location: 'Mumbai, Maharashtra',
      type: 'Full-time',
      experience: '3-6 years',
      salary: '₹4-7 LPA',
      department: 'Sales',
      description: 'Expand our client base and develop strategic partnerships in the logistics sector.',
      requirements: ['MBA/Business degree', 'B2B sales experience', 'Logistics industry knowledge', 'Communication skills'],
      responsibilities: ['Client acquisition', 'Partnership development', 'Market analysis', 'Proposal preparation'],
      featured: false
    }
  ];

  const stats = [
    { number: '1,500+', label: 'Team Members', icon: <Users className="h-5 w-5" /> },
    { number: '98%', label: 'Employee Satisfaction', icon: <Star className="h-5 w-5" /> },
    { number: '25+', label: 'Growth Programs', icon: <TrendingUp className="h-5 w-5" /> },
    { number: '100%', label: 'Safety Record', icon: <Shield className="h-5 w-5" /> }
  ];

  const cultureValues = [
    {
      icon: <Target className="h-10 w-10" />,
      title: 'Purpose-Driven',
      description: 'Every role contributes to India\'s industrial growth and logistics excellence.',
      color: 'red'
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: 'Innovation Culture',
      description: 'Embrace cutting-edge technology and continuous improvement mindset.',
      color: 'yellow'
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: 'Team First',
      description: 'Collaborative environment where every voice matters and success is shared.',
      color: 'blue'
    },
    {
      icon: <Leaf className="h-10 w-10" />,
      title: 'Sustainable Future',
      description: 'Leading green initiatives with LNG/EV fleet and eco-friendly practices.',
      color: 'green'
    }
  ];

  const careerPaths = [
    {
      department: 'Operations',
      icon: <Truck className="h-8 w-8" />,
      roles: ['Fleet Manager', 'Operations Head', 'Logistics Director'],
      growth: 'Clear progression from driver to management roles'
    },
    {
      department: 'Technology',
      icon: <Database className="h-8 w-8" />,
      roles: ['Tech Lead', 'IoT Specialist', 'CTO'],
      growth: 'Innovation-driven career in fleet tech and AI'
    },
    {
      department: 'Maintenance',
      icon: <Factory className="h-8 w-8" />,
      roles: ['Workshop Head', 'Regional Manager', 'Technical Director'],
      growth: 'Technical expertise to leadership positions'
    },
    {
      department: 'Business',
      icon: <Route className="h-8 w-8" />,
      roles: ['Sales Head', 'Partnership Director', 'VP Growth'],
      growth: 'Client-facing roles to strategic leadership'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Fleet Supervisor',
      content: 'Joining Lloyds Surya was the best career decision I made. The Iron Women program gave me opportunities I never thought possible in this industry.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b74b35bd?auto=format&fit=crop&w=150&q=80',
      years: '4 years'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Senior Driver',
      content: 'The company truly cares about driver welfare. Modern trucks, fair compensation, and excellent safety protocols make this a great place to work.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      years: '6 years'
    },
    {
      name: 'Ankita Desai',
      role: 'Technology Lead',
      content: 'Working on cutting-edge IoT and AI solutions for fleet management has been incredibly rewarding. The innovation culture here is amazing.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
      years: '3 years'
    }
  ];

  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(testimonialTimer);
  }, []);

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
                    <button className="group inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white rounded-xl font-semibold text-lg hover:bg-red-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
                      View Open Positions
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="group inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
                      Submit Resume
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

      {/* Culture & Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-6">
              Our Culture
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Where Excellence Meets
              <span className="text-red-600"> Opportunity</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join a workplace that values innovation, sustainability, and personal growth while driving India's logistics revolution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {cultureValues.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600/20 text-red-400 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
              Benefits
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive Benefits Package
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe our people are our greatest asset. That's why we offer industry-leading benefits and support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="p-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-red-100 text-red-600 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 mb-4">{benefit.description}</p>
                  <div className="space-y-2">
                    {benefit.features.map((feature, idx) => (
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

      {/* Career Paths Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
              Growth Opportunities
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Clear Career Progression
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Multiple pathways to leadership with structured growth plans and mentorship
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {careerPaths.map((path, index) => (
              <div key={index} className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-red-100 text-red-600 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                  {path.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{path.department}</h3>
                <p className="text-gray-600 text-sm mb-4">{path.growth}</p>
                <div className="space-y-2">
                  {path.roles.map((role, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-500">
                      <ChevronRight className="h-4 w-4 text-red-500 mr-2" />
                      {role}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
              Current Openings
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Find Your Perfect Role
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore exciting career opportunities across operations, technology, maintenance, and more
            </p>
          </div>

          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <div key={index} className={`group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${job.featured ? 'ring-2 ring-red-600' : ''}`}>
                {job.featured && (
                  <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2 text-sm font-semibold">
                    ⭐ Featured Position
                  </div>
                )}
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2 text-red-600" />
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <Briefcase className="h-4 w-4 mr-2 text-blue-600" />
                          {job.type}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-green-600" />
                          {job.experience}
                        </span>
                        <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700 font-medium">
                          {job.salary}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0">
                      <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold">
                        {job.department}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">{job.description}</p>

                  {selectedJob === index && (
                    <div className="border-t border-gray-200 pt-6 animate-slide-down">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-4">Requirements</h4>
                          <ul className="space-y-2">
                            {job.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-4">Responsibilities</h4>
                          <ul className="space-y-2">
                            {job.responsibilities.map((resp, idx) => (
                              <li key={idx} className="flex items-start">
                                <ArrowRight className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-3 mt-6">
                    <button
                      onClick={() => setSelectedJob(selectedJob === index ? null : index)}
                      className="flex-1 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl font-semibold transition-all duration-300"
                    >
                      {selectedJob === index ? 'Hide Details' : 'View Details'}
                    </button>
                    <button className="flex-1 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group-hover:scale-105">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Testimonials with Slider */}
      <section className="py-24 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-red-600/20 text-red-400 rounded-full text-sm font-semibold mb-4">
              Employee Stories
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Voices of Our Team
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Real stories from team members who are shaping the future of logistics
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md p-12 rounded-3xl">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-opacity duration-500 ${
                    index === currentTestimonial ? 'opacity-100' : 'opacity-0 absolute inset-0 p-12'
                  }`}
                >
                  {index === currentTestimonial && (
                    <>
                      <div className="flex items-center justify-center mb-8">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-24 h-24 rounded-full object-cover border-4 border-white/20"
                        />
                      </div>
                      <p className="text-xl text-gray-200 leading-relaxed italic text-center mb-8">
                        "{testimonial.content}"
                      </p>
                      <div className="text-center">
                        <h4 className="font-bold text-2xl text-white mb-1">{testimonial.name}</h4>
                        <p className="text-red-400 text-lg">{testimonial.role}</p>
                        <p className="text-gray-400 text-sm mt-2">{testimonial.years} with Lloyds Surya</p>
                      </div>
                    </>
                  )}
                </div>
              ))}
              
              {/* Testimonial Indicators */}
              <div className="flex justify-center space-x-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`h-2 transition-all duration-300 rounded-full ${
                      index === currentTestimonial ? 'w-8 bg-red-500' : 'w-2 bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-red-600 to-red-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Start Your Journey Today
          </h2>
          <p className="text-xl mb-8 text-red-100 max-w-3xl mx-auto">
            Join 1,500+ professionals driving India's logistics revolution. Build your career with 
            industry leaders committed to innovation, sustainability, and excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="group inline-flex items-center justify-center px-8 py-4 bg-white text-red-600 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl"
            >
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="group inline-flex items-center justify-center px-8 py-4 bg-transparent text-white border-2 border-white rounded-xl font-semibold text-lg hover:bg-white hover:text-red-600 transition-all duration-300">
              Download Careers Guide
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;