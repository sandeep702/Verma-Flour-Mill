
import { useMutation } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export const useContactForm = () => {
  return useMutation({
    mutationFn: async (data: ContactFormData) => {
      console.log('Submitting contact form:', data);
      const { error } = await supabase
        .from('contact_messages')
        .insert([data]);
      
      if (error) {
        console.error('Error submitting contact form:', error);
        throw error;
      }
      
      console.log('Contact form submitted successfully');
    },
    onError: (error) => {
      console.error('Contact form submission failed:', error);
    },
  });
};
