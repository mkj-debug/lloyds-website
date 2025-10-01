import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight,
  Truck,
  Calendar,
  Clock,
  Tag,
  Search,
  Filter,
  ChevronRight,
  TrendingUp,
  Globe,
  Leaf,
  Award,
  Users,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Twitter
} from 'lucide-react';

const NewsV2 = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['all', 'Sustainability', 'Technology', 'Partnership', 'Awards', 'Operations', 'Innovation'];

  const allNews = [
    {
      id: 'ev-trucks-launch',
      date: 'Dec 15, 2024',
      category: 'Sustainability',
      title: 'Lloyds Surya Launches 100 New EV Trucks',
      description: 'Expanding our green fleet to reduce emissions by additional 20,000 tonnes annually.',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80',
      readTime: '5 min read',
      featured: true
    },
    {
      id: 'ai-route-optimization',
      date: 'Dec 10, 2024',
      category: 'Technology',
      title: 'AI-Powered Route Optimization Deployed',
      description: 'New system reduces fuel consumption by 15% and improves delivery times.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
      readTime: '4 min read',
      featured: true
    },
    {
      id: 'global-partnership',
      date: 'Dec 5, 2024',
      category: 'Partnership',
      title: 'Strategic Alliance with Global Logistics Leader',
      description: 'Partnering to expand operations across South Asian markets.',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
      readTime: '6 min read',
      featured: true
    },
    {
      id: 'safety-award-2024',
      date: 'Nov 28, 2024',
      category: 'Awards',
      title: 'Receives National Safety Excellence Award',
      description: 'Recognized for maintaining zero accident record for 3 consecutive years.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
      readTime: '3 min read',
      featured: false
    },
    {
      id: 'fleet-expansion',
      date: 'Nov 20, 2024',
      category: 'Operations',
      title: 'Fleet Expansion: 200 New Vehicles Added',
      description: 'Strengthening our presence in Western India with expanded fleet capacity.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      readTime: '4 min read',
      featured: false
    },
    {
      id: 'iot-implementation',
      date: 'Nov 15, 2024',
      category: 'Technology',
      title: 'IoT Sensors Deployed Across Entire Fleet',
      description: 'Real-time monitoring system enhances safety and operational efficiency.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      readTime: '5 min read',
      featured: false
    },
    {
      id: 'green-logistics-initiative',
      date: 'Nov 10, 2024',
      category: 'Sustainability',
      title: 'Green Logistics Initiative Reduces Carbon Footprint',
      description: 'New sustainable practices lead to 30% reduction in emissions.',
      image: 'https://images.unsplash.com/photo-1473445730015-841f29a9490b?auto=format&fit=crop&w=800&q=80',
      readTime: '7 min read',
      featured: false
    },
    {
      id: 'driver-training-program',
      date: 'Nov 5, 2024',
      category: 'Operations',
      title: 'Advanced Driver Training Program Launched',
      description: 'Comprehensive skill development initiative for 500+ drivers.',
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80',
      readTime: '4 min read',
      featured: false
    },
    {
      id: 'digital-transformation',
      date: 'Oct 30, 2024',
      category: 'Innovation',
      title: 'Digital Transformation Journey Accelerates',
      description: 'New digital platform streamlines operations and enhances customer experience.',
      image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=800&q=80',
      readTime: '6 min read',
      featured: false
    }
  ];

  const filteredNews = allNews.filter(news => {
    const matchesCategory = selectedCategory === 'all' || news.category === selectedCategory;
    const matchesSearch = news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         news.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredNews = filteredNews.find(news => news.featured);
  const regularNews = filteredNews.filter(news => !news.featured);

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
              <Link to="/v2" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Home</Link>
              <Link to="/v2/about" className="text-gray-700 hover:text-red-600 font-medium transition-colors">About</Link>
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
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-0 w-96 h-96 bg-green-100/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              News & <span className="text-green-600">Updates</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Stay informed about our latest developments, innovations, and achievements in the logistics industry.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category === 'all' ? 'All News' : category}
                </button>
              ))}
            </div>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredNews && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Story</h2>
            <Link 
              to={`/v2/news/${featuredNews.id}`}
              className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="grid lg:grid-cols-2">
                <div className="h-64 lg:h-auto overflow-hidden">
                  <img 
                    src={featuredNews.image} 
                    alt={featuredNews.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 lg:p-12">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                      {featuredNews.category}
                    </span>
                    <span className="text-gray-500 text-sm flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {featuredNews.date}
                    </span>
                    <span className="text-gray-500 text-sm flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredNews.readTime}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                    {featuredNews.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg">
                    {featuredNews.description}
                  </p>
                  <div className="flex items-center text-green-600 font-medium group-hover:text-green-700">
                    Read Full Story
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest News</h2>
          
          {regularNews.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularNews.map((news) => (
                <Link
                  key={news.id}
                  to={`/v2/news/${news.id}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={news.image} 
                      alt={news.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                        {news.category}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {news.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {news.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {news.date}
                      </span>
                      <ChevronRight className="h-5 w-5 text-green-600 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">No news found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-lg text-gray-600 mb-8">
            Subscribe to our newsletter for the latest news and insights
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              Subscribe
            </button>
          </form>
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

export default NewsV2;