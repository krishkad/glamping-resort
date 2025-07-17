
import { Card, CardContent } from './ui/card';

interface PropertyAmenitiesProps {
  amenities: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
}

const PropertyAmenities = ({ amenities }: PropertyAmenitiesProps) => {
  return (
    <section className="py-16 bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl  font-bold text-[#1a365d] mb-4">
            Luxury Amenities & Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every detail has been carefully curated to ensure your stay exceeds expectations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((amenity, index) => (
            <Card key={index} className="border-0 shadow-lg hover-lift bg-white/80 backdrop-blur-sm p-0">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{amenity.icon}</div>
                <h3 className="text-lg font-semibold text-[#1a365d] mb-2">{amenity.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{amenity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyAmenities;