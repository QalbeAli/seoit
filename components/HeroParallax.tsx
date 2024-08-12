"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex rounded-lg  flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

const handleClick = () => {
  console.log("Hello World");
};

export const Header = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 w-full  ">
      <div className="w-full text-center md:text-left md:w-1/2">
        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold sm:leading-snug md:leading-loose mb-6">
          All your <span className="text-[#d6fc5b]">SEO</span> <br />
          deliverables in <br /> one platform.
        </div>

        <p className="text-sm sm:text-md md:text-lg mb-6">
          202,598 orders delivered since 2012
        </p>
        <ul className="mb-6 space-y-2 text-dark text-xs sm:text-sm md:text-base">
          <li>✅ White label SEO services with superfast turnarounds</li>
          <li>✅ Unrivaled quality for SEO agencies and teams</li>
          <li>✅ ROI & margins designed for SEO resellers</li>
        </ul>
        <div className="flex justify-center md:justify-start">
          <div className="bg-[#28282c] max-w-xs sm:max-w-sm mb-4 p-2.5 text-white rounded-md text-center text-xs md:text-sm">
            We are rated 4.8 based on 1359 reviews
          </div>
        </div>
        <div className="flex space-x-4 mt-6 md:mt-10 justify-center md:justify-start items-center">
          <button
            onClick={handleClick}
            className="bg-[#d6fc5b] text-center text-black px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 rounded-full font-bold text-sm sm:text-base md:text-lg"
          >
            Get Free Business & Website Audit
          </button>
        </div>
      </div>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product  h-96 w-[30rem] relative flex-shrink-0"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl "
        target="_blank"
      >
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover rounded-xl object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
