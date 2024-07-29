import React from 'react';

const InTouch = () => {
  return (
    <section className="bg-white py-12 md:py-24">
      <div className="container mx-auto text-center">
        <h2 className="text-xl md:text-2xl font-medium text-gray-600">Let's get in touch</h2>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 my-4">Ready to get started?</h1>
        <p className="text-blue-600 text-lg md:text-xl my-4">
          Get in touch to grow your business and increase sales.
        </p>
        <p className="text-gray-600 mb-8">
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!
        </p>
        <button className="bg-orange-100 text-orange-600 font-medium px-6 py-3 rounded-full hover:bg-orange-200">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default InTouch;
