import BusinessServices from "@/components/BusinessServices";
import CallToActionService from "@/components/CallToActionService";
import Clients from "@/components/Clients";
import CompanyLogoService from "@/components/CompanyLogoService";
import Service from "@/components/Service";
import ServicesGrid from "@/components/ServiceGrid";
import { ServiceHeroAnimation } from "@/components/ServiceHeroAnimation";
import React from "react";

const Services = () => {
  return (
    <>
      <ServiceHeroAnimation />
      <ServicesGrid />
      <Clients />
      <CompanyLogoService />
      <CallToActionService />
    </>
  );
};

export default Services;
