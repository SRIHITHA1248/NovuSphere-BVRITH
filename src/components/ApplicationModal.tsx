
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  opportunityTitle: string;
  onSubmit: () => void;
}

const ApplicationModal = ({ isOpen, onClose, opportunityTitle, onSubmit }: ApplicationModalProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    profileUrl: '',
    bio: '',
    interest: '',
    agreeToTerms: false,
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData({ ...formData, agreeToTerms: checked });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      // Check file type
      if (file.type !== 'application/pdf') {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF file",
          variant: "destructive",
        });
        return;
      }
      
      // Check file size (max 2MB)
      if (file.size > 2 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Resume must be less than 2MB",
          variant: "destructive",
        });
        return;
      }
      
      setResumeFile(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.phone || !resumeFile) {
      toast({
        title: "Missing information",
        description: "Please fill all required fields and upload your resume",
        variant: "destructive",
      });
      return;
    }
    
    if (!formData.agreeToTerms) {
      toast({
        title: "Terms and conditions",
        description: "Please agree to the terms and conditions",
        variant: "destructive",
      });
      return;
    }
    
    // Submit the application
    onSubmit();
    onClose();
    
    toast({
      title: "Application Submitted",
      description: "Your application has been received successfully!",
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Apply for {opportunityTitle}</DialogTitle>
          <DialogDescription>
            Complete this form to submit your application. Required fields are marked with an asterisk (*).
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name *</Label>
              <Input 
                id="fullName" 
                name="fullName" 
                value={formData.fullName} 
                onChange={handleChange} 
                required 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input 
                id="phone" 
                name="phone" 
                type="tel" 
                value={formData.phone} 
                onChange={handleChange} 
                required 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="profileUrl">LinkedIn/GitHub/Portfolio URL</Label>
              <Input 
                id="profileUrl" 
                name="profileUrl" 
                type="url" 
                value={formData.profileUrl} 
                onChange={handleChange} 
                placeholder="https://..." 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="resume">Upload Resume (PDF, max 2MB) *</Label>
              <Input 
                id="resume" 
                name="resume" 
                type="file" 
                accept="application/pdf" 
                onChange={handleFileChange} 
                required 
              />
              {resumeFile && (
                <p className="text-sm text-green-600">File selected: {resumeFile.name}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="bio">Short Bio (max 300 characters) *</Label>
              <Textarea 
                id="bio" 
                name="bio" 
                value={formData.bio} 
                onChange={handleChange} 
                placeholder="Tell us about yourself..." 
                maxLength={300}
                required 
              />
              <p className="text-xs text-gray-500 text-right">
                {formData.bio.length}/300
              </p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="interest">Why are you interested? (Optional)</Label>
              <Textarea 
                id="interest" 
                name="interest" 
                value={formData.interest} 
                onChange={handleChange} 
                placeholder="Why are you interested in this opportunity?" 
              />
            </div>
            
            <div className="flex items-center space-x-2 pt-2">
              <Checkbox 
                id="agreeToTerms" 
                checked={formData.agreeToTerms} 
                onCheckedChange={handleCheckboxChange} 
              />
              <Label htmlFor="agreeToTerms" className="text-sm">
                I agree to terms and conditions *
              </Label>
            </div>
          </div>
          
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
            <Button type="submit">Submit Application</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ApplicationModal;
