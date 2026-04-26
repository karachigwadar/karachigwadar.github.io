import TopBar from "@/components/kgil/TopBar";
import Navbar from "@/components/kgil/Navbar";
import HeroSlider from "@/components/kgil/HeroSlider";
import ServicesStrip from "@/components/kgil/ServicesStrip";
import AboutSection from "@/components/kgil/AboutSection";
import GlobalNetwork from "@/components/kgil/GlobalNetwork";
import WhyChooseUs from "@/components/kgil/WhyChooseUs";
import TrackingSection from "@/components/kgil/TrackingSection";
import ContactSection from "@/components/kgil/ContactSection";
import Footer from "@/components/kgil/Footer";
import WhatsAppButton from "@/components/kgil/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <HeroSlider />
        <ServicesStrip />
        <AboutSection />
        <GlobalNetwork />
        <WhyChooseUs />
        <TrackingSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
