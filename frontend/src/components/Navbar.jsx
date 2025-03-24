import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4 text-white flex justify-between items-center">
      <h1 className="text-2xl font-bold">NeuroBuddy</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/routine" className="hover:underline">Routine</Link>
        <Link to="/tools" className="hover:underline">Audio-Visual Tools</Link>
        <Link to="/support" className="hover:underline">Support</Link>
      </div>
    </nav>
  );
}

<<<<<<< HEAD
export default Navbar;
=======
export default Navbar;
>>>>>>> ff31f19e8fc94bc3382caafa9338e574f9dd06e7
