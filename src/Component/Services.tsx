import React from 'react';

const Services: React.FC = () => {
  return (
    <section className="bg-[#172A3A] text-white py-16 px-6 max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-[#09BC8A] mb-10">Our Services</h2>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12">
        At Coinova, we provide a seamless and secure platform tailored to help you get the most out of your cryptocurrency investments. Explore our core services that make crypto-to-Naira trading easier, safer, and more accessible.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Service 1 */}
        <div className="p-6 bg-[#1F2C43] rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-[#09BC8A] mb-4">Crypto-to-Naira Exchange</h3>
          <p className="text-gray-300 mb-6">
            Instantly convert your cryptocurrency to Naira with ease. Our platform provides competitive rates and fast transactions, ensuring you can access your funds when you need them.
          </p>
        </div>

        {/* Service 2 */}
        <div className="p-6 bg-[#1F2C43] rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-[#09BC8A] mb-4">Advanced Security Measures</h3>
          <p className="text-gray-300 mb-6">
            Your security is our priority. Coinova uses industry-leading security protocols, including multi-factor authentication and encryption, to keep your assets safe at all times.
          </p>
        </div>

        {/* Service 3 */}
        <div className="p-6 bg-[#1F2C43] rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-[#09BC8A] mb-4">24/7 Customer Support</h3>
          <p className="text-gray-300 mb-6">
            Our dedicated support team is available around the clock to assist you with any questions or issues. We’re here to make your trading experience smooth and worry-free.
          </p>
        </div>

        {/* Service 4 */}
        <div className="p-6 bg-[#1F2C43] rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-[#09BC8A] mb-4">Educational Resources</h3>
          <p className="text-gray-300 mb-6">
            New to crypto? Access our educational resources and tutorials designed to help you trade confidently and understand the basics of cryptocurrency.
          </p>
        </div>

        {/* Service 5 */}
        <div className="p-6 bg-[#1F2C43] rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-[#09BC8A] mb-4">Real-Time Market Data</h3>
          <p className="text-gray-300 mb-6">
            Stay informed with real-time market updates, price alerts, and detailed analytics. Our platform provides you with the insights you need to make informed trading decisions.
          </p>
        </div>

        {/* Service 6 */}
        <div className="p-6 bg-[#1F2C43] rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-[#09BC8A] mb-4">User-Friendly Interface</h3>
          <p className="text-gray-300 mb-6">
            Enjoy a streamlined and intuitive interface designed for both beginners and experienced traders. Coinova makes crypto trading accessible and enjoyable for everyone.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
