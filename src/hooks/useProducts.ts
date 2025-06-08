
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import type { Tables } from '@/integrations/supabase/types';

export type Product = Tables<'products'>;

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      console.log('Fetching products from Supabase...');
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) {
        console.error('Error fetching products:', error);
        throw error;
      }
      
      console.log('Products fetched successfully:', data);
      return data;
    },
  });
};
