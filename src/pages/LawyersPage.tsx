import React, { useState } from 'react';
import { Search, MapPin, Star, Calendar, Filter, Award, Clock, Phone } from 'lucide-react';

const LawyersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');

  const specialties = ['All', 'Criminal Law', 'Corporate Law', 'Family Law', 'Real Estate', 'Personal Injury', 'Immigration'];
  const locations = ['All', 'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia'];

  const lawyers = [
    {
      id: 1,
      name: "Sarah Johnson",
      specialty: "Criminal Law",
      location: "New York",
      rating: 4.9,
      reviews: 127,
      experience: 15,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Specialized in criminal defense with over 15 years of experience. Former prosecutor with extensive trial experience.",
      hourlyRate: 450,
      languages: ["English", "Spanish"],
      education: "Harvard Law School",
      achievements: ["Top 100 Criminal Defense Attorneys", "ABA Recognition"]
    },
    {
      id: 2,
      name: "Michael Chen",
      specialty: "Corporate Law",
      location: "Los Angeles",
      rating: 4.8,
      reviews: 89,
      experience: 12,
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Expert in corporate transactions, mergers & acquisitions, and business formation with Fortune 500 experience.",
      hourlyRate: 525,
      languages: ["English", "Mandarin"],
      education: "Stanford Law School",
      achievements: ["Chambers & Partners Ranked", "Super Lawyers Recognition"]
    },
    {
      id: 3,
      name: "Emily Davis",
      specialty: "Family Law",
      location: "Chicago",
      rating: 4.9,
      reviews: 156,
      experience: 10,
      image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Compassionate family law attorney specializing in divorce, custody, and adoption cases.",
      hourlyRate: 350,
      languages: ["English"],
      education: "University of Chicago Law School",
      achievements: ["Best Family Lawyer Award", "Client Choice Award"]
    },
    {
      id: 4,
      name: "David Wilson",
      specialty: "Real Estate",
      location: "Houston",
      rating: 4.7,
      reviews: 93,
      experience: 18,
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Experienced real estate attorney handling commercial and residential transactions, zoning, and development.",
      hourlyRate: 400,
      languages: ["English"],
      education: "University of Texas Law School",
      achievements: ["Real Estate Attorney of the Year", "Texas Bar Recognition"]
    },
    {
      id: 5,
      name: "Lisa Rodriguez",
      specialty: "Personal Injury",
      location: "Phoenix",
      rating: 4.8,
      reviews: 134,
      experience: 14,
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Dedicated personal injury attorney with a track record of securing substantial settlements for clients.",
      hourlyRate: 375,
      languages: ["English", "Spanish"],
      education: "Arizona State University Law School",
      achievements: ["Million Dollar Advocates Forum", "AVVO Top Rating"]
    },
    {
      id: 6,
      name: "Robert Kim",
      specialty: "Immigration",
      location: "Philadelphia",
      rating: 4.9,
      reviews: 78,
      experience: 11,
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Immigration law expert helping individuals and businesses navigate complex immigration processes.",
      hourlyRate: 325,
      languages: ["English", "Korean", "Spanish"],
      education: "University of Pennsylvania Law School",
      achievements: ["Immigration Law Specialist", "AILA Recognition"]
    }
  ];

  const filteredLawyers = lawyers.filter(lawyer => {
    const matchesSearch = lawyer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lawyer.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === 'All' || lawyer.specialty === selectedSpecialty;
    const matchesLocation = selectedLocation === 'All' || lawyer.location === selectedLocation;
    return matchesSearch && matchesSpecialty && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Expert Lawyers</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Connect with qualified legal professionals for online consultations and expert advice
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search lawyers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-500" />
                <select
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {specialties.map(specialty => (
                    <option key={specialty} value={specialty}>{specialty}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-gray-500" />
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {locations.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lawyers Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredLawyers.map((lawyer) => (
            <div key={lawyer.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <img
                    src={lawyer.image}
                    alt={lawyer.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{lawyer.name}</h3>
                        <p className="text-blue-600 font-medium">{lawyer.specialty}</p>
                        <div className="flex items-center text-gray-500 text-sm mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          {lawyer.location}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-amber-400 fill-current" />
                          <span className="ml-1 font-medium">{lawyer.rating}</span>
                          <span className="text-gray-500 text-sm ml-1">({lawyer.reviews})</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mt-4">{lawyer.bio}</p>

                <div className="flex flex-wrap gap-4 mt-4 text-sm">
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-1" />
                    {lawyer.experience} years exp.
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Award className="h-4 w-4 mr-1" />
                    {lawyer.education}
                  </div>
                  <div className="text-blue-600 font-semibold">
                    ${lawyer.hourlyRate}/hour
                  </div>
                </div>

                <div className="mt-4">
                  <div className="text-sm text-gray-600 mb-2">Languages: {lawyer.languages.join(', ')}</div>
                  <div className="text-sm text-gray-600">
                    Achievements: {lawyer.achievements.join(', ')}
                  </div>
                </div>

                <div className="flex gap-3 mt-6">
                  <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Consultation
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    Contact
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredLawyers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No lawyers found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LawyersPage;