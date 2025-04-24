
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ApplicationModal from './ApplicationModal';

interface OpportunityCardProps {
  title: string;
  description: string;
  deadline?: string;
  type: 'hackathon' | 'job' | 'internship' | 'event';
  extraInfo?: string;
  onApply: () => void;
}

const OpportunityCard = ({ 
  title, 
  description, 
  deadline, 
  type,
  extraInfo,
  onApply 
}: OpportunityCardProps) => {
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  
  const handleApplyClick = () => {
    setShowApplicationModal(true);
  };
  
  const handleModalClose = () => {
    setShowApplicationModal(false);
  };
  
  const handleSubmitApplication = () => {
    onApply();
  };

  return (
    <>
      <Card className="h-full flex flex-col">
        <CardHeader>
          <CardTitle className="text-xl">{title}</CardTitle>
          <div className="text-sm font-medium text-opportunex-blue">
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-gray-600 mb-4">{description}</p>
          {extraInfo && <p className="text-sm text-gray-500">{extraInfo}</p>}
        </CardContent>
        <CardFooter className="flex justify-between items-center border-t pt-4">
          {deadline && (
            <div className="text-sm text-gray-500">
              <span className="font-medium">Deadline:</span> {deadline}
            </div>
          )}
          <Button onClick={handleApplyClick}>Apply Now</Button>
        </CardFooter>
      </Card>
      
      <ApplicationModal
        isOpen={showApplicationModal}
        onClose={handleModalClose}
        opportunityTitle={title}
        onSubmit={handleSubmitApplication}
      />
    </>
  );
};

export default OpportunityCard;
