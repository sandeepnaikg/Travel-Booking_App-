export const destinationData = {
  tokyo: {
    name: 'TOKYO',
    country: 'Japan',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1000',
    flight: { from: 'DEL', to: 'NRT', city: 'Tokyo', duration: '7h 30m' },
    activities: [
      {
        id: '1',
        title: 'Senso-ji Temple',
        location: 'Asakusa, Tokyo',
        time: '9:30 AM',
        duration: '2 hours',
        price: '¥0',
        image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=500'
      },
      {
        id: '2',
        title: 'Tokyo Sky Tree',
        location: 'Sumida, Tokyo',
        time: '2:00 PM',
        duration: '2 hours',
        price: '¥2000',
        image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=500'
      },
      {
        id: '3',
        title: 'Shibuya Crossing',
        location: 'Shibuya, Tokyo',
        time: '5:00 PM',
        duration: '1 hour',
        price: '¥0',
        image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=500'
      }
    ],
    hotels: [
      {
        name: 'Park Hyatt Tokyo',
        location: 'Shinjuku',
        price: '¥50,000/night',
        image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=500'
      },
      {
        name: 'Mandarin Oriental',
        location: 'Nihonbashi',
        price: '¥45,000/night',
        image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=500'
      }
    ]
  },
  paris: {
    name: 'PARIS',
    country: 'France',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1000',
    flight: { from: 'DEL', to: 'CDG', city: 'Paris', duration: '9h 20m' },
    activities: [
      {
        id: '1',
        title: 'Eiffel Tower Visit',
        location: 'Champ de Mars',
        time: '10:00 AM',
        duration: '3 hours',
        price: '€26',
        image: 'https://images.unsplash.com/photo-1543349689-9a4d426bee8e?w=500'
      },
      {
        id: '2',
        title: 'Louvre Museum',
        location: 'Rue de Rivoli',
        time: '2:00 PM',
        duration: '4 hours',
        price: '€17',
        image: 'https://images.unsplash.com/photo-1565799261839-47e9dd371548?w=500'
      },
      {
        id: '3',
        title: 'Seine River Cruise',
        location: 'Port de la Conférence',
        time: '7:00 PM',
        duration: '1 hour',
        price: '€15',
        image: 'https://images.unsplash.com/photo-1541359927273-d76820fc4f72?w=500'
      }
    ],
    hotels: [
      {
        name: 'Ritz Paris',
        location: 'Place Vendôme',
        price: '€50,000/night',
        image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=500'
      },
      {
        name: 'Mandarin Oriental',
        location: 'Rue de Rivoli',
        price: '€45,000/night',
        image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=500'
      }
    ]
  }
} 