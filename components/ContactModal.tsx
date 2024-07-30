"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const ContactModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <>
            <div>
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                    onClick={openModal}
                >
                    Open Consultation Form
                </button>

                {isOpen && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                        <div className="bg-white rounded-lg w-11/12 md:w-1/2 lg:w-1/3 flex flex-col md:flex-row">
                            <div className="hidden md:block md:w-1/2">
                                <Image
                                    src="/path/to/your/image.jpg"
                                    alt="Customer Support"
                                    className="w-full h-full object-cover rounded-l-lg"
                                    width={500} // Adjust width as needed
                                    height={500} // Adjust height as needed
                                    layout="responsive" // Maintains aspect ratio
                                />
                            </div>
                            <div className="p-6 md:w-1/2">
                                <button
                                    className="float-right text-gray-500"
                                    onClick={closeModal}
                                >
                                    &times;
                                </button>
                                <div className="mt-4">
                                    <div className="flex justify-between border-b pb-2 mb-4">
                                        <h2 className="text-xl font-semibold text-gray-800">Questions</h2>
                                        <h2 className="text-xl font-semibold text-gray-400">Information</h2>
                                    </div>
                                    <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
                                    <p className="mb-4 text-gray-600">Any questions or remarks? We&apos;ll get back to you within 24 hours.</p>
                                    <form className="space-y-4">
                                        <div className="relative">
                                            <input 
                                                type="text" 
                                                placeholder="Full Name" 
                                                className="mt-1 block w-full p-3 border border-gray-300 rounded-md placeholder-gray-500"
                                            />
                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                                <i className="fas fa-user text-gray-400"></i>
                                            </span>
                                        </div>
                                        <div className="relative">
                                            <input 
                                                type="email" 
                                                placeholder="Email Address" 
                                                className="mt-1 block w-full p-3 border border-gray-300 rounded-md placeholder-gray-500"
                                            />
                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                                <i className="fas fa-envelope text-gray-400"></i>
                                            </span>
                                        </div>
                                        <div className="relative">
                                            <input 
                                                type="text" 
                                                placeholder="Subject" 
                                                className="mt-1 block w-full p-3 border border-gray-300 rounded-md placeholder-gray-500"
                                            />
                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                                <i className="fas fa-tag text-gray-400"></i>
                                            </span>
                                        </div>
                                        <div className="relative">
                                            <textarea 
                                                placeholder="Enter your message" 
                                                className="mt-1 block w-full p-3 border border-gray-300 rounded-md placeholder-gray-500"
                                            ></textarea>
                                        </div>
                                        <button type="submit" className="w-full px-4 py-2 bg-purple-600 text-white rounded-md">Send Message</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default ContactModal;
