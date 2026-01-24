import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import WhyPhilip from "@/components/sections/WhyPhilip";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Reference from "@/components/sections/Reference";
import Contact from "@/components/sections/Contact";
export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <WhyPhilip />
      <Services />
      <Process />
      <Reference />
      <Contact />
    </main>
  );
}
