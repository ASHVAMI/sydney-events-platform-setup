export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  image_url: string;
  ticket_url: string;
  price: string;
  category: string;
  capacity?: string;
  tags?: string;
}

export interface EmailSignup {
  id: string;
  email: string;
  event_id: string;
  created_at: string;
}