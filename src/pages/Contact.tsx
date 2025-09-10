import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, ArrowRight, CheckCircle, Globe, Headphones, Calendar, ChevronRight, Shield, Award, Users, Zap, Leaf, TrendingUp, Truck, Target, Factory, Database, Star } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    serviceType: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: 'Partner With Excellence',
      subtitle: '24/7 Support Available',
      description: 'Connect with Maharashtra\'s leading logistics provider for customized solutions backed by 48+ years of expertise.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2000&q=80',
    },
    {
      title: 'Immediate Response',
      subtitle: 'Within 2 Hours',
      description: 'Our expert team is standing by to address your logistics needs with industry-leading response times.',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2000&q=80',
    },
    {
      title: 'Strategic Locations',
      subtitle: 'Across Maharashtra',
      description: 'Multiple offices and operational hubs ensure seamless logistics coverage and support.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const testimonials = [
    {
      quote: "Lloyds Surya has transformed our supply chain with their reliable and efficient logistics solutions.",
      author: "Rajesh Kumar",
      position: "Operations Director",
      company: "Steel Industries Ltd.",
      rating: 5
    },
    {
      quote: "Their commitment to sustainability and green fleet initiatives aligns perfectly with our environmental goals.",
      author: "Priya Sharma",
      position: "Supply Chain Manager",
      company: "Mining Corporation",
      rating: 5
    },
    {
      quote: "24/7 support and real-time tracking have made our operations seamless and worry-free.",
      author: "Amit Patel",
      position: "Logistics Head",
      company: "DRI Plants Group",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: '',
      serviceType: ''
    });
  };

  const contactMethods = [
    {
      icon: <Phone className="h-10 w-10" />,
      title: 'Call Direct',
      description: 'Speak with our logistics experts',
      detail: '+91 XXX XXX XXXX',
      timing: 'Mon-Fri 9AM-6PM',
      action: 'Call Now',
      color: 'red'
    },
    {
      icon: <Mail className="h-10 w-10" />,
      title: 'Email Us',
      description: 'Detailed responses within 24hrs',
      detail: 'info@lloydssurya.com',
      timing: '24/7 Available',
      action: 'Send Email',
      color: 'blue'
    },
    {
      icon: <MessageSquare className="h-10 w-10" />,
      title: 'Live Chat',
      description: 'Instant support for queries',
      detail: 'Start conversation',
      timing: '24/7 Support',
      action: 'Chat Now',
      color: 'green'
    },
    {
      icon: <Calendar className="h-10 w-10" />,
      title: 'Book Meeting',
      description: 'Schedule consultation call',
      detail: 'Pick your time',
      timing: 'Flexible slots',
      action: 'Schedule',
      color: 'purple'
    }
  ];

  const officeLocations = [
    {
      city: 'Corporate Headquarters',
      region: 'Mumbai, Maharashtra',
      address: 'Lloyds Business Park, Mumbai - Maharashtra',
      phone: '+91 XXX XXX XXXX',
      email: 'mumbai@lloydssurya.com',
      type: 'primary',
      description: 'Main operations and administrative center',
      timing: 'Mon-Fri: 9AM-6PM',
      features: ['Executive Offices', 'Client Meeting Rooms', 'Technology Hub']
    },
    {
      city: 'Operations Hub',
      region: 'Gadchiroli',
      address: 'Near Surjagarh Mines, Gadchiroli - Maharashtra',
      phone: '+91 XXX XXX XXXX',
      email: 'operations@lloydssurya.com',
      type: 'operational',
      description: 'Mining operations and logistics coordination',
      timing: '24/7 Operations',
      features: ['Fleet Management', 'Control Center', 'Driver Base']
    },
    {
      city: 'Regional Office',
      region: 'Raipur',
      address: 'Industrial Area, Raipur - Chhattisgarh',
      phone: '+91 XXX XXX XXXX',
      email: 'raipur@lloydssurya.com',
      type: 'regional',
      description: 'Regional logistics and fleet management',
      timing: 'Mon-Fri: 9AM-6PM',
      features: ['Regional Hub', 'Stockyard', 'Maintenance']
    }
  ];

  const quickInfo = [
    { icon: <Globe className="h-5 w-5" />, label: 'Coverage', value: 'Maharashtra & Central India' },
    { icon: <Clock className="h-5 w-5" />, label: 'Response', value: 'Within 2 hours' },
    { icon: <Headphones className="h-5 w-5" />, label: 'Languages', value: 'Hindi, English, Marathi' },
    { icon: <Shield className="h-5 w-5" />, label: 'Support', value: '24/7 Emergency' },
  ];

  const stats = [
    { number: '2-Hour', label: 'Response Time', icon: <Clock className="h-5 w-5" /> },
    { number: '99.8%', label: 'Client Satisfaction', icon: <Star className="h-5 w-5" /> },
    { number: '500+', label: 'Active Clients', icon: <Users className="h-5 w-5" /> },
    { number: '24/7', label: 'Support Available', icon: <Headphones className="h-5 w-5" /> }
  ];

  const whyPartner = [
    { icon: <Truck className="h-10 w-10" />, title: '1,050+ Fleet', description: 'Modern vehicles with advanced tracking' },
    { icon: <Target className="h-10 w-10" />, title: '99.8% OTD', description: 'Industry-leading on-time delivery' },
    { icon: <Zap className="h-10 w-10" />, title: 'AI-Powered', description: 'Smart fleet management systems' },
    { icon: <Leaf className="h-10 w-10" />, title: 'Green Fleet', description: 'LNG/EV trucks reducing emissions' },
    { icon: <Shield className="h-10 w-10" />, title: '100% Safety', description: '5-star safety rating and protocols' },
    { icon: <Award className="h-10 w-10" />, title: '48+ Years', description: 'Legacy of excellence since 1977' }
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
                    <button className="group inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white rounded-xl font-semibold text-lg hover:bg-red-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
                      Get Instant Quote
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="group inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
                      Schedule Call
                      <Phone className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
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

      {/* Contact Methods Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-6">
              Get In Touch
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Connect With Our
              <span className="text-red-600"> Expert Team</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose your preferred communication channel - we're here to help 24/7 with your logistics needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative">
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-red-600 to-red-700"></div>
                </div>
                <div className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 text-red-600 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <div className="p-4 bg-gray-50 rounded-xl mb-4">
                    <div className="font-semibold text-gray-900">{method.detail}</div>
                    <div className="text-sm text-gray-500 mt-1">{method.timing}</div>
                  </div>
                  <button className="w-full py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                    {method.action}
                    <ChevronRight className="inline-block ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Form Section */}
            <div className="animate-slide-up">
              <div className="mb-8">
                <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-6">
                  Get Started
                </span>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Share Your
                  <span className="text-red-600"> Logistics Needs</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Complete the form below and our experts will provide a customized solution within 2 hours during business hours.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-red-100 focus:border-red-500 transition-all duration-200"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-red-100 focus:border-red-500 transition-all duration-200"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-red-100 focus:border-red-500 transition-all duration-200"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-red-100 focus:border-red-500 transition-all duration-200"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="serviceType" className="block text-sm font-semibold text-gray-900 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-red-100 focus:border-red-500 transition-all duration-200"
                  >
                    <option value="">Select a service</option>
                    <option value="transportation">Iron Ore Transportation</option>
                    <option value="pellets">Pellet Logistics</option>
                    <option value="dri">DRI Plant Support</option>
                    <option value="fleet">Fleet Management</option>
                    <option value="maintenance">Maintenance Services</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-red-100 focus:border-red-500 transition-all duration-200"
                    placeholder="Brief subject of your inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-red-100 focus:border-red-500 transition-all duration-200 resize-none"
                    placeholder="Please describe your requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      Submit Request
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Info Cards */}
            <div className="space-y-8">
              {/* Why Partner With Us */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Partner With Us?</h3>
                <div className="grid grid-cols-2 gap-4">
                  {whyPartner.map((item, index) => (
                    <div key={index} className="text-center group">
                      <div className="inline-flex items-center justify-center w-14 h-14 bg-red-100 text-red-600 rounded-xl mb-3 group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial Card */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 text-white/10">
                  <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <div className="relative">
                  <h3 className="text-2xl font-bold mb-6">Client Success</h3>
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className={`transition-opacity duration-500 ${
                        index === currentTestimonial ? 'opacity-100' : 'opacity-0 absolute'
                      }`}
                    >
                      {index === currentTestimonial && (
                        <>
                          <div className="flex mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                            ))}
                          </div>
                          <p className="text-lg text-gray-200 italic mb-4 leading-relaxed">
                            "{testimonial.quote}"
                          </p>
                          <div>
                            <div className="font-semibold">{testimonial.author}</div>
                            <div className="text-sm text-gray-400">
                              {testimonial.position}, {testimonial.company}
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                  <div className="flex space-x-2 mt-6">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`h-2 transition-all rounded-full ${
                          index === currentTestimonial ? 'w-8 bg-red-500' : 'w-2 bg-white/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Info */}
              <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Quick Information</h3>
                <div className="space-y-4">
                  {quickInfo.map((info, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                      <div className="flex items-center space-x-3">
                        <div className="text-white">{info.icon}</div>
                        <span className="font-medium">{info.label}</span>
                      </div>
                      <span className="font-semibold">{info.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
              Our Network
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Strategic Locations Across India
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Multiple offices and operational hubs ensure comprehensive coverage and support
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {officeLocations.map((office, index) => (
              <div key={index} className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className={`h-2 bg-gradient-to-r ${
                  office.type === 'primary' ? 'from-red-600 to-red-700' : 
                  office.type === 'operational' ? 'from-blue-600 to-blue-700' : 
                  'from-green-600 to-green-700'
                }`}></div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{office.city}</h3>
                      <p className="text-gray-600">{office.region}</p>
                    </div>
                    <div className="p-3 bg-red-100 text-red-600 rounded-xl group-hover:scale-110 transition-transform">
                      <MapPin className="h-6 w-6" />
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{office.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-700">
                      <MapPin className="h-5 w-5 text-red-600 mr-3" />
                      <span className="text-sm">{office.address}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Phone className="h-5 w-5 text-red-600 mr-3" />
                      <span className="text-sm">{office.phone}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Clock className="h-5 w-5 text-red-600 mr-3" />
                      <span className="text-sm">{office.timing}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {office.features.map((feature, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <button className="w-full py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                    Get Directions
                    <ArrowRight className="inline-block ml-2 h-4 w-4" />
                  </button>
                </div>
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
            Transform Your Logistics Today
          </h2>
          <p className="text-xl mb-8 text-red-100 max-w-3xl mx-auto">
            Join 500+ satisfied clients who trust Lloyds Surya for reliable, efficient, and 
            sustainable logistics solutions across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/services" 
              className="group inline-flex items-center justify-center px-8 py-4 bg-white text-red-600 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl"
            >
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="group inline-flex items-center justify-center px-8 py-4 bg-transparent text-white border-2 border-white rounded-xl font-semibold text-lg hover:bg-white hover:text-red-600 transition-all duration-300">
              <Phone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Call: +91 XXX XXX XXXX
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;