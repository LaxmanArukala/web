import React from 'react';
import { ArrowRight, Users, BookOpen, MessageCircle, Shield, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Expert Lawyers",
      description: "Connect with qualified legal professionals across various practice areas."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: "Legal Resources",
      description: "Access comprehensive legal articles, guides, and up-to-date legal information."
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-blue-600" />,
      title: "Community Discussion",
      description: "Engage with the legal community and get insights on legal matters."
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Secure Platform",
      description: "Your privacy and confidentiality are our top priorities."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Business Owner",
      content: "LegalHub helped me find the perfect corporate lawyer for my startup. The process was seamless!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Real Estate Investor",
      content: "The legal blog posts are incredibly informative and helped me understand complex real estate laws.",
      rating: 5
    },
    {
      name: "Emily Davis",
      role: "Individual Client",
      content: "Quick response time and professional service. Highly recommend for anyone needing legal advice.",
      rating: 5
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Your Trusted <span className="text-amber-400">Legal</span> Platform
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Connect with expert lawyers, access legal resources, and join discussions in our comprehensive legal platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/lawyers"
                className="bg-amber-500 text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-400 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Find a Lawyer <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/blog"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center justify-center"
              >
                Read Legal Blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose LegalHub?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive legal services and resources to help you navigate complex legal matters with confidence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-lg text-gray-700">Expert Lawyers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
              <div className="text-lg text-gray-700">Cases Resolved</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-lg text-gray-700">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from our satisfied clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Legal Help?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Connect with qualified lawyers today and get the legal assistance you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/lawyers"
              className="bg-amber-500 text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-400 transition-colors flex items-center justify-center"
            >
              <Clock className="mr-2 h-5 w-5" />
              Book Consultation Now
            </Link>
            <Link
              to="/discussions"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-800 transition-colors"
            >
              Join Discussions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;