import { Star, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface DoctorCardProps {
  name: string;
  specialty: string;
  location: string;
  rating: number;
  reviews: number;
  image: string;
  availability: string;
  onBook: () => void;
}

const DoctorCard = ({
  name,
  specialty,
  location,
  rating,
  reviews,
  image,
  availability,
  onBook,
}: DoctorCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -4 }}
      className="bg-card border border-border rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300"
    >
      <div className="flex gap-4">
        {/* Doctor Image */}
        <div className="flex-shrink-0">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden bg-muted">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Doctor Info */}
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-foreground truncate">
            {name}
          </h3>
          <p className="text-sm text-primary font-medium mb-2">{specialty}</p>

          <div className="space-y-1.5 mb-3">
            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium text-foreground">{rating}</span>
              </div>
              <span className="text-xs text-muted-foreground">({reviews} reviews)</span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span className="truncate">{location}</span>
            </div>

            {/* Availability */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>{availability}</span>
            </div>
          </div>

          {/* Book Button */}
          <Button
            onClick={onBook}
            size="sm"
            className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Book Appointment
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default DoctorCard;
