import React from 'react';
import Image from 'next/image';

const projects = [
  {
    src: '/project1.png', // Update the path to your images
    alt: 'IntoBlinds',
    title: 'BUSINESS PROPOSAL',
  },
  {
    src: '/project2.png',
    alt: 'Josh Rayson Finance',
    title: 'Business Finance Specialist',
  },
  {
    src: '/project3.png',
    alt: 'Romaac Group',
    title: 'Digital Marketing Campaign',
  },
];

const OurProjects = () => {
  return (
    <div className="p-8 bg-white">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold">OUR PROJECTS</h1>
          <p className="text-gray-600 mt-2">
            Every One Of Us Loves Something Different. So, Explore The World Through The Lens Of Our Visual Capabilities And Find What You Love.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap md:flex-nowrap justify-center space-x-0 lg:space-x-8 space-y-8 lg:space-y-0">
          {projects.map((project, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <div className="relative overflow-hidden rounded-lg">
                  <Image 
                    src={project.src} 
                    alt={project.alt} 
                    layout="responsive" 
                    width={700} 
                    height={475} 
                    className="rounded-lg transform transition duration-300 ease-in-out hover:scale-105 hover:brightness-75" 
                  />
                </div>
                <div className="text-center mt-4 font-normal text-md">{project.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProjects;
