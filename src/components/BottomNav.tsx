import { Link, useLocation } from 'react-router-dom';

function BottomNav() {
  const location = useLocation();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800">
      <div className="flex justify-around items-center p-4">
        <Link to="/dashboard" className={`${location.pathname === '/dashboard' ? 'text-blue-500' : 'text-gray-400'}`}>
          🏠
        </Link>
        <Link to="/activities" className={`${location.pathname === '/activities' ? 'text-blue-500' : 'text-gray-400'}`}>
          📅
        </Link>
        <Link to="/map" className={`${location.pathname === '/map' ? 'text-blue-500' : 'text-gray-400'}`}>
          🗺️
        </Link>
        <Link to="/profile" className={`${location.pathname === '/profile' ? 'text-blue-500' : 'text-gray-400'}`}>
          👤
        </Link>
      </div>
    </div>
  );
}

export default BottomNav; 