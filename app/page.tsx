import AcquisitionComponent from "@/components/AcquisitionComponent";
import Brand from "@/components/Brand";
import CallToAction from "@/components/CallToAction";
import CheckoutNothing from "@/components/CheckoutNothing";
import CompanyLogos from "@/components/CompanyLogos";
import Competition from "@/components/Competition";
import InTouch from "@/components/InTouch";
import LeadGeneration from "@/components/LeadGeneration";
import Marketing from "@/components/Marketing";
import MarketingSection from "@/components/MarketingSection";
import MarketingService from "@/components/MarketingService";
import PerformanceStats from "@/components/PerformaceStats";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="bg-white">
      <AcquisitionComponent />
      <CompanyLogos />
      <Brand />
      <MarketingSection />
      <MarketingService />
      <Competition />
      <LeadGeneration />
      <PerformanceStats />
      <Marketing />
      <CallToAction />
      <Testimonials />
      <InTouch />
      
    </div>
    </>
  );
}
