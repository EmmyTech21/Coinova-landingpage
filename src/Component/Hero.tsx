import heroimage from '../assets/coinova.webp'
import GetStarted from './GetStarted'
import NewsletterSection from './NewsletterSection'

export default function Hero() {
  return (
    <main className=""> 
        <div className="flex flex-col md:flex-row bg-[#172A3A] h-auto overflow-hidden gap-4 md:gap-8 text-center pt-10">
    <h1 className="font-jua text-4xl sm:text-5xl md:text-7xl italic font-extrabold text-[#09BC8A] mx-4 md:mx-10">
        Coinova
    </h1>
    <p className="text-[#09BC8A] pt-4 sm:pt-6 mx-4 md:mx-10 text-lg sm:text-xl md:text-2xl">
        Get ahead of the crowd by joining Coinova, your ticket to a secure and user-friendly crypto trading experience.
    </p>
</div>

        <img src={heroimage} alt="" className=' object-fill rounded-xl h-auto w-full'  />
        <GetStarted />
        <NewsletterSection />
    </main>
  )
}
