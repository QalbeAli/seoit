"use client";
import CheckoutPage from "@/components/CheckOutPage";
import convertToSubcurrency from "@/app/lib/convertToSubcurrency";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function Home({ plan, price }: { plan: string; price: number }) {
  const amount = convertToSubcurrency(price);

  return (
    <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-blue-500 to-purple-500">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2">SEOIT</h1>
        <h2 className="text-2xl">
          has requested
          <span className="font-bold"> ${price}</span>
        </h2>
      </div>

      {amount > 0 && (
        <Elements
          stripe={stripePromise}
          options={{
            mode: "payment",
            amount: amount,
            currency: "usd",
          }}
        >
          <CheckoutPage amount={price} />
        </Elements>
      )}
    </main>
  );
}
