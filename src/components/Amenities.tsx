import { Coffee, Utensils, Wifi, Palmtree, Waves, Car } from "lucide-react";
import breakfastImage from "@/assets/amenity-breakfast.jpg";

const amenities = [
  {
    icon: Utensils,
    title: "Restaurant & Bar",
    description: "Fresh seafood and traditional Ghanaian cuisine with ocean views",
  },
  {
    icon: Coffee,
    title: "Complimentary Breakfast",
    description: "Start your day with locally sourced tropical fruits and fresh pastries",
  },
  {
    icon: Wifi,
    title: "Free Wi-Fi",
    description: "Stay connected throughout the property",
  },
  {
    icon: Waves,
    title: "Beach Access",
    description: "Private access to pristine sandy beaches",
  },
  {
    icon: Palmtree,
    title: "Garden Tours",
    description: "Explore our lush tropical gardens and local flora",
  },
  {
    icon: Car,
    title: "Airport Transfer",
    description: "Complimentary pickup service from Accra",
  },
];

const Amenities = () => {
  return (
    <section id="amenities" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4 text-foreground">Experience & Amenities</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need for an unforgettable coastal escape
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <div
                key={index}
                className="flex gap-4 p-6 bg-card rounded-lg shadow-soft hover:shadow-elevated transition-smooth"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{amenity.title}</h3>
                  <p className="text-muted-foreground">{amenity.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src={breakfastImage}
              alt="Fresh breakfast spread"
              className="rounded-lg shadow-elevated w-full h-full object-cover"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-3xl font-semibold text-foreground">Culinary Delights</h3>
            <p className="text-muted-foreground text-lg">
              Our on-site restaurant serves a fusion of traditional Ghanaian flavors and
              international cuisine, prepared with fresh, locally sourced ingredients.
            </p>
            <p className="text-muted-foreground text-lg">
              Enjoy your meals al fresco on our seaside terrace, or indulge in a romantic
              beachfront dinner under the stars.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
