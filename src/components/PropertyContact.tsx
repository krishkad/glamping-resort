
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Phone, Mail, MessageCircle, Headphones } from 'lucide-react';

const PropertyContact = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl  font-bold text-[#1a365d] mb-4">
            Luxury Concierge Services
          </h2>
          <p className="text-xl text-gray-600">
            Our dedicated team is available 24/7 to ensure your perfect stay
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-0 shadow-lg hover-lift text-center">
            <CardHeader className="pb-3">
              <div className="mx-auto w-12 h-12 bg-[#d69e2e]/10 rounded-full flex items-center justify-center mb-3">
                <Phone className="w-6 h-6 text-[#d69e2e]" />
              </div>
              <CardTitle className="text-lg font-semibold text-[#1a365d]">Call Direct</CardTitle>
            </CardHeader>
            <CardContent>
              <a href="tel:+1234567890" className="text-[#d69e2e] hover:text-yellow-600 font-medium">
                +1 (234) 567-8900
              </a>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover-lift text-center">
            <CardHeader className="pb-3">
              <div className="mx-auto w-12 h-12 bg-[#d69e2e]/10 rounded-full flex items-center justify-center mb-3">
                <Mail className="w-6 h-6 text-[#d69e2e]" />
              </div>
              <CardTitle className="text-lg font-semibold text-[#1a365d]">Email Us</CardTitle>
            </CardHeader>
            <CardContent>
              <a href="mailto:luxury@royalpalm.com" className="text-[#d69e2e] hover:text-yellow-600 font-medium">
                luxury@royalpalm.com
              </a>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover-lift text-center">
            <CardHeader className="pb-3">
              <div className="mx-auto w-12 h-12 bg-[#d69e2e]/10 rounded-full flex items-center justify-center mb-3">
                <MessageCircle className="w-6 h-6 text-[#d69e2e]" />
              </div>
              <CardTitle className="text-lg font-semibold text-[#1a365d]">WhatsApp</CardTitle>
            </CardHeader>
            <CardContent>
              <a href="https://wa.me/1234567890" className="text-[#d69e2e] hover:text-yellow-600 font-medium">
                Instant Booking
              </a>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover-lift text-center">
            <CardHeader className="pb-3">
              <div className="mx-auto w-12 h-12 bg-[#d69e2e]/10 rounded-full flex items-center justify-center mb-3">
                <Headphones className="w-6 h-6 text-[#d69e2e]" />
              </div>
              <CardTitle className="text-lg font-semibold text-[#1a365d]">VIP Concierge</CardTitle>
            </CardHeader>
            <CardContent>
              <a href="tel:+1234567891" className="text-[#d69e2e] hover:text-yellow-600 font-medium">
                Premium Support
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PropertyContact;