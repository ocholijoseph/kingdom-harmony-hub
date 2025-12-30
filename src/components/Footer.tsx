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
            <div className="relative h-16 w-16 rounded-full bg-gradient-to-br from-primary/20 via-background to-primary/10 p-0.5 shadow-[inset_0_1px_2px_rgba(0,0,0,0.3),0_2px_6px_rgba(0,0,0,0.2)]">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-background via-navy-light to-background flex items-center justify-center shadow-[inset_0_-1px_4px_rgba(255,215,0,0.15),inset_0_1px_4px_rgba(0,0,0,0.3)]">
                <img
                  src={logo}
                  alt="Kingdom FM Xtra"
                  className="w-[85%] h-[85%] object-contain mix-blend-luminosity opacity-90 drop-shadow-[0_1px_1px_rgba(255,215,0,0.3)]"
                />
              </div>
            </div>
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
