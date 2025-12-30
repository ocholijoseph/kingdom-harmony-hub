import { Music, Heart, Globe, Users } from "lucide-react";

const features = [
  {
    icon: Music,
    title: "Gospel Music",
    description:
      "Experience uplifting contemporary and traditional gospel music that speaks to your soul.",
  },
  {
    icon: Heart,
    title: "Faith & Inspiration",
    description:
      "Daily devotionals, prayers, and inspirational messages to strengthen your faith journey.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Broadcasting the Good News to listeners around the world, 24 hours a day.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Join a growing family of believers united through the power of worship and praise.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-card/50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium uppercase tracking-wider mb-4">
            About Us
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
            More Than Just <span className="text-gradient-gold">Radio</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Kingdom FM Xtra is a ministry dedicated to spreading the love of
            Christ through the universal language of music. We believe in the
            transformative power of gospel music to heal, inspire, and bring
            hope to every listener.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-primary/5 to-transparent" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl gradient-gold flex items-center justify-center mb-4 shadow-gold group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mission statement */}
        <div className="mt-20 text-center">
          <div className="inline-block p-8 md:p-12 bg-gradient-to-br from-card to-muted/30 border border-border rounded-3xl max-w-3xl">
            <blockquote className="font-heading text-2xl md:text-3xl text-foreground italic leading-relaxed">
              "Let everything that has breath praise the Lord."
            </blockquote>
            <cite className="block mt-4 text-primary font-medium">
              — Psalm 150:6
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
