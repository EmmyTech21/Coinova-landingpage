import React from 'react';
import { Link } from 'react-router-dom';

const GetStarted: React.FC = () => {
  return (
    <section className="relative bg-white text-center py-16 px-6 max-w-4xl mx-auto">
      {/* Background Decorative Shapes */}
      <div className="absolute -top-12 left-12 w-64 h-64 border-2 border-blue-400 rounded-lg transform rotate-12 opacity-30"></div>
      <div className="absolute -top-16 left-32 w-48 h-48 border-2 border-blue-400 rounded-lg transform -rotate-45 opacity-30"></div>
      
      {/* Content */}
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Get Started</h2>
      <p className="text-gray-600 mb-8">
        Join Coinova’s Early Access and sweep into a whole new world of secure and easy crypto trading. Get into the action, join Coinova now!
      </p>
      <Link to="/get-access">
        <button className="bg-black text-white px-6 py-3 rounded-md">
          Get Early Access
        </button>
      </Link>
    </section>
  );
};

export default GetStarted;
