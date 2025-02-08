import React from 'react';
import { Calendar, MapPin, Clock, DollarSign, Users, Tag, ExternalLink } from 'lucide-react';
import { format } from 'date-fns';
import type { Event } from '../types';

interface EventCardProps {
  event: Event;
  onGetTickets: (event: Event) => void;
}

export function EventCard({ event, onGetTickets }: EventCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative">
        <img 
          src={event.image_url} 
          alt={event.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-indigo-600 text-white text-sm font-medium rounded-full">
            {event.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{event.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
        
        <div className="space-y-3 mb-4">
          <div className="flex items-center text-gray-600">
            <Calendar className="w-4 h-4 mr-2 text-indigo-600" />
            <span>{format(new Date(event.date), 'EEEE, MMMM d, yyyy')}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="w-4 h-4 mr-2 text-indigo-600" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="w-4 h-4 mr-2 text-indigo-600" />
            <span>{event.venue}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <DollarSign className="w-4 h-4 mr-2 text-indigo-600" />
            <span className="font-medium">{event.price}</span>
          </div>
          {event.capacity && (
            <div className="flex items-center text-gray-600">
              <Users className="w-4 h-4 mr-2 text-indigo-600" />
              <span>Capacity: {event.capacity}</span>
            </div>
          )}
          {event.tags && (
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-indigo-600" />
              <div className="flex flex-wrap gap-2">
                {event.tags.split(',').map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                    {tag.trim()}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className="flex gap-3">
          <button
            onClick={() => onGetTickets(event)}
            className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
          >
            GET TICKETS
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}