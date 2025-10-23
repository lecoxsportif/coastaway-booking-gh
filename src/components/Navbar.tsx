import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled ? "bg-card/95 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-primary">Seaside Haven</h2>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("rooms")}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Rooms
            </button>
            <button
              onClick={() => scrollToSection("amenities")}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Amenities
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection("booking")}
              className="bg-primary text-primary-foreground hover:opacity-90"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("rooms")}
              className="text-foreground hover:text-primary transition-smooth text-left"
            >
              Rooms
            </button>
            <button
              onClick={() => scrollToSection("amenities")}
              className="text-foreground hover:text-primary transition-smooth text-left"
            >
              Amenities
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-foreground hover:text-primary transition-smooth text-left"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-smooth text-left"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection("booking")}
              className="bg-primary text-primary-foreground hover:opacity-90 w-full"
            >
              Book Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
