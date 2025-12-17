import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-seaside.jpg";

const Hero = () => {
  const scrollToBooking = () => {
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 gradient-hero" />
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl mb-6 animate-fade-in">
          Your Coastal Sanctuary
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 font-light">
          Experience the tranquility of Ghana's pristine coastline at our exclusive seaside retreat
        </p>
        <Button
          onClick={scrollToBooking}
          size="lg"
          className="bg-primary text-primary-foreground hover:opacity-90 px-8 py-6 text-lg shadow-elevated transition-smooth"
        >
          Reserve Your Stay
        </Button>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
