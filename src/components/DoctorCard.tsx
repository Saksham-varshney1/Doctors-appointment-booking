import { Star, Clock, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

interface DoctorCardProps {
  id: number;
  name: string;
  specialty: string;
  rating: number;
  experience: number;
  imageUrl: string;
  location?: string;
  nextAvailable?: string;
}

export function DoctorCard({
  id,
  name,
  specialty,
  rating,
  experience,
  imageUrl,
  location = "New York, NY",
  nextAvailable = "Tomorrow"
}: DoctorCardProps) {
  const navigate = useNavigate();

  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg">
      <CardContent className="p-0">
        <div className="relative">
          <div className="aspect-[4/3] w-full overflow-hidden">
            <img
              src={imageUrl}
              alt={name}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <Badge className="absolute right-2 top-2 bg-green-500">
            Available {nextAvailable}
          </Badge>
        </div>
        <div className="space-y-4 p-6">
          <div>
            <h3 className="text-xl font-semibold tracking-tight">{name}</h3>
            <p className="text-sm text-muted-foreground">{specialty}</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{rating.toFixed(1)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{experience} years</span>
            </div>
          </div>

          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>

          <Button 
            className="w-full gap-2"
            onClick={() => navigate(`/doctor/${id}`)}
          >
            <Calendar className="h-4 w-4" />
            Book Appointment
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}