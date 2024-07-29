// components/LeadGeneration.tsx

import Image from "next/image";

const LeadGeneration = () => {
  return (
    <div className="p-8  flex items-center justify-center">
      <div className="max-w-6xl rounded-lg  overflow-hidden flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 p-8 flex flex-col space-y-10 justify-center">
          <h4 className="text-gray-500 text-center md:text-left font-bold text-xl uppercase tracking-wide">
            OVER 15,000+ LEADS GENERATED
          </h4>
          <h2 className="text-3xl font-bold text-gray-900 mt-2 leading-10 text-center md:text-left">
            Get <span className="text-blue-600">More Conversions</span> With Our
            Services
          </h2>
          <p className="mt-4 leading-8 text-gray-600 text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur magna aliqua. Eaque ipsa
            quae ab illo inventore veritatis. Nemo enim ipsam voluptatem
            voluptas. At vero eos et accusamus et iusto odio dignissimos ducimus
            qui blanditiis praesentium.
          </p>
          <div className="flex justify-center    ">
            <button className="mt-3  px-6 py-2 bg-orange-100 text-orange-600 rounded-full font-normal hover:bg-orange-200 self-start">
              Get Started
            </button>
          </div>
        </div>
        <div className="w-full lg:w-2/5 relative">
          <div className="relative rounded-2xl w-full h-full">
            <Image
              src="/lead.webp" // Ensure this path is correct
              alt="Lead Generation"
              layout="responsive"
              width={700}
              height={475}
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadGeneration;
