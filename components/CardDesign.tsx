import React from "react";
import { IconType } from 'react-icons';
type CardProps = {
    icon: IconType;
    title: string;
    description: string;
  };

const CardDesign = ({ icon:Icon, title, description }: CardProps) => {
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-xl text-center ">
        <div className="mb-4">
        <Icon className="w-12 h-12 mx-auto text-[#EDF2F7]" />
        </div>
        <h3 className="text-xl font-bold text-blue-400">{title}</h3>
        <p className="text-gray-600 mt-2 font-normal">{description}</p>
      </div>
    </>
  );
};

export default CardDesign;
