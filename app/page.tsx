import AcquisitionComponent from "@/components/AcquisitionComponent";
import Brand from "@/components/Brand";
import CompanyLogos from "@/components/CompanyLogos";
import MarketingSection from "@/components/MarketingSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div>
      <AcquisitionComponent />
      <CompanyLogos />
      <Brand />
      <MarketingSection />
    </div>
    </>
  );
}
