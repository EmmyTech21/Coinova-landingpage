import React from 'react';

const NewsletterSection: React.FC = () => {
  return (
    <section className="bg-[#6FA3BF] text-white p-8 md:p-16 lg:p-24">
      {/* Newsletter Signup */}
  <div className=" py-16 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#172A3A]">
        Sign up for our newsletter to stay updated.
      </h2>
      <form className="flex flex-col gap-4 md:flex-row justify-center items-center max-w-lg mx-auto">
        <input
          type="text"
          placeholder="Name"
          className="p-3 w-full md:w-auto bg-[#5E81AC] text-white rounded-lg placeholder-white focus:outline-none"
        />
        <input
          type="email"
          placeholder="name@example.com"
          className="p-3 w-full md:w-auto bg-[#5E81AC] text-white rounded-lg placeholder-white focus:outline-none"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="p-3 w-full md:w-auto bg-[#5E81AC] text-white rounded-lg placeholder-white focus:outline-none"
        />
        <button
          type="submit"
          className="p-3 w-full md:w-auto bg-[#172A3A] text-white font-semibold rounded-lg hover:bg-[#0F425C] transition-colors"
        >
          Subscribe
        </button>
      </form>
    </div>

      {/* Main Content */}
      <div className="max-w-4xl  mb-16">
        <h3 className="text-xl text-[#004346] font-jua italic md:text-5xl font-bold mb-10">Why Coinova?</h3>
        <p className="text-base md:text-2xl mb-6 text-[#000] w-1/2 font-sans">
          Because we handle your cryptos like kings. We give you a secure, straightforward platform
          to trade cryptocurrencies directly into Naira. And hey, we're pretty good looking too.
        </p>
        <h4 className=" md:text-5xl font-bold mb-10 text-[#004346] font-jua text-5xl mt-20">Easy & Secure</h4>
        <p className="text-base md:text-lg mb-6 text-[#000] font-sans w-1/2">
          Trade with confidence, knowing your assets are secure. Make your trades without hassle,
          because we understand simplicity makes things beautiful.
        </p>
        <p className="text-base md:text-lg mb-6 text-[#000] w-1/2">
          Our advanced security measures keep your information safe. Now, isn't that a weight off
          your shoulders?
        </p>
        <p className="text-base md:text-lg mb-6 text-[#000] w-1/2">
          Don't just crypto-do. Crypto-do with Coinova.
        </p>
      </div>

      {/* FAQ Section */}
       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      {/* FAQ Section */}
      <div className="mb-16">
        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-[#172A3A]">Frequently Asked Questions</h3>
        <ul className="space-y-8">
          <li>
            <p className="font-semibold text-lg text-[#172A3A]">Can I trust Coinova with my information?</p>
            <p className="text-base text-gray-700">
              Your information is safe with us, as we put in a lot of effort to ensure top-notch security.
            </p>
          </li>
          <li>
            <p className="font-semibold text-lg text-[#172A3A]">How does Coinova ensure a smooth trading experience?</p>
            <p className="text-base text-gray-700">
              By making the trading process simple and user-friendly, even for beginners.
            </p>
          </li>
          <li>
            <p className="font-semibold text-lg text-[#172A3A]">What if I need assistance with my trading?</p>
            <p className="text-base text-gray-700">
              Our support team is here to help, ensuring a smooth experience every step of the way.
            </p>
          </li>
          <li>
            <p className="font-semibold text-lg text-[#172A3A]">Who can join the Coinova Early Access?</p>
            <p className="text-base text-gray-700">
              Anyone interested in crypto trading with early access to our platform.
            </p>
          </li>
        </ul>
      </div>

      {/* Footer */}
      <footer className="bg-[#172A3A] text-white py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ul className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm md:text-base mb-6">
            <li><a href="#" className="hover:text-[#09BC8A]">Company</a></li>
            <li><a href="#" className="hover:text-[#09BC8A]">About</a></li>
            <li><a href="#" className="hover:text-[#09BC8A]">Support</a></li>
            <li><a href="#" className="hover:text-[#09BC8A]">Blog</a></li>
            <li><a href="#" className="hover:text-[#09BC8A]">Contact</a></li>
            <li><a href="#" className="hover:text-[#09BC8A]">Privacy</a></li>
            <li><a href="#" className="hover:text-[#09BC8A]">Twitter</a></li>
            <li><a href="#" className="hover:text-[#09BC8A]">Facebook</a></li>
            <li><a href="#" className="hover:text-[#09BC8A]">Instagram</a></li>
          </ul>
          <p className="text-xs md:text-sm">© 2024 Coinova, all rights reserved.</p>
        </div>
      </footer>
    </div>
    </section>
  );
};

export default NewsletterSection;
