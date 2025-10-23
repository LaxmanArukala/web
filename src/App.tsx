import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import LawyersPage from './pages/LawyersPage';
import LawyerDetailsPage from './pages/LawyerDetailsPage';
import DiscussionsPage from './pages/DiscussionsPage';
import DiscussionDetailsPage from './pages/DiscussionDetailsPage';
import ContactPage from './pages/ContactPage';
import BlogDetailsPage from './pages/BlogDetailPage';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";



export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 1,
      gcTime: 1000 * 60 * 10,
      retry: 3,
    },
    mutations: {
      retry: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog-detail/:id" element={<BlogDetailsPage />} />
            <Route path="/lawyers" element={<LawyersPage />} />
            <Route path="/lawyers/:id" element={<LawyerDetailsPage />} />
            <Route path="/discussions" element={<DiscussionsPage />} />
            <Route path="/discussions/:id" element={<DiscussionDetailsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </QueryClientProvider>
  );
}

export default App;