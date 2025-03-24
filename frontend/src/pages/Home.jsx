import React from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-blue-800 mb-6 text-center">
        Welcome to NeuroBuddy
      </h1>
      <p className="text-lg text-blue-700 mb-12 text-center max-w-xl">
        Empowering neurodiverse individuals with tools, routines, and community support for a better daily experience.
      </p>

      <div className="flex gap-6">
        <Link to="/signup">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow">
            Sign Up
          </button>
        </Link>
        <Link to="/login">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded shadow">
            Log In
          </button>
        </Link>
      </div>
    </div>
  );
}

>>>>>>> ff31f19e8fc94bc3382caafa9338e574f9dd06e7
