import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Headphones,
  ChevronDown,
  ChevronUp,
  Globe,
  Linkedin,
  Twitter,
  Users,
  Truck,
  CheckCircle,
  Star,
  Shield,
  Award,
  Building2,
  FileText,
  HelpCircle
} from 'lucide-react';

const ContactV2 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [countersVisible, setCountersVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if counters section is visible
      const countersSection = document.getElementById('contact-stats');
      if (countersSection) {
        const rect = countersSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setCountersVisible(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactMethods = [
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: 'Live Chat',
      description: 'Get instant answers from our support team',
      action: 'Start Chat',
      value: 'Available 24/7'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      action: '+91 44 1234 5678',
      value: 'Mon-Sat, 9AM-6PM'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email Us',
      description: 'Send us your detailed requirements',
      action: 'info@lloydssurya.com',
      value: '24 hour response'
    }
  ];

  const offices = [
    {
      city: 'Chennai',
      type: 'Headquarters',
      address: '123 Mount Road, Nungambakkam, Chennai - 600034',
      phone: '+91 44 1234 5678',
      email: 'chennai@lloydssurya.com'
    },
    {
      city: 'Mumbai',
      type: 'Regional Office',
      address: '456 Nariman Point, Marine Drive, Mumbai - 400021',
      phone: '+91 22 9876 5432',
      email: 'mumbai@lloydssurya.com'
    },
    {
      city: 'Delhi',
      type: 'Regional Office',
      address: '789 Connaught Place, Central Delhi - 110001',
      phone: '+91 11 5555 6666',
      email: 'delhi@lloydssurya.com'
    }
  ];

  const faqs = [
    {
      question: 'What types of cargo do you transport?',
      answer: 'We specialize in transporting iron ore, pellets, DRI, and other steel industry raw materials. Our fleet is equipped to handle various cargo types with specialized vehicles for different requirements.'
    },
    {
      question: 'What areas do you service?',
      answer: 'We operate across major industrial corridors in India, with a strong presence in Tamil Nadu, Andhra Pradesh, Karnataka, Maharashtra, Gujarat, and Odisha. Our network covers all major ports and steel plants.'
    },
    {
      question: 'How can I track my shipment?',
      answer: 'We provide real-time GPS tracking for all shipments. Once your cargo is dispatched, you\'ll receive tracking credentials to monitor your shipment through our online portal or mobile app.'
    },
    {
      question: 'What are your safety standards?',
      answer: 'We maintain the highest safety standards with ISO certifications, regular vehicle maintenance, trained drivers, and comprehensive insurance coverage. All our operations comply with government regulations and industry best practices.'
    },
    {
      question: 'How do I get a quote?',
      answer: 'You can request a quote through our contact form, call our sales team directly, or email us with your requirements. We typically respond within 24 hours with a detailed quotation.'
    },
    {
      question: 'Do you offer contract-based services?',
      answer: 'Yes, we offer flexible contract options including long-term partnerships, project-based contracts, and spot bookings. Our team will work with you to create a customized solution that fits your needs.'
    }
  ];

  const stats = [
    { value: 24, suffix: '/7', label: 'Support Available' },
    { value: 1, suffix: ' Hour', label: 'Response Time' },
    { value: 3, suffix: '', label: 'Office Locations' },
    { value: 98, suffix: '%', label: 'Client Satisfaction' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Same as ServicesV2 */}
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
              <Link to="/v2/about" className="text-gray-700 hover:text-red-600 font-medium transition-colors">About</Link>
              <Link to="/v2/services" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Services</Link>
              <Link to="/v2/careers" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Careers</Link>
              <Link to="/v2/contact" className="text-red-600 font-medium">Contact</Link>
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

      {/* Hero Section - Clean and Light */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Get in <span className="text-blue-600">Touch</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
              Connect with our team for customized logistics solutions. We're here to help optimize your supply chain operations.
            </p>
            
            {/* Contact Methods */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {contactMethods.map((method, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-xl w-fit mx-auto mb-4">
                    {method.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{method.description}</p>
                  <p className="text-blue-600 font-medium">{method.action}</p>
                  <p className="text-xs text-gray-500 mt-2">{method.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="contact-stats" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-gray-900">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-gray-600 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Send us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Required
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="transportation">Transportation & Logistics</option>
                    <option value="fleet">Fleet Management</option>
                    <option value="green">Green Logistics</option>
                    <option value="technology">Technology Solutions</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center space-x-2 font-medium"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Office Information */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Offices</h3>
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <div key={index} className="border-b border-gray-200 last:border-0 pb-6 last:pb-0">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-semibold text-gray-900">{office.city}</h4>
                        <span className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full">
                          {office.type}
                        </span>
                      </div>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-start space-x-3">
                          <MapPin className="h-4 w-4 text-gray-400 mt-0.5" />
                          <p>{office.address}</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone className="h-4 w-4 text-gray-400" />
                          <p>{office.phone}</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Mail className="h-4 w-4 text-gray-400" />
                          <p>{office.email}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Info Cards */}
              <div className="bg-blue-50 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-blue-600 text-white rounded-lg">
                    <Clock className="h-5 w-5" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">Business Hours</h4>
                </div>
                <p className="text-gray-700">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-700">Sunday: Closed</p>
                <p className="text-sm text-gray-600 mt-3">24/7 Emergency Support Available</p>
              </div>

              <div className="bg-green-50 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-green-600 text-white rounded-lg">
                    <FileText className="h-5 w-5" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">Quick Links</h4>
                </div>
                <div className="space-y-2">
                  <a href="#" className="block text-gray-700 hover:text-blue-600 transition-colors">Download Brochure</a>
                  <a href="#" className="block text-gray-700 hover:text-blue-600 transition-colors">Service Agreement Template</a>
                  <a href="#" className="block text-gray-700 hover:text-blue-600 transition-colors">Track Shipment</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Find answers to common questions about our services</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                  {expandedFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section - Matching About/Services pages */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Ready to Optimize Your Logistics?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Let's discuss how our comprehensive services can transform your supply chain operations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all font-medium flex items-center space-x-2">
              <span>Get Custom Quote</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="px-8 py-3 bg-transparent text-blue-600 border-2 border-blue-600 rounded-full hover:bg-blue-50 transition-all font-medium">
              View Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* Footer - Matching other V2 pages */}
      <footer className="bg-gray-100 text-gray-600 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                  <Truck className="h-6 w-6 text-white" />
                </div>
                <div className="text-xl font-bold text-gray-900">Lloyds Surya</div>
              </div>
              <p className="text-sm">
                Leading logistics solutions provider transforming India's industrial landscape through innovation and sustainability.
              </p>
              <div className="flex space-x-3 mt-4">
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
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
                  <span>+91 44 1234 5678</span>
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
    </div>
  );
};

export default ContactV2;