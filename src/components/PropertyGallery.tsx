"use cilent"
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface PropertyGalleryProps {
  property: {
    title: string;
    images: string[];
  };
}

const PropertyGallery = ({ property }: PropertyGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  // Additional lifestyle images (in a real app, these would be separate from main images)
  const lifestyleImages = [
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % lifestyleImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? lifestyleImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <>
      <section className="py-16 bg-[#faf9f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl  font-bold text-[#1a365d] mb-4">
              Experience Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the lifestyle and unique experiences that await you at {property.title}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {lifestyleImages.map((image, index) => (
              <div 
                key={index}
                className="relative aspect-square cursor-pointer group overflow-hidden rounded-lg"
                onClick={() => openLightbox(index)}
              >
                <img 
                  src={image} 
                  alt={`Experience ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-[#d69e2e] transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#d69e2e] transition-colors"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#d69e2e] transition-colors"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
          
          <img 
            src={lifestyleImages[selectedImage]} 
            alt={`Experience ${selectedImage + 1}`}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </>
  );
};

export default PropertyGallery;