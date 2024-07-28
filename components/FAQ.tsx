"use client"
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon, PhoneIcon, DocumentTextIcon, HeartIcon } from '@heroicons/react/20/solid';

export default function FAQ() {
  const faqs = [
    {
      question: 'Which license do I need to use an item in a commercial?',
      answer: 'As an Internet marketing strategy, SEO considers how search engines work, the computer-programmed algorithms that dictate search engine behavior.',
      icon: PhoneIcon,
    },
    {
      question: 'What do you mean by item and end product in license terms?',
      answer: 'Explanation about items and end products in license terms.',
      icon: DocumentTextIcon,
    },
    {
      question: 'What are some examples of permitted end products?',
      answer: 'Examples of permitted end products.',
      icon: HeartIcon,
    },
    {
      question: 'Are item packs/bundles still limited to a single-end product?',
      answer: 'Information about item packs and bundles.',
      icon: PhoneIcon,
    },
  ];

  return (
    <div className="w-full px-4 pt-16">
      <div className="mx-auto w-full max-w-2xl rounded-2xl bg-white p-2">
        {faqs.map((faq, index) => (
          <Disclosure key={index} as="div" className="mt-5">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white shadow-lg px-4 py-5 font-bold text-left text-md  text-black hover:bg-purple-200 ">
                  <div className="flex items-center">
                    <faq.icon className="w-5 h-5 mr-2 text-blue-500" />
                    <span>{faq.question}</span>
                  </div>
                  <ChevronUpIcon
                    className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                  {faq.answer}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
}
