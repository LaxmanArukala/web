import React, { useState } from "react";
import {
  Search,
  MapPin,
  Star,
  
  Filter,
  Award,
  Clock,
  Phone,
  Eye,
} from "lucide-react";
import { getAllLawyers } from "../services/lawyersService";
import {  LawyerResponse } from "../models/lawyersModel";
import { useQuery } from "@tanstack/react-query";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
const LawyersPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");

  const navigate = useNavigate()
  const specialties = [
    "All",
    "Criminal Law",
    "Corporate Law",
    "Family Law",
    "Real Estate",
    "Personal Injury",
    "Immigration",
  ];
  const locations = [
    "All",
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
  ];

  // ========== Getting Lawyer List ==============
  const {
    data: allLawyers,
    isLoading,
    error,
  } = useQuery<LawyerResponse, Error>({
    queryKey: ["AllLawyers", selectedSpecialty, selectedLocation],
    queryFn: getAllLawyers,
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
  // ========== Getting Lawyer List ==============
  // ========== Filtering Lawyer List ==============
  const filteredLawyers = allLawyers?.data?.data?.filter((lawyer: any) => {
    const specArray = Array.isArray(lawyer?.specilization)
      ? lawyer.specilization
      : lawyer?.specilization
      ? [lawyer.specilization]
      : [];

    const name = lawyer?.name || lawyer?.full_name || ""; // fallback if `name` missing
    const search = searchTerm?.toLowerCase() || "";

    const matchesSearch =
      name.toLowerCase().includes(search) ||
      specArray.some((spec: string) => spec.toLowerCase().includes(search));

    const matchesSpecialty =
      selectedSpecialty === "All" ||
      specArray.some(
        (spec: string) => spec.toLowerCase() === selectedSpecialty.toLowerCase()
      );

    const matchesLocation =
      selectedLocation === "All" ||
      lawyer?.location?.toLowerCase() === selectedLocation.toLowerCase();

    return matchesSearch && matchesSpecialty && matchesLocation;
  });
  // ========== Filtering Lawyer List ==============
  // ========== Navigating to Details ==============
  const navigateToDetails = (item: any) => {
    navigate(`/lawyers/${item.id}`)
  };
  // ========== Navigating to Details ==============
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Find Expert Lawyers
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Connect with qualified legal professionals for online
              consultations and expert advice
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
                  {specialties.map((specialty) => (
                    <option key={specialty} value={specialty}>
                      {specialty}
                    </option>
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
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
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
          {filteredLawyers?.map((lawyer: any) => (
            <div
              key={lawyer.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <img
                    src={lawyer.image || ""}
                    alt={lawyer.first_name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {lawyer.first_name} {lawyer.last_name}
                        </h3>
                        {lawyer.specilization.length > 0 && (
                          <p className="text-blue-600 font-medium">
                            {lawyer.specilization.join(",")}
                          </p>
                        )}
                        <div className="flex items-center text-gray-500 text-sm mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          {lawyer.location}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-amber-400 fill-current" />
                          <span className="ml-1 font-medium">
                            {lawyer.rating}
                          </span>
                          <span className="text-gray-500 text-sm ml-1">
                            ({lawyer.reviews ?? 0})
                          </span>
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
                    {lawyer.qualification}
                  </div>
                  <div className="text-blue-600 font-semibold">
                    ₹{lawyer.pricing}/hour
                  </div>
                </div>

                <div className="mt-4">
                  <div className="text-sm text-gray-600 mb-2">
                    Languages: {lawyer.languages.join(", ")}
                  </div>
                  {/* <div className="text-sm text-gray-600">
                    Achievements: {lawyer.achievements.join(', ')}
                  </div> */}
                </div>
                <div className="mt-4">
                  <div className="text-sm text-blue-600 mb-2">
                    Category: {lawyer.category.join(", ")}
                  </div>
                  {/* <div className="text-sm text-gray-600">
                    Achievements: {lawyer.achievements.join(', ')}
                  </div> */}
                </div>

                <div className="flex gap-3 mt-6">
                  <button
                    className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
                    onClick={() => {
                      navigateToDetails(lawyer);
                    }}
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    View Details about {lawyer.first_name}
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

        {filteredLawyers?.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No lawyers found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LawyersPage;
