import React from 'react';
import { Award, Users, Target, Eye, Heart, Zap, Truck, Shield, Factory, Calendar, TrendingUp, Globe, CheckCircle, ArrowRight } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our logistics operations and customer service.'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Integrity',
      description: 'We conduct our business with the highest ethical standards and transparency.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Teamwork',
      description: 'We believe in the power of collaboration and teamwork across all levels.'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Innovation',
      description: 'We continuously innovate with cutting-edge technology and industry best practices.'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Women Empowerment',
      description: 'We are committed to creating equal opportunities through our "Iron Women" program for women truck drivers.'
    }
  ];

  const milestones = [
    { year: '1977', event: 'Lloyds Group Founded', description: 'The beginning of our legacy in industrial excellence' },
    { year: '2007-2019', event: 'Overcame Naxalite Challenges', description: 'Resilience and determination in difficult times' },
    { year: '2021', event: 'LSPL Established', description: 'LMEL & TEMPL partnership creates logistics powerhouse' },
    { year: '2023', event: 'Expanded to 10 MTPA Capacity', description: 'Significant scale-up in operations' },
    { year: '2024', event: 'Achieved 1,050+ Fleet Milestone', description: 'Major fleet expansion achievement' },
    { year: '2025', event: 'Target: 25 MTPA Capacity', description: 'Ambitious growth plans for the future' }
  ];

  const leadership = [
    {
      name: 'Mr. B. Prabhakaran',
      role: 'Managing Director',
      description: 'Visionary leader managing both LMEL & TEMPL operations with 20+ years of mining and logistics expertise.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Operations Leadership',
      role: 'Fleet Management Team',
      description: 'Experienced professionals ensuring 24/7 operations with 1,500+ drivers and advanced fleet management.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Technology Team',
      role: 'Digital Innovation Hub',
      description: 'Tech experts driving AI integration, IoT implementation, and digital transformation initiatives.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const achievements = [
    { metric: '48+', label: 'Years of Excellence', icon: <Calendar className="h-6 w-6" /> },
    { metric: '25+', label: 'MMT Annual Capacity', icon: <TrendingUp className="h-6 w-6" /> },
    { metric: '1,050+', label: 'Fleet Vehicles', icon: <Truck className="h-6 w-6" /> },
    { metric: '80,000', label: 'Tonnes CO₂ Saved', icon: <Globe className="h-6 w-6" /> },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-red-900 to-gray-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80)'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <span className="inline-block px-4 py-2 bg-red-600/20 text-red-400 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
              About Lloyds Surya
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight">
              Pioneering
              <span className="block text-red-500">Logistics Excellence</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Part of the prestigious Lloyds Group, revolutionizing bulk mineral transportation across India 
              with innovation, sustainability, and unwavering commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 text-red-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">{item.metric}</div>
                <div className="text-gray-600 font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-6">
                Our Story
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Building India's 
                <span className="text-red-600"> Logistics Future</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Lloyds Surya Private Limited (LSPL) represents the culmination of decades of expertise in industrial logistics. 
                Formed through a strategic partnership between Lloyds Metals & Energy Ltd (LMEL) and TEMPL in 2021, 
                we combine the legacy of the Lloyds Group with cutting-edge innovation.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our journey began with LMEL's establishment in 1977, weathering challenges including the Naxalite period 
                from 2007-2019. Today, we stand as Maharashtra's leading logistics provider, specializing in iron ore 
                transportation, pellet logistics, and DRI plant operations with a fleet exceeding 1,050 vehicles.
              </p>
              
              <div className="space-y-4">
                {[
                  'Strategic partnership between LMEL and TEMPL',
                  'Over 25 MMT annual capacity handling capability',
                  'Advanced fleet including HSD, LNG, and EV trucks',
                  '24/7 operations with comprehensive driver support'
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-600 to-red-400 rounded-3xl opacity-20 blur-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80" 
                alt="Lloyds Surya Fleet Operations" 
                className="relative rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold text-gray-900">1977</div>
                <div className="text-gray-600">Legacy Begins</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
              Our Purpose
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Vision & Mission
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Guiding principles that drive our commitment to excellence and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="group bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 text-red-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To revolutionize logistics through relentless innovation, adopting cutting-edge technology and industry trends. 
                We are committed to building a smart, scalable, and tech-driven transportation ecosystem that maximizes efficiency, 
                minimizes costs, and sets new industry standards.
              </p>
            </div>
            
            <div className="group bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 text-red-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                We empower local employment by integrating next-gen drivers into a sustainable, tech-driven ecosystem. 
                Through strategic partnerships and innovation, we enhance efficiency, reduce costs, and improve driver work culture 
                while ensuring seamless, high-capacity logistics solutions.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h3>
            <p className="text-lg text-gray-600">The principles that guide every decision and action we take</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <div key={index} className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 text-red-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
              Our Journey
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Corporate Milestones
            </h2>
            <p className="text-lg text-gray-600">
              From humble beginnings to industry leadership - our story of growth and resilience
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-1 bg-gradient-to-b from-red-200 via-red-300 to-red-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <div className="group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                      <div className="text-3xl font-bold text-red-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.event}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
              Leadership
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Visionary Leadership
            </h2>
            <p className="text-lg text-gray-600">
              Meet the exceptional leaders driving our mission of logistics excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((member, index) => (
              <div key={index} className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <div className="text-red-600 font-semibold mb-4 text-lg">{member.role}</div>
                  <p className="text-gray-600 leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation & Sustainability */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-red-600/20 text-red-400 rounded-full text-sm font-semibold mb-4">
              Innovation & Sustainability
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Driving the Future Forward
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Leading industry transformation through technology innovation and sustainable practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl text-center group hover:bg-white/20 transition-all duration-300">
              <Zap className="h-16 w-16 text-green-400 mx-auto mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4">Green Fleet Initiative</h3>
              <p className="text-gray-300 leading-relaxed">LNG and EV trucks reducing CO₂ emissions by 80,000 tonnes annually, with dedicated charging and refueling infrastructure.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl text-center group hover:bg-white/20 transition-all duration-300">
              <Heart className="h-16 w-16 text-pink-400 mx-auto mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4">Iron Women Program</h3>
              <p className="text-gray-300 leading-relaxed">Pioneering women empowerment in logistics, breaking barriers and creating opportunities for women in trucking.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl text-center group hover:bg-white/20 transition-all duration-300">
              <Truck className="h-16 w-16 text-blue-400 mx-auto mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4">Smart Fleet Technology</h3>
              <p className="text-gray-300 leading-relaxed">AI-powered fleet management, predictive maintenance, and IoT integration for optimal efficiency and safety.</p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <a 
              href="/sustainability" 
              className="group inline-flex items-center px-8 py-4 bg-red-600 hover:bg-red-700 rounded-xl font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              Learn More About Our Impact
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;