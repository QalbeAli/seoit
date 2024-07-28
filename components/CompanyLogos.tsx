import React from "react";
import { FaAirbnb, FaAws, FaShopify, FaConfluence, FaLinkedin } from "react-icons/fa";

const CompanyLogos = () => {
  return (
    <div className="bg-white py-8 ">
      <div className="container mx-auto flex justify-around items-center">
        <div className="w-1/5 p-2 flex justify-center">
          <FaAirbnb size={50} className="text-gray-500" />
        </div>
        <div className="w-1/5 p-2 flex justify-center">
          <FaAws size={50} className="text-gray-500" />
        </div>
        <div className="w-1/5 p-2 flex justify-center">
          <FaShopify size={50} className="text-gray-500" />
        </div>
        <div className="w-1/5 p-2 flex justify-center">
          <FaConfluence size={50} className="text-gray-500" />
        </div>
        <div className="w-1/5 p-2 flex justify-center">
          <FaLinkedin size={50} className="text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos;
