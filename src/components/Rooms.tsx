import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Waves, Leaf } from "lucide-react";
import oceanRoom from "@/assets/room-ocean.jpg";
import gardenRoom from "@/assets/room-garden.jpg";

const rooms = [
  {
    id: 1,
    name: "Odopa 1",
    description: "Odopa means good love in Twi. Odopa 1 is a large room with the best sea, garden and pool views in the Afiki House. This room is on the first floor of the Afiki beach house.",
    price: 87,
    capacity: 2,
    image: oceanRoom,
    icon: Waves,
    features: ["Four Poster King Size Bed", "Balcony", "Sea, Garden & Pool Views", "Smart TV", "Air Condition", "Refrigerator", "Complimentary Tea/Coffee"],
  },
  {
    id: 2,
    name: "Ahoto 2",
    description: "Ahoto means to be in a state of peace in Twi. This room comes with a queen bed, balcony and great sea, garden and pool views. This room is on the first floor of the Afiki beach house.",
    price: 79,
    capacity: 2,
    image: oceanRoom,
    icon: Waves,
    features: ["Queen Bed", "Balcony", "Sea, Garden & Pool Views", "Digital TV", "Air Condition", "Refrigerator", "Complimentary Tea/Coffee"],
  },
  {
    id: 3,
    name: "Ahoto 1",
    description: "Ahoto 1 comes with a double bed, Juliet balcony and great sea, garden and pool views. This room is on the first floor of the Afiki beach house.",
    price: 71,
    capacity: 2,
    image: gardenRoom,
    icon: Waves,
    features: ["Double Bed", "Juliet Balcony", "Sea, Garden & Pool Views", "Digital TV", "Air Condition", "Refrigerator", "Complimentary Tea/Coffee"],
  },
  {
    id: 4,
    name: "Odopa 2",
    description: "Odopa 2 is on the first floor of the Afiki beach house. Odopa 2 comes with a four poster king size and a sofa bed. An additional bed can be added to comfortably accommodate 4 people.",
    price: 71,
    capacity: 3,
    image: oceanRoom,
    icon: Waves,
    features: ["Four Poster King Size Bed", "Sofa Bed", "Partial Sea Views", "Digital TV", "Air Condition", "Refrigerator", "Complimentary Tea/Coffee"],
  },
  {
    id: 5,
    name: "Hwebi",
    description: "Hwebi means have a look in Twi. Hwebi is great for families or friends. Hwebi comes with a king bed and bunk bed. This room is on the first floor with village views and the sea beyond.",
    price: 60,
    capacity: 4,
    image: gardenRoom,
    icon: Users,
    features: ["King Size Bed", "Bunk Bed", "Village & Sea Views", "Digital TV", "Air Condition", "Refrigerator"],
  },
  {
    id: 6,
    name: "Ebusua",
    description: "Ebusua means family in Twi. Families of 5 need not be frustrated anymore! Ebusua comes with a double bed, a sofa bed and a bunk bed. This room is on the first floor.",
    price: 55,
    capacity: 5,
    image: gardenRoom,
    icon: Users,
    features: ["Double Bed", "Sofa Bed", "Bunk Bed", "Sleeps 5", "Digital TV", "Air Condition", "Refrigerator"],
  },
  {
    id: 7,
    name: "Akyedi",
    description: "Akyedi means gift in Twi. There are 4 Akyedi rooms on the ground floor with queen/king size bed. Some rooms come with a sofa bed and can sleep 3 persons. Others come with a seating area.",
    price: 45,
    capacity: 2,
    image: gardenRoom,
    icon: Leaf,
    features: ["Queen/King Size Bed", "Ground Floor", "Air Condition", "Ceiling Fan", "Refrigerator (on request)", "Free Wifi"],
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
          <h2 className="text-4xl md:text-5xl mb-4 text-foreground">Our Rooms</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            11 spacious rooms designed with Ghanaian heritage in mind, directly on one of Ghana's cleanest beaches in Elmina, Ankwanda
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
