import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Fish, Pizza, Soup, LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchRestaurantInfo } from "@/lib/api";

const iconMap: Record<string, LucideIcon> = {
  Leaf, Fish, Pizza, Soup
};

const Restaurant = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data: restaurantInfo, isLoading, error } = useQuery({
    queryKey: ["restaurant"],
    queryFn: fetchRestaurantInfo,
  });

  const features = restaurantInfo?.features || [];
  const highlights = restaurantInfo?.highlights || [];

  if (isLoading) return <div className="text-center py-20">Loading restaurant info...</div>;
  if (error) return <div className="text-center py-20 text-red-500">Failed to load restaurant info</div>;

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Simply Good Food</h1>
              <p className="text-lg text-muted-foreground">
                Home cooked food made to order with stunning ocean views
              </p>
            </div>
          </div>
        </section>

        {/* Restaurant Introduction */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-foreground">We Specialize in Vegan Food</h2>
                  <p className="text-muted-foreground mb-4">
                    Our restaurant serves home cooked food made to order.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Our menu has been carefully selected to provide a great choice of salads, meats, fresh seafood and desserts. We also provide a good selection of Vegan, Vegetarian and Gluten free options. Our customers say that we are one of the best restaurants in Elmina.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Enjoy a great menu selection including steak and caramelized onion sandwich, Lentil and potato stew, Pizza, chargrilled fresh seafood, fufu with goat light soup and freshly squeezed juices.
                  </p>
                  <p className="text-muted-foreground font-semibold">
                    With your wellness in mind, all our food contains no MSG. Yes, enjoy the signature Afiki great taste with no regrets!
                  </p>
                </div>
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-elegant">
                  <img
                    src="https://static.wixstatic.com/media/8d38cf_1281cc79a2664c48837f89a080959836~mv2.jpg/v1/crop/x_0,y_290,w_1197,h_1310/fill/w_391,h_428,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/8d38cf_1281cc79a2664c48837f89a080959836~mv2.jpg"
                    alt="Food cooked to order at Afiki beach restaurant"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center text-foreground">What We Offer</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => {
                  const Icon = iconMap[feature.icon] || Leaf;
                  return (
                    <Card key={index} className="border-border bg-card hover:shadow-soft transition-smooth">
                      <CardContent className="p-6 text-center">
                        <Icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                        <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                        <p className="text-muted-foreground text-sm">{feature.description}</p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Menu Highlights */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-elegant">
                  <img
                    src="https://static.wixstatic.com/media/8d38cf_87436e02e37b4fdc915efe110371ef23~mv2.jpg/v1/fill/w_391,h_293,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/8d38cf_87436e02e37b4fdc915efe110371ef23~mv2.jpg"
                    alt="Afiki beach restaurant offers delicious home made food catering to all dietary requirements"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-foreground">Menu Highlights</h2>
                  <p className="text-muted-foreground mb-6">
                    We are foodies at Afiki! We have crafted our menu to give you a great variety of international, vegan, gluten free, fresh seafood and Ghanaian dishes. All lovingly cooked by our great kitchen team.
                  </p>
                  <ul className="space-y-3">
                    {highlights.map((item, index) => (
                      <li key={index} className="flex items-center text-muted-foreground">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Dine with a View</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Enjoy dining at our Seaview Restaurant with stunning ocean views and delicious food. All our meals are made fresh to order with no MSG.
              </p>
              <Link to="/">
                <Button className="bg-primary text-primary-foreground hover:opacity-90">
                  Book Your Table
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Restaurant;
