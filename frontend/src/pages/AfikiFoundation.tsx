import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Recycle, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const AfikiFoundation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      icon: Recycle,
      title: "Community Monthly Beach Cleaning"
    },
    {
      icon: GraduationCap,
      title: "School Sponsorship"
    },
    {
      icon: Users,
      title: "School Supplies for Local Schools"
    },
    {
      icon: Heart,
      title: "Community Public Toilet Facilities"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Afiki Foundation</h1>
              <p className="text-lg text-muted-foreground">
                To whom much is given, much is expected
              </p>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground text-center mb-8 leading-relaxed">
                Afiki Foundation, is a non profit initiative by Afiki. Apostle Baidoo, who built Afiki, lived by the principle - to whom much is given, much is expected. Giving back to our community not only brings us great joy; it is our mission and purpose.
              </p>
              <p className="text-lg text-muted-foreground text-center leading-relaxed">
                When you join us at Afiki to enjoy a unique authentic village beach experience, you are contributing in our mission to be change makers. Read below how your visit to Afiki is helping empower an entire community to achieve sustainable change.
              </p>
            </div>
          </div>
        </section>

        {/* Eco Period Partnership */}
        <section className="py-16 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-foreground">Partnership with Eco Period</h2>
                  <p className="text-muted-foreground mb-4">
                    We partner with Eco Period, a Ghanaian non-profit tackling period poverty. Eco Pads are sustainable and can be used for at least a year reducing the number of waste sanitary towels entering landfills.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    The Eco Pads are eco friendly. However, the icing on the cake is that by providing them to women and girls in our community, Afiki Foundation is ensuring that no woman or girl has to pass their menstrual cycle with shame.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Afiki is encouraging customers to purchase Eco Period sanitary pads, either onsite or on our website. The Eco Period sanitary towels sold at Afiki include 4 reusable pads and a pouch.
                  </p>
                  <p className="text-muted-foreground">
                    Afiki sells the pads, purchased by customers, to girls and women in our community for a nominal amount. Pads are given for free to those who cannot afford to pay the nominal amount.
                  </p>
                </div>
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-elegant">
                  <img 
                    src="https://static.wixstatic.com/media/8d38cf_216812039fc9410f85c2e8671682b8fc~mv2.jpeg/v1/fill/w_494,h_600,al_c,q_80,enc_avif,quality_auto/8d38cf_216812039fc9410f85c2e8671682b8fc~mv2.jpeg"
                    alt="Eco Period African pads sold at Afiki"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sustainability Approach */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-elegant order-2 md:order-1">
                  <img 
                    src="https://static.wixstatic.com/media/8d38cf_fd22537e5eb94313a9c1fb7fc5b49486~mv2.jpg/v1/fill/w_494,h_369,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Eco%20Period.jpg"
                    alt="Eco Period Africa Sanitary Pads"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h2 className="text-3xl font-bold mb-6 text-foreground">Our Approach to Sustainability</h2>
                  <p className="text-muted-foreground mb-4">
                    Why do we sell the sanitary pads purchased by customers to women in our community instead of giving them for free?
                  </p>
                  <p className="text-muted-foreground mb-6">
                    At Afiki, we know that handouts make people reliant on the giver. By selling the pads at a nominal price, Afiki fosters sustainability and pride in our community.
                  </p>
                  <div className="bg-primary/10 p-6 rounded-lg">
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">100%</strong> of all profits from sales of Eco Periods Pads and <strong className="text-foreground">10%</strong> of profits from all Activities goes to the Afiki Foundation Fund.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Foundation Projects */}
        <section className="py-16 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center text-foreground">Foundation Projects</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
                The Afiki Foundation Fund is used for projects that make a real difference in our community
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {projects.map((project, index) => (
                  <Card key={index} className="border-border bg-card hover:shadow-soft transition-smooth">
                    <CardContent className="p-6 text-center">
                      <project.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                      <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <p className="text-center text-lg text-muted-foreground italic">
                As Afiki Foundation grows, we will do more and more. Together with our customers we are being the difference.
              </p>
            </div>
          </div>
        </section>

        {/* Community Impact */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-foreground">Community Impact</h2>
                  <p className="text-muted-foreground mb-4">
                    The Local Experience has been designed to empower local people by enabling them to use their skills to earn money.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Every activity you participate in, every eco-friendly product you purchase, and every night you stay at Afiki contributes directly to sustainable development in Ankwanda.
                  </p>
                  <p className="text-lg font-semibold text-foreground">
                    By visiting us, you are being the difference!
                  </p>
                </div>
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-elegant">
                  <img 
                    src="https://static.wixstatic.com/media/482b88_bf65317c4870481d92bcf77b5b450cda~mv2.jpg/v1/fill/w_496,h_661,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Time%20with%20community%20kids.jpg"
                    alt="Community kids invited to Afiki to enjoy a party"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Be Part of the Change</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Your stay at Afiki Beach House directly supports our community. Together, we're creating sustainable change in Ankwanda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/">
                  <Button className="bg-primary text-primary-foreground hover:opacity-90">
                    Book Your Stay
                  </Button>
                </Link>
                <Link to="/about-us">
                  <Button variant="outline">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AfikiFoundation;
