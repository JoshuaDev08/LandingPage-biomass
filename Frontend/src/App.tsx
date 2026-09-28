import "./App.css";
import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Solutions from "./sections/Solution";
import Applications from "./sections/Application";
import WhyChooseUs from "./sections/WhyChooseUs";
import Process from "./sections/OurProcess";
import Sustainability from "./sections/Sustainability";
import Mission from "./sections/OurMission";
import ContactCTA from "./sections/CTAcontact";
import Footer from "./components/layout/Footer";
import AssetPreloader from "./components/assetPreLoader/assetpreloader";
import { Toaster } from "sileo";
import "sileo/styles.css";

const criticalImages: string[] = [];

const heroVideo = "/videos/eco-biomass-hero.mp4";

function App() {
  return (
    <AssetPreloader images={criticalImages} video={heroVideo}>
      <Toaster position="top-right" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Solutions />
        <Applications />
        <WhyChooseUs />
        <Process />
        <Sustainability />
        <Mission />
        <ContactCTA />
      </main>
      <Footer />
    </AssetPreloader>
  );
}

export default App;
