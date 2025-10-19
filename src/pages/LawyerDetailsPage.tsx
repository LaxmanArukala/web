import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Star, 
  MapPin, 
  Clock, 
  Award, 
  Calendar, 
  Phone, 
  Mail, 
  CheckCircle, 
  Users, 
  BookOpen,
  ArrowLeft,
  MessageCircle,
  ThumbsUp,
  Shield,
  Globe
} from 'lucide-react';

const LawyerDetailsPage = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [showBookingModal, setShowBookingModal] = useState(false);

  // Mock lawyer data - in real app, fetch based on ID
  const lawyer = {
    id: 1,
    name: "Sarah Johnson",
    specialty: "Criminal Law",
    location: "New York",
    rating: 4.9,
    reviews: 127,
    experience: 15,
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800",
    bio: "Sarah Johnson is a highly experienced criminal defense attorney with over 15 years of practice. She specializes in white-collar crimes, DUI defense, and federal criminal cases. Sarah is known for her aggressive defense strategies and has successfully defended clients in high-profile cases.",
    hourlyRate: 450,
    languages: ["English", "Spanish"],
    education: "Harvard Law School, J.D. (2008)",
    barAdmissions: ["New York State Bar", "Federal District Court"],
    achievements: [
      "Top 100 Criminal Defense Attorneys - National Trial Lawyers",
      "ABA Criminal Justice Section Recognition",
      "Super Lawyers Rising Star (2015-2020)",
      "Martindale-Hubbell AV Preeminent Rating"
    ],
    practiceAreas: [
      "White Collar Crimes",
      "DUI/DWI Defense",
      "Federal Criminal Defense",
      "Drug Crimes",
      "Assault & Battery",
      "Domestic Violence"
    ],
    phone: "+1 (555) 123-4567",
    email: "sarah.johnson@lawfirm.com",
    website: "www.sarahjohnsonlaw.com",
    availability: "Available for consultations Mon-Fri 9AM-6PM EST",
    successRate: "94%",
    casesWon: 156,
    totalCases: 166
  };

  const reviews = [
    {
      id: 1,
      author: "Michael R.",
      rating: 5,
      date: "2024-01-10",
      title: "Excellent representation",
      content: "Sarah provided exceptional legal representation for my case. Her attention to detail and aggressive defense strategy resulted in all charges being dropped. Highly recommended!",
      helpful: 12
    },
    {
      id: 2,
      author: "Jennifer L.",
      rating: 5,
      date: "2024-01-05",
      title: "Professional and knowledgeable",
      content: "Very professional and knowledgeable attorney. She kept me informed throughout the entire process and achieved a better outcome than I expected.",
      helpful: 8
    },
    {
      id: 3,
      author: "David K.",
      rating: 4,
      date: "2023-12-28",
      title: "Great communication",
      content: "Sarah was always available to answer my questions and explained complex legal matters in terms I could understand. Very satisfied with the service.",
      helpful: 6
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'experience', label: 'Experience' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            to="/lawyers" 
            className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Lawyers
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Lawyer Header */}
            <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
              <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                <img
                  src={lawyer.image}
                  alt={lawyer.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto md:mx-0"
                />
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{lawyer.name}</h1>
                  <p className="text-xl text-blue-600 font-medium mb-3">{lawyer.specialty}</p>
                  
                  <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {lawyer.location}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {lawyer.experience} years experience
                    </div>
                    <div className="flex items-center">
                      <Globe className="h-4 w-4 mr-1" />
                      {lawyer.languages.join(', ')}
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mb-4">
                    <div className="flex items-center">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-5 w-5 ${i < Math.floor(lawyer.rating) ? 'text-amber-400 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <span className="ml-2 font-medium">{lawyer.rating}</span>
                      <span className="text-gray-500 ml-1">({lawyer.reviews} reviews)</span>
                    </div>
                    <div className="text-2xl font-bold text-blue-600">
                      ${lawyer.hourlyRate}/hour
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-center md:justify-start gap-3">
                    <button 
                      onClick={() => setShowBookingModal(true)}
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center"
                    >
                      <Calendar className="h-5 w-5 mr-2" />
                      Book Consultation
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center">
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-xl shadow-sm mb-8">
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8 px-8">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                        activeTab === tab.id
                          ? 'border-blue-500 text-blue-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="p-8">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">About</h3>
                      <p className="text-gray-600 leading-relaxed">{lawyer.bio}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Practice Areas</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {lawyer.practiceAreas.map((area, index) => (
                          <div key={index} className="flex items-center text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            {area}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Education & Bar Admissions</h3>
                      <div className="space-y-2">
                        <div className="flex items-center text-gray-600">
                          <Award className="h-4 w-4 text-blue-500 mr-2" />
                          {lawyer.education}
                        </div>
                        {lawyer.barAdmissions.map((bar, index) => (
                          <div key={index} className="flex items-center text-gray-600">
                            <Shield className="h-4 w-4 text-green-500 mr-2" />
                            {bar}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <div className="flex items-center mb-1">
                              <span className="font-medium text-gray-900">{review.author}</span>
                              <div className="flex ml-3">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    className={`h-4 w-4 ${i < review.rating ? 'text-amber-400 fill-current' : 'text-gray-300'}`} 
                                  />
                                ))}
                              </div>
                            </div>
                            <p className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString()}</p>
                          </div>
                        </div>
                        <h4 className="font-medium text-gray-900 mb-2">{review.title}</h4>
                        <p className="text-gray-600 mb-3">{review.content}</p>
                        <button className="flex items-center text-sm text-gray-500 hover:text-gray-700 transition-colors">
                          <ThumbsUp className="h-4 w-4 mr-1" />
                          Helpful ({review.helpful})
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'experience' && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">{lawyer.successRate}</div>
                        <div className="text-sm text-gray-600">Success Rate</div>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">{lawyer.casesWon}</div>
                        <div className="text-sm text-gray-600">Cases Won</div>
                      </div>
                      <div className="text-center p-4 bg-amber-50 rounded-lg">
                        <div className="text-2xl font-bold text-amber-600">{lawyer.totalCases}</div>
                        <div className="text-sm text-gray-600">Total Cases</div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Achievements & Recognition</h3>
                      <div className="space-y-2">
                        {lawyer.achievements.map((achievement, index) => (
                          <div key={index} className="flex items-center text-gray-600">
                            <Award className="h-4 w-4 text-amber-500 mr-2" />
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <Phone className="h-5 w-5 mr-3 text-blue-500" />
                  <span>{lawyer.phone}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="h-5 w-5 mr-3 text-blue-500" />
                  <span>{lawyer.email}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Globe className="h-5 w-5 mr-3 text-blue-500" />
                  <span>{lawyer.website}</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Availability</h3>
              <p className="text-gray-600 mb-4">{lawyer.availability}</p>
              <button 
                onClick={() => setShowBookingModal(true)}
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Book Consultation</h3>
            <p className="text-gray-600 mb-6">
              Schedule a consultation with {lawyer.name} to discuss your legal matter.
            </p>
            <div className="flex gap-3">
              <button 
                onClick={() => setShowBookingModal(false)}
                className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LawyerDetailsPage;