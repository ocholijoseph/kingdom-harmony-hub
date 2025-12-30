import { Clock, Mic2, Music4, BookOpen, Heart, Sparkles } from "lucide-react";

const programs = [
  {
    icon: Music4,
    title: "Morning Praise",
    time: "6:00 AM - 9:00 AM",
    description: "Start your day with uplifting worship songs and morning devotions.",
    color: "from-gold to-gold-dark",
  },
  {
    icon: BookOpen,
    title: "Word Hour",
    time: "12:00 PM - 1:00 PM",
    description: "Midday teachings and Bible study sessions with guest pastors.",
    color: "from-secondary to-teal-dark",
  },
  {
    icon: Mic2,
    title: "Gospel Talk",
    time: "3:00 PM - 5:00 PM",
    description: "Engaging discussions on faith, life, and current topics.",
    color: "from-accent to-royal-purple",
  },
  {
    icon: Heart,
    title: "Evening Worship",
    time: "7:00 PM - 9:00 PM",
    description: "Wind down with powerful contemporary gospel music.",
    color: "from-gold to-gold-dark",
  },
  {
    icon: Sparkles,
    title: "Night Prayers",
    time: "9:00 PM - 10:00 PM",
    description: "End your day with peaceful prayers and reflective music.",
    color: "from-secondary to-teal-dark",
  },
  {
    icon: Music4,
    title: "Weekend Special",
    time: "Saturdays & Sundays",
    description: "Extended worship sessions and special guest performances.",
    color: "from-accent to-royal-purple",
  },
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-royal" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-secondary/10 border border-secondary/20 rounded-full text-secondary text-sm font-medium uppercase tracking-wider mb-4">
            Our Programs
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
            What's <span className="text-gradient-gold">On Air</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tune in to our diverse lineup of programs designed to minister to
            every aspect of your spiritual life.
          </p>
        </div>

        {/* Programs grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <div
              key={program.title}
              className="group relative bg-card/80 backdrop-blur-sm border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Top gradient accent */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${program.color}`}
              />

              <div className="p-6">
                {/* Icon and time */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <program.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span className="text-xs">{program.time}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {program.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {program.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Want to request a song or send prayer requests?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 gradient-gold text-primary-foreground font-semibold rounded-full shadow-gold hover:shadow-lg transition-all duration-300 hover:scale-105 uppercase tracking-wide text-sm"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
