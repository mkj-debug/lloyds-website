import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowRight, Globe, Award, Users, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Fleet & Technology', href: '/services#fleet' },
    { name: 'Sustainability', href: '/about#sustainability' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    'Iron Ore Transportation',
    'Pellet Logistics',
    'DRI Plant Operations',
    'Fleet Management',
    'Driver Training',
    'Workshop Maintenance',
  ];

  const stats = [
    { icon: <Truck className="h-5 w-5" />, value: '1,050+', label: 'Fleet' },
    { icon: <Users className="h-5 w-5" />, value: '1,500+', label: 'Drivers' },
    { icon: <Award className="h-5 w-5" />, value: '48+', label: 'Years' },
    { icon: <Clock className="h-5 w-5" />, value: '24/7', label: 'Support' },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Newsletter Section */}
      <div className="bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay Updated with Lloyds Surya</h3>
              <p className="text-red-100">Get the latest updates on logistics innovations and industry insights</p>
            </div>
            <div className="flex w-full lg:w-auto max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-6 py-3 bg-gray-900 hover:bg-gray-800 rounded-r-lg font-semibold transition-colors duration-300 flex items-center">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <div className="bg-red-600 p-3 rounded-xl group-hover:bg-red-700 transition-colors">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold">Lloyds Surya</span>
                <span className="block text-xs text-gray-400 uppercase tracking-wider">Private Limited</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Part of the prestigious Lloyds Group, revolutionizing logistics since 1977. Leading the industry with innovative solutions and sustainable practices.
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-800/50 rounded-lg p-3">
                  <div className="flex items-center space-x-2 text-red-400 mb-1">
                    {stat.icon}
                    <span className="text-xl font-bold text-white">{stat.value}</span>
                  </div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-gray-400 hover:text-red-400 transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-gray-400 hover:text-red-400 transition-colors duration-200 cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Get in Touch</h3>
            <div className="space-y-4">
              <a href="tel:+91XXXXXXXXXX" className="flex items-start space-x-3 text-gray-400 hover:text-red-400 transition-colors group">
                <Phone className="h-5 w-5 text-red-500 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="font-medium text-white">Call Us</div>
                  <span className="text-sm">+91 XXX XXX XXXX</span>
                </div>
              </a>
              
              <a href="mailto:info@lloydssurya.com" className="flex items-start space-x-3 text-gray-400 hover:text-red-400 transition-colors group">
                <Mail className="h-5 w-5 text-red-500 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="font-medium text-white">Email Us</div>
                  <span className="text-sm">info@lloydssurya.com</span>
                </div>
              </a>
              
              <div className="flex items-start space-x-3 text-gray-400">
                <MapPin className="h-5 w-5 text-red-500 mt-0.5" />
                <div>
                  <div className="font-medium text-white">Corporate Office</div>
                  <span className="text-sm">
                    Maharashtra, India<br />
                    (Address details to be provided)
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-gray-400">
                <Globe className="h-5 w-5 text-red-500 mt-0.5" />
                <div>
                  <div className="font-medium text-white">Operating Regions</div>
                  <span className="text-sm">
                    Maharashtra & Central India
                  </span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h4 className="text-sm font-bold mb-4 text-white">Follow Us</h4>
              <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm text-center lg:text-left">
              © {currentYear} Lloyds Surya Private Limited. All rights reserved. | Part of Lloyds Group
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-red-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-red-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-red-400 transition-colors">
                Sitemap
              </Link>
              <Link to="/disclaimer" className="text-gray-400 hover:text-red-400 transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>
          
          {/* Certification Badges */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs text-gray-500">
            <span className="px-3 py-1 bg-gray-800/50 rounded-full">ISO 9001:2015</span>
            <span className="px-3 py-1 bg-gray-800/50 rounded-full">ISO 14001:2015</span>
            <span className="px-3 py-1 bg-gray-800/50 rounded-full">OHSAS 18001:2007</span>
            <span className="px-3 py-1 bg-gray-800/50 rounded-full">Green Logistics Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;