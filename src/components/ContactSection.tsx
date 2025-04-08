
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';

const ContactSection = () => {
  const openWhatsApp = () => {
    // Replace with your actual WhatsApp number
    const phoneNumber = "+919484123456";
    const message = "Hello, I'm interested in booking a kayaking tour!";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="section-padding bg-ocean-800 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
            <div className="w-20 h-1 bg-sunset-500 mb-8"></div>
            
            <p className="text-ocean-50 mb-8 text-lg">
              Have questions about our tours or want to customize your adventure? 
              Reach out to us and our team will be happy to assist you.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <Phone className="text-sunset-400 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">Call Us</h3>
                  <p className="text-ocean-100">+91 (0) 484 123 4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-sunset-400 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">Email Us</h3>
                  <p className="text-ocean-100">info@nadodivoyage.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="text-sunset-400 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">Find Us</h3>
                  <p className="text-ocean-100">
                    Nadodi Voyage, Boat Jetty Road<br />
                    Kumarakom, Kerala 686563<br />
                    India
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center w-full max-w-md">
              <h3 className="text-2xl font-bold mb-6 text-ocean-800">Contact Us on WhatsApp</h3>
              
              <p className="text-gray-600 mb-6">
                For the fastest response, reach out to us directly on WhatsApp. 
                Our team is available to answer your questions and help you plan your perfect kayaking adventure.
              </p>
              
              <Button 
                onClick={openWhatsApp}
                className="w-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center py-4 text-lg font-medium"
              >
                <MessageSquare className="mr-2" />
                Chat with Us on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
