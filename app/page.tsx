// app/page.tsx
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Team from "./components/sections/Team";
import Services from "./components/sections/Services";
import Projects from "./components/sections/Projects"; // <-- Import it here
import HSE from "./components/sections/HSE";
import Certifications from "./components/sections/Certifications";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-corporate-cream flex flex-col font-sans">
      <Navbar />
      <Hero />
      <About />
      <Team />
      <Services />
      <Projects />  
      <HSE />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}