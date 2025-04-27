import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MainDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-xl font-semibold">Hello Chhavi!</h1>
          <p className="text-sm text-gray-400">Ready for the trip?</p>
        </div>
        <div className="w-10 h-10 bg-orange-500 rounded-full"></div>
      </div>

      {/* Upcoming Trip Card */}
      <div className="mb-6">
        <h2 className="text-lg mb-3">Your Upcoming Trip</h2>
        <div className="relative rounded-2xl overflow-hidden">
          <img 
            src="/tokyo-night.jpg" 
            alt="Tokyo"
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <h3 className="text-3xl font-bold">TOKYO</h3>
              <button className="p-2 bg-white/20 rounded-full">
                <span className="material-icons">arrow_outward</span>
              </button>
            </div>
            <div className="flex gap-4 text-sm">
              <div className="flex items-center gap-1">
                <span className="material-icons text-sm">schedule</span>
                <span>8 Days</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="material-icons text-sm">group</span>
                <span>4 (2M2F)</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="material-icons text-sm">event</span>
                <span>14 Activities</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Flight Details */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg">Flight Details</h2>
          <button className="text-sm text-blue-400">See all</button>
        </div>
        <div className="bg-blue-600 rounded-2xl p-4">
          <div className="text-sm text-blue-200 mb-2">25.01.2025, 10:55 am</div>
          <div className="flex justify-between items-center">
            <div>
              <div className="text-2xl font-bold">DEL</div>
              <div className="text-sm">Delhi, India</div>
            </div>
            <div className="flex-1 flex justify-center">
              <span className="material-icons">flight</span>
            </div>
            <div>
              <div className="text-2xl font-bold">NRT</div>
              <div className="text-sm">Narita, Tokyo</div>
            </div>
          </div>
        </div>
      </div>

      {/* Accommodation */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg">Accommodation</h2>
          <button className="text-sm text-blue-400">See all</button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-800 rounded-2xl p-3">
            <img 
              src="/hotel-1.jpg" 
              alt="Hotel"
              className="w-full h-24 object-cover rounded-xl mb-2"
            />
            <h3 className="font-medium">Shinagawa Prince Hotel</h3>
            <div className="text-sm text-gray-400">2 Nights</div>
          </div>
          <div className="bg-gray-800 rounded-2xl p-3">
            <img 
              src="/hotel-2.jpg" 
              alt="Hotel"
              className="w-full h-24 object-cover rounded-xl mb-2"
            />
            <h3 className="font-medium">Metropolitan Hotel</h3>
            <div className="text-sm text-gray-400">3 Nights</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainDashboard;