import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { User, Mail, Phone, MapPin, LogOut } from "lucide-react";

const UserDashboardPage: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      {/* HEADER SECTION */}
      <div className="max-w-5xl mx-auto mb-10 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Welcome, Laxman 👋</h1>
        <p className="text-gray-600 mt-2">
          Here’s your personalized dashboard overview
        </p>
      </div>

      {/* MAIN DASHBOARD CONTENT */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">
              <User className="text-blue-600" size={40} />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mt-3">
              Laxman Arukala
            </h2>
            <p className="text-gray-500 text-sm">Full Stack Developer</p>

            <div className="w-full mt-4 border-t pt-4 space-y-2 text-gray-600 text-sm">
              <div className="flex items-center justify-center gap-2">
                <Mail size={16} /> <span>laxmanlaw@example.com</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Phone size={16} /> <span>+91 9876543210</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MapPin size={16} /> <span>Bangalore, Karnataka</span>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="mt-5 flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
            >
              <LogOut size={16} /> Logout
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition flex flex-col justify-between">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Account Summary
          </h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li className="flex justify-between">
              <span>Active Sessions:</span>
              <span className="font-medium text-gray-800">3</span>
            </li>
            <li className="flex justify-between">
              <span>Tasks Completed:</span>
              <span className="font-medium text-gray-800">24</span>
            </li>
            <li className="flex justify-between">
              <span>Reviews Submitted:</span>
              <span className="font-medium text-gray-800">8</span>
            </li>
            <li className="flex justify-between">
              <span>Account Type:</span>
              <span className="font-medium text-gray-800">Standard User</span>
            </li>
          </ul>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Recent Activity
          </h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="border-b pb-2">
              ✅ Logged in from Bangalore <span className="text-gray-400">2h ago</span>
            </li>
            <li className="border-b pb-2">
              ✏️ Updated profile information <span className="text-gray-400">5h ago</span>
            </li>
            <li>
              💬 Commented on a discussion <span className="text-gray-400">1 day ago</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-5xl mx-auto mt-10 grid md:grid-cols-2 gap-6">
        {/* Upcoming Events */}
        <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Upcoming Events
          </h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li>📅 Legal Conference 2025 – Nov 12</li>
            <li>🧠 Webinar: Advanced LawTech – Dec 5</li>
            <li>🎯 Goal Review Meeting – Dec 20</li>
          </ul>
        </div>

        {/* Recommendations */}
        <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Recommended for You
          </h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li>📘 “Mastering Legal Research” – Blog</li>
            <li>🎥 “AI in Law Practice” – Video Session</li>
            <li>📰 “Trends in Digital Law 2025” – Article</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardPage;
