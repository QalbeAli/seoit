import Marquee from "react-fast-marquee";
import Link from "next/link";
import { useSpring, animated } from 'react-spring';
import { motion } from 'framer-motion';
const MainHero = () => {
  
  const images = [
    {
      src: "https://picsum.photos/300/200?random=1",
      link: "https://google.com",
    },
    {
      src: "https://picsum.photos/300/200?random=2",
      link: "https://google.com",
    },
    {
      src: "https://picsum.photos/300/200?random=3",
      link: "https://google.com",
    },
    {
      src: "https://picsum.photos/300/200?random=4",
      link: "https://google.com",
    },
    {
      src: "https://picsum.photos/300/200?random=5",
      link: "https://google.com",
    },
    {
      src: "https://picsum.photos/300/200?random=6",
      link: "https://google.com",
    },
    {
      src: "https://picsum.photos/300/200?random=7",
      link: "https://google.com",
    },
    {
      src: "https://picsum.photos/300/200?random=8",
      link: "https://google.com",
    },
    {
      src: "https://picsum.photos/300/200?random=9",
      link: "https://google.com",
    },
    {
      src: "https://picsum.photos/300/200?random=10",
      link: "https://google.com",
    },
    {
      src: "https://picsum.photos/300/200?random=11",
      link: "https://google.com",
    },
    {
      src: "https://picsum.photos/300/200?random=12",
      link: "https://google.com",
    },
  ];

  return (
    <div className="flex flex-col justify-center bg-black text-white py-10">
      <div className="flex flex-col md:flex-row items-center container mx-auto px-4">
        {/* Left Section */}
        <div className="w-full text-center md:text-left md:w-1/2">
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold sm:leading-snug md:leading-loose mb-6">
            All your <span className="text-[#d6fc5b]">SEO</span> <br />
            deliverables in <br /> one platform.
          </div>

          <p className="text-sm sm:text-md md:text-lg mb-6">
            202,598 orders delivered since 2012
          </p>
          <ul className="mb-6 space-y-2 text-[#939393] text-xs sm:text-sm md:text-base">
            <li>✅ White label SEO services with superfast turnarounds</li>
            <li>✅ Unrivaled quality for SEO agencies and teams</li>
            <li>✅ ROI & margins designed for SEO resellers</li>
          </ul>
          <div className="flex justify-center md:justify-start">
            <div className="bg-[#383643] max-w-xs sm:max-w-sm mb-4 p-2.5 rounded-md text-center text-xs md:text-sm">
              We are rated 4.8 based on 1359 reviews
            </div>
          </div>
          <div className="flex space-x-4 mt-6 md:mt-10 justify-center md:justify-start items-center">
            <button className="bg-[#d6fc5b] text-center text-black px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 rounded-full font-bold text-sm sm:text-base md:text-lg">
              Create an Account
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 relative overflow-hidden flex justify-center items-center h-[315px] m-[3rem] sm:m-0 sm:h-full">
         <div className="absolute inset-0 z-10 bg-transparent"/>
          <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-black to-transparent z-10"></div>
          <Marquee
            direction="up"
            speed={60}
            gradient={false}
            className="h-full"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-xs sm:max-w-md md:max-w-2xl">
              {images.map((image, idx) => (
                <Link
                  href={image.link}
                  key={idx}
                  target="_blank"
                  className="relative"
                >
                  <div className="relative h-28 sm:h-32 md:h-40 bg-gray-800 flex items-center justify-center overflow-hidden border-4 border-[#d6fc5b] rounded-lg">
                    <img
                      src={image.src}
                      alt={`Random Image ${idx + 1}`}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </Marquee>
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black to-transparent z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default MainHero;
