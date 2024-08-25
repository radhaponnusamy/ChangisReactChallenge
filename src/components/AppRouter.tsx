import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './NavBar';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import ContactUs from './ContactUs';
import ImageGallery from './ImageGallery';
import NotFound from './NotFound';
import ProtectedRoute from './ProtectedRoute';
import Login from './Login'; 
import Logout from './Logout'; 
import { Role } from '../types/Role'; 

interface AppRouterProps {
  images: any[];
  searchTerm: string;
  sortOrder: string;
}

const AppRouter: React.FC<AppRouterProps> = ({ images, searchTerm, sortOrder }) => {
  // Replace with actual logic for authentication and role retrieval
  //HardCoded
  const isAuthenticated = true; // Example: check if user is authenticated
  const userRole: Role = 'admin'; // Example: retrieve the user's role

  return (
    <div className="app-container">
      <NavBar />
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} /> {/* Default landing page set to login */}
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route
            path="/about"
            element={
              <ProtectedRoute
                element={<About />}
                requiredRole="admin" // Role required to access About page
              />
            }
          />
          <Route
            path="/contact"
            element={
              <ProtectedRoute
                element={<ContactUs />}
                requiredRole="admin" // Role required to access ContactUs page
              />
            }
          />
          <Route
            path="/image-gallery"
            element={
              <ProtectedRoute
                element={
                  <ImageGallery
                    images={images}
                    searchTerm={searchTerm}
                    sortOrder={sortOrder}
                  />
                }
                requiredRole={['guest', 'admin']} // Roles required to access ImageGallery
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default AppRouter;
