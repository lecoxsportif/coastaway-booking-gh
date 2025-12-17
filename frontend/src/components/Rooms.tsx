import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Waves, Leaf } from "lucide-react";
import oceanRoom from "@/assets/room-ocean.jpg";
import gardenRoom from "@/assets/room-garden.jpg";
const rooms = [{
  id: 1,
  name: "Odopa",
  description: "Odopa means 'good love' in Twi. Odopa rooms are large with a four poster king-size bed. Odopa1 at $87 a night, boasts the best sea, garden and pool views at Afiki Beach House, plus a balcony overlooking the pool. Ododpa2 at $71 a night, boasts partial sea views and has no balcony. Odopa rooms are on the first floor of Afiki Beach House.",
  price: 71,
  capacity: 3,
  image: oceanRoom,
  icon: Waves,
  features: ["Four Poster King-Size Bed", "Balcony (Odopa1 only)", "Sea, Garden & Pool Views (Odopa2 has partial views)", "Smart TV", "Air Condition", "Refrigerator", "Complimentary Tea/Coffee"]
}, {
  id: 2,
  name: "Ahoto",
  description: "Ahoto means 'to be in a state of peace' in Twi. The Ahoto rooms comes with a queen-size bed and great sea, garden and pool views. At $71 a night, Ahoto1 boasts a Juliet balcony and at $79 a night, Ahoto2, boasts a balcony with great views of the garden, pool and sea. Ahoto is on the first floor of Afiki Beach House.",
  price: 71,
  capacity: 2,
  image: oceanRoom,
  icon: Waves,
  features: ["Queen-Size Bed", "Balcony (Juliet balcony to Ahoto1)", "Sea, Garden & Pool Views", "Smart TV", "Air Condition", "Refrigerator", "Complimentary Tea/Coffee"]
}, {
  id: 3,
  name: "Hwebi",
  description: "Hwebi means 'have a look' in Twi. Hwebi is a tastefully-designed room with village views and the sea beyond. Feel the sea breeze - watch life go by from your Hwebi balcony. Hwebi comes with a king-size bed. This room is on the first floor of Afiki Beach House.",
  price: 69,
  capacity: 3,
  image: gardenRoom,
  icon: Users,
  features: ["King-Size Bed", "Balcony", "Village & Sea Views", "Smart TV", "Air Condition", "Refrigerator", "Complimentary Tea/Coffee"]
}, {
  id: 4,
  name: "Ebusua",
  description: "Ebusua means 'family' in Twi. Families of 5 need not be frustrated anymore! Ebusua comes with a double bed, a sofa bed and a bunk bed. This room is on the first floor of Afiki Beach House.",
  price: 55,
  capacity: 5,
  image: gardenRoom,
  icon: Users,
  features: ["Double Bed", "Sofa Bed", "Bunk Bed", "Sleeps 5", "Digital TV", "Air Condition", "Refrigerator"]
}, {
  id: 5,
  name: "Akyedi",
  description: "Akyedi means 'gift' in Twi. All our Akyedi rooms are on the ground floor of Afiki Beach House. There are 4 Akyedi rooms: Akyedi1 comes with a king-size bed and a sofa bed. Akyedi2 comes with a king-size bed. Akyedi3 comes with a queen-size bed. Akyedi4 comes with a queen-size bed and sea views.",
  price: 45,
  capacity: 3,
  image: gardenRoom,
  icon: Leaf,
  features: ["King-Size Bed (Akyedi 1 + 2)", "Queen-Size Bed (Akyedi 3 + 4)", "Ground Floor", "Air Condition", "Ceiling Fan", "Refrigerator (on request)"]
}];
const Rooms = () => {
  const scrollToBooking = () => {
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="rooms" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4 text-foreground">Our Rooms</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">10 spacious rooms designed with Ghanaian heritage in mind, directly on one of Ghana's cleanest beaches in Elmina, Ankwanda. All our room rates come with breakfast and Wi-Fi included.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map(room => {
          const Icon = room.icon;
          return <Card key={room.id} className="overflow-hidden shadow-soft hover:shadow-elevated transition-smooth border-border">
                <div className="relative h-64 overflow-hidden">
                  <img src={room.image} alt={room.name} className="w-full h-full object-cover transition-smooth hover:scale-110" />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-soft">
                    from ${room.price}/night
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
