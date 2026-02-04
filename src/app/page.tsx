import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import MarketingBudget from "@/components/sections/MarketingBudget";
import WhyPhilip from "@/components/sections/WhyPhilip";
import Services from "@/components/sections/Services"; // 업무영역 (Icons)
import ServiceTypes from "@/components/sections/ServiceTypes"; // 업무 형태 (Cards)
import ServiceDetails from "@/components/sections/ServiceDetails"; // 상세 프로세스
import Reference from "@/components/sections/Reference";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <MarketingBudget />
      <WhyPhilip />
      <Services />
      <ServiceTypes />
      <ServiceDetails />
      <Reference />
      <Contact />
      <Footer />
    </main>
  );
}