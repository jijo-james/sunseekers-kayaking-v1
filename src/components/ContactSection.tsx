
import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a server
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
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
          
          <div>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg text-gray-800">
              <h3 className="text-2xl font-bold mb-6 text-ocean-800">Send a Message</h3>
              
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500"
                  required
                />
              </div>
              
              <button 
                type="submit" 
                className="w-full flex items-center justify-center btn-primary"
              >
                Send Message
                <Send size={18} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
