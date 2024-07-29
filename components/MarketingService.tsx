import Image from "next/image";
import { FaChartLine, FaEnvelope } from "react-icons/fa";

const MarketingService = () => {
  return (
    <div className="p-8 bg-white flex items-center justify-center">
      <div className="max-w-6xl flex justify-center items-center flex-col lg:flex-row">
        <div className=" w-full lg:w-2/5  p-8 ">
          <Image
            src="/marketing.webp" // Ensure this path is correct
            alt="Marketing Service"
            height={10}
            width={600}
            layout="responsive"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
        <div className="w-full lg:w-1/2 mt-8 space-y-5 lg:mt-0">
          <h4 className="text-gray-500 uppercase text-center lg:text-left tracking-wide font-bold text-xl">
            Grow Your Business
          </h4>
          <h2 className="text-3xl font-bold text-center lg:text-left text-gray-900 mt-2">
            Best Marketing Service for <br />{" "}
            <span className="text-blue-600">Technological Era</span>
          </h2>
          <p className="mt-4 text-gray-600 text-center lg:text-left">
            Target your audience based on their interests. Lorem ipsum dolor sit
            amet, consectetur magna.
          </p>
          <div className="mt-8">
            <div className="flex items-center mb-4">
              <FaChartLine className="w-10 h-10 bg-orange-100 rounded-md p-1 text-orange-500" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Automatic interest detection
                </h3>
                <p className="text-gray-600">
                  Tempor incididunt ut labore et dolore magna aliqua consectetur
                  magna.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="w-10 h-10 bg-blue-100 rounded-md p-1 text-blue-500" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Daily email reports
                </h3>
                <p className="text-gray-600">
                  Tempor incididunt ut labore et dolore magna aliqua consectetur
                  magna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingService;
