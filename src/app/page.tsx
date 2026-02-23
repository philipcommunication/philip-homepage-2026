import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import JourneyAnalysis from "@/components/sections/JourneyAnalysis";
import MarketingBudget from "@/components/sections/MarketingBudget";
import WhyPhilip from "@/components/sections/WhyPhilip";
import ServiceJourney from "@/components/sections/ServiceJourney";
import Services from "@/components/sections/Services"; // 업무영역 (Icons)
import HowWeImproved from "@/components/sections/HowWeImproved";
import ServiceTypes from "@/components/sections/ServiceTypes"; // 나에게 맞는 서비스
import Reference from "@/components/sections/Reference";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <JourneyAnalysis />
      <MarketingBudget />
      <Services />
      <HowWeImproved />
      <WhyPhilip />
      <ServiceJourney />
      <ServiceTypes />
      <Reference />
      <Contact />
      <Footer />
    </main>
  );
}