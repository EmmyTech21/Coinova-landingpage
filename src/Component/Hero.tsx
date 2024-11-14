import heroimage from '../assets/coinova.webp'
import GetStarted from './GetStarted'
import NewsletterSection from './NewsletterSection'

export default function Hero() {
  return (
    <main className=""> 
        <div className="flex bg-[#172A3A]  h-40 gap-8 text-center pt-10 ">
            <h1 className=" font-jua text-7xl italic mx-10 font-extrabold text-[#09BC8A]">Coinova</h1>
            <p className="text-[#09BC8A] pt-6 mx-10 text-2xl ">Get ahead of the crowd by joining Coinova,
        your ticket to a secure and user-friendly crypto trading experience.</p>
        </div>
        <img src={heroimage} alt="" className=' object-fill rounded-xl h-auto w-full'  />
        <GetStarted />
        <NewsletterSection />
    </main>
  )
}
