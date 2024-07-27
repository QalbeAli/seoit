import GridContact from "@/components/GridContact";
import HappyClient from "@/components/HappyClient";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <>
      {/* <div className="bg-purple-600 relative mb-20 flex items-center justify-center h-screen">
        <div className="text-center text-white">
          <h2 className="text-xl font-semibold text-purple-200">
            Our Services
          </h2>
          <h1 className="text-4xl font-bold mt-2">
            We change the way you build Gatsby sites.
          </h1>
          <p className="text-lg mt-4">
            Flexible blocks with unlimited variants.
          </p>
        </div>

        <div className="bg-white  absolute -translate-x-1/2 translate-y-1/2 -bottom-20 left-1/2 rounded-3xl shadow-lg p-8 flex items-center space-x-8 max-w-4xl mx-auto">
          <Image
            width={30}
            height={40}
            src=""
            alt="Service"
            className="rounded-lg w-1/2"
          />
          <div>
            <h3 className="text-2xl font-bold mb-4">Business Analysis</h3>
            <p className="text-gray-600 mb-6">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium.
            </p>
            <h3 className="text-2xl font-bold mb-4">Consulting & Marketing</h3>
            <p className="text-gray-600 mb-6">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium.
            </p>
            <h3 className="text-2xl font-bold mb-4">Strategic Planning</h3>
            <p className="text-gray-600 mb-6">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium.
            </p>
            <h3 className="text-2xl font-bold mb-4">Design & Development</h3>
            <p className="text-gray-600 mb-6">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium.
            </p>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-full mt-4">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div> */}

      <div className="relative h-[800px] w-full flex-col flex items-center justify-center">
        <div className="mx-20 z-10">
          <div className=" bg-red-400 p-10 rounded shadow-lg">some othre </div>
        </div>
        <div className="absolute inset-0 bg-blue-500"></div>
        <div className="absolute inset-0 top-1/2 bg-gray-200"></div>
        <div className="relative  flex flex-col items-center justify-center">
          <h1 className="absolute text-4xl font-bold text-white ">
            Centered Text on Main Div
          </h1>
          <div className="relative z-10 w-[1000px] h-[500px] flex items-center justify-center bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold">Centered Text</h1>
          </div>
        </div>
      </div>
      <GridContact />

      <HappyClient />
    </>
  );
};

export default Services;
