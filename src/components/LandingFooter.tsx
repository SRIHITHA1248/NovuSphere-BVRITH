
import React from 'react';
import { Link } from 'react-router-dom';

const LandingFooter = () => {
  return (
    <footer className="w-full bg-white py-6 px-6 md:px-8 border-t">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">
          © 2024 OpportuneX. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <Link to="/privacy" className="text-sm text-gray-600 hover:text-opportunex-blue">
            Privacy
          </Link>
          <Link to="/terms" className="text-sm text-gray-600 hover:text-opportunex-blue">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
