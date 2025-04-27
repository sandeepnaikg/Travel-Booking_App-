import { useNavigate } from 'react-router-dom';

function ThankYou() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-md mx-auto pt-12 text-center">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Thank You, Chhavi!</h1>
          <p className="text-gray-400">Your travel itinerary has been created.</p>
        </div>
        
        <div className="bg-blue-600 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold mb-2">Trip Summary</h2>
          <p className="text-sm opacity-80">Tokyo, Japan</p>
          <p className="text-sm opacity-80">27 Feb - 05 Mar</p>
          <p className="text-sm opacity-80">2 Travelers</p>
        </div>

        <button
          onClick={() => navigate('/dashboard')}
          className="w-full bg-white text-black font-bold py-3 px-4 rounded-lg"
        >
          View My Itinerary
        </button>
      </div>
    </div>
  );
}

export default ThankYou; 