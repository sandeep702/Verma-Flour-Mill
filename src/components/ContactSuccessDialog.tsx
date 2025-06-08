
import React from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

interface ContactSuccessDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactSuccessDialog = ({ open, onOpenChange }: ContactSuccessDialogProps) => {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="max-w-md">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center text-green-600 text-xl">
            ✅ Message Sent Successfully!
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center space-y-2">
            <div className="text-lg">Thank you for contacting us!</div>
            <div className="text-gray-600">
              We have received your message and will get back to you within 24 hours.
            </div>
            <div className="text-sm text-gray-500">
              Our team at Verma Flour Mill values your feedback and inquiries.
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction 
            onClick={() => onOpenChange(false)}
            className="w-full bg-green-600 hover:bg-green-700 text-white"
          >
            Perfect, Thank You! 🙏
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ContactSuccessDialog;
