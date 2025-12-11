
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

      <div className="p-6 flex flex-col space-between grow">
        <div className='grow'>
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
      title: "Sunrise/Sunset Kayaking in Alleppey",
      description: "Experience the best kayaking in Alappuzha with our peaceful sunrise and sunset routes through calm backwaters. This Alleppey kayak tour takes you through narrow canals, village lifestyle areas, and beautiful open waters-perfect for every traveller.",
      price: 500,
      duration: "2 hours",
      groupSize: "1-20 people",
      rating: 4.8,
      location: "Alleppey",
      image: "/images/sunset-sunrise-new.jpg",
      featured: true
    },
    {
      id: "2",
      title: "Island Expedition",
      description: "Discover the untouched beauty of Alappuzha with this long-route adventure, the most scenic kayaking in Alleppey. Paddle through hidden canals, coconut islands, village waterways, and peaceful nature spots.",
      price: 800,
      duration: "3 hours",
      groupSize: "1-8 people",
      rating: 4.9,
      location: "Alleppey",
      image: "/images/island-expedition-new.jpg",
      featured: true
    },
    {
      id: "3",
      title: "Couple Kayaking in Alleppey",
      description: "A romantic experience designed for couples who want private, calm kayaking in Alappuzha. Enjoy a magical sunrise or sunset route with beautiful scenery and peaceful backwaters. This intimate Alleppey kayak tour offers the perfect atmosphere for couples who want a memorable backwater kayaking Alappuzha moment.",
      price: 500,
      duration: "2 hours",
      groupSize: "2-6 people",
      rating: 4.7,
      location: "Alleppey",
      image: "/images/couple-kayaking.jpg",
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
