
import { Clock, Users, Star, MapPin } from 'lucide-react';

type TourCardProps = {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  groupSize: string;
  rating: number;
  location: string;
  image: string;
  featured?: boolean;
}

const TourCard = ({
  title,
  description,
  price,
  duration,
  groupSize,
  rating,
  location,
  image
}: TourCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md card-hover group flex flex-col">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-sunset-500 text-white px-3 py-1 rounded-full text-sm font-medium">
          ₹{price} INR
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>

        <div className="flex items-center mb-2 text-sm text-ocean-800/80">
          <MapPin size={16} className="mr-1" />
          <span>{location}</span>
        </div>

        <p className="text-gray-600 mb-4">{description}</p>

        <div className="flex flex-wrap gap-4 mb-4 text-sm">
          <div className="flex items-center text-ocean-700">
            <Clock size={16} className="mr-1" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center text-ocean-700">
            <Users size={16} className="mr-1" />
            <span>{groupSize}</span>
          </div>
          <div className="flex items-center text-sunset-600">
            <Star size={16} className="mr-1 fill-sunset-500 stroke-sunset-500" />
            <span>{rating.toFixed(1)}</span>
          </div>
        </div>

        <a href="#contact" className="btn-primary block text-center">
          Book Now
        </a>
      </div>
    </div>
  );
};

const FeaturedTours = () => {
  const tours: TourCardProps[] = [
    {
      id: "1",
      title: "Island Expedition",
      description: "Get ready for a super chill kayak trip around our beautiful island village! We’ll take you on a special handpicked route at a nice, easy pace, with plenty of stops for breaks and refreshments.",
      price: 900,
      duration: "3 hours",
      groupSize: "1-8 people",
      rating: 4.9,
      location: "Punnamada",
      image: "/images/island-expedition.jpg",
      featured: true
    },
    {
      id: "2",
      title: "Sunrise/Sunset Backwater Cruise",
      description: "Paddle through serene canals while witnessing a spectacular Kerala sunrise/sunset. We’ll start by picking you up by boat from the meetup spot and take you over to our island",
      price: 700,
      duration: "2 hours",
      groupSize: "1-8 people",
      rating: 4.8,
      location: "Alleppey",
      image: "/images/sunset-sunrise.jpg",
      featured: true
    },
    {
      id: "3",
      title: "Through Narrow Canals",
      description: "You’ll paddle through narrow canals, glide past mini islands, and catch some amazing views at our favorite sunrise or sunset points. And trust us, there’s a lot more magic waiting for you!",
      price: 800,
      duration: "2 hours",
      groupSize: "2-6 people",
      rating: 4.7,
      location: "Alleppey",
      image: "/images/narrow-canal-3.jpeg",
      featured: true
    }
  ];

  return (
    <section id="tours" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Featured Adventures</h2>
          <div className="w-24 h-1 bg-sunset-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our hand-crafted kayaking experiences through Kerala's most beautiful waterways
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <TourCard key={tour.id} {...tour} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="btn-outline inline-flex items-center">
            View All Tours
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;
