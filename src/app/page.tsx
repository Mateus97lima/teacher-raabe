import Navbar from "@/components/Nav/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Etapas from "@/components/Etapas/Etapas";
import Services  from "@/components/Services/Services";
import Testimonials from "@/components/Feedback/Testimonials";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Etapas />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
