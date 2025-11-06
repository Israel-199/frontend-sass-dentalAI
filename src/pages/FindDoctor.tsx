import { useState } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import DoctorCard from "@/components/DoctorCard";
import AppointmentModal from "@/components/AppointmentModal";

const FindDoctor = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState("");

  // Mock doctors data
  const doctors = [
    {
      id: "1",
      name: "Dr. Sarah Johnson",
      specialty: "General Dentistry",
      location: "New York, NY",
      rating: 4.9,
      reviews: 127,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
      availability: "Available Today",
    },
    {
      id: "2",
      name: "Dr. Michael Chen",
      specialty: "Orthodontics",
      location: "Los Angeles, CA",
      rating: 4.8,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
      availability: "Available Tomorrow",
    },
    {
      id: "3",
      name: "Dr. Emily Rodriguez",
      specialty: "Cosmetic Dentistry",
      location: "Chicago, IL",
      rating: 5.0,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
      availability: "Available Today",
    },
    {
      id: "4",
      name: "Dr. James Wilson",
      specialty: "Dental Implants",
      location: "Houston, TX",
      rating: 4.7,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop",
      availability: "Next Week",
    },
    {
      id: "5",
      name: "Dr. Lisa Anderson",
      specialty: "Pediatric Dentistry",
      location: "Phoenix, AZ",
      rating: 4.9,
      reviews: 178,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      availability: "Available Today",
    },
    {
      id: "6",
      name: "Dr. Robert Taylor",
      specialty: "Endodontics",
      location: "Philadelphia, PA",
      rating: 4.8,
      reviews: 92,
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop",
      availability: "Available Tomorrow",
    },
  ];

  const specialties = [
    "All Specialties",
    "General Dentistry",
    "Orthodontics",
    "Cosmetic Dentistry",
    "Dental Implants",
    "Pediatric Dentistry",
    "Endodontics",
  ];

  const locations = [
    "All Locations",
    "New York, NY",
    "Los Angeles, CA",
    "Chicago, IL",
    "Houston, TX",
    "Phoenix, AZ",
    "Philadelphia, PA",
  ];

  const handleBookAppointment = (doctorName: string) => {
    setSelectedDoctor(doctorName);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Your Perfect{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Dentist
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with experienced dental professionals in your area
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-card border border-border rounded-2xl p-6 shadow-card mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search Input */}
            <div className="md:col-span-2 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search by name or specialty..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Specialty Filter */}
            <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
              <SelectTrigger>
                <SelectValue placeholder="Specialty" />
              </SelectTrigger>
              <SelectContent>
                {specialties.map((specialty) => (
                  <SelectItem key={specialty} value={specialty}>
                    {specialty}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Location Filter */}
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger>
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Filter Button for Mobile */}
          <Button
            variant="outline"
            className="w-full md:hidden mt-4"
          >
            <SlidersHorizontal className="w-4 h-4 mr-2" />
            More Filters
          </Button>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <p className="text-muted-foreground">
            Found <span className="font-semibold text-foreground">{doctors.length}</span> doctors
          </p>
        </motion.div>

        {/* Doctor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <DoctorCard
                {...doctor}
                onBook={() => handleBookAppointment(doctor.name)}
              />
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg">
            Load More Doctors
          </Button>
        </motion.div>
      </div>

      {/* Appointment Modal */}
      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        doctorName={selectedDoctor}
      />
    </div>
  );
};

export default FindDoctor;
