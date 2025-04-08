
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
    <div className="bg-white rounded-lg overflow-hidden shadow-md card-hover group">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-sunset-500 text-white px-3 py-1 rounded-full text-sm font-medium">
          ${price} USD
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
        
        <a href="#book" className="btn-primary block text-center">
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
      title: "Vembanad Lake Expedition",
      description: "Explore Kerala's largest lake with its diverse ecosystems and bird sanctuaries.",
      price: 89,
      duration: "4 hours",
      groupSize: "2-8 people",
      rating: 4.9,
      location: "Kumarakom",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      id: "2",
      title: "Sunset Backwater Cruise",
      description: "Paddle through serene canals while witnessing a spectacular Kerala sunset.",
      price: 69,
      duration: "2 hours",
      groupSize: "2-6 people",
      rating: 4.8,
      location: "Alleppey",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      id: "3",
      title: "Mangrove Wildlife Safari",
      description: "Navigate through dense mangrove forests and spot exotic birds and animals.",
      price: 99,
      duration: "5 hours",
      groupSize: "2-6 people",
      rating: 4.7,
      location: "Poovar",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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
          <a href="#all-tours" className="btn-outline inline-flex items-center">
            View All Tours
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;
