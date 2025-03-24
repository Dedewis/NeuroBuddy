import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/login';
import Dashboard from './pages/Dashboard';
import Routine from './pages/Routine';
import Support from './pages/support';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/routine" element={<Routine />} />
    <Route path="/support" element={<Support />} />
  </Routes>
);

export default AppRoutes;
