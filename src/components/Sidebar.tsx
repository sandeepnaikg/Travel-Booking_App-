import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="w-64 bg-white shadow-lg h-screen overflow-y-auto">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800">Travel Itinerary App</h1>
        
        <nav className="mt-8 space-y-2">
          <Link 
            to="/"
            className={`flex items-center px-4 py-2 rounded-lg ${
              isActive('/') ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            📝 Cover Page
          </Link>

          <Link 
            to="/assignment-brief"
            className={`flex items-center px-4 py-2 rounded-lg ${
              isActive('/assignment-brief') ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            📄 Assignment Brief
          </Link>

          <Link 
            to="/reference-exploration"
            className={`flex items-center px-4 py-2 rounded-lg ${
              isActive('/reference-exploration') ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            🔍 Reference and Exploration
          </Link>

          <Link 
            to="/design-process"
            className={`flex items-center px-4 py-2 rounded-lg ${
              isActive('/design-process') ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            🚶 Design Process Walkthrough
          </Link>

          <Link 
            to="/wireframes"
            className={`flex items-center px-4 py-2 rounded-lg ${
              isActive('/wireframes') ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            📐 Wireframes
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar; 