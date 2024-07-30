import React from "react";
import Image from "next/image";

const BusinessServices = () => {
  return (
    <div className="bg-gray-100 flex justify-center items-center min-h-screen p-4">
      <div className="bg-white rounded-2xl p-10 shadow-lg flex flex-col md:flex-row overflow-hidden transform md:translate-y-[-40%] max-w-5xl mx-auto">
        <div className="md:w-1/2 flex items-center justify-center p-4">
          <Image
            src="/business.webp"
            alt="Business Analysis"
            layout="responsive"
            width={700}
            height={500}
            className="rounded-xl"
          />
        </div>
        <div className="md:w-1/2 p-6 flex flex-col justify-center">
          <div className="mb-4">
            <h2 className="text-2xl font-bold mb-2">Business Analysis</h2>
            <p className="text-gray-600">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.
            </p>
          </div>
          <div className="mb-4">
            <h2 className="text-2xl font-bold mb-2">Consulting & Marketing</h2>
            <p className="text-gray-600">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.
            </p>
          </div>
          <div className="mb-4">
            <h2 className="text-2xl font-bold mb-2">Strategic Planning</h2>
            <p className="text-gray-600">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.
            </p>
          </div>
          <div className="mb-4">
            <h2 className="text-2xl font-bold mb-2">Design & Development</h2>
            <p className="text-gray-600">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.
            </p>
          </div>
          <button className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessServices;
