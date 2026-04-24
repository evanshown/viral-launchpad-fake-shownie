import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Services } from "@/components/Services";
import { Founder } from "@/components/Founder";
import { Testimonials } from "@/components/Testimonials";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-cream text-ink">
      <Nav />
      <Hero />
      <Stats />
      <Services />
      <Founder />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </main>
  );
};

export default Index;
