import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import BottomNav from "../components/BottomNav";
import AnimatedTransition from '../components/AnimatedTransition';

// Create a type for our destination data
type Destination = {
  name: string;
  country: string;
  image: string;
  description: string;
  flightDetails: {
    from: string;
    to: string;
    date: string;
    time: string;
    duration: string;
    price: number;
  };
  activities: Array<{
    id: string;
    title: string;
    location: string;
    time: string;
    duration: string;
    price: number;
    image: string;
    description: string;
  }>;
  accommodation: Array<{
    id: string;
    name: string;
    location: string;
    checkIn: string;
    checkOut: string;
    nights: number;
    price: number;
    image: string;
    amenities: string[];
  }>;
  highlights: string[];
  additionalInfo: {
    bestTimeToVisit: string;
    currency: string;
    language: string;
    transportation: string[];
    mustTry: string[];
  };
};

const destinations: Record<string, Destination> = {
  tokyo: {
    name: "Tokyo",
    country: "Japan",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1000",
    description: "Experience the perfect blend of tradition and future",
    flightDetails: {
      from: "DEL",
      to: "NRT",
      date: "25.01.2025",
      time: "10:55 am",
      duration: "7h 30m",
      price: 850
    },
    activities: [
      {
        id: "1",
        title: "Senso-ji Temple Visit",
        location: "Asakusa",
        time: "9:30 AM",
        duration: "2 hours",
        price: 0,
        image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=500",
        description: "Visit the oldest Buddhist temple with rich history"
      },
      {
        id: "2",
        title: "Tokyo Skytree Tour",
        location: "Sumida",
        time: "2:00 PM",
        duration: "2 hours",
        price: 25,
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1000",
        description: "Enjoy panoramic views from the tallest structure"
      },
      {
        id: "3",
        title: "Tsukiji Market Tour",
        location: "Tsukiji",
        time: "7:00 AM",
        duration: "3 hours",
        price: 45,
        image: "https://images.unsplash.com/photo-1595456982104-14cc660c4d22?w=500",
        description: "Explore the famous fish market and try fresh sushi"
      },
      {
        id: '4',
        title: 'Shibuya Crossing & Shopping',
        location: 'Shibuya',
        time: '4:00 PM',
        duration: '3 hours',
        price: 0,
        image: 'https://images.unsplash.com/photo-1542931287-023b922fa89b?w=500',
        description: "Experience the world's busiest pedestrian crossing"
      },
      {
        id: '5',
        title: 'Meiji Shrine Visit',
        location: 'Harajuku',
        time: '10:00 AM',
        duration: '2.5 hours',
        price: 0,
        image: 'https://images.unsplash.com/photo-1583072885290-5e4a8e1d7621?w=500',
        description: 'Visit the serene shrine dedicated to Emperor Meiji'
      }
    ],
    accommodation: [
      {
        id: "acc1",
        name: "Park Hyatt Tokyo",
        location: "Shinjuku",
        checkIn: "25.01.2025",
        checkOut: "27.01.2025",
        nights: 2,
        price: 600,
        image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=500",
        amenities: [
          "City View",
          "Spa",
          "Multiple Restaurants",
          "Fitness Center",
          "Indoor Pool"
        ]
      },
      {
        id: 'acc2',
        name: 'Mandarin Oriental',
        location: 'Nihonbashi',
        checkIn: '27.01.2025',
        checkOut: '29.01.2025',
        nights: 2,
        price: 550,
        image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500',
        amenities: [
          'Luxury Spa',
          'Michelin Restaurant',
          'Tea Ceremony',
          'City Views',
          'Fitness Center'
        ]
      }
    ],
    highlights: [
      "Ancient Temples",
      "Modern Technology",
      "Shopping Districts",
      "Japanese Cuisine",
      "Pop Culture",
      "Public Transport",
      "Night Life",
      "Cherry Blossoms"
    ],
    additionalInfo: {
      bestTimeToVisit: "March-May (Cherry Blossoms) or Oct-Nov (Autumn)",
      currency: "Japanese Yen (JPY)",
      language: "Japanese, limited English",
      transportation: [
        "Metro System",
        "JR Lines",
        "Buses",
        "Taxis",
        "Walking"
      ],
      mustTry: [
        "Sushi",
        "Ramen",
        "Tempura",
        "Matcha",
        "Wagyu Beef"
      ]
    }
  },
  paris: {
    name: "Paris",
    country: "France",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1000",
    description: "Discover the city of lights, art, and romance",
    flightDetails: {
      from: "DEL",
      to: "CDG",
      date: "27.01.2025",
      time: "11:30 am",
      duration: "8h 45m",
      price: 950
    },
    activities: [
      {
        id: "1",
        title: "Eiffel Tower Summit",
        location: "Champ de Mars",
        time: "10:00 AM",
        duration: "3 hours",
        price: 60,
        image: "https://images.unsplash.com/photo-1543349689-9a4d426bee8e?w=500",
        description: "Visit the iconic symbol of Paris with summit access"
      },
      {
        id: "2",
        title: "Louvre Museum Tour",
        location: "Rue de Rivoli",
        time: "9:00 AM",
        duration: "4 hours",
        price: 45,
        image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1000",
        description: "Explore the largest art museum, home to Mona Lisa"
      },
      {
        id: "3",
        title: "Seine River Cruise",
        location: "River Seine",
        time: "7:00 PM",
        duration: "2 hours",
        price: 35,
        image: "https://images.unsplash.com/photo-1541791135449-168d91a780a1?w=500",
        description: "Evening cruise with dinner and city lights"
      },
      {
        id: "4",
        title: "Montmartre Walking Tour",
        location: "Montmartre",
        time: "2:00 PM",
        duration: "3 hours",
        price: 25,
        image: "https://images.unsplash.com/photo-1551887373-3c5bd224f6e2?w=500",
        description: "Explore the artistic heart of Paris"
      },
      {
        id: "5",
        title: "Palace of Versailles",
        location: "Versailles",
        time: "9:00 AM",
        duration: "6 hours",
        price: 90,
        image: "https://images.unsplash.com/photo-1591289009723-aef051d395e1?w=500",
        description: "Visit the magnificent palace and gardens"
      }
    ],
    accommodation: [
      {
        id: "acc1",
        name: "Ritz Paris",
        location: "Place Vendome",
        checkIn: "27.01.2025",
        checkOut: "29.01.2025",
        nights: 2,
        price: 1200,
        image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=500",
        amenities: [
          "Luxury Spa",
          "Michelin Restaurant",
          "Bar Hemingway",
          "Garden",
          "Cooking School"
        ]
      },
      {
        id: "acc2",
        name: "Four Seasons George V",
        location: "Champs-Élysées",
        checkIn: "29.01.2025",
        checkOut: "31.01.2025",
        nights: 2,
        price: 1100,
        image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=500",
        amenities: [
          "Spa",
          "Three Restaurants",
          "Flower Arrangements",
          "Wine Cellar",
          "Fitness Center"
        ]
      }
    ],
    highlights: [
      "Historic Monuments",
      "Art Museums",
      "French Cuisine",
      "Fashion Shopping",
      "River Seine",
      "Architecture",
      "Café Culture",
      "Gardens"
    ],
    additionalInfo: {
      bestTimeToVisit: "April-June or September-October",
      currency: "Euro (EUR)",
      language: "French, English widely spoken",
      transportation: [
        "Metro",
        "RER Trains",
        "Buses",
        "Velib Bikes",
        "Walking"
      ],
      mustTry: [
        "Croissants",
        "French Wine",
        "Cheese",
        "Escargot",
        "Macarons"
      ]
    }
  },
  bali: {
    name: "Bali",
    country: "Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1000",
    description: "Experience tropical paradise and spiritual culture",
    flightDetails: {
      from: "DEL",
      to: "DPS",
      date: "28.01.2025",
      time: "09:15 am",
      duration: "9h 15m",
      price: 750
    },
    activities: [
      {
        id: "1",
        title: "Uluwatu Temple Sunset",
        location: "Uluwatu",
        time: "4:00 PM",
        duration: "3 hours",
        price: 15,
        image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=500",
        description: "Watch sunset at clifftop temple with Kecak fire dance"
      },
      {
        id: "2",
        title: "Ubud Rice Terraces",
        location: "Tegalalang",
        time: "9:00 AM",
        duration: "4 hours",
        price: 35,
        image: "https://images.unsplash.com/photo-1583321500900-82807e458f3c?w=500",
        description: "Visit stunning rice paddies and coffee plantation"
      },
      {
        id: "3",
        title: "Sacred Monkey Forest",
        location: "Ubud",
        time: "10:00 AM",
        duration: "2 hours",
        price: 20,
        image: "https://images.unsplash.com/photo-1584545284372-f22510eb7c26?w=500",
        description: "Explore ancient temples with resident monkeys"
      },
      {
        id: "4",
        title: "Nusa Penida Tour",
        location: "Nusa Penida",
        time: "7:00 AM",
        duration: "10 hours",
        price: 85,
        image: "https://images.unsplash.com/photo-1570789210967-2cac24afeb00?w=500",
        description: "Visit Kelingking Beach and Angel's Billabong"
      },
      {
        id: "5",
        title: "Tanah Lot Sunset",
        location: "Tabanan",
        time: "3:00 PM",
        duration: "3 hours",
        price: 25,
        image: "https://images.unsplash.com/photo-1588867702719-969c8ac733d6?w=500",
        description: "Visit iconic ocean temple at sunset"
      }
    ],
    accommodation: [
      {
        id: "acc1",
        name: "Four Seasons Sayan",
        location: "Ubud",
        checkIn: "28.01.2025",
        checkOut: "30.01.2025",
        nights: 2,
        price: 800,
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=500",
        amenities: [
          "River View",
          "Spa",
          "Yoga Classes",
          "Pool Villa",
          "Cooking Classes"
        ]
      },
      {
        id: "acc2",
        name: "COMO Uma Canggu",
        location: "Canggu",
        checkIn: "30.01.2025",
        checkOut: "01.02.2025",
        nights: 2,
        price: 400,
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=500",
        amenities: [
          "Beach Access",
          "Surf Lessons",
          "Spa",
          "Pool",
          "Fitness Center"
        ]
      }
    ],
    highlights: [
      "Temples",
      "Beaches",
      "Rice Terraces",
      "Spiritual Culture",
      "Water Sports",
      "Spa Treatments",
      "Local Cuisine",
      "Art Scenes"
    ],
    additionalInfo: {
      bestTimeToVisit: "April to October (Dry Season)",
      currency: "Indonesian Rupiah (IDR)",
      language: "Indonesian, English widely spoken",
      transportation: [
        "Private Driver",
        "Scooter Rental",
        "Taxi",
        "Hotel Transfer",
        "Grab/Gojek"
      ],
      mustTry: [
        "Nasi Goreng",
        "Satay Lilit",
        "Fresh Coconuts",
        "Balinese Coffee",
        "Sambal"
      ]
    }
  },
  dubai: {
    name: "Dubai",
    country: "UAE",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1000",
    description: "Experience luxury, modern architecture, and desert adventures",
    flightDetails: {
      from: "DEL",
      to: "DXB",
      date: "30.01.2025",
      time: "08:30 am",
      duration: "3h 45m",
      price: 550
    },
    activities: [
      {
        id: "1",
        title: "Burj Khalifa At The Top",
        location: "Downtown Dubai",
        time: "11:00 AM",
        duration: "2 hours",
        price: 40,
        image: "https://images.unsplash.com/photo-1582672359366-3bbe49c500c4?w=500",
        description: "Visit the observation deck of the tallest building"
      },
      {
        id: "2",
        title: "Desert Safari Adventure",
        location: "Dubai Desert",
        time: "3:00 PM",
        duration: "6 hours",
        price: 80,
        image: "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=500",
        description: "Dune bashing, camel rides, and BBQ dinner"
      },
      {
        id: "3",
        title: "Dubai Mall & Fountain Show",
        location: "Downtown Dubai",
        time: "5:00 PM",
        duration: "3 hours",
        price: 0,
        image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=500",
        description: "Shopping and musical fountain performance"
      },
      {
        id: "4",
        title: "Dubai Marina Yacht Tour",
        location: "Dubai Marina",
        time: "4:30 PM",
        duration: "2 hours",
        price: 95,
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500",
        description: "Luxury yacht cruise with refreshments"
      },
      {
        id: "5",
        title: "Gold & Spice Souks",
        location: "Deira",
        time: "9:00 AM",
        duration: "3 hours",
        price: 30,
        image: "https://images.unsplash.com/photo-1566041510639-8d95a2490bfb?w=500",
        description: "Traditional market tour with guide"
      },
      {
        id: "6",
        title: "Aquaventure Waterpark",
        location: "Palm Jumeirah",
        time: "10:00 AM",
        duration: "Full Day",
        price: 75,
        image: "https://images.unsplash.com/photo-1582672359366-3bbe49c500c4?w=500",
        description: "Water slides and marine adventures"
      }
    ],
    accommodation: [
      {
        id: "acc1",
        name: "Burj Al Arab",
        location: "Jumeirah",
        checkIn: "30.01.2025",
        checkOut: "01.02.2025",
        nights: 2,
        price: 1200,
        image: "https://images.unsplash.com/photo-1582672359366-3bbe49c500c4?w=500",
        amenities: [
          "Private Beach",
          "Luxury Spa",
          "Multiple Restaurants",
          "Butler Service",
          "Infinity Pool",
          "Helipad"
        ]
      },
      {
        id: "acc2",
        name: "Atlantis The Palm",
        location: "Palm Jumeirah",
        checkIn: "01.02.2025",
        checkOut: "03.02.2025",
        nights: 2,
        price: 800,
        image: "https://images.unsplash.com/photo-1578271887552-5ac3a72752bc?w=500",
        amenities: [
          "Aquaventure Access",
          "Private Beach",
          "Marine Habitat",
          "Multiple Pools",
          "Luxury Spa",
          "Kids Club"
        ]
      },
      {
        id: "acc3",
        name: "Address Downtown",
        location: "Downtown Dubai",
        checkIn: "03.02.2025",
        checkOut: "05.02.2025",
        nights: 2,
        price: 600,
        image: "https://images.unsplash.com/photo-1582672359366-3bbe49c500c4?w=500",
        amenities: [
          "Burj Khalifa View",
          "Infinity Pool",
          "Spa Center",
          "Multiple Restaurants",
          "Direct Mall Access"
        ]
      }
    ],
    highlights: [
      "Modern Architecture",
      "Luxury Shopping",
      "Desert Adventures",
      "Beach Resorts",
      "Cultural Experiences",
      "Water Parks",
      "Dining Excellence",
      "Night Life"
    ],
    additionalInfo: {
      bestTimeToVisit: "November to March",
      currency: "UAE Dirham (AED)",
      language: "Arabic, English widely spoken",
      transportation: [
        "Metro System",
        "Taxis",
        "Water Taxis",
        "Bus Network",
        "Rental Cars"
      ],
      mustTry: [
        "Shawarma",
        "Arabic Coffee",
        "Camel Milk",
        "Local Dates",
        "Emirati Cuisine"
      ]
    }
  },
  // Add other destinations similarly
};

function Dashboard() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<any>(null);
  const [selectedDate, setSelectedDate] = useState('27');
  const [activeTab, setActiveTab] = useState<'activities' | 'accommodation'>('activities');

  useEffect(() => {
    const storedData = localStorage.getItem('userData');
    if (!storedData) {
      navigate('/');
      return;
    }
    const data = JSON.parse(storedData);
    setUserData(data);
  }, [navigate]);

  if (!userData) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  const destinationData = destinations[userData.destination as keyof typeof destinations];

  if (!destinationData) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl mb-4">Destination not found</h2>
          <button 
            onClick={() => navigate('/')}
            className="text-blue-400 underline"
          >
            Go back to selection
          </button>
        </div>
      </div>
    );
  }

  return (
    <AnimatedTransition>
      <div className="min-h-screen bg-black text-white pb-20">
        <div className="p-4">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-between items-center mb-6"
          >
            <div>
              <h1 className="text-xl font-semibold">Hello {userData.name}!</h1>
              <p className="text-sm text-gray-400">Ready for the trip?</p>
            </div>
            <div className="w-10 h-10 bg-orange-500 rounded-full"></div>
          </motion.div>

          {/* Upcoming Trip Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6"
          >
            <h2 className="text-lg mb-3">Your Upcoming Trip</h2>
            <div className="relative rounded-2xl overflow-hidden h-48">
              <img
                src={destinationData.image}
                alt={destinationData.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-3xl font-bold">{destinationData.name.toUpperCase()}</h3>
                    <p className="text-sm text-gray-300">{destinationData.country}</p>
                  </div>
                  <button className="p-2 bg-white/20 rounded-full">↗</button>
                </div>
                <div className="flex gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <span>{userData.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>{userData.travelType}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>{destinationData.activities.length} Activities</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mb-6"
          >
            <div className="flex gap-2 overflow-x-auto py-2">
              {destinationData.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-gray-800 rounded-full text-sm whitespace-nowrap"
                >
                  {highlight}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Flight Details */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg">Flight Details</h2>
              <button className="text-sm text-blue-400">See all</button>
            </div>
            <div className="bg-blue-600 rounded-2xl p-4">
              <div className="text-sm text-blue-200 mb-2">
                {destinationData.flightDetails.date}, {destinationData.flightDetails.time}
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-2xl font-bold">{destinationData.flightDetails.from}</div>
                  <div className="text-sm">Delhi, India</div>
                </div>
                <div className="flex-1 flex flex-col items-center">
                  <span>✈️</span>
                  <span className="text-sm text-blue-200">{destinationData.flightDetails.duration}</span>
                </div>
                <div>
                  <div className="text-2xl font-bold">{destinationData.flightDetails.to}</div>
                  <div className="text-sm">{destinationData.name}</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tabs */}
          <div className="flex gap-2 mb-4">
            <button
              className={`px-4 py-2 rounded-full ${
                activeTab === 'activities' ? 'bg-blue-600' : 'bg-gray-800'
              }`}
              onClick={() => setActiveTab('activities')}
            >
              Activities
            </button>
            <button
              className={`px-4 py-2 rounded-full ${
                activeTab === 'accommodation' ? 'bg-blue-600' : 'bg-gray-800'
              }`}
              onClick={() => setActiveTab('accommodation')}
            >
              Accommodation
            </button>
          </div>

          {activeTab === 'activities' ? (
            <>
              {/* Date Selection */}
              <div className="grid grid-cols-5 gap-2 mb-6">
                {['26', '27', '28', '29', '30'].map((date) => (
                  <button
                    key={date}
                    onClick={() => setSelectedDate(date)}
                    className={`flex flex-col items-center p-2 rounded-xl ${
                      selectedDate === date ? 'bg-blue-600' : 'bg-gray-800'
                    }`}
                  >
                    <span className="text-xs text-gray-400">
                      {['SUN', 'MON', 'TUE', 'WED', 'THU'][
                        ['26', '27', '28', '29', '30'].indexOf(date)
                      ]}
                    </span>
                    <span className="text-lg">{date}</span>
                  </button>
                ))}
              </div>

              {/* Activities List */}
              <div className="space-y-4">
                {destinationData.activities.map((activity) => (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gray-800 rounded-2xl overflow-hidden"
                  >
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold mb-2">{activity.title}</h3>
                      <p className="text-sm text-gray-400 mb-3">{activity.description}</p>
                      <div className="text-sm text-gray-400 space-y-1">
                        <div>📍 {activity.location}</div>
                        <div>🕒 {activity.time} ({activity.duration})</div>
                        <div>💰 ${activity.price}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          ) : (
            /* Accommodation List */
            <div className="space-y-4">
              {destinationData.accommodation.map((hotel) => (
                <motion.div
                  key={hotel.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gray-800 rounded-2xl overflow-hidden"
                >
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{hotel.name}</h3>
                    <div className="text-sm text-gray-400 space-y-1">
                      <div>📍 {hotel.location}</div>
                      <div>📅 Check-in: {hotel.checkIn}</div>
                      <div>📅 Check-out: {hotel.checkOut}</div>
                      <div>🌙 {hotel.nights} nights</div>
                      <div>💰 ${hotel.price}/night</div>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {hotel.amenities.map((amenity, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-700 rounded-full text-xs">
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Additional Information */}
          {destinationData.additionalInfo && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mb-6"
            >
              <h2 className="text-lg mb-3">Good to Know</h2>
              <div className="bg-gray-800 rounded-2xl p-4">
                <div className="space-y-3">
                  <div>
                    <span className="text-gray-400">Best Time to Visit:</span>
                    <p>{destinationData.additionalInfo.bestTimeToVisit}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Currency:</span>
                    <p>{destinationData.additionalInfo.currency}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Language:</span>
                    <p>{destinationData.additionalInfo.language}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Getting Around:</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {destinationData.additionalInfo.transportation.map((transport, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                          {transport}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-400">Must Try:</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {destinationData.additionalInfo.mustTry.map((item, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        <BottomNav />
      </div>
    </AnimatedTransition>
  );
}

export default Dashboard; 