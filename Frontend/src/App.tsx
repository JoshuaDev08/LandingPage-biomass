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

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
