import React, { useState } from 'react';
import { GraduationCap, Wrench, Truck, Shield, Clock, Users, Zap, Factory, Route, Database, ChevronRight, ArrowRight, CheckCircle, Star, TrendingUp, Globe, Award } from 'lucide-react';

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  
  const services = [
    {
      icon: <Truck className="h-12 w-12" />,
      title: 'End-to-End Logistics & Transportation',
      description: 'Complete logistics solutions handling 25+ MMT annually from Surjagarh mines to processing plants, specializing in iron ore, pellets, and DRI transportation.',
      features: [
        'Iron ore transportation from 348-hectare Surjagarh mines',
        'Pellet handling and delivery (10 MTPA capacity)',
        'DRI plant logistics support at Konsari facility',
        'BHQ ore beneficiation transport to Hedri plant',
        'Railway dispatch coordination at Ballarshah sidings',
        'Multi-modal logistics: trucks, trains, slurry pipeline'
      ],
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
      stats: { volume: '25+ MMT', trips: '2,043', coverage: '89 km' }
    },
    {
      icon: <GraduationCap className="h-12 w-12" />,
      title: 'Driver Training & Development',
      description: 'Comprehensive training programs ensuring our 1,500+ drivers meet the highest standards of safety, professionalism, and regulatory compliance.',
      features: [
        'Safety protocols and mining regulations compliance',
        'Advanced vehicle handling for HSD, LNG, and EV trucks',
        'Route optimization and fuel efficiency techniques',
        'Emergency response and breakdown procedures',
        'Digital platform training and documentation',
        'Iron Women program for women drivers'
      ],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80',
      stats: { drivers: '1,500+', programs: '12+', safety: '100%' }
    },
    {
      icon: <Wrench className="h-12 w-12" />,
      title: 'Advanced Fleet Maintenance',
      description: 'State-of-the-art maintenance facilities across 3 fully equipped garages ensuring our 1,050+ fleet operates at peak efficiency with minimal downtime.',
      features: [
        'Preventive maintenance scheduling with SAP integration',
        'Advanced diagnostic equipment for all vehicle types',
        'Comprehensive spare parts inventory management',
        '24/7 emergency repair services at TLS Garage Allapalli',
        'Predictive maintenance using AI and telematics',
        'Specialized maintenance for LNG and EV vehicles'
      ],
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80',
      stats: { uptime: '98%', garages: '3', fleet: '1,050+' }
    }
  ];

  const additionalServices = [
    {
      icon: <Route className="h-8 w-8" />,
      title: 'Relay Driving System',
      description: 'Revolutionary relay model increasing fleet utilization from 58% to 80-90% with reduced driver fatigue and continuous vehicle movement.',
      benefit: '40% Efficiency Increase'
    },
    {
      icon: <Factory className="h-8 w-8" />,
      title: 'Trailer Swapping',
      description: 'Innovative trailer swap model saving 6 hours idle time per trip, enabling nonstop operations and improved efficiency.',
      benefit: '6 Hours Saved Per Trip'
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: 'Hub & Spoke Model',
      description: 'Centralized coordination from mines to stockyards (Raipur, Ballarshah) distributing to plants, sidings, and industries.',
      benefit: 'Optimized Distribution'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Green Fleet Operations',
      description: 'LNG and EV truck operations with charging hubs and refueling stations, reducing CO₂ emissions by 80,000 tonnes annually.',
      benefit: '80,000T CO₂ Reduced'
    }
  ];

  const benefits = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Safety Excellence',
      description: '5-star IBM rating with advanced safety protocols, breath analyzers, and AI fatigue detection systems.',
      metric: '100% Safety Record'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'On-Time Delivery',
      description: 'Advanced logistics planning with real-time tracking ensuring timely delivery of 25+ MMT annually.',
      metric: '99.8% OTD Rate'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: '24/7 Operations',
      description: 'Round-the-clock operations with 1,500+ professional drivers and comprehensive support systems.',
      metric: '24/7 Support'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Industry Leadership',
      description: 'Leading logistics provider with cutting-edge technology and sustainable practices.',
      metric: '15+ Awards'
    }
  ];

  const operationalHighlights = [
    { metric: '2,043', label: 'Daily Trips', icon: <TrendingUp className="h-5 w-5" /> },
    { metric: '25+', label: 'MMT Annual', icon: <Truck className="h-5 w-5" /> },
    { metric: '89', label: 'KM Pipeline', icon: <Route className="h-5 w-5" /> },
    { metric: '348', label: 'Hectare Mine', icon: <Globe className="h-5 w-5" /> }
  ];

  const infrastructure = [
    {
      title: 'Surjagarh Mines',
      description: '348-hectare mining area in Gadchiroli, Maharashtra with Western, Central, and Eastern zones for systematic iron ore extraction.',
      icon: <Factory className="h-12 w-12" />,
      image: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=800&q=80',
      features: ['Western Zone', 'Central Zone', 'Eastern Zone', 'Beneficiation Plant']
    },
    {
      title: 'Kamancheru Stockyard',
      description: 'Advanced stockyard with Tranzol, ILMS, RFID, and Quick Dispatch systems for efficient material handling.',
      icon: <Database className="h-12 w-12" />,
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80',
      features: ['RFID Systems', 'ILMS Integration', 'Quick Dispatch', 'Real-time Tracking']
    },
    {
      title: 'TLS Garage Allapalli',
      description: '4,500 sq ft maintenance facility with SAP inventory management and comprehensive spare parts.',
      icon: <Wrench className="h-12 w-12" />,
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
      features: ['SAP Integration', 'Spare Parts Inventory', '24/7 Service', 'AI Diagnostics']
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-red-900 to-gray-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80)'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <span className="inline-block px-4 py-2 bg-red-600/20 text-red-400 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
              Our Services
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight">
              Comprehensive
              <span className="block text-red-500">Logistics Solutions</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Powering India's industrial growth with innovative transportation solutions, handling 25+ MMT annually 
              across Maharashtra and Central India with our advanced fleet of 1,050+ vehicles.
            </p>
          </div>
        </div>
      </section>

      {/* Operational Highlights */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {operationalHighlights.map((highlight, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 text-red-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                  {highlight.icon}
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">{highlight.metric}</div>
                <div className="text-gray-600 font-medium">{highlight.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-24 bg-white">
        <div id="pellet" className="absolute -top-24"></div>
        <div id="dri" className="absolute -top-24"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
              Core Services
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Excellence in Every Operation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Three pillars of operational excellence delivering unmatched logistics solutions
            </p>
          </div>

          <div className="space-y-24">
            {services.map((service, index) => (
              <div 
                key={index} 
                id={
                  index === 0 ? 'iron-ore' : 
                  index === 1 ? 'fleet' : 
                  index === 2 ? 'maintenance' : 
                  undefined
                }
                className="group scroll-mt-24">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 text-red-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">{service.title}</h3>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">{service.description}</p>
                    
                    {/* Service Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {Object.entries(service.stats).map(([key, value]) => (
                        <div key={key} className="text-center p-4 bg-gray-50 rounded-xl">
                          <div className="text-2xl font-bold text-red-600">{value}</div>
                          <div className="text-xs uppercase tracking-wider text-gray-500">{key}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Features:</h4>
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="absolute -inset-4 bg-gradient-to-r from-red-600 to-red-400 rounded-3xl opacity-20 blur-2xl"></div>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="relative rounded-3xl shadow-2xl w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovative Service Models */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
              Innovation
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Revolutionary Service Models
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Pioneering approaches that maximize efficiency, sustainability, and operational excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 text-red-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <div className="inline-flex items-center px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-semibold">
                  <Star className="h-4 w-4 mr-2" />
                  {service.benefit}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-red-600/20 text-red-400 rounded-full text-sm font-semibold mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Setting Industry Standards
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our commitment to excellence drives every aspect of our operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600/20 text-red-400 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{benefit.description}</p>
                <div className="text-3xl font-bold text-red-400">{benefit.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
              Infrastructure
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              World-Class Facilities
            </h2>
            <p className="text-lg text-gray-600">
              State-of-the-art infrastructure supporting our comprehensive logistics operations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {infrastructure.map((facility, index) => (
              <div key={index} className="group bg-gradient-to-b from-gray-50 to-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={facility.image} 
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 text-red-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                    {facility.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{facility.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{facility.description}</p>
                  <div className="space-y-2">
                    {facility.features.map((feature, idx) => (
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

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-red-600 to-red-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Experience Excellence?
          </h2>
          <p className="text-xl mb-8 text-red-100 max-w-3xl mx-auto">
            Partner with Lloyds Surya for innovative, sustainable, and reliable logistics solutions 
            backed by 48+ years of Lloyds Group excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group inline-flex items-center justify-center px-8 py-4 bg-white text-red-600 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl">
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group inline-flex items-center justify-center px-8 py-4 bg-transparent text-white border-2 border-white rounded-xl font-semibold text-lg hover:bg-white hover:text-red-600 transition-all duration-300">
              Schedule Consultation
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;