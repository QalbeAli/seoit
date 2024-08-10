import React from "react";
import StripePayment from "@/components/StripePayment";
const PricingPlans: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center pt-40 bg-gray-50 ">
      <h2 className="text-xl text-center font-semibold text-sil ">
        Ready to start tracking your expenses?
      </h2>
      <h1 className="text-4xl font-bold text-dark py-8 ">
        Our Pricing Plans
      </h1>
      <p className="text-lightDark text-center">
        Building great customer relationships is just a step away
      </p>
    </section>
  );
};

export default PricingPlans;
