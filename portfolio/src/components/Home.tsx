import {type RefObject, forwardRef } from 'react';
import logo from '../assets/parulred.jpg'
import resume from '../assets/RESUME.pdf'

interface HomeProps {
  projectRef: RefObject<HTMLElement | null>;
  skillRef: RefObject<HTMLElement | null>;
  
}

const Home = forwardRef<HTMLElement, HomeProps>(({projectRef, skillRef}, ref) => {

  const scrollToSection = (ref: RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={ref} id='Home' className='min-h-screen flex justify-center relative overflow-hidden'>
      <div className='absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50'></div>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]'></div>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(20,184,166,0.1),transparent_50%)]'></div>
      <div className='relative max-w-6xl mx-auto mt-4 px-4 sm:px-6 lg:px-8 py-20'>
        <div className='mb-8 relative'>
          <div className='w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden shadow-2xl ring-4 ring-white/80'>
          <img className='w-full h-full object-cover' src={logo} alt="logo" />
          <div className='absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-20 animate-pulse'></div>
          <div className='absolute -bottom-2 -left-2 w-6 h-6 bg-teal-500 rounded-full opacity-30 animate-pulse delay-1000'></div>
        </div>
        </div>
        <div className='text-center'>
          <div className='text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-4'>
            <h1>Parul Jain</h1>
          </div>
          <div className='w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full mb-6'></div>
          <div className='text-lg text-gray-600 max-w-2xl mx-auto mb-6'>
            Full-Stack Developer crafting beautiful, scalable experiences
          </div>
            <p className='text-base md:text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed'>
            Passionate about creating innovative solutions with modern technologies. Working with JAVA & MERN Stacks. Continuously exploring data structures and algorithms to sharpen problem-solving and analytical skills.
            </p>
        </div>
        <div className='mt-12 flex items-centre justify-center gap-12'>
          <button onClick={()=> scrollToSection(projectRef)} className='bg-gradient-to-r from-blue-500 to-blue-600 rounded-full px-10 py-4 text-white font-semibold hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 hover:from-blue-700 hover:to-blue-800'>View My Work</button>
          <a href={resume} download="Parul_Jain_Resume.pdf"><button className='text-md font-semibold text-gray-700 rounded-full border-gray-300 border-2 border-solid px-12 py-4 hover:border-gray-400 :hover:shadow-2xl hover:bg-gray-50'>⬇️ Download Resume</button></a>
        </div>
        <div onClick={()=> scrollToSection(skillRef)} className='cursor-pointer flex items-center justify-center mt-8 text-2xl text-gray-500 hover:text-gray-900 animate-bounce delaye-2000'>↓</div>
      </div>
    </section>
  )
});

export default Home
