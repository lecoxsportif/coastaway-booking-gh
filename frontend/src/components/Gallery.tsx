import heroImage from "@/assets/hero-seaside.jpg";
import oceanRoom from "@/assets/room-ocean.jpg";
import gardenRoom from "@/assets/room-garden.jpg";
import breakfastImage from "@/assets/amenity-breakfast.jpg";

const galleryImages = [
  { src: heroImage, alt: "Seaside sunset view" },
  { src: oceanRoom, alt: "Ocean view room interior" },
  { src: gardenRoom, alt: "Garden suite" },
  { src: breakfastImage, alt: "Fresh breakfast spread" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4 text-foreground">Gallery</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A glimpse into your coastal paradise
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-soft hover:shadow-elevated transition-smooth aspect-square group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-smooth group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-smooth" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
