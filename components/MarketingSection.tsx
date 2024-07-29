import React from 'react';
import Image from 'next/image';
import shoppingImage from '../public/path-to-your-image.png'; // Update the path to your image

const MarketingSection = () => {
  return (
    <div className="bg-white py-8">
      <div className="container mx-auto flex justify-around items-center flex-wrap">
        <div className="w-full lg:w-1/3 p-4 text-center md:text-right">
          <div className="space-y-6">
            <div className='space-y-4 '>
              <h3 className="font-bold text-xl">Targeted SEO</h3>
              <p>As an Internet marketing strategy, SEO <br /> considers tempor incididunt ut labore et.</p>
            </div>
            <div className='space-y-4'>
              <h3 className="font-bold text-xl">Marketing outline</h3>
              <p>Social media marketing is the use of social <br /> media tempor incididunt ut labore et.</p>
            </div>
            <div className='space-y-4'>
              <h3 className="font-bold text-xl">Content Writing</h3>
              <p>Content marketing is a form of marketing <br /> focused tempor incididunt ut labore et.</p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 p-4 flex justify-center">
          <div className="relative h-96 w-5/6 shadow-lg">
            <Image src="/market.webp" alt="Shopping Online" layout="fill" objectFit="cover" className="rounded-lg shadow-lg" />
          </div>
        </div>
        <div className="w-full lg:w-1/3 p-4 text-center md:text-left">
          <div className="space-y-6">
            <div className='space-y-4'>
              <h3 className="font-bold text-xl">Market Analysis</h3>
              <p>Content marketing is a form of marketing <br /> focused tempor incididunt ut labore et.</p>
            </div>
            <div className='space-y-4'>
              <h3 className="font-bold text-xl">Innovative Solutions</h3>
              <p>Content marketing is a form of marketing <br /> focused tempor incididunt ut labore et.</p>
            </div>
            <div className='space-y-4'>
              <h3 className="font-bold text-xl">Optimal Choice</h3>
              <p>Content marketing is a form of marketing <br /> focused tempor incididunt ut labore et.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingSection;
