import Activities from "./components/Activities";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <Hero />
      <Services />
      <Activities />
      <Contact />
    </div>
  );
}
