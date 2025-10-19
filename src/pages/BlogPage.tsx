import React, { useState } from 'react';
import { Search, Calendar, User, ArrowRight, Filter } from 'lucide-react';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Criminal Law', 'Corporate Law', 'Family Law', 'Real Estate', 'Personal Injury'];

  const blogPosts = [
    {
      id: 1,
      title: "Understanding Your Rights in Criminal Defense Cases",
      excerpt: "A comprehensive guide to navigating criminal defense proceedings and understanding your constitutional rights.",
      author: "Sarah Johnson",
      date: "2024-01-15",
      category: "Criminal Law",
      readTime: "8 min read",
      image: "https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 2,
      title: "Corporate Compliance in the Digital Age",
      excerpt: "How modern businesses can ensure regulatory compliance while embracing digital transformation.",
      author: "Michael Chen",
      date: "2024-01-12",
      category: "Corporate Law",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/7681107/pexels-photo-7681107.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      title: "Family Law Mediation: A Better Path Forward",
      excerpt: "Exploring alternative dispute resolution methods in family law cases for better outcomes.",
      author: "Emily Davis",
      date: "2024-01-10",
      category: "Family Law",
      readTime: "7 min read",
      image: "https://images.pexels.com/photos/5696114/pexels-photo-5696114.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 4,
      title: "Real Estate Transactions: Common Legal Pitfalls",
      excerpt: "Key legal considerations and common mistakes to avoid in real estate deals.",
      author: "David Wilson",
      date: "2024-01-08",
      category: "Real Estate",
      readTime: "9 min read",
      image: "https://images.pexels.com/photos/5669630/pexels-photo-5669630.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 5,
      title: "Personal Injury Claims: What You Need to Know",
      excerpt: "Understanding the personal injury claim process and maximizing your compensation.",
      author: "Lisa Rodriguez",
      date: "2024-01-05",
      category: "Personal Injury",
      readTime: "5 min read",
      image: "https://images.pexels.com/photos/6077359/pexels-photo-6077359.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 6,
      title: "Intellectual Property Protection Strategies",
      excerpt: "Comprehensive guide to protecting your intellectual property in today's competitive market.",
      author: "Robert Kim",
      date: "2024-01-03",
      category: "Corporate Law",
      readTime: "10 min read",
      image: "https://images.pexels.com/photos/7648047/pexels-photo-7648047.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Legal Blog</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Stay informed with the latest legal insights, case studies, and expert analysis
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  <span className="text-blue-600 font-medium">{post.readTime}</span>
                </div>
                
                <button className="flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;