import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft,
  ArrowRight,
  Truck,
  Calendar,
  Clock,
  User,
  Share2,
  Bookmark,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Facebook,
  Copy,
  Check
} from 'lucide-react';

const NewsArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  // News articles data
  const articles = {
    'ev-trucks-launch': {
      title: 'Lloyds Surya Launches 100 New EV Trucks',
      category: 'Sustainability',
      date: 'December 15, 2024',
      author: 'Priya Sharma',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1600&q=80',
      content: `
        <p>Lloyds Surya Private Limited has taken a significant step forward in sustainable logistics with the launch of 100 new electric vehicles (EVs) to its fleet. This milestone expansion represents our commitment to reducing carbon emissions and leading the industry's transition to green transportation.</p>

        <h2>A Commitment to Sustainability</h2>
        <p>The addition of these 100 electric trucks will reduce our annual carbon emissions by an estimated 20,000 tonnes, equivalent to planting over 800,000 trees. This initiative aligns with our goal of achieving net-zero emissions by 2035 and positions us as a leader in sustainable logistics solutions in India.</p>

        <h2>Advanced Technology Features</h2>
        <p>Each electric vehicle in our new fleet comes equipped with:</p>
        <ul>
          <li>State-of-the-art battery technology providing 350km range on a single charge</li>
          <li>Regenerative braking systems for enhanced energy efficiency</li>
          <li>Real-time telemetry and GPS tracking</li>
          <li>Advanced safety features including collision detection and lane assist</li>
          <li>Zero-emission operation in urban areas</li>
        </ul>

        <h2>Infrastructure Development</h2>
        <p>To support this electric fleet expansion, we have invested in robust charging infrastructure across our operational hubs. We've installed 50 fast-charging stations at strategic locations, ensuring minimal downtime and maximum operational efficiency.</p>

        <blockquote>
          "This investment in electric vehicles demonstrates our commitment to sustainable logistics and our responsibility towards environmental stewardship. We're not just adapting to change; we're driving it."
          <cite>- B. Prabhakaran, Managing Director</cite>
        </blockquote>

        <h2>Economic and Environmental Impact</h2>
        <p>The transition to electric vehicles offers multiple benefits:</p>
        <ul>
          <li><strong>Cost Savings:</strong> 40% reduction in operational costs compared to diesel vehicles</li>
          <li><strong>Noise Reduction:</strong> 70% quieter operation, improving quality of life in urban areas</li>
          <li><strong>Air Quality:</strong> Zero local emissions contributing to cleaner air in cities</li>
          <li><strong>Energy Independence:</strong> Reduced dependence on fossil fuels</li>
        </ul>

        <h2>Future Expansion Plans</h2>
        <p>This launch is just the beginning of our electric transformation journey. We plan to:</p>
        <ul>
          <li>Add 200 more electric vehicles by the end of 2025</li>
          <li>Establish 100 additional charging stations across India</li>
          <li>Partner with renewable energy providers for green electricity</li>
          <li>Develop in-house battery recycling capabilities</li>
        </ul>

        <h2>Industry Leadership</h2>
        <p>As one of the first major logistics companies in India to adopt electric vehicles at this scale, Lloyds Surya is setting new standards for the industry. Our initiative has already inspired several partners and competitors to explore sustainable transportation options.</p>

        <p>The successful deployment of these electric trucks marks a pivotal moment in our journey towards sustainable logistics. We remain committed to innovation, environmental responsibility, and delivering value to our stakeholders while protecting the planet for future generations.</p>
      `,
      relatedArticles: ['green-logistics-initiative', 'digital-transformation']
    },
    'ai-route-optimization': {
      title: 'AI-Powered Route Optimization Deployed',
      category: 'Technology',
      date: 'December 10, 2024',
      author: 'Rajesh Kumar',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80',
      content: `
        <p>Lloyds Surya has successfully deployed an advanced AI-powered route optimization system across its entire fleet, marking a significant technological milestone in our digital transformation journey. This cutting-edge system promises to revolutionize our logistics operations.</p>

        <h2>Revolutionary Technology Implementation</h2>
        <p>Our new AI system leverages machine learning algorithms and real-time data analytics to optimize delivery routes dynamically. The system processes millions of data points including traffic patterns, weather conditions, delivery priorities, and vehicle capabilities to determine the most efficient routes.</p>

        <h2>Key Features and Capabilities</h2>
        <ul>
          <li><strong>Dynamic Route Planning:</strong> Real-time route adjustments based on current conditions</li>
          <li><strong>Predictive Analytics:</strong> Anticipates potential delays and suggests alternatives</li>
          <li><strong>Multi-factor Optimization:</strong> Balances time, fuel consumption, and delivery priorities</li>
          <li><strong>Integration with IoT:</strong> Seamlessly connects with vehicle sensors and GPS systems</li>
          <li><strong>Customer Communication:</strong> Automated updates on delivery status and ETAs</li>
        </ul>

        <h2>Measurable Impact</h2>
        <p>Since implementation, we've observed remarkable improvements:</p>
        <ul>
          <li>15% reduction in fuel consumption</li>
          <li>22% improvement in on-time delivery rates</li>
          <li>18% decrease in average delivery time</li>
          <li>30% reduction in route planning time</li>
          <li>25% increase in daily deliveries per vehicle</li>
        </ul>

        <blockquote>
          "This AI system represents the future of logistics. It's not just about efficiency; it's about creating a smarter, more responsive supply chain that adapts to real-world conditions in real-time."
          <cite>- Rajesh Kumar, Chief Technology Officer</cite>
        </blockquote>

        <h2>Technical Architecture</h2>
        <p>The system is built on a robust cloud-based architecture that ensures scalability and reliability:</p>
        <ul>
          <li>Cloud-native deployment for unlimited scalability</li>
          <li>Edge computing for real-time decision making</li>
          <li>Advanced machine learning models trained on historical data</li>
          <li>API-first design for seamless integration</li>
          <li>Redundant systems ensuring 99.9% uptime</li>
        </ul>

        <h2>Environmental Benefits</h2>
        <p>Beyond operational efficiency, the AI system contributes significantly to our sustainability goals. The 15% reduction in fuel consumption translates to approximately 5,000 tonnes less CO2 emissions annually, supporting our commitment to environmental stewardship.</p>

        <h2>Looking Ahead</h2>
        <p>We're continuously enhancing the system with new capabilities including predictive maintenance scheduling, automated load optimization, and integration with autonomous vehicle technologies. This positions Lloyds Surya at the forefront of logistics innovation in India.</p>
      `,
      relatedArticles: ['iot-implementation', 'digital-transformation']
    },
    'global-partnership': {
      title: 'Strategic Alliance with Global Logistics Leader',
      category: 'Partnership',
      date: 'December 5, 2024',
      author: 'Anita Sharma',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80',
      content: `
        <p>Lloyds Surya Private Limited announces a landmark strategic alliance with a global logistics leader, marking a new chapter in our expansion across South Asian markets. This partnership combines our local expertise with international best practices to deliver world-class logistics solutions.</p>

        <h2>Partnership Overview</h2>
        <p>This strategic alliance brings together two industry leaders with complementary strengths. While our partner brings global experience and advanced technology platforms, Lloyds Surya contributes deep local market knowledge and established infrastructure across India.</p>

        <h2>Expansion into New Markets</h2>
        <p>The partnership opens doors to new opportunities:</p>
        <ul>
          <li>Entry into Bangladesh and Sri Lankan markets</li>
          <li>Enhanced cross-border logistics capabilities</li>
          <li>Access to international shipping networks</li>
          <li>Shared warehousing facilities across South Asia</li>
          <li>Joint ventures in emerging markets</li>
        </ul>

        <h2>Technology and Knowledge Transfer</h2>
        <p>A key aspect of this alliance is the exchange of technology and expertise:</p>
        <ul>
          <li>Implementation of global best practices</li>
          <li>Access to advanced logistics management systems</li>
          <li>Training and development programs for staff</li>
          <li>Joint research and development initiatives</li>
          <li>Shared innovation centers</li>
        </ul>

        <blockquote>
          "This partnership represents a perfect synergy of global expertise and local excellence. Together, we're poised to redefine logistics standards across South Asia."
          <cite>- B. Prabhakaran, Managing Director</cite>
        </blockquote>

        <h2>Customer Benefits</h2>
        <p>Our customers will experience immediate benefits from this alliance:</p>
        <ul>
          <li><strong>Extended Network:</strong> Access to global logistics network spanning 150+ countries</li>
          <li><strong>Enhanced Services:</strong> New service offerings including express delivery and specialized cargo handling</li>
          <li><strong>Competitive Pricing:</strong> Economies of scale resulting in cost savings</li>
          <li><strong>Technology Platform:</strong> Advanced tracking and management tools</li>
          <li><strong>Reliability:</strong> Improved service levels backed by global standards</li>
        </ul>

        <h2>Investment and Infrastructure</h2>
        <p>The partnership includes significant investment commitments:</p>
        <ul>
          <li>₹500 crore joint investment over the next three years</li>
          <li>Development of 5 new logistics hubs</li>
          <li>Fleet expansion with 500 additional vehicles</li>
          <li>Creation of 2,000+ new employment opportunities</li>
        </ul>

        <h2>Sustainability Commitment</h2>
        <p>Both partners share a strong commitment to sustainable logistics. The alliance will prioritize green initiatives including electric vehicle adoption, renewable energy usage, and carbon-neutral operations by 2030.</p>

        <h2>Future Outlook</h2>
        <p>This strategic alliance positions Lloyds Surya as a regional logistics powerhouse. We're excited about the opportunities this partnership brings and remain committed to delivering exceptional value to our customers while driving industry innovation.</p>
      `,
      relatedArticles: ['fleet-expansion', 'digital-transformation']
    }
  };

  const currentArticle = articles[id as keyof typeof articles];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!currentArticle) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Article not found</h2>
          <Link to="/news" className="text-green-600 hover:text-green-700">
            Back to News
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = currentArticle.title;
    
    switch(platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`);
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`);
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`);
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        break;
    }
  };

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
              <Link to="/services" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Services</Link>
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

      {/* Breadcrumb */}
      <div className="pt-24 pb-4 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-gray-900">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/news" className="hover:text-gray-900">News</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900 font-medium">{currentArticle.category}</span>
          </div>
        </div>
      </div>

      {/* Article Header */}
      <header className="pb-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full mb-4">
              {currentArticle.category}
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {currentArticle.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <span className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                {currentArticle.author}
              </span>
              <span className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {currentArticle.date}
              </span>
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {currentArticle.readTime}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <img 
          src={currentArticle.image} 
          alt={currentArticle.title}
          className="w-full h-96 object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Share Sidebar */}
          <div className="hidden lg:block">
            <div className="sticky top-24 space-y-4">
              <p className="text-sm font-medium text-gray-600 mb-2">Share</p>
              <button
                onClick={() => handleShare('twitter')}
                className="block p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <Twitter className="h-5 w-5 text-gray-600" />
              </button>
              <button
                onClick={() => handleShare('linkedin')}
                className="block p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <Linkedin className="h-5 w-5 text-gray-600" />
              </button>
              <button
                onClick={() => handleShare('facebook')}
                className="block p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <Facebook className="h-5 w-5 text-gray-600" />
              </button>
              <button
                onClick={() => handleShare('copy')}
                className="block p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                {copied ? (
                  <Check className="h-5 w-5 text-green-600" />
                ) : (
                  <Copy className="h-5 w-5 text-gray-600" />
                )}
              </button>
            </div>
          </div>

          {/* Article Text */}
          <div className="flex-grow prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: currentArticle.content }} />
          </div>
        </div>

        {/* Mobile Share */}
        <div className="lg:hidden mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm font-medium text-gray-600 mb-4">Share this article</p>
          <div className="flex space-x-3">
            <button
              onClick={() => handleShare('twitter')}
              className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Twitter className="h-5 w-5 text-gray-600" />
            </button>
            <button
              onClick={() => handleShare('linkedin')}
              className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Linkedin className="h-5 w-5 text-gray-600" />
            </button>
            <button
              onClick={() => handleShare('facebook')}
              className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Facebook className="h-5 w-5 text-gray-600" />
            </button>
            <button
              onClick={() => handleShare('copy')}
              className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              {copied ? (
                <Check className="h-5 w-5 text-green-600" />
              ) : (
                <Copy className="h-5 w-5 text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {currentArticle.relatedArticles && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {currentArticle.relatedArticles.map(articleId => {
                const related = articles[articleId as keyof typeof articles];
                if (!related) return null;
                
                return (
                  <Link
                    key={articleId}
                    to={`/news/${articleId}`}
                    className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
                  >
                    <div className="flex">
                      <div className="w-1/3">
                        <img 
                          src={related.image} 
                          alt={related.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-2/3 p-6">
                        <span className="text-sm text-green-600 font-medium">{related.category}</span>
                        <h3 className="text-lg font-bold text-gray-900 mt-2 mb-2 group-hover:text-green-600 transition-colors">
                          {related.title}
                        </h3>
                        <p className="text-sm text-gray-600">{related.date}</p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Navigation */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/news"
            className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to All News
          </Link>
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
            <p className="text-gray-600">&copy; 2025 Lloyds Surya Private Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .prose h2 {
          font-size: 1.75rem;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: #111827;
        }
        .prose p {
          margin-bottom: 1.25rem;
          color: #4b5563;
          line-height: 1.8;
        }
        .prose ul {
          margin-bottom: 1.25rem;
          padding-left: 1.5rem;
        }
        .prose ul li {
          margin-bottom: 0.5rem;
          color: #4b5563;
        }
        .prose blockquote {
          border-left: 4px solid #10b981;
          padding-left: 1.5rem;
          margin: 2rem 0;
          font-style: italic;
          color: #374151;
        }
        .prose blockquote cite {
          display: block;
          margin-top: 0.5rem;
          font-size: 0.875rem;
          color: #6b7280;
          font-style: normal;
        }
      `}</style>
    </div>
  );
};

export default NewsArticle;