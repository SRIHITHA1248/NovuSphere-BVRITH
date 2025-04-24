
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, MessageSquare, Bell } from 'lucide-react';
import LandingHeader from '@/components/LandingHeader';
import LandingFooter from '@/components/LandingFooter';
import FeatureCard from '@/components/FeatureCard';

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col">
      <LandingHeader />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-opportunex-blue text-white py-16 px-6 md:py-24">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              NovuSphere: Your Gateway<br />to Emerging Tech<br />Opportunities
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100">
              Centralized Tech Events • AI-Powered Recommendations • Smart Notifications
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-opportunex-blue hover:bg-gray-100" 
                onClick={() => navigate('/login')}
              >
                Sign In
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                onClick={() => navigate('/login')}
              >
                Explore Opportunities
              </Button>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<Calendar />}
                title="Centralized Event & Job Portal"
                description="Find all upcoming hackathons, job openings, and internships in one place"
              />
              <FeatureCard 
                icon={<MessageSquare />}
                title="AI-Powered Recommendations"
                description="Get suggestions tailored to your skills and interests"
              />
              <FeatureCard 
                icon={<Bell />}
                title="Smart Notifications"
                description="Stay updated with timely reminders and approaching deadlines"
              />
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <div className="bg-opportunex-blue-light rounded-full w-16 h-16 flex items-center justify-center text-opportunex-blue text-2xl mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Browse</h3>
                <p className="text-gray-600">Explore a variety of events and job listings</p>
              </div>
              <div>
                <div className="bg-opportunex-blue-light rounded-full w-16 h-16 flex items-center justify-center text-opportunex-blue text-2xl mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Apply</h3>
                <p className="text-gray-600">Register for hackathons or apply for jobs with ease</p>
              </div>
              <div>
                <div className="bg-opportunex-blue-light rounded-full w-16 h-16 flex items-center justify-center text-opportunex-blue text-2xl mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Track</h3>
                <p className="text-gray-600">Monitor your applications and upcoming deadlines</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonial Section */}
        <section className="bg-opportunex-blue text-white py-12 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-xl md:text-2xl font-light mb-4">
              "Thanks to OpportuneX, I found my dream job! The platform made it easy to discover opportunities."
            </blockquote>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-lg mx-auto text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-opportunex-blue hover:bg-opportunex-blue-dark" 
                onClick={() => navigate('/login')}
              >
                Sign In
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <LandingFooter />
    </div>
  );
};

export default Index;
