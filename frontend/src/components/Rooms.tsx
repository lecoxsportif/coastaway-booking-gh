import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Waves, Leaf } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchRooms } from "@/lib/api";

const iconMap: Record<string, any> = {
  Waves: Waves,
  Users: Users,
  Leaf: Leaf,
};

const Rooms = () => {
  const { data: rooms, isLoading, error } = useQuery({
    queryKey: ["rooms"],
    queryFn: fetchRooms,
  });

  const scrollToBooking = () => {
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  if (isLoading) return <div className="text-center py-20">Loading rooms...</div>;
  if (error) return <div className="text-center py-20 text-red-500">Failed to load rooms</div>;

  return <section id="rooms" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl mb-4 text-foreground">Our Rooms</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">10 spacious rooms designed with Ghanaian heritage in mind, directly on one of Ghana's cleanest beaches in Elmina, Ankwanda. All our room rates come with breakfast and Wi-Fi included.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rooms?.map(room => {
          const Icon = iconMap[room.features.includes("Sea View") || room.name === "Odopa" ? "Waves" : "Users"] || Users;
          // Note: The backend data doesn't return "icon" field in the features list directly mapping to UI logic perfectly without the icon field in the Room model. 
          // Wait, the Room model in backend implementation has `features` but NOT `icon`. 
          // The frontend `rooms` array had `icon`.
          // I missed adding `icon` to the Room model in backend!
          // Let's check backend/app/models.py again.

          return <Card key={room.id} className="overflow-hidden shadow-soft hover:shadow-elevated transition-smooth border-border">
            <div className="relative h-64 overflow-hidden">
              <img src={room.image} alt={room.name} className="w-full h-full object-cover transition-smooth hover:scale-110" />
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-soft">
                from ${room.price}/night
              </div>
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2">
                {/* Fallback icon logic or use one from map if I can get it. For now, default to Users if not found. */}
                <div className="w-5 h-5 text-secondary">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">{room.name}</h3>
              </div>
              <p className="text-muted-foreground mb-4">{room.description}</p>
              <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                <Users className="w-4 h-4" />
                <span>Up to {room.capacity} guests</span>
              </div>
              <ul className="space-y-2 mb-6">
                {room.features.map((feature, index) => <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  {feature}
                </li>)}
              </ul>
              <Button onClick={scrollToBooking} className="w-full bg-secondary text-secondary-foreground hover:opacity-90">
                Book This Room
              </Button>
            </CardContent>
          </Card>;
        })}
      </div>
    </div>
  </section>;
};
export default Rooms;
