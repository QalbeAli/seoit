import React from 'react';

interface BlogCardProps {
  title: string;
  imageUrl: string;
  description: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, imageUrl, description }) => {
  return (
    <div className="bg-blue-500 rounded-lg overflow-hidden">
      <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className="p-4">
        <h3 className="text-white text-xl font-bold">{title}</h3>
        <p className="text-white mt-2">{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
