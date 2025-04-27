
import { Quote } from 'lucide-react';

type TestimonialProps = {
  quote: string;
  name: string;
  location: string;
  image: string;
}

const Testimonial = ({ quote, name, location, image }: TestimonialProps) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md relative z-10">
      <Quote className="text-ocean-100 absolute top-6 left-6 w-12 h-12 -z-10" />
      <div className="flex flex-col h-full">
        <p className="text-gray-700 mb-6 flex-grow">"{quote}"</p>
        <div className="flex items-center">
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <h4 className="font-bold text-ocean-800">{name}</h4>
            <p className="text-sm text-gray-500">{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials: TestimonialProps[] = [
    {
      quote: "The sunset kayaking tour was magical. Our guide was knowledgeable and showed us hidden corners of the backwaters that larger boats can't access.",
      name: "Priti",
      location: "Varanasi, UP",
      image: "/images/testimonial-priti-v2.jpeg"
    },
    {
      quote: "As a solo traveler, I felt completely comfortable with Sunseekers Kayaking. The small group setting allowed me to make friends while experiencing Kerala's natural beauty.",
      name: "Jijo",
      location: "Bangalore, KA",
      image: "/images/testimonial-jijo.jpeg"
    },
    {
      quote: "The Vembanadu Lake tour exceeded my expectations. I loved spotting fishes and learning about the ecosystem from our passionate guide Akash.",
      name: "Anjusha",
      location: "Mumbai, MH",
      image: "/images/testimonial-anjusha.jpeg"
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-ocean-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Explorers Say</h2>
          <div className="w-24 h-1 bg-sunset-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stories and experiences from adventurers who've paddled with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              location={testimonial.location}
              image={testimonial.image}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#reviews"
            className="text-ocean-700 hover:text-ocean-800 font-medium underline flex items-center justify-center"
          >
            Read More Reviews
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
