import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Star, Clock, MapPin, Phone, GraduationCap, Award, Stethoscope, Languages, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const MOCK_DOCTORS = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    rating: 4.8,
    experience: 12,
    location: "123 Medical Center, Manhattan, New York",
    phone: "(555) 123-4567",
    imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop",
    education: ["MD from Harvard Medical School", "Residency at Mayo Clinic"],
    languages: ["English", "Spanish"],
    specializations: ["Interventional Cardiology", "Heart Failure Management"],
    awards: ["Best Cardiologist 2022", "Research Excellence Award"],
    about: "Dr. Johnson is a board-certified cardiologist with over 12 years of experience in treating complex cardiac conditions. She specializes in interventional cardiology and heart failure management.",
    insuranceAccepted: ["Blue Cross", "Aetna", "United Healthcare", "Medicare"],
    patientReviews: [
      { rating: 5, comment: "Excellent doctor, very thorough and caring" },
      { rating: 4.5, comment: "Great experience, highly recommend" }
    ]
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Dermatology",
    rating: 4.9,
    experience: 8,
    location: "456 Health Plaza, Los Angeles",
    phone: "(555) 987-6543",
    imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrics",
    rating: 4.7,
    experience: 15,
    location: "789 Children's Hospital, Chicago",
    phone: "(555) 555-5555",
    imageUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop"
  },
];

const TIME_SLOTS = [
  "9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM"
];

export default function DoctorDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>();

  const doctor = MOCK_DOCTORS.find(d => d.id === Number(id));

  if (!doctor) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="p-6">
          <p className="text-center text-muted-foreground">Doctor not found</p>
        </Card>
      </div>
    );
  }

  const handleBooking = () => {
    if (!selectedDate || !selectedTime) {
      toast.error("Please select both date and time");
      return;
    }

    toast.success("Appointment booked successfully!");
    navigate("/");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardContent className="p-6">
          <div className="grid gap-8 md:grid-cols-[2fr,1fr]">
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <img
                  src={doctor.imageUrl}
                  alt={doctor.name}
                  className="h-64 w-full md:w-64 rounded-lg object-cover"
                />
                <div className="space-y-4">
                  <div>
                    <h1 className="text-3xl font-bold">{doctor.name}</h1>
                    <p className="text-lg text-muted-foreground">{doctor.specialty}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <span>{doctor.rating} Rating</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-muted-foreground" />
                      <span>{doctor.experience} years experience</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <span>{doctor.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <span>{doctor.phone}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <section className="space-y-3">
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    <Heart className="h-5 w-5 text-primary" />
                    About
                  </h2>
                  <p className="text-muted-foreground">{doctor.about}</p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    Education
                  </h2>
                  <ul className="list-disc list-inside text-muted-foreground">
                    {doctor.education.map((edu, index) => (
                      <li key={index}>{edu}</li>
                    ))}
                  </ul>
                </section>

                <section className="space-y-3">
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    <Stethoscope className="h-5 w-5 text-primary" />
                    Specializations
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {doctor.specializations.map((spec, index) => (
                      <Badge key={index} variant="secondary">{spec}</Badge>
                    ))}
                  </div>
                </section>

                <section className="space-y-3">
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    <Languages className="h-5 w-5 text-primary" />
                    Languages
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {doctor.languages.map((lang, index) => (
                      <Badge key={index} variant="outline">{lang}</Badge>
                    ))}
                  </div>
                </section>

                <section className="space-y-3">
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    Awards & Recognition
                  </h2>
                  <ul className="list-disc list-inside text-muted-foreground">
                    {doctor.awards.map((award, index) => (
                      <li key={index}>{award}</li>
                    ))}
                  </ul>
                </section>

                <section className="space-y-3">
                  <h2 className="text-xl font-semibold">Insurance Accepted</h2>
                  <div className="flex flex-wrap gap-2">
                    {doctor.insuranceAccepted.map((insurance, index) => (
                      <Badge key={index} variant="secondary">{insurance}</Badge>
                    ))}
                  </div>
                </section>

                <section className="space-y-3">
                  <h2 className="text-xl font-semibold">Patient Reviews</h2>
                  <div className="space-y-4">
                    {doctor.patientReviews.map((review, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{review.rating}</span>
                        </div>
                        <p className="text-muted-foreground">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Book Appointment</h2>
                <div className="space-y-6">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-md border"
                    disabled={(date) => date < new Date()}
                  />
                  
                  <Select onValueChange={setSelectedTime}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      {TIME_SLOTS.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Button 
                    className="w-full"
                    onClick={handleBooking}
                  >
                    Book Appointment
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
