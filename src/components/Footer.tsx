import { Heart } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and tagline */}
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="Kingdom FM Xtra"
              className="h-16 w-auto"
            />
            <div>
              <h3 className="font-heading text-xl font-bold text-foreground">
                Kingdom FM Xtra
              </h3>
              <p className="text-sm text-muted-foreground">
                Spreading the Gospel through Music
              </p>
            </div>
          </div>

          {/* Quick links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a
              href="#home"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#programs"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Programs
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-border" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            © {currentYear} Kingdom FM Xtra. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> for the Kingdom
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
