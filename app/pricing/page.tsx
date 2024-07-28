import CheckOutPage from "@/components/CheckOutPage";
import FAQ from "@/components/FAQ";
import PricingCard from "@/components/PricingCard";
import PricingPlans from "@/components/PricingPlans";
import Reviews from "@/components/Review";
import StripePayment from "@/components/StripePayment";
import React from "react";

const Pricing = () => {
  const amount = 49.99;
  return (
    <>
      <PricingPlans />
      <PricingCard />
      {/* <Reviews /> */}
      <FAQ />
      <StripePayment />
    </>
  );
};

export default Pricing;
