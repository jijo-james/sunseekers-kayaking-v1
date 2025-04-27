
import { Facebook, Instagram, Twitter, Youtube, Heart, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const joinWhatsAppCommunity = () => {
    // Replace with your actual WhatsApp community invite link
    const whatsappUrl = `https://chat.whatsapp.com/invite/yourgrouplink`;
    window.open(whatsappUrl, '_blank');
  };
  
  return (
    <footer className="bg-ocean-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Sunseekers Kayaking</h3>
            <p className="text-ocean-100 mb-4">
              Authentic kayaking adventures through Kerala's most pristine backwaters, rivers, and lakes.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61573989523606" className="text-ocean-200 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/sunseekers_kayaking/" className="text-ocean-200 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-ocean-200 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.youtube.com/@sunseekerskayaking/" className="text-ocean-200 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
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
            <h3 className="text-xl font-bold mb-4 text-white">Popular Tours</h3>
            <ul className="space-y-2">
              <li><a href="#tours" className="text-ocean-100 hover:text-white transition-colors">Vembanad Lake Expedition</a></li>
              <li><a href="#tours" className="text-ocean-100 hover:text-white transition-colors">Sunset Backwater Cruise</a></li>
              <li><a href="#tours" className="text-ocean-100 hover:text-white transition-colors">Adventourous Narrow Canals</a></li>
              <li><a href="#tours" className="text-ocean-100 hover:text-white transition-colors">Kayak Fishing Adventure</a></li>
              <li><a href="#tours" className="text-ocean-100 hover:text-white transition-colors">Customized Tours</a></li>
            </ul>
          </div>
          
          {/* WhatsApp Community Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Join Our Community</h3>
            <p className="text-ocean-100 mb-4">
              Connect with fellow kayak enthusiasts, get the latest updates, and exclusive offers in our WhatsApp community.
            </p>
            <Button 
              onClick={joinWhatsAppCommunity}
              className="w-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center py-3 text-base font-medium"
            >
              <MessageSquare className="mr-2" size={18} />
              Join WhatsApp Community
            </Button>
          </div>
        </div>
        
        <div className="border-t border-ocean-800 pt-8 mt-8 text-center text-ocean-200">
          <p className="flex items-center justify-center">
            © {currentYear} Sunseekers Kayaking. All rights reserved. Made with <Heart size={16} className="mx-1 text-sunset-500" /> in Alappuzha.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
