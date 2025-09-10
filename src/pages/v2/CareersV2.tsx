import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight,
  Truck,
  MapPin,
  Clock,
  Briefcase,
  Users,
  Heart,
  Award,
  TrendingUp,
  Shield,
  Zap,
  Target,
  CheckCircle,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Search,
  Filter,
  Building2,
  GraduationCap,
  Sparkles,
  Coffee,
  Activity,
  Globe,
  Calendar
} from 'lucide-react';

const CareersV2 = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedJob, setExpandedJob] = useState<number | null>(null);
  const [countersVisible, setCountersVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if counters section is visible
      const countersSection = document.getElementById('career-stats');
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

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Fleet Manager',
      department: 'Operations',
      location: 'Chennai',
      type: 'Full-time',
      experience: '5-8 years',
      description: 'Lead our fleet operations team, managing 200+ vehicles and ensuring optimal performance across all routes.',
      requirements: [
        'Bachelor\'s degree in Logistics or related field',
        'Minimum 5 years of fleet management experience',
        'Strong knowledge of GPS tracking systems',
        'Excellent leadership and communication skills'
      ]
    },
    {
      id: 2,
      title: 'Logistics Coordinator',
      department: 'Operations',
      location: 'Mumbai',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'Coordinate daily logistics operations, route planning, and ensure timely delivery of shipments.',
      requirements: [
        'Diploma/Degree in Supply Chain Management',
        'Experience with logistics software',
        'Strong analytical skills',
        'Ability to work in fast-paced environment'
      ]
    },
    {
      id: 3,
      title: 'Data Analyst',
      department: 'Technology',
      location: 'Chennai',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Analyze logistics data to optimize routes, reduce costs, and improve operational efficiency.',
      requirements: [
        'Bachelor\'s degree in Computer Science or Statistics',
        'Proficiency in Python, SQL, and data visualization tools',
        'Experience with logistics analytics',
        'Strong problem-solving skills'
      ]
    },
    {
      id: 4,
      title: 'Safety Officer',
      department: 'Safety & Compliance',
      location: 'Delhi',
      type: 'Full-time',
      experience: '4-6 years',
      description: 'Ensure compliance with safety regulations and implement safety programs across all operations.',
      requirements: [
        'Certification in Industrial Safety',
        'Knowledge of transportation safety regulations',
        'Experience in conducting safety audits',
        'Strong attention to detail'
      ]
    },
    {
      id: 5,
      title: 'Business Development Executive',
      department: 'Sales',
      location: 'Mumbai',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Drive business growth by identifying new opportunities and building client relationships.',
      requirements: [
        'Bachelor\'s degree in Business or Marketing',
        'Proven track record in B2B sales',
        'Knowledge of logistics industry',
        'Excellent negotiation skills'
      ]
    }
  ];

  const departments = ['all', 'Operations', 'Technology', 'Safety & Compliance', 'Sales', 'Finance', 'HR'];
  const locations = ['all', 'Chennai', 'Mumbai', 'Delhi'];

  const filteredJobs = jobOpenings.filter(job => {
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'all' || job.location === selectedLocation;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDepartment && matchesLocation && matchesSearch;
  });

  const benefits = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance for you and your family, wellness programs, and regular health checkups.'
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: 'Learning & Development',
      description: 'Continuous learning opportunities, professional certifications, and skill development programs.'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Work-Life Balance',
      description: 'Flexible work arrangements, generous leave policies, and family-friendly benefits.'
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Recognition & Rewards',
      description: 'Performance-based incentives, employee recognition programs, and career advancement opportunities.'
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Financial Security',
      description: 'Competitive salaries, retirement benefits, and comprehensive insurance coverage.'
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      title: 'Great Work Environment',
      description: 'Modern offices, collaborative culture, team events, and employee engagement activities.'
    }
  ];

  const cultureValues = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Integrity',
      description: 'We conduct business with honesty and transparency'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Teamwork',
      description: 'We succeed together through collaboration'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Innovation',
      description: 'We embrace change and drive innovation'
    }
  ];

  const stats = [
    { value: 1500, suffix: '+', label: 'Employees' },
    { value: 15, suffix: '+', label: 'Years of Growth' },
    { value: 95, suffix: '%', label: 'Employee Retention' },
    { value: 50, suffix: '+', label: 'Open Positions' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Same as other V2 pages */}
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
              <Link to="/v2/careers" className="text-red-600 font-medium">Careers</Link>
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
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-0 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-100/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Build Your Career with <span className="text-purple-600">Purpose</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
              Join India's leading logistics company and be part of a team that's transforming the supply chain industry through innovation and excellence.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => document.getElementById('openings')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-all font-medium flex items-center space-x-2"
              >
                <span>View Open Positions</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="px-8 py-3 bg-transparent text-purple-600 border-2 border-purple-600 rounded-full hover:bg-purple-50 transition-all font-medium">
                Submit Your Resume
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="career-stats" className="py-16 bg-white">
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

      {/* Culture Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Culture & Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We foster a culture of innovation, collaboration, and continuous growth
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {cultureValues.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-xl mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section id="openings" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Current Openings</h2>
            <p className="text-xl text-gray-600">Find the perfect role that matches your skills and aspirations</p>
          </div>

          {/* Filters */}
          <div className="bg-gray-50 rounded-2xl p-6 mb-8">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search jobs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {departments.map(dept => (
                  <option key={dept} value={dept}>
                    {dept === 'all' ? 'All Departments' : dept}
                  </option>
                ))}
              </select>

              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {locations.map(loc => (
                  <option key={loc} value={loc}>
                    {loc === 'all' ? 'All Locations' : loc}
                  </option>
                ))}
              </select>

              <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2">
                <Filter className="h-5 w-5" />
                <span>Apply Filters</span>
              </button>
            </div>
          </div>

          {/* Job Listings */}
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all overflow-hidden"
              >
                <div
                  className="p-6 cursor-pointer"
                  onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span className="flex items-center space-x-1">
                          <Building2 className="h-4 w-4" />
                          <span>{job.department}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Briefcase className="h-4 w-4" />
                          <span>{job.type}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{job.experience}</span>
                        </span>
                      </div>
                    </div>
                    <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                      Apply Now
                    </button>
                  </div>
                </div>

                {expandedJob === job.id && (
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <div className="pt-4">
                      <p className="text-gray-600 mb-4">{job.description}</p>
                      <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-gray-600">
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">No positions found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Join Lloyds Surya?</h2>
            <p className="text-xl text-gray-600">We offer comprehensive benefits to support your growth and well-being</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-lg mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Recruitment Process</h2>
            <p className="text-xl text-gray-600">Simple, transparent, and efficient hiring process</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 text-white rounded-full mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Apply Online</h3>
              <p className="text-sm text-gray-600">Submit your application through our portal</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 text-white rounded-full mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Initial Screening</h3>
              <p className="text-sm text-gray-600">Our team reviews your profile</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 text-white rounded-full mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Interview</h3>
              <p className="text-sm text-gray-600">Technical and HR discussions</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 text-white rounded-full mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Offer & Onboarding</h3>
              <p className="text-sm text-gray-600">Welcome to the team!</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Join Our Success Story
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Partner with us to experience logistics excellence backed by decades of expertise and innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all font-medium flex items-center space-x-2">
              <span>Partner With Us</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="px-8 py-3 bg-transparent text-red-600 border-2 border-red-600 rounded-full hover:bg-red-50 transition-all font-medium">
              Join Our Team
            </button>
          </div>
        </div>
      </section>

      {/* Footer - Same as other V2 pages */}
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
    </div>
  );
};

export default CareersV2;