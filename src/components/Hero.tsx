
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToTours = () => {
    const toursElement = document.getElementById('tours');
    if (toursElement) {
      toursElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
          backgroundPosition: "center 30%"
        }}
      />
      
      {/* Overlay */}
      <div className="hero-overlay z-10"></div>
      
      {/* Hero Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white text-shadow-lg max-w-4xl">
          Discover the Hidden Waters of Kerala
        </h1>
        <p className="text-xl md:text-2xl text-white/90 text-shadow mb-8 max-w-2xl">
          Immerse yourself in authentic kayaking adventures through pristine backwaters and untouched natural beauty
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#book" className="btn-primary text-lg">
            Book Your Adventure
          </a>
          <a href="#tours" className="btn-outline bg-white/10 text-white border-white text-lg">
            Explore Tours
          </a>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center z-20">
        <button 
          onClick={scrollToTours}
          className="flex flex-col items-center text-white/80 hover:text-white animate-bounce transition-colors"
        >
          <span className="mb-2 text-sm font-medium">Scroll Down</span>
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
