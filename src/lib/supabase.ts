import { createClient } from '@supabase/supabase-js';
import type { Event, EmailSignup } from '../types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

export async function getEvents() {
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .order('date', { ascending: true });
    
  if (error) throw error;
  return data as Event[];
}

export async function saveEmailSignup(email: string, eventId: string) {
  const { error } = await supabase
    .from('email_signups')
    .insert([{ email, event_id: eventId }]);
    
  if (error) throw error;
}