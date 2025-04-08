
import { Facebook, Instagram, Twitter, Youtube, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-ocean-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Nadodi Voyage</h3>
            <p className="text-ocean-100 mb-4">
              Authentic kayaking adventures through Kerala's most pristine backwaters, rivers, and lakes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-ocean-200 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-ocean-200 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-ocean-200 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-ocean-200 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#tours" className="text-ocean-100 hover:text-white transition-colors">Our Tours</a></li>
              <li><a href="#about" className="text-ocean-100 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#gallery" className="text-ocean-100 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#testimonials" className="text-ocean-100 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-ocean-100 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Popular Tours Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Popular Tours</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-ocean-100 hover:text-white transition-colors">Vembanad Lake Expedition</a></li>
              <li><a href="#" className="text-ocean-100 hover:text-white transition-colors">Sunset Backwater Cruise</a></li>
              <li><a href="#" className="text-ocean-100 hover:text-white transition-colors">Mangrove Wildlife Safari</a></li>
              <li><a href="#" className="text-ocean-100 hover:text-white transition-colors">Full Moon Paddle</a></li>
              <li><a href="#" className="text-ocean-100 hover:text-white transition-colors">Kayak Fishing Adventure</a></li>
            </ul>
          </div>
          
          {/* Newsletter Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-ocean-100 mb-4">
              Subscribe to receive special offers and updates about our adventures.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-l-md w-full text-gray-800 focus:outline-none"
              />
              <button 
                type="submit" 
                className="bg-sunset-500 hover:bg-sunset-600 text-white px-4 py-2 rounded-r-md transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-ocean-800 pt-8 mt-8 text-center text-ocean-200">
          <p className="flex items-center justify-center">
            © {currentYear} Nadodi Voyage. All rights reserved. Made with <Heart size={16} className="mx-1 text-sunset-500" /> in Kerala.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
