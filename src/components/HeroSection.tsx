import AudioPlayer from "./AudioPlayer";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background layers */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(40,96%,53%,0.08)_0%,_transparent_50%)]" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      {/* Floating shapes */}
      <div className="absolute top-1/4 left-[10%] w-4 h-4 bg-primary/40 rounded-full animate-float" />
      <div className="absolute top-1/3 right-[15%] w-3 h-3 bg-secondary/40 rounded-full animate-float animation-delay-200" />
      <div className="absolute bottom-1/4 left-[20%] w-2 h-2 bg-accent/40 rounded-full animate-float animation-delay-400" />

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Logo animation */}
          <div className="mb-8 animate-fade-in-up">
            <img
              src={logo}
              alt="Kingdom FM Xtra"
              className="w-32 h-32 md:w-40 md:h-40 object-contain animate-float"
            />
          </div>

          {/* Main heading */}
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up animation-delay-100">
            <span className="text-foreground">Welcome to</span>
            <br />
            <span className="text-gradient-gold">Kingdom FM Xtra</span>
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-4 animate-fade-in-up animation-delay-200">
            Spreading the Gospel of Jesus Christ through the power of music,
            songs, and poetic art — 24 hours a day, 7 days a week.
          </p>

          {/* Decorative divider */}
          <div className="flex items-center gap-4 mb-10 animate-fade-in-up animation-delay-300">
            <div className="w-16 h-px gradient-gold" />
            <span className="text-primary text-sm uppercase tracking-[0.3em]">
              Listen Live
            </span>
            <div className="w-16 h-px gradient-gold" />
          </div>

          {/* Audio Player */}
          <div
            id="listen"
            className="w-full animate-fade-in-up animation-delay-400"
          >
            <AudioPlayer />
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 animate-bounce">
            <a
              href="#about"
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-xs uppercase tracking-widest">
                Discover More
              </span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
