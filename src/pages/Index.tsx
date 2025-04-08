
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedTours from '../components/FeaturedTours';
import AboutUs from '../components/AboutUs';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedTours />
      <AboutUs />
      <Gallery />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
