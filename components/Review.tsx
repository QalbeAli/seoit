"use client"
import React, { useState } from 'react';
import CustomerReview from './CustomerReview';

const reviews = [
  {
    imageSrc: 'https://via.placeholder.com/150',
    review: 'Excellent customer service, You guys are the best!',
    name: 'John Doe',
    title: 'Marketing Manager',
    companyLogo: 'https://via.placeholder.com/50'
  },
  {
    imageSrc: 'https://via.placeholder.com/150',
    review: 'Great experience, will recommend to others!',
    name: 'Jane Smith',
    title: 'Product Manager',
    companyLogo: 'https://via.placeholder.com/50'
  },
  {
    imageSrc: 'https://via.placeholder.com/150',
    review: 'Top-notch service and support!',
    name: 'Bob Johnson',
    title: 'Sales Director',
    companyLogo: 'https://via.placeholder.com/50'
  }
];

const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="flex flex-col items-center">
      <CustomerReview {...reviews[currentIndex]} />
      <div className="flex space-x-2 mt-4">
        <button
          className={`w-3 h-3 rounded-full ${currentIndex === 0 ? 'bg-blue-500' : 'bg-gray-300'}`}
          onClick={() => setCurrentIndex(0)}
        />
        <button
          className={`w-3 h-3 rounded-full ${currentIndex === 1 ? 'bg-blue-500' : 'bg-gray-300'}`}
          onClick={() => setCurrentIndex(1)}
        />
        <button
          className={`w-3 h-3 rounded-full ${currentIndex === 2 ? 'bg-blue-500' : 'bg-gray-300'}`}
          onClick={() => setCurrentIndex(2)}
        />
      </div>
      <div className="flex space-x-4 mt-4">
        <button onClick={prevReview} className="px-4 py-2 bg-gray-300 rounded">Previous</button>
        <button onClick={nextReview} className="px-4 py-2 bg-gray-300 rounded">Next</button>
      </div>
    </div>
  );
};

export default Reviews;
