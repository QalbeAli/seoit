import Image from "next/image";
import React from "react";

const GridContact = () => {
  return (
    <div className="bg-gray-100 flex items-center mt-60  justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex items-center space-x-4">
          <Image
            width={30}
            height={40}
            src=""
            alt="Service"
            className="rounded-lg w-1/2"
          />
          <div>
            <h3 className="text-xl font-bold">
              Marketing solutions for IT business
            </h3>
            <p className="text-gray-600">
              As an Internet marketing strategy, SEO considers how search
              engines work, the computer-programmed algorithms that dictate
              search engine behavior.
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Image
            width={30}
            height={40}
            src=""
            alt="Service"
            className="rounded-lg w-1/2"
          />
          <div>
            <h3 className="text-xl font-bold">
              Application design & development
            </h3>
            <p className="text-gray-600">
              Social media marketing is the use of social media platforms and
              websites to promote a product or service and is becoming more
              popular.
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Image
            width={30}
            height={40}
            src=""
            alt="Service"
            className="rounded-lg w-1/2"
          />
          <div>
            <h3 className="text-xl font-bold">Customer experience Strategy</h3>
            <p className="text-gray-600">
              Content marketing is a form of marketing focused on creating,
              publishing, and distributing content for a targeted audience
              online.
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Image
            width={30}
            height={40}
            src=""
            alt="Service"
            className="rounded-lg w-1/2"
          />
          <div>
            <h3 className="text-xl font-bold">
              Branding & marketing solutions
            </h3>
            <p className="text-gray-600">
              Social media marketing is the use of social media platforms and
              websites to promote a product or service and is becoming more
              popular.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridContact;
