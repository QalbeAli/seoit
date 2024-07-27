import PricingPlan from "@/components/PricingPlan";
import React from "react";

const Pricing = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <p className="text-lg font-semibold text-gray-500">
            Ready to start tracking your expenses?
          </p>
          <h1 className="mt-2 text-4xl font-bold text-gray-800">
            Our Pricing Plans
          </h1>
          <p className="mt-2 text-lg text-gray-500">
            Building great customer relationships is just a step away
          </p>
        </div>
      </div>

      <PricingPlan />
    </>
  );
};

export default Pricing;
