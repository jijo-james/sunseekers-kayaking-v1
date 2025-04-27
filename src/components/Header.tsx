
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-ocean-800/95 py-3 shadow-md' : 'bg-transparent py-5'}`}>
      <div className="container-custom flex items-center justify-between">
        <a href="/" className="flex items-center">
          <h1 className="text-2xl font-bold text-white">Sunseekers Kayaking</h1>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#tours" className="nav-link">Tours</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#gallery" className="nav-link">Gallery</a>
          <a href="#testimonials" className="nav-link">Testimonials</a>
          <a href="#contact" className="nav-link">Contact</a>
          <a href="#contact" className="btn-primary">Book Now</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-ocean-800 text-white absolute top-full left-0 right-0 animate-fade-in">
          <div className="flex flex-col p-6 space-y-4">
            <a href="#tours" className="nav-link text-lg" onClick={() => setIsMenuOpen(false)}>Tours</a>
            <a href="#about" className="nav-link text-lg" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#gallery" className="nav-link text-lg" onClick={() => setIsMenuOpen(false)}>Gallery</a>
            <a href="#testimonials" className="nav-link text-lg" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
            <a href="#contact" className="nav-link text-lg" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <a href="#contact" className="btn-primary text-center mt-4" onClick={() => setIsMenuOpen(false)}>Book Now</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
