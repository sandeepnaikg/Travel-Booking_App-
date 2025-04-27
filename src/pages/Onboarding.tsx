import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Onboarding() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [selectedDestination, setSelectedDestination] = useState('');
  const [duration, setDuration] = useState('');
  const [travelType, setTravelType] = useState('');
  const [step, setStep] = useState(1);

  const destinations = [
    {
      id: 'tokyo',
      name: 'Tokyo',
      country: 'Japan',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1000'
    },
    {
      id: 'paris',
      name: 'Paris',
      country: 'France',
      image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1000'
    },
    {
      id: 'bali',
      name: 'Bali',
      country: 'Indonesia',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1000'
    },
    {
      id: 'dubai',
      name: 'Dubai',
      country: 'UAE',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1000'
    }
  ];

  const handleContinue = () => {
    if (step === 1 && userName) {
      setStep(2);
    } else if (step === 2 && selectedDestination && duration && travelType) {
      localStorage.setItem('userData', JSON.stringify({
        name: userName,
        destination: selectedDestination,
        duration,
        travelType
      }));
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md mx-auto p-6"
      >
        {step === 1 ? (
          <div className="space-y-6 pt-12">
            <h1 className="text-2xl font-bold">Welcome to Travel Guide!</h1>
            <div>
              <label className="block mb-2 text-sm">What's your name?</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full bg-gray-800/50 rounded-xl p-4 text-white"
              />
            </div>
            <button
              onClick={handleContinue}
              disabled={!userName}
              className={`w-full rounded-xl p-4 font-medium ${
                userName ? 'bg-blue-600' : 'bg-gray-700'
              }`}
            >
              Continue
            </button>
          </div>
        ) : (
          <div className="space-y-6 pt-12">
            <div>
              <h1 className="text-2xl font-bold">Hi {userName}!</h1>
              <p className="text-gray-400">Let's plan your perfect trip</p>
            </div>

            {/* Destination Selection */}
            <div>
              <label className="block mb-2 text-sm">Where would you like to go?</label>
              <div className="grid grid-cols-2 gap-4">
                {destinations.map((dest) => (
                  <button
                    key={dest.id}
                    onClick={() => setSelectedDestination(dest.id)}
                    className={`relative rounded-xl overflow-hidden aspect-square ${
                      selectedDestination === dest.id ? 'ring-2 ring-blue-500' : ''
                    }`}
                  >
                    <img 
                      src={dest.image} 
                      alt={dest.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-3">
                      <div className="font-medium">{dest.name}</div>
                      <div className="text-sm text-gray-300">{dest.country}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Duration Selection */}
            <div>
              <label className="block mb-2 text-sm">How long will you stay?</label>
              <div className="grid grid-cols-3 gap-3">
                {['3-5 days', '6-10 days', '11-15 days'].map((option) => (
                  <button
                    key={option}
                    onClick={() => setDuration(option)}
                    className={`p-3 rounded-xl ${
                      duration === option ? 'bg-blue-600' : 'bg-gray-800/50'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Travel Type */}
            <div>
              <label className="block mb-2 text-sm">Who are you traveling with?</label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: 'solo', label: 'Solo' },
                  { id: 'couple', label: 'Couple' },
                  { id: 'family', label: 'Family' },
                  { id: 'friends', label: 'Friends' }
                ].map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setTravelType(option.id)}
                    className={`p-4 rounded-xl ${
                      travelType === option.id ? 'bg-blue-600' : 'bg-gray-800/50'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleContinue}
              disabled={!selectedDestination || !duration || !travelType}
              className={`w-full rounded-xl p-4 font-medium ${
                selectedDestination && duration && travelType
                  ? 'bg-blue-600'
                  : 'bg-gray-700'
              }`}
            >
              Plan My Trip
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default Onboarding; 