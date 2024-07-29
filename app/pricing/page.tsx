"use client";
import FaqDropdown from "@/components/FaqDropdown";
import PricingCard from "@/components/PricingCard";
import PricingPlans from "@/components/PricingPlans";
import Reviews from "@/components/Review";
import React from "react";

const Pricing = () => {
  // const amount = 49.99;
  return (
    <>
      <PricingPlans />
      <PricingCard />
      <Reviews />
      {/* <FAQ /> */}
      <FaqDropdown />
    </>
  );
};

export default Pricing;
