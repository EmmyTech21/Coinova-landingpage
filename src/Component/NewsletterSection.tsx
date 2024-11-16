import React, { useState } from 'react';
import SuccessPopup from './SuccessPopup';

const NewsletterSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({ name: '', email: '', phone: '' });

  const validateForm = () => {
    const newErrors = { name: '', email: '', phone: '' };
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d+$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be numeric';
    }
    setErrors(newErrors);
    return !newErrors.name && !newErrors.email && !newErrors.phone;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // Clear error on change
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true); // Start loading
    try {
      const response = await fetch('https://coinova-backend.vercel.app/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setMessage(data.message);
      setIsSuccess(true); // Show the success popup
      setFormData({ name: '', email: '', phone: '' });
    } catch (error) {
      console.error('Error:', error);
      setMessage('Subscription failed. Please try again.');
    } finally {
      setIsSubmitting(false); // Stop loading
    }
  };

  const handleClosePopup = () => {
    setIsSuccess(false);
  };

  return (
    <section className="bg-[#6FA3BF] text-white p-8 md:p-16 lg:p-24">
      <div className="py-16 text-center animate-fadeIn">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#172A3A] animate-slideIn">
          Be the First to Experience Coinova! Sign up now for exclusive early access, updates, and special insights as we bring crypto trading to Naira.
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 md:flex-row justify-center items-center max-w-lg mx-auto animate-fadeIn"
        >
          <div className="w-full">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 w-full bg-[#5E81AC] text-white rounded-lg placeholder-white focus:outline-none"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div className="w-full">
            <input
              type="email"
              name="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleChange}
              className="p-3 w-full bg-[#5E81AC] text-white rounded-lg placeholder-white focus:outline-none"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div className="w-full">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="p-3 w-full bg-[#5E81AC] text-white rounded-lg placeholder-white focus:outline-none"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`p-3 w-full md:w-auto bg-[#172A3A] text-white font-semibold rounded-lg hover:bg-[#0F425C] transition-transform ${
              isSubmitting || !formData.name || !formData.email || !formData.phone
                ? 'cursor-not-allowed opacity-50'
                : 'hover:scale-105'
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin h-5 w-5 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
                Loading...
              </span>
            ) : (
              'Subscribe'
            )}
          </button>
        </form>
      </div>

      {/* Render SuccessPopup if isSuccess is true */}
      {isSuccess && <SuccessPopup message={message} onClose={handleClosePopup} />}
    </section>
  );
};

export default NewsletterSection;
