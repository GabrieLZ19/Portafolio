import Connect from "@/components/Connect/Connect";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Portfolio from "@/components/Portafolio/Portafolio";
import Technology from "@/components/Technology/Technology";

export default function Home() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Header />
      <main>
        <section id="Hero">
          <Hero />
        </section>
        <section id="Portfolio">
          <Portfolio />
        </section>
        <section id="Technology">
          <Technology />
        </section>
        <section id="Contact">
          <Connect />
        </section>
      </main>
    </div>
  );
}
