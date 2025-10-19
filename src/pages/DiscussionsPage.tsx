import React, { useState } from 'react';
import { MessageCircle, User, Clock, ArrowUp, ArrowDown, Plus, Search, Filter } from 'lucide-react';

const DiscussionsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Criminal Law', 'Corporate Law', 'Family Law', 'Real Estate', 'Personal Injury', 'General'];

  const discussions = [
    {
      id: 1,
      title: "What are my rights during a police interrogation?",
      author: "Anonymous User",
      category: "Criminal Law",
      replies: 8,
      views: 156,
      votes: 15,
      timeAgo: "2 hours ago",
      excerpt: "I was recently questioned by police and I'm wondering what my constitutional rights are during an interrogation. Should I have asked for a lawyer immediately?",
      isAnswered: true,
      tags: ["rights", "interrogation", "criminal-defense"]
    },
    {
      id: 2,
      title: "LLC vs Corporation: Which is better for my startup?",
      author: "StartupFounder2024",
      category: "Corporate Law",
      replies: 12,
      views: 289,
      votes: 23,
      timeAgo: "4 hours ago",
      excerpt: "I'm starting a tech company and trying to decide between forming an LLC or a Corporation. What are the main differences in terms of taxes and liability?",
      isAnswered: true,
      tags: ["business-formation", "llc", "corporation", "startup"]
    },
    {
      id: 3,
      title: "Child custody modification during pandemic",
      author: "ConcernedParent",
      category: "Family Law",
      replies: 6,
      views: 203,
      votes: 18,
      timeAgo: "6 hours ago",
      excerpt: "Due to COVID-19, I need to modify my child custody arrangement. What's the legal process and what factors will the court consider?",
      isAnswered: false,
      tags: ["custody", "modification", "covid", "family-court"]
    },
    {
      id: 4,
      title: "Landlord won't return security deposit - what can I do?",
      author: "TenantInNeed",
      category: "Real Estate",
      replies: 15,
      views: 445,
      votes: 31,
      timeAgo: "8 hours ago",
      excerpt: "I moved out of my apartment 3 weeks ago and my landlord is refusing to return my security deposit, claiming damages that weren't there. What are my legal options?",
      isAnswered: true,
      tags: ["security-deposit", "tenant-rights", "landlord-dispute"]
    },
    {
      id: 5,
      title: "Slip and fall at grocery store - do I have a case?",
      author: "InjuredShopper",
      category: "Personal Injury",
      replies: 9,
      views: 178,
      votes: 12,
      timeAgo: "12 hours ago",
      excerpt: "I slipped on a wet floor at a grocery store that wasn't properly marked. I have medical bills and lost wages. Is this a viable personal injury case?",
      isAnswered: false,
      tags: ["slip-and-fall", "premises-liability", "personal-injury", "negligence"]
    },
    {
      id: 6,
      title: "Can I trademark my business name?",
      author: "SmallBizOwner",
      category: "Corporate Law",
      replies: 4,
      views: 92,
      votes: 8,
      timeAgo: "1 day ago",
      excerpt: "I've been using my business name for 2 years locally. Now I want to expand nationally. How do I check if I can trademark it and what's the process?",
      isAnswered: false,
      tags: ["trademark", "intellectual-property", "business-name"]
    }
  ];

  const filteredDiscussions = discussions.filter(discussion => {
    const matchesSearch = discussion.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         discussion.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || discussion.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Legal Discussions</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ask questions, share experiences, and get insights from the legal community
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
                placeholder="Search discussions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="flex items-center gap-4">
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

              {/* New Discussion Button */}
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center">
                <Plus className="h-4 w-4 mr-2" />
                New Discussion
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Discussions List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-4">
          {filteredDiscussions.map((discussion) => (
            <div key={discussion.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="flex items-start space-x-4">
                {/* Vote Section */}
                <div className="flex flex-col items-center space-y-2 min-w-[60px]">
                  <button className="text-gray-400 hover:text-blue-600 transition-colors">
                    <ArrowUp className="h-5 w-5" />
                  </button>
                  <span className="font-semibold text-gray-700">{discussion.votes}</span>
                  <button className="text-gray-400 hover:text-red-600 transition-colors">
                    <ArrowDown className="h-5 w-5" />
                  </button>
                </div>

                {/* Content Section */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 cursor-pointer">
                        {discussion.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                          {discussion.category}
                        </span>
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {discussion.author}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {discussion.timeAgo}
                        </div>
                        {discussion.isAnswered && (
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                            Answered
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-3">{discussion.excerpt}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {discussion.tags.map((tag, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <div className="flex items-center">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      {discussion.replies} replies
                    </div>
                    <div>
                      {discussion.views} views
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredDiscussions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No discussions found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiscussionsPage;