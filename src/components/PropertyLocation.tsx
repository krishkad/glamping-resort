
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { MapPin, Navigation } from 'lucide-react';

interface PropertyLocationProps {
  property: {
    title: string;
    location: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
}

const PropertyLocation = ({ property }: PropertyLocationProps) => {
  const mapUrl = `https://maps.google.com/maps?q=${property.coordinates.lat},${property.coordinates.lng}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section className="py-16 bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl  font-bold text-[#1a365d] mb-4">
            Location
          </h2>
          <p className="text-xl text-gray-600">
            Discover the perfect setting of {property.title}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg overflow-hidden p-0">
              <div className="relative h-96 lg:h-[500px]">
                <iframe
                  src={mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                />
              </div>
            </Card>
          </div>

          {/* Location Info */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#1a365d]">
                  <MapPin className="w-5 h-5 text-[#d69e2e]" />
                  Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 font-medium">{property.location}</p>
                <p className="text-sm text-gray-600 mt-2">
                  Coordinates: {property.coordinates.lat}, {property.coordinates.lng}
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#1a365d]">
                  <Navigation className="w-5 h-5 text-[#d69e2e]" />
                  Getting There
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Our concierge team will provide detailed directions and can arrange luxury transfers, 
                  including helicopter service, private car service, or yacht transfers depending on your preference.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyLocation;