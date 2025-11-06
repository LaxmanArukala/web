import React, { useState } from 'react';
import { Search, Calendar, User, ArrowRight, Filter } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import{ getAllBlogs} from '../services/blogsService'
import { useQuery } from '@tanstack/react-query';
import { BlogResponse} from '../models/blogModel'
import{Box, CircularProgress}  from "@mui/material"

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Criminal Law', 'Corporate Law', 'Family Law', 'Real Estate', 'Personal Injury'];
 
  const {
    data: blogPosts,
    isLoading,
    error,
  } = useQuery<BlogResponse, Error>({
    queryKey: ["blogs"],
    queryFn: getAllBlogs,
  });

  if (isLoading) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
          <div className="flex flex-col items-center space-y-3">
            <CircularProgress color="primary" size={48} thickness={4} />
            <p className="text-gray-600 font-medium">Loading lawyers...</p>
          </div>
        </div>
      );
    }
  
    if (error) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
          <p className="text-red-600 font-medium">
            Failed to load lawyers. Please try again later.
          </p>
        </div>
      );
    }
  const filteredPosts = blogPosts?.data?.data?.filter(post => {
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
          {filteredPosts?.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src={post.image || "https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=800"}
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
                  <Link to={`/blog-detail/${post.id}`}>{post.title}</Link>
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
                  <span className="text-blue-600 font-medium">{post.read_time}</span>
                </div>
                
                <Link to={`/blog-detail/${post.id}`} className="flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts?.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;