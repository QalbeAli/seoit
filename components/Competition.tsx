import React from "react";
import { FaChartPie, FaHeadset, FaInfinity, FaLightbulb } from "react-icons/fa";

const Competition = () => {
  return (
    <>
      <div className="flex flex-col mt-20 justify-center items-center">
        <div className="space-y-6">
          <div className="font-bold text-xl text-blue-600 text-center ">
            Get access to unlimited resources
          </div>
          <div className="mb-10 font-bold text-[#2D3748] text-center text-3xl">
            Why Choose Us Over Competition?{" "}
          </div>
        </div>
        <div>
          <div className="p-8 bg-white flex items-center justify-center">
            <div className="max-w-6xl grid grid-cols-1 sm:grid-cols-2 gap-8 bg-gray-50 rounded-xl p-8 shadow-lg">
              <div className=" border-b sm:border-b-0 sm:border-r border-gray-200 pb-6 sm:pb-0 sm:pr-6">
                <div className="flex items-center space-x-3 ">
                  <div className="  bg-gray-200 rounded-md text-blue-500">
                    <FaChartPie className="w-12 h-12 p-1 " />
                  </div>
                  <h3 className="text-lg font-semibold text-[#718096]">
                    Advanced Analytics
                  </h3>
                </div>
                <div className="pt-4">
                  <p className="text-gray-600">
                    At vero eos et accusamus et. Tempor incididunt ut labore et
                    dolore magna aliqua consectetur magna aliqua.
                  </p>
                </div>
              </div>
              <div className="  border-gray-200 pb-6 sm:pb-0 sm:pr-6">
                <div className="flex items-center space-x-3 ">
                  <div className="  bg-gray-200 rounded-md text-blue-500">
                    <FaHeadset className="w-12 h-12 p-1 " />
                  </div>
                  <h3 className="text-lg font-semibold text-[#718096]">
                  Lifetime Access
                  </h3>
                </div>
                <div className="pt-4">
                  <p className="text-gray-600">
                    At vero eos et accusamus et. Tempor incididunt ut labore et
                    dolore magna aliqua consectetur magna aliqua.
                  </p>
                </div>
              </div>

              <div className="flex items-center border-b sm:border-b-0 sm:border-r border-gray-200 pt-6 sm:pt-0 sm:pb-6 sm:pr-6">
                <div className="  border-gray-200 pb-6 sm:pb-0 sm:pr-6">
                  <div className="flex items-center space-x-3 ">
                    <div className="  bg-gray-200 rounded-md text-blue-500">
                      <FaInfinity className="w-12 h-12 p-1 " />
                    </div>
                    <h3 className="text-lg font-semibold text-[#718096]">
                    Expert Support
                    </h3>
                  </div>
                  <div className="pt-4">
                    <p className="text-[#718096]">
                      At vero eos et accusamus et. Tempor incididunt ut labore
                      et dolore magna aliqua consectetur magna aliqua.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center pt-6 sm:pt-0 sm:pb-6 sm:pr-6">
                <div className="  border-gray-200 pb-6 sm:pb-0 sm:pr-6">
                  <div className="flex items-center space-x-3 ">
                    <div className="  bg-gray-200 rounded-md text-blue-500">
                      <FaLightbulb className="w-12 h-12 p-1 " />
                    </div>
                    <h3 className="text-lg font-semibold text-[#718096]">
                    Creative Solutions
                    </h3>
                  </div>
                  <div className="pt-4">
                    <p className="text-gray-600">
                      At vero eos et accusamus et. Tempor incididunt ut labore
                      et dolore magna aliqua consectetur magna aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Competition;
