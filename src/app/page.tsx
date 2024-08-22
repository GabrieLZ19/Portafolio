import Connect from "@/components/Connect/Connect";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Portfolio from "@/components/Portafolio/Portafolio";
import Press from "@/components/Press/Press";

export default function Home() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <Press />
        <Connect />
      </main>
    </div>
  );
}
