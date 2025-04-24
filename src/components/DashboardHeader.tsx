
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Bell, User, Search } from 'lucide-react';
import Logo from './Logo';

interface DashboardHeaderProps {
  role: 'student' | 'faculty';
}

const DashboardHeader = ({ role }: DashboardHeaderProps) => {
  return (
    <header className="w-full bg-white py-3 px-6 md:px-8 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Logo />
        
        <div className="relative w-full max-w-md mx-4 hidden md:block">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-opportunex-blue focus:border-transparent" 
            placeholder="Search opportunities..." 
          />
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">3</span>
          </Button>
          
          <Link to={role === 'student' ? '/student/profile' : '/faculty/profile'}>
            <Button variant="ghost" size="icon">
              <User size={20} />
            </Button>
          </Link>
          
          <Link to="/login">
            <Button variant="outline">Logout</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
