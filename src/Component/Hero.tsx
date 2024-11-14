
import heroImage from '../assets/coinova.webp';
import GetStarted from './GetStarted';
import NewsletterSection from './NewsletterSection';

export default function Hero() {
  return (
    <main className="bg-[#172A3A] text-[#09BC8A]">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-center items-center text-center pt-10 pb-6">
        <h1 className="font-jua text-5xl md:text-7xl italic font-extrabold mx-4">
          Coinova
        </h1>
        <p className="pt-4 text-lg md:text-2xl mx-4">
          Get ahead of the crowd by joining Coinova, your ticket to a secure and user-friendly crypto trading experience.
        </p>
      </div>

      {/* Hero Image */}
      <img src={heroImage} alt="Coinova hero" className="object-cover rounded-xl w-full h-auto" />

      {/* CTA Section */}
      <GetStarted />
      <NewsletterSection />
    </main>
  );
}
