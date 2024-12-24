import { Search, MapPin, Star, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

interface SearchFiltersProps {
  onSearchChange: (value: string) => void;
  onSpecialtyChange: (value: string) => void;
}

export function SearchFilters({ onSearchChange, onSpecialtyChange }: SearchFiltersProps) {
  return (
    <div className="space-y-6 bg-white p-6 rounded-lg shadow-sm border">
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Find Your Doctor</h2>
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search doctors by name or specialty..."
            className="pl-9"
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-muted-foreground" />
          <h3 className="font-medium">Location</h3>
        </div>
        <Input placeholder="Enter your location" />
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Star className="h-4 w-4 text-muted-foreground" />
          <h3 className="font-medium">Specialty</h3>
        </div>
        <Select onValueChange={onSpecialtyChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Choose specialty" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Specialties</SelectItem>
            <SelectItem value="cardiology">Cardiology</SelectItem>
            <SelectItem value="dermatology">Dermatology</SelectItem>
            <SelectItem value="neurology">Neurology</SelectItem>
            <SelectItem value="pediatrics">Pediatrics</SelectItem>
            <SelectItem value="orthopedics">Orthopedics</SelectItem>
            <SelectItem value="psychiatry">Psychiatry</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <h3 className="font-medium">Experience (years)</h3>
        </div>
        <Slider
          defaultValue={[0]}
          max={30}
          step={1}
          className="w-full"
        />
      </div>
    </div>
  );
}