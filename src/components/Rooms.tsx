import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Waves, Leaf } from "lucide-react";
import oceanRoom from "@/assets/room-ocean.jpg";
import gardenRoom from "@/assets/room-garden.jpg";

const rooms = [
  {
    id: 1,
    name: "Ocean View Suite",
    description: "Wake up to the sound of waves with panoramic ocean views from your private balcony.",
    price: 120,
    capacity: 2,
    image: oceanRoom,
    icon: Waves,
    features: ["King Bed", "Ocean Balcony", "Air Conditioning", "En-suite Bathroom"],
  },
  {
    id: 2,
    name: "Garden Villa",
    description: "A peaceful retreat surrounded by lush tropical gardens with traditional Ghanaian touches.",
    price: 95,
    capacity: 2,
    image: gardenRoom,
    icon: Leaf,
    features: ["Queen Bed", "Garden View", "Ceiling Fan", "Private Terrace"],
  },
  {
    id: 3,
    name: "Beachfront Cottage",
    description: "Direct beach access with stunning sunset views and authentic coastal charm.",
    price: 150,
    capacity: 4,
    image: oceanRoom,
    icon: Waves,
    features: ["2 Bedrooms", "Beach Access", "Full Kitchen", "Living Area"],
  },
];

const Rooms = () => {
  const scrollToBooking = () => {
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="rooms" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4 text-foreground">Our Accommodations</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Each room is thoughtfully designed to blend comfort with coastal elegance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => {
            const Icon = room.icon;
            return (
              <Card key={room.id} className="overflow-hidden shadow-soft hover:shadow-elevated transition-smooth border-border">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover transition-smooth hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-soft">
                    ${room.price}/night
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-5 h-5 text-secondary" />
                    <h3 className="text-2xl font-semibold text-foreground">{room.name}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{room.description}</p>
                  <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>Up to {room.capacity} guests</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {room.features.map((feature, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={scrollToBooking}
                    className="w-full bg-secondary text-secondary-foreground hover:opacity-90"
                  >
                    Book This Room
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
