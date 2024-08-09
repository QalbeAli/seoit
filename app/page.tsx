"use client"
import AcquisitionComponent from "@/components/AcquisitionComponent";
import Brand from "@/components/Brand";
import CallToAction from "@/components/CallToAction";
import CompanyLogos from "@/components/CompanyLogos";
import Competition from "@/components/Competition";
import MainHero from "@/components/MainHero";
import Hero from "@/components/Hero";
import InTouch from "@/components/InTouch";
import LeadGeneration from "@/components/LeadGeneration";
import Marketing from "@/components/Marketing";
import MarketingSection from "@/components/MarketingSection";
import MarketingService from "@/components/MarketingService";
import PerformanceStats from "@/components/PerformaceStats";
import OurProjects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
    <div className="bg-white">
      {/* <AcquisitionComponent /> */}
      {/* <Hero /> */}
      <MainHero />
      <CompanyLogos />
      <Brand />
      <MarketingSection />
      <MarketingService />
      <Competition />
      <LeadGeneration />
      <PerformanceStats />
      <Marketing />
      <CallToAction />
      <OurProjects />
      <InTouch />
      <Testimonials />
    </div>
    </>
  );
}
