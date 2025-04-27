const mongoose = require('mongoose');
const Destination = require('../models/destination.model');
const Activity = require('../models/activity.model');

const destinations = [
  {
    name: 'Tokyo',
    country: 'Japan',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1000',
    description: 'Experience the blend of traditional culture and modern technology',
    flightDetails: {
      from: 'DEL',
      to: 'NRT',
      duration: '7h 30m',
      price: 850
    }
  },
  {
    name: 'Kyoto',
    country: 'Japan',
    image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1000',
    description: 'Ancient temples and traditional Japanese gardens',
    flightDetails: {
      from: 'DEL',
      to: 'KIX',
      duration: '8h',
      price: 900
    }
  },
  {
    name: 'Seoul',
    country: 'South Korea',
    image: 'https://images.unsplash.com/photo-1538485399081-7c0bc16ee18f?w=1000',
    description: 'K-pop culture and modern Asian metropolis',
    flightDetails: {
      from: 'DEL',
      to: 'ICN',
      duration: '6h 30m',
      price: 750
    }
  }
];

const activities = [
  {
    title: 'Senso-ji Temple Visit',
    location: 'Asakusa, Tokyo',
    description: 'Visit Tokyo\'s oldest Buddhist temple',
    image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=500',
    duration: '2 hours',
    price: 0,
    time: '10:00 AM - 12:00 PM'
  },
  {
    title: 'Tokyo Skytree Tour',
    location: 'Sumida, Tokyo',
    description: 'Observation deck with panoramic city views',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=500',
    duration: '2 hours',
    price: 25,
    time: '2:00 PM - 4:00 PM'
  },
  // Add more activities...
];

// Add seed script to populate database 