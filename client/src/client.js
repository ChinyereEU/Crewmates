import {createClient} from '@supabase/supabase-js';

const URL = 'https://vmkmdoujlqcirrwztour.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZta21kb3VqbHFjaXJyd3p0b3VyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA3NTAxMzMsImV4cCI6MjA0NjMyNjEzM30.i1jBznpkjjqe4g29gtvjaNUJAwb7VQDv4Rv0J-UGRD0';

export const supabase = createClient(URL, API_KEY);