import React, { useState } from 'react';
import axios from 'axios';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post('https://coinova-backend.vercel.app/contact', formData);
      if (response.status === 200) {
        setIsSubmitting(false);
        alert('Thank you for reaching out to Coinova!');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      setIsSubmitting(false);
      alert('Something went wrong, please try again later.');
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section className="bg-gradient-to-r from-[#172A3A] to-[#0F425C] text-white py-16 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 animate-slideIn">We’d Love to Hear from You!</h2>
        <p className="text-lg mb-8">
          Whether you have a question about our platform, feedback, or just want to say hi, we’re here for you. 
          Get in touch with Coinova today and let’s make cryptocurrency trading seamless together!
        </p>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md text-[#172A3A] space-y-4"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-semibold mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#09BC8A]"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#09BC8A]"
            placeholder="Your Email"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-semibold mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#09BC8A]"
            rows={5}
            placeholder="Your Message"
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-6 rounded-lg bg-[#09BC8A] text-white font-bold hover:bg-[#00795C] transition-colors ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {/* Social Media Links */}
      <div className="max-w-4xl mx-auto text-center mt-12">
        <p className="text-lg font-bold mb-4">Follow us on Social Media</p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.instagram.com/coinova_official?igsh=bXZiemgxa3I3NXdt"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#E4405F] p-3 rounded-full text-white hover:bg-[#d6334c] transition-colors"
            title="Follow us on Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M7.75 2C4.022 2 2 4.03 2 7.75v8.5C2 19.978 4.022 22 7.75 22h8.5c3.728 0 5.75-2.022 5.75-5.75v-8.5C22 4.03 19.978 2 16.25 2h-8.5zm0 1.5h8.5c2.65 0 4.25 1.6 4.25 4.25v8.5c0 2.65-1.6 4.25-4.25 4.25h-8.5c-2.65 0-4.25-1.6-4.25-4.25v-8.5c0-2.65 1.6-4.25 4.25-4.25zm9.5 2.5a.75.75 0 0 0-.75.75c0 .414.336.75.75.75.414 0 .75-.336.75-.75a.75.75 0 0 0-.75-.75zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 1.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61567637472237&mibextid=kFxxJD"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#4267B2] p-3 rounded-full text-white hover:bg-[#365899] transition-colors"
            title="Follow us on Facebook"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987H7.898v-2.89h2.54V9.845c0-2.513 1.493-3.89 3.777-3.89 1.096 0 2.238.195 2.238.195v2.46h-1.261c-1.242 0-1.63.774-1.63 1.566v1.878h2.773l-.443 2.89h-2.33V21.88C18.343 21.127 22 16.99 22 12z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
