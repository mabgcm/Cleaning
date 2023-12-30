// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import AboutArea from "./home/About";
import Cta from "./home/Cta";
import HeroSection from "./home/Hero";
import Packages from "./home/Packages";
import Process from "./home/Process";
import ServiceArea from "./home/Service";
import Testimonial from "./home/Testimonials";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutArea />
      <Packages />
      <ServiceArea />
      <Process />
      <Testimonial />
      <Cta />
    </div>
  )
}
