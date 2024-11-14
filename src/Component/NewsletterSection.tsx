import React from 'react';

const NewsletterSection: React.FC = () => {
  return (
    <section className="bg-[#6FA3BF] text-white p-8 md:p-16 lg:p-24">
      {/* Newsletter Signup */}
  <div className=" py-16 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#172A3A]">
     Be the First to Experience Coinova! Sign up now for exclusive early access, updates, and special insights as we bring crypto trading to Naira.
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
    
    </section>
  );
};

export default NewsletterSection;
