
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedTours from '../components/FeaturedTours';
import AboutUs from '../components/AboutUs';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import FAQSection from '../components/FAQSection';
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
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
