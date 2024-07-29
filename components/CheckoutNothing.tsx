import React from "react";

const CheckoutNothing: React.FC = () => {
  return (
    <div className="flex justify-center min-h-screen items-center bg-gray-100">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-8 flex">
        <div className="w-1/2 p-4">
          <button className="mb-4">
            <img src="/back-icon.png" alt="Back" className="h-6 w-6" />
          </button>
          <h2 className="text-2xl font-bold">Subscribe to Subscription Box</h2>
          <p className="text-4xl font-bold mt-4">
            $99.00 <span className="text-xl font-medium">per month</span>
          </p>
        </div>
        <div className="w-1/2 p-4">
          <button className="w-full bg-black text-white rounded-md py-2 font-bold flex items-center justify-center mb-4">
            <img
              src="/google-pay-logo.png"
              alt="Google Pay"
              className="h-6 w-6 mr-2"
            />
            Pay
          </button>
          <p className="text-center text-gray-500 mb-4">Or pay with card</p>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="border rounded-md p-2 w-full"
            />
            <input
              type="text"
              placeholder="1234 1234 1234 1234"
              className="border rounded-md p-2 w-full"
            />
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="MM / YY"
                className="border rounded-md p-2 w-1/2"
              />
              <input
                type="text"
                placeholder="CVC"
                className="border rounded-md p-2 w-1/2"
              />
            </div>
            <input
              type="text"
              placeholder="Name on card"
              className="border rounded-md p-2 w-full"
            />
            <select
              className="border rounded-md p-2 w-full"
              defaultValue="United States"
            >
              <option value="United States">United States</option>
              {/* Add more countries as needed */}
            </select>
            <input
              type="text"
              placeholder="ZIP"
              className="border rounded-md p-2 w-full"
            />
            <button className="bg-blue-500 text-white rounded-md py-2 w-full font-bold">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutNothing;
