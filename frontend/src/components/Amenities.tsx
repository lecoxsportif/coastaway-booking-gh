import { TreePalm, Waves, Handshake, Paintbrush, Drum, Ship, Utensils, Slack, PiggyBank } from "lucide-react";
import breakfastImage from "@/assets/amenity-breakfast.jpg";
import { useQuery } from "@tanstack/react-query";
import { fetchAmenities } from "@/lib/api";

const iconMap: Record<string, any> = {
  TreePalm, Waves, Handshake, Paintbrush, Drum, Ship, Utensils, Slack, PiggyBank
};

const Amenities = () => {
  const { data: amenities, isLoading, error } = useQuery({
    queryKey: ["amenities"],
    queryFn: fetchAmenities,
  });

  if (isLoading) return <div className="text-center py-20">Loading amenities...</div>;
  if (error) return <div className="text-center py-20 text-red-500">Failed to load amenities</div>;

  return <section id="amenities" className="py-20 bg-muted/30">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl mb-4 text-foreground">See & Do at Afiki</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Discover adventure, relaxation, and unforgettable experiences. Best of all, 10% of profits from all activities go towards Afiki Foundation.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {amenities?.map((amenity, index) => {
          const Icon = iconMap[amenity.icon] || TreePalm;
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

      <div className="grid md:grid-cols-2 gap-8 items-start">
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

          <div className="flex gap-4 p-6 bg-card rounded-lg shadow-soft">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <PiggyBank className="w-6 h-6 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Ancestors Tour</h3>
              <p className="text-muted-foreground">Last Bath River (Assin Manso). Walk where our Ancestors walked and feel the waters they had their last bath in. Includes lunch at Adom Villa in Assin Damang.</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl text-foreground">Local Experiences</h2>

          <p className="text-muted-foreground text-lg">
            Immerse yourself in authentic Ghanaian traditions with our unique local experiences led by local people, giving them the opportunity to use their skills to provide for themselves.
          </p>
          <p className="text-muted-foreground text-lg">From village tours to creating your own batik or experience one of our local tours, discover the rich cultural heritage of Ghana's Central Region.</p>

          <div className="flex gap-4 p-6 bg-card rounded-lg shadow-soft">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <PiggyBank className="w-6 h-6 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Castles & Town Tour</h3>
              <p className="text-muted-foreground">Visit Unesco World Heritage Sites, Cape Coast Castle and Elmina Castle. It is a heavy history but one we must know to never repeat again. Tour includes Cape Coast and Elmina Township.</p>
            </div>
          </div>

          <div className="flex gap-4 p-6 bg-card rounded-lg shadow-soft">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <PiggyBank className="w-6 h-6 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Central Region Classic</h3>
              <p className="text-muted-foreground">Visit Kakum National Park, Cape Coast and Elmina Castles. Includes a free stop over at Hans Cottage to visit their gentle crocodiles. We recommend lunch at Hans Cottage at your cost.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>;
};
export default Amenities;
