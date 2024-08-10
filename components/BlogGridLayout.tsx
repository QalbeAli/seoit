import React from 'react';
import BlogFilter from '../components/BlogFilter';
import BlogCard from '../components/BlogCard';

const posts = [
  {
    title: 'Post Title 1',
    imageUrl: '/path-to-image1.jpg',
    description: 'Brief description of the first post.',
  },
  {
    title: 'Post Title 2',
    imageUrl: '/path-to-image2.jpg',
    description: 'Brief description of the second post.',
  },
  {
    title: 'Post Title 3',
    imageUrl: '/path-to-image3.jpg',
    description: 'Brief description of the third post.',
  },
  // Add more posts as needed
];

const BlogGridLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <BlogFilter />
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <BlogCard
            key={index}
            title={post.title}
            imageUrl={post.imageUrl}
            description={post.description}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogGridLayout;
