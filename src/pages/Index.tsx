import { useState } from "react";
import { DoctorCard } from "@/components/DoctorCard";
import { SearchFilters } from "@/components/SearchFilters";

const MOCK_DOCTORS = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    rating: 4.8,
    experience: 12,
    imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop",
    location: "Manhattan, NY",
    nextAvailable: "Today"
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Dermatology",
    rating: 4.9,
    experience: 8,
    imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop",
    location: "Brooklyn, NY",
    nextAvailable: "Tomorrow"
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrics",
    rating: 4.7,
    experience: 15,
    imageUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop",
    location: "Queens, NY",
    nextAvailable: "In 2 days"
  },
];

export default function Index() {
  const [searchTerm, setSearchTerm] = useState("");
  const [specialty, setSpecialty] = useState("all");

  const filteredDoctors = MOCK_DOCTORS.filter((doctor) => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = specialty === "all" || doctor.specialty.toLowerCase() === specialty.toLowerCase();
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">Find Your Doctor</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Book appointments with the best doctors in your area
          </p>
        </div>
        
        <div className="grid gap-6 lg:grid-cols-[300px,1fr]">
          <aside className="h-fit lg:sticky lg:top-4">
            <SearchFilters
              onSearchChange={setSearchTerm}
              onSpecialtyChange={setSpecialty}
            />
          </aside>
          
          <main>
            {filteredDoctors.length === 0 ? (
              <div className="rounded-lg border border-dashed p-8 text-center">
                <p className="text-muted-foreground">No doctors found matching your criteria</p>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filteredDoctors.map((doctor) => (
                  <DoctorCard key={doctor.id} {...doctor} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}