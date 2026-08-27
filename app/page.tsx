// app/page.tsx
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Team from "./components/sections/Team";
import Services from "./components/sections/Services";
import Projects from "./components/sections/Projects";
import certificate from "./components/sections/certificate";
import Certifications from "./components/sections/Certifications";
import Footer from "./components/layout/Footer";
import VisionMission from "./components/sections/VisionMission";
import StrategicDirection from "./components/sections/StrategicDirection";
import HowWeWork from "./components/sections/HowWeWork";
import NigerianContent from "./components/sections/NigerianContent";
import HSE from "./components/sections/HSE";
import OurFuture from "./components/sections/OurFuture";
// import PageLoader from "./components/ui/PageLoader";
import CorporateValues from "./components/sections/CorporateValues";
import ClosingStatement from "./components/sections/ClosingStatement";
import CallToAction from "./components/sections/CallToAction";

export default function Page() {
  return (
    <main className="min-h-screen bg-corporate-cream flex flex-col font-sans">
      {/* <PageLoader />  */}
      {/* <Navbar /> */}
      <Hero />
      <About />
      <VisionMission/>
      <StrategicDirection/>

      <Services />
      <HowWeWork/>
      {/* <NigerianContent/> */}

      {/* <Certifications /> */}
       {/* <Team /> */}
       {/* <HSE/> */}
       <OurFuture/>
       <CorporateValues/>
       <ClosingStatement />
       <CallToAction/>
       {/* <Projects /> */}
      {/* <Certifications /> */}
      {/* <Footer /> */}
    </main>
  );
}
