"use client";
import React, { useEffect, useState } from "react";

import StripePayment from "@/components/StripePayment";
import { useRouter, useSearchParams } from "next/navigation";
function page() {
  // const router = useRouter();
  const [plan, setPlan] = useState("");
  const [price, setPrice] = useState<number | 0>(0);
  const queryParams = useSearchParams();
  useEffect(() => {
    // const queryParams = new URLSearchParams(router.asPath.split("?")[1]);

    const plan = queryParams.get("plan");
    const price = queryParams.get("price");

    if (plan) setPlan(plan);
    if (price) setPrice(Number(price));
  }, [queryParams]);

  return (
    <div>
      {plan}
      {price}
      <StripePayment plan={plan} price={price} />
    </div>
  );
}

export default page;
