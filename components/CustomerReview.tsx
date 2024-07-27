import Image from "next/image";
import React from "react";

interface CustomerReviewProps {
  imageSrc: string;
  review: string;
  name: string;
  title: string;
  companyLogo: string;
}

const CustomerReview: React.FC<CustomerReviewProps> = ({
  imageSrc,
  review,
  name,
  title,
  companyLogo,
}) => {
  return (
    <>
      <main>
        <div className="  flex flex-col items-center md:flex-row p-6 bg-white rounded-lg shadow-md">
          <div className="w-60 h-80 bg-white rounded-lg shadow-md flex items-center justify-center">
            <img
              className="w-52 h-72 rounded-xl object-cover"
              src={imageSrc}
              alt={name}
            />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-2">Customer Story</h3>
            <p className="text-xl font-semibold mb-4">{review}</p>
            <p className="text-gray-600 mb-4">
              Sed commodo, est quis maximus fermentum, massa ipsum euismod
              neque, in varius risus tellus quis lacus. Sed ac bibendum odio.
            </p>
            <div className="flex items-center">
              <img
                className="w-6 h-6 mr-2"
                src={companyLogo}
                alt={`${name}'s company logo`}
              />
              <p className="text-gray-800">{name}</p>
              <p className="text-gray-600"> - {title}</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CustomerReview;
