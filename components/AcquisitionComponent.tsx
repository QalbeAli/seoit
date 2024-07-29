import React from "react";
import Image from "next/image";

const AcquisitionComponent = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-around px-6">
        <div className="w-auto  mb-8 md:mb-0">
          <div className="text-2xl text-center md:text-3xl lg:text-4xl  md:text-left font-bold text-gray-900 mb-4">
            We Drive <br /> Acquisition for <br /> Growing Brands
          </div>
          <p className="text-gray-600 text-center md:text-left mb-8">
            Hassle-free platform and specialists to help <br /> you with your marketing
            campaigns.
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-600 text-white py-3 px-8 rounded-full">
              Signup Now
            </button>
            <button className="bg-blue-200 text-blue-600 py-3 px-8 rounded-full">
              Schedule Demo
            </button>
          </div>
        </div>
        <div className="w-auto relative flex justify-center">
          <div className="">
            <Image
              src="/acq.webp" // Ensure the path is correct according to your project structure
              alt="Acquisition"
              layout="responsive"
              width={400}
              height={400}
              className="w-full h-auto"
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-full hidden md:flex items-center justify-center">
            <div className=" flex items-center justify-center bg-white shadow-lg  rounded-lg p-2 md:p-4 lg:p-6">
              <div className="text-center">
                <p className="text-sm md:text-lg lg:text-2xl font-semibold">
                  72%
                </p>
                <p className="text-gray-600">Goals Achieved</p>
              </div>
            </div>
            <div className="absolute sm:hidden  md:flex bottom-0 left-0 flex items-center justify-center bg-white shadow-lg rounded-lg p-2 md:p-4 lg:p-6 mt-4">
              <div className="text-center">
                <p className="text-sm md:text-lg lg:text-2xl font-semibold">
                  340,230
                </p>
                <p className="text-gray-600">Goals Achieved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcquisitionComponent;
