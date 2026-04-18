import React from 'react';
import { Link } from 'react-router';
import { FaHome, FaExclamationTriangle } from 'react-icons/fa';

const NotFound = () => {
      return (
            <div className="min-h-screen bg-[#F3F4F6] flex items-center justify-center">
                  <div className="text-center px-6">
                        <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                              <FaExclamationTriangle className="text-4xl text-yellow-500" />
                        </div>
                        <h1 className="text-4xl font-bold text-[#1D2939] mb-4">404</h1>
                        <h2 className="text-xl font-semibold text-gray-600 mb-2">Page Not Found</h2>
                        <p className="text-gray-500 mb-8 max-w-md mx-auto">
                              Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
                        </p>
                        <Link
                              to="/"
                              className="inline-flex items-center gap-2 px-6 py-3 bg-[#234e3f] text-white rounded-lg hover:bg-[#1a3a2f] transition-colors"
                        >
                              <FaHome />
                              <span className="font-medium">Go Home</span>
                        </Link>
                  </div>
            </div>
      );
};

export default NotFound;