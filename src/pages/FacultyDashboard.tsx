
import React, { useState } from 'react';
import { BarChart2, Plus, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import DashboardHeader from '@/components/DashboardHeader';
import OpportunityCard from '@/components/OpportunityCard';
import { useToast } from '@/components/ui/use-toast';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

// Mock data
const postedOpportunities = {
  hackathons: [
    {
      id: 1,
      title: 'AI Model Optimization Challenge',
      description: 'Participate in a hackathon focused on optimizing AI models',
      deadline: '5 days',
      type: 'hackathon' as const,
      applicants: 12
    },
    {
      id: 2,
      title: 'Sustainable Technology Hackathon',
      description: 'Create innovative solutions for environmental challenges',
      deadline: '2 weeks',
      type: 'hackathon' as const,
      applicants: 8
    }
  ],
  jobs: [
    {
      id: 3,
      title: 'Software Engineer',
      description: 'Entry-level software engineering position at tech company',
      deadline: 'Ongoing',
      type: 'job' as const,
      extraInfo: 'Full-time',
      applicants: 15
    }
  ],
  events: [
    {
      id: 4,
      title: 'Cloud Computing Workshop',
      description: 'Attend a workshop on cloud computing technologies',
      deadline: 'May 5, 2024',
      type: 'event' as const,
      applicants: 23
    }
  ],
};

const analyticsData = {
  totalApplications: 58,
  totalOpportunities: 4,
  recentApplications: [
    { id: 1, name: 'Alice Johnson', opportunity: 'AI Model Optimization Challenge', date: '23 Apr 2024' },
    { id: 2, name: 'Bob Smith', opportunity: 'Software Engineer', date: '22 Apr 2024' },
    { id: 3, name: 'Charlie Davis', opportunity: 'Cloud Computing Workshop', date: '21 Apr 2024' },
  ]
};

const FacultyDashboard = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('hackathons');
  const [open, setOpen] = useState(false);
  const [newOpportunity, setNewOpportunity] = useState({
    title: '',
    description: '',
    type: 'hackathon',
    deadline: '',
    extraInfo: ''
  });
  
  const handleViewApplicants = () => {
    toast({
      title: "Viewing Applicants",
      description: "Opening applicant details",
    });
  };
  
  const handleCreateOpportunity = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Opportunity Created",
      description: `Your ${newOpportunity.type} has been published successfully!`,
    });
    
    setOpen(false);
    setNewOpportunity({
      title: '',
      description: '',
      type: 'hackathon',
      deadline: '',
      extraInfo: ''
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <DashboardHeader role="faculty" />
      
      <main className="flex-grow p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h1 className="text-4xl font-bold mb-2">Welcome, Dr. Smith 👋</h1>
                  <p className="text-gray-500">April 24, 2024</p>
                </div>
                
                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-opportunex-blue hover:bg-opportunex-blue-dark">
                      <Plus size={18} className="mr-2" /> New Listing
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                      <DialogTitle>Create New Opportunity</DialogTitle>
                      <DialogDescription>
                        Fill in the details to publish a new opportunity
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleCreateOpportunity} className="space-y-4 mt-4">
                      <div className="space-y-2">
                        <Label htmlFor="title">Title</Label>
                        <Input 
                          id="title" 
                          value={newOpportunity.title}
                          onChange={(e) => setNewOpportunity({...newOpportunity, title: e.target.value})}
                          placeholder="e.g., Web Development Hackathon" 
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="type">Type</Label>
                        <Select 
                          value={newOpportunity.type} 
                          onValueChange={(value) => setNewOpportunity({...newOpportunity, type: value})}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="hackathon">Hackathon</SelectItem>
                            <SelectItem value="job">Job</SelectItem>
                            <SelectItem value="internship">Internship</SelectItem>
                            <SelectItem value="event">Event</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea 
                          id="description" 
                          value={newOpportunity.description}
                          onChange={(e) => setNewOpportunity({...newOpportunity, description: e.target.value})}
                          placeholder="Describe the opportunity..." 
                          rows={4}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="deadline">Deadline</Label>
                        <Input 
                          id="deadline" 
                          type="date"
                          value={newOpportunity.deadline}
                          onChange={(e) => setNewOpportunity({...newOpportunity, deadline: e.target.value})}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="extraInfo">Additional Information (Optional)</Label>
                        <Input 
                          id="extraInfo" 
                          value={newOpportunity.extraInfo}
                          onChange={(e) => setNewOpportunity({...newOpportunity, extraInfo: e.target.value})}
                          placeholder="e.g., Remote, Full-time, etc." 
                        />
                      </div>
                      
                      <div className="flex justify-end gap-3 mt-6">
                        <Button variant="outline" type="button" onClick={() => setOpen(false)}>
                          Cancel
                        </Button>
                        <Button className="bg-opportunex-blue hover:bg-opportunex-blue-dark" type="submit">
                          Publish
                        </Button>
                      </div>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
              
              <Tabs defaultValue="hackathons" className="mb-8" onValueChange={setActiveTab}>
                <TabsList className="grid grid-cols-3">
                  <TabsTrigger value="hackathons">Hackathons</TabsTrigger>
                  <TabsTrigger value="jobs">Jobs</TabsTrigger>
                  <TabsTrigger value="events">Events</TabsTrigger>
                </TabsList>
                
                <TabsContent value="hackathons" className="mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {postedOpportunities.hackathons.map((item) => (
                      <OpportunityCard
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        deadline={item.deadline}
                        type={item.type}
                        extraInfo={`${item.applicants} applicants`}
                        onApply={handleViewApplicants}
                      />
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="jobs" className="mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {postedOpportunities.jobs.map((item) => (
                      <OpportunityCard
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        deadline={item.deadline}
                        type={item.type}
                        extraInfo={`${item.extraInfo} • ${item.applicants} applicants`}
                        onApply={handleViewApplicants}
                      />
                    ))}
                    {postedOpportunities.jobs.length === 0 && (
                      <div className="col-span-2 text-center p-12 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                        <p className="text-gray-500">No jobs posted yet.</p>
                        <Button className="mt-4" onClick={() => setOpen(true)}>
                          <Plus size={18} className="mr-2" /> Create Job Listing
                        </Button>
                      </div>
                    )}
                  </div>
                </TabsContent>
                
                <TabsContent value="events" className="mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {postedOpportunities.events.map((item) => (
                      <OpportunityCard
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        deadline={item.deadline}
                        type={item.type}
                        extraInfo={`${item.applicants} participants`}
                        onApply={handleViewApplicants}
                      />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Sidebar */}
            <div>
              <Card className="mb-8">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-xl">Analytics</CardTitle>
                  <BarChart2 size={18} />
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-md">
                      <div className="text-2xl font-bold text-opportunex-blue">
                        {analyticsData.totalApplications}
                      </div>
                      <div className="text-sm text-gray-500">Total Applications</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-md">
                      <div className="text-2xl font-bold text-opportunex-blue">
                        {analyticsData.totalOpportunities}
                      </div>
                      <div className="text-sm text-gray-500">Active Listings</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="mb-8">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-xl">Recent Applications</CardTitle>
                  <Users size={18} />
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {analyticsData.recentApplications.map((item) => (
                      <li key={item.id} className="pb-3 border-b last:border-none last:pb-0">
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-500">{item.opportunity}</p>
                        <p className="text-xs text-gray-400">{item.date}</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Discussion Forum</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 mb-4">Moderate topics, post announcements</p>
                  <Button className="w-full">Manage Forum</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FacultyDashboard;
