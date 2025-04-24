
import React, { useState } from 'react';
import { Bell, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import DashboardHeader from '@/components/DashboardHeader';
import OpportunityCard from '@/components/OpportunityCard';
import { useToast } from '@/components/ui/use-toast';

// Mock data
const opportunities = {
  hackathons: [
    {
      id: 1,
      title: 'AI Model Optimization Challenge',
      description: 'Participate in a hackathon focused on optimizing AI models',
      deadline: '5 days',
      type: 'hackathon' as const,
    },
    {
      id: 2,
      title: 'Sustainable Technology Hackathon',
      description: 'Create innovative solutions for environmental challenges',
      deadline: '2 weeks',
      type: 'hackathon' as const,
    }
  ],
  jobs: [
    {
      id: 3,
      title: 'Software Engineer',
      description: 'Entry-level software engineering position at tech company',
      deadline: 'Ongoing',
      type: 'job' as const,
      extraInfo: 'Full-time'
    },
    {
      id: 4,
      title: 'UI/UX Designer',
      description: 'Design user interfaces for web and mobile applications',
      deadline: '1 week',
      type: 'job' as const,
      extraInfo: 'Remote'
    }
  ],
  internships: [
    {
      id: 5,
      title: 'Data Science Internship',
      description: 'Internship opportunity in data science and machine learning',
      deadline: '7 days',
      type: 'internship' as const,
      extraInfo: '3 months'
    },
    {
      id: 6,
      title: 'Frontend Development Intern',
      description: 'Work on real projects using React, Vue, or Angular',
      deadline: '3 days',
      type: 'internship' as const,
      extraInfo: '6 months'
    }
  ],
  events: [
    {
      id: 7,
      title: 'Cloud Computing Workshop',
      description: 'Attend a workshop on cloud computing technologies',
      deadline: 'May 5, 2024',
      type: 'event' as const
    },
    {
      id: 8,
      title: 'Career Fair Spring 2024',
      description: 'Meet recruiters from top tech companies',
      deadline: 'Apr 30, 2024',
      type: 'event' as const
    }
  ],
};

const upcomingDeadlines = [
  {
    id: 1,
    title: 'Tech Innovation Challenge',
    deadline: 'April 26, 2024'
  },
  {
    id: 2,
    title: 'Cybersecurity Analyst',
    deadline: 'April 26, 2024'
  },
  {
    id: 3,
    title: 'Web Development Internship',
    deadline: 'April 27, 2024'
  }
];

const applicationStats = {
  applied: 4,
  inReview: 2,
  shortlisted: 1,
  rejected: 1
};

const StudentDashboard = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('hackathons');
  const [emailNotifications, setEmailNotifications] = useState(true);
  
  const handleApply = () => {
    toast({
      title: "Application Submitted",
      description: "Your application has been received successfully!",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <DashboardHeader role="student" />
      
      <main className="flex-grow p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2">
              <div className="mb-8">
                <h1 className="text-4xl font-bold mb-2">Welcome, John 👋</h1>
                <p className="text-gray-500">April 24, 2024</p>
              </div>
              
              <Tabs defaultValue="hackathons" className="mb-8" onValueChange={setActiveTab}>
                <TabsList className="grid grid-cols-4">
                  <TabsTrigger value="hackathons">Hackathons</TabsTrigger>
                  <TabsTrigger value="jobs">Jobs</TabsTrigger>
                  <TabsTrigger value="internships">Internships</TabsTrigger>
                  <TabsTrigger value="events">Events</TabsTrigger>
                </TabsList>
                
                <TabsContent value="hackathons" className="mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {opportunities.hackathons.map((item) => (
                      <OpportunityCard
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        deadline={item.deadline}
                        type={item.type}
                        onApply={handleApply}
                      />
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="jobs" className="mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {opportunities.jobs.map((item) => (
                      <OpportunityCard
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        deadline={item.deadline}
                        type={item.type}
                        extraInfo={item.extraInfo}
                        onApply={handleApply}
                      />
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="internships" className="mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {opportunities.internships.map((item) => (
                      <OpportunityCard
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        deadline={item.deadline}
                        type={item.type}
                        extraInfo={item.extraInfo}
                        onApply={handleApply}
                      />
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="events" className="mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {opportunities.events.map((item) => (
                      <OpportunityCard
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        deadline={item.deadline}
                        type={item.type}
                        onApply={handleApply}
                      />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
              
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    Application Tracker
                    <span className="text-sm font-normal text-gray-500 ml-auto">
                      {applicationStats.applied} total applications
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-md">
                      <div className="text-2xl font-bold text-opportunex-blue">{applicationStats.applied}</div>
                      <div className="text-sm text-gray-500">Applied</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-md">
                      <div className="text-2xl font-bold text-amber-500">{applicationStats.inReview}</div>
                      <div className="text-sm text-gray-500">In Review</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-md">
                      <div className="text-2xl font-bold text-green-500">{applicationStats.shortlisted}</div>
                      <div className="text-sm text-gray-500">Shortlisted</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-md">
                      <div className="text-2xl font-bold text-red-500">{applicationStats.rejected}</div>
                      <div className="text-sm text-gray-500">Rejected</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Sidebar */}
            <div>
              <Card className="mb-8">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-xl">AI Chatbot</CardTitle>
                  <Button variant="ghost" size="icon">
                    <MessageSquare size={18} />
                  </Button>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 mb-4">Suggesting personalized opportunities</p>
                  <Button className="w-full">Ask a Question</Button>
                </CardContent>
              </Card>
              
              <Card className="mb-8">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-xl">Upcoming Deadlines</CardTitle>
                  <Button variant="ghost" size="icon">
                    <Bell size={18} />
                  </Button>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {upcomingDeadlines.map((item) => (
                      <li key={item.id} className="flex justify-between items-center pb-3 border-b last:border-none last:pb-0">
                        <div>
                          <p className="font-medium">{item.title}</p>
                          <p className="text-sm text-gray-500">{item.deadline}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-xl">Discussion Forum</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 mb-4">Ask questions, join team, share tips</p>
                  <Button className="w-full">Start a discussion</Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Notification Settings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <Label htmlFor="email-notifications">Email</Label>
                    <Switch 
                      id="email-notifications" 
                      checked={emailNotifications} 
                      onCheckedChange={setEmailNotifications} 
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;
