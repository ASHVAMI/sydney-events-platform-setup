# Sydney Events Platform

A modern, responsive web application for discovering and booking events in Sydney, Australia. Built with React, TypeScript, and Supabase.

![Sydney Events Platform](https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?auto=format&fit=crop&q=80)

## Features

- 🎫 Browse and search Sydney events
- 🔍 Filter events by category
- 📧 Email signup for ticket purchases
- 📱 Responsive design for all devices
- 🎨 Modern UI with smooth animations
- 🔒 Secure data storage with Supabase

## Tech Stack

- **Frontend:**
  - React 18
  - TypeScript
  - Tailwind CSS
  - Lucide React Icons
  - React Hot Toast

- **Backend:**
  - Supabase (Database & Auth)
  - Row Level Security (RLS)

- **Development:**
  - Vite
  - ESLint
  - PostCSS
  - TypeScript ESLint

## Getting Started

1. Clone the repository
2. Install dependencies:
   npm install

3. Set up Supabase:
   - Create a new Supabase project
   - Set environment variables in `.env`:
   
     VITE_SUPABASE_URL=your_supabase_url
     VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   
   - Run the database migrations

4. Start the development server:
   npm run dev

## Database Schema

### Events Table
- `id`: UUID (Primary Key)
- `title`: Text
- `description`: Text
- `date`: Date
- `time`: Text
- `venue`: Text
- `image_url`: Text
- `ticket_url`: Text
- `price`: Text
- `category`: Text
- `capacity`: Text (Optional)
- `tags`: Text (Optional)
- `created_at`: Timestamp
- `updated_at`: Timestamp

### Email Signups Table
- `id`: UUID (Primary Key)
- `email`: Text
- `event_id`: UUID (Foreign Key)
- `created_at`: Timestamp

## Security

- Row Level Security (RLS) enabled
- Public read access for events
- Secure email signup process
- Environment variables for sensitive data

## Deployment

1. Build the project:
   npm run build

2. Deploy to your preferred hosting platform:
   - Netlify

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

MIT License - feel free to use this project for your own purposes.

## Acknowledgments

- [Unsplash](https://unsplash.com) for the beautiful images
- [Lucide](https://lucide.dev) for the icons
- [Tailwind CSS](https://tailwindcss.com) for the styling system
- [Supabase](https://supabase.com) for the backend infrastructure


Developed by Ashvani S !!!!!!