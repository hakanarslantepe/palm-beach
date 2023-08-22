import HomePage from "./components/HomePage";
import About from "./components/About";
import Services from "./components/Services";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="max-w-[1456px] mx-auto">
      <HomePage />
      <About />
      <Services />
      <Events />
      <Gallery />
      <Contact />
    </div>
  );
}
