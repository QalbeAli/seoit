import Image from "next/image";
import React from "react";

const HappyClient = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full">
        <div className="rounded-lg overflow-hidden shadow-lg bg-white">
          <Image
            src="/your-image.png" // Replace with your image path
            alt="Meeting Image"
            width={800}
            height={400}
            className="object-cover w-full h-64"
          />
        </div>
      </div>
      <div className="max-w-4xl mx-auto my-8 p-6 bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div className="w-1/2">
          <h2 className="text-2xl font-semibold text-gray-800">
            Join our happy community of clients
          </h2>
        </div>
        <div className="w-1/2">
          <p className="text-gray-600">
            Mel tota quidam senserit et ut tritani platonem est. In a
            professional context it often happens that private or corporate
            clients order a publication to be made and presented with the actual
            content still not being ready.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-6 mb-6">
        <Image src="/airbnb.svg" alt="Airbnb" width={100} height={40} />
        <Image src="/aws.svg" alt="AWS" width={100} height={40} />
        <Image src="/shopify.svg" alt="Shopify" width={100} height={40} />
        <Image src="/confluence.svg" alt="Confluence" width={100} height={40} />
        <Image src="/linkedin.svg" alt="LinkedIn" width={100} height={40} />
      </div>
      <div className="max-w-4xl mx-auto my-8 p-6 bg-white rounded-xl shadow-md flex items-center justify-between space-x-4">
        <div>
          <h3 className="text-lg font-semibold text-blue-600">
            Helping brands to grow and attract more customers
          </h3>
          <p className="text-gray-600 mt-2">
            We help our clients achieve tangible, high-impact results.
          </p>
        </div>
        <button className="bg-indigo-100 text-indigo-700 font-medium py-2 px-4 rounded-full hover:bg-indigo-200">
          Contact Us Now
        </button>
      </div>
    </div>
  );
};

export default HappyClient;
