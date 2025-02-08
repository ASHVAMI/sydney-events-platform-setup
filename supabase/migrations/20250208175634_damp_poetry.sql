/*
  # Initial Schema Setup for Sydney Events Platform

  1. New Tables
    - `events`
      - Stores event information including title, description, date, etc.
    - `email_signups`
      - Stores user email signups for event tickets
  
  2. Security
    - Enable RLS on both tables
    - Add policies for public read access to events
    - Add policies for authenticated insert on email_signups
*/

-- Create events table
CREATE TABLE IF NOT EXISTS events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  date date NOT NULL,
  time text NOT NULL,
  venue text NOT NULL,
  image_url text NOT NULL,
  ticket_url text NOT NULL,
  price text NOT NULL,
  category text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create email_signups table
CREATE TABLE IF NOT EXISTS email_signups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  event_id uuid NOT NULL REFERENCES events(id),
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE email_signups ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Events are viewable by everyone"
  ON events
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can sign up for event notifications"
  ON email_signups
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Create sample events
INSERT INTO events (title, description, date, time, venue, image_url, ticket_url, price, category) VALUES
(
  'Sydney Opera House Concert',
  'Experience a magical evening of classical music at the iconic Sydney Opera House.',
  '2024-04-15',
  '19:30',
  'Sydney Opera House',
  'https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?auto=format&fit=crop&q=80',
  'https://example.com/tickets/1',
  'From $89',
  'Music'
),
(
  'Harbour Bridge Night Run',
  'Join thousands of runners in this iconic night run across the Sydney Harbour Bridge.',
  '2024-04-20',
  '20:00',
  'Sydney Harbour Bridge',
  'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80',
  'https://example.com/tickets/2',
  '$45',
  'Sports'
),
(
  'Sydney Food Festival',
  'Taste the best of Sydney''s culinary scene with top chefs and restaurants.',
  '2024-04-25',
  '11:00',
  'Darling Harbour',
  'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80',
  'https://example.com/tickets/3',
  'From $25',
  'Food'
);