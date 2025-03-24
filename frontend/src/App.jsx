import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import AppRoutes from './route';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Navbar */}
        <nav className="bg-blue-600 text-white p-4">
          <ul className="flex flex-wrap gap-4">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/dashboard" className="hover:underline">Dashboard</Link></li>
            <li><Link to="/routine" className="hover:underline">Routine</Link></li>
            <li><Link to="/tools" className="hover:underline">Tools</Link></li>
            <li><Link to="/support" className="hover:underline">Support</Link></li>
            
          </ul>
        </nav>

        {/* Routes Rendered Here */}
        <div className="p-6">
          <AppRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;
