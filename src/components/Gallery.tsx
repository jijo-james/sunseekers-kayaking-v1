
import { useState } from 'react';
import { X } from 'lucide-react';
import shores from '/images/foreigners-in-kayak.jpeg'

type GalleryImage = {
  src: string;
  alt: string;
  category: string;
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const galleryImages: GalleryImage[] = [
    {
      src: "/images/foreigners-in-kayak.jpeg",
      alt: "Serene backwaters with tree shades",
      category: "Shores"
    },
    {
      src: "/images/sunset-gallary.jpg",
      alt: "Sunset on the water",
      category: "Sunset"
    },
    {
      src: "/images/landscape-solo-kayaking.jpg",
      alt: "Solo kayaking",
      category: "Vembanad Lake"
    },
    {
      src: "/images/night-kayaking.jpeg",
      alt: "Kayakers exploring the waterways",
      category: "Adventures"
    },
    {
      src: "/images/lake-view.jpeg",
      alt: "Morning fog on the lake",
      category: "Landscapes"
    },
    {
      src: "/images/foreigners-in-kayak.jpeg",
      alt: "Unique experinces in the god's own country",
      category: "Culture"
    }
  ];

  return (
    <section id="gallery" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Moments on the Water</h2>
          <div className="w-24 h-1 bg-sunset-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Glimpses of the extraordinary experiences that await you
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg aspect-square cursor-pointer group"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-shadow font-medium bg-black/30 px-3 py-1 rounded-full">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-8 left-0 right-0 text-center">
            <p className="text-white text-shadow-lg text-lg">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
