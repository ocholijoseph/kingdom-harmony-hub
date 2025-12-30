import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Kingdom FM Xtra | Gospel Music Radio - Live 24/7</title>
        <meta
          name="description"
          content="Kingdom FM Xtra is dedicated to spreading the Gospel of Jesus Christ through uplifting songs, music, and poetic art. Listen live 24/7 to contemporary and traditional gospel music."
        />
        <meta
          name="keywords"
          content="gospel music, christian radio, worship music, praise songs, kingdom fm, online radio, live streaming, gospel radio station"
        />
        <link rel="canonical" href="https://kingdomfmxtra.com" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Kingdom FM Xtra | Gospel Music Radio" />
        <meta
          property="og:description"
          content="Spreading the Gospel through the power of music. Listen live 24/7."
        />
        <meta property="og:site_name" content="Kingdom FM Xtra" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kingdom FM Xtra | Gospel Music Radio" />
        <meta
          name="twitter:description"
          content="Spreading the Gospel through the power of music. Listen live 24/7."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ProgramsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
