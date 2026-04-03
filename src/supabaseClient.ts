import { createClient } from '@supabase/supabase-js';

// Fallback to placeholder strings to prevent crashes if the .env isn't set up yet!
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://xyzcompany.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'public-anon-key';

export const supabase = createClient(supabaseUrl, supabaseKey);
