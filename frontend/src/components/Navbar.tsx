import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

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
          <Link to="/">
            <h2 className="text-2xl font-bold text-primary">Afiki Beach House</h2>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {isHomePage ? (
              <>
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
              </>
            ) : (
              <Link to="/" className="text-foreground hover:text-primary transition-smooth">
                Home
              </Link>
            )}
            <Link to="/about-us" className="text-foreground hover:text-primary transition-smooth">
              About Us
            </Link>
            <Link to="/restaurant" className="text-foreground hover:text-primary transition-smooth">
              Restaurant
            </Link>
            <Link to="/afiki-foundation" className="text-foreground hover:text-primary transition-smooth">
              Foundation
            </Link>
            {isHomePage ? (
              <Button
                onClick={() => scrollToSection("booking")}
                className="bg-primary text-primary-foreground hover:opacity-90"
              >
                Book Now
              </Button>
            ) : (
              <Link to="/#booking">
                <Button className="bg-primary text-primary-foreground hover:opacity-90">
                  Book Now
                </Button>
              </Link>
            )}
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
            {isHomePage ? (
              <>
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
              </>
            ) : (
              <Link 
                to="/" 
                className="text-foreground hover:text-primary transition-smooth text-left"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
            )}
            <Link 
              to="/about-us" 
              className="text-foreground hover:text-primary transition-smooth text-left"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/restaurant" 
              className="text-foreground hover:text-primary transition-smooth text-left"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Restaurant
            </Link>
            <Link 
              to="/afiki-foundation" 
              className="text-foreground hover:text-primary transition-smooth text-left"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Foundation
            </Link>
            {isHomePage ? (
              <Button
                onClick={() => scrollToSection("booking")}
                className="bg-primary text-primary-foreground hover:opacity-90 w-full"
              >
                Book Now
              </Button>
            ) : (
              <Link to="/#booking" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="bg-primary text-primary-foreground hover:opacity-90 w-full">
                  Book Now
                </Button>
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
