import Activities from "./components/Activities";
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
    </div>
  );
}
