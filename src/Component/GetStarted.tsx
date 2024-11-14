import React from 'react';
import { Link } from 'react-router-dom';

const GetStarted: React.FC = () => {
  return (
    <section className="relative bg-[#172A3A] text-center py-16 px-6 max-w-4xl mx-auto rounded-lg shadow-lg">
      {/* Background Decorative Shapes */}
      <div className="absolute -top-12 left-12 w-64 h-64 border-2 border-[#09BC8A] rounded-lg transform rotate-12 opacity-30"></div>
      <div className="absolute -top-16 left-32 w-48 h-48 border-2 border-[#09BC8A] rounded-lg transform -rotate-45 opacity-30"></div>

      {/* Content */}
      <h2 className="text-4xl font-bold text-[#09BC8A] mb-4">Be Among the First to Join Coinova</h2>
      <p className="text-white mb-8 text-lg max-w-lg mx-auto">
        Secure your early access to the Coinova platform and get ready for a seamless, secure crypto-to-Naira trading experience. Don't miss your chance to be part of the future of crypto in Nigeria!
      </p>
      <Link to="/get-access">
        <button className="bg-[#09BC8A] text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-[#00795C] transition-colors">
          Join Early Access Now
        </button>
      </Link>
    </section>
  );
};

export default GetStarted;
