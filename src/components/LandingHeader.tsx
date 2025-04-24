
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

const LandingHeader = () => {
  return (
    <header className="w-full bg-white py-4 px-6 md:px-8 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Logo />
        
        <div className="flex items-center gap-4">
          <Link to="/login">
            <Button variant="outline">Sign In</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default LandingHeader;
