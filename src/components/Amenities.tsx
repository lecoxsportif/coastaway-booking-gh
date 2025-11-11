import { TreePalm, Waves, Handshake, Paintbrush, Drum, Ship, Utensils, Slack, PiggyBank } from "lucide-react";
import breakfastImage from "@/assets/amenity-breakfast.jpg";
const amenities = [{
  icon: TreePalm,
  title: "Beach Access",
  description: "Direct access to pristine beach with soft sand and Atlantic Ocean waters"
}, {
  icon: Waves,
  title: "Swimming Pool",
  description: "Designed by Tera Garden Design, surrounded by vibrant flowers and butterflies"
}, {
  icon: Handshake,
  title: "Full Body Massage",
  description: "Head-to-toe massage in a tranquil setting to relieve stress and tension"
}, {
  icon: Paintbrush,
  title: "Sip and Paint",
  description: "Create beautiful masterpieces with our resident artist, Mikanda"
}, {
  icon: Drum,
  title: "African Drumming & Dancing",
  description: "Drumming and dancing are deeply embedded in the Ghanaian tradition. Learn about the talking drum and its corresponding dance. This isn’t just a drumming lesson – it’s an immersion into history and culture. A lived experience like no other."
}, {
  icon: Ship,
  title: "Local Boat Rides",
  description: "Join local fishermen for a thrilling boat ride across the sea"
}, {
  icon: Utensils,
  title: "Local Cooking",
  description: "Our kitchen team will guide you in making your favourite Ghanaian dish then enjoy eating your creation."
}, {
  icon: PiggyBank,
  title: "Horse Riding",
  description: "Nothing quite like a beach horse ride!"
}];
const Amenities = () => {
  return <section id="amenities" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4 text-foreground">See & Do at Afiki</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Discover adventure, relaxation, and unforgettable experiences. Best of all, 10% of profits from all activities go towards Afiki Foundation.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {amenities.map((amenity, index) => {
          const Icon = amenity.icon;
          return <div key={index} className="flex gap-4 p-6 bg-card rounded-lg shadow-soft hover:shadow-elevated transition-smooth">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{amenity.title}</h3>
                  <p className="text-muted-foreground">{amenity.description}</p>
                </div>
              </div>;
        })}
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <img src={breakfastImage} alt="Fresh breakfast spread" className="rounded-lg shadow-elevated w-full h-full object-cover" />
            
            <div className="flex gap-4 p-6 bg-card rounded-lg shadow-soft">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Slack className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Batik Making</h3>
                <p className="text-muted-foreground">Create your own batik art. Fun activity. Take home your creation!</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl mb-4 text-foreground">Local Experiences</h2>
            <p className="text-muted-foreground text-lg">
              Immerse yourself in authentic Ghanaian traditions with our unique local experiences led by local people, giving them the opportunity to use their skills to provide for themselves.
            </p>
            <p className="text-muted-foreground text-lg">From village tours to creating your own batik or experience one of our local tours, discover the rich cultural heritage of Ghana's Central Region.</p>
          </div>
        </div>
      </div>
    </section>;
};
export default Amenities;