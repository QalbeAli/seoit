"use client"
import React, { useState } from 'react';

const PricingCard: React.FC = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section className="flex flex-col items-center justify-center py-20 bg-gray-50">
      <div className="mb-8 flex items-center w-full max-w-md p-4">
        <button
          className={`flex-1 px-6 py-3 rounded-l-full ${isMonthly ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}
          onClick={() => setIsMonthly(true)}
        >
          Monthly
        </button>
        <button
          className={`flex-1 px-6 py-3 rounded-r-full ${!isMonthly ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}
          onClick={() => setIsMonthly(false)}
        >
          Annually (Save 10%)
        </button>
      </div>


      <div className="flex flex-wrap justify-center space-x-4">
        {/* Starter Plan */}
        <div className="p-8 bg-white rounded-lg shadow-lg w-80 flex flex-col items-center">
          <h3 className="text-2xl font-semibold text-gray-700">Starter</h3>
          <p className="mt-2 text-4xl font-bold text-gray-900">${isMonthly ? '29' : '261'}/month</p>
          <p className="mt-2 text-gray-500">For up to 10 customers and 1 agent</p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>✔️ 10 Customers</li>
            <li>✔️ 1 Agent</li>
            <li>✔️ Deal pipeline</li>
            <li>✔️ Meeting scheduling</li>
          </ul>
          <button className="px-6 py-3 mt-auto w-full text-white bg-purple-600 rounded-full">Choose Starter</button>
        </div>

        {/* Professional Plan */}
        <div className="p-8 bg-gray-800 rounded-lg shadow-lg w-80 flex flex-col items-center text-white">
          <h3 className="text-2xl font-semibold">Professional</h3>
          <p className="mt-2 text-4xl font-bold">${isMonthly ? '49' : '441'}/month</p>
          <p className="mt-2">For up to 100 customers and 10 agents</p>
          <ul className="mt-4 space-y-2">
            <li>✔️ 100 Customers</li>
            <li>✔️ 10 Agents</li>
            <li>✔️ Sales analytics</li>
            <li>✔️ Smart send times</li>
            <li>✔️ 1:1 video creation</li>
            <li>✔️ Single sign-on</li>
          </ul>
          <button className="px-6 py-3 mt-8 w-full text-white bg-purple-600 rounded-full">Choose Organization</button>
        </div>

        {/* Organization Plan */}
        <div className="p-8 bg-white rounded-lg shadow-lg w-80 flex flex-col items-center">
          <h3 className="text-2xl font-semibold text-gray-700">Organization</h3>
          <p className="mt-2 text-4xl font-bold text-gray-900">${isMonthly ? '99' : '891'}/month</p>
          <p className="mt-2 text-gray-500">Unlimited customers and agents</p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>✔️ Unlimited Customers</li>
            <li>✔️ Unlimited Agents</li>
            <li>✔️ Predictive lead scoring</li>
            <li>✔️ User roles</li>
          </ul>
          <button className="px-6 py-3 mt-auto w-full text-white bg-purple-600 rounded-full">Choose Organization</button>
        </div>
      </div>
    </section>
  );
};

export default PricingCard;