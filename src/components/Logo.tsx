
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ size = 'default' }: { size?: 'default' | 'large' }) => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <div className={`rounded-full bg-opportunex-blue flex items-center justify-center ${
        size === 'large' ? 'w-12 h-12' : 'w-10 h-10'
      }`}>
        <span className="text-white font-bold text-xl">N</span>
      </div>
      <span className={`font-bold ${size === 'large' ? 'text-3xl' : 'text-2xl'}`}>
        NovuSphere
      </span>
    </Link>
  );
};

export default Logo;
