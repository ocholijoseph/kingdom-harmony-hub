import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Contact", href: "#contact" },
];

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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="h-12 w-12 rounded-full bg-gray-100/90 dark:bg-gray-200/95 flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105">
              <img
                src={logo}
                alt="Kingdom FM Xtra"
                className="h-10 w-auto"
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-heading font-bold text-foreground">
                Kingdom FM
              </span>
              <span className="block text-sm text-primary font-medium -mt-1">
                Xtra
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-foreground/80 hover:text-primary transition-colors duration-300 font-medium text-sm uppercase tracking-wide group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#listen"
              className="px-6 py-2.5 gradient-gold text-primary-foreground font-semibold rounded-full shadow-gold hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm uppercase tracking-wide"
            >
              Listen Live
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? "max-h-96 pb-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4 pt-4 border-t border-border">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium py-2 uppercase tracking-wide"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#listen"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 px-6 py-3 gradient-gold text-primary-foreground font-semibold rounded-full shadow-gold text-center uppercase tracking-wide"
            >
              Listen Live
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
