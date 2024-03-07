import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://bftjanmteamurqirncij.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmdGphbm10ZWFtdXJxaXJuY2lqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk3NzM3MTAsImV4cCI6MjAyNTM0OTcxMH0.EprjxmcdbhGKUymE3iKt7HeT3DTMSNE5336o04ZAkmU';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
