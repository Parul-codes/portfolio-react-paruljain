import './App.css'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import { useRef } from 'react'

function App() {

  const homeRef = useRef<HTMLElement | null>(null);
  const skillRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const projectRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  //passed down to Experience component
  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

    // Passed down to the Footer component
  const scrollToTop = () => {
    if (homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
     <div className="flex flex-col min-h-screen">
        <Navbar
          homeRef={homeRef}
          skillRef={skillRef}
          experienceRef={experienceRef}
          projectRef={projectRef}
          contactRef={contactRef} 
        />

        <main ref={homeRef} id='Home' className="flex-1">
          <Home ref={homeRef} projectRef={projectRef} skillRef={skillRef}/>
          <br />
          <br />
          <br />
          <Skills ref={skillRef} />
          <br />
          <br />
          <br />
          <br />
          <div className='bg-gray-50'>
            <Experience ref={experienceRef} scrollToContact={scrollToContact} />
            <br />
            <br />
            <br />
            <br />
            <Projects ref={projectRef} />
          </div>
          <br />
          <br />
          <br />
          <br />
          <Contact ref={contactRef}  />
        </main>

        <Footer scrollToTop={scrollToTop} />
      </div>
  )
}

export default App
