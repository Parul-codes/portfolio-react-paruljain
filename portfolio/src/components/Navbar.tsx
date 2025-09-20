import { useEffect, useState, type RefObject } from "react";

interface NavbarProps {
  homeRef: RefObject<HTMLElement | null>;
  skillRef: RefObject<HTMLElement | null>;
  experienceRef: RefObject<HTMLElement | null>;
  projectRef: RefObject<HTMLElement | null>;
  contactRef: RefObject<HTMLElement | null>;
}

const Navbar = ({ homeRef, skillRef, experienceRef, projectRef, contactRef }: NavbarProps) => {

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (ref: RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 shadow-lg backdrop-blur-md" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <div className="text-xl font-bold">Parul Jain</div>
        <nav className="space-x-6">
          <button onClick={() => scrollToSection(homeRef)} className="hover:text-blue-600">Home</button>
          <button onClick={() => scrollToSection(skillRef)} className="hover:text-blue-600">Skills</button>
          <button onClick={() => scrollToSection(experienceRef)} className="hover:text-blue-600">Experience</button>
          <button onClick={() => scrollToSection(projectRef)} className="hover:text-blue-600">Projects</button>
          <button onClick={() => scrollToSection(contactRef)} className="hover:text-blue-600">Contact</button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
