
import { CheckCircle } from 'lucide-react';

const AboutUs = () => {
  const benefits = [
    "Small groups for personalized experiences",
    "Expert local guides with deep knowledge",
    "Eco-friendly exploration of pristine waterways",
    "Premium equipment for comfort and safety",
    "Access to hidden gems off the tourist track",
    "Authentic cultural interactions with locals"
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Peaceful Kerala backwaters" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-ocean-50 rounded-lg -z-10"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-sunset-50 rounded-lg -z-10"></div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <div className="w-20 h-1 bg-sunset-500 mb-6"></div>
            
            <p className="text-gray-700 mb-6">
              Founded in 2015 by passionate kayakers and nature enthusiasts, Nadodi Voyage was born from a deep love for Kerala's intricate waterways and a desire to share their hidden beauty with the world.
            </p>
            
            <p className="text-gray-700 mb-6">
              Our name "Nadodi" comes from the Malayalam word for "wanderer" or "explorer" - perfectly capturing our spirit of adventure and discovery through Kerala's stunning backwaters, lakes, and rivers.
            </p>
            
            <h3 className="text-xl font-bold mb-4 text-ocean-800">Why Choose Us</h3>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle size={20} className="text-forest-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
            
            <a href="#contact" className="btn-primary inline-block">
              Connect With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
