import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">About Afiki Beach House</h1>
              <p className="text-lg text-muted-foreground">
                At Afiki, we combine rustic charm, sustainable values and a peaceful coastal experience
              </p>
            </div>
          </div>
        </section>

        {/* Welcome Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-foreground">Welcome to Afiki</h2>
                  <p className="text-muted-foreground mb-4">
                    Our beach house was originally built in 2005 by Apostle Stephen Kofi Baidoo, who sadly passed away in 2019. Afiki began as a personal sanctuary for Stephen's retirement. However, for personal reasons, Stephen was unable to retire to Afiki as he had dreamed and the property gradually fell into disrepair.
                  </p>
                  <p className="text-muted-foreground">
                    With resources stretched thin, his family made the decision to open up Afiki to guests, giving new life to the home and preserving Stephen's legacy.
                  </p>
                </div>
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-elegant">
                  <img 
                    src="https://static.wixstatic.com/media/8d38cf_c89f4d279455481da745dfa8e7644680~mv2.webp/v1/fill/w_450,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/18065154109473914.webp"
                    alt="A family enjoying the refreshing Afiki pool"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="py-16 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-elegant order-2 md:order-1">
                  <img 
                    src="https://static.wixstatic.com/media/8d38cf_2151c3ee22ea494cb3a819389626d7ff~mv2.jpg/v1/fill/w_536,h_509,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/8d38cf_2151c3ee22ea494cb3a819389626d7ff~mv2.jpg"
                    alt="The Afiki team look forward to welcome their guests"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h2 className="text-3xl font-bold mb-6 text-foreground">Our Mission and Vision</h2>
                  <p className="text-muted-foreground mb-6">
                    What began as a practical step to maintain the Afiki building has blossomed into a broader purpose. Today, Afiki beach house is not only a place for guests to relax and experience the natural beauty of Ankwanda, near Elmina, but also a source of support for our local community through Afiki Foundation.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    With each guest's stay, our mission to uplift Ankwanda and its people grows, helping sustain our unique environment and heritage for future generations.
                  </p>
                  <Link to="/afiki-foundation">
                    <Button className="bg-primary text-primary-foreground hover:opacity-90">
                      Learn About Afiki Foundation
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Village */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-foreground">Our Village, Ankwanda</h2>
                  <p className="text-muted-foreground mb-4">
                    Our charming fishing village, near Elmina, is known for its laid-back ambiance, friendly locals, and natural beauty. Fringed by golden sands, blue skies, and coconut groves, this serene spot also attracts occasional sea turtles that nest along the shore.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    You may find fishermen mending their nets or families gathering on the sand and funerals which are vibrant, music-filled gatherings to honor loved ones.
                  </p>
                  <p className="text-muted-foreground italic">
                    Ankwanda means "if you do not visit, you will not sleep." As you stroll our quiet beaches, swim in the open sea, or rest under a coconut tree, it's easy to see why our ancestors gave our village this name.
                  </p>
                </div>
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-elegant">
                  <img 
                    src="https://static.wixstatic.com/media/8d38cf_8baff7d484e249a98e95b93c406bf0c5~mv2.jpeg/v1/fill/w_450,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202024-11-29%20at%202_55_58%20PM.jpeg"
                    alt="Beach life, boat life, village life. Ankwanda, Elmina, near Cape Coast"
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
              <h2 className="text-3xl font-bold mb-6 text-foreground">Experience Afiki</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Here, you'll unwind and recharge, surrounded by natural beauty and the warmth of our fishing village. Let us share with you the tranquility of Ghana's coast and the community that makes Afiki so special.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/">
                  <Button className="bg-primary text-primary-foreground hover:opacity-90">
                    Book Your Stay
                  </Button>
                </Link>
                <Link to="/restaurant">
                  <Button variant="outline">
                    View Restaurant
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

export default AboutUs;
