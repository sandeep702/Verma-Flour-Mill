// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://kuokonzfqmqymzrvzqvp.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt1b2tvbnpmcW1xeW16cnZ6cXZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkyODU0MjEsImV4cCI6MjA2NDg2MTQyMX0.Un9hU3A7i5yCqaamTCxiRYYso9uNkXtptTybTkGExrA";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);