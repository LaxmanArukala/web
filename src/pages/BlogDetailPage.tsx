import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUp,
  ArrowDown,
  MessageCircle,
  User,
  Clock,
  Heart,
  Reply,
  Flag,
  Share2,
  Bookmark,
  Award,
} from "lucide-react";
import { BlogResponse, BlogResponseByID } from "../models/blogModel";
import { useQuery } from "@tanstack/react-query";
import { getBlogById } from "../services/blogsService";
import { Box, CircularProgress } from "@mui/material";

const BlogDetailsPage = () => {
  const { id } = useParams();

  const {
    data: blogPost,
    isLoading,
    error,
  } = useQuery<BlogResponseByID, Error>({
    queryKey: ["blogById", id], // ✅ include id in query key
    queryFn: () => getBlogById(Number(id)), // ✅ pass a function, not its result
    enabled: !!id, // ✅ optional: only run when id is defined
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

  // Mock discussion data
  const discussion = {
    id: 1,
    title: "What are my rights during a police interrogation?",
    author: "Anonymous User",
    authorType: "Member",
    category: "Criminal Law",
    content: `I was recently questioned by police about an incident in my neighborhood. They didn't arrest me, but they asked me to come to the station for questioning. I went voluntarily, but during the questioning, I started to feel uncomfortable with some of their questions.

I'm wondering:
1. What are my constitutional rights during police questioning?
2. Should I have asked for a lawyer immediately?
3. Can I leave if I'm not under arrest?
4. What should I do if this happens again?

I've heard about Miranda rights, but I'm not sure when they apply. The officers were polite, but some questions seemed designed to trip me up. I didn't admit to anything, but I'm worried I might have said something that could be misinterpreted.

Any advice would be greatly appreciated. I want to be prepared if this situation arises again.`,
    timeAgo: "2 hours ago",
    views: 156,
    votes: 15,
    replies: 8,
    tags: ["rights", "interrogation", "criminal-defense", "miranda-rights"],
    isAnswered: true,
    isSolved: true,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/blog"
            className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Blogs
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Discussion */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <div className="flex items-start space-x-6">
            {/* Content */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {blogPost?.data?.data?.category}
                  </span>
                  {/* {discussion.isSolved && (
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      ✓ Solved
                    </span>
                  )} */}
                </div>
                <div className="flex items-center space-x-4">
                  <button className="text-gray-500 hover:text-blue-600 transition-colors">
                    <Bookmark className="h-5 w-5" />
                  </button>
                  <button className="text-gray-500 hover:text-blue-600 transition-colors">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                {blogPost?.data?.data?.title}
              </h1>

              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  {blogPost?.data?.data?.author}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {new Date(
                    blogPost?.data?.data?.date ?? ""
                  ).toLocaleDateString()}
                </div>
                <div>{discussion.views} views</div>
                {/* <div className="flex items-center">
                  <MessageCircle className="h-4 w-4 mr-1" />
                  {discussion.replies} replies
                </div> */}
              </div>

              <div className="prose max-w-none text-gray-700 mb-6">
                {/* {discussion.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))} */}
                <p className="mb-3">{blogPost?.data?.data?.description}</p>
                <p>{blogPost?.data?.data?.excerpt}</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {discussion.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
