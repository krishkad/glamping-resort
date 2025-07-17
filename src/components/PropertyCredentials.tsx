
import { Award } from 'lucide-react';
import { Badge } from './ui/badge';

interface PropertyCredentialsProps {
  featuredIn: string[];
  badge: string;
}

const PropertyCredentials = ({ featuredIn, badge }: PropertyCredentialsProps) => {
  return (
    <section className="py-8 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Featured In */}
          <div className="flex flex-col items-center md:items-start">
            <p className="text-sm text-gray-600 mb-3 font-medium">As Featured In</p>
            <div className="flex flex-wrap items-center gap-6">
              {featuredIn.map((publication, index) => (
                <div key={index} className="text-sm font-medium text-gray-400 tracking-wider uppercase">
                  {publication}
                </div>
              ))}
            </div>
          </div>
          
          {/* Badge */}
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-[#d69e2e]" />
            <Badge className="bg-[#d69e2e]/10 text-[#d69e2e] hover:bg-[#d69e2e]/20 border-[#d69e2e]/30 px-4 py-2 text-sm font-medium">
              {badge}
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyCredentials;